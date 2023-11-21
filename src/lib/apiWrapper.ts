import axios from "axios";
import UserType from "../types/auth";
import QuestionType from '../views/AllQuestions'
import APIResponse from "../types/api";

// interface Question {
//     question: string
//     answer: string
// }
// interface APIResponse<T> {
//     data?: T
//     error?:string
// }
const base: string = 'https://cae-bookstore.herokuapp.com/question'
const questionEndpoint: string = '/all'
const userEndPoint: string = '/user'
const loginEndPoint: string = '/login'

const apiClientNoAuth = () => axios.create(
    {
        baseURL: base
    }
)
const apiClientBasicAuth = (email:string, password:string) => axios.create(
    {
        baseURL: base,
        headers: {
            Authorization: 'Basic' + btoa(`${email}:${password}`)
        }
    }
)
async function getAllQuestions(): Promise<APIResponse<QuestionType[]>> {
    let data;
    let error;
    try {
        const response = await apiClientNoAuth().get(questionEndpoint);
        return {data: response.data}
} catch(err) {
    if (axios.isAxiosError(err)) {
        error = err.message
    } else {
        error = 'something went wrong in: getAllQuestions fxn of APIWrapper'
    }
    return {data, error}
}
}

async function createNewUser(newUserData:Partial<UserType>): Promise<APIResponse<UserType>> {
    let data;
    let error;
    try {
        const response = await apiClientNoAuth().post(userEndPoint, newUserData)
        data = response.data
    } catch(err) {
        if (axios.isAxiosError(err)) {
            error = err.message
        } else {
            error = "something went wrong in createNewUser function of APIWrapper"
        }
    }
    return {data,error}
}

async function login(email:string, password:string): Promise<APIResponse<T>> {
    let data;
    let error;
    try{
        const response = await apiClientBasicAuth(email, password).get(loginEndPoint);
        data = response.data
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.response?.data.error
            console.log('error in axios')
        } else {
            error = 'Something went wrong with LOGIN in APIWrapper'
        } 
        
    }
    return {data, error}
}

export { 
    getAllQuestions,
    createNewUser,
    login
}