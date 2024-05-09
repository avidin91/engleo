import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Flex, Layout, Menu, MenuProps, Typography } from 'antd';
import { headerHeight, minHeight, minHeightWithoutHeader } from '@shared/constants/constants';
import { useNavigate, useParams } from 'react-router-dom';
import { wordsCompilations } from '@shared/constants/urls';
import { wordCompilations } from '../../mocks/wordCompilations';
import { newRulesGroups } from '../../mocks/newRulesGroups';
import { newWordCompilationGroups } from '../../mocks/newWordCompilationGroups';
import { newRules } from '../../mocks/newRules';
import CompilationMini from '@entities/compilation-mini';

const { Title } = Typography;

const { Sider, Content } = Layout;

const CompilationsPage = () => {
	const navigate = useNavigate();
	const { compilations, groupTitle } = useParams();

	const isWordCompilationPage = compilations === wordsCompilations;

	const compilationsGroups = isWordCompilationPage ? newWordCompilationGroups : newRulesGroups;

	const compilationsByUrls = isWordCompilationPage ? wordCompilations : newRules;

	const menuItems: MenuProps['items'] = compilationsGroups.map((compilation) => ({
		key: compilation.group,
		label: compilation.title,
	}));

	const numberOfCurrentGroupByUrl = groupTitle
		? compilationsGroups.find((group) => group.slug === groupTitle)?.group
		: 0;

	const [currentGroup, setCurrentGroup] = useState(numberOfCurrentGroupByUrl);

	const onMenuSelect = ({ key }: { key: string }) => {
		const keyNumber = Number(key);
		const [wordCompilationGroup] = compilationsGroups.filter(
			(item) => item.group === keyNumber,
		);

		const slug = wordCompilationGroup.slug;
		setCurrentGroup(keyNumber);
		navigate(slug ? `/${compilations}/${slug}` : `/${compilations}`);
	};

	const currentCompilation = compilationsByUrls.filter((compilation) =>
		compilation.group.includes(currentGroup ? currentGroup : 0),
	);

	const currentGroupByUrl = compilationsGroups.find((group) => group.slug === groupTitle);

	return (
		<>
			<Helmet>
				<title>{isWordCompilationPage ? 'Подборки слов' : 'Подборки правил'}</title>
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
						items={menuItems}
						theme="dark"
						defaultSelectedKeys={[`${currentGroup}`]}
						onSelect={onMenuSelect}
					/>
				</Sider>
				<Content style={{ padding: '16px 0' }}>
					<Flex align="center" vertical>
						{currentGroup === 0 ? (
							<>
								<Title style={{ margin: 0 }}>
									{isWordCompilationPage ? 'Подборки слов' : 'Подборки правил'}
								</Title>

								<Flex vertical align="center" gap={32}>
									{compilationsGroups.map((compilation, groupNumber) => {
										const newCompilations = compilationsByUrls.filter((c) =>
											c.group.includes(groupNumber),
										);
										return newCompilations.map((compil, i) => {
											return (
												groupNumber !== 6 && (
													<Fragment key={compil.slug}>
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
													</Fragment>
												)
											);
										});
									})}
								</Flex>
							</>
						) : (
							<>
								<Title level={1} style={{ textAlign: 'center' }}>
									{currentGroupByUrl!.title}
								</Title>
								<Flex vertical gap={32}>
									{currentCompilation.map((compil) => {
										return (
											<>
												<CompilationMini
													groupSlug={currentGroupByUrl!.slug}
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

export default CompilationsPage;
