import { render } from '@testing-library/react';
import { Button } from '@/';

describe('Button test', () => {
  test('Expect Button include PiUI text', () => {
    const { queryByText } = render(<Button>PiUI</Button>);
    expect(queryByText('PiUI')).toBeInTheDocument();
  });
});
