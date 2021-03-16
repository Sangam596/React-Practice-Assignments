//This is not the file of axios folder t demonstraton of setting defferent base url by creating an instance
import axios from "axios";

const instance = axios.create({
   baseURL:'https://jsonplaceholder.typicode.com' 
})

axios.defaults.headers.common['Autherzation'] = 'AUTH TOKEN From Instance';

export default instance;
