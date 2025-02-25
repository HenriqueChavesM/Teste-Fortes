import { useNavigate } from 'react-router-dom';
import { ErrorContainer, Title, Message, HomeButton } from './styles';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <ErrorContainer>
      <Title>404 - Página Não Encontrada</Title>
      <Message>A página que você está procurando não existe.</Message>
      <HomeButton onClick={() => navigate('/')}>
        Voltar para o Login
      </HomeButton>
    </ErrorContainer>
  );
};