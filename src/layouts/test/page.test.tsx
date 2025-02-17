import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../page';

describe('Page Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<Page />);
    expect(container).toBeInTheDocument();
  });

  it('should render children correctly', () => {
    render(
      <Page>
        <div>Test Child</div>
      </Page>
    );
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('should have the correct default class name', () => {
    const { container } = render(<Page />);
    expect(container.firstChild).toHaveClass('container');
  });
});