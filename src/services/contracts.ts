import type {
  CompetitionCategory,
  CompetitionDetail,
  CompetitionStatus,
  CompetitionSummary,
  EntityId,
  LocalDate,
  TeamDetail,
  TeamPostStatus,
  TeamPostType,
  TeamSummary,
} from '../types/domain';

export interface CompetitionListQuery {
  status?: CompetitionStatus;
  category?: CompetitionCategory;
  limit?: number;
}

export interface TeamListQuery {
  type?: TeamPostType;
  status?: TeamPostStatus;
  competitionId?: EntityId;
  deadlineBefore?: LocalDate;
  limit?: number;
}

export interface CompetitionService {
  list(query?: CompetitionListQuery): Promise<CompetitionSummary[]>;
  getById(id: EntityId): Promise<CompetitionDetail | null>;
}

export interface TeamService {
  list(query?: TeamListQuery): Promise<TeamSummary[]>;
  getById(id: EntityId): Promise<TeamDetail | null>;
}
