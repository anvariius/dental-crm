export type LoginPassword = {
  login: string;
  password: string;
};

export type UserType = {
  name: string;
  login: string;
  position: string;
  phone: string;
  permission: string;
} | null;
