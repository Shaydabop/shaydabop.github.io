var money = 0;
var generators = 0;
var smallblogs = 0;
var onlineshops = 0;
var pizzaplaces = 0;

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

function buyOnlineShop() {
  if (money > 999) {
    money -= 1000;
    onlineshops += 1;
    document.getElementById("onlineshops").innerHTML = "Online Shops: " + onlineshops;
    document.getElementById("money").innerHTML = "Money: " + money;
  }
}

function buyPizzaPlace() {
  if (money > 9999) {
    money -= 10000;
    pizzaplaces += 1;
    document.getElementById("pizzaplaces").innerHTML = "Pizza Places: " + pizzaplaced;
    document.getElementById("money").innerHTML = "Money: " + money;
  }
}

function update() {
  money += generators;
  money += smallblogs * 10;
  document.getElementById("money").innerHTML = "Money: " + money;
}
