import React from 'react';
import { Helmet } from 'react-helmet';
import { Typography } from 'antd';
import { wordCompilationGroups } from '../../mocks/wordCompilationGroups';
import Compilations from '../../entities/compilations';

const { Title } = Typography;

const WordCompilations = () => {
	return (
		<>
			<Helmet>
				<title>Подборки слов</title>
			</Helmet>
			<div
				style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}
				className="title"
			>
				<Title>Подборки слов</Title>
			</div>
			{wordCompilationGroups.map((compilation) => (
				<Compilations title={compilation.title} group={compilation.group} />
			))}
		</>
	);
};

export default WordCompilations;
