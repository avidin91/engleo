import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app';
import NotFound from './pages/not-found';
import WordCompilations from './pages/wordCompilations';
import Info from './pages/info';
import About from './pages/about';
import ContactUs from './pages/contact-us';

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
				path: 'words-compilations',
				element: <WordCompilations />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'contact-us',
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
