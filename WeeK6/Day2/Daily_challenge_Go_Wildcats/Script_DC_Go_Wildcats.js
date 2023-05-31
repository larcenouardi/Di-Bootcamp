const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
       items:["ball","eraser","pen"]
    },
    {
        username:"tyson",
        team:"green",
        score :1,
        items:["book","pen"]  
    }
   ];
   // Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
   const usernames = [];
   gameInfo.forEach(player => {
     const nameWithExclamation = player.username + '!';
     usernames.push(nameWithExclamation);
   });
   console.log(usernames); // Output : [ 'john!', 'becky!', 'susy!', 'tyson!' ]
   // Create an array using forEach that contains the usernames of all players with a score bigger than 5.
   const winners = [];
   gameInfo.forEach(player => {
    if (player.score > 5) {
       winners.push(player.username)
    }
   })
   console.log(winners); // Output : [ 'becky', 'susy' ]
   // Find and display the total score of the users.
   let totalScore =0;
   gameInfo.forEach((player)=>{
   totalScore+= player.score;
   })
   console.log(totalScore); // Output :71