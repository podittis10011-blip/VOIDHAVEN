import { Link } from 'react-router-dom';
import type { CompetitionCategory, CompetitionStatus, CompetitionSummary } from '../types/domain';
import { formatLocalDate } from '../utils/format';

interface CompetitionCardProps {
  competition: CompetitionSummary;
}

const categoryLabels: Record<CompetitionCategory, string> = {
  ALGORITHM_PROGRAMMING: '算法 / 程序设计',
  MATHEMATICAL_MODELING: '数学建模',
  INNOVATION_ENTREPRENEURSHIP: '创新创业',
  DESIGN_ENGINEERING: '设计 / 工程',
  OTHER: '其他',
};

const statusLabels: Record<CompetitionStatus, string> = {
  REGISTRATION_OPEN: '报名开放',
  UPCOMING: '即将开始',
  ENDED: '已结束',
};

export function CompetitionCard({ competition }: CompetitionCardProps) {
  return (
    <Link className="content-card competition-card" to={`/competitions/${competition.id}`}>
      <p className="content-card__meta">
        {categoryLabels[competition.category]} · {statusLabels[competition.status]}
      </p>

      <h3>{competition.name}</h3>

      {competition.eligibleAudienceLabel !== null ? (
        <p className="content-card__supporting">{competition.eligibleAudienceLabel}</p>
      ) : null}

      <dl className="content-card__facts">
        <div>
          <dt>报名截止</dt>
          <dd>{formatLocalDate(competition.registrationDeadline)}</dd>
        </div>
        <div>
          <dt>当前组队</dt>
          <dd>{competition.teamPostCount} 条开放信息</dd>
        </div>
      </dl>
    </Link>
  );
}
