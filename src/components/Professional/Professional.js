import "./Professional.css"

export const Professional = ({name, image, position, corDeFundo}) => {
    const cssColor = {backgroundColor: corDeFundo}

    return (
        <div className="professional">
            <div className="professional-header" style={cssColor}>
                <img src={image} alt={name}/>
            </div>
            <div className="professional-footer">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}