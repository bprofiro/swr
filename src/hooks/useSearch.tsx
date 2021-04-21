import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

import { fetchGithubUser } from '../services/userService';

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
  user: UserProps;
  loading: boolean;
  errorMessage: string;
  search: (username: string) => Promise<void>;
}

const SearchContext = createContext<SearchContextData>({} as SearchContextData);
export function SearchProvider({ children }: SearchProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const search = useCallback(async (userName: string) => {
    setLoading(true);

    try {
      const response = await fetchGithubUser(userName);

      setErrorMessage('');
      setUser(response);
    } catch (err) {
      setErrorMessage('User not found');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <SearchContext.Provider
      value={{
        user,
        search,
        loading,
        errorMessage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch(): SearchContextData {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within an AuthProvider');
  }
  return context;
}
