import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const PokemonDetail = () => {
    const param =useParams();
    const pathName = useLocation();
    // console.log(pathName);
  return (
    <div>
    <Link
      className={
        pathName.pathname == "/pokemon-detail/Pikachu"
          ? "text-green-500"
          : "text-black"
      }
    >
      Demo
    </Link>
  </div>
  )
}

export default PokemonDetail
