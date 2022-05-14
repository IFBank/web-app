import React from 'react';

import {
	Container
} from './styles';

interface DashboardPageProps {
};

const DashboardPage: React.FC<DashboardPageProps> = () => {

	return (
		<Container
			titleHeader="Dashboard" 
			subTitleHeader="Encontre aqui informações úteis referentes aos pedidos e a movimentação de dinheiro"
		>
		</Container>
	);
}

export default DashboardPage;
