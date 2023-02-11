import React, { useState } from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import ButtonMenu2 from "./ButtonMenu2";
import ButtonMenuItem2 from "./ButtonMenuItem2";

const Row = styled.div`
  margin-bottom: 32px;

  & > button + button {
    margin-left: 16px;
  }
`;

export default {
  title: "Components/Button Menu",
  component: ButtonMenu2,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);

  const handleClick = (newIndex) => setIndex(newIndex);
  const handleClick1 = (newIndex) => setIndex1(newIndex);

  return (
    <>
      <Row>
        <ButtonMenu2 activeIndex={index} onClick={handleClick}>
          <ButtonMenuItem2>Button 1</ButtonMenuItem2>
          <ButtonMenuItem2>Button 2</ButtonMenuItem2>
          <ButtonMenuItem2>Button 3</ButtonMenuItem2>
          <ButtonMenuItem2>Button 4</ButtonMenuItem2>
        </ButtonMenu2>
      </Row>
      <Row>
        <ButtonMenu2 activeIndex={index1} onClick={handleClick1} size="sm">
          <ButtonMenuItem2>Button 1</ButtonMenuItem2>
          <ButtonMenuItem2>Button 2</ButtonMenuItem2>
          <ButtonMenuItem2>Button 3</ButtonMenuItem2>
          <ButtonMenuItem2>Button 4</ButtonMenuItem2>
        </ButtonMenu2>
      </Row>
      <Row>
        <ButtonMenu2 activeIndex={index} onClick={handleClick} variant="subtle">
          <ButtonMenuItem2>Button 1</ButtonMenuItem2>
          <ButtonMenuItem2>Button 2</ButtonMenuItem2>
          <ButtonMenuItem2>Button 3</ButtonMenuItem2>
          <ButtonMenuItem2>Button 4</ButtonMenuItem2>
        </ButtonMenu2>
      </Row>
      <Row>
        <ButtonMenu2 activeIndex={index1} onClick={handleClick1} size="sm" variant="subtle">
          <ButtonMenuItem2>Button 1</ButtonMenuItem2>
          <ButtonMenuItem2>Button 2</ButtonMenuItem2>
          <ButtonMenuItem2>Button 3</ButtonMenuItem2>
          <ButtonMenuItem2>Button 4</ButtonMenuItem2>
        </ButtonMenu2>
      </Row>
    </>
  );
};

export const AsLinks: React.FC = () => {
  return (
    <>
      <Row>
        <ButtonMenu2 activeIndex={0}>
          <ButtonMenuItem2 as="a" href="https://pancakeswap.finance">
            Link 1
          </ButtonMenuItem2>
          <ButtonMenuItem2 as="a" href="https://pancakeswap.finance">
            Link 2
          </ButtonMenuItem2>
          <ButtonMenuItem2 as="a" href="https://pancakeswap.finance">
            Link 3
          </ButtonMenuItem2>
        </ButtonMenu2>
      </Row>
    </>
  );
};
