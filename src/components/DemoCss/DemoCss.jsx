import React from 'react'
import './demoCss.css'
import style from "./demo.Css.module.css"

const DemoCss = () => {
  return (
    <div className='demo_css'>
      <h2 className={style.h2}> Demo về sử dụng Css trong dự án react</h2>
      <p className={style.sub_title}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil sapiente corporis, porro provident facilis ullam illo deleniti nemo quam rem nam consequuntur facere id sed animi tempore! In, iusto cumque? </p>
    </div>
  )
}

export default DemoCss
