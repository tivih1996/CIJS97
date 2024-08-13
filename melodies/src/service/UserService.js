import axios from 'axios';

const fecthAllUserArtis = () => {
    return axios.get ("https://66b85bbc3ce57325ac76f381.mockapi.io/ListArtis" )
}

export { fecthAllUserArtis }