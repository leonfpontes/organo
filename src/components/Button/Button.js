import './Button.css'

export const Button = (props) => {
    return(
        <button className='button-create-card'>
            {props.children}
        </button>
    )
}