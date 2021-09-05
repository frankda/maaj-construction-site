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
import Carousel from '../components/carousel/carousel';

// configuration
import '../config/fontawesome';

// markup
const IndexPage = () => {
  const placeholderImg =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIABIAIAMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAAEBgcF/9oACAEBAAAAAJ80ZS1DbcVKFVlHw//EABYBAQEBAAAAAAAAAAAAAAAAAAACA//aAAgBAhAAAADdL//EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAIAQMQAAAAwVH/xAArEAACAQQABQIFBQAAAAAAAAABAgMABAURBgcSITFBURMVIzRCYWKBkbH/2gAIAQEAAT8AxmOwOYINrmLJgfedUb+VbRo8tbqQCS3jEkZAIde4O/Yir3l3m4kJjxpdddh4J/urjhLJxpuWyaHsdg+mqgu3t3WSPsy+DoH/AGuEuYVzDiTj/nN7EY+phCrSaJJ9OluwNZLmnlYC0xmuJPh6ALO6dR/TqNZjjLO5m4eaa9kRTv6aOdUfFcL/AHbH9hriF3e+07ltKvk7r8a//8QAHhEAAQQBBQAAAAAAAAAAAAAAAQACAxEzEhMjUVL/2gAIAQIBAT8AMk7yNlzL6fYQknjPLos+bKhyBS5HL//EAB4RAAEDBAMAAAAAAAAAAAAAAAEAAgMEERMzISNR/9oACAEDAQE/ABFSxt72SW9YQU6KllaMOSwPBcAFNqKh1tX/2Q==';

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
        {/* <Section>
          <h2>What we offer</h2>
          <CardGroup>
            <CardIcon
              icon="hard-hat"
              title="Facade"
              description="Sydney best construction service"
            ></CardIcon>
            <CardIcon
              icon="ruler-combined"
              title="Ceiling"
              description="Professional ceiling installation service"
            ></CardIcon>
          </CardGroup>
        </Section> */}

        {/* Projects section */}
        <Section>
          <h5>Our Projects</h5>
          <Projects />
        </Section>
      </main>

      <Footer></Footer>
    </>
  )
}

export default IndexPage
