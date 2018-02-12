/**
 * Created by Administrator on 2018/2/12.
 */
import axios from 'axios';
// 增加默认的请求路径
axios.defaults.baseURL="http://localhost:3000";//baseURL一定要写对
//如果使用这个拦截方法 home.vue中的getHot等等方法的书写结果就发生改变
//即：async getHot(){asynlet {data:hotBooks}=await getHotBook();this.hotBooks=hotBooks}变为  async getHot(){this.hotBooks=await getHotBook();}

axios.interceptors.response.use((res)=>{
  return res.data;//这里统一拦截结果 把结果处理成res.data；
})
const getHome=()=>{
  return axios.get('/home')
}
export default getHome
