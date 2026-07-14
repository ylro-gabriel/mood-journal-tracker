const sbmtMood = document.getElementById("btn-submit");

// console for now
const showDate = (date) => {
  date = document.getElementById("date").value;
  console.log(date);
  return date;
};

sbmtMood.addEventListener("click", showDate);
