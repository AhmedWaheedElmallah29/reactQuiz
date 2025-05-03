import Options from "./Options";

function Question({ question, dispatch, answer, points }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        points={points}
        question={question}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
}

export default Question;
