import React from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Cards from "./Cards";

const Hero = () => {

    return (

            <div className="hero">
                <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/hero-bg.jpg" alt="" className="img-fluid"/>
               <div className="centerHero">
                    <h2>One Page Bootstrap Website Template</h2>
                    <p>We are team of talented designers</p>
                    <Button  className="my-button">Get Started</Button>
               </div>
               <CardGroup className="cards-hero">
                    <Cards image="1.png" title="Waaazup" text="asfasfasfasfasfs fahjfbvas fajsf akjf wka dfakijf axfkjwf akfwj awjfdakfj js "/>
                    <Cards image="2.png" title="Waaazup d ds dsf" text=" sfdfs asfasfasfasfasfs fahjfbvas fajsf akjf wka dfakijf axfkjwf akfwj awjfdakfj js "/>
                    <Cards image="3.png" title="Waaazup sdfds" text="asfasfasfa fsd  sdfsfasfs fahjfbvas fajsf akjf wka dfakijf axfkjwf akfwj awjfdakfj js "/>
                    <Cards image="4.png" title="Waaazup sdgsd" text="asfasfasfasfasfs fa fsdf f sd fhjfbvas fajsf akjf wka dfakijf axfkjwf akfwj awjfdakfj js "/>
                </CardGroup>

            </div>

    )
}

export default Hero;