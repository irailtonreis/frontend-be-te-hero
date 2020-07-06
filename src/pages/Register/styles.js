import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  max-width: 1120px;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const Content = styled.div`
  width: 100%;
  padding: 50px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 100px;
  display: flex;
  justify-content: space-around;

  section {
    width: 100%;
    max-width: 285px;

    h1{
    margin: 64px 0 32px;
    font-size: 32px;
    color: #03a4ec;
    }

    p{
      font-size: 18px;
      line-height: 32px;
      color: #737380;
    }

   
  }
`;












