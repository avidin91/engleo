import React from 'react';
import { Avatar, Button, Card, Col, Flex, Tag, Typography } from 'antd';
import { CompilationsTags } from '@shared/constants/compilations-tags';
import { Link } from 'react-router-dom';
import { wordCompilationGroups } from '../../mocks/wordCompilationGroups';
import { wordsCompilations } from '@shared/constants/urls';

const { Text } = Typography;

interface ICompilation {
	id: number;
	title: string;
	titleInEnglish: string;
	description: string;
	image: string;
	group: number[];
	slug: string;
	small?: boolean;
}

const WordCompilation = ({
	title,
	titleInEnglish,
	description,
	image,
	group,
	slug,
	small,
}: ICompilation) => {
	const wordCompilationGroup = wordCompilationGroups.filter((item) => item.group === group[0])[0];
	const groupSlug = wordCompilationGroup.slug;
	const link = `/${wordsCompilations}/${groupSlug}/${slug}`;

	return (
		<Col span={24}>
			<Card title={title} size="small" style={{ height: small ? '190px' : '' }}>
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
						<Link to={link} replace={true}>
							<Button type="primary">Приступить</Button>
						</Link>
					</Flex>
				</Flex>
			</Card>
		</Col>
	);
};

export default WordCompilation;
