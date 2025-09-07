# KSV LMS Student API

[![Node.js](https://img.shields.io/badge/node-%3E=18-green)](https://nodejs.org/)
[![Serverless](https://img.shields.io/badge/serverless-4.x-blue)](https://www.serverless.com/)

This project is the backend microservice API for the **Student Portal** of KSV LMS. It leverages the **Serverless Framework** to deploy services on AWS Lambda and supports **Lambda Layers** for dependency management.

---

## 🚀 Features

- Fully serverless API using AWS Lambda + API Gateway
- Local development with `serverless-offline`
- Layered dependency management
- Multi-stage deployments: `dev`, `qa`, `prod`
- Environment variable management with `.env` files

---

## 🛠️ Prerequisites

- Node.js >= 18
- npm >= 9
- AWS CLI configured (`aws configure`) or Serverless login (`npm run setup:auth`)
- `.env` file for local development (do not commit this file)

---

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd <your-repo>
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Initialize the project**

   ```bash
   npm run init
   ```

4. **Authenticate with Serverless**

   ```bash
   npm run setup:auth
   ```

---

## ⚡️ Running Locally

Make sure you have a `.env` file with required environment variables.

```bash
npm run deploy:local
```

This uses **Serverless Offline** to emulate AWS API Gateway + Lambda locally.

---

## 📤 Deployment

Deploy the service to different AWS stages:

- **Dev Stage**

  ```bash
  npm run deploy:dev
  ```

- **QA Stage**

  ```bash
  npm run deploy:qa
  ```

- **Production Stage**

  ```bash
  npm run deploy:prod
  ```

Deploy a **single Lambda function**:

```bash
npm run deploy:function:dev <function-name>
npm run deploy:function:qa <function-name>
npm run deploy:function:prod <function-name>
```

---

## 🧅 Managing Lambda Layers

Dependencies shared across functions should go into `layers/nodejs/node_modules`.

- **Install packages in layers**

  ```bash
  npm run add:package <package-name>
  ```

- **Remove packages from layers**

  ```bash
  npm run remove:package <package-name>
  ```

- **Reinstall layer dependencies**

  ```bash
  npm run install:layer
  ```

---

## 📝 NPM Scripts Overview

| Script                                                           | Description                                             |
| ---------------------------------------------------------------- | ------------------------------------------------------- |
| `npm run init`                                                   | Run initial setup and install Lambda layer dependencies |
| `npm run setup:auth`                                             | Login to Serverless and authenticate                    |
| **Whole Backend Deployment**                                     |
| `npm run deploy:local`                                           | Run the service locally using Serverless Offline        |
| `npm run deploy:dev`                                             | Deploy to AWS dev stage                                 |
| `npm run deploy:qa`                                              | Deploy to AWS QA stage                                  |
| `npm run deploy:prod`                                            | Deploy to AWS prod stage                                |
| **Seperate Function deployment and only one function at a time** |
| `npm run deploy:function:dev`                                    | Deploy a single function to dev                         |
| `npm run deploy:function:qa`                                     | Deploy a single function to QA                          |
| `npm run deploy:function:prod`                                   | Deploy a single function to prod                        |
| **Add Remove Packages in Layers**                                |
| `npm run add:package`                                            | Add package to Lambda layer                             |
| `npm run remove:package`                                         | Remove package from Lambda layer                        |
| **Some internal dependency of scripts**                          |
| `npm run setup`                                                  | Install dev dependencies for Serverless                 |
| `npm run install:layer`                                          | Install dependencies inside Lambda layer                |

---

## 📚 Notes

- Do not commit `.env` files. Use `.env.example` instead.
- Ensure AWS credentials are properly configured before deployment.
- Use Lambda layers to share dependencies between functions efficiently.

---

## 👉 Useful Links

- [Serverless Framework Documentation](https://www.serverless.com/framework/docs/)
- [Serverless Offline](https://www.npmjs.com/package/serverless-offline)
