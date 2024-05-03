import React from 'react';
import { ConfigProvider } from 'antd';
import Main from '../pages/main';
import './styles.css';

const App = () => {
	return (
		<>
			<ConfigProvider
				theme={{
					components: {
						Layout: {
							siderBg: '#222222',
							triggerBg: '#444444',
						},
						Menu: {
							darkItemBg: '#222222',
							itemSelectedBg: '#0074bf',
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
