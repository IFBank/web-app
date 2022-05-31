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

interface NewItemPageProps {
};

const NewItemPage: React.FC<NewItemPageProps> = () => {


	// TODO: pegar dados do item a partir do id da url

	// Esses são apenas para o teste
	const imagemItem  = "";
	const name  = "Teste"
	const price  = 12.5
	const quant  = 1

	return (
		<Container
			titleHeader="Cadastro de mercadoria" 
			subTitleHeader="Preencha os campos e cadastre um produto."
			textCancelButton="Cancelar cadastro"
		>

			<FormStyled>
				<InputImage>
					<img src={imagemItem} alt="" />
					<input type="file" hidden />
				</InputImage>

				<OutrosInputs>
					<GenericInput
						gradient="primary" 
						textLabel="Nome"
						name="name"
						defaultValue={name}
					/>

					<InputDuplo>
						<GenericInput 
							gradient="primary" 
							textLabel="Preço"
							name="price"
							inputType="number"
							placeholder="0,00"
							textSide="R$"
							defaultValue={price}
						/>
						<GenericInput 
							gradient="primary" 
							textLabel="Estoque"
							name="quant"
							inputType="number"
							placeholder="0"
							textSide="unid."
							defaultValue={quant}
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
