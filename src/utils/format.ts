import type { LocalDate, TeamPostStatus } from '../types/domain';

export function formatLocalDate(date: LocalDate | null): string {
  if (date === null) {
    return '待公布';
  }

  const [year, month, day] = date.split('-');

  return `${year} 年 ${Number(month)} 月 ${Number(day)} 日`;
}

export function formatTeamPostStatus(status: TeamPostStatus): string {
  const labels: Record<TeamPostStatus, string> = {
    OPEN: '开放中',
    CLOSED: '已关闭',
    EXPIRED: '已过期',
  };

  return labels[status];
}