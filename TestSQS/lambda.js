let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL = require('@slappforge/slappforge-sdk');
// const rds = new SL.AWS.RDS(connectionManager);
const sqs = new SL.AWS.SQS(AWS);
exports.handler = function (event, context, callback) {

	message = event.message
	sqs.receiveMessage({
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/318300609668/SQS',
		AttributeNames: ['All'],
		MaxNumberOfMessages: '5',
		VisibilityTimeout: '30',
		WaitTimeSeconds: '0',
		MessageAttributeNames: ['']
	}, function (receivedMessages) {
		receivedMessages.forEach(message => {
			// your logic to access each message through out the loop. Each message is available under variable message 
			// within this block
		})
	}, function (error) {
		// implement error handling logic here
	});



	callback(null, 'Successfully executed');
}


