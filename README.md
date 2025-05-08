https://rafagomezglez.github.io/PTECH-Portfolio/

### Steps to Get This Project On the internet

1. **Install Node.js**  
    Download and install Node.js from [https://nodejs.org/](https://nodejs.org/).

2. **Install Visual Studio Code (VSCode)**  
    Download and install VSCode from [https://code.visualstudio.com/](https://code.visualstudio.com/).

3. **Install React**  
    Run the following command to create a React app:  
    ```bash
    npx create-react-app <NAME_OF_YOUR_PROJECT>
    ```

4. **Install gh-pages**  
    Install the `gh-pages` package as a development dependency:  
    ```bash
    npm install gh-pages --save-dev
    ```

5. **Create a GitHub Account**  
    Sign up for a GitHub account at [https://github.com/](https://github.com/).

6. **Create a GitHub Repository**  
    Create a new repository on GitHub to host your project.

7. **Modify `package.json`**  
    Add the following fields to your `package.json` file:  
    ```json
    "homepage": "https://<your-github-username>.github.io/<repository-name>/",
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```

8. **Run `npm run deploy`**  
    Deploy your project to GitHub Pages by running:  
    ```bash
    npm run deploy
    ```
