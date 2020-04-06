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
    
        // console.log(name,email,password);

        const response = await fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD4oTgzhKvN4E75yz0-X_O-mvYrVtE6mWw`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: email,
                password: password,
                displayName:name,
                returnSecureToken: true
              })
            }
        );

        let errorMessage = "";

        if(!response.ok){
            const errors = await response.json();
            const errInfo = errors.error.message;
            if(errInfo === 'EMAIL_EXISTS'){
                errorMessage = "Email has exist";
            }else if(errInfo === "WEAK_PASSWORD"){
                errorMessage = "Password have to more than 6 characters";
            }else{
                errorMessage = "Somethings went wrong!!";
            }
            throw new Error(errorMessage);
        }
        
        const resData = await response.json();

    
        dispatch(authenticate(resData.localId,resData.idToken,name));

        const expirationDate = new Date(new Date().getTime() + parseInt(resData.expiresIn) * 1000);
        saveDataToStorage(resData.idToken,resData.localId,expirationDate);

  };

};



export const login = (email,password) =>{
    return async dispatch =>{
        


            const response = await fetch(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD4oTgzhKvN4E75yz0-X_O-mvYrVtE6mWw`,
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

              // console.log(await response.json());
              if (!response.ok) {
                const errorResData = await response.json();
                const errorId = errorResData.error.message;
                let message = "";
                 
                  if(errorId === 'EMAIL_NOT_FOUND'){
                    message = "This email could not be found!!!";
                  }else if(errorId === 'INVALID_PASSWORD'){
                    message = "The password is not valid!!!";
                  }else{
                    message = "something went wrong!!!"
                  }
                  
                  throw new Error(message);
              }

              const resData = await response.json();
              // console.log(resData.idToken);
              // console.log("-=====--");
              // console.log(resData.localId);
              
              console.log(resData);
              // console.log(new Date().getTime());

              const expirationDate = new Date(new Date().getTime() + parseInt(resData.expiresIn) * 1000);

              saveDataToStorage(resData.idToken,resData.localId,expirationDate);

              dispatch(authenticate(resData.localId,resData.idToken,resData.displayName));
    }
}

export const logout = () =>{

    console.log('logged out');
    return{type: LOGOUT};

}


const saveDataToStorage =  (token,userId,expirationDate) =>{
    AsyncStorage.setItem('userData',JSON.stringify({
        token: token,
        userid : userId,
        expiryDate : expirationDate.toISOString()
      })
    );
};