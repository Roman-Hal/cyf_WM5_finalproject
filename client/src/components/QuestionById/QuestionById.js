import React, { useState, useEffect } from "react";
import "./QuestionById.css";

const QuestionById = ({ questionId }) => {
	const [question, setQuestion] = useState(null);
	useEffect(() => {
		fetch(`http://localhost:3100/api/questions/${questionId}`)
				.then((res) => {
					if (res.ok) {
						return res.json();
					}
				})
				.then((data) => setQuestion(data));
		}, [questionId]);

    return question ? (
			<form className="questionByIdStyle">
				<h3 className="hide-btn">
					{/* <span className="questionByIdOwner">{question.asked_by}</span> */}
					{ question[0].title }
				</h3>
				<p>{question[0].content}</p>
			</form>
		) : null;
};

export default QuestionById;