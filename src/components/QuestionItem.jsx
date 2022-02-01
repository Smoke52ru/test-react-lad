import React from 'react';

const QuestionItem = ({number, text, picture, answers, isMultiple, ...props}) => {
    return (
        <div className="questionCard">
            <div className="questionCard__text">
                <strong>{number}</strong>
                <p>{text}</p>
            </div>
            <div className="questionCard__picture">
                <img src={picture} alt=""/>
            </div>
            <div className="questionCard__answers">
                {answers.map((answer, index) =>
                    <div key={props.key + '_' + index}>
                        <input type={isMultiple ? "checkbox" : "radio"}
                               name={'answer_' + props.key + '_' + number}
                               id={'answer_' + props.key + '_' + number + '_' + index}
                        />
                        <label
                            htmlFor={'answer_' + props.key + '_' + number + '_' + index}>{index + 1}. {answer}</label>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuestionItem;