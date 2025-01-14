#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { CdkWithS3EventNotificationsStack } from "../lib/s3-stack";

const app = new cdk.App();
new CdkWithS3EventNotificationsStack(app, "CdkWithS3EventNotificationsStack", {
	env: {
		account: process.env.CDK_DEFAULT_ACCOUNT,
		region: process.env.CDK_DEFAULT_REGION,
	},
});
