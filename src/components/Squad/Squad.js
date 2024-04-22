import { Professional } from "../Professional/Professional"
import "./Squad.css"

export const Squad = (props) => {
    const sectionCss = {backgroundColor: props.secondaryColor}

    return(
        <section className="squadBanner" style={sectionCss}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.squadName}</h3>
            <div className="professionals">
                {props.professionals.map(professional => <Professional name={professional.name} position={professional.position} image={professional.image} />)}
            </div>
        </section>
    )
}
