import createStore, { State } from 'zustand';
import { devtools } from 'zustand/middleware';
import { api } from '../api';
import { Post } from '../types';

interface FeedState extends State {
  posts: Post[];
  isLoading: boolean;
  toggleLike: (postId: Post['id']) => Promise<void>;
  getPosts: () => Promise<void>;
}

export const useFeedStore = createStore<FeedState>(
  devtools((set) => ({
    posts: [],
    isLoading: false,
    toggleLike: async (postId) => {
      const { data } = await api.toggleLike(postId);

      set((prev) => ({
        posts: prev.posts.map((post) => (post.id === data.id ? data : post)),
      }));
    },
    getPosts: async () => {
      set({ isLoading: true });
      const { data } = await api.getPosts();
      set({ posts: data, isLoading: false });
    },
  })),
);
