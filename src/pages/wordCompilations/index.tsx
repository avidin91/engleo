import React, { useLayoutEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Flex, Layout, Menu, MenuProps, Typography } from 'antd';
import { headerHeight, minHeight, minHeightWithoutHeader } from '@shared/constants/constants';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { wordCompilationGroups } from '../../mocks/wordCompilationGroups';
import Compilations from '@entities/compilations';
import { wordsCompilations } from '@shared/constants/urls';

const { Sider, Content } = Layout;
const { Title } = Typography;

const items1: MenuProps['items'] = wordCompilationGroups.map((compilation) => ({
	key: compilation.group,
	label: compilation.title,
}));

const WordCompilations = () => {
	const navigate = useNavigate();
	const { slug } = useParams();
	const [compilationFromUrl] = wordCompilationGroups.filter((group) => group.slug === slug);

	const [currentGroup, setCurrentGroup] = useState(slug ? compilationFromUrl.group : 6);

	const { pathname } = useLocation();

	useLayoutEffect(() => {
		window.scrollTo(0, 0); // Прокрутка страницы к верху при изменении маршрута
	}, [pathname]);

	const onMenuSelect = ({ key }: { key: string }) => {
		const keyNumber = Number(key);
		const [wordCompilationGroup] = wordCompilationGroups.filter(
			(item) => item.group === keyNumber,
		);
		const slug = wordCompilationGroup.slug;

		setCurrentGroup(keyNumber);
		navigate(slug ? `/${wordsCompilations}/${slug}` : `/${wordsCompilations}`);
	};

	return (
		<>
			<Helmet>
				<title>Подборки слов</title>
			</Helmet>
			<Layout hasSider style={{ minHeight }}>
				<Sider
					width={300}
					style={{
						overflow: 'auto',
						position: 'sticky',
						left: 0,
						top: headerHeight,
						bottom: 0,
						height: minHeightWithoutHeader,
						paddingTop: 16,
					}}
				>
					<Menu
						items={items1}
						theme="dark"
						defaultSelectedKeys={[`${currentGroup}`]}
						onSelect={onMenuSelect}
					/>
				</Sider>
				<Content style={{ padding: '16px 0' }}>
					<Flex align="center" vertical>
						<div>
							{currentGroup === 6 ? (
								<Flex vertical align="center">
									<Title style={{ margin: 0 }}>Подборки слов</Title>
									{wordCompilationGroups.map((compilation, groupNumber) => {
										return (
											groupNumber !== 6 && (
												<Compilations
													title={compilation.title}
													group={compilation.group}
													key={groupNumber}
												/>
											)
										);
									})}
								</Flex>
							) : (
								<Compilations
									title={wordCompilationGroups[currentGroup!].title}
									group={wordCompilationGroups[currentGroup!].group}
									h1
								/>
							)}
						</div>
					</Flex>
				</Content>
			</Layout>
		</>
	);
};

export default WordCompilations;
