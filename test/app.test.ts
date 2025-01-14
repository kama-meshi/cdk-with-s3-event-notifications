import * as cdk from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import { CdkWithS3EventNotificationsStack } from "../lib/s3-stack";

test("Lambda Function Created", () => {
	const app = new cdk.App();
	// WHEN
	const stack = new CdkWithS3EventNotificationsStack(app, "MyTestStack");
	// THEN
	const template = Template.fromStack(stack);
	template.hasResourceProperties("AWS::Lambda::Function", {
		Handler: "index.handler",
		Runtime: "nodejs20.x",
		Timeout: 3,
	});
});

test("S3 Event Created", () => {
	const app = new cdk.App();
	// WHEN
	const stack = new CdkWithS3EventNotificationsStack(app, "MyTestStack");
	// THEN
	const template = Template.fromStack(stack);
	template.hasResourceProperties("Custom::S3BucketNotifications", {
		BucketName: "cdk-with-s3-event-notifications-example",
		NotificationConfiguration: {
			LambdaFunctionConfigurations: [
				Match.objectLike({
					Events: ["s3:ObjectCreated:*"],
					Filter: {
						Key: {
							FilterRules: [
								{ Name: "suffix", Value: ".png" },
								{ Name: "prefix", Value: "images/" },
							],
						},
					},
				}),
			],
		},
	});
});
