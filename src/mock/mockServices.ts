// CompetitionDetail 被转换为 CompetitionSummary 后才返回列表，避免列表页面意外依赖详情字段。
// 竞赛排序集中在 Service 内部，而不是复制到每个页面。
// createMockCompetitionService({ delayMs: 300 }) 或 { fail: true } 能在不改页面逻辑的情况下，制造 Loading 与 Error 场景。

import type {
  CompetitionDetail,
  CompetitionStatus,
  CompetitionSummary,
  //   TeamDetail,
  //   TeamSummary,
} from '../types/domain';
import type {
  CompetitionListQuery,
  CompetitionService,
  TeamListQuery,
  TeamService,
} from '../services/contracts';
import { competitionFixtures, teamFixtures } from './fixtures';

export interface MockServiceOptions {
  delayMs?: number;
  fail?: boolean;
}

const competitionStatusOrder: Record<CompetitionStatus, number> = {
  REGISTRATION_OPEN: 0,
  UPCOMING: 1,
  ENDED: 2,
};

function toCompetitionSummary(detail: CompetitionDetail): CompetitionSummary {
  return {
    id: detail.id,
    name: detail.name,
    category: detail.category,
    status: detail.status,
    registrationDeadline: detail.registrationDeadline,
    eligibleAudienceLabel: detail.eligibleAudienceLabel,
    teamPostCount: detail.teamPostCount,
    updatedAt: detail.updatedAt,
  };
}

async function resolveMock<T>(value: T, options: MockServiceOptions): Promise<T> {
  if (options.delayMs && options.delayMs > 0) {
    await new Promise((resolve) => {
      window.setTimeout(resolve, options.delayMs);
    });
  }

  if (options.fail) {
    throw new Error('Mock service failed.');
  }

  return value;
}

function applyLimit<T>(items: T[], limit?: number): T[] {
  return limit === undefined ? items : items.slice(0, limit);
}

function compareCompetition(a: CompetitionSummary, b: CompetitionSummary): number {
  const statusDifference = competitionStatusOrder[a.status] - competitionStatusOrder[b.status];

  if (statusDifference !== 0) {
    return statusDifference;
  }

  const aDeadline = a.registrationDeadline ?? '9999-12-31';
  const bDeadline = b.registrationDeadline ?? '9999-12-31';

  return aDeadline.localeCompare(bDeadline) || a.name.localeCompare(b.name, 'zh-CN');
}

export function createMockCompetitionService(options: MockServiceOptions = {}): CompetitionService {
  return {
    async list(query: CompetitionListQuery = {}) {
      const filtered = competitionFixtures
        .map(toCompetitionSummary)
        .filter((competition) => {
          return (
            (query.status === undefined || competition.status === query.status) &&
            (query.category === undefined || competition.category === query.category)
          );
        })
        .sort(compareCompetition);

      return resolveMock(applyLimit(filtered, query.limit), options);
    },

    async getById(id) {
      const competition = competitionFixtures.find((item) => item.id === id) ?? null;

      return resolveMock(competition, options);
    },
  };
}

export function createMockTeamService(options: MockServiceOptions = {}): TeamService {
  return {
    async list(query: TeamListQuery = {}) {
      const filtered = teamFixtures.filter((team) => {
        const deadlineMatches =
          query.deadlineBefore === undefined ||
          (team.deadline !== null && team.deadline <= query.deadlineBefore);

        return (
          (query.type === undefined || team.type === query.type) &&
          (query.status === undefined || team.status === query.status) &&
          (query.competitionId === undefined || team.competition.id === query.competitionId) &&
          deadlineMatches
        );
      });

      return resolveMock(applyLimit(filtered, query.limit), options);
    },

    async getById(id) {
      const team = teamFixtures.find((item) => item.id === id) ?? null;

      return resolveMock(team, options);
    },
  };
}

export const mockCompetitionService = createMockCompetitionService();

export const mockTeamService = createMockTeamService();
