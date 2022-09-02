import React from 'react'
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/inertia-react';
import Container from '@/Components/Container';
import NavLink from '@/Components/NavLink';
import DropdownMenu from '@/Components/DropdownMenu';

export default function Navbar() {
    const {auth} = usePage().props;
  return (
        <nav className='bg-white border-b py-2'>
            <Container>
                <div className="flex items-center justify-between">
                <ApplicationLogo/>
                <div className="flex items-center gap-x-6">
                    <NavLink href='/'>Home</NavLink>
                    <NavLink href='/dashboard'>Dashboard</NavLink>
                    {auth.user ? 
                    <>
                    <DropdownMenu label={auth.user.name}>
                        <DropdownMenu.Link href="/profile">Profile</DropdownMenu.Link> 
                        <DropdownMenu.Link href="/cart">Your Cart</DropdownMenu.Link> 
                        <DropdownMenu.Link href="/history">Your History</DropdownMenu.Link> 
                        <DropdownMenu.Link href="/logout" method="post">Logout</DropdownMenu.Link>
                    </DropdownMenu>
                    </> : 
                    <>
                    <NavLink href='/login'>Login</NavLink>
                    <NavLink href='/register'>Register</NavLink>
                    </>}
                </div>
                </div>
            </Container>
        </nav>
  )
}
