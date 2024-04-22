import "./Professional.css"

export const Professional = (props) => {
    return (
        <div className="professional">
            <div className="professional-header">
                <img src={props.image} alt={props.name}/>
            </div>
            <div className="professional-footer">
                <h4>{props.name}</h4>
                <h5>{props.position}</h5>
            </div>
        </div>
    )
}