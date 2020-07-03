import { createGlobalStyle } from 'styled-components';


import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
  

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body{
  font: 400 14px Roboto, sans-serif;
  background: rgb(37,41,46);
  -webkit-font-smoothing: antialiased;

}
h1,h1,h3,h4,h5,h6{
  font: 700 18px Roboto, sans-serif;
}

input, button, textarea{
  font: 400 18px Roboto, sans-serif;
}

button{
  cursor: pointer;
}
form input {
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
}

form textarea {
  width: 100%;
  min-height: 140px;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;
  resize: vertical;
}

.button {
  width: 100%;
  height: 60px;
  background: #F74657;
  border: 0;
  border-radius: 8px;
  color: #000;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
}

.button:hover{
  filter: brightness(90%);
  color: #FFF;
}



.back-link {
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #FFF;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
 }
 .back-link svg{
   margin-right: 8px;
 }
 
 .back-link:hover{
   opacity: 0.6;
   color: #F74657;
  }

  .back-link svg:hover{
    color: #F74657;
  }
`;

