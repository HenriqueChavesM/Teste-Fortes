import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useAuth } from '../../context/AuthContext';
import { 
  HomeContainer, 
  Header, 
  Table, 
  ActionButton, 
  ModalOverlay, 
  ModalContent,
  FilterContainer,
  DivImg,
  FortesImg,
  SearchInput, 
  DateFilterContainer, 
  DateSelect 
} from './styles';

export const Home = () => {
  const navigate = useNavigate();
  const { users, currentUser, addUser, updateUser, deleteUser, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ login: '', senha: '' });
  const [selectedId, setSelectedId] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  // Função para filtrar usuários com base na pesquisa e nas datas
  const filteredUsers = users.filter(user => {
    const userDate = new Date(user.dataCadastro);
    const userMonth = userDate.getMonth() + 1; // Meses começam do 0 em JavaScript, então somamos 1
    const userDay = userDate.getDate();

    const matchesSearch = 
      user.id.toString().includes(searchQuery) || 
      user.login.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesMonth = selectedMonth ? userMonth === parseInt(selectedMonth) : true;
    const matchesDay = selectedMonth && selectedDay ? userDay === parseInt(selectedDay) : true;

    return matchesSearch && matchesMonth && matchesDay;
  });

  const handleSubmit = () => {
    // Verificar se os campos estão completos
    if (!formData.login || !formData.senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // Verificar se o login já existe
    const existingUser = users.find(user => user.login === formData.login);
    if (existingUser && existingUser.id !== selectedId) {  // Se for um novo usuário ou usuário com id diferente
      alert('Já existe um usuário com este login.');
      return;
    }
  
    if (selectedId) {
      updateUser(selectedId, formData);  // Atualiza o usuário
    } else {
      addUser(formData);  // Cria um novo usuário
    }
  
    setShowModal(false);
    setFormData({ login: '', senha: '' });
  };
  

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Confirmar exclusão?')) {
      deleteUser(id); // Chama a função de exclusão
    }
  };

  return (
    
    <HomeContainer>
      <DivImg><FortesImg src="/img/fortes.png" alt="" /></DivImg>
      <Header>
        <h1>Gestão de Usuários</h1>
        <div>
          <ActionButton $primary onClick={() => {
            setSelectedId('');
            setShowModal(true);
          }}>
            + Novo Usuário
          </ActionButton>
          <ActionButton $logout onClick={handleLogout}>
            Sair
          </ActionButton>
        </div>
      </Header>

      {/* Barra de pesquisa */}
      <FilterContainer>
        <SearchInput 
          type="text" 
          placeholder="Buscar por ID ou Usuário"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* Filtros de data */}
      <DateFilterContainer>
        <DateSelect 
          value={selectedMonth} 
          onChange={(e) => {
            setSelectedMonth(e.target.value);
            setSelectedDay(''); // Resetar o dia ao alterar o mês
          }} 
        >
          <option value="">Filtrar por mês</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </DateSelect>

        {selectedMonth && (
          <DateSelect 
            value={selectedDay} 
            onChange={(e) => setSelectedDay(e.target.value)} 
          >
            <option value="">Filtrar por dia</option>
            {[...Array(31)].map((_, i) => (
              <option key={i+1} value={i+1}>{i+1}</option>
            ))}
          </DateSelect>
        )}
      </DateFilterContainer>
      </FilterContainer>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuário</th>
            <th>Data de Cadastro</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.login}</td>
              <td>{format(new Date(user.dataCadastro), 'dd/MM/yyyy HH:mm')}</td>
              <td>
                <ActionButton $edit onClick={() => {
                  setSelectedId(user.id);
                  setFormData({ login: user.login, senha: '' });
                  setShowModal(true);
                }}>
                  Editar
                </ActionButton>
                {user.login !== 'Fortes' && user.id !== currentUser?.id && (
                  <ActionButton $danger onClick={() => handleDelete(user.id)}>
                    Excluir
                  </ActionButton>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <h3>{selectedId ? 'Editar' : 'Novo'} Usuário</h3>
            <input
              value={formData.login}
              onChange={e => setFormData({ ...formData, login: e.target.value })}
              placeholder="Login"
              required
            />
            <input
              type="password"
              value={formData.senha}
              onChange={e => setFormData({ ...formData, senha: e.target.value })}
              placeholder="Senha"
              required
            />
            <div className="buttons">
              <ActionButton onClick={() => setShowModal(false)}>
                Cancelar
              </ActionButton>
              <ActionButton $primary onClick={handleSubmit}>
                Salvar
              </ActionButton>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </HomeContainer>
  );
};
