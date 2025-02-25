import styled from '@emotion/styled';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #e74c3c;
  margin-bottom: 1rem;
`;

export const Message = styled.p`
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
`;

export const HomeButton = styled.button`
  padding: 1rem 2rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #2980b9;
  }
`;