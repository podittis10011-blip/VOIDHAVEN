import { Link } from 'react-router-dom';
import type { TeamPostStatus, TeamSummary } from '../types/domain';
import { formatLocalDate } from '../utils/format';

interface TeamCardProps {
  team: TeamSummary;
}

const statusLabels: Record<TeamPostStatus, string> = {
  OPEN: '开放中',
  CLOSED: '已关闭',
  EXPIRED: '已过期',
};

export function TeamCard({ team }: TeamCardProps) {
  const typeLabel = team.type === 'TEAM_SEEKING_MEMBER' ? '团队找成员' : '学生找队伍';

  const supportingText =
    team.type === 'TEAM_SEEKING_MEMBER'
      ? `发起团队：${team.organizerName}`
      : team.backgroundLabel;

  const capabilityText =
    team.type === 'TEAM_SEEKING_MEMBER'
      ? team.requiredSkills.join(' · ')
      : team.skills.join(' · ');

  const demandText =
    team.type === 'TEAM_SEEKING_MEMBER'
      ? team.remainingSlots === null
        ? '名额待定'
        : `还需 ${team.remainingSlots} 人`
      : team.desiredTeamSummary;

  return (
    <Link className="content-card team-card" to={`/teams/${team.id}`}>
      <p className="content-card__meta">
        {typeLabel} · {statusLabels[team.status]}
      </p>

      <h3>{team.headline}</h3>

      <p className="content-card__supporting">{supportingText}</p>

      {capabilityText.length > 0 ? (
        <p className="content-card__supporting">相关能力：{capabilityText}</p>
      ) : null}

      <dl className="content-card__facts">
        <div>
          <dt>关联竞赛</dt>
          <dd>{team.competition.name}</dd>
        </div>
        <div>
          <dt>协作需求</dt>
          <dd>{demandText}</dd>
        </div>
      </dl>

      <p className="content-card__deadline">截止：{formatLocalDate(team.deadline)}</p>
    </Link>
  );
}