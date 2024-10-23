let gameAttributes = {
    SpieleGegenFreund: true
   
  };
  
  function ChangeGameAttribute(Mode, Boole, Mode2, Boole2) {
    gameAttributes[`SpieleGegen${Mode}`] = Boole;
    gameAttributes[`SpieleGegen${Mode2}`] = Boole2;
  }
  
  // Beispiel:
  ChangeGameAttribute("Freund", false);
  console.log(gameAttributes.SpieleGegenFreund,); // Ausgabe: false