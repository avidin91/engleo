import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Flex, Layout, Menu, MenuProps, Typography } from 'antd';
import { wordCompilationGroups } from '../../mocks/wordCompilationGroups';
import Compilations from '@entities/compilations';
import { headerHeight } from '@shared/constants/constants';
import { menuWordGroups } from '../../mocks/menuWordGroups';
import './styles.css';

const { Sider } = Layout;
const { Title } = Typography;

const items1: MenuProps['items'] = menuWordGroups.map((compilation) => ({
	key: compilation.group,
	label: compilation.title,
}));

const WordCompilations = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [siderWidth, setSiderWidth] = useState(300);
	const [activeMenuItem, setActiveMenuItem] = useState(6);

	const onCollapse = (isCollapsed: any) => {
		isCollapsed ? setSiderWidth(80) : setSiderWidth(300);
		setCollapsed(isCollapsed);
	};

	const onMenuSelect = ({ key }: { key: string }) => {
		setActiveMenuItem(Number(key));
	};

	return (
		<>
			<Helmet>
				<title>Подборки слов</title>
			</Helmet>
			<Layout hasSider>
				<Sider
					width={300}
					style={{
						overflow: 'auto',
						position: 'fixed',
						left: 0,
						top: 0,
						bottom: 0,
						paddingTop: headerHeight,
						zIndex: 1,
					}}
					collapsible
					collapsed={collapsed}
					onCollapse={onCollapse}
				>
					<Menu
						items={items1}
						theme="dark"
						defaultSelectedKeys={['6']}
						onSelect={onMenuSelect}
					/>
				</Sider>
				<Layout style={{ marginLeft: siderWidth, padding: '16px 0' }}>
					<Flex align="center" vertical>
						<div>
							{activeMenuItem === 6 ? (
								<Flex vertical align="center">
									<Title style={{ margin: 0 }}>Подборки слов</Title>
									{wordCompilationGroups.map((compilation, groupNumber) => (
										<Compilations
											title={compilation.title}
											group={compilation.group}
											key={groupNumber}
										/>
									))}
								</Flex>
							) : (
								<Compilations
									title={wordCompilationGroups[activeMenuItem].title}
									group={wordCompilationGroups[activeMenuItem].group}
								/>
							)}
						</div>
					</Flex>
				</Layout>
			</Layout>
		</>
	);
};

export default WordCompilations;
