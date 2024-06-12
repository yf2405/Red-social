import React from 'react';

const ErrorMessage = ({ message }: { message: string }) => {
    return (
        <div style={{ textAlign: 'center', padding: '50px', color: 'white' }}>
            <h1>Oh no! Algo salió mal.</h1>
            <p>Por favor, inténtalo de nuevo más tarde.</p>
        </div>
    );
};

export default ErrorMessage;
