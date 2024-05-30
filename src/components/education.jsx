import handen from '../images/handen.svg';
import umea from '../images/umu-logo-SE.svg';
import skell from '../images/skellefte.png';

function education () {
   return (
       <div class="center">      
         <div class = "edu-left">
                <h2>Education</h2>
               <img class="handen" src={handen} alt="Studying icon" />
           </div>
        <div class ="edu">
            <div class="btn">
          <span class="noselect">
                        <div class ="flex">
                            <img src={umea} alt="Umeå University"/>
                            <p class = "years">2021-2026</p>
                        </div>
                        <h2>Master of Science in Interaction Technology and Design</h2>
                        <p>Umea University</p>                
          </span>
        </div>
             <div class="btn">
                <span class="noselect">
                    <div class ="flex">
                        <img src={skell} alt="Baldergymnasiet"/>
                        <p class = "years">2017-2020</p>
                    </div>
                    <h2>Teknikprogrammet at Baldergymnasiet</h2>
                    <p>Baldergymnasiet</p>
               </span>

             </div>
      </div>
      </div>
);
}
export default education; 