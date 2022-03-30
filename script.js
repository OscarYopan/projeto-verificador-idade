function calc(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || fano.value > ano){
    window.alert('[Erro] Ano iválido, tente novamente!')
  }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
      genero = 'Homem'
      if(idade >= 0 && idade < 6){
        img.setAttribute('src', 'imagens/homem1.png')
      }else if (idade < 11){
        img.setAttribute('src', 'imagens/homem2.png')
      }else if (idade < 18){
        img.setAttribute('src', 'imagens/homem3.png')
      }else if(idade < 40){
        img.setAttribute('src', 'imagens/homem4.png')
      }else if(idade < 60){
        img.setAttribute('src', 'imagens/homem5.png')
      }else if(idade < 1000){
        img.setAttribute('src', 'imagens/homem6.png')
      }
    }else if(fsex[1].checked){
      genero = 'Mulher'
      if(idade >= 0 && idade < 6){
        img.setAttribute('src', 'imagens/mulher1.png')
      }else if (idade < 11){
        img.setAttribute('src', 'imagens/mulher2.png')
      }else if (idade < 18){
        img.setAttribute('src', 'imagens/mulher3.png')
      }else if(idade < 40){
        img.setAttribute('src', 'imagens/mulher4.png')
      }else if(idade < 60){
        img.setAttribute('src', 'imagens/mulher5.png')
      }else if(idade < 1000){
        img.setAttribute('src', 'imagens/mulher6.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero}, com ${idade} anos.`
    res.appendChild(img)
  }
}
