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

  const { state: competitionState, reload: reloadCompetitions } = useAsyncData(loadCompetitions);

  const { state: teamState, reload: reloadTeams } = useAsyncData(loadTeams);

  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <p className="eyebrow">VOIDHAVEN · V0</p>
        <h1 id="home-title">A haven for seekers.</h1>
        <p className="home-hero__tagline">找比赛 · 找队友 · 找机会</p>
        <p className="home-hero__intro">汇集公开竞赛信息与组队需求，让探索更容易发生。</p>

        <div className="home-hero__actions">
          <Link className="button-link" to="/competitions">
            浏览竞赛
          </Link>
          <Link className="button-link button-link--secondary" to="/teams">
            寻找队伍
          </Link>
        </div>
      </section>

      <section className="home-data-grid" aria-label="首页主要信息">
        <section className="home-data-section" aria-labelledby="recent-competitions">
          <div className="section-heading">
            <div>
              <p className="eyebrow">DISCOVER</p>
              <h2 id="recent-competitions">近期竞赛</h2>
            </div>
            <Link className="text-link" to="/competitions">
              查看全部竞赛
            </Link>
          </div>

          <div className="content-list">
            {competitionState.status === 'loading' || competitionState.status === 'idle' ? (
              <StatePanel
                variant="loading"
                title="正在加载近期竞赛"
                description="竞赛信息即将显示在这里。"
              />
            ) : null}

            {competitionState.status === 'error' ? (
              <StatePanel
                variant="error"
                title="近期竞赛加载失败"
                description={competitionState.error.message}
                action={
                  <button
                    className="button-link button-link--secondary"
                    type="button"
                    onClick={reloadCompetitions}
                  >
                    重试
                  </button>
                }
              />
            ) : null}

            {competitionState.status === 'success' && competitionState.data.length === 0 ? (
              <StatePanel
                variant="empty"
                title="当前没有近期竞赛"
                description="可以稍后再回来查看新的公开信息。"
              />
            ) : null}

            {competitionState.status === 'success'
              ? competitionState.data.map((competition) => (
                  <CompetitionCard competition={competition} key={competition.id} />
                ))
              : null}
          </div>
        </section>

        <section className="home-data-section" aria-labelledby="open-teams">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CONNECT</p>
              <h2 id="open-teams">正在组队</h2>
            </div>
            <Link className="text-link" to="/teams">
              查看全部组队
            </Link>
          </div>

          <div className="content-list">
            {teamState.status === 'loading' || teamState.status === 'idle' ? (
              <StatePanel
                variant="loading"
                title="正在加载组队信息"
                description="公开组队信息即将显示在这里。"
              />
            ) : null}

            {teamState.status === 'error' ? (
              <StatePanel
                variant="error"
                title="组队信息加载失败"
                description={teamState.error.message}
                action={
                  <button
                    className="button-link button-link--secondary"
                    type="button"
                    onClick={reloadTeams}
                  >
                    重试
                  </button>
                }
              />
            ) : null}

            {teamState.status === 'success' && teamState.data.length === 0 ? (
              <StatePanel
                variant="empty"
                title="当前没有开放组队"
                description="暂时没有符合条件的公开组队信息。"
              />
            ) : null}

            {teamState.status === 'success'
              ? teamState.data.map((team) => <TeamCard key={team.id} team={team} />)
              : null}
          </div>
        </section>
      </section>

      <section className="home-cta" aria-labelledby="submission-title">
        <div>
          <p className="eyebrow">CONTRIBUTE</p>
          <h2 id="submission-title">有值得被更多人看见的信息？</h2>
          <p>提交公开竞赛、项目或组队信息，共同维护一个可靠的探索入口。</p>
        </div>

        <Link className="button-link" to="/submit">
          查看投稿说明
        </Link>
      </section>
    </div>
  );
}
