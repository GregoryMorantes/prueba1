import store from '../store';
import { addInfoUser } from "../actions";

const Item = ({lista}) => {
    const redireccionarDetalles = (lista) => {
        console.log(store.dispatch(addInfoUser(lista)))
    }

    return (
        <ul>
            <li>
                <span
                    onClick={() => redireccionarDetalles(lista)}
                >
                    <img src={lista.avatar_url} alt={lista.login} className="imagen_perfil" />
                    {lista.login}
                </span>
            </li>
        </ul>
    );
}
 
export default Item;