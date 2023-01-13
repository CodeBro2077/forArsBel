const Game = ({ step, question, handlerClick, questions }) => {


    const per = Math.round(step / questions.length * 100)

    return (
        <div className="modal">
            <div className="progress-bar" style={{ width: `${per}%` }}></div>
            <h1 className="title">{question.title}</h1>
            <ul className="q-list">
                {
                    question.variants.map((text, id) => <li onClick={() => handlerClick(id)} className="q-item" key={text}>{text}</li>)
                }
            </ul>
        </div>
    )
}

export default Game