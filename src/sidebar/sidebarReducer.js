const INITIAL_STATE = {
    repos: []
 }

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case 'REPO_LOADED':
            return {...state, repos: action.payload.items}
        default:
            return state
    }
}