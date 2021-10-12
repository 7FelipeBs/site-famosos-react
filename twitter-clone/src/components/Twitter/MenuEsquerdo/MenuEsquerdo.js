import { twitter, pagina_inicial, explorar, notificao, mensagens, itens_salvo, lista, perfil, mais_opcoes, ver_mais_perfil } from '../../icons/icons-dark'
import './MenuEsquerdo.css'

function MenuEsquerdo () {
    return(
    <nav className="menu">
        <section className="menu--esquerdo">
            <div className="btn-twitter">
                <div className="icon icon--logo">{twitter}</div> 
            </div>
            <div className="btn-icon"> 
                <div className="icon icon--paginaInicial">{pagina_inicial}</div>
                <div className="font-icon">Pagina Inicial </div>
            </div> 

            <div className="btn-icon"> 
                <div className="icon icon--explorar">{explorar}</div>
                <div className="font-icon">Explorar</div>
            </div> 

            <div className="btn-icon"> 
                <div className="icon icon--notificao">{notificao}</div>
                <div className="font-icon">Notificações</div>
            </div> 

            <div className="btn-icon"> 
                <div className="icon icon--mensagens">{mensagens}</div>
                <div className="font-icon">Mensagens</div>
            </div> 

            <div className="btn-icon"> 
                <div className="icon icon--itensSalvo">{itens_salvo}</div> 
                <div className="font-icon">Itens Salvos</div>
            </div> 

            <div className="btn-icon"> 
                <div className="icon icon--lista">{lista}</div>
                <div className="font-icon">Listas</div>
            </div> 

            <div className="btn-icon"> 
                <div className="icon icon--perfil">{perfil}</div>
                <div className="font-icon">Perfil</div>
            </div> 

            <div className="btn-icon"> 
                <div className="icon icon--maisOpcoes">{mais_opcoes}</div>
                <div className="font-icon">Mais</div>
            </div> 

            <div className="btn-icon btn-tweetar"> 
                <div className="font-tweetar">Tweettar</div>
            </div>

            <footer className="rodape--menu--esquerdo">
                <div className="usuarioInfo">
                    <img className="usuarioInfo--usuarioFoto" alt="President Fhillipe" draggable="true" src="https://pbs.twimg.com/profile_images/1448005985533038597/O8VvORph_normal.jpg"/>
                    <div className="usuarioInfo--idenPerfil">
                        <div className="idenPerfil--nome">Felipe B Silva</div>
                        <div className="idenPerfil--ident">@FelipeBs</div>
                    </div>
                    <div className="btn-verMaisInfo">{ver_mais_perfil}</div>
                </div>
            </footer>
        </section>
    </nav>
    )
}

export default MenuEsquerdo