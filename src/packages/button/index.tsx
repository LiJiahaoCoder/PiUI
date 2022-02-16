import './index.less';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  ariaLabel?: ButtonHTMLAttributes<HTMLButtonElement>['aria-label'];
  loading?: boolean;
  children: ReactNode;
}

const Button = ({
  children,
  type = 'button',
  loading = false,
  ariaLabel = 'pi-button',
}: ButtonProps) => (
  <button
    type={type}
    disabled={loading}
    aria-label={ariaLabel}
    className="pi-button"
  >
    {children}
  </button>
);

export default Button;
