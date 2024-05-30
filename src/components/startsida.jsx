import jag from '../images/jagsvg.svg';
import lampa from '../images/Lampa.svg';
import pil from '../images/scrollPil.svg';

function startsida () {
   return (
     <div class = "center">
        <div class = "presentation">
            <div class = "presentation-child">
                <h1><span class="hi">Hi, </span>
                <span class="myNameIs">my name is</span><br/>
                       Vilmer Malm</h1>
                   <img class="scrollPil" src={pil} alt="Alternative text" />
            </div>
            <div class = "jagContainer">
                   <img class="jag" src={jag} alt="Alternative text" />
                   
            </div>
               
           </div>
       
      </div>
);
}
export default startsida; 