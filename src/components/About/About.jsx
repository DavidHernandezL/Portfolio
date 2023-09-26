import { AboutAnimation } from '../AboutAnimation/AboutAnimation.jsx'
import { AboutContainer, AboutBg, AboutLeftContainer, Img, AboutRightContainer, AboutInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './About.js'
import profileImg from '../../Assets/profileImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

export const About = () => {
  return (
    <div id="about">
      <AboutContainer>
        <AboutBg>
          <AboutAnimation />
        </AboutBg>
        <AboutInnerContainer >
          <AboutLeftContainer id="Left">
            <Title>Hola, Yo soy <br /> {Bio.name}</Title>
            <TextLoop>
              Soy
              <Span>
                <Typewriter options={{ strings: Bio.roles, autoStart: true, loop: true }} />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target='display'>Descargar CV</ResumeButton>
          </AboutLeftContainer>
          <AboutRightContainer id="Right">
            <Img src={profileImg} alt="personal profile image" />
          </AboutRightContainer>
        </AboutInnerContainer>
      </AboutContainer>
    </div>
  )
}