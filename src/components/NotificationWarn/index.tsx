import React from 'react';

import {
	Container,
	MaterialIconBordered
} from './styles'

interface NotificationWarnProps {
};

const NotificationWarn: React.FC<NotificationWarnProps> = ({ ... rest }) => {
	// TODO: onClick slideout
	
	return (
		<Container { ... rest } > 
			<MaterialIconBordered name="done" color="white'" size={24} />
			<p>
				Texto
			</p>
		</Container> 
	);

};

export default NotificationWarn;

