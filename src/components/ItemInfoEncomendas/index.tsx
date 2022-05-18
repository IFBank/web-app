import React from 'react';

import {
	Container,
	Img,
	TextContainer,
	Title,
	Info
} from './styles'

interface ComponentProps {
};

const Component: React.FC<ComponentProps> = ({ ... rest }) => {
	
	return (
		<Container { ... rest } > 

			<Img />
			<TextContainer>
				<Title>
					{"Coxinha de Frango"}
				</Title>

				<Info> Quant: <span>{'1'} unid.</span> </Info>
				<Info> Total: <span>R$ {'1'} </span> </Info>
			</TextContainer>
		</Container> 
	);

};

export default Component;

