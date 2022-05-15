import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#313131" : "white"};
  color: ${props => props.primary ? "white" : "#313131"};
  
  border: 2px solid black;
  border-radius: 3px;

  font-size: 1em;
  font-weight : 600;
  padding: 1rem 2rem;
  margin-right : 2rem;
`;

export default Button;