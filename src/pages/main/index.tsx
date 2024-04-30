import React from 'react';
import { Layout } from 'antd';
import './style.css';
import HeaderComponent from '../../widgets/header-component';
import { Outlet } from 'react-router-dom';
import { minHeight } from '../../shared/constants/constants';
import FooterComponent from '../../widgets/footer-component';

const { Content } = Layout;

const Main = () => {
	return (
		<>
			<Layout>
				<HeaderComponent />
				<Layout style={{ paddingBottom: 16 }}>
					<Content style={{ minHeight }}>
						<Outlet />
					</Content>
				</Layout>
				<FooterComponent />
			</Layout>
		</>
	);
};

export default Main;
