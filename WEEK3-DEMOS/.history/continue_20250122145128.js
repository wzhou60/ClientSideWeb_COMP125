let customerEmail = 
for (let i = 0; i < customerEmail.length; i++) {
  if (customerEmail[i] === undefined) {
    continue;
  } else {
    // statements to process the e-mail address
    document.write(customerEmail[i]);
  }
}
