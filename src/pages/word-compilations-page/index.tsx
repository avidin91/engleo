import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Flex, Layout, Menu, MenuProps, Typography } from 'antd';
import { headerHeight, minHeight, minHeightWithoutHeader } from '@shared/constants/constants';
import { useNavigate, useParams } from 'react-router-dom';
import { wordCompilationGroups } from '../../mocks/wordCompilationGroups';
import { wordsCompilations } from '@shared/constants/urls';
import useScrollToTop from '@shared/hooks/useScrollToTop';
import CompilationMini from '@entities/compilation-mini';
import { wordCompilations } from '../../mocks/wordCompilations';

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

	const newCompilations = wordCompilations.filter((c) => c.group.includes(currentGroup));

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
						{currentGroup === 6 ? (
							<>
								<Title style={{ margin: 0 }}>Подборки слов</Title>

								<Flex vertical align="center" gap={32}>
									{wordCompilationGroups.map((compilation, groupNumber) => {
										const newCompilations = wordCompilations.filter((c) =>
											c.group.includes(groupNumber),
										);
										return newCompilations.map((compil, i) => {
											return (
												groupNumber !== 6 && (
													<>
														{i === 0 && (
															<Title
																level={3}
																style={{
																	textAlign: 'center',
																	color: '#595959',
																}}
															>
																{compilation.title}
															</Title>
														)}
														<CompilationMini
															groupSlug={compilation.slug}
															parentLink={wordsCompilations}
															key={groupNumber}
															entity={compil}
															tag
														/>
													</>
												)
											);
										});
									})}
								</Flex>
							</>
						) : (
							<>
								<Title level={1} style={{ textAlign: 'center' }}>
									{compilationFromUrl.title}
								</Title>
								<Flex vertical gap={32}>
									{newCompilations.map((compil, i) => {
										return (
											<>
												<CompilationMini
													groupSlug={compilationFromUrl.slug}
													parentLink={wordsCompilations}
													entity={compil}
													tag
												/>
											</>
										);
									})}
								</Flex>
							</>
						)}
					</Flex>
				</Content>
			</Layout>
		</>
	);
};

export default WordCompilationsPage;
