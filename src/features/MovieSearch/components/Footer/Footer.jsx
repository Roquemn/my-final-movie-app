import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
    background-color: #252422;
    position: relative;
    bottom: 0;
    left: 0;

`

const FooterWrap =styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center:
    max-width: 1100px;
    margin 0 auto;
    

`

const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }

`
const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`
const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    width: 10rem;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10;
        width: 100%;
    }

`

const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;

`

const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #01bf71;
        transition: 0.3 ease-out;
    }
`





const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/">About</FooterLink>
                <FooterLink to="/">Favorites</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
