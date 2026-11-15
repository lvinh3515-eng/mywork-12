const quiz = document.querySelector("#ideology-quiz");

quiz.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(quiz);

    const scores = {
    communist: 0,
    conservative: 0,
    liberal: 0,
    libertarian: 0,
    anarchist: 0
};
for (let i = 1; i <= 10; i++) {
    const answer = formData.get(`q${i}`);

    if (answer && scores[answer] !== undefined) {
        scores[answer]++;
    }
    
}
console.log(scores);
let highestScore = 0;
let result = "";

for (let ideology in scores) {
    if (scores[ideology] > highestScore) {
        highestScore = scores[ideology];
        result = ideology;
    }
}
document.querySelector("#result").style.display = "block";
document.querySelector("#ideology-name").textContent =
    "You are a " + result + "!";
});