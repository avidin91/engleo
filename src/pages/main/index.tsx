import React from 'react';
import { Avatar, Button, Flex, Layout, Typography } from 'antd';
import logo from '../../shared/img/logo.svg';
import './style.css';
import WordCompilations from '../wordCompilations';
import WordStatistics from '../wordsStatistics';
import Info from '../info';
import test from '../../shared/img/AdobeStock_431922112.jpeg';

const { Header, Footer, Sider, Content } = Layout;

const { Text } = Typography;

const Main = () => {
	return (
		<>
			<Layout>
				<Header
					style={{
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<Flex gap={16} align="center">
						<Avatar
							src={logo}
							alt="logo"
							size="large"
							style={{ height: '64px', width: '64px' }}
						></Avatar>
						<Text style={{ margin: 0, lineHeight: 1, width: 300 }}>
							Помогаем выучить наизусть слова и правила английского языка
						</Text>
					</Flex>

					<Flex align="center" gap={8}>
						<Button
							type="text"
							style={{
								fontSize: '18px',
								fontWeight: 'bold',
								textDecoration: 'underline',
							}}
						>
							Подборки слов
						</Button>
						<Button type="text" style={{ fontSize: '18px', fontWeight: 'bold' }}>
							Подборки правил
						</Button>
						<Button type="text" style={{ fontSize: '18px', fontWeight: 'bold' }}>
							О нас
						</Button>
						<Button style={{ alignSelf: 'center', backgroundColor: '#ffff5e' }}>
							Зарегистрироваться
						</Button>
					</Flex>
				</Header>
				<Layout>
					{/*<Sider*/}
					{/*	style={{*/}
					{/*		color: 'white',*/}
					{/*		borderTop: '2px solid #f5f5f5',*/}
					{/*		borderRight: '2px solid #f5f5f5',*/}
					{/*	}}*/}
					{/*>*/}
					{/*	123*/}
					{/*</Sider>*/}
					<Content style={{ minHeight: 'calc(100vh - 130px)' }}>
						<Info />
						{/*<WordStatistics />*/}
						{/*<WordCompilations />*/}
					</Content>
				</Layout>
				<Footer>Footer</Footer>
			</Layout>
		</>
	);
};

export default Main;
