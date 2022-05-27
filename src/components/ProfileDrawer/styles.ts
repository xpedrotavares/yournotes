import styled from "styled-components";
import Arrow from '../../assets/Arrow.svg';

export const Container = styled.aside`
  min-height: 100vh;
  display: flex;
  align-items: center;
  left: -18%;
  position: fixed;
  transition: 650ms;

  &.active {
    left: 0%;
    transition: 350ms;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--background-drawer);
    width: 250px;
    height: 75vh;
    min-height: 550px;
    border-radius:0 1rem 1rem 0;
    padding: 0.5rem;
    box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075);

    .profile-photo-container {
      width:121px;
      height: 121px;
      overflow: hidden;
      border-radius: 50%;
      margin: 3rem 0;
      filter: drop-shadow(1px 2px 4px hsl(220deg 0% 0% / 0.095));
    }

    img {
      width:121px;
    }

    button {
      width: 121px;
      height: 35px;
      border: none;
      border-radius: 25px;
      background-color: var(--purple);
      font-weight: 600;
      color: #FFF;
      filter: drop-shadow(1px 2px 4px hsl(220deg 0% 0% / 0.075));
    }
  }
`

export const Menu = styled.section`
  height: 60%;
  display: flex;
  flex-direction: column;
  text-align: left;

  a {
    color: var(--text-title);
    padding: 0.4rem 0 0.4rem 10%;
    width: fit-content;
    font-weight: 600;
  }

  span {
    border-top: 0.5px solid #D2D2D3;
    width: 15rem;
  }
`
export const DrawerToggleButton = styled.button`
  width: 48px;
  height: 48px;
  background: url(${Arrow}) center no-repeat;
  transform: rotate(0deg);
  border: none;
  border-radius: 25px;
  background-color: var(--purple);
  font-weight: 600;
  color: #FFF;
  position: absolute;
  top: 10%;
  left: 130%;
  transition: 650ms;
  z-index: 1000;

  &.active {
    transform: rotate(180deg);
    left: 90%;
    transition: 350ms;
  }
`