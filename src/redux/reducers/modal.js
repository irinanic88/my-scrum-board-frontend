import {OPEN_CREATE_TICKET_MODAL, CLOSE_CREATE_TICKET_MODAL} from '../actionTypes';

const initialModalState = {
    displayCreateTicketWindow: false,
    displayDescriptionWindow: false,
};

export default (state = initialModalState, action) => {
    const {type} = action;
    switch(type) {
        case OPEN_CREATE_TICKET_MODAL:
            return {...state, displayCreateTicketWindow: true};
        case CLOSE_CREATE_TICKET_MODAL:
            return {...state, displayCreateTicketWindow: false};
        default:
            return state;
    }       
};