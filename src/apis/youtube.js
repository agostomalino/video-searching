import axios from 'axios';
// const KEY = 'AIzaSyBX3X6T9XEOUy-M_M-EmUXMTfOcWtblYSg';
const KEY = 'AIzaSyBX3X6T9XEOUy-M_M-EmUXMTfOcWtblYSg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type:'video',
        maxResults: 5,
        key: KEY
    }
});