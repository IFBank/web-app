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
	defaultValue?: any;
	gradient?: string;
};

const GenericInput: React.FC<GenericInputProps> = (
	{ 
		textLabel="Input",
		name,
		placeholder="",
		textSide="",
		sideOnRight=true,
		inputType="text",
		defaultValue="",
		gradient="primary",
		... rest 
	}
) => {
	
	return (
		<Container { ... rest } > 
			<LabelText>{textLabel}</LabelText>
			<InputContainer sideOnRight={sideOnRight} gradient={gradient} >
				{textSide!="" && <SideText>{textSide}</SideText>}
				<input name={name} type={inputType} placeholder={placeholder} value={defaultValue} required />
			</InputContainer>
		</Container> 
	);

};

export default GenericInput;

