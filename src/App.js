import { useEffect,useState } from 'react';
import './App.css';

import {Container,Button,Card} from "react-bootstrap"
const URL="https://api.adviceslip.com/advice";
function App() {
   const [advc,setAdvc]=useState("");

   useEffect(()=>{
     getAdvice();
   },[])
   const getAdvice=()=>{
     fetch(URL)
     .then(res=>res.json())
     .then(data=>setAdvc(data.slip.advice))
   }

  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <Card 
      style={{minWidth: '30rem'}}
      className='my-2'  >
        <Card.Header 
        className='text-center'>
          THE EYE ADVICE
          </Card.Header>
        <Card.Body>
          <Card.Text>
            {advc}
          </Card.Text>
        </Card.Body>
      </Card>
      <Button 
      onClick={()=>getAdvice()}
      >GIVE ME ADVICE</Button>
    </Container>    
  );
}

export default App;
