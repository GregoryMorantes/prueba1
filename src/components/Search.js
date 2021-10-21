import { createRef } from "react";
import { addAction } from "../actions";
import Api from '../config/Api';
import store from '../store'

const Search = () => {

    const inputRef = createRef();
    const keySend = () => {
        let inputVal = inputRef.current.value;
        if (inputVal !== '') {
            Api.getUser(inputVal).then(res => store.dispatch(addAction(res.data)));
        }
    }

    return (  
        <div className="container_form">
                <p>Haz la busqueda de tu usuario de <b>GitHub</b></p>
                <input 
                    ref={inputRef}
                    type="text"
                    className="form-control w-75"
                    placeholder="Busca el usuario"
                    onKeyDown={keySend}
                />
        </div>
    );
}

export default Search;