import { useCallback, useEffect, useState } from 'react';
import type { AsyncState } from '../types/async';

interface UseAsyncDataResult<T> {
  state: AsyncState<T>;
  reload: () => void;
}

export function useAsyncData<T>(load: () => Promise<T>): UseAsyncDataResult<T> {
  const [reloadCount, setReloadCount] = useState(0);

  const [state, setState] = useState<AsyncState<T>>({
    status: 'idle',
    data: null,
    error: null,
  });

  const reload = useCallback(() => {
    setState({
      status: 'loading',
      data: null,
      error: null,
    });

    setReloadCount((count) => count + 1);
  }, []);

  useEffect(() => {
    let isActive = true;

    void load()
      .then((data) => {
        if (!isActive) {
          return;
        }

        setState({
          status: 'success',
          data,
          error: null,
        });
      })
      .catch((error: unknown) => {
        if (!isActive) {
          return;
        }

        setState({
          status: 'error',
          data: null,
          error: error instanceof Error ? error : new Error('内容加载失败。'),
        });
      });

    return () => {
      isActive = false;
    };
  }, [load, reloadCount]);

  return {
    state,
    reload,
  };
}
