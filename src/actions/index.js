import {
    AGREGAR_CONSULTA,
    ELIMINAR_CONSULTA,
    INFO_USER
} from '../types';

export function addAction(data) {
    return (dispatch) => {
        dispatch({ type: AGREGAR_CONSULTA, payload: data});
    }
}

export function deleteAction() {
    return (dispatch) => {
        dispatch({ type: ELIMINAR_CONSULTA, payload: []});
    }
}


export function addInfoUser(user) {
    return (dispatch) => {
        dispatch({ type: INFO_USER, payload: user });
    }
}

export function deleteInfoUser() {
    return (dispatch) => {
        dispatch({ type: INFO_USER, payload: {}});
    }
}