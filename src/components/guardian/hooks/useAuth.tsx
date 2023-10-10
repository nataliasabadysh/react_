interface AuthState {
  isAuthenticated: boolean;
}

export const useAuth = (): AuthState => {
  return {
    isAuthenticated: true,
  };
};
