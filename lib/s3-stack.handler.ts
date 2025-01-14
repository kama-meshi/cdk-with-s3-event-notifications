import { Logger } from "@aws-lambda-powertools/logger";
import type { Handler } from "aws-lambda";

const logger = new Logger({ serviceName: "cdk-with-s3-event-notifications" });

export const handler: Handler = async (
	event,
	_context,
): Promise<{ statusCode: number; body: string }> => {
	logger.info("Event: %j", event);
	return {
		statusCode: 200,
		body: JSON.stringify("Hello from Lambda!"),
	};
};
