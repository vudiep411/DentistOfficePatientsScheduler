import * as api from '../API/index'



export const signin = (formData, navigate) => async(dispatch) => {
    const {data} = await api.signIn(formData)
        try {
            if(data.message)
            {
                return data.message
            }
            else
            {
                dispatch({type: 'AUTH', data})
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }          
}