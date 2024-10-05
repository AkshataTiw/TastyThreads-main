import React, { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';  
import "./Home.css";
import Image1 from '../Assets/breadfry.jpeg';
import Image2 from '../Assets/chole.jpeg';
import Image3 from '../Assets/momos.jpeg';
import Detail from './Detail';  
import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';
import Statistics from '../Components/Statistics.js';

function Home() {
  const location = useLocation();  
  const navigate = useNavigate();  
  
 
  useEffect(() => {
    if (location.hash === "#about-us-section") {
      const aboutSection = document.getElementById("about-us-section");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const images = [
    { src: Image1, name: "Bread Fry" },
    { src: Image2, name: "Chole Bhature" },
    { src: Image3, name: "Momos" }
  ];

  return (
    <>
      <Header />
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <input
              type="text"
              placeholder="Search for recipes..."
              className="search-bar"
            />
            <h1 className="hero-heading">
              "Tasty Threads: Weaving Flavors Together"
            </h1>
            <p className="hero-text">
              Welcome to Tasty Threads, A Culinary Community for Food Lovers.
              Share Your Best Recipes, And Discover New Flavors Together!
            </p>
            <div className="hero-buttons">
              {/* Redirect to Login Page */}
              <button className="btn-login" onClick={() => navigate('/login')}>
                Login
              </button>
              {/* Redirect to Sign Up Page */}
              <button className="btn-signup" onClick={() => navigate('/signup')}>
                Sign Up
              </button>
            </div>
          </div>
        </section>

        {/* Circle Section */}
        <section className="circle-section">
          <h1>Explore Our Top Recipes</h1>
          <div className="circle-container">
            {images.map((image, index) => (
              <div className="circle" key={index}>
                <img src={image.src} alt={image.name} />
                <p>{image.name}</p>
              </div>
            ))}
          </div>
          {/* Redirect to Recipe List Page */}
          <button className="btn-explore" onClick={() => navigate('/RecipeListPage')}>
            Explore More
          </button>
        </section>

        {/* Add your recipe section */}
        <section className="add-recipe-section">
          <div className="left-section1">
            <h2 className="heading2">Share Your Culinary Creations with the World!</h2>
            {/* Redirect to Recipe Form Page */}
            <button className="btn-add-recipe" onClick={() => navigate('/RecipeForm')}>
              Add Your Recipe
            </button>
          </div>
        </section>

        <Statistics />

        {/* Demo section */}
        <Detail />

        {/* About Us Section */}
        <section className="about-us-section" id="about-us-section">
          <h2>About Us</h2>
          <p>
            At Tasty Threads, we believe in the power of food to bring people
            together. Our platform is dedicated to sharing diverse recipes from
            around the globe, celebrating culinary traditions and innovations. We
            strive to create a community where every food lover can contribute,
            learn, and be inspired. Join us on this flavorful journey as we
            explore the art of cooking and the joy of sharing! Our mission is to
            make cooking accessible and enjoyable for everyone, whether you’re a
            seasoned chef or a beginner in the kitchen. We encourage creativity
            and experimentation, inviting you to put your unique twist on beloved
            recipes. Together, we can inspire each other and discover new flavors
            that excite our taste buds. Let’s build a vibrant community where each
            recipe tells a story, and every meal is a celebration of culture and
            friendship.
          </p>
        </section>

        {/* Express Your Views Section */}
        <section className="express-views-section">
          <h2>Express Your Views</h2>
          <textarea
            className="views-textbox"
            placeholder="Share your thoughts here..."
            rows="6"
          />
          <div className="button-container">
            <button className="btn-submit btn-explore">Submit</button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Home;