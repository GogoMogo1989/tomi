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

  function sumDigits(number) {
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

