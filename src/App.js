import React , {useState} from 'react'
import './App.css';
import Bar from './Bar.jsx'


function App() {


  const questions = [
				 ' Q. I wonder if I m really making the difference I anticipated making.' ,
          'Q. I have spent fewer than 4 years in full time service or ministry.' ,
		'Q. My plans are likely to succeed.' 
  ]
	
	const [currentQuestion, setCurrentQuestion] = useState(0);
  const [state,setStat] =useState(false);
  

  const handleClick = () => {
		
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
     setStat(false)
			setCurrentQuestion(nextQuestion);
		} 
    else 
    {alert("Thats all ")
      setStat(true)}
    
	};
  const prevClick = () => {
		// setclick('prev')
		const prevQuestion = currentQuestion - 1;
    console.log(prevQuestion, 'prev val')
		if (prevQuestion >= 0) {
      setStat(false)
			setCurrentQuestion(prevQuestion);
		} 
    
    else 
    { alert("Thats all ")
      setStat(true)
    }
    
	};



  return (
    <div className="App">

      <div className='content'>
      <div className='text'> {questions[currentQuestion]}</div>

      <div className='progress' onClick={handleClick}>  <Bar  lastq={state}   /></div>
      <div className='next' onClick={handleClick}>Next →</div>
      <div className='prev' onClick={prevClick}>← Prev </div>
        
      </div>


    </div>
  );
}

export default App;
