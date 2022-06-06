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
			<MaterialIcon name="filter_list" size={26} color="#32CD32" />

			<select name="filter" id="filter">
				<option value="01">Mais recentes</option>
				<option value="02">Mais antigos</option>
				<option value="03">Maior valor </option>
				<option value="04">Meno valor</option>
			</select>

		</Container> 
	);

};

export default FilterSearch;

