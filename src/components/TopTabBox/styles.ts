import styled from 'styled-components';

interface IHeaderTabProps {
	selected: boolean;
	key: number;
}

export const Container = styled.div`
	border-radius: 10px;
	box-shadow: 0px 4px 4px 0px #00000040;
`;

export const HeaderContainer = styled.div`
	display: flex;
	box-shadow: 0px 4px 4px 0px #00000040;

	margin-bottom: 24px;

`;

export const HeaderTab = styled.div<IHeaderTabProps>`
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 12px 0;

	flex: 1;
	
	${ ({selected}) => selected && "border-bottom: #32DC32 solid 3px;"}

	> span {
		margin-left: 12px;
	}
`;
