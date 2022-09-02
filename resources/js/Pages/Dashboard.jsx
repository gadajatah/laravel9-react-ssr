import React from 'react';
import App from '@/Layouts/App';
import { Head } from '@inertiajs/inertia-react';
import Container from '@/Components/Container';

export default function Dashboard(props) {
    return (
        <>
            <Head title="Dashboard" />
            <Container>
                Dashboard
            </Container>
        </>
    );
}

Dashboard.layout = page => <App children={page} />