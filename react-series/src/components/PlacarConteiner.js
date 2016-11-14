import React from 'react';

import Time from './Time';
import Partida from './Partida';

export default class PlacarConteiner extends React.Component{

	constructor(){

		super();

		this.state = {
			gols_casa: 0,
			gols_visitante: 0
		};
	}

	marcarGolCasa(){
		this.setState({
			gols_casa: this.state.gols_casa + 1
		});
	}

	marcarGolVisitante(){
		this.setState({
			gols_visitante: this.state.gols_visitante + 1
		});
	}
	
	render(){

		const {partida, casa, visitante} = this.props;

		const estilo_container = {
									width: "50%", 
									height: "25%", 
									position:"absolute",
									border: "1px dotted",
									fontFamily: "Roboto"
								};

		const estilo_time = {
								width: "30%",
								color: "gray", 
								float:"left", 
								textAlign: "center"
							};

		const estilo_partida = {
									width: "30%", 
									float:"left",
									textAlign: "center",
									fontStyle: "italic",
									fontSize: "0.7em",
									top: "30px"
								}; 

		return (

			<div style={estilo_container}>
				
				<div style={estilo_time}>
					<Time nome={casa.nome} gols={this.state.gols_casa} 
										   marcarGol = {this.marcarGolCasa.bind(this)}
				/>
				</div>

				<div style={estilo_partida}>
					<Partida {...partida}
					/>
				</div>
				
				<div style={estilo_time}>
					<Time nome={visitante.nome} gols={this.state.gols_visitante}
												marcarGol = {this.marcarGolVisitante.bind(this)}
					/>
				</div>
			</div>


			);
	}

}

PlacarConteiner.propTypes = {

	clima: React.PropTypes.string,
	tempo: React.PropTypes.number.isRequired
};

PlacarConteiner.defaultProps = {

	clima: "Ensolarado"
};