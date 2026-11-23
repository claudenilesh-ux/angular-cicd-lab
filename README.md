# Angular CI/CD Lab

A one-page Angular app for practicing CI (automatic build) and CD (automatic deployment) with GitHub Actions and GitHub Pages.

## What you need

- Node.js 24.15 or newer (Node 24 LTS recommended)
- Git
- A GitHub account

This project is intended for a **public** GitHub repository called `angular-cicd-lab`. No AWS account or server is needed.

## 1. Start on your computer

Open a terminal in this folder and run:

```bash
node -v
npm install
npm start
```

Open http://localhost:4200. Try clicking the four step cards.

The first `npm install` generates `package-lock.json`. **Commit that file** for repeatable builds.

## 2. Upload your code to the NEW GitHub account

Sign in to the new GitHub account. Create a **public** empty repository named `angular-cicd-lab`.
Do not initialize the remote repository with a README, license, or .gitignore (this starter already has a README and .gitignore).

In the project terminal:

```bash
git init
git branch -M main
git add .
git commit -m "Initial Angular CI/CD lab"
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/angular-cicd-lab.git
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub **username**, not your email address.
GitHub will ask you to authenticate if you are not already signed in.

## 3. Enable GitHub Pages

In the repository, open **Settings > Pages > Build and deployment > Source**, then choose **GitHub Actions**.

Your workflow is already present in `.github/workflows/deploy.yml`.
If the workflow ran before you enabled Pages and the deploy failed, open **Actions**, select the failed run, and rerun it (or push a new commit).

## 4. Watch CI/CD

Open the repository **Actions** tab. A workflow with two jobs should appear:

1. **CI - Check and build Angular** (install, type check, build)
2. **CD - Publish website** (publish to GitHub Pages after CI succeeds)

When both jobs show green checks, your website should be at:

`https://YOUR_GITHUB_USERNAME.github.io/angular-cicd-lab/`

Publishing may take a short while to become visible.

## 5. Practice automatic redeployment

Open `src/app/app.html` and change the heading `Build it.` to `Code it.`. Save the file, then run:

```bash
git add .
git commit -m "Update homepage heading"
git push
```

Watch **Actions** again. GitHub should automatically build and deploy the updated page.

## Common issues

- **`node -v` is too old:** Install Node.js 24.15+ and reopen your terminal.
- **Workflow does not run:** Check that the branch name is exactly `main` and `.github/workflows/deploy.yml` was committed.
- **Deploy gives 404:** Check **Settings > Pages** is using **GitHub Actions**, the deploy job succeeded, and the URL uses the correct username and repository name.
- **Blank page or missing styles:** Make sure the repository is named `angular-cicd-lab` and the build's `--base-href` matches the GitHub Pages path. The workflow uses the actual repository name automatically.
- **`git push` rejects authentication:** Sign in through your Git credential manager or GitHub CLI (`gh auth login`). Do not use your account password directly as a Git token.

## Notes

- The pipeline deploys **static frontend files only**. There is no Angular backend or database.
- The checklist in the app is interactive but not saved between reloads.
- GitHub Pages is public. Do not add passwords, API secrets, or private information to this project.
- For a larger project, keep `package-lock.json` committed so GitHub Actions can use `npm ci` reliably (the workflow already prefers it when present).
