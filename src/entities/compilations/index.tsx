import React from 'react';
import { Button, Col, Flex, Row, Typography } from 'antd';
import { wordCompilations } from '../../mocks/wordCompilations';
import Compilation from '../compilation';

const { Title } = Typography;

interface ICompilations {
	title: string;
	group: number;
	small?: boolean;
}

const Compilations = ({ title, group, small }: ICompilations) => {
	const newCompilations = wordCompilations.filter((c) => c.group.includes(group));

	return (
		<>
			<Title level={3} style={{ textAlign: 'center' }}>
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
									<Button style={{ backgroundColor: '#ffd100' }} type="text">
										Показать все
									</Button>
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
