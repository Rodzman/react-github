import axios from 'axios'

export const search = () => {
    return dispatch => {
        let response = []
        const getData = (page = 1, per_page = 100) => {
            axios({
                method: 'get',
                url: `https://api.github.com/search/repositories?q=user:globocom&sort=stars&order=desc&page=${page}&per_page=${per_page}`,
                headers: {
                    "Authorization": "Basic cm9kem1hbjpkaWdhbzQ3Njk=",
                }
            }).then(resp => {
                        response = response.concat(resp.data.items)
                        const count = resp.data.total_count/100
                        if(page <= Math.round(count)){
                            let newPage = page + 1
                            getData(newPage)
                        }
                        dispatch({type: 'REPO_LOADED', payload: response})
                    })
        }
        getData()
    }
}
