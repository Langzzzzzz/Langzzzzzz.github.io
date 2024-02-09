### Portfolio

To visit the page, click [here](Langzzzzzz.github.io)

This is just a simple portfolio page, and the theme is based on [walkccc](https://github.com/walkccc)

### To run this project locally.
1. `npm install`
2. `npm run build`
3. `npm run start`

### To host the page via github page.
You will need `gh-pages` package since github.io only support static web pages.
Also, you will need add the following script into `package.json`
```
"scripts": {
    ...
    "deploy": "gh-pages -d dist"
  }
```

To deploy the page, you will need to write `deploy.yml` file, and place in `.github/workflows/deploy.yml`
```
name: Build and Deploy
on:
  push:
    branches:
      - main  # Or your default branch
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Dependencies
        run: npm install
      - name: Build
        run: npm run build  # Or your build command
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          branch: gh-pages  # The branch the action should deploy to.
          folder: dist      # The folder the action should deploy.
```
