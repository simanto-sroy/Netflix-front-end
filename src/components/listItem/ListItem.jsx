import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import { useState } from 'react';
import './listitem.scss';

function ListItem({index}) {

    const [isHovered, setIsHovered] = useState(false);
    const trailer =  "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    

    return (
        <div className="listItem" onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)} style={{left: isHovered && index * 250 -50 + index * 2.5}}>
            <img src="https://i.ytimg.com/vi/R7aCOI4DuA0/maxresdefault.jpg" alt="" />
            {isHovered && (
                <>
                <video src={trailer} autoPlay={true} loop />
                <div className="itemInfo">
                    <div className="icons">
                        <PlayArrow className="icon"/>
                        <Add className="icon"/>
                        <ThumbUpAltOutlined className="icon"/>
                        <ThumbDownAltOutlined className="icon"/>
                    </div>
                    <div className="itemInfoTop">
                        <span>1 hours 16 mins</span>
                        <span className="limit"> +16</span>
                        <span> 1999</span>
                    </div>
                    <div className="desc">
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, animi laboriosam necessitatibus cupiditate molestiae esse autem deleniti praesentium iusto.</span>
                    </div>
                    <div className="genre">
                        Action
                    </div>
                </div></>
            )}
        </div>
    )
}

export default ListItem
