import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 90%;
  margin: auto;
`

export const HeadingContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`

export const Heading = styled.h1`
  font-size: 30px;
  color: #1e293b;
  font-family: 'Roboto';
  @media screen and (min-width: 576px) {
    font-size: 38px;
  }
`
export const Text = styled.p`
  color: #334155;
  font-size: 18px;
  font-family: 'Roboto';
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 30px;
`

export const PageDescription = styled.p`
  color: #334155;
  font-size: 18px;
  font-family: 'Roboto';
  line-height: 2;
`

export const Button = styled.button`
  color: #ffffff;
  background-color: #1f81ff;
  border-style: solid;
  border-width: 0px;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 30px;
  display: inline-block;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    margin: auto;
    display: block;
  }
`
