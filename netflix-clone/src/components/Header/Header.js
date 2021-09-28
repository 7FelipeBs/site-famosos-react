import './Header.css'

// eslint-disable-next-line
export default ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
        <div className="header--logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Logo netflix"></img>
        </div>
        <div className="header--user">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário"></img>
        </div>
    </header>
  )
}