const INITIAL_STATE = {
    details : '',
    commits : []
}

export default (state = INITIAL_STATE, action) => {
    // console.log('reducer', action)
    switch(action.type) {
        case 'DETAILS_LOADED':
            return {...state, details: action.payload}
        case 'COMMITS_LOADED':
            if(state.commits){
                return {...state, commits: state.commits.concat(action.payload)}
            } else {
                return {...state, commits: action.payload}
            }
        default:
            return state
    }
}