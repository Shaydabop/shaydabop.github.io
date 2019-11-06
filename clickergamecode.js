var money = 0;
var generators = 0;
var smallblogs = 0;

function work() {
  money += 5;
  document.getElementById("money").innerHTML = "Money: " + money;
}

function buyGenerator() {
  if (money > 9) {
    money -= 10;
    generators += 1;
    document.getElementById("generators").innerHTML = "Generators: " + generators;
    document.getElementById("money").innerHTML = "Money: " + money;
  }
}

function buySmallBlog() {
  if (money > 99) {
    money -= 100;
    smallblogs += 1;
    document.getElementById("smallblogs").innerHTML = "Lemonade Stands: " + smallblogs;
    document.getElementById("money").innerHTML = "Money: " + money;
  }
}

function update() {
  money += generators;
  money += smallblogs * 10;
  document.getElementById("money").innerHTML = "Money: " + money;
}
