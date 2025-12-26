# GitHub Repository Setup Guide

Follow these steps to create and push this project to GitHub:

## Step 1: Initialize Git Repository

```bash
cd /Users/willfly07/Dev/global-mobility-consultant
git init
```

## Step 2: Add All Files

```bash
git add .
```

## Step 3: Create Initial Commit

```bash
git commit -m "Initial commit: Global mobility consultant website"
```

## Step 4: Create Repository on GitHub

You have two options:

### Option A: Using GitHub CLI (if installed)

```bash
gh repo create global-mobility-consultant --public --source=. --remote=origin --push
```

### Option B: Manual Setup

1. Go to https://github.com/new
2. Repository name: `global-mobility-consultant`
3. Choose Public or Private
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

Then run:

```bash
git remote add origin https://github.com/willcode07/global-mobility-consultant.git
git branch -M main
git push -u origin main
```

## Step 5: Verify

Visit your repository at: `https://github.com/willcode07/global-mobility-consultant`

## Quick Setup Script

If you prefer, you can run this all at once (after creating the repo on GitHub):

```bash
cd /Users/willfly07/Dev/global-mobility-consultant
git init
git add .
git commit -m "Initial commit: Global mobility consultant website"
git branch -M main
git remote add origin https://github.com/willcode07/global-mobility-consultant.git
git push -u origin main
```

