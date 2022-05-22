import React, {useState} from 'react';

import MaterialIcon from '../MaterialIcon'

import {
	Container,
	HeaderContainer,
	HeaderTab
} from './styles'

interface IDataTopTabBox {
	icon: string;
	name: string;
	text: string;
	Component: React.FC;
}

interface TopTabBoxProps {
	data?: IDataTopTabBox[];
};

const testData: IDataTopTabBox[] = [{
		name: "historico",
		icon:"history", 
		text:"Historico",
		Component: () => (<p>Teste</p>)
}]

const TopTabBox: React.FC<TopTabBoxProps> = ({ data=testData, ... rest }) => {
	
	const [actualPageIndex, setActualPageIndex] = useState<number>(0);

	const pageInfo = data[actualPageIndex];

	return (
		<Container { ... rest } > 
			<HeaderContainer>
				{
					data.map( (value, index) => (
						<HeaderTab key={index} selected={index == actualPageIndex}>
							<MaterialIcon name={value.icon} size={26} color="black"/>
							<span>{value.text}</span>
						</HeaderTab>
					))
				}
			</HeaderContainer>

			<pageInfo.Component />

		</Container> 
	);

};

export default TopTabBox;

