import React from 'react';

import MaterialIcon from '../../MaterialIcon'

import {
	Container
} from './styles';


interface MenuItemProps {
	nameIcon: string;
	selected?: boolean;
};

const MenuItem: React.FC<MenuItemProps> = ({nameIcon, selected=false, ... rest}) => {
	return (
		<Container selected={selected} { ... rest } >
			<MaterialIcon name={nameIcon} size={36} color={selected ? "#FEFFFE" : "#d4d5d4"}/>
		</Container>
	);
}

export default MenuItem;