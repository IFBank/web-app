import styled from 'styled-components';

interface MaterialIconProps {
	color: string;
	size: number;
};

export const Container = styled.div<MaterialIconProps>`
	display: flex;
	justify-content: center.
	align-items: center;

	width: ${({size}) => `${size}px`};
	height: ${({size}) => `${size}px`};

	span {
		font-size: ${({size}) => `${size}px`};
		color: ${({color}) => color};
	}
`;