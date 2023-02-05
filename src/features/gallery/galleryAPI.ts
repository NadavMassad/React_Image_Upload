import axios from  'axios';
import { MY_SERVER } from '../../env';
import {Img} from '../../models/Image';

export const  getImages = async() =>{
  return await axios.get(MY_SERVER).then((res) => res.data);
}
