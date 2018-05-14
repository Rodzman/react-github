const INITIAL_STATE = {
    details : '',
    commits : []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DETAILS_LOADED':
            if(state.details !== action.payload){
                return {...state, details: action.payload}
            } else {
                return state
            }
        case 'COMMITS_LOADED':
            if(state.commits && state.commits !== action.payload && action.page !== 1){
                return {...state, commits: state.commits.concat(action.payload)}
            } else {
                return {...state, commits: action.payload}
            }
        default:
            return state
    }
}