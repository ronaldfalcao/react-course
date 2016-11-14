import React from 'react';

import PlacarConteiner from './PlacarConteiner';

const dados = {

	partida: {
		estadio: "Pacaembu/SP",
		data: "19/05/2017",
		horario: "19h"
	},

	casa:{
		nome: "Corinthians",
	},

	visitante:{
		nome:"Portuguesa"
	}
};

export default class App extends React.Component{

	render(){
		return (

				<PlacarConteiner partida = {dados.partida} 
								 casa = {dados.casa}
								 visitante = {dados.visitante}
				/>

			);
	}
}