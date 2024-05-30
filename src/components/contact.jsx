import jag from '../images/jagsvg.svg';

function contact () {
   return (
     <div class="contact">
        <h2>Contact me</h2>
       <form action="/submit-form" method="post">
           <label for="name">Name</label><br/>
           <input type="text" id="name" name="name" required /><br /><br />

           <label for="email">Email Address</label><br/>
           <input type="email" id="email" name="email" required /><br /><br />

           <label for="message">Message</label><br />
           <textarea id="message" name="message" rows="4" cols="50" required></textarea><br /><br />

               <a class="proj-link" href="#">Contact</a>
       </form>
    </div>
);
}

export default contact; 