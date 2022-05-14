import React from 'react';

import {
	Container,
	Dashed,
} from './styles';

interface LeadingTextProps {
	fontColor?: string;
	name?: string;
	valueString?: string;
};

const LeadingText: React.FC<LeadingTextProps> = (
	{	
		name="Teste",
		valueString="0,00",
		fontColor="black",
		... rest 
	}
) => {

	return (
		<Container fontColor={fontColor} >
		{name} <Dashed /> <span>R$ {valueString}</span>
		</Container>
	);
}

export default LeadingText;
