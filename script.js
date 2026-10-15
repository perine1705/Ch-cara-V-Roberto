const inicioTexto = document.getElementById("inicioTexto");
const fundoInicio = document.getElementById("fundoInicio");
const placa = document.getElementById("placa");

function atualizarParallax() {
  const rolagem = window.scrollY;

  if (inicioTexto) {
    inicioTexto.style.transform = `translateY(${rolagem * 0.3}px)`;
  }

  if (fundoInicio) {
    fundoInicio.style.transform = `translateY(${rolagem * 0.1}px)`;
  }

  if (placa) {
    placa.style.transform = `translate(-50%, calc(-50% + ${rolagem * 0.3}px))`;
  }
}

window.addEventListener("scroll", atualizarParallax);

const elementos = document.querySelectorAll(".aparecer");

function mostrarElementos() {
  const alturaTela = window.innerHeight;

  elementos.forEach((elemento) => {
    const posicao = elemento.getBoundingClientRect().top;

    if (posicao < alturaTela - 80) {
      elemento.classList.add("visivel");
    }
  });
}

window.addEventListener("scroll", mostrarElementos);
mostrarElementos();

const botoes = document.querySelectorAll(".botao-detalhes");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const detalhes = botao.nextElementSibling;

    if (detalhes) {
      detalhes.classList.toggle("aberto");
    }
  });
});
