#!/bin/bash

# Setup script for GitHub repository creation and initial push
# Run this script after creating a new repository on GitHub

echo "🚀 Setting up GitHub repository for Modern Web Project"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the project directory."
    exit 1
fi

# Initialize git repository
echo "📦 Initializing git repository..."
git init

# Add all files
echo "📁 Adding files to git..."
git add .

# Initial commit
echo "💾 Creating initial commit..."
git commit -m "🎉 Initial commit: Modern Next.js 14 project with TypeScript, Tailwind CSS, and best practices

✨ Features:
- Next.js 14 with App Router
- TypeScript with strict settings
- Tailwind CSS with custom design system
- Dark/Light mode support
- Framer Motion animations
- Radix UI components
- ESLint + Prettier + Husky
- Jest testing setup
- GitHub Actions CI/CD
- Vercel deployment ready

🛠️ Tech Stack:
- React 18
- TypeScript 5.5
- Tailwind CSS 3.4
- Framer Motion 11
- Radix UI primitives
- Jest + Testing Library"

# Set main branch
echo "🌿 Setting main branch..."
git branch -M main

# Prompt for GitHub repository URL
echo ""
echo "📋 Next steps:"
echo "1. Create a new repository on GitHub (https://github.com/new)"
echo "2. Copy the repository URL"
echo "3. Run the following commands:"
echo ""
echo "   git remote add origin <YOUR_GITHUB_REPO_URL>"
echo "   git push -u origin main"
echo ""
echo "🚀 After pushing to GitHub:"
echo "1. Go to https://vercel.com/new"
echo "2. Import your GitHub repository"
echo "3. Vercel will auto-detect Next.js and deploy!"
echo ""
echo "✅ Setup complete! Your project is ready for GitHub and Vercel."
