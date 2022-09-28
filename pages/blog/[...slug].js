// Note: catch all: ...slug - catches everything after blog and made available
// in nextjs (slug property in this case)

import { useRouter } from 'next/router';

function BlogPostsPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1> The Blog Posts</h1>
    </div>
  );
}

export default BlogPostsPage;
