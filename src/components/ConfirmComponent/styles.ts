import styled from 'styled-components';

import React from 'react';

import MaterialIcon from '../MaterialIcon'

interface IIconButtonProps {
	bgColor: string;
	name: string;
	color: string;
	size: number;
};

export const Container = styled.div`
	display: flex;
	align-items: center;

	> span{
		font-family: Ubuntu;
		font-weight: 700;
		font-size: 24px;
		color: black;
	}

`;

export const IconButton = styled(MaterialIcon)`
	border-radius: 5px;
	background: var(${ ({bgColor}) => `--linear-${bgColor}`});

	display: flex:
	justify-content: center;
	align-items: center;

	cursor: pointer;

	margin-left: 24px;

	width: 40px;
	height: 40px;
`
