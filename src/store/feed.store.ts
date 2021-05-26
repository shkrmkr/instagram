import createStore, { State } from 'zustand';
import { devtools } from 'zustand/middleware';
import { api } from '../api';
import { Post } from '../types';

interface FeedState extends State {
  posts: Post[];
  isLoading: boolean;
  toggleLike: (postId: Post['id']) => Promise<void>;
  getPosts: () => Promise<void>;
  addComment: (postId: Post['id'], body: string) => Promise<void>;
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

    addComment: async (postId, body) => {
      const { data } = await api.addComment(postId, body);

      set((prev) => ({
        posts: prev.posts.map((post) =>
          post.id === postId
            ? { ...post, comments: [data, ...post.comments] }
            : post,
        ),
      }));
    },
  })),
);
