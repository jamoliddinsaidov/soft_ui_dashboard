import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  backgroundColor: '#f0f1f3',
  backgroundNavColor: '#e9ecee',
  iconColor: '#404373',
  textColor: 'rgb(103, 116, 142);',
  successColor: 'rgb(130, 214, 22)',
  errorColor: 'rgb(234, 6, 6)',
  lightBlue: '#1ac0e8',
  darkBlue: '#2070fd',
  lightGreen: 'rgb(130, 214, 22)',
  lightGrey: 'rgb(248, 249, 250)',
  blueGradient: 'linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))',
  greenGradient: 'linear-gradient(310deg, rgb(23, 173, 55), rgb(152, 236, 45))',
  greyGradient: 'linear-gradient(310deg, rgb(98, 117, 148), rgb(168, 184, 216))',
  redGradient: 'linear-gradient(310deg, rgb(234, 6, 6), rgb(255, 102, 124))',
  blackGradient: 'linear-gradient(310deg, rgb(20, 23, 39), rgb(58, 65, 111))',
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

  html{
    scroll-behavior: smooth;
  }

  table{
    width: 100%;
    border-collapse: collapse;
  }
`

export const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1em;
  background: ${colors.backgroundColor};
  /* font-family: 'Roboto', sans-serif; */
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
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`
export const CardContainer = styled.div`
  background: #fff;
  padding: 1.5em;
  border-radius: 1em;
  color: ${colors.iconColor};
  box-shadow: 3px 2px 7px -12px rgba(0, 0, 0, 1);
`
