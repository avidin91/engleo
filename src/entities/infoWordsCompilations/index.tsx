import React from 'react';
import { wordCompilationGroups } from '../../mocks/wordCompilationGroups';
import Compilations from '../compilations';
import { Card, Divider, Flex} from 'antd';

const InfoWordsCompilations = () => {

	return (
		<Card
			title="Слова"
			style={{ width: 584 }}
		>
			<Flex vertical justify='center' gap={32}>
				<div>
					{wordCompilationGroups.slice(0, 4).map((compilation) => (
						<Compilations title={compilation.title} group={compilation.group} small/>
					))}
				</div>
			</Flex>
		</Card>
	);
};

export default InfoWordsCompilations;
