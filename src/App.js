// // import logo from './logo.svg';
// // import './App.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import { useState } from 'react';


// // function App() {
// // const [index, setindex] = useState(0)
// // const [result, setresult] = useState(0)
// // const [questionresult, setquestionresult] = useState([])
// // const [showresult, setshowresult] = useState(false)


// //   const quizQuestions = [
// //   {
// //     id: 1,
// //     question: "1. What does HTML stand for?",
// //     options: [
// //       "Hyperlinks and Text Markup Language",
// //       "Home Tool Markup Language",
// //       "Hyper Text Markup Language",
// //       "Hyper Transfer Markup Language"
// //     ],
// //     correctAnswer: "Hyper Text Markup Language"
// //   },
// //   {
// //     id: 2,
// //     question: "2. Which HTML tag is used to define an internal style sheet?",
// //     options: ["<style>", "<css>", "<script>", "<design>"],
// //     correctAnswer: "<style>"
// //   },
// //   {
// //     id: 3,
// //     question: "3. Which property is used to change the background color in CSS?",
// //     options: ["color", "bgcolor", "background-color", "background"],
// //     correctAnswer: "background-color"
// //   },
// //   {
// //     id: 4,
// //     question: "4. In JavaScript, which symbol is used for comments?",
// //     options: ["//", "/* */", "#", "<!-- -->"],
// //     correctAnswer: "//"
// //   },
// //   {
// //     id: 5,
// //     question: "5. What does DOM stand for in JavaScript?",
// //     options: [
// //       "Document Object Model",
// //       "Data Object Method",
// //       "Digital Ordinance Model",
// //       "Document Order Management"
// //     ],
// //     correctAnswer: "Document Object Model"
// //   },
// //   {
// //     id: 6,
// //     question: "6. Which hook is used to manage state in React?",
// //     options: ["useRef", "useState", "useEffect", "useContext"],
// //     correctAnswer: "useState"
// //   },
// //   {
// //     id: 7,
// //     question: "7. Which of the following is used to render elements in React?",
// //     options: ["ReactDOM.render()", "React.render()", "ReactDOM.create()", "Render.React()"],
// //     correctAnswer: "ReactDOM.render()"
// //   },
// //   {
// //     id: 8,
// //     question: "8. What is the correct syntax to import a React component?",
// //     options: [
// //       "import { Component } from 'react'",
// //       "include Component from 'react'",
// //       "require Component from 'react'",
// //       "get Component from 'react'"
// //     ],
// //     correctAnswer: "import { Component } from 'react'"
// //   },
// //   {
// //     id: 9,
// //     question: "9. In CSS, how do you select an element with the id 'main'?",
// //     options: [".main", "#main", "main", "*main"],
// //     correctAnswer: "#main"
// //   },
// //   {
// //     id: 10, 
// //     question: "10. In JavaScript, which keyword declares a constant variable?",
// //     options: ["let", "var", "const", "static"],
// //     correctAnswer: "const"
// //   }
// // ];






// // const handleclick = (opt) => {
// // console.log("opt=======>>>>", opt);
// // console.log("quizQuestions.length =======>>>>", quizQuestions.length);

// //   if(index < quizQuestions.length ){
// //     setindex(index + 1);
// //   }
// //   if(quizQuestions[index].correctAnswer === opt){
// //     setresult(result + 1)
// //   }
   

// // setquestionresult([...questionresult, {...quizQuestions[index], useranswer: quizQuestions[index].correctAnswer === opt ? "Correct Answer" : "Wrong Answer"}])

// //   console.log("result=======>>>>", result);
// // }


// // const handleresults = () => {
// // setshowresult(true)
// // console.log("resultsss", result)
// // }

// //   return (
// //   <>
// // {/* {quizQuestions.map((q) => ( */}
// // <>
// //   <div key={quizQuestions[index]?.id}>
// //     <h3>{quizQuestions[index]?.question}</h3>
// //     {quizQuestions[index]?.options.map(opt => <button key={opt} onClick={() => handleclick(opt)}>{opt}</button>)}
// //   <br/>
// //   <br/>
// //   </div>

// // {index === quizQuestions.length && <button onClick={handleresults}>Show result</button>}

// // {showresult && (
// //   <>
// //     {questionresult?.map((items) => (
// //       <div key={items?.id}>
// //         <h3>{items?.question}</h3>
// //         <h4>Your Answer: {items?.useranswer}</h4>
// //         <div>
// //           {items?.options.map((opt) => (
// //             <button key={opt} onClick={() => handleclick(opt)}>
// //               {opt}
// //             </button>
// //           ))}
// //         </div>
// //         <br />
// //       </div>
// //     ))}
// //   </>
// // )}


// // </>

// //   {/* ))} */}
// //   </>
// //   );
// // }

// // export default App;

// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";

// function App() {
//   const [index, setindex] = useState(0);
//   const [result, setresult] = useState(0);
//   const [questionresult, setquestionresult] = useState([]);
//   const [showresult, setshowresult] = useState(false);

