import styled from "styled-components";

const Bar = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 1.1rem;
  background-color: #23a24d;
  color: white;
  letter-spacing: 2px;
  font-size: 1.3rem;
  cursor: pointer;
  background-image: linear-gradient(
    to right,
    rgba(75, 255, 100, 0.2) 15%,
    #23a24d,
    rgba(75, 255, 100, 0.2) 85%
  );
`;

const ButtonBlue = styled.button`
  text-decoration: none;
  border: none;
  border-radius: 5px;
  padding: 1rem 1.8rem;
  background-color: #2979ff;
  color: white;
  letter-spacing: 1.5px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  outline: none;
  transition-duration: 0.1s;

  :hover {
    color: white;
    background-color: #ff6d00;
  }

  :active {
    box-shadow: 0 0 0 3px #ff6d00;
    background-color: white;
    color: #ff6d00;
  }
`;

const ButtonOrange = styled.button`
  text-decoration: none;
  border: none;
  border-radius: 5px;
  padding: 1rem 1.8rem;
  background-color: #ff6d00;
  color: white;
  letter-spacing: 1.5px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  outline: none;
  transition-duration: 0.1s;

  :hover {
    color: white;
    background-color: #2979ff;
  }

  :active {
    box-shadow: 0 0 0 3px #2979ff;
    background-color: white;
    color: #2979ff;
  }
`;

const ButtonGrey = styled.button`
  text-decoration: none;
  border: none;
  border-radius: 5px;
  padding: 1rem 1.8rem;
  background-color: #bdbdbd;
  color: white;
  letter-spacing: 1.5px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  outline: none;
  transition-duration: 0.1s;

  :hover {
    color: white;
    background-color: #cecece;
  }

  :active {
    box-shadow: 0 0 0 3px #cecece;
    background-color: white;
    color: #cecece;
  }
`;
const ButtonRed = styled.button`
  text-decoration: none;
  border: none;
  border-radius: 5px;
  padding: 1rem 1.8rem;
  background-color: red;
  color: white;
  letter-spacing: 1.5px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  outline: none;
  transition-duration: 0.1s;

  :hover {
    color: white;
    background-color: red;
  }

  :active {
    box-shadow: 0 0 0 3px red;
    background-color: white;
    color: red;
  }
`;

export { Bar, ButtonBlue, ButtonOrange, ButtonGrey, ButtonRed };
