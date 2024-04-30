import React from 'react';
import { Helmet } from 'react-helmet';
import { ConfigProvider } from 'antd';
import Main from '../pages/main';
import './styles.css';

const App = () => {
	return (
		<>
			{/*<Helmet>*/}
			{/*	<title>My Title1</title>*/}
			{/*</Helmet>*/}
			<ConfigProvider
				theme={{
					components: {
						Layout: {
							siderBg: '#BAEEFF',
						},
					},
					token: {
						colorPrimary: '#00B96B',
					},
				}}
			>
				<Main />
			</ConfigProvider>
		</>
	);
};

export default App;
