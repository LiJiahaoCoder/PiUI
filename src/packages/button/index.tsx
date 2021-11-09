import { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './index.less';

export interface ButtonProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  children: ReactNode;
}

const Button = ({ type = 'button', children }: ButtonProps) => (
  <button className={styles.piuiButton} type={type}>
    {children}
  </button>
);

export default Button;
