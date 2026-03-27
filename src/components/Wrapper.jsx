import React from 'react';

function Wrapper({ children, className }) {
    return (
        <div className={['container', 'mx-auto', className].filter(Boolean).join(' ')}>{children}</div>
    );
}

export default Wrapper;
