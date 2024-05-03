import React from 'react';
import { Button, Col, Flex, Row, Typography } from 'antd';
import { wordCompilations } from '../../mocks/wordCompilations';
import Compilation from '../compilation';
import { Link } from 'react-router-dom';
import { wordsCompilations } from '@shared/constants/urls';

const { Title } = Typography;

interface ICompilations {
	title: string;
	group: number;
	slug?: string;
	small?: boolean;
	h1?: boolean;
}

const Compilations = ({ title, group, small, slug, h1 }: ICompilations) => {
	const newCompilations = wordCompilations.filter((c) => c.group.includes(group));

	return (
		<>
			<Title level={h1 ? 1 : 3} style={{ textAlign: 'center' }}>
				{title}
			</Title>

			<Flex vertical gap={16}>
				{newCompilations.map((compilation, i) => {
					return small ? (
						i === 0 && (
							<>
								<Compilation
									id={compilation.id}
									title={compilation.title}
									titleInEnglish={compilation.titleInEnglish}
									description={compilation.description}
									image={compilation.image}
									group={compilation.group}
									key={compilation.id}
									small
								/>
								<Flex justify="center">
									{slug && (
										<Link to={`${wordsCompilations}/${slug}`}>
											<Button
												style={{ backgroundColor: '#ffd100' }}
												type="text"
											>
												Показать все
											</Button>
										</Link>
									)}
								</Flex>
							</>
						)
					) : (
						<Flex vertical style={{ width: '800px', margin: '0 auto' }}>
							<Compilation
								id={compilation.id}
								title={compilation.title}
								titleInEnglish={compilation.titleInEnglish}
								description={compilation.description}
								image={compilation.image}
								group={compilation.group}
								key={compilation.id}
							/>
						</Flex>
					);
				})}
			</Flex>
		</>
	);
};

export default Compilations;
