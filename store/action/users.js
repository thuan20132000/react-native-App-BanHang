
import Users from '../../model/Users';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';



export const userLogin = (email,password) =>{
    // console.log(email + '- '+ password);

        if(email && password){
           var username = email.replace(/\s/g,'');
           var userpass = password.replace(/\s/g,'');
        }

        var token = "" ;
        if(username == "thuantruong" || userpass == "12345"){
            token = "token-thuantruong";
        }
    
    return {type:LOGIN,user:{username,userpass},token};
}

export const userLogOut = () =>{
    // console.log(email + '- '+ password);
    console.log('log out');
        var token = "" ;
       
    
    return {type:LOGOUT,token};
}
