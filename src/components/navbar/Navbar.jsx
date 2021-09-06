import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';
import './navbar.scss'

const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false)

    window.onscroll = () => {
        setIsScroll(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    return (
        <div className={isScroll ? 'navbar scrolled': 'navbar'}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My Lists</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img src="https://i.zoomtventertainment.com/story/Paras_Arora_3.png?tr=w-1200,h-900" alt="paros arora" />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Log Out</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;