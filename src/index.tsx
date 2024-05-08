import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app';
import NotFound from '@pages/not-found';
import Info from '@pages/info';
import About from '@pages/about';
import ContactUs from '@pages/contact-us';
import { about, contactUs, rulesCompilations, wordsCompilations } from '@shared/constants/urls';
import WordCompilationsPage from '@pages/word-compilations-page';
import Words from '@pages/words';
import RulesCompilationsPage from '@pages/rules-compilations-page';
import Rule from '@pages/rule';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <Info />,
			},
			{
				path: `${wordsCompilations}/:groupTitle?`,
				element: <WordCompilationsPage />,
			},
			{
				path: `${rulesCompilations}/:groupTitle?`,
				element: <RulesCompilationsPage />,
			},
			{
				path: `${wordsCompilations}/:groupTitle/:compilationTitle/`,
				element: <Words />,
			},
			{
				path: `${rulesCompilations}/:groupTitle/:compilationTitle/`,
				element: <Rule />,
			},
			{
				path: about,
				element: <About />,
			},
			{
				path: contactUs,
				element: <ContactUs />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
