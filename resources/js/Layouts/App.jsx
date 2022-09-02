import React, { useState } from 'react';
import Navbar from './Navbar';

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar/>   

            <main className='py-12'>{children}</main>
        </div>
    );
}
