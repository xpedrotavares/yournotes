import styled from "styled-components";
import Arrow from '../../assets/Arrow.svg';

export const Container = styled.aside`
  align-items: center;
  display: flex;
  left: -255px;
  min-height: 100vh;
  position: absolute;
  transition: 650ms;
  visibility: hidden;

  &.active {
    left: 0;
    transition: 350ms;
    visibility: visible;
  }

  div {
    align-items: center;
    background: var(--background-drawer);
    border-radius:0 1rem 1rem 0;
    box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075);
    display: flex;
    flex-direction: column;
    height: 75vh;
    min-height: 550px;
    padding: 0.5rem;
    width: 250px;

    .profile-photo-container {
      border-radius: 50%;
      filter: drop-shadow(1px 2px 4px hsl(220deg 0% 0% / 0.095));
      height: 121px;
      margin: 3rem 0;
      overflow: hidden;
      width:121px;
    }

    img {
      width:121px;
    }

    button {
      background-color: var(--purple);
      border: none;
      border-radius: 25px;
      color: #FFF;
      filter: drop-shadow(1px 2px 4px hsl(220deg 0% 0% / 0.075));
      font-weight: 600;
      height: 35px;
      width: 121px;
    }
  }
`

export const Menu = styled.section`
  display: flex;
  flex-direction: column;
  height: 60%;
  text-align: left;

  a {
    color: var(--text-title);
    font-weight: 600;
    padding: 0.4rem 0 0.4rem 10%;
    width: fit-content;
  }

  span {
    border-top: 0.5px solid #D2D2D3;
    width: 15rem;
  }
`
export const DrawerToggleButton = styled.button`
  background: url(${Arrow}) center no-repeat;
  background-color: var(--purple);
  border: none;
  border-radius: 25px;
  color: #FFF;
  font-weight: 600;
  height: 48px;
  left: -20px;
  margin-top: 100px;
  position: absolute;
  transition: 650ms;
  transform: rotate(0deg);
  width: 48px;
  z-index: 1000;

  &.active {
    left: 220px;
    transform: rotate(180deg);
    transition: 350ms;
  }
`