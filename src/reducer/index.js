import {
    AGREGAR_CONSULTA,
    ELIMINAR_CONSULTA,
    INFO_USER
} from '../types/';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state, action) {
    switch (action.type) {
        case AGREGAR_CONSULTA:
            return {
                ...state,
                listaUsuario: action.payload,
            };
        case ELIMINAR_CONSULTA:
            return {
                ...state,
                listaUsuario: action.payload,
            };
        case INFO_USER:
            return {
                ...state,
                InfoUser: action.payload
            };
        default:
            return state;
    }
}
