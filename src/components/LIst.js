import { connect } from "react-redux";
import Item from "./Item";

const List = (props) => {

    return (  
        <ul className="mt-5">
            {props.lista.items !== undefined ? props.lista.items.map(lista => (
              <Item 
                  key={lista.id}
                  lista={lista}
              />  
            )): <p>sin datos</p>}
        </ul>
    );
}

const mapStateToProps = (state) => {
	return {
        lista: state.listaUsuario
	};
};

export default connect(mapStateToProps)(List);