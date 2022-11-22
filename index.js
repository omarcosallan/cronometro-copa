const cronometro = document.querySelector("[data-cronometro]");

//
// APP
const atualizaCronometro = () => {
  const dataAtual = new Date();
  const dataInicioCopa = new Date(2022, 10, 20, 13, 0);
  const dataFinalCopa = new Date(2022, 11, 18, 12, 0);

  if (dataAtual >= dataInicioCopa) {
    const titulo = document.querySelector(".titulo__texto");
    titulo.innerText = "Contagem regressiva para o Hexa!";
    cronometro.innerHTML = conteudoCronometro(
      tempoRestante(dataFinalCopa, dataAtual)
    );
  } else {
    titulo.innerText = "A Copa do Mundo começa em";
    cronometro.innerHTML = conteudoCronometro(
      tempoRestante(dataInicioCopa, dataAtual)
    );
  }
};

const tempoRestante = (dataFinal, dataAtual) => {
  const dias = parseInt(
    (dataFinal.getTime() - dataAtual.getTime()) / (1000 * 3600 * 24)
  );
  const horas = parseInt(
    ((dataFinal.getTime() - dataAtual.getTime()) / (1000 * 3600)) % 24
  );
  const minutos = parseInt(
    ((dataFinal.getTime() - dataAtual.getTime()) / (1000 * 60)) % 60
  );
  const segundos =
    parseInt((dataFinal.getTime() - dataAtual.getTime()) / 1000) % 60;
  return { dias, horas, minutos, segundos };
};

setInterval(atualizaCronometro, 1000);

//
// Serviços
const validaDigito = (numero) => {
  return numero < 10 ? "0" + numero : numero;
};

const conteudoCronometro = ({ dias, horas, minutos, segundos }) => {
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
    <img src="assets/img/element-catar.svg">
    <div class="cronometro__segundos">
      <span>${validaDigito(segundos)}</span>
      <p>segundos</p>
    </div>
  `;
};
