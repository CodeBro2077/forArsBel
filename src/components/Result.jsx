const Result = ({ correct, questions }) => {
    return (
        <div className="modal">
            <div className="result">
                <h1>Поздравляю</h1>
                <h3>Правильных ответов {correct}/{questions.length}</h3>
                <a href="/">
                    <button className="again">Попробовать снова</button>
                </a>
            </div>
        </div>
    )
}

export default Result