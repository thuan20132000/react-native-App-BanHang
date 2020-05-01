import { AsyncStorage } from "react-native";

export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const AUTHENTICATE  = 'AUTHENTICATE';

export const authenticate = (userId,token,name) =>{
  return{
       type:AUTHENTICATE,
       userId :userId,
       token:token,
       name:name
  }
}

export const signup = (name,email,password) => {

  return async dispatch => {
    
        const response = await fetch(
            `http://45.32.59.144/api/register`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: email,
                password: password,
                c_password:password,
                name:name,
                returnSecureToken: true
              })
            }
        );

        let errorMessage = "";

        if(!response.ok){
            const errors = await response.json();
            // const errInfo = errors.error.message;
            // if(errInfo === 'EMAIL_EXISTS'){
            //     errorMessage = "Email has exist";
            // }else if(errInfo === "WEAK_PASSWORD"){
            //     errorMessage = "Password have to more than 6 characters";
            // }else{
            //     errorMessage = "Somethings went wrong!!";
            // }
            throw new Error(errorMessage);
        }
        
        const resData = await response.json();

    
        dispatch(authenticate(resData.success.id,resData.success.token,resData.success.name));

        const expirationDate = new Date(new Date().getTime() * 3360);
        saveDataToStorage(resData.success.token,resData.success.id,expirationDate,name);

  };

};



export const login = (email,password) =>{
    return async dispatch =>{
        
            const response = await fetch(
                `http://45.32.59.144/api/login`,
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                },
                  body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                  })
                }
              );

              if (!response.ok) {
                const errorResData = await response.json();
                const errorId = errorResData.error.message;
                let message = "";
                 
                  // if(errorId === 'EMAIL_NOT_FOUND'){
                  //   message = "This email could not be found!!!";
                  // }else if(errorId === 'INVALID_PASSWORD'){
                  //   message = "The password is not valid!!!";
                  // }else{
                  //   message = "something went wrong!!!"
                  // }
                  
                  throw new Error(message);
              }

              const resData = await response.json();
              console.log(resData);
              
              // console.log(resData.idToken);
              // console.log("-=====--");
              // console.log(resData.localId);
              
              // console.log(new Date().getTime());

              const expirationDate = new Date(new Date().getTime() + 3600);

              saveDataToStorage(resData.success.token,resData.success.id,expirationDate,resData.success.name);

              dispatch(authenticate(resData.success.id,resData.success.token,resData.success.name));
    }
}

export const logout = () =>{

    console.log('logged out');
    return{type: LOGOUT};

}


const saveDataToStorage =  (token,userId,expirationDate,name) =>{
    AsyncStorage.setItem('userData',JSON.stringify({
        token: token,
        userId : userId,
        expiryDate : expirationDate.toISOString(),
        name:name
      })
    );
};