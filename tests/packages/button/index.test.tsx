import { Button } from '@/';
import { render } from '@testing-library/react';

describe('Button test', () => {
  test('Expect Button include PiUI text', () => {
    const { queryByText } = render(<Button>PiUI</Button>);

    expect(
      queryByText('PiUI'),
    ).toBeInTheDocument();
  });

  test('Expect disabled to be true given loading is true', () => {
    const { queryByText } = render(<Button loading>PiUI</Button>);

    expect(queryByText('PiUI')).toBeDisabled();
  });

  test('Expect Button should be in document given a Button component with test-aria-label', () => {
    const ariaLabel = 'test-aria-label';
    const { queryByLabelText } = render(<Button ariaLabel={ariaLabel}>PiUI</Button>);

    expect(queryByLabelText(ariaLabel)).toBeInTheDocument();
  });
});
