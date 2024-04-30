import React from 'react';
import { Helmet } from 'react-helmet';
import { Button, Card, Flex, Typography, Image } from 'antd';
import InfoWordsCompilations from '../../entities/infoWordsCompilations';
import InfoRules from '../../entities/infoRules';
import statistic from '../../shared/img/Статистика.png';

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
				<Title level={3}>Больше подборок слов и правил в каталоге</Title>
				<Button
					size="large"
					style={{ width: 500, height: 50, backgroundColor: '#b90000' }}
					type="primary"
				>
					Каталог
				</Button>
				<Title level={3}>Просматривайте статистику в личном кабинете</Title>
				<Card title={'Статистика по словам и правилам'}>
					<Flex vertical gap={32}>
						<Text>
							Вы можете смотреть, что вы сейчас изучаете. Есть отдельная статистика
							для слов и отдельная для правил. Все слова и правила разбиты по
							столбцам, каждый столбец соответствует тому статусу, в котом они сейчас
							находятся.
						</Text>
						<Image src={statistic} preview={false} />
						<Flex vertical align="center" gap={16}>
							<Text style={{ fontSize: 20 }}>
								Регистрируйтесь, и вам станут доступны все наши слова и подборки.
							</Text>
							<Button size="large" style={{ width: 500, height: 50 }} type="primary">
								Зарегистрироваться
							</Button>
						</Flex>
					</Flex>
				</Card>
			</Flex>
		</>
	);
};

export default Info;
