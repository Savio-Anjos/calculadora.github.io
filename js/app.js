
function aquamarine() {
    let container = document.getElementById('container')
    container.classList.remove('cor1');
    container.classList.add('cor2')
  
}

function padrao() {
    let container = document.getElementById('container')
    container.classList.remove('cor2');
    container.classList.add('cor1')

}


function calcular(tipo, valor) {
  if(tipo === 'acao') {
    if(valor === 'c') {
        document.getElementById('resultado').value = ''
    }

    if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.' ) {
      document.getElementById('resultado').value += valor
    }

    if(valor === '=') {
        var valor_campo = eval(document.getElementById('resultado').value)
        document.getElementById('resultado').value = valor_campo
    }
  } else if(tipo === 'valor') {
    document.getElementById('resultado').value += valor
  }
}