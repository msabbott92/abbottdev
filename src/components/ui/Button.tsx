import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  target,
  rel,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (as === 'a' && href) {
    const computedRel = target === '_blank' ? (rel ?? 'noopener noreferrer') : rel;
    return (
      <a href={href} className={classes} target={target} rel={computedRel}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
