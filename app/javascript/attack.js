const budget = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const lastDay = new Date(year, month, 0);
  const day = lastDay.getDate();
  const userIncome = gon.user_income
  const userFixedCost = gon.user_fixed_cost
  const attackValTrue = (userIncome - userFixedCost) / day;
  const attackVal = Math.trunc(attackValTrue)
  const damageStatus = document.getElementById("damage_status");
  damageStatus.innerHTML = `${attackVal}`;

  const displayCurrentHp = document.getElementById("current_hp");
  const maxHp = gon.user_target_amount
  const currentHp = maxHp
  displayCurrentHp.innerHTML = `${currentHp}`

  const attack = document.getElementById("attack_button");
  attack.addEventListener("click", () => {
    const residueHp = currentHp - attackVal
    displayCurrentHp.innerHTML = `${residueHp}`;
  });
};

window.addEventListener('load', budget);