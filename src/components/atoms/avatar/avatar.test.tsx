import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';
import "@testing-library/jest-dom/vitest";

describe('Avatar component', () => {
  it('renders correctly with src', () => {
    render(<Avatar src="https://example.com/avatar.jpg" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders with correct size classes', () => {
    const { container } = render(<Avatar src="https://example.com/avatar.jpg" size="large" />);
    expect(container.querySelector('img')).toHaveClass('w-16 h-16');
  });
});