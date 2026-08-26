import type { CompetitionService, TeamService } from './contracts';
import { mockCompetitionService, mockTeamService } from '../mock/mockServices';

export const competitionService: CompetitionService = mockCompetitionService;

export const teamService: TeamService = mockTeamService;