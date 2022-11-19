const cronometro = document.querySelector("[data-cronometro]");

const atualizaCronometro = () => {
  const dataAtual = new Date();
  const dataCOPA = new Date(2022, 10, 20, 13, 0);

  const dias = parseInt(
    (dataCOPA.getTime() - dataAtual.getTime()) / (1000 * 3600 * 24)
  );
  const horas = parseInt(
    (dataCOPA.getTime() - dataAtual.getTime()) / (1000 * 3600)
  );
  const minutos = parseInt(
    ((dataCOPA.getTime() - dataAtual.getTime()) / (1000 * 60)) % 60
  );

  if (dias <= 0 && horas <= 0 && minutos <= 0) {
    const titulo = document.querySelector(".titulo__texto");
    titulo.innerText = "A Copa já começou, meu parceiro!";
    cronometro.innerHTML =
      "<img src='assets/img/element-catar.svg'>  &#11088;&#11088;&#11088;&#11088;&#11088; <br>Agora é Hexa! <img src='assets/img/element-catar.svg'>";
  } else {
    cronometro.innerHTML = conteudoCronometro(dias, horas, minutos);
  }
};

setInterval(atualizaCronometro, 1000);

const validaDigito = (numero) => {
  return numero < 10 ? "0" + numero : numero;
};

const conteudoCronometro = (dias, horas, minutos) => {
  return `
    <div class="cronometro__dias">
      <span> ${validaDigito(dias)} </span>
      <p>dias</p>
    </div>
    <img src="assets/img/element-catar.svg">
    <div class="cronometro__horas">
      <span>${validaDigito(horas)}</span>
      <p>horas</p>
    </div>
    <img src="assets/img/element-catar.svg">
    <div class="cronometro__minutos">
      <span>${validaDigito(minutos)}</span>
      <p>minutos</p>
    </div>
  `;
};
