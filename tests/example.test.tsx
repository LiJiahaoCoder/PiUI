import { render } from '@testing-library/react';

const Title = () => <h1>PiUI</h1>;

describe('Test jest', () => {
  test('Expect 1 to be truthy', () => {
    expect(1).toBeTruthy();
  });

  test('Expect Title component include PiUI', () => {
    const { queryByText } = render(<Title />);
    expect(queryByText('PiUI')).not.toBeNull();
  });
});
