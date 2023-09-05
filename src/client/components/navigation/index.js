import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants';
import { NamView } from '../../pages/NamView';

const Navigation = () =>
{
	return (
		<>
			<Routes>
				<Route
					path={ROUTES.NamView}
					element={<NamView />}
					// replace={true}
				/>		
			</Routes>
		</>
	);
};

export default Navigation;
