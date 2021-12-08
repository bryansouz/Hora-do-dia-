function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var date = new Date()
    var hr =  date.getHours() 
    var min = date.getMinutes()
    msg.innerHTML = `Agora são ${hr} horas e ${min} minuto(s)`    

    if(hr >= 5 &&  hr < 12){
        foto.src = 'img/morning.jpg'
        document.body.style.backgroundImage = 'url(img/backmorning.jpg)';
    } else if(hr >= 12 && hr < 18 ){
        foto.src = "img/afternoon.jpeg"
        document.body.style.backgroundImage = 'url(img/backafternoon.jpg)';
    }else{
        foto.src = "img/night.jpg"
        document.body.style.backgroundColor = '#ecb379';
    }

}



