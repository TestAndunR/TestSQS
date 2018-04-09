let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL = require('@slappforge/slappforge-sdk');
// const rds = new SL.AWS.RDS(connectionManager);
const sqs = new SL.AWS.SQS(AWS);
exports.handler = function (event, context, callback) {
	message = event.message
	sqs.sendMessage({
		MessageBody: message,
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/318300609668/SQS',
		DelaySeconds: '0',
		MessageAttributes: {}
	}, function (data) {
		// your logic (logging etc) to handle successful message delivery, should be here
		console.log("Success");
	}, function (error) {
		// your logic (logging etc) to handle failures, should be here
		console.log("Error");
	});


	callback(null, 'Successfully executed');
}


