import React from 'react';
import useDocumentTitle from '../hook/useDocumentTitle';

const ErrorPage = () => {
    useDocumentTitle('404 Not Found');
    return (

        <div className='min-h-screen flex items-center justify-center'>
            <div className="text-center">
                <h2 className='text-5xl font-bold mb-4'>404</h2>
                <p className='text-xl'>Page Not Found</p>
                <p className='mt-2'>Sorry, the page you are looking for dose not exist.</p>
            </div>
        </div>
    );
};

export default ErrorPage;