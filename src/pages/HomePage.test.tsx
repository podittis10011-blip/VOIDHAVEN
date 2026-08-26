import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('renders the VOIDHAVEN project identity', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { name: /求索袋底洞/i })).toBeInTheDocument();
    expect(screen.getByText(/Mock Data Contract/)).toBeInTheDocument();
  });
});