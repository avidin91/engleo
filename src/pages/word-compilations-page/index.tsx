import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Flex, Layout, Menu, MenuProps, Typography } from 'antd';
import { headerHeight, minHeight, minHeightWithoutHeader } from '@shared/constants/constants';
import { useNavigate, useParams } from 'react-router-dom';
import { wordCompilationGroups } from '../../mocks/wordCompilationGroups';
import Compilations from '../../entities/word-compilations';
import { wordsCompilations } from '@shared/constants/urls';
import useScrollToTop from '@shared/hooks/useScrollToTop';

const { Sider, Content } = Layout;
const { Title } = Typography;

const items: MenuProps['items'] = wordCompilationGroups.map((compilation) => ({
	key: compilation.group,
	label: compilation.title,
}));

const WordCompilationsPage = () => {
	useScrollToTop();
	const navigate = useNavigate();
	const { groupTitle } = useParams();
	const [compilationFromUrl] = wordCompilationGroups.filter((group) => group.slug === groupTitle);

	const [currentGroup, setCurrentGroup] = useState(groupTitle ? compilationFromUrl.group : 6);

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
						items={items}
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

export default WordCompilationsPage;
