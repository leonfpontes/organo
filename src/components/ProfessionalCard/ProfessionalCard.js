import "./ProfessionalCard.css"

export const ProfessionalCard = ({name, image, position}) => {
    return (
        <div className="colaborador">
            <div className="cabecalho"> 
                <img src={image} alt={name}/>
            </div>
            <div className="rodape">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}