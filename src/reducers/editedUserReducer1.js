const initialState = null;

const editedUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_EDITED_USER":
            return action.payload;
        case "CLEAR_EDITED_USER":
            return null;
        default:
            return state;
    }
};

export default editedUserReducer;