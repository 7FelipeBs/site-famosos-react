import React, { useEffect, useState }  from "react";
import MovieRow from "./components/MovieRow/MovieRow";
import FeatureMovie from "./components/FeatureMovie/FeatureMovie";
import Header from "./components/Header/Header";
import Tmdb from './Tmdb'
import loading from './netflix-loading.gif'
import './App.css'

// eslint-disable-next-line
export default () => {
  const [ movieList, setMovieList] = useState([])
  const [ featureDate, setFeatureDate ] = useState(null)
  const [ blackHeader, setBlackHeader ] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)
      let originals = list.filter(i => i.slug === 'originals')

      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))

      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      
      setFeatureDate(chosenInfo)
    }
    loadAll()
  }, [])


  useEffect(() => {
    const scrollListener = () => {
        if(window.scrollY > 10) {
          setBlackHeader(true)
        } else {
          setBlackHeader(false)
        }
    }

    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  })

  return(
    <div className="page">
      <Header black={blackHeader}/>

      {featureDate 
      && <FeatureMovie item={featureDate} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <div>
           <MovieRow 
              key={key}
              title={item.title}
              items={item.items}
              />
          </div>
        ))}
      </section>

      <footer>
        Alterado por FelipeBs<br/>
        Feito com <span role="img" aria-label="coração">❤️</span> pela B7Web<br/>
        Direitos de imagem para Netflix<br/>
        Dados pegos no site Themoviedb.org
      </footer>

      {movieList.length <= 0 && <div className="loading">
        <img src={loading} alt="tela de loading"/>
      </div>}

    </div>
  )
}