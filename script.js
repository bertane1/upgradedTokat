const tokat = document.getElementById('tokat')
const tokatDad = document.getElementById('tokatDad')
const evren = document.getElementById('evren')
const evrenDiv = document.getElementById('evrenDiv')
const timur = document.getElementById('timur')
const timurDiv = document.getElementById('timurDiv')
const tokatSayisi = document.getElementById('tokatSayi')
const atakDiv = document.getElementById('atakDiv')
n=0
function tokatla(){
    tokatDad.classList.remove('d-none')
    let sayi = parseInt(tokatSayisi.textContent)
    let yeniSayi = sayi + 1
    tokatSayisi.textContent = yeniSayi
    if(!evrenDiv.classList.contains('d-none')){
        evrenDiv.classList.add('d-none')
    }
    if(!timurDiv.classList.contains('d-none')){
        timurDiv.classList.add('d-none')
    }
    tokat.play() 
}
function evrenle(){
    evrenDiv.classList.remove('d-none')
    if(!tokatDad.classList.contains('d-none')){
        tokatDad.classList.add('d-none')
    }
    if(!timurDiv.classList.contains('d-none')){
        timurDiv.classList.add('d-none')
    }
    evren.play() 
}
function timurla(){
    timurDiv.classList.remove('d-none')
    if(!tokatDad.classList.contains('d-none')){
        tokatDad.classList.add('d-none')
    }
    if(!evrenDiv.classList.contains('d-none')){
        evrenDiv.classList.add('d-none')
    }
    timur.play() 
}