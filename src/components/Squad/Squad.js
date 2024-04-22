import ProfessionalCard from "../ProfessionalCard"
import "./Squad.css"

export const Squad = (props) => {
    const sectionCss = {backgroundColor: props.secondaryColor}
    const h3Css = {borderColor: props.primaryColor}

    return(
        (props.professionals.lenght > 0) ? <section className="squadBanner" style={sectionCss}>
            <h3 style={h3Css}>{props.squadName}</h3>
            <div className="card">
                {props.professionals.map(card => <ProfessionalCard name={card.name} position={card.position} img={card.image} />
                )}
            </div>
        </section>
        :''
    )
}
