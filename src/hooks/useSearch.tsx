import React, { createContext, ReactNode, useContext, useState } from 'react';

export interface UserProps {
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  public_repos: number;
}

interface SearchProviderProps {
  children: ReactNode;
}

interface SearchContextData {
  username: string;
  setUsername: (username: string) => void;
}

const SearchContext = createContext<SearchContextData>({} as SearchContextData);
export function SearchProvider({ children }: SearchProviderProps) {
  const [username, setUsername] = useState('');

  return (
    <SearchContext.Provider
      value={{
        username,
        setUsername,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch(): SearchContextData {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within an SearchProvider');
  }
  return context;
}
