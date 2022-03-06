const budget = () => {
  let d = new Date
  let lastDate = new Date(d.getFullYear, d.getMonth, 0)
  const userIncome = gon.user_income
  const userFixedCost = gon.user_fixed_cost
  const attackVal = (userIncome - userFixedCost)
  const attack = document.getElementById("attack_button");
  attack.addEventListener("click", () => {
    console.log(attackVal)
  });
};

window.addEventListener('load', budget);