import axios from "axios";
const instance= axios.create({
  baseURL:'https://vuejs-axios-blog-734ef-default-rtdb.firebaseio.com'
});
export default  instance;
