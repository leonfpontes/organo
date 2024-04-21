import "./Select.css"

export const Select = (props) => {
    return (
        <div className="select-squad">
            <label>{props.label}</label>
            <select>
                {props.item.map((item) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}