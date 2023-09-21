import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';
import { Copyright, FooterContainer, FooterWrapper, Logo, Nav, NavLink, SocialMediaIcon, SocialMediaIcons } from './Footer';

export function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>{Bio.name}</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.twitter} target="display"><TwitterIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          Design by <NavLink href='https://github.com/rishavchanda' target='_blank'>Rishav Chanda</NavLink>
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}