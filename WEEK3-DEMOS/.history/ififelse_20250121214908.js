let day = ""
if (day === "Friday") {
  if (time === "8am") {
    window.alert("Start of the last day of the week.");
  } else if (time === "5pm") {
    window.alert("Time to start the weekend!");
  } else {
    window.alert("A few more hours until the weekend.");
  }
} else if (day === "Monday") {
  window.alert("Start of another work week.");
} else {
  window.alert("Have a great day!");
}
