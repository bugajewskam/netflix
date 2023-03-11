import Image from "next/image";
import { Item } from "../../interface";
import iconNavHome from "/public/assets/icon-nav-home.svg";
import iconNavBookmark from "/public/assets/icon-nav-bookmark.svg";
import iconNavMovies from "/public/assets/icon-nav-movies.svg";
import iconNavSeries from "/public/assets/icon-nav-tv-series.svg";
import iconLogo from "/public/assets/logo.svg"
interface FilteringProps{
    handleMovie: ()=> any;
    handleSeries:()=> any;
    handleData:()=>any;
}
export const Filtering = ({handleMovie, handleSeries, handleData}: FilteringProps )=> {
    const handleBookmark = ()=>{
        console.log("help")
    }
    
  return (
    <div className="filtering">
        
        <button onClick={handleData}><Image  src={iconLogo} alt="Home" height={30} width={30} /></button>

          <button onClick={handleData}><Image  src={iconNavHome} alt="Home" height={30} width={30} /></button>
       
          <button onClick={handleMovie}><Image src={iconNavMovies} alt="movies" height={30} width={30} /></button>

          <button onClick={handleSeries}><Image src={iconNavSeries} alt="bookmark" height={30} width={30} /></button>

          <button onClick={handleBookmark}><Image src={iconNavBookmark} alt="bookmark" height={30} width={30} /></button>

    </div>
  );
};

export default Filtering;
