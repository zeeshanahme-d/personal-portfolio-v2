import { buttonClassNames } from './buttonClassNames';

export default function Button({ variant = 'solid', size = 'md', className = '', type = 'button', children, ...rest }) {
    return (
        <button type={type} className={buttonClassNames({ variant, size, className })} {...rest}>
            {children}
        </button>
    );
}
