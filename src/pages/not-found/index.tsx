import React from 'react';
import notFound from '../../shared/img/404-not-found.jpeg';
import { Flex, Image } from 'antd';
import HeaderComponent from '../../widgets/header-component';
import { minHeight } from '../../shared/constants/constants';
import FooterComponent from '../../widgets/footer-component';
import './styles.css';

const NotFound = () => {
	return (
		<>
			<HeaderComponent />
			<Flex justify="center" className="not-found">
				<Image src={notFound} alt={'404 not found'} preview={false} height={minHeight} />
			</Flex>
			<FooterComponent />
		</>
	);
};

export default NotFound;
