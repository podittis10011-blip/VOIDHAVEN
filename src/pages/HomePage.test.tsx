import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('renders Hero and Mock Service content', async () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'A haven for seekers.' })).toBeInTheDocument();

    expect(screen.getByRole('link', { name: '浏览竞赛' })).toHaveAttribute('href', '/competitions');

    expect(
      await screen.findByRole('heading', {
        name: '2026 全国大学生数学建模竞赛',
        level: 3,
      }),
    ).toBeInTheDocument();

    expect(await screen.findByText('团队找成员 · 开放中')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: '查看全部竞赛' })).toHaveAttribute(
      'href',
      '/competitions',
    );
  });
});
