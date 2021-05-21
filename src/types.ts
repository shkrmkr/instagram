export interface LoginInput {
  email: string;
  password: string;
}

export interface SignupInput {
  email: string;
  fullName: string;
  username: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
  fullName: string;
  createdAt: string;
  profilePictureUrl?: string;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}

export interface AuthError {
  field: string;
  message: string;
}

export interface Post {
  id: number;
  caption: string;
  createdAt: Date;
  imageSrc: string;
  isLikedByUser: boolean;
  totalLikes: number;
  user: User;
}

export type Suggestions = User[];
