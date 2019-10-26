import axios from 'axios';

import{
	REGISTER_SUCCES,
	REGISTER_FAIL,
	REGISTER_SUCCESS
} from './types'

//REGISTER USER

export const register = ({email,password})=>async dispatch =>{
	const config = {
		headers:{
			"Content-Type":"application/json"
		}
	}
	const body = JSON.stringify({email,password})
	try {
		const res = await axios.post('',body,config);
		dispatch({
			type:REGISTER_SUCCESS,
			payload:res.data
		})
		
	} catch (error) {
		dispatch({
			type:REGISTER_FAIL
		})
		
	}
}