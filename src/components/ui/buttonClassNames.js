const VARIANT = {
    solid: 'ui-btn--solid',
    ghost: 'ui-btn--ghost',
};

const SIZE = {
    sm: 'ui-btn--sm',
    md: 'ui-btn--md',
    lg: 'ui-btn--lg',
};

/** Maps Button variants to `index.css` `.ui-btn` modifiers. */
export function buttonClassNames({ variant = 'solid', size = 'md', className } = {}) {
    return ['ui-btn', VARIANT[variant] ?? VARIANT.solid, SIZE[size] ?? SIZE.md, className].filter(Boolean).join(' ');
}
