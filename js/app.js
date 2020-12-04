// replace these values with those generated in your TokBox Account
var apiKey = "47015734";
var sessionId = "2_MX40NzAxNTczNH5-MTYwNjk5MjI2NzU2OX5OaHhOeU82emJMY3dqNFRpOUE0UDlnK3J-fg";
var token = "T1==cGFydG5lcl9pZD00NzAxNTczNCZzaWc9YWEyMDU2OTNkYWZmZjk3YjExMDkzNzU3NTE1Y2FlNTBlNzVkYzkyMjpzZXNzaW9uX2lkPTJfTVg0ME56QXhOVGN6Tkg1LU1UWXdOams1TWpJMk56VTJPWDVPYUhoT2VVODJlbUpNWTNkcU5GUnBPVUUwVURsbkszSi1mZyZjcmVhdGVfdGltZT0xNjA2OTkyMzA2Jm5vbmNlPTAuNTAyMTI3NzUwNDk5NjE3MSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjA5NTg0MzA1JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";
// (optional) add server code here
initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream

	session.on('streamCreated', function(event) {
	  session.subscribe(event.stream, 'subscriber', {
	    insertMode: 'append',
	    width: '100%',
	    height: '100%'
	  }, handleError);
	});

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}