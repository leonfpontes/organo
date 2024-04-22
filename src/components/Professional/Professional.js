import "./Professional.css"

export const Professional = ({name, image, position}) => {
    return (
        <div className="professional">
            <div className="professional-header">
                <img src={image} alt={name}/>
            </div>
            <div className="professional-footer">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}