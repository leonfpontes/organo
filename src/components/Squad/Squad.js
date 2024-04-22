import { Professional } from "../Professional/Professional"
import "./Squad.css"

export const Squad = (props) => {
    const sectionCss = {backgroundColor: props.secondaryColor}

    return(
        <section className="squadBanner" style={sectionCss}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.squadName}</h3>
            <div className="professionals">

                {/* {props.professional.map((professional) => name={professional.nome} position={professional.position} image={professional.image})} */}
                <Professional name={'Leonardo Pontes'} position={'Programmer'} image={'https://lh3.googleusercontent.com/a/ACg8ocIkhKwyqztfjlcptNFIiBSY5r7bhr5Dc1MglwV1gir_rHvXgnG6Cg=s288-c-no'}/>
            </div>
        </section>
    )
}
