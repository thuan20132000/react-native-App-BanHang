import Category from '../../model/Category';
export const SET_CATEGORY = 'SET_CATEGORY';


export const fetchCategory = () => {

    return async dispatch => {
        const response = await fetch(
            'http://45.32.59.144/api/categories'
        );
        const resData = await response.json();

        const loadedCategory = [];
        for (const key in resData.data) {

            loadedCategory.push(new Category(
                resData.data[key].id,
                resData.data[key].name,
                resData.data[key].image,
                resData.data[key].status
            ));

        }
        // console.log(loadedCategory);
        dispatch({
            type: SET_CATEGORY,
            category: loadedCategory
        })
    }


}