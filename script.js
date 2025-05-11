function calculate(operator){
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result;

  if (isNan(num1) || isNan(num2)) {
    result="Please enter valid numbers";
  }else{
    switch(operator){
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        result = num2 !==0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero";
        break;
      default:
        result = "Invalid operation";
    }
  }
  document.getElementById('calcResult').innerText = `Result: ${result}`;
}

function addTodo(){
  const input = document.getElementById('todoInput');
  const taskText = input.value.trim();

  if (taskText === ""){
    alert("Please enter a task");
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  const delBtn = document.createElement('button');
  delBtn.textContent = "Delete";
  delBtn.style.marginLeft = "10px";
  delBtn.onclick = () => li.remove()

  li.appendChild(delBtn);
  document.getElementById('todoList').appendChild(li);

  input.value = "";
}


function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const error = document.getElementById('formError').value;

  error.textContent = "";

  if (name === "" ){
    error.textContent = "Name is required";
    return false;
  }

  if (!email.include("@") || !email.include(".")) {
    error.textContent = "Invalid email address";
    return false;
  }

  if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters long";
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}


let count = 0;
function updateCounter() {
  document.getElementById('count').innerText = count;
}

function increment(){
  count++;
  updateCounter();
}

function decrement(){
  count--;
  updateCounter();
}

function reset(){
  count = 0;
  updateCounter();
}

const quotes =[
  "MotherLand or Death.",
  "Your time is limited, so don't waste it living someone else's life.",
  "Life is what happens when you're busy making other plans.",
  "Get busy living or get busy dying.",
  "Whether you think you can or you think you can't, you're right.",
  "You miss 100% of the shots you don't take.",
  "Life is 10% what happens to me and 90% of how I react to it.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
]

function generateQuote(){
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById('quote').innerContent = quote;
}