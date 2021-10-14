import Tmdb from "./Tmdb"
import { useEffect } from "react"

export default () => {
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
    }
    loadAll()

  }, [])

  return (
    <div>
      Olá Mundo
    </div>
  )
}