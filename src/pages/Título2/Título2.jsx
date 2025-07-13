import { useState } from "react"

function Título2() {

    const [texto, setTexto] = useState("Um título");
    const [inputText, setInputText] = useState("");

    function clicou() {
        setTexto(inputText);
    }

    return (
        <div>
            ======================
            <h1>TÍTULO 2</h1>
            <h2>texto: {texto}</h2>
            <input type="text" value={inputText} onChange={(e)=>(setInputText(e.target.value))}/>
            <button onClick={clicou}>CARA</button>
            <br />
            ======================
        </div>
    )
}

export { Título2 }