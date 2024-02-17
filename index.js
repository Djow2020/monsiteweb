const functions = require('firebase-functions');

exports.notification = functions.https.onRequest((req, res) => {
  if (req.method === 'POST') {
    console.log(req.body); // log the notification message
    res.status(200).send('Notification received!');
  } else {
    res.status(405).send('Method not allowed');
  }
});
