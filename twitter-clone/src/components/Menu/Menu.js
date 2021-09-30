import LINKS  from '../constante/LinksMenu'
import logo from '../../icons/logo.svg'
import './Menu.css'

function Menu () {

    return(
        <nav className="menuLateral">
            <section className="menuLateral--items">
                <div className ="menuLateral--logo">
                    <button className="menuLateral--btn btn--logo">
                            <img src={logo} alt="logo twitter"/>
                    </button>
                </div>
                <ul className="menuLateral--items--lista">
                    {LINKS.map((link, index) => {
                        return <li key={index}>
                             <a href={link.href} alt={link.alt} className={link.cName}>
                                 {link.nome}
                            </a>
                         </li>   
                    })}
                </ul>
                <div className="menuLateral--tweatar">
                    <button className="menuLateral--btn btn--tweatar"> Tweetar</button>
                </div>
            </section>
        </nav>
    )
}

export default Menu