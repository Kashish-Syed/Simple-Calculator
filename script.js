let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    // evaluating the values
    if (e.target.innerHTML == '=') {
      try {
        string = eval(string);
        if (isNaN(string)) {
          throw new Error("");
        }
        document.querySelector('input').value = string;
      } catch (error) {
        document.querySelector('input').value = "Syntax Error";
        setTimeout(() => {
          document.querySelector('input').value = "";
        }, 2000)
      }

    }
    else if (e.target.innerHTML == 'AC') {
      string = "";
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'C') {
      string = string.substring(0, string.length - 1);
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'x') {
      string = string + '*';
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == '%') {
      string = parseFloat(string) / 100
      // string = string + '%';
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML === 'sqrt') {
      string = Math.sqrt(parseFloat(string));
      document.querySelector('input').value = string;
    }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})