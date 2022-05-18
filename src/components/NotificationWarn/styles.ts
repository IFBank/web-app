import styled from 'styled-components';

import MaterialIcon from '../MaterialIcon';

export const Container = styled.div`
	box-shadow: 0px 4px 4px 0px #00000040;

	position: fixed;
	top: 24px;
	right: 0;

	display: flex:
	align-items: center;

	padding: 13px 40px;
	padding-right: 60px;

	border-radius: 20px 20px 0 0;
	background: var(--linear-primary);

	@keyframes slidein {
		from {
			right: -100%;
		}

		to {
			right: 0;
	 	}
	}

	@keyframes slideout {
		from {
			
			right: 0;
		}

		to {
			right: -100%;
	 	}
	}
`;

export const MaterialIconBordered = styled(MaterialIcon)`
	border-radius: 50%;
	border: solid white 1px;

	margin-right: 25px;
`;

