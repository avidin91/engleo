import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app';
import NotFound from '@pages/not-found';
import Info from '@pages/info';
import About from '@pages/about';
import ContactUs from '@pages/contact-us';
import { about, contactUs, wordsCompilations } from '@shared/constants/urls';
import WordCompilationsPage from '@pages/word-compilations-page';
import Words from '@widgets/words';

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
				path: `${wordsCompilations}/:groupTitle/:compilationTitle/`,
				element: <Words />,
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
