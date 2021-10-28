import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
export const LeftContainer = styled.div`
  width: 60vw;
  height: 100vh;
  position: absolute;
  top:0;
  left:0;

}
`;
export const RightContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top:0;
  left: 0vw;

}
`;

export const IntroLeft = styled.div`
  width: 60vw;
  height: 100vh;
  font-size: 16px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(100% 0, 0% 100%, 0 0);

  `;

  export const IntroRight = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 16px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(55% 0, 100% 0%, 100% 100%, 0% 100%);

`;
export const SkillsLeft = styled.div`
  width: 40vw;
  height: 100vh;
  font-size: 16px;
  background-color: lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
export const WorksLeft = styled.div`
  width: 40vw;
  height: 100vh;
  font-size: 16px;
  background-color: lightsalmon;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AboutLeft = styled.div`
  width: 40vw;
  height: 100vh;
  font-size: 16px;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SkillsRight = styled.div`
  width: 60vw;
  height: 100vh;
  font-size: 16px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WorksRight = styled.div`
  width: 60vw;
  height: 100vh;
  font-size: 16px;
  background-color: salmon;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AboutRight = styled.div`
  width: 60vw;
  height: 100vh;
  font-size: 16px;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;
