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
