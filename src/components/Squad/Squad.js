import "./Squad.css"

export const Squad = (props) => {
    const sectionCss = {backgroundColor: props.secondaryColor}
    const h3Css = {borderColor: props.primaryColor}

    return(
        <section className="squadBanner" style={sectionCss}>
            <h3 style={h3Css}>{props.squadName}</h3>
        </section>
    )
}
