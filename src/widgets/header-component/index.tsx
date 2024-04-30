import React from 'react';
import { Avatar, Button, ConfigProvider, Flex, Layout, Typography } from 'antd';
import logo from '../../shared/img/logo.svg';
import SingIn from '../../features/sing-in';
import { Link } from 'react-router-dom';

const { Text } = Typography;
const { Header } = Layout;

const HeaderComponent = () => {
	return (
		<ConfigProvider
			theme={{
				components: {
					Layout: {
						headerBg: '#bfccf1',
					},
				},
			}}
		>
			<Header
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Flex gap={16} align="center">
					<Link to={'/'}>
						<Avatar
							src={logo}
							alt="logo"
							size="large"
							style={{ height: '64px', width: '64px' }}
						></Avatar>
					</Link>

					<Text style={{ margin: 0, lineHeight: 1, width: 300 }}>
						Помогаем выучить наизусть слова и правила английского языка
					</Text>
				</Flex>

				<Flex align="center" gap={8}>
					<Link to={'/words-in-work-compilations'}>
						<Button type="text" size="large">
							Подборки слов
						</Button>
					</Link>

					<Link to={'/rules-compilations'}>
						<Button type="text" size="large">
							Подборки правил
						</Button>
					</Link>

					<Link to={'/about'}>
						<Button type="text" size="large">
							О нас
						</Button>
					</Link>
					<SingIn />
				</Flex>
			</Header>
		</ConfigProvider>
	);
};

export default HeaderComponent;
