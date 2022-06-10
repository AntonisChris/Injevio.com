import React from 'react';

export default function FooterButton({ children, onClick }) {
    return (
        <button
            className="m-3 text-xs font-medium text-white opacity-70"
            onClick={onClick}
        >
            {children}
        </button>
    );
}
