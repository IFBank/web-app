import React from 'react';

import {
	Container
} from './styles'

interface HeaderTitleProps {
	title: string;
	subTitle: string;
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title, subTitle, ... rest}) => {
	return (
		<Container 	
			{ ... rest }
		>
			<h2 className="ubuntu-font" >{title}</h2>
			<h3 className="mukta-font" >{subTitle}</h3>
		</Container>
	);
}

export default HeaderTitle;