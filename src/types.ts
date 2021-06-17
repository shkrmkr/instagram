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
  email: string;
  username: string;
  fullName: string;
  createdAt: string;
  profilePictureUrl: string | null;
  website: string | null;
  bio: string | null;
}

export interface UserProfile extends User {
  posts: BasePost[];
  postCount: number;
  followerCount: number;
  followingCount: number;
  isFollowedByUser: boolean;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}

export interface AuthError {
  field: string;
  message: string;
}

interface BasePost {
  id: number;
  caption: string;
  createdAt: string;
  imageSrc: string;
  isLikedByUser: boolean;
  totalLikes: number;
}

export interface Post extends BasePost {
  user: User;
  comments: Comment[];
}

export interface Comment {
  id: string;
  body: string;
  createdAt: string;
  user: User;
}

export type Suggestions = User[];
