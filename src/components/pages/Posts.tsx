import React, { useEffect, useState, useCallback } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page + 1}&_limit=10`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts, ...data]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchPosts();
  }, [page, fetchPosts]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 50
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          className="p-4 mb-2 border rounded shadow-sm transition hover:shadow-md"
        >
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p className="text-gray-600">{post.body}</p>
        </div>
      ))}
      {isLoading && <div className="text-center py-4">Loading...</div>}
      {error && <div className="text-center text-red-500 py-4">{error}</div>}
    </div>
  );
};

export default Posts;
