const VARIANT = {
    solid: 'ui-btn--solid',
    ghost: 'ui-btn--ghost',
};

const SIZE = {
    sm: 'ui-btn--sm',
    md: 'ui-btn--md',
    lg: 'ui-btn--lg',
};

export function buttonClassNames({ variant = 'solid', size = 'md', className } = {}) {
    return ['ui-btn', VARIANT[variant] ?? VARIANT.solid, SIZE[size] ?? SIZE.md, className]
        .filter(Boolean)
        .join(' ');
}

export default function Button({ variant = 'solid', size = 'md', className = '', type = 'button', children, ...rest }) {
    return (
        <button type={type} className={buttonClassNames({ variant, size, className })} {...rest}>
            {children}
        </button>
    );
}
