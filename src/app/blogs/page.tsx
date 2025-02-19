import { NextBlogListPage } from '@weekend-studio/easyblog-next/app';
import { div } from 'motion/react-client';

const config = {
  apiKey: process.env.EASYBLOG_API_KEY!,
  projectId: process.env.EASYBLOG_PROJECT_ID!,
  apiUrl: process.env.EASYBLOG_API_URL!
};

const easyblogOptions = { // Customize based on your need
  showThumbnail: true,
  showReadingTime: true,
  showExcerpt: true,
  showTags: true,
  showDate: true,
  showAuthor: true,
  showCategory: true,
}

export default async function BlogPage({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await searchParams;
  
  return (
    <div className="mt-20 max-w-7xl mx-auto px-4">
      <NextBlogListPage 
        config={config}
        type="grid"
        darkMode={false}
        searchParams={resolvedParams}
        displayOptions={easyblogOptions}
      />
    </div>
  );
}
