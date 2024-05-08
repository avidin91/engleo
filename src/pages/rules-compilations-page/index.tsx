import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Flex, Layout, Menu, MenuProps, Typography } from 'antd';
import { headerHeight, minHeight, minHeightWithoutHeader } from '@shared/constants/constants';
import { useNavigate, useParams } from 'react-router-dom';
import { rulesCompilations, wordsCompilations } from '@shared/constants/urls';
import useScrollToTop from '@shared/hooks/useScrollToTop';
import { rulesGroups } from '../../mocks/rulesGroups';
import CompilationMini from '@entities/compilation-mini';
import { newRules } from '../../mocks/newRules';

const { Sider, Content } = Layout;
const { Title } = Typography;

const items: MenuProps['items'] = rulesGroups.map((compilation) => ({
	key: compilation.group,
	label: compilation.title,
}));

const RulesCompilationsPage = () => {
	useScrollToTop();
	const navigate = useNavigate();
	const { groupTitle } = useParams();
	const [compilationFromUrl] = rulesGroups.filter((group) => group.slug === groupTitle);

	const [currentGroup, setCurrentGroup] = useState(groupTitle ? compilationFromUrl.group : 0);

	const onMenuSelect = ({ key }: { key: string }) => {
		const keyNumber = Number(key);
		const [rulesGroup] = rulesGroups.filter((item) => item.group === keyNumber);
		const slug = rulesGroup.slug;

		setCurrentGroup(keyNumber);
		navigate(slug ? `/${rulesCompilations}/${slug}` : `/${rulesCompilations}`);
	};

	const newCompilations = newRules.filter((c) => c.group.includes(currentGroup));
	console.log('rulesGroups[currentGroup].slug = ', rulesGroups[currentGroup].slug);

	return (
		<>
			<Helmet>
				<title>Подборки правил</title>
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
							<Title level={1} style={{ textAlign: 'center' }}>
								{rulesGroups[currentGroup!].title}
							</Title>
							<Flex vertical gap={32}>
								{newCompilations.map((compil, i) => {
									return (
										<>
											<CompilationMini
												groupSlug={rulesGroups[currentGroup].slug}
												parentLink={rulesCompilations}
												entity={compil}
											/>
										</>
									);
								})}
							</Flex>
						</div>
					</Flex>
				</Content>
			</Layout>
		</>
	);
};

export default RulesCompilationsPage;
