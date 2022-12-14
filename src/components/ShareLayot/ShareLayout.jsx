import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar';

export const ShareLayout = () => {
	return (<>
		<AppBar />
		<Suspense>
        <Outlet />
    </Suspense>
    </>
	)
} 