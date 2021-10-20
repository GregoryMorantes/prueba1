import { connect } from "react-redux";

const List = (props) => {

    console.log(props.lista.items);

    return (  
        <ul className="ml-5">
            {props.lista.items !== undefined ? props.lista.items.map( function (lista) {
                return (
                    <li>
                        <img src={lista.avatar_url} className="imagen_perfil" /> 
                        <span className="ml-5">{lista.login}</span>
                    </li>
                )
            }): <p>sin datos</p>}
        </ul>
    );
}

const mapStateToProps = (state) => {
	return {
        lista: state.listaUsuario
	};
};

export default connect(mapStateToProps)(List);