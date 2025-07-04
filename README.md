# Next.js Cloudflare Workers Deployment

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and configured for deployment on [Cloudflare Workers](https://workers.cloudflare.com/) using [OpenNext](https://opennext.js.org/).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deployment

This project is configured for automatic deployment to Cloudflare Workers using GitHub Actions:

### Prerequisites

Before the deployment workflow can run, you need to set up the following secrets in your GitHub repository:

1. **CLOUDFLARE_API_TOKEN**: Your Cloudflare API token
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
   - Create a new token with the following permissions:
     - `Zone:Zone:Read` (for all zones)
     - `Zone:Zone Settings:Edit` (for all zones)
     - `Account:Cloudflare Workers:Edit` (for your account)
     - `Account:Account Settings:Read` (for your account)

2. **CLOUDFLARE_ACCOUNT_ID**: Your Cloudflare Account ID
   - Found in the right sidebar of any Cloudflare dashboard page

### How it works

- **Pull Requests**: When you open a PR targeting `main`, a preview deployment is created and the preview URL is commented on the PR
- **Main Branch**: When code is pushed to `main`, a production deployment is created

### Manual Deployment

You can also deploy manually using the following commands:

```bash
# Preview deployment
npm run preview

# Production deployment
npm run deploy

# Upload a new version without deploying
npm run upload
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [OpenNext Documentation](https://opennext.js.org/) - learn about deploying Next.js to various platforms.
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/) - learn about Cloudflare Workers platform.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
