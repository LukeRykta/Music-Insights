import styled from "styled-components";

export const ResultsContainer = styled.div`
  height: auto;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  
  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const ResultsWrapper = styled.div`

  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  white-space: nowrap;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`
export const ResultsCard = styled.div`
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`