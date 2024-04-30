import React from 'react';
import { rules } from '../../mocks/rules';
import { Button, Card, Divider, Flex, Typography } from 'antd';
import { rulesGroups } from '../../mocks/rulesGroups';

const { Title, Text } = Typography;

const InfoRules = () => {
	// const rulesByGroup = rules.filter();

	return (
		<Card style={{ width: 584 }} title="Правила">
			{rulesGroups.slice(0, 4).map(({ title, group }) => {
				const newRules = rules.filter((rule) => rule.groupId === group);
				return (
					<>
						<Title level={3} style={{ textAlign: 'center' }}>
							{title}
						</Title>
						<Flex vertical gap={16} align="center">
							{newRules.map((rule, i) => {
								return (
									i === 0 && (
										<Card
											title={rule.title}
											key={rule.groupId}
											size="small"
											style={{ height: 190, border: '1px solid' }}
										>
											<Flex align="center">
												<p>
													Описание правила, как используется, для чего
													нужно, что-то ещё. Описание правила, как
													используется, для чего нужно, что-то ещё.
												</p>
												<Button type="primary">Приступить</Button>
											</Flex>
										</Card>
									)
								);
							})}
							<Button style={{ backgroundColor: '#ffd100' }} type="text">
								Показать все
							</Button>
						</Flex>
					</>
				);
			})}
		</Card>
	);
};

export default InfoRules;
