import React from 'react';
import vg from "../assets/2.jpg";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai";

const Home = () => {
  return (

    <>
      <div className='home' id='home'>
        <main>
          <h1>TechTango</h1>
          <p>One step solution to your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one stop solution to the tech problems you face
            every day. Our aim is to increase the problem solving abilities of students.
          </p>
        </div>
      </div>


      <div className="home3" id='about'>
        <div>
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, facere ipsam? Velit doloremque ex mollitia veniam corporis quisquam odit minus explicabo sequi, recusandae quod iure quaerat sunt inventore culpa quas nobis tenetur sed voluptates, eum vero, exercitationem quam itaque magnam? Tempora mollitia eaque error inventore sapiente atque eius nam aspernatur.</p>
        </div>
      </div>

      <div className="home4" id='brands'>
        <div className='home4div'>
          <h1>Brands</h1>

          <article>

            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

          </article>
        </div>
      </div>
    </>

  )
}

export default Home