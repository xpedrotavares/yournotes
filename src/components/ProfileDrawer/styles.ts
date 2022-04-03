import styled from "styled-components";

export const Container = styled.aside`
  min-height: 100vh;
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--background-drawer);
    width: 250px;
    height: 75vh;
    border-radius:0 1rem 1rem 0;
    padding: 0.5rem;
    
    .profile-photo-container {
      width:121px;
      height: 121px;
      overflow: hidden;
      border-radius: 50%;
    }

    img {
      width:121px;
    }

    nav {
      display: flex;
      flex-direction: column;
      text-align: center;
      a {       
        width: 15rem;
        color: var(--text-title);
        &:nth-child(odd){
          
          border-top: 0.5px solid #D2D2D3;
          border-bottom: 0.5px solid #D2D2D3;
         
        }
      }
    }

    button {
      width: 121px;
      height: 35px;
      border: none;
      border-radius: 25px;
      background-color: var(--purple);
      font-weight: 600;
      color: #FFF;
      
    }
  }
`