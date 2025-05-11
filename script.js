// Calculator
function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result = "";

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers!";
  } else {
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'sub':
        result = num1 - num2;
        break;
      case 'mul':
        result = num1 * num2;
        break;
      case 'div':
        result = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero!";
        break;
    }
  }

  document.getElementById("calcResult").innerText = result;
}

// Form validation
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("formMessage");

  if (name === "" || email === "") {
    message.style.color = "red";
    message.innerText = "All fields are required!";
  } else {
    message.style.color = "green";
    message.innerText = `Thanks ${name}, we'll contact you at ${email}`;
    this.reset();
  }
});

// Counter
let count = 0;
const countDisplay = document.getElementById("count");

function increment() {
  count++;
  countDisplay.innerText = count;
}

function decrement() {
  count--;
  countDisplay.innerText = count;
}

function reset() {
  count = 0;
  countDisplay.innerText = count;
}

// Quote Generator
const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Dream big and dare to fail.",
  "Success is not in what you have, but who you are.",
  "The harder you work for something, the greater you’ll feel when you achieve it."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteText").innerText = quotes[randomIndex];
}

// Todo List
function addTodo() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();
  const list = document.getElementById("todoList");

  if (task !== "") {
    const li = document.createElement("li");
    li.innerText = task;
    li.addEventListener("click", () => li.remove()); // click to remove task
    list.appendChild(li);
    input.value = "";
  }
}
