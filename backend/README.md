# Legal Track Backend Deployment Guide

## Overview
This guide provides instructions for deploying the Legal Track backend to various hosting platforms. The frontend is already hosted on Vercel at https://legaltrackhost-12ep.vercel.app/.

## Prerequisites
- Node.js and npm installed
- Git installed
- Accounts on deployment platforms (Vercel, Heroku, etc.)
- Pinata API keys for IPFS storage

## Environment Variables
Before deployment, you need to set up the following environment variables:

```
PORT=3001 (or as provided by the hosting platform)
NODE_ENV=production
PINATA_API_KEY=your_pinata_api_key_here
PINATA_SECRET_API_KEY=your_pinata_secret_api_key_here
```

## Deployment Options

### Option 1: Vercel Deployment (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy the Backend**:
   ```bash
   cd path/to/backend
   vercel
   ```

4. **Set Environment Variables**:
   - Go to the Vercel dashboard
   - Select your project
   - Navigate to Settings > Environment Variables
   - Add all required environment variables from .env.example

5. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Option 2: Heroku Deployment

1. **Install Heroku CLI**:
   ```bash
   npm install -g heroku
   ```

2. **Login to Heroku**:
   ```bash
   heroku login
   ```

3. **Create a Heroku App**:
   ```bash
   cd path/to/backend
   heroku create legal-track-backend
   ```

4. **Set Environment Variables**:
   ```bash
   heroku config:set PINATA_API_KEY=your_pinata_api_key_here
   heroku config:set PINATA_SECRET_API_KEY=your_pinata_secret_api_key_here
   heroku config:set NODE_ENV=production
   ```

5. **Deploy to Heroku**:
   ```bash
   git add .
   git commit -m "Ready for Heroku deployment"
   git push heroku main
   ```

### Option 3: Railway Deployment

1. Create an account on [Railway](https://railway.app/)
2. Connect your GitHub repository
3. Create a new project from the repository
4. Add environment variables in the Railway dashboard
5. Deploy the project

## After Deployment

1. **Update Frontend API URL**:
   - Once your backend is deployed, you'll need to update the API URL in your frontend code to point to the new backend URL.
   - Look for API calls in your frontend code and update the base URL.

2. **Test the Integration**:
   - Test file uploads and other API functionality to ensure everything works correctly.

## Troubleshooting

- **CORS Issues**: If you encounter CORS errors, verify that your backend CORS configuration includes your frontend domain.
- **Environment Variables**: Ensure all required environment variables are set correctly.
- **File Upload Issues**: Check that the hosting platform supports file uploads and has appropriate storage configuration.

## Support

If you encounter any issues during deployment, please refer to the documentation of the respective hosting platform or reach out to the development team for assistance.