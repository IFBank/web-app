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
			textCancelButton="Cancelar cadastro"
		>

			<FormStyled>
				<InputImage>
					<img src={addImageItem} alt="" />
					<input type="file" hidden />
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
				<GenericButton text="Cadastrar produto" borderRadius={30} iconName="create" iconSize={36}/>
			</ButtonContainer>

			
		</Container>
	);
}

export default NewItemPage;
