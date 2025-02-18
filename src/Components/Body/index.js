import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Eclipse from '../Eclipse'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { itemData } from '../Card1/index.js';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// INTERACTIVE CARD IMPLEMENTATION

export default function InteractiveLearning() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleNextQuestion = () => {
        if (questionIndex < itemData.length - 1) {
            // increment the question index to move to the next question
            setQuestionIndex(questionIndex + 1);
            // clear the user's answer for the next question
            setShowAnswer(false);
        }
    };

    const handlePreviousQuestion = () => {
        if (questionIndex > 0) {
            // decrement the question index to move to the previous question
            setQuestionIndex(questionIndex - 1);
            // clear the user's answer for next question
            setShowAnswer(false);
        }
    };

    const currentQuestion = itemData[questionIndex];

    const currentAnswer = showAnswer ? currentQuestion.answer : 'Click me to reveal answer';

    const handleToggleAnswer = () => {
        // toggle the visibility of the answer
        setShowAnswer(!showAnswer);
    };

    const isLastQuestion = questionIndex === itemData.length - 1;
    const isFirstQuestion = questionIndex === 0;

    return (
        <div className="App-body">
            <Eclipse />
            <Card className='App-card' sx={{ width: "50%" }}>
                <div className="accordion-container">
                <Accordion expanded={showAnswer} onChange={handleToggleAnswer}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        onClick={handleToggleAnswer}
                    >
                        <Typography variant="h5" component="div">
                            {currentQuestion.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ minHeight: showAnswer ? 'auto' : 0 }}>
                        <Typography variant="body2">
                            {showAnswer ? currentQuestion.answer : 'Click to reveal answer'}
                        </Typography>

                        <div>
                            {isFirstQuestion ? (
                                <button disabled>Back</button>
                            ) : (
                                <button onClick={handlePreviousQuestion}>Back</button>
                            )}   
                        {isLastQuestion ? (
                            <button>
                                <p style={{fontSize: '14px'}}>You've read through all the questions!</p>
                                <a href='https://science.nasa.gov/eclipses/' style={{fontSize: '14px'}}>Click to learn more!</a>
                            </button>
                        ) : (
                            <button onClick={handleNextQuestion}>Next</button>
                        )}
                        </div>
                    
                    </AccordionDetails>
                </Accordion>
                </div>
            </Card>
            {isLastQuestion && (
                <div>
                    <p style={{color: 'white', fontSize: '16px'}}>
                        Congratulations! You've read through all the questions.
                    </p>
                    <div>
                    <a style={{color: 'white', fontSize: '16px'}}href='https://science.nasa.gov/eclipses/'>NASA's Eclipses Page</a>
                </div>
                </div>
            )}
        </div>
    );
}
    
// INFINITE SCROLL IMPLEMENTATION

// const initialLoadCount = 3;
// const loadMoreCount = 3;

// export default function InfiniteScroll() {

//     // define state to track the loaded content
//     const [content, setContent] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         // load initial content 
//         const initialContent = itemData.slice(0, initialLoadCount);
//         setContent(loadInitialContent);
//     }, []);

//     // function to load initial content
//     const loadInitialContent = () => {
//         const initialContent = itemData.slice(0, 11); // replace with your content retrieval method
//         setContent(initialContent);
//     };

//     // function to handle endless scrolling
//     const handleEndlessScroll = () => {
//         const contentHeight = document.documentElement.scrollHeight;
//         const scrollPosition = window.innerHeight + window.scroll;

//         // detects when user is near bottom of the page
//         if (scrollPosition >= contentHeight - 200 && !loading) {
//             setLoading(true);

//             // Calculate range for loading more data
//             const startIndex = content.length;
//             const endIndex = startIndex + loadMoreCount;

//             // fetch and append the next set of content 
//             const nextContent = itemData.slice(startIndex, endIndex);

//             // append the new content to the existing content
//             setContent((prevContent) => [...prevContent, nextContent]);
//             setLoading(false);
//         }
//     };

//     // add scroll event listener to trigger infinite scrolling
//     useEffect(() => {
//         loadInitialContent(); // load initial content when the component mounts
//     }, []);


//     useEffect(() => {
//         window.addEventListener('scroll', handleEndlessScroll);
//         return () => {
//             window.removeEventListener('scroll', handleEndlessScroll);
//         };
//     }, [content]);

//     return (
//         <div className="App-body">
//             {content.map((item, index) => (
//                 <Card key={index} className='App-card' sx={{ width: "50%"}}>
//                     <CardContent border={1} className='cardContent'>
//                         <Typography variant="h5" component="div">
//                             {item.question}
//                         </Typography>
//                         <Typography variant="body2">
//                             {item.answer}
//                         </Typography>
//                     </CardContent>
//                 </Card>
//             ))}
//             {loading && <p>Loading more content...</p>}
//         </div>
//     );
// }
