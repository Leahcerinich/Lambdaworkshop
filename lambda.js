exports.handler = (event, context, callback) => {
    var min = 1;
    var max = 10;    
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    var message = 'Your dice throw resulted in: ' + randomNumber;
    callback(null, message);    
};
