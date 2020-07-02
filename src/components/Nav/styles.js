import styled from 'styled-components';

export const Navigation = styled.header`

  max-width: 100%;
  border-bottom: 2px solid #222;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0;
  height: 85px;
  background: #F74657;
  

  .logo  {
    padding-top: 33px;
    display: flex;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;
    transition: all 0.6s;
  
      img {
        display: inline-block;
        margin-top: 5px;
        width: 150px;
        height: 60px;
        &:hover{
          opacity: 0.6;
        }
      }
      
      
  }
 
  .logo:hover {
    opacity: 8;
  }
  .fa-bars {
    display: none;
    color: #222;
    font-size: 2rem;
  }
  nav {
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      color:#1F2127;
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1.2em;
      list-style: none;
      padding: 10px;
      margin-bottom: 10px;
      text-transform: uppercase;
      font-weight: bold;
      line-height: 10px;
      transition: all 0.4s;
      &:hover{
        border-bottom: 2px solid #FFF;
        opacity: 0.7;
        color: #FFF;
      }
    }
  
    a {
      
      font-size: 1em;
      text-decoration: none;
      .active {
        color: #FFF;
      }
    }
    a.active {
      color: #FFF;

     
    }
    
  }

  @media only screen and (max-width: 800px) {
    flex-direction:column;
    justify-content: flex-start;
    height: 140px;

    nav {
      margin-top: 10px;
   
    }

    .logo {
      padding-top: 0;
      padding-bottom: 0;

    }
  }
 
  @media only screen and (max-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      a {
        padding: 20px 0px;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        width: 100%;
        overflow: hidden;
        max-height: 500px;
        /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 13px 0 9px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;