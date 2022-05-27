import styled from 'styled-components';

export const Container = styled.div`
    align-content: flex-start;
    align-items: top;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    margin: auto 0 auto 270px;
    min-height: 85vh;
    width: 80vw;
`

export const Card = styled.section`
    border: 1px solid var(--text-body);
    width: 250px;
    height: 200px;
    margin: 10px;
    border-radius: 5px;

    img {
        height: 120px;
        width: 100%;
    }

    section {
        align-self: center;
        border-left: 3px solid var(--purple);
        font-size: 16.5px;
        margin: 10px;
        padding: 0 0 0 5px ;
        font-family: 'Raleway', sans-serif;
    }

`

export const PlaceHolderCard =styled.section`
    align-items: center;
    border: 1px solid var(--text-body);
    border-radius: 5px;
    display: flex;
    height: 200px;
    justify-content: center;
    margin: 10px;
    width: 250px;

    button {
        background-color: var(--purple);
        border:none;
        border-radius: 100%;
        color: #FFF;
        font-size: 30px;
        text-align: center;
        height: 40px;
        width: 40px;
    }
`
