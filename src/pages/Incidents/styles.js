import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 30px auto;


  div{
  width: 100%;
  padding: 20px;
  background: #2F3438;
  box-shadow: 0 0 4px #F74657;
  border-radius: 8px;
  }
  
`;

export const Content = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 30px;
  list-style: none;

  li{
   background: #FFF;
   padding: 20px;
   border-radius: 8px;
   position: relative;

   button {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    background: none;

    &:hover{
     opacity: 0.8;
    }
   }
   strong {
    display: block;
    margin-bottom: 16px;
    color: #41414D;
   }
   p + strong{
     margin-top: 32px;
    }

    p{
    color: #737380;
    line-height: 21px;
    font-size: 16px;
    }
    img{
      max-width:180px;
    }
  }
`; 