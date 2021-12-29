import styled from 'styled-components'

export const StyledProfileProjectCard = styled.div`
  width: 24%;
  padding: 1em 0.5em;

  .main-img {
    width: 100%;
    height: 9.5rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 1);
  }

  .number,
  .description {
    margin: 1rem 0;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .people-container {
    width: 30%;

    img {
      width: 30%;
      border: 2px solid #fff;
      border-radius: 50%;
      margin-left: -10%;
    }
  }
`
