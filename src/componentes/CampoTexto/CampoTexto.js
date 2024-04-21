import "./CampoTexto.css"

export const CampoTexto = (props) => {
    return (
        <div class="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    )

}