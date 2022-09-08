import styled from "styled-components";

interface Props {
  display: boolean
}

export const TopArrowWrapper = styled.div<Props>`
  display: ${props => props.display ? 'block' : ''};
  opacity: ${props => props.display ? '1' : '0'};
  transition: opacity .5s linear;
  position: fixed;
  bottom: 1vh;
  cursor: pointer;
  float: left;
  right: 2vh;
`
