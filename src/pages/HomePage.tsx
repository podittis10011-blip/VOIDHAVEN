// 主页页面
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { CompetitionCard } from '../components/CompetitionCard';
import { StatePanel } from '../components/StatePanel';
import { TeamCard } from '../components/TeamCard';
import { useAsyncData } from '../hooks/useAsyncData';
import { competitionService, teamService } from '../services';

export function HomePage() {
  const loadCompetitions = useCallback(() => {
  return competitionService.list({ limit: 3 });
  }, []);

  const loadTeams = useCallback(() => {
    return teamService.list({
      status: 'OPEN',
      limit: 3,
    });
  }, []);

  const {
    state: competitionState,
    reload: reloadCompetitions,
  } = useAsyncData(loadCompetitions);

  const { state: teamState, reload: reloadTeams } = useAsyncData(loadTeams);

  return (
    <section className="page page--centered" aria-labelledby="home-title">
      <p className="eyebrow">VOIDHAVEN · V0</p>
      <h1 id="home-title">
        求索袋底洞
        <span>VOIDHAVEN</span>
      </h1>
      <p className="page-intro">
        为探索者连接竞赛、项目与协作机会。当前仅完成工程骨架，下一阶段将接入前端 Mock Data
        Contract。
      </p>
    </section>
  );
}
