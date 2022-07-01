import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeProvider } from "styled-components";
import AboutMeSection from "./components/AboutMeSection";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import Sidebar from "./components/Sidebar";
import TechSection from "./components/TechSection";
import GlobalStyle from "./styles/global";
import themes from "./styles/themes";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const getOpositeTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  };

  return (
    <>
      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyle />
        <Header>
          <Button handleClick={getOpositeTheme} mobile={false}>
            {currentTheme === "light" ? <FaSun /> : <FaMoon />}
          </Button>
        </Header>
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          button={
            <Button handleClick={getOpositeTheme} mobile={true}>
              {currentTheme === "light" ? <FaSun /> : <FaMoon />}
            </Button>
          }
        />

        <AboutMeSection />
        <TechSection />
        <ProjectsSection />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
