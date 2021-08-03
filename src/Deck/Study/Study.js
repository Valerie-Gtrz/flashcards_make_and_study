 import { useEffect, useState } from 'react'
 import { useHistory, useParams } from 'react-router-dom'
 import { readCard, readDeck } from '../../utils/api';
 import StudyCard from './Studycard'; 
 
 function Study(){

    const history = useHistory();
    const { cardId, deckId} = useParams();
    const [deck, setDeck] = useState({});
    const [card, setCard] = useState({}); 
    const [flip, setFlip] = useState(false);


    useEffect(() => {
      readCard(cardId).then(setCard)
      loadDeck();
    }, [cardId]);
  
    function loadDeck() {
      readDeck(deckId).then(setDeck);
  }

//   function flipHandler(){
//     if(flip)  {
//         return {card.front}
//     }
//     {card.back}
//   }
    function doneHandler() {
      history.push(`/decks/${deckId}`);
  }

return <StudyCard />
          
    
 }

 export default Study;