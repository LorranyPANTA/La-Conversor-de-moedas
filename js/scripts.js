function ConverterDolar() {
    var valorElementoDolar = parseFloat(
      document.getElementById("valorDolar").value
    );
  
    var valorEmDolar = valorElementoDolar * 5.25;
  
    var elementoValor = document.getElementById("valorEmReal");
    elementoValor.innerHTML = "Valor em Real é " + valorEmDolar + " R$";
    document.getElementById("valorDolar").value = "";
  }
  
  function ConverterEuro() {
    var valorElementoEuro = parseFloat(
      document.getElementById("valorEuro").value
    );
  
    var valorEmEuro = valorElementoEuro * 6.2;
  
    var elementoValor = document.getElementById("valorEmReal");
    elementoValor.innerHTML = "Valor em Real é " + valorEmEuro + " R$";
    document.getElementById("valorEuro").value = "";
  }
  
  function ConverterIeneJapones() {
    var valorElementoIeneJapones = parseFloat(
      document.getElementById("valorIeneJapones").value
    );
  
    var valorEmIeneJapones = valorElementoIeneJapones * 0.048;
  
    var elementoValor = document.getElementById("valorEmReal");
    elementoValor.innerHTML = "Valor em Real é " + valorEmIeneJapones + " R$";
    document.getElementById("valorIeneJapones").value = "";
  }
  
  function ConverterBitcon() {
    var valorElementoBitcon = parseFloat(
      document.getElementById("valorBitcon").value
    );
  
    var valorEmBitcon = valorElementoBitcon * 253627.59;
  
    var elementoValor = document.getElementById("valorEmReal");
    elementoValor.innerHTML = "Valor em Real é " + valorElementoBitcon + " R$";
    document.getElementById("valorBitcon").value = "";
  }
  //Adicionar outras moedas para converter
  //Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.
  