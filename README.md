# S3 Event CDK TypeScript Project

This is a sample project for creating S3 events using AWS Cloud Development Kit (CDK) with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Overview
This project demonstrates how to use AWS CDK to create and manage S3 events. It includes setting up an S3 bucket and configuring event notifications.

## How to Verify
To verify the functionality of this project, follow these steps:
1. Set up the project:
   ```sh
   npm install
   ```
2. Compile TypeScript files:
   ```sh
   npm run build
   ```
3. Deploy the stack:
   ```sh
   npx cdk deploy
   ```
4. Check the AWS Management Console to see the created S3 bucket and configured event notifications.

## Useful Commands
- `npm run build`: Compile TypeScript files to JavaScript.
- `npm run watch`: Watch for changes and compile automatically.
- `npm run test`: Run unit tests using Jest.
- `npx cdk deploy`: Deploy the stack to your default AWS account/region.
- `npx cdk diff`: Compare the deployed stack with the current state.
- `npx cdk synth`: Emit the synthesized CloudFormation template.

## Notes
- You need an AWS account and appropriate permissions.
- Run `cdk bootstrap` before deploying to provision the necessary resources for CDK.

## Dependencies
- AWS CDK
- TypeScript
- Jest
