
import s from "./header.module.css" ;
import React from "react";

const Header = () => {
    return (<div className={s.header}>
        <div className={s.header_wrapper}>
            <div className={s.header_logo}><img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/VK_Full_Logo_%282021-present%29.svg/2560px-VK_Full_Logo_%282021-present%29.svg.png"
                alt=""/></div>
            <div className={s.header_find}>
                <label htmlFor=""></label>
                <input type="text"/>
            </div>
            <div className={s.header_find}><img
                src="https://icon-icons.com/icons2/936/PNG/512/musical-bell-outline_icon-icons.com_73481.png" alt=""/>
            </div>
            <div className={s.header_music}><img src="https://pic.onlinewebfonts.com/thumbnails/icons_562056.svg" alt=""/>
            </div>
            <div className={s.header_services}><img
                src="https://icon-icons.com/icons2/2719/PNG/512/dots_nine_icon_175235.png"
                alt=""/></div>
            <div className={s.header_profile}><img src="https://icon-icons.com/icons2/1904/PNG/512/profile_121261.png"
                                                 alt=""/></div>
        </div>
    </div>)
}
export default Header