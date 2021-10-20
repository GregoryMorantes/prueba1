import {
    AGREGAR_CONSULTA,
    ELIMINAR_CONSULTA
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