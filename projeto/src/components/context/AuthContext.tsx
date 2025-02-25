import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../types/user';

type AuthContextType = {
  users: User[];
  currentUser: User | null;
  login: (credentials: { login: string; senha: string }) => void;
  logout: () => void;
  addUser: (user: Omit<User, 'id' | 'dataCadastro'>) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
};

// Criando o contexto com um valor padrão
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([
    {
      id: uuidv4(),
      login: 'Fortes',
      senha: '123',
      dataCadastro: new Date(),
    },
  ]);

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Função de login com tipagem correta
  const login = ({ login, senha }: { login: string; senha: string }) => {
    setUsers((prevUsers) => {
      const user = prevUsers.find((u) => u.login === login && u.senha === senha);
      setCurrentUser(user ?? null);
      return prevUsers;
    });
  };

  // Função de logout
  const logout = () => setCurrentUser(null);

  // Adicionar usuário
  const addUser = (user: Omit<User, 'id' | 'dataCadastro'>) => {
    setUsers((prev) => [
      ...prev,
      {
        id: uuidv4(),
        ...user,
        dataCadastro: new Date(),
      },
    ]);
  };

  // Atualizar usuário
  const updateUser = (id: string, updatedUser: Partial<User>) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, ...updatedUser } : u))
    );
  };

  // Remover usuário
  const deleteUser = (id: string) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <AuthContext.Provider value={{ users, currentUser, login, logout, addUser, updateUser, deleteUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
