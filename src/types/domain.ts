export type EntityId = string;
export type LocalDate = string;
export type IsoDateTime = string;

export interface CompetitionReference {
  id: EntityId;
  name: string;
}

export interface ExternalLink {
  label: string;
  url: string;
}

export type CompetitionStatus = 'REGISTRATION_OPEN' | 'UPCOMING' | 'ENDED';

export type CompetitionCategory =
  | 'ALGORITHM_PROGRAMMING'
  | 'MATHEMATICAL_MODELING'
  | 'INNOVATION_ENTREPRENEURSHIP'
  | 'DESIGN_ENGINEERING'
  | 'OTHER';

export interface CompetitionSummary {
  id: EntityId;
  name: string;
  category: CompetitionCategory;
  status: CompetitionStatus;
  registrationDeadline: LocalDate | null;
  eligibleAudienceLabel: string | null;
  teamPostCount: number;
  updatedAt: IsoDateTime;
}

export type OfficialLinkType = 'WEBSITE' | 'REGISTRATION' | 'NOTICE';

export interface OfficialLink extends ExternalLink {
  type: OfficialLinkType;
}

export interface CompetitionDetail extends CompetitionSummary {
  levelLabel: string | null;
  registrationStartsOn: LocalDate | null;
  competitionStartsOn: LocalDate | null;
  competitionEndsOn: LocalDate | null;
  eligibility: {
    grades: string[];
    majors: string[];
    institutionRestrictions: string[];
    otherRequirements: string[];
  };
  officialLinks: OfficialLink[];
  introduction: string | null;
  ruleSummary: string | null;
  source: {
    name: string;
    url: string | null;
  };
}

export type TeamPostType = 'TEAM_SEEKING_MEMBER' | 'STUDENT_SEEKING_TEAM';

export type TeamPostStatus = 'OPEN' | 'CLOSED' | 'EXPIRED';

interface TeamPostBase {
  id: EntityId;
  type: TeamPostType;
  status: TeamPostStatus;
  competition: CompetitionReference;
  headline: string;
  createdAt: IsoDateTime;
  updatedAt: IsoDateTime;
  deadline: LocalDate | null;
}

export interface TeamSeekingMemberSummary extends TeamPostBase {
  type: 'TEAM_SEEKING_MEMBER';
  organizerName: string;
  requiredSkills: string[];
  remainingSlots: number | null;
}

export interface StudentSeekingTeamSummary extends TeamPostBase {
  type: 'STUDENT_SEEKING_TEAM';
  backgroundLabel: string;
  skills: string[];
  desiredTeamSummary: string;
}

export type TeamSummary = TeamSeekingMemberSummary | StudentSeekingTeamSummary;

export interface TeamSeekingMemberDetail extends TeamSeekingMemberSummary {
  introduction: string | null;
  currentMemberDescription: string | null;
  nonRequirements: string[];
  expectedCommitment: string | null;
  preparationStage: string | null;
  additionalRequirements: string | null;
}

export interface StudentSeekingTeamDetail extends StudentSeekingTeamSummary {
  experienceSummary: string | null;
  availability: string | null;
  introduction: string | null;
}

export type TeamDetail = TeamSeekingMemberDetail | StudentSeekingTeamDetail;
