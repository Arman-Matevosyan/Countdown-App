import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tooltip } from '../../../components/tooltip';

describe('Tooltip', () => {
  const defaultProps = {
    isVisible: true,
    text: 'Tooltip Text',
    children: <button type="button">Button Text</button>,
  };

  test('should render the tooltip text when `isVisible` and `showTooltip` are `true`', () => {
    render(<Tooltip {...defaultProps} />);
    const tooltipText = screen.getByText(defaultProps.text);

    expect(tooltipText).toBeInTheDocument();
  });

  test('should not render the tooltip text when `isVisible` is true and `showTooltip` is `false`', () => {
    render(<Tooltip {...defaultProps} showTooltip={false} />);

    const tooltipText = screen.queryByText(defaultProps.text);

    expect(tooltipText).not.toBeInTheDocument();
  });

  test('should render the children when `isVisible` is `false`', () => {
    render(<Tooltip {...defaultProps} isVisible={false} />);

    const buttonText = screen.getByText('Button Text');

    expect(buttonText).toBeInTheDocument();
  });
});
