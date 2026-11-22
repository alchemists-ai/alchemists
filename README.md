<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1F2XopsGdXC1bps3vdLuootKTAq9RYV3h

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Legal pages

`public/privacy/index.html` is a static page (no React), so `www.alchemists.ltd/privacy/` is a real URL.
It carries the company-wide Privacy Policy of Alchemists.AI Private Limited, the same text as
easydocument.ai/privacy. The Word master is `legal/easydocument/EasyDocument-Privacy-Policy.docx` in the
DocInflow workspace; when it changes, regenerate this page so both sites stay identical.

## Deploying

GitHub Pages serves the `gh-pages` branch. The workflow file in this repo is named
`.github:workflows:deploy.yml`, so GitHub never runs it. To deploy: `npm install`, `npm run build`, then
publish the contents of `dist/` (which includes `CNAME`) to the `gh-pages` branch.
