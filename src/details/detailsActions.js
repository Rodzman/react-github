import axios from 'axios'

const ProjectURL = 'https://api.github.com/repos/globocom'
const headers = {"Authorization": "Basic cm9kem1hbjpkaWdhbzQ3Njk="}

export const getDetails = (repo) => {
        return dispatch => {
            axios({
                method: 'get',
                url: `${ProjectURL}/${repo}`,
                headers: {
                    "Authorization": "Basic cm9kem1hbjpkaWdhbzQ3Njk=",
                }
            }).then(resp => dispatch({type: 'DETAILS_LOADED', payload: resp.data}))
        }
}

export const getCommits = (repo, page=1, per_page=20) => {
        return dispatch => {
            axios({
                method: 'get',
                url: `https://api.github.com/repos/globocom/${repo}/commits?page=${page}&per_page=${per_page}`,
                headers: {
                    "Authorization": "Basic cm9kem1hbjpkaWdhbzQ3Njk=",
                }
            }).then(resp =>  dispatch({type: 'COMMITS_LOADED', payload: resp.data}))
        }
}