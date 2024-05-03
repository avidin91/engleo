import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app';
import NotFound from './pages/not-found';
import WordCompilations from './pages/wordCompilations';
import Info from './pages/info';
import About from './pages/about';
import ContactUs from './pages/contact-us';
import { about, contactUs, wordsCompilations } from '@shared/constants/urls';

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
				path: `${wordsCompilations}/:slug?`,
				element: <WordCompilations />,
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
