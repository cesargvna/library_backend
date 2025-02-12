import jwt from 'jsonwebtoken';
import  {SECRET} from './config';


const tokenSign= async (user:any) =>{
    const userForToken = {
        username: user.username,
        id: user.id
    };
    const sign = jwt.sign(userForToken, SECRET,{expiresIn: 60*60});
    return sign;
}

export {tokenSign};