import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FormContainer, Input, Button, ErrorMessage, Title, Background ,DivImg, FortesImg} from './styles';

export const Login = () => {
  const navigate = useNavigate();
  const { login, users } = useAuth(); // Adicionando a referência à lista de usuários
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const credentials = {
      login: formData.get('login') as string,
      senha: formData.get('senha') as string
    };

    // Verifica se as credenciais são válidas
    const user = users.find(
      (u) => u.login === credentials.login && u.senha === credentials.senha
    );

    if (user) {
      login(credentials); // Chama a função de login do contexto
      navigate('/home'); // Navega para a página /home
    } else {
      setError('Credenciais inválidas!');
    }
  };

  return (
    <Background>
      <DivImg><FortesImg src="/img/fortes.png" alt="" /></DivImg>
      <FormContainer>
        <Title>Acesso ao Sistema Fortes</Title>
        <form onSubmit={handleSubmit}>
          <Input name="login" placeholder="Usuário" required />
          <Input type="password" name="senha" placeholder="Senha" required />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button type="submit">Entrar</Button>
        </form>
      </FormContainer>
    </Background>
  );
};
