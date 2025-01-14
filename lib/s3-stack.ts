import * as cdk from "aws-cdk-lib";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import * as lambda from "aws-cdk-lib/aws-lambda-nodejs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3n from "aws-cdk-lib/aws-s3-notifications";
import type { Construct } from "constructs";

export class CdkWithS3EventNotificationsStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);
		const existingBucket = s3.Bucket.fromBucketName(
			this,
			"ExistingBucket",
			"cdk-with-s3-event-notifications-example",
		);
		const fn = new lambda.NodejsFunction(this, "handler", {
			runtime: Runtime.NODEJS_20_X,
			timeout: cdk.Duration.seconds(3),
			bundling: {
				forceDockerBundling: false,
			},
		});

		existingBucket.grantRead(fn);
		existingBucket.addEventNotification(
			s3.EventType.OBJECT_CREATED,
			new s3n.LambdaDestination(fn),
			{ prefix: "images/", suffix: ".png" },
		);
	}
}
