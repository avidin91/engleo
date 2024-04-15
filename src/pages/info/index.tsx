import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, Flex, Typography } from 'antd';
import InfoWordsCompilations from '../../entities/infoWordsCompilations';
import InfoRules from '../../entities/infoRules';

const { Title, Text } = Typography;

const Info = () => {
	return (
		<>
			<Helmet>
				<title>Главная страница</title>
			</Helmet>
			<Flex vertical align="center" style={{ width: 1200, margin: '0 auto' }}>
				<Title style={{ textAlign: 'center' }}>Учите слова правильно</Title>
				<Card title={'Как это работает'}>
					<Text strong>
						Система обучения основана на методике интервального повторения. Изучите
						слова или правила, а потом повторите их несколько раз в определенные
						промежутки времени. Система напомнит, когда надо повторять.
					</Text>
					<p>1-е повторение — сразу после заучивания</p>
					<p>2-е повторение — через 30 минут</p>
					<p>3-е повторение — через 1 день</p>
					<p>4-е повторение — через 2 недели</p>
					<p>5-е повторение — через 3 месяца</p>
				</Card>
				<Title level={3}>Выберите интересующую вас категорию</Title>
				<Flex gap={32} flex={1}>
					<InfoWordsCompilations />
					<InfoRules />
				</Flex>
			</Flex>
		</>
	);
};

export default Info;
