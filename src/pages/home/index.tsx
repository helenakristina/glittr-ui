import React from 'react';
import styled from 'styled-components'

const Header = styled.h2`
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`

const Home = () => {
    return (
        <div>
          <Header>Glittr</Header>
        </div>
    )
}

export default Home;
