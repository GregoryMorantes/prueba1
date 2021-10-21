import store from '../store';
import { addInfoUser } from "../actions";

const Item = ({lista}) => {
    const redireccionarDetalles = (lista) => {
        console.log(store.dispatch(addInfoUser(lista)))
    }

    return (
        <ul>
            <li>
                <button 
                onClick={() => redireccionarDetalles(lista)}>
                    {lista.login}
                </button>
            </li>
        </ul>
    );
}
 
export default Item;