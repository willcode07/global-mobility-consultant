#!/bin/bash

# GitHub Repository Setup Script
# Run this script after creating the repository on GitHub

cd "$(dirname "$0")"

echo "🚀 Setting up GitHub repository..."

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
fi

# Add all files
echo "📝 Adding files..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Global mobility consultant website"

# Set main branch
echo "🌿 Setting main branch..."
git branch -M main

echo ""
echo "✅ Local git repository is ready!"
echo ""
echo "Next steps:"
echo "1. Go to https://github.com/new"
echo "2. Create a new repository named 'global-mobility-consultant'"
echo "3. DO NOT initialize with README, .gitignore, or license"
echo "4. Copy the repository URL and run:"
echo ""
echo "   git remote add origin https://github.com/willcode07/global-mobility-consultant.git"
echo "   git push -u origin main"
echo ""
echo "Or if you have GitHub CLI installed, run:"
echo "   gh repo create global-mobility-consultant --public --source=. --remote=origin --push"

