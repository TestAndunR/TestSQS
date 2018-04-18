let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
const sqs = new SL_AWS.SQS(AWS);
exports.handler = function (event, context, callback) {
	sqs.receiveMessage({
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/318300609668/ToolBoxSQS',
		AttributeNames: ['All'],
		MaxNumberOfMessages: '1',
		VisibilityTimeout: '30',
		WaitTimeSeconds: '0',
		MessageAttributeNames: ['']
	}, function (receivedMessages) {
		receivedMessages.forEach(message => {
			console.log(message);
		})
	}, function (error) {
		// implement error handling logic here
		console.log("Error caused");
	});


	callback(null, 'Successfully executed');
}