import * as actionTypes from './action.js';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADDPERSON: 
            const updated_persons = [...state.persons];
            updated_persons.push(action.newPerson)
            console.log(updated_persons);
            return {
                persons: updated_persons
            };
        break;

        case actionTypes.DELETEPERSON:
            console.log(action.id);
            const deleted_persons = state.persons.filter((element) => {
                return element.id !== action.id
            })
            return {
                persons: deleted_persons
            }
        default:
            return state;
    }
}

export default reducer;