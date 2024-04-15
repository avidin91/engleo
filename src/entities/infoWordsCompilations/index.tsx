import React from 'react';
import { wordCompilationGroups } from '../../mocks/wordCompilationGroups';
import Compilations from '../compilations';
import { Card, Flex } from 'antd';
import { wordCompilations } from '../../mocks/wordCompilations';
import Compilation from '../compilation';

const InfoWordsCompilations = () => {
	return (
		<Card
			title="Слова"
			style={{ width: 584 }}
			styles={{ body: { backgroundColor: '#BAEEFF' } }}
		>
			{wordCompilationGroups.map((compilation) => (
				<Compilations title={compilation.title} group={compilation.group} small />
			))}
		</Card>
	);
};

export default InfoWordsCompilations;