//   const quizQuestions = [
//     {
//       id: 1,
//       question: "1. What does HTML stand for?",
//       options: [
//         "Hyperlinks and Text Markup Language",
//         "Home Tool Markup Language",
//         "Hyper Text Markup Language",
//         "Hyper Transfer Markup Language",
//       ],
//       correctAnswer: "Hyper Text Markup Language",
//     },
//     {
//       id: 2,
//       question: "2. Which HTML tag is used to define an internal style sheet?",
//       options: ["<style>", "<css>", "<script>", "<design>"],
//       correctAnswer: "<style>",
//     },
//     {
//       id: 3,
//       question: "3. Which property is used to change the background color in CSS?",
//       options: ["color", "bgcolor", "background-color", "background"],
//       correctAnswer: "background-color",
//     },
//     {
//       id: 4,
//       question: "4. In JavaScript, which symbol is used for comments?",
//       options: ["//", "/* */", "#", "<!-- -->"],
//       correctAnswer: "//",
//     },
//     {
//       id: 5,
//       question: "5. What does DOM stand for in JavaScript?",
//       options: [
//         "Document Object Model",
//         "Data Object Method",
//         "Digital Ordinance Model",
//         "Document Order Management",
//       ],
//       correctAnswer: "Document Object Model",
//     },
//     {
//       id: 6,
//       question: "6. Which hook is used to manage state in React?",
//       options: ["useRef", "useState", "useEffect", "useContext"],
//       correctAnswer: "useState",
//     },
//     {
//       id: 7,
//       question: "7. Which of the following is used to render elements in React?",
//       options: [
//         "ReactDOM.render()",
//         "React.render()",
//         "ReactDOM.create()",
//         "Render.React()",
//       ],
//       correctAnswer: "ReactDOM.render()",
//     },
//     {
//       id: 8,
//       question: "8. What is the correct syntax to import a React component?",
//       options: [
//         "import { Component } from 'react'",
//         "include Component from 'react'",
//         "require Component from 'react'",
//         "get Component from 'react'",
//       ],
//       correctAnswer: "import { Component } from 'react'",
//     },
//     {
//       id: 9,
//       question: "9. In CSS, how do you select an element with the id 'main'?",
//       options: [".main", "#main", "main", "*main"],
//       correctAnswer: "#main",
//     },
//     {
//       id: 10,
//       question: "10. In JavaScript, which keyword declares a constant variable?",
//       options: ["let", "var", "const", "static"],
//       correctAnswer: "const",
//     },
//   ];

//   const handleclick = (opt) => {
//     if (index < quizQuestions.length) {
//       if (quizQuestions[index].correctAnswer === opt) {
//         setresult((prev) => prev + 1);
//       }

//       setquestionresult([
//         ...questionresult,
//         {
//           ...quizQuestions[index],
//           useranswer:
//             quizQuestions[index].correctAnswer === opt
//               ? "✅ Correct"
//               : "❌ Wrong",
//         },
//       ]);

//       setindex((prev) => prev + 1);
//     }
//   };

//   const handleresults = () => {
//     setshowresult(true);
//   };

//   return (
//     <div className="quiz-container d-flex justify-content-center align-items-center">
//       <div className="quiz-card shadow-lg p-4 rounded-4 text-center">
//         <h2 className="mb-4 fw-bold text-primary">💡 React Quiz App</h2>

//         {!showresult ? (
//           <>
//             <div className="progress mb-4" style={{ height: "8px" }}>
//               <div
//                 className="progress-bar bg-primary"
//                 role="progressbar"
//                 style={{
//                   width: `${(index / quizQuestions.length) * 100}%`,
//                 }}
//                 aria-valuenow={(index / quizQuestions.length) * 100}
//                 aria-valuemin="0"
//                 aria-valuemax="100"
//               ></div>
//             </div>

//             {index < quizQuestions.length ? (
//               <div className="card mb-4 shadow-sm">
//                 <div className="card-body">
//                   <h5 className="card-title text-dark">
//                     {quizQuestions[index]?.question}
//                   </h5>
//                   <div className="d-flex flex-column gap-2 mt-3">
//                     {quizQuestions[index]?.options.map((opt) => (
//                       <button
//                         key={opt}
//                         className="btn btn-outline-primary rounded-pill option-btn"
//                         onClick={() => handleclick(opt)}
//                       >
//                         {opt}
//                       </button>
//                     ))}
//                   </div>
//                   <p className="mt-4 text-muted">
//                     Question {index + 1} of {quizQuestions.length}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <button
//                 className="btn btn-success mt-4 px-4 py-2 rounded-pill fw-bold"
//                 onClick={handleresults}
//               >
//                 Show Results
//               </button>
//             )}
//           </>
//         ) : (
//           <>
//             <div className="alert alert-success rounded-4 fw-bold">
//               🎉 You scored {result} out of {quizQuestions.length}!
//             </div>
//             {questionresult.map((q) => (
//               <div
//                 key={q.id}
//                 className="result-box p-3 mb-3 rounded-4 shadow-sm text-start"
//               >
//                 <p className="fw-semibold">{q.question}</p>
//                 <p
//                   className={
//                     q.useranswer.includes("✅")
//                       ? "text-success fw-bold"
//                       : "text-danger fw-bold"
//                   }
//                 >
//                   {q.useranswer}
//                 </p>
//                 <p className="text-muted small">
//                   Correct Answer: {q.correctAnswer}
//                 </p>
//               </div>
//             ))}
//             <button
//               className="btn btn-outline-secondary mt-3 rounded-pill"
//               onClick={() => window.location.reload()}
//             >
//               🔁 Restart Quiz
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
import React from 'react'
import QuizApp from './component/QuizApp'

const App = () => {
  return (
    <div>
      <QuizApp/>
    </div>
  )
}

export default App


