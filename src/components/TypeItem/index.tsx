import React from 'react';

import MaterialIcon from '../MaterialIcon';

import {
	Container
} from './styles'

interface TypeItemProps {
};

// TODO: Corrigir icone
// TODO: Estilizar select

const TypeItem: React.FC<TypeItemProps> = ({ ... rest }) => {
	
	return (
		<Container { ... rest } > 
			<MaterialIcon name="format_list_bulleted" size={26} color="#32CD32" />

			<select name="type" id="type">
				<option value="food">Comida</option>
				<option value="drink">Bebida</option>
			</select>

		</Container> 
	);

};

export default TypeItem;

