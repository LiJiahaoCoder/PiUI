import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  children: ReactNode;
}

const Button = ({ type = 'button', children }: ButtonProps) => (
  <button type={type}>
    {children}
  </button>
);

export default Button;
