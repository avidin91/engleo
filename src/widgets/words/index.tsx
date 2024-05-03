import React, { useState } from 'react';
import { Card, Flex } from 'antd';
import { minHeight } from '@shared/constants/constants';
import { Helmet } from 'react-helmet';
import WordsForWorkCompilation from '@entities/words-for-work-compilation';
import WordsInWork from '@entities/words-in-work';

type TCompilation = {
	word: string;
	translation: string;
	example: string;
	exampleTranslation: string;
	image: string;
	group: number[];
	compilationName: string;
};

type TWord = {
	compilation: TCompilation[];
};

const Words = ({ compilation }: TWord) => {
	const [started, setStarted] = useState<boolean>(false);
	const handleSetStarted = () => {
		setStarted(true);
	};

	return (
		<>
			<Helmet>
				<title>{compilation[0].compilationName}</title>
			</Helmet>
			<Flex vertical align="center" justify="center" style={{ minHeight }}>
				<Card
					style={{
						width: 1200,
						minHeight: 600,
					}}
					title={compilation[0].compilationName}
				>
					{!started && (
						<WordsForWorkCompilation
							compilation={compilation}
							handleSetStarted={handleSetStarted}
						/>
					)}
					{started && <WordsInWork compilation={compilation} />}
				</Card>
			</Flex>
		</>
	);
};

export default Words;
