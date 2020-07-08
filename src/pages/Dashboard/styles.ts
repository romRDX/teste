import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main`
  position: relative;
  max-width: 1120px;
  width: 100%;
  margin: 64px auto;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1200px) {
    max-width: 85%;
  }
`;

export const SectionTitle = styled.span`
  cursor: pointer;
  font-size: 20px;
  font-weight: 500px;
  border-top: 1.2px solid #f5b53f;
  border-bottom: 1.2px solid #f5b53f;
  width: 100%;
  padding: 5px 0;
  font-family: 'Roboto';

  a {
    text-decoration: none;
    color: black;
  }

  svg {
    margin-left: 7px;
    vertical-align: middle;
  }
`;
