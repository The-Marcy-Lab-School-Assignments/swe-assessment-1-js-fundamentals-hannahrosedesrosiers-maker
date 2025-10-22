/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  if (!petBreed || !petName) {
    console.log('Missing information. Please provide a valid pet.')
//check for any missing info first
  } else if (petBreed === "dog") {
    console.log('I love dogs! ${petName} is so cute!')
  } else if (petBreed === "cat") {
    console.log('I love cats! ${petName} is so cute!')
  } else if (petBreed === "turtle") {
    console.log("Who doesn't love a good turtle? ${petName} is the tops.")
  } else if (petBreed === "snake") {
    console.log('Not a fan, please take ${petName} and leave.')
  } else {
  //if anything else is put as petBreed 
    console.log('What an...interesting pet.')
  }
};

  



// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  if (firstNum >= secondNum) {
// If firstNum is bigger or the same, do nothing
    return
  }
  for (let i = firstNum; i < secondNum; i++) {
//count from firstNum up to secondNum(since it says the second arg is exclusive(just not included))
    console.log(i)
  }
};

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  if (str === '') {
//checks for empty string
    return;
    //print nothing
  }
  for (let i = 0; i < str.length; i++) {
// Loops through each character in string
// take the current character, Uppercase it, and add '!'
    console.log(str[i].toUpperCase() + '!')
  }

  // Your code here
};

// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  // Create a object to store counts of each
  const counts = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };
  for (let i = 0; i < str.length; i++) {
// Loop through each character in the string
    const char = str[i]
    if (char >= 'a' && char <= 'z') {
// if character is between a and z inclusive and lowercase
      counts.lowercase++
// increase(increment) lowercase count by 1
    }
    else if (char >= 'A' && char <= 'Z') {
    // if character is between A and Z inclusive and upperercase
      counts.uppercase++
// increase(increment) uppercase count by 1
    }
    else {
      counts.neither++
// If its not lowercase or uppercase its neither like a space or special charcter or number so add 1 to neither
    }
  }
  return counts;
  // Your code here
};

// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  if (gnomes.length === 0) {
    return []
// check for empty array first
  }
  const greedyGnomeNames = []
// Create an array to store the greedy gnome names

  for (let i = 0; i < gnomes.length; i++) {
// Loop through each gnome in the array
// Check if the gnome has more than 1 stolen decoration
// If they have more than 1, add(.push) their name to the greedgnomes array
    if (gnomes[i].stolenDecorations.length > 1) {
      greedyGnomeNames.push(gnomes[i].name);
   }
  }

  return greedyGnomeNames;

  // Your code here
};

// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
