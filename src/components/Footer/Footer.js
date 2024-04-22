import "./Footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-social-media'>
                <a href='https://www.instagram.com/leonardofonsecapontes/'>
                    <img src='/images/ig.png' alt='Logo do Instagram' />
                </a>
                <a href='https://www.facebook.com/leonardo.pontes.710'>
                    <img src='/images/fb.png' alt='Logo do Facebook' />
                </a>
                <a href='https://www.linkedin.com/in/leonardo-fonseca-pontes-465740103/'>
                    <img src='/images/in.png' alt='Logo do Linkedin' />
                </a>
            </div>
            <img className='footer-logo' src='/images/logo.png' alt='Logo do Organa' />
            <p> Desenvolvido por Leonardo Pontes </p>
        </footer>
    )
}