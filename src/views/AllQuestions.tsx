import { useState, useEffect } from 'react'
import QuestionCard from '../components/QuestionCard';
import { getAllQuestions } from '../lib/apiWrapper'

type QuestionType = {
    answer: string,
    author: string,
    created_on: string,
    id: number,
    question: string
}

type Props = {}

export default function AllQuestions({}: Props) {
    const [questions, setQuestions] = useState<QuestionType[]>([]);

    useEffect(() => {
        // async function fetchData(){
        //     const response = await getAllQuestions();
        //     if (response.data){
        //         setQuestions(response.data)
        //     }        }
        // fetchData()
        
        // getAllQuestions().then( x=> console.log(x) )
        fetch('https://cae-bookstore.herokuapp.com/question/all')
            .then(res => res.json())
            .then(data => setQuestions(data.questions))
    }, [])

    return (
        <>
        <h1 className='text-center'>Questions</h1>
        {questions.map( question => <QuestionCard question={question} key={question.id}/>)}
        {/* {questions.map( question => <QuestionCard question={question} key={question.id}/>)} */}


        </>
    )
    }
 