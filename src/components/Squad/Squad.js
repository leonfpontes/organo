import { Professional } from "../Professional/Professional"
import "./Squad.css"

export const Squad = (props) => {
    const sectionCss = {backgroundColor: props.secondaryColor}

    return(
        props.professionals.length > 0 ? 
        <section className="squadBanner" style={sectionCss}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.squadName}</h3>
            <div className="professionals">
                {props.professionals.map(professional => <Professional corDeFundo={props.primaryColor} key={professional.name} name={professional.name} position={professional.position} image={professional.image} />)}
            </div>
        </section>
        : ''
    )
}
