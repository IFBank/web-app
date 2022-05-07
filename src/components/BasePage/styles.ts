import styled from 'styled-components';

// COMPONENTES DE BASE
export const Container = styled.div`
	width: 100%;
	height: 100vh;
`;

export const Content = styled.div`
	width: 100%;
	height: 100%;
	padding-left: 70px;
	
	display: flex;
	flex-direction: column;
`;

export const HeaderContainer = styled.header`
	width: 100%;
	
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	padding: 36px 60px;
`;

export const MainContent = styled.main`
	flex: 1;
`;