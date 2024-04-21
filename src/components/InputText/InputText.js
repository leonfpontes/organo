import "./InputText.css"

export const InputText = (props) => {

    const onType = (event) =>{
        props.onChange(event.target.value)
    }
    return (
        <div className="input-text">
            <label>
                {props.label}
            </label>
            <input 
                value={props.valor} 
                onChange={onType} 
                required={props.mandatory} 
                placeholder={props.placeholder} 
            />
        </div>
    )

}