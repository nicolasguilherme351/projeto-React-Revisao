import style from './Título.module.css'

function Titulo({nome}) {
    let a = {nome}
    return (
        <div className={style.Título}>
            <h1>{a == 1 ? "cara" : "cara2"}</h1>
        </div>
    )
}

export { Titulo }