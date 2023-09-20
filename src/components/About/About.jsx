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
            <Title>Hi, I am <br /> {Bio.name}</Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
          </AboutLeftContainer>

          <AboutRightContainer id="Right">

            <Img src={profileImg} alt="hero-image" />
          </AboutRightContainer>
        </AboutInnerContainer>

      </AboutContainer>
    </div>
  )
}