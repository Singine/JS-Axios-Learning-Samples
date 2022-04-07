
axios.defaults.method = 'GET'
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.params = {
    t: Date.now()
}
axios.defaults.timeout = 30000

axios({
    url: '/posts',
    data: {
        id: requestUrl
    }
})