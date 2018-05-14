const INITIAL_STATE = {
    repos: [],
    total_count: ''
 }

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case 'REPO_LOADED':
            return {...state, repos: action.payload}
        default:
            return state
    }
}