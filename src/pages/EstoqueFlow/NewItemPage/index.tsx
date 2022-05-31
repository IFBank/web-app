import React from 'react';

import GenericInput from '../../../components/GenericInput';
import GenericButton from '../../../components/GenericButton'

import {
	Container,
	InputImage,
	FormStyled,
	OutrosInputs,
	InputDuplo,

	ButtonContainer,
} from './styles';

import addImageItem from '../../../assets/addImageItem.png'

interface NewItemPageProps {
};

const NewItemPage: React.FC<NewItemPageProps> = () => {

	return (
		<Container
			titleHeader="Cadastro de mercadoria" 
			subTitleHeader="Preencha os campos e cadastre um produto."
		>

			<FormStyled>
				<InputImage>
					<input  type="image" src={addImageItem} alt=""/>
				</InputImage>

				<OutrosInputs>
					<GenericInput 
						textLabel="Nome"
						name="name"
					/>

					<InputDuplo>
						<GenericInput 
							textLabel="Preço"
							name="price"
							inputType="number"
							placeholder="0,00"
							textSide="R$"
						/>
						<GenericInput 
							textLabel="Estoque"
							name="quant"
							inputType="number"
							placeholder="0"
							textSide="unid."
							sideOnRight={false}
						/>
					</InputDuplo>
					
				</OutrosInputs>

			</FormStyled> 

			<ButtonContainer>
				<GenericButton text="Criar novo item" borderRadius={30} iconName="task" iconSize={36}/>
			</ButtonContainer>

			
		</Container>
	);
}

export default NewItemPage;
