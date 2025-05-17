import { render, screen, fireEvent } from '@testing-library/react';
import Alert from './Alert';
import { vi } from 'vitest';
import "@testing-library/jest-dom/vitest";

describe('Alert component', () => {
  it('renders children', () => {
    render(<Alert>Test alert</Alert>);
    expect(screen.getByText('Test alert')).toBeInTheDocument();
  });

  it('applies type class', () => {
    render(<Alert type="success">Test alert</Alert>);
    const alertElement = screen.getByRole('alert');
    expect(alertElement).toHaveClass('bg-green-100');
    expect(alertElement).toHaveClass('border-green-500');
    expect(alertElement).toHaveClass('text-green-700');
  });

  it('renders dismiss button when dismissible', () => {
    render(<Alert dismissible>Test alert</Alert>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onDismiss when dismiss button is clicked', () => {
    const onDismiss = vi.fn();
    render(<Alert dismissible onDismiss={onDismiss}>Test alert</Alert>);
    fireEvent.click(screen.getByRole('button'));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});
