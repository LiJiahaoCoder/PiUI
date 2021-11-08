import { ReactNode, ButtonHTMLAttributes } from 'react';

export interface ButtonProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  children: ReactNode;
}

export const Button = ({ type = 'button', children }: ButtonProps) => {
  return (
    <button type={type}>
      {children}
    </button>
  );
};

export default Button;
