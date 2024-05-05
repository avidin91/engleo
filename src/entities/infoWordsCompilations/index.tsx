import React from 'react';
import { wordCompilationGroups } from '../../mocks/wordCompilationGroups';
import { Card, Flex } from 'antd';
import WordCompilations from '../word-compilations';

const InfoWordsCompilations = () => {
	return (
		<Card title="Слова" style={{ width: 584 }}>
			<Flex vertical justify="center" gap={32}>
				<div>
					{wordCompilationGroups.slice(0, 4).map((compilation) => (
						<WordCompilations
							title={compilation.title}
							group={compilation.group}
							slug={compilation.slug}
							small
						/>
					))}
				</div>
			</Flex>
		</Card>
	);
};

export default InfoWordsCompilations;
