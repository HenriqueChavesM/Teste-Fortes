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

export const HomeContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;

  h1 {
    color: #2c3e50;
    font-size: 1.5rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  
  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #ecf0f1;
  }

  th {
    background-color: #f8f9fa;
    color: #34495e;
  }

  tr:hover {
    background-color: #f8f9fa;
  }

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
`;


export const ActionButton = styled.button<{ 
  $primary?: boolean;
  $danger?: boolean;
  $edit?: boolean;
  $logout?: boolean 
}>`
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  background-color: ${props => 
    props.$primary ? '#3498db' :
    props.$danger ? '#e74c3c' :
    props.$edit ? '#2ecc71' :
    props.$logout ? '#95a5a6' : 
    '#bdc3c7'};

  color: white;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:focus {
    outline: 2px solid #3498db;
    outline-offset: 2px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  input {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #bdc3c7;
    border-radius: 4px;
    font-size: 16px;
  }

  .buttons {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    margin-top: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: #34495e;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`

export const SearchInput = styled.input`
  padding: 8px;
  margin-bottom: 20px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;


export const DateFilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DateSelect = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

