# uni-function

This is a cloud function template. Write once, deploy to multiple platforms — Cloudflare, Deno Deploy, EdgeOne, Netlify, Vercel and more.

## Features

- Single codebase for multiple cloud platforms
- Few configuration deployment
- TypeScript support

## Examples

- <https://uni-function.deno.dev/>
- <https://uni-function.edgeone.app/> (Access with non-Chinese mainland network.)
- <https://uni-function.netlify.app/>
- <https://uni-function.vercel.app/>

## Deploy

### [Cloudflare Workers](https://workers.cloudflare.com/)

1. Fork the repository.
2. Go to **[Cloudflare Dashboard](https://dash.cloudflare.com/)** -> Compute (Workers) -> Workers & Pages
3. Click on **"Create"** and import a repository
4. Select "GitHub" as the deployment source and select the forked repository.
5. Configure the project:
   - **Build command**: `npx deno task build:cloudflare`
   - **Deploy command**: `cd ./dist/cloudflare && npx wrangler deploy`
6. Click **"Create and deploy"** to deploy the project.

### [Deno Deploy](https://dash.deno.com/)

1. Fork the repository.
2. Go to **[Deno Deploy](https://dash.deno.com/)**.
3. Click on **"New Project"**.
4. Select "GitHub" as the deployment source and select the forked repository.
5. Configure the project:
   - **Framework Preset**: `none`
   - **Entrypoint**: `api/deno-deploy.ts`
6. Click **"Deploy Project"** to deploy the project.

### [Deno Deploy<sup>EA</sup>](https://console.deno.com/)

1. Fork the repository.
2. Go to **[Deno Deploy<sup>EA</sup>](https://console.deno.com/)**.
3. Click on **"New app"**.
4. Select "GitHub" as the deployment source and select the forked repository.
5. Click **Edit build config**:
   - **Framework Preset**: `No Preset`
   - **Entrypoint**: `api/deno-deploy.ts`
6. Click **"Create App"** to deploy the project.

### [EdgeOne](https://edgeone.ai/)

1. Fork the repository.
2. Go to **[EdgeOne Pages](https://console.tencentcloud.com/edgeone/pages)**.
3. Select "GitHub" as the deployment source and select the forked repository.
4. Configure the project:
   - **Build output directory**: `./edge-functions`
   - **Install command**: `npx deno task build:edgeone`
5. Click **"Start deployment"** to deploy the project.

### [Netlify](https://www.netlify.com/)

1. Fork the repository.
2. Go to **[Netlify](https://app.netlify.com/start)**.
3. Select "GitHub" as the deployment source and select the forked repository.
4. Configure the project:
   - **Functions directory**: `api`
5. Click **"Deploy"** to deploy the project.

### [Vercel](https://vercel.com/)

1. Fork the repository.
2. Go to **[Vercel](https://vercel.com/new)**.
3. Select "GitHub" as the deployment source and select the forked repository.
4. Configure the project:
   - **Framework Preset**: `Other`
   - **Output Directory**: `.`
5. Click **"Deploy"** to deploy the project.

### General NodeJS

1. Download the repository to your machine or VPS.
2. Navigate to the project directory.
3. Start the server: `npx deno task start`

## Develop

### Clone the repository

```bash
git clone https://github.com/mzl980425/uni-function.git
cd uni-function
```

### Start development server

```bash
deno task dev

# Or if you don't have the Deno environment, run:
npx deno task dev

# Then open in browser: http://localhost:8000/
```

## How It Works

uni-function uses a simple architecture:

1. A central handler function (`src/handler.ts`) processes all incoming requests
2. Platform-specific adapters in the `api/` directory connect this handler to different cloud platforms
3. Each adapter imports the common handler and exposes it in the format required by its platform
4. Build scripts in `deno.json` generate optimized deployments for each target platform

This approach allows you to write your function logic once in the handler, while the adapters take care of platform-specific requirements.

## License

MIT License
