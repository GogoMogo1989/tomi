/* function legnagyobbSzam(tomb) {
    if (tomb.length === 0) {
      return null; // Ha a tömb üres, visszaadunk null értéket
    }
  
    let legnagyobb = tomb[0]; // Feltételezzük, hogy az első elem a legnagyobb
  
    for (let i = 1; i < tomb.length; i++) {
      if (tomb[i] > legnagyobb) {
        legnagyobb = tomb[i]; // Ha találunk nagyobb számot, frissítjük a legnagyobb változót
      }
    }
  
    return legnagyobb;
  }
  
  const szamok = [4, 7, 2, 9, 1, 6];
  const legnagyobb = legnagyobbSzam(szamok);
  console.log(legnagyobb);  */

/*   function sumDigits(number) {
    let sum = 0;
    const digits = number.toString().split('').map(Number);
    
    for (let digit of digits) {
      sum += digit;
    }
    
    return sum;
  }
  
  // Példa használat:
  const number = 123;
  const result = sumDigits(number);
  console.log(result); // Kiírja: 6

 */

/*   function faktorialis(n) {
    if (n === 0 || n === 1) {
      console.log(1)
    } else {
      let fakt = 1;
      for (let i = 2; i <= n; i++) {
        fakt *= i;
      }
      console.log(fakt)
    }
  }

  faktorialis(10) */

  /* function fuzzBizz(szam) {
    let eredmeny = "";
    for (let i = 1; i <= szam; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        eredmeny += "fuzzbizz ";
      } else if (i % 3 === 0) {
        eredmeny += "fuzz ";
      } else if (i % 5 === 0) {
        eredmeny += "bizz ";
      } else {
        eredmeny += i + " ";
      }
    }
   console.log( eredmeny.trim())
  }

  fuzzBizz(20) */


  function decreaseNumber(divId) {
    const div = document.getElementById(divId);
    if (div) {
      const pTag = div.querySelector('p:last-child');
      let currentNumber = parseFloat(pTag.textContent);
      if (currentNumber) {
        currentNumber = currentNumber - 1;
        if (currentNumber < 0) {
          currentNumber = 0;
        }
        pTag.textContent = currentNumber.toString();
        if (currentNumber <= 3 ) {
          div.style.backgroundColor = 'red'; 
        } else {
          div.style.backgroundColor = '#f0f0f0'; 
        }
      }
    }
  }
  
  
  
  
  
  
  
  
  
  
  