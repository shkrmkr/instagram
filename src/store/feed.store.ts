import create, { State } from 'zustand';
import { devtools } from 'zustand/middleware';
import { api } from '../api';
import { Post } from '../types';

interface FeedState extends State {
  feedPosts: Post[];
  currentPost: Post | null;
  isLoading: boolean;

  toggleLike: (postId: Post['id']) => Promise<void>;
  getPosts: () => Promise<void>;
  getCurrentPost: (postId: Post['id']) => Promise<void>;
  addComment: (postId: Post['id'], body: string) => Promise<void>;
}

export const usePostStore = create<FeedState>(
  devtools((set) => ({
    feedPosts: [],
    currentPost: null,
    isLoading: false,

    toggleLike: async (postId) => {
      const { data } = await api.toggleLike(postId);

      set((prev) => ({
        feedPosts: prev.feedPosts.map((post) =>
          post.id === data.id ? data : post,
        ),
        currentPost: prev.currentPost?.id === data.id ? data : prev.currentPost,
      }));
    },

    getPosts: async () => {
      set({ isLoading: true });
      const { data } = await api.feedPosts();
      set({ feedPosts: data, isLoading: false });
    },

    addComment: async (postId, body) => {
      const { data } = await api.addComment(postId, body);

      set((prev) => ({
        feedPosts: prev.feedPosts.map((post) =>
          post.id === postId
            ? { ...post, comments: [data, ...post.comments] }
            : post,
        ),
        currentPost:
          prev.currentPost?.id === postId
            ? {
                ...prev.currentPost,
                comments: [data, ...prev.currentPost.comments],
              }
            : prev.currentPost,
      }));
    },

    getCurrentPost: async (postId) => {
      const { data } = await api.getPostById(postId);
      set({ currentPost: data });
    },
  })),
);
