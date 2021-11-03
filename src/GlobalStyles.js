import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  backgroundColor: '#f0f1f3',
  backgroundNavColor: '#e9ecee',
  iconColor: '#404373',
  textColor: 'rgba(0, 0, 0, 0.8)',
  lightBlue: '#1ac0e8',
  darkBlue: '#2070fd',
  blueGradient: 'linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))',
}

export const GlobalStyles = createGlobalStyle`
  *{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: #000;
  }
  
  a,
  p,
  h1,
  h2,
  h3,
  h4,
  li,
  span,
  label,
  button,
  input,
  textarea {
    font-family: inherit;
  }

  body::-webkit-scrollbar {
    width: 0.5rem;
  }

  body::-webkit-scrollbar-track {
    background: ${colors.backgroundColor};
  }

  body::-webkit-scrollbar-thumb {
    background: ${colors.lightBlue};
  }
`

export const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1em;
  background: ${colors.backgroundColor};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`
export const Flex = styled.div`
  display: flex;
  align-items: center;
`

export const FlexCenter = styled(Flex)`
  justify-content: center;
`

export const FlexBetween = styled(Flex)`
  justify-content: space-between;
`
