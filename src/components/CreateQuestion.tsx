import  Container  from "react-bootstrap/Container";
import  Card  from "react-bootstrap/Card";
import  Button  from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
import { useState  }from 'react'

type QuestionType = {
    question: string,
    answer: string,
}

type QuestionProps = {

}

export default function CreateQuestion({}: QuestionProps) {
  
    const [newQuestion, setNewQuestion] = useState<Partial<QuestionType>>({question:'', answer:''})
   
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewQuestion({...newQuestion, [e.target.name]: e.target.value})
    }
    const handleformSubmit = (e:React.FormEvent): void => {
        e.preventDefault()

    }
   
   
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic Ym9iQGJvYi5jb206YmJiYmI=");
    const APIEndPoint = "https://cae-bookstore.herokuapp.com/question"
    var formdata = new FormData();
    
  
    
    fetch(APIEndPoint,{
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      })
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
  
  
    return (
    <>
    <h1> Create Question</h1>
        <Card>
            <Card.Body>
                <Form>
                    <Form.Label htmlFor='question'>Question</Form.Label>
                    <Form.Control value={newQuestion.question} name='question'as="textarea" rows={3} />
                    
                    <Form.Label htmlFor='Answer'>Answer</Form.Label>
                    <Form.Control value={newQuestion.answer} name="answer" />
                    <Button type='submit' variant='outline-primary' className='w-100 mt-3'>Submit Question</Button>
                </Form>
            </Card.Body>
        </Card>
 
    
    </>
  )
}