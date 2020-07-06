import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const Content  = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;

  section {
     width: 100%;
     max-width: 380px;

     h1{
     margin: 10px 0 30px;
     font-size: 32px;
     }
     p{
     font-size: 18px;
     line-height: 32px;
     color: #737380;
     }
     
  }

  form{
     width: 100%;
     max-width: 450px;
     input, textarea{
      margin-top: 8px;
     }
    }
`;


// .new-incident-container .content form input,
// .new-incident-container .content form textarea{
//  
// }

