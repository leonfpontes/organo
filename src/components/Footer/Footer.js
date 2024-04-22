import "./Footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-social-media'>
                <img src='/images/fb.png' alt='Logo do Facebook' />
                <img src='/images/tw.png' alt='Logo do Twitter' />
                <img src='/images/ig.png' alt='Logo do Instagram' />
            </div>
            <img className='footer-logo' src='/images/logo.png' alt='Logo do Organa' />
            <p> Desenvolvido por Leonardo Pontes </p>
        </footer>
    )
}