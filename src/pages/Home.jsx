import React from "react";
import { AboutLeft, AboutRight, HomeContainer, IntroLeft, IntroRight, LeftContainer, RightContainer, SkillsLeft, SkillsRight, WorksLeft, WorksRight} from './homeStyle.jsx'

function Home() {
  return (
    <HomeContainer className="homeContainer">
      <LeftContainer className="leftContainer">
          <IntroLeft className="introLeft">
              <h1>Hi! Welcome to...Intro</h1>
          </IntroLeft>
          <SkillsLeft>
              <h1>SkillsLeft</h1>
          </SkillsLeft>
          <WorksLeft>
              <h1>WorksLeft</h1>
          </WorksLeft>
          <AboutLeft>
              <h1>AboutLeft</h1>
          </AboutLeft>
      </LeftContainer>
      <RightContainer className="rightContainer">
          <IntroRight className="introLeft">
              <h1>Hi! Welcome to...Intro Right</h1>
          </IntroRight>
          <SkillsRight>
              <h1>SkillsRight</h1>
          </SkillsRight>
          <WorksRight>
              <h1>WorksRight</h1>
          </WorksRight>
          <AboutRight>
              <h1>AboutRight</h1>
          </AboutRight>
      </RightContainer>
    </HomeContainer>
  );
}

export default Home;
