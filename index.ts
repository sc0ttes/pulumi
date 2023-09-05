import * as aws from "@pulumi/aws";
import * as awsn from "@pulumi/aws-native";

// Create SQS queue
const newObjectQueue = new awsn.sqs.Queue("new-object-queue");

// SQS subscribe to SNS
new aws.sns.TopicSubscription("new-object-queue-subscription", {
    topic: "arn:aws:sns:us-east-1:047229882575:ingest",
    protocol: "sqs",
    endpoint: newObjectQueue.arn,
    rawMessageDelivery: true,
});

