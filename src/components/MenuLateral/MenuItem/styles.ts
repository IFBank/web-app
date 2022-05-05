import styled from 'styled-components';

interface ContainerProps {
	selected: boolean;
};

export const Container = styled.div<ContainerProps>`
	width: width: 100%;
	height: 60px;

	display: flex;
	justify-content: center;
	align-items: center;

	margin-top: 24px;

	cursor: pointer;

	${
	({selected}) => selected && `
		border-left: 4px solid var(--color-background);
	`
	}

`;