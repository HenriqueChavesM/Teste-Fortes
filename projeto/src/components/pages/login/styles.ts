import styled from '@emotion/styled';

export const DivImg = styled.div`
    max-width: 100%;
    margin: 0 auto;
    padding: 2rem;
`;

export const FortesImg = styled.img`
  display: flex;
  justify-content: start;
  width: 15rem;

`;

export const Title = styled.h2`
  margin: 1rem 0;
  font-size: 1.5rem;
  color: #333;
  text-align: center;
`;

export const FormContainer = styled.div`
  align-items: center;
  max-width: 400px;
  margin: 3rem auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1.2rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background: #0056b3;
  }

  &:active {
    background: #004085;
  }
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  margin: 0.5rem 0;
  font-size: 0.875rem;
  text-align: center;
  animation: shake 0.5s ease;
  
  @keyframes shake {
    0% { transform: translateX(-10px); }
    25% { transform: translateX(10px); }
    50% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
    100% { transform: translateX(0); }
  }
`;

export const Background = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

