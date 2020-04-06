
import Category from '../../model/Category';
export const SET_CATEGORY = 'SET_CATEGORY';


export const fetchCategory = () =>{
    
    return async dispatch =>{
        const response = await fetch(
           'http://young-cove-81839.herokuapp.com/api/category'
        );
        const resData = await response.json();
        
        const loadedCategory = [];
        for(const key in resData.data){
            
            loadedCategory.push(new Category(
                resData.data[key].id,
                resData.data[key].name,
                resData.data[key].imageUrl,
                resData.data[key].status
            ));
        }
        // console.log(loadedCategory);
        console.log(resData.data[0].id);
        dispatch({
            type:SET_CATEGORY,
            category:loadedCategory
        })
    }


}
