import type { ReactNode } from 'react';

type StatePanelVariant = 'loading' | 'empty' | 'error';

interface StatePanelProps {
  variant: StatePanelVariant;
  title: string;
  description: string;
  action?: ReactNode;
}

export function StatePanel({ variant, title, description, action }: StatePanelProps) {
  return (
    <div
      className={`state-panel state-panel--${variant}`}
      role={variant === 'error' ? 'alert' : 'status'}
      aria-live="polite"
    >
      <p className="state-panel__label">
        {variant === 'loading' ? '正在加载' : variant === 'empty' ? '暂无内容' : '加载失败'}
      </p>
      <h3>{title}</h3>
      <p>{description}</p>
      {action}
    </div>
  );
}
