import React from 'react'

function Wrapper({ children }) {
    return (
        <div className="container mx-auto">
            {children}
        </div>
    )
}

export default Wrapper;