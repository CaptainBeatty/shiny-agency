import { useParams, Link } from 'react-router-dom'
 
function Survey() {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber);
    const backQuestion = questionNumberInt === 1? 1 : questionNumberInt - 1;
    const nextQuestion = questionNumberInt + 1;
 
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber}</h2>
            <Link to={`/survey/${backQuestion}`}>précédent</Link>
              {questionNumberInt === 10? (
              <Link to={`/results`}>Résultats</Link>
              ) : (
              <Link to={`/survey/${nextQuestion}`}>suivant</Link>)
              }
        </div>
    )
    
}
export default Survey