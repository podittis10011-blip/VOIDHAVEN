import { describe, expect, it } from 'vitest';
import {
  createMockCompetitionService,
  mockCompetitionService,
  mockTeamService,
} from './mockServices';

describe('Mock Services', () => {
  it('filters competitions and applies the V0 ordering rule', async () => {
    const competitions = await mockCompetitionService.list();

    expect(competitions.map((item) => item.id)).toEqual([
      'competition-cumcm-2026',
      'competition-innovation-2026',
      'competition-algorithm-2026',
      'competition-robot-2026',
      'competition-other-2025',
    ]);

    const limited = await mockCompetitionService.list({
      status: 'REGISTRATION_OPEN',
      limit: 1,
    });

    expect(limited).toHaveLength(1);
    expect(limited[0].id).toBe('competition-cumcm-2026');
  });

  it('keeps competition teamPostCount consistent with open team posts', async () => {
    const [competitions, openTeams] = await Promise.all([
      mockCompetitionService.list(),
      mockTeamService.list({ status: 'OPEN' }),
    ]);

    for (const competition of competitions) {
      const actualOpenCount = openTeams.filter(
        (team) => team.competition.id === competition.id,
      ).length;

      expect(competition.teamPostCount).toBe(actualOpenCount);
    }
  });

  it('supports discriminated team filters and unknown IDs', async () => {
    const teamSeekingMembers = await mockTeamService.list({
      type: 'TEAM_SEEKING_MEMBER',
      status: 'OPEN',
    });

    expect(teamSeekingMembers.map((item) => item.id)).toEqual([
      'team-cumcm-recruit',
      'team-robot-recruit',
    ]);

    const unknownCompetition = await mockCompetitionService.getById('unknown-id');
    const unknownTeam = await mockTeamService.getById('unknown-id');

    expect(unknownCompetition).toBeNull();
    expect(unknownTeam).toBeNull();
  });

  it('can provide a controlled service failure for error-state tests', async () => {
    const failingService = createMockCompetitionService({ fail: true });

    await expect(failingService.list()).rejects.toThrow('Mock service failed.');
  });
});