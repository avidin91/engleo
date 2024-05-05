import React, { FC, useState } from 'react';
import { Avatar, Button, Checkbox, Flex, Form, Input, Modal, Typography } from 'antd';
import Link from 'antd/es/typography/Link';
import vkLogo from '@shared/img/vk-logo.png';
import yaLogo from '@shared/img/ya-logo.png';

const { Title, Text } = Typography;

type FieldType = {
	email?: string;
	password?: string;
	remember?: string;
};

type TSingIn = {
	text: string;
	button: 'small' | 'large';
};

const SingIn: FC<TSingIn> = ({ text, button }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			{button === 'small' && (
				<Button
					type="primary"
					onClick={showModal}
					style={{ backgroundColor: '#fdc90d', color: 'black' }}
				>
					Войти
				</Button>
			)}
			{button === 'large' && (
				<Button
					size="large"
					style={{ width: 500, height: 50 }}
					type="primary"
					onClick={showModal}
				>
					{text}
				</Button>
			)}
			<Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
				<Flex vertical align="center">
					<Title level={3}>Вход в профиль</Title>
					<Form name="authorization" layout="vertical" size="large">
						<Form.Item
							name={'email'}
							rules={[
								{ type: 'email', required: true, message: 'Некорректный email' },
							]}
						>
							<Input placeholder={'Email'} />
						</Form.Item>

						<Form.Item<FieldType>
							name={'password'}
							rules={[
								{ required: true, message: 'Минимальная длина 8 символов', min: 8 },
							]}
							style={{ margin: 0 }}
						>
							<Input.Password placeholder="Пароль" />
						</Form.Item>
						<Form.Item<FieldType> name="remember" valuePropName="checked">
							<Checkbox>Запомнить вход</Checkbox>
						</Form.Item>
					</Form>
					<Flex vertical gap={16} style={{ width: '100%' }} align="center">
						<Button type="primary" size="large" style={{ width: '300px' }}>
							Войти
						</Button>
						<Link>Не помню пароль</Link>
						<Button size="large" style={{ width: '300px' }}>
							Создать профиль
						</Button>
						<Text type="secondary">Войти с помощью</Text>
						<Flex gap={16}>
							<Avatar src={vkLogo} size="large" />
							<Avatar src={yaLogo} size="large" />
						</Flex>
					</Flex>
				</Flex>
			</Modal>
		</>
	);
};

export default SingIn;
