# GitHub Pages Deployment Guide

## Quick Setup (3 steps)

### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Create a repository named: `portfolio` or `shaikh-sarim.github.io`
3. Choose "Public" (required for free GitHub Pages)

### Step 2: Initialize Git & Push Code
Open Command Prompt/PowerShell in your portfolio folder and run:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/shaikh-sarim/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Select **main** branch and **/ (root)** folder
5. Click **Save**

Your portfolio will be live at: `https://shaikh-sarim.github.io/portfolio`

---

## Automatic Deployment with GitHub Actions

The `.github/workflows/deploy.yml` file is already configured to automatically deploy whenever you push to the main branch.

### To make updates:

```bash
# Make your changes to HTML/CSS/JS files

# Stage changes
git add .

# Commit with a message
git commit -m "Update portfolio content"

# Push to GitHub
git push
```

GitHub Actions will automatically deploy your changes within seconds! ✨

---

## Custom Domain (Optional)

To use your own domain (like `viktoralvarez.com`):

1. Update the `CNAME` file in the workflow if needed
2. Configure DNS records at your domain registrar:
   - Add a CNAME record pointing to: `shaikh-sarim.github.io`
3. Add the domain in GitHub Pages settings

---

## Repository Structure

```
.
├── index.html              # Main page
├── styles.css              # Styling
├── script.js               # JavaScript functionality
├── viktor.jpg              # Profile picture
├── README.md               # This file
├── .gitignore              # Git ignore rules
└── .github/
    └── workflows/
        └── deploy.yml      # Automatic deployment config
```

---

## Useful Git Commands

```bash
# Check status
git status

# View commit history
git log

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Pull latest changes
git pull origin main

# Create a new branch
git branch feature/new-section
git checkout feature/new-section
```

---

## Troubleshooting

**Page not showing?**
- Ensure repository is Public
- Wait 1-2 minutes for GitHub Pages to build
- Check "Actions" tab to see deployment status

**Old version showing?**
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache

**Need help with Git?**
- [GitHub Docs](https://docs.github.com)
- [Git Tutorial](https://git-scm.com/book/en/v2)

---

## Tips for Better Collaboration

1. **Branch naming**: Use `feature/`, `fix/`, `update/` prefixes
2. **Commit messages**: Write clear, descriptive messages
3. **Pull requests**: Use for code review before merging
4. **Protect main branch**: Require reviews before merge (in Settings)

---

Good luck with your portfolio! 🚀
