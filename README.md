# uni-function

This is a cloud function template. Write once and deploy to multiple platforms —— Cloudflare, Deno Deploy, EdgeOne, Netlify, Vercel and more.

## Deploy

### [Deno Deploy](https://dash.deno.com/)

1. Star and fork the repository.
2. Go to [Deno Deploy](https://dash.deno.com/).
3. Click on "New Project".
4. Select "GitHub" as the deployment source and select the forked repository.
5. Configure the project:
   - Framework Preset: `none`
   - Entrypoint: `api/deno-deploy.ts`
6. Click "Deploy Project" to deploy the project.

### [Deno Deploy<sup>EA</sup>](https://console.deno.com/)

1. Star and fork the repository.
2. Click on [![Deploy on Deno](https://deno.com/button)](https://console.deno.com/new?clone=https%3A%2F%2Fgithub.com%2Fmzl980425%2Funi-function).
3. Edit build config:
   - Framework Preset: `No Preset`
   - Entrypoint: `api/deno-deploy.ts`
4. Click "Create App" to deploy the project.
