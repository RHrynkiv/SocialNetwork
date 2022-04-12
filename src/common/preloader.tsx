import React from 'react'
import style from '../Users/Users.module.css'
import preloaderimg from '../images/preloader.gif'
let Preloader = () =>{
    return(
        <div className={style.preloader}>
            <img src={preloaderimg}/>
        </div>
    )
}
export default Preloader