import React from 'react';

import MaterialIcon from '../MaterialIcon';

import {
	Container
} from './styles'

interface FilterSearchProps {
};

// TODO: Corrigir icone
// TODO: Estilizar select

const FilterSearch: React.FC<FilterSearchProps> = ({ ... rest }) => {
	
	return (
		<Container { ... rest } > 
			<MaterialIcon name="task" size={26} color="black" />

			<select name="filter" id="filter">
				<option value="01">Teste</option>
				<option value="02">Teste</option>
				<option value="03">Teste</option>
				<option value="04">Teste</option>
			</select>

		</Container> 
	);

};

export default FilterSearch;

