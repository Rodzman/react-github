import axios from 'axios'

const URL = 'http://api.github.com/search/repositories?q=user:globocom&sort=stars&order=desc'
const header = {
        "Authorization": "Basic cm9kem1hbjpkaWdhbzQ3Njk=",
        "Cache-Control": "no-cache",
        "Postman-Token": "7747426d-730d-41c0-959b-a0636230a4ab"
      }

export const search = () => {
    return dispatch => {
        axios.get(URL, {Headers:header})
            .then(resp => dispatch({type: 'REPO_LOADED', payload: resp.data}))
    }
}
