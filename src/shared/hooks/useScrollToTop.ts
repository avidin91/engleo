import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const useScrollToTop = () => {
	const { pathname } = useLocation();

	useLayoutEffect(() => {
		window.scrollTo(0, 0); // Прокрутка страницы к верху при изменении маршрута
	}, [pathname]);
};

export default useScrollToTop;
