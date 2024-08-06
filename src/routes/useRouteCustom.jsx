import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomeTemplate from '../template/HomeTemplate/HomeTemplate'
import PageNotFound from '../components/PageNotFound/PageNotFound'
import BaiTap1Props from '../components/BaiTap/BaiTap1Props'
import BaiTapHienThiDienThoai from '../components/BaiTapHienThiDienThoai/BaiTapHienThiDienThoai'
import PokemonDetail from '../components/PokemonDetail'
import { path } from '../common/path'
import DemoRedux from '../components/DemoRedux/DemoRedux'
import BaiTapLacXiNgau from '../components/BaiTapLacXiNgau/BaiTapLacXiNgau'
import DemoUseEffectDetail from '../components/DemoUseEffect/DemoUseEffectDetail'
import DemoUseEffect from '../components/DemoUseEffect/DemoUseEffect'
import DemoFormReact from '../components/DemoFormReact/DemoFormReact'



const useRouteCustom = () => {
    const elements = useRoutes([
        {
            path : path.homePage,
            element : <HomeTemplate/>,
            children : [
                {
                    index : true,
                    element : <BaiTap1Props/>,
                },
                {
                    path : path.baiTapDT,
                    element : <BaiTapHienThiDienThoai/>
                },
                {
                    path : `${path.pokemonDetail}/:id`,
                    element : <PokemonDetail/>
                },
                {
                    path : path.DemoRedux,
                    element : <DemoRedux/>
                },
                {
                    path : path.BaiTapLacXiNgau,
                    element : <BaiTapLacXiNgau/>
                },
                {
                    path : "/demo-useEffect",
                    element : <DemoUseEffect/>
                },
                {
                    path: "/demo-use-effect-detail/:id",
                    element: <DemoUseEffectDetail/>,
                },
                {
                    path: "/demo-form-react",
                    element: <DemoFormReact/>,
                },
            ],
        },
        {
            path : "*",
            element :<PageNotFound/>
        }
    ])
  return elements;
}

export default useRouteCustom
