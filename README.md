
# News Link Summarizer

![image](https://github.com/aakashsahu1511/news-url/assets/54810209/bb9aca4c-32dc-4dec-a6bc-88ff5853eca5)


## About the Project
NewsLinkSummarizer summarizes news articles from links and categorizes them. It also maintains a history of analyzed links for easy reference.

### Prerequisites

Here is what you need to be able to run this project.

- Node.js (Version: >=18.x)
- MongoDB
- npm _(recommended)_
## Built With

- Next.js
- Tailwind CSS
- MongoDB
- OpenAi API


## Development

### Setup

1. Clone the repo into a public GitHub repository 

   ```sh
   git clone https://github.com/aakashsahu1511/news-url.git
   ```

   > If you are on windows, run the following command on `gitbash` with admin privileges: <br> > `git clone -c core.symlinks=true  https://github.com/aakashsahu1511/news-url.git` <br>

1. Go to the project folder

   ```sh
   cd news-url
   ```

1. Install packages with yarn

   ```sh
   npm install
   ```

1. Set up your `.env` file
   - Duplicate `.env.example` to `.env`
   - Paste MongoDB url and OpenAI api key

#### Quick start

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


