var friendsArray = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
      });

      app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        console.log(newFriend);

        var difference = 0;
        var matchName = "";
        var matchPhoto = "";

         // For-each loop to go through the data in friends.js to find a match
         friendsArray.forEach(function(friend) {
          // Variables for comparing matches
          var matchedScoresArray = [];
          var totalDifference = 0;

          // Function to assist in the addition reduce() below
          function add(total, num) {
              return total + num;
          }

          // This loops through each item of the scores arrays
          // from both the stored data and the new user, 
          // and then substracts, absolutes, and then pushes the 
          // new value to the matchedScoresArray
          for (var i = 0; i < friend.scores.length; i++) {
              matchedScoresArray.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friend.scores[i])));
             

          }

          // This reduces the matchScoresArray into a single value in a variable
          totalDifference = matchedScoresArray.reduce(add, 0);

          // If the above value is smaller than the previous difference...
          if (totalDifference < difference) {
              // Set it as the previous difference...
              difference = totalDifference;
              // And set these variables to the appropriate friend match
              matchName = friend.name;
              matchPhoto = friend.photo;
          }
      });
         // Once the cycle is complete, the match with the least difference will remain,
        // and that data will be sent as a json object back to the client
        res.json({
          name: matchName,
          photo: matchPhoto
      });

      // This adds the new users sent data object to friends.js
      friendsArray.push(req.body);
      })
    } 