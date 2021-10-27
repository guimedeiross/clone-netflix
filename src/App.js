import Tmdb from "./Tmdb"
import { useEffect, useState } from "react"
import MovieRow from "./components/MovieRow"
import FeaturedMovie from "./components/FeaturedMovie.js"
import Header from "./components/Header"
import './App.css'

export default () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])
  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Desenvolvido com <span role="img" aria-label="coração">❤️</span> por Guilherme Schubert Medeiros<br />
        Direitos de imagem para Netflix<br />
        Dados obtidos do site Themoviedb.org
      </footer>
      {movieList <= 0 &&
        <div className="loading">
          <img src="./assets/Netflix_LoadTime.gif" alt="Carregando"></img>
        </div>
      }
    </div>
  )
}