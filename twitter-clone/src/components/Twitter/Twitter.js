import MenuEsquerdo from './MenuEsquerdo/MenuEsquerdo'
import ConteudoCentral from './ConteudoCentral/ConteudoCentral'
import ConteudoDireita from './ConteudoDireita/ConteudoDireita'
import './Twitter.css'

function Twitter () {
    return(
        <div className="conteudo">
            <div><MenuEsquerdo /></div>
            <div><ConteudoCentral /></div>
            <div><ConteudoDireita /></div>
        </div>
    )
}

export default Twitter