import { ReactNode, ButtonHTMLAttributes } from 'react';

interface Props {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  children: ReactNode;
}

export const Button = ({ type = 'button', children }: Props) => {
  return (
    <button type={type}>
      {children}
    </button>
  );
};

export default Button;
