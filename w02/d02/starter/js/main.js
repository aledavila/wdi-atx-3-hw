// Make sure to psuedocode out your adventure!!!
// One way to get input is to use the prompt() command
// You can have your adventure play out using alerts or in the console using console.log().

alert("The hunger games are starting! May the odds be ever in your favor");

var start = prompt("The hunger games have started do you: team up with katniss, be against katniss, or go at it alone?");
if (start === "team up with katniss") {
  var team = prompt("Do you have a skill?");
  if (team === "no") {
    alert("Katniss left you because you suck so now you're dead!");
  } else if (team === "yes") {
    var help = prompt("Great you can help Katniss! How many items were you able to get? (pick between 0 - 10)");
      if (help === 0) {
        alert("You failed and Katniss left you to die!")
      } else if (help >= 1 && help <= 3) {
        var good = prompt("That's good enough for now. Will you try to look for some shelter or people to kill?");
        if (good === "shelter") {
          alert("Good you are smart and skilled! Now that you've teamed up with Katniss you will survive the Hunger Games! Great job!!!");
        } else if (good === "people to kill") {
          alert("Great you went off on your own and were abushed and now you're dead!");
        }
      } else if (help >= 4) {
        var overachiever = prompt("Aren't you an overachiever. Start building a shelter?");
          if (overachiever === "no") {
            alert("Your lazy butt got you killed. You didn't survive!");
          } else if (overachiever === "yes") {
            alert("Good you are smart and skilled! Now that you've teamed up with Katniss you will survive the Hunger Games! Great job!!!");
          }
      }
  }
} else if (start === "alone") {
  var run = prompt("Do you go for the items first or go into the woods?");
    if (run === "items") {
      var nice = prompt("Are you a skilled fighter?");
        if (nice === "yes") {
          alert("Good job! You were able to successfully get items and prepare yourself for what's to come! You may survive this!");
        } else {
          alert("Well you died! What did you expect without having skills?");
        }
    } else {
      alert("You're alone with no weapons and no team and you've decided to go into the woods alone. You're eventually gonna die so good job!");
    }
} else if (start === "against katniss") {
    alert("You were betrayed by your people and they killed you. That's what you get for teaming up with bad people! You deserved it!");
}
