import { 
  getBlogPaths, 
  NextBlogPage,
  getBlogPost
} from '@weekend-studio/easyblog-next/app';
import { getSEOTags, GetSEOTagsParams } from '@weekend-studio/easyblog-next/seo';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

const config = {
  apiKey: process.env.EASYBLOG_API_KEY!,
  projectId: process.env.EASYBLOG_PROJECT_ID!,
  apiUrl: process.env.EASYBLOG_API_URL!
};

// Add basic SEO properties
const baseSEO = {
  applicationName: "EasyBlog",
  description: "EasyBlog is a lightweight blog CMS that allows you to create and manage your blog posts.",
  domainName: "easyblog.io",
  x_handle: "@realchuyao",
}

export const generateStaticParams = async () => {
  const paths = await getBlogPaths(config);
  return paths;
};

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const post = await getBlogPost(config, slug);
  
  return getSEOTags({
    ...baseSEO,
    title: post.title,
    description: post.excerpt,
    canonicalUrlRelative: `/blogs/${slug}`,
    keywords: ["blog", "article", post.title],
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  } as GetSEOTagsParams);
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  return (
    <div className="mt-20 max-w-7xl mx-auto px-4">
      <NextBlogPage config={config} slug={slug} darkMode={false} />
    </div>
  );
}

export const revalidate = 3600; // revalidate every 1 hour
