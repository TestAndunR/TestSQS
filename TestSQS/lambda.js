let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL = require('@slappforge/slappforge-sdk');
const rds = new SL.AWS.RDS(connectionManager);
const sqs = new SL.AWS.SQS(AWS);
exports.handler = function (event, context, callback) {


	// You must always end/destroy the DB connection after it's used
	rds.beginTransaction({
		instanceIdentifier: 'RDSSQS'
	}, function (error, connection) {
		if (error) { throw err; }
	});
	sqs.sendMessage({
		MessageBody: 'Test message',
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/318300609668/SQS',
		DelaySeconds: '0',
		MessageAttributes: {
			"sample": {
				"DataType": "String",
				"StringValue": "Test"
			}
		}
	}, function (data) {
		// your logic (logging etc) to handle successful message delivery, should be here
		console.log("sucess",data);
	}, function (error) {
		// your logic (logging etc) to handle failures, should be here
		console.log("Error",data);
	});

	callback(null, 'Successfully executed');
}


