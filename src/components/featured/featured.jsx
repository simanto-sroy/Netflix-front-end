import './featured.scss'
import { ErrorOutline, PlayArrow } from '@material-ui/icons';

function featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movie" : "Series" }</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thiller">Thiller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
             <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/72148c71-0bde-4a59-bef0-2e8fd9d60ada/BD-en-20210823-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="header_thumbail" width="100%"/>
             <div className="info">
                 {/* <img src="" alt="matrix" /> */}
                 <span className="desc">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusamus sint dolor reiciendis iste totam sunt repellendus ea iure laboriosam architecto possimus magni repellat amet molestiae minima consequatur, reprehenderit commodi!
                 </span>
                 <div className="buttons">
                     <button className="play">
                         <PlayArrow />
                         <span>Play</span>
                     </button>
                     <button className="more">
                         <ErrorOutline />
                         <span>Info</span>
                     </button>
                 </div>
             </div>
        </div>
    )
}

export default featured
