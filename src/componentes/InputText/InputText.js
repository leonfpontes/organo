import "./InputText.css"

export const InputText = (props) => {
    return (
        <div class="input-text">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    )

}