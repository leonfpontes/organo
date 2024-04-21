import "./Select.css"

export const Select = (props) => {
    return (
        <div className="select-squad">
            <label>{props.label}</label>
            <select onChange={event => props.onChange(event.target.value)} required={props.required} value={props.value}>
                {props.item.map((item) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}