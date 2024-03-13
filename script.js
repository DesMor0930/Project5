// Import Statement for Prompt-Sync Library 
const prompt = require('prompt-sync')({
    sigint: true
  });
  
  // Write Your Code Below
  console.log(`
  ⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⣿⣿⣿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠙⢿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠈⠻⠿⠿⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠈⠛⠿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⢿⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⣿⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⢶⡖⢲⡶⢦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⢠⡞⠉⠀⣸⠁⠀⣿⠀⠈⢳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢿⣷⣄⡀⠀⠀⠀⢀⡟⠀⠀⠀⡿⠀⠀⢸⡀⠀⠀⢻⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠻⢿⣦⣄⣀⣸⠁⠀⢀⣠⡧⠀⠀⢸⣇⣀⡀⢸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⡀⠈⢻⣍⠁⠀⠀⠀⢉⣽⠋⢸⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣽⡇⣀⣀⣟⡷⣄⣀⣴⣟⣡⣴⣿⣻⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣷⠘⠻⣿⡿⠿⠻⢿⣿⣿⣹⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣆⠀⠈⠀⣀⢀⡈⠀⢀⣾⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠏⠀⠙⢷⣄⠀⠉⠉⢁⣠⣾⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⡿⢷⣤⡀⠀⠀⠀⠀⠀⠀⢀⣴⠋⠁⠀⠀⠀⠀⠛⢿⡶⡶⢿⣿⣿⣿⣿⡏⠉⢹⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣷⣆⢿⢻⣦⠀⠀⠀⠀⠀⣾⠁⠀⠀⠀⠀⠀⢀⣠⡴⠛⢠⣾⣿⣿⣿⢻⣧⣴⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣯⡆⠈⠻⣷⣄⠀⠀⠀⣿⠀⢠⡄⠀⢀⣴⠟⠁⠀⣠⣿⣿⣿⣿⣿⡟⠀⠉⠉⠙⠿⣿⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣰⣿⣷⣠⠀⠀⢸⠈⢻⣷⣄⠀⣿⣴⠟⠀⢀⡿⠁⠀⣠⣾⣿⣿⣳⣿⣿⡿⠀⠀⢀⡀⠀⠀⠈⠛⢿⣷⣶⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⣛⣷⣦⡄⢶⣾⣿⣿⣿⠏⠉⠀⠀⢸⣅⣤⠾⠋⣠⣿⣽⣿⣿⣿⣀⣤⣾⡟⠛⠳⢦⣤⣀⠀⠹⣿⣿⣿⣿⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⡶⠿⢿⣿⣿⣿⣿⣶⣼⣿⣿⡟⠀⠀⠀⠀⣿⣽⠆⢀⣴⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⢾⣿⣇⠀⠀⠙⠿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠈⣿⡅⠀⠘⣻⢁⣈⣥⡿⠿⠿⠿⣿⡇⠀⠀⠀⢠⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⡇⠀⠰⣿⣿⣿⣦⠀⠀⠀⠈⠛⢿⣿⣿⣿⣷⣤⡀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⣿⡷⠀⣰⣿⡿⠟⠁⠀⠀⣠⣾⣿⠃⠀⠀⣣⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⢟⣿⣿⣿⡟⣿⡇⠀⠀⠘⣿⣿⣿⣧⠀⠀⠀⠀⠀⠉⠻⢿⣿⣿⣿⣶⣄⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⣸⣿⣷⡾⠿⠋⠀⠀⢀⣠⣾⣿⣾⢏⠀⠀⠰⣿⡅⢀⣩⣿⠟⢛⣿⣿⣿⣿⣿⣿⣿⠟⠀⣿⣿⡆⠀⠀⠹⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠻⢿⣿⣿⣷⡄
  ⠀⠀⠀⠀⠀⠀⠀⡿⠛⠉⠀⠀⢀⣤⣶⣟⣋⠉⠀⡿⢸⡄⠀⠀⣿⣿⠛⠉⢀⣠⣿⣿⣿⣿⣿⣿⣿⣅⠀⠀⣿⢻⡇⠀⠀⠀⢿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠁
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⠿⢿⣿⣿⣸⡇⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠉⠀⠀⣿⣸⣿⠀⢰⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣾⠿⠉⠀⠘⢻⣿⢻⣿⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⣷⣄⠀⣿⣿⣷⣼⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⡟⠀⠀⠀⢀⣿⡟⢸⡿⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠉⠉⠁⠀⠀⢙⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⣸⣿⠶⣾⡇⣼⠟⠁⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣇⣤⠰⣾⣿⣯⡴⢃⣷⠿⣧⠀⢿⣿⣿⣿⣿⣿⣿⡟⠀⢀⣀⠀⠀⢹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣙⣿⡿⠾⣿⠇⠉⣶⡞⠁⠀⠘⢧⡀⠙⢿⣿⣿⣿⡿⠀⠀⠀⠈⠙⠀⢸⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣡⣾⡿⢀⣠⠞⢻⣤⠉⢡⣤⡹⣦⡈⠈⠻⠟⠙⠛⠓⠦⠤⠄⠀⣸⣿⠛⣛⡛⠻⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠿⣿⡏⣠⣿⡏⣠⠏⠉⢷⡈⣟⠛⠾⠿⠇⠀⠀⠀⠀⠀⠀⠐⠷⠶⠟⠛⠛⠛⠛⠻⠟⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡛⠛⢻⡿⡾⠋⠀⠀⠈⠷⣿⡤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  `);
  //INSTRUCTIONS
  console.log("+===============================================================================+");
  console.log("|                  WELCOME TO THE AVATAR THE LAST AIRBENDER QUIZ!               |");
  console.log("|===============================================================================|")
  console.log("|                            INSTRUCTIONs TO PLAY                               |");
  console.log("|===============================================================================|")
  console.log("|  You will be asked 10 multiple-choice questions.                              |");
  console.log("|                                                                               |")
  console.log("|  Please enter the number of your answer (1, 2, 3, or 4).                      |");
  console.log("|                                                                               |")
  console.log("|  After each question, you will get feedback on if your answer                 |");
  console.log("|  was correct or incorrect.                                                    |");
  console.log("|                                                                               |")
  console.log("|  At the end of the quiz, you will see your final score out of 10.             |");
  console.log("|                                                                               |")
  console.log("+===============================================================================+")
  console.log("\n");
  console.log("💨 💧 🔥 ⛰️️  Are you a master of all four elements? 💨 💧 🔥 ⛰️");
  console.log("\n");
  console.log("         Find out below. Have fun and good luck!           ");
  console.log("\n");
  
  //VARIABLES
  let quizQuestion;
  let choice1;
  let choice2;
  let choice3;
  let choice4;
  let quizAnswer;
  let score = 0;
  let playAgain = true;
  
  //WHILE LOOP
  while(playAgain === true) {
    //FOR LOOP 
    for(let i = 1; i <= 10; i++) {
      if(i === 1) {
        quizQuestion = "Which is the order of the Avatar cycle?";
        choice1 = "Fire, earth, air, water";
        choice2 = "Earth, water, fire, air";
        choice3 = "Water, earth, air, fire";
        choice4 = "Air, water, earth, fire";
        quizAnswer = 4;
      } else if(i === 2) {
        quizQuestion = "Who was the Avatar before Aang?";
        choice1 = "Kyoshi";
        choice2 = "Roku";
        choice3 = "Kuruk";
        choice4 = "Yangchen";
        quizAnswer = 2;
      } else if(i === 3) {
        quizQuestion = "Which of the following characters is not a bender?";
        choice1 = "Admiral Zhao";
        choice2 = "Ty Lee";
        choice3 = "Iroh";
        choice4 = "Long Feng";
        quizAnswer = 2;
      } else if(i === 4) {
        quizQuestion = "Which alias does Toph go by in the underground earthbending tournament??";
        choice1 = "The Boulder";
        choice2 = "The Runaway";
        choice3 = "The Scarecrow";
        choice4 = "The Blind Bandit";
        quizAnswer = 4;
      } else if(i === 5) {
        quizQuestion = "Which spirit is known as The Face Stealer?";
        choice1 = "The Mother of Faces";
        choice2 = "Vaatu";
        choice3 = "Koh";
        choice4 = "Wan Shi Tong";
        quizAnswer = 3;
      } else if(i === 6) {
        quizQuestion = "Who is the leader of the Kyoshi Warriors??";
        choice1 = "Suki";
        choice2 = "Sokka";
        choice3 = "Mai";
        choice4 = "Jet";
        quizAnswer = 1;
      } else if(i === 7) {
        quizQuestion = "Which air temple is Aang from?";
        choice1 = "The Eastern Air Temple";
        choice2 = "The Southern Air Temple";
        choice3 = "The Western Air Temple";
        choice4 = "The Northern Air Temple";
        quizAnswer = 2;
      } else if(i === 8) {
        quizQuestion = "Who is not a member of the Order of the White Lotus?";
        choice1 = "Iroh";
        choice2 = "Bumi";
        choice3 = "Long Feng";
        choice4 = "Jeong Jeong";
        quizAnswer = 3;
      } else if(i === 9) {
        quizQuestion = "Which fire lord initiated the Hundred Year War?";
        choice1 = "Fire Lord Azulon";
        choice2 = "Fire Lord Ozai";
        choice3 = "Fire Lord Zoryu";
        choice4 = "Fire Lord Sozin";
        quizAnswer = 4;
      } else if(i === 10) {
        quizQuestion = "Who said the following quote: “It\’s the quenchiest!”";
        choice1 = "Toph";
        choice2 = "Sokka";
        choice3 = "Katara";
        choice4 = "Aang";
        quizAnswer =2;
      }
      //OUTPUT
      console.log(quizQuestion);
      console.log("\n");
      console.log(`1. ${choice1}`);
      console.log(`2. ${choice2}`);
      console.log(`3. ${choice3}`);
      console.log(`4. ${choice4}`);
      console.log("\n");
      //USER INPUT
      const userAnswer = parseInt(prompt("Enter the number of your answer: "));
      if(userAnswer === quizAnswer) {
        console.log("Correct!✔️");
        console.log("------------------------------------------------------------------------------------------");
        console.log("\n");
        score++;
      } else {
        console.log(`Incorrect.❌  The correct answer is ${quizAnswer}`);
        console.log("------------------------------------------------------------------------------------------");
        console.log("\n");
      }
    }
   
   //FINAL SCORE
  console.log(`Quiz completed! Your score is: ${score} out of 10`);
  
  //GAME RESTART
    let playAgainYesorNo = prompt("Play Again? (yes/no): ");
    if (playAgainYesorNo.toLowerCase() === "no") {
      playAgain = false;
      console.log("\n");
      console.log("Thank you playing!");
  
    } else {
      playAgain = true;
      console.log("\n");
  
    }
  
  }
  
   