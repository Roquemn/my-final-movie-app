import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const FooterContainer = styled.footer`
  background-color: #252422;
  bottom: 0;
  left: 0;
`;

const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center:
    max-width: 1100px;
    margin 0 auto;
    

`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;
const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10;
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 400;
  letter-spacing: .1em;

  span {
    color: #ff7d00;
  }
`;

const Icons = styled(Link)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  color: #FF7D00;
  font-size: 1.5rem;

  &:hover {
    color: #F7F5FB;
    transition: 0.3s ease-out;
  }
`;

const Copyright = styled.span`
  color: #F7F5FB;
  font-size: .75rem;
  font-weight: 200;
  letter-spacing: .2em;
  opacity: .4;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>
                MOVIE <span>APP</span>
              </FooterLinkTitle>
            </FooterLinksItems>
            <Icons>
              <FaGithub />
              <FaLinkedin />
              <FaInstagram />
            </Icons>
            <Copyright>2022.MOVIEAPP.CREATED BY ROQUE</Copyright>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
