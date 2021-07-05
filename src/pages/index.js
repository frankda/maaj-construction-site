import * as React from "react";
import "./app.scss";

// components
import Navigation from "../components/navigation/navigation";
import Banner from '../components/banner/banner';
import CardIcon from '../components/card-icon/card-icon';
import Section from '../components/section/section';
import CardGroup from '../components/card-group/card-group';
import Footer from '../components/footer/footer';
import Projects from '../components/projects/projects';

// configuration
import '../config/fontawesome';

// markup
const IndexPage = () => {
  return (
    <>
      <header>
        <div className="container">
          <Navigation />
        </div>
      </header>
      <main>
        <Banner />

        {/* What we offer section */}
        <Section>
          <h2>What we offer</h2>
          <CardGroup>
            <CardIcon
              icon="hard-hat"
              title="test1"
              description="lourme long tetxt lourme long tetxt lourme long tetxt lourme long tetxt"
            ></CardIcon>
            <CardIcon
              icon="ruler-combined"
              title="test2"
              description="des1"
            ></CardIcon>
          </CardGroup>
        </Section>

        {/* Projects section */}
        <Section>
          <h2>Our Projects</h2>
          <Projects />
        </Section>
      </main>

      <Footer></Footer>
    </>
  )
}

export default IndexPage
