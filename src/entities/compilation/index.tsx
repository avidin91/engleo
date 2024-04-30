import React from 'react';
import { Avatar, Button, Card, Col, Flex, Tag, Typography } from 'antd';
import { CompilationsTags } from '../../shared/constants/compilations-tags';

const { Text } = Typography;

interface ICompilation {
	id: number;
	title: string;
	titleInEnglish: string;
	description: string;
	image: string;
	group: number[];
	small?: boolean;
}

const Compilation = ({ title, titleInEnglish, description, image, group, small }: ICompilation) => {
	return (
		<Col span={24}>
			<Card title={title} size="small" style={{ height: small ? '190px' : '', border: '1px solid' }}>
				<Flex align="center" justify="space-between" gap={8}>
					<Flex vertical style={{ width: small ? '240px' : '600px' }} gap="8px">
						<Text>{titleInEnglish}</Text>
						<Text>{description}</Text>
						<div>
							{group.map((group, i) => (
								<Tag color="green" key={i}>
									{CompilationsTags[group]}
								</Tag>
							))}
						</div>
					</Flex>
					<Flex gap={8} align="center">
						<Avatar shape="square" size={94} src={image} />
						<Button type="primary">Приступить</Button>
					</Flex>
				</Flex>
			</Card>
		</Col>
	);
};

export default Compilation;
