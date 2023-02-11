import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    flex: none;
    padding: 0 16px;
    border-right: 2px solid ${({ theme }) => theme.colors.headerTop};
    border-top: 1px solid ${({ theme }) => theme.colors.textSubtle};
`

const ReviewedByRugDocEntry = styled.a` 
  display: block;
  width: 100%;  
  padding: 5px 10px 0px;
  img {
    width: 100%;
  }
`

const ReviewedByJagoSaferEntry = styled.a` 
  display: block;
  width: 100%;
  box-shadow: -1px 1px 11px 3px #3fcf7b;
  border-radius: 7px;
`

const JagoSaferContainer = styled.div`  
  display: block;
  width: 100%;    
  padding: 0 27px 15px;
  img {
    width: 100%;
    display: block;
  }
`

const JagoSaferStyledImage = styled.img`    
  display: block;
`

const PanelRugDog = () => {
    return (
        <Container>
            <ReviewedByRugDocEntry target="_blank" href="https://rugdoc.io/project/cougarswap-poly/">
                <img src="/images/promotion/rugdoc-review-badge-with-glow.png" alt="Reviewed by RugDoc"/>
            </ReviewedByRugDocEntry>
            {/* <JagoSaferContainer>
              <ReviewedByJagoSaferEntry target="_blank" href="https://jagosafer.io/">
                  <JagoSaferStyledImage src="/images/promotion/jagosafer-greenflag.svg" alt="Reviewed by JagoSafer"/>
              </ReviewedByJagoSaferEntry>
            </JagoSaferContainer>             */}
        </Container>
    )
}

export default PanelRugDog