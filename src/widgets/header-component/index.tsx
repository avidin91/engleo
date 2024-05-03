import React from 'react';
import { Avatar, Button, ConfigProvider, Flex, Layout, Typography } from 'antd';
import logo from '@shared/img/logo.svg';
import SingIn from '@features/sing-in';
import { Link } from 'react-router-dom';
import './styles.css';

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
			<Header className="header-component">
				<Flex gap={16} align="center">
					<Link to={'/'} className="header-component-link">
						<Avatar
							src={logo}
							alt="logo"
							size="large"
							shape="square"
							className="header-component-avatar"
						></Avatar>
					</Link>

					<Text className="header-component-text">
						Помогаем выучить наизусть слова и правила английского языка
					</Text>
				</Flex>

				<Flex align="center" gap={8}>
					<Link to={'/words-compilations'}>
						<Button type="text">Подборки слов</Button>
					</Link>

					<Link to={'/rules-compilations'}>
						<Button type="text">Подборки правил</Button>
					</Link>

					<Link to={'/about'}>
						<Button type="text">О нас</Button>
					</Link>
					<SingIn />
				</Flex>
			</Header>
		</ConfigProvider>
	);
};

export default HeaderComponent;
