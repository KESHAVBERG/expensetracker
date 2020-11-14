export default (state, action) => {
    switch (action.type) {
        case "delete_item":
            return {
                ...state,
                transations: state.transations.filter(trans => trans.id !== action.payload)
            }
        case "add_item":
            return {
                ...state,
                transations: [action.payload,...state.transations,]
            }
        default:
            return state;
    }
}