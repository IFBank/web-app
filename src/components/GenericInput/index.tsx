import React from 'react';

import {
	Container,
	LabelText,
	SideText,
	InputContainer
} from './styles'

interface GenericInputProps {
	textLabel?: string;
	name: string;
	placeholder?: string;
	inputType?: string;
	textSide?: string;
	sideOnRight?: boolean;
};

const GenericInput: React.FC<GenericInputProps> = (
	{ 
		textLabel="Input",
		name,
		placeholder="",
		textSide="",
		sideOnRight=true,
		inputType="text",
		... rest 
	}
) => {
	
	return (
		<Container { ... rest } > 
			<LabelText>{textLabel}</LabelText>
			<InputContainer sideOnRight={sideOnRight} >
				{textSide!="" && <SideText>{textSide}</SideText>}
				<input name={name} type={inputType} placeholder={placeholder} required />
			</InputContainer>
		</Container> 
	);

};

export default GenericInput;

