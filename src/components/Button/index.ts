import styled from 'styled-components';

export const Button = styled.button`

  background: ${
    props => props.property === 'primary' ?
     "var(--primaryColor)" : "var(--background)"
    };

  border: ${
    props => props.property === 'primary' ?
     "none" : "1px solid var(--borderInput)"
    };

  color: ${
    props => props.property === 'primary' ?
     "var(--background)" : "var(--primaryColor)"
    };

  :hover {
    background: ${
      props => props.property === 'primary' ?
       "var(--primaryColorHover)" : "var(--backgroundGray)"
      };
  }

  min-width: 8rem;
  height: 35px;
  margin: 10px 0 10px 5px;
  border-radius: 5px;
  padding: 0 12px;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  transition: 0.7s;
  display: flex;
  font-weight: 500;
  font-size: 14px;
`;