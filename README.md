# Portfolio & Blog Website.

A modern, responsive portfolio and blog website built with Next.js 14, TypeScript, and Tailwind CSS. This website showcases my work, skills, and blog posts with a focus on performance, accessibility, and user experience.

## ✨ Features

- 🚀 **Next.js 14** - Built with the latest Next.js features including App Router and Server Components
- 🎨 **Modern UI/UX** - Beautiful and responsive design using Tailwind CSS and Radix UI
- 📝 **MDX Blog Posts** - Write blog posts using MDX (Markdown + JSX)
- 🌓 **Dark/Light Mode** - Seamless theme switching with next-themes
- 🎭 **Animations** - Smooth animations powered by Framer Motion
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Performance Optimized** - Fast page loads and optimal performance
- 🔍 **SEO Ready** - Built with SEO best practices
- 💅 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 📦 **Component Library** - Reusable components built with Radix UI primitives

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Content**: MDX
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory and add any required environment variables.

4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Blog Posts

Blog posts are written in MDX format and stored in the `posts` directory. To create a new blog post:

1. Create a new `.mdx` file in the `posts` directory
2. Add frontmatter with title, date, and description
3. Write your content using Markdown and JSX components

Example frontmatter:
```yaml
---
title: "My First Blog Post"
date: "2024-01-10"
description: "This is my first blog post using MDX"
---
```

## 🎨 Customization

- **Theme**: Modify `tailwind.config.ts` to customize colors, fonts, and other design tokens
- **Components**: Add or modify components in the `components` directory
- **Styles**: Update global styles in `app/globals.css`
- **Layout**: Modify the layout in `app/layout.tsx`

## 📦 Project Structure

- `app/` - Next.js app router pages and layouts
- `components/` - Reusable UI components
- `lib/` - Utility functions and configurations
- `posts/` - MDX blog posts
- `public/` - Static assets
- `utils/` - Helper functions

## 🚀 Deployment

The easiest way to deploy this website is using Vercel:

1. Push your code to a GitHub repository
2. Import your repository on Vercel
3. Add required environment variables
4. Deploy!

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
