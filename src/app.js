const typedTextSpan = document.querySelector('#typed-text')
const cursorSpan = document.querySelector('#cursor')
const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextBirthdayContainer = document.querySelector('#year')
const spinner = document.querySelector('#loading')
const countDownContainer = document.querySelector('#countdown')

const textArray = ['"Escute só, isto é muito sério. And...', 'Escute que isto é sério!', 'O mundo está tremendamente esquisito.', '[...]', 'O mestre ainda não veio decretar o começo da abstenção e, olha, a luz ainda está conosco.', 'Sim, o mundo está absurdamente esquisito.', 'Já ninguém confia nas imposições dos prefeitos. A esta hora na terra é metade carnaval, metade conspiração. Metade medo, metade fé. Metade folia, metade desespero.', 'E, provavelmente, a esta hora, uma metade do mundo está dançando e a outra metade dormindo. Há ainda outra metade limpando as armas, outra limpando o pó das flores. ', 'Mas, por causa do que me ensinou o místico, eu acredito que agora exista alguém profundamente acordado. Alguém que esteja vivendo entre o intervalo tênue entre o sono e a agilidade.', 'Suponho que ele saiba perfeitamente que este começo de século será nosso batismo de vôo para a persistência no amor.', 'João molhou a testa de Manuel. Os gritos das ruas molham as testas de nossos corações.', '[...]', 'Escute, isto é sério.', 'Andamos crescendo juntos, distraídamente. As árvores crescem conosco. Nossa pele se estende, nosso entendimento teso, também. O século cresce conosco. O amor pelas ventas da cara do mundo, também.', '[...]', 'Mas começo a entender que o compasso da fé está mudando a passos largos. Dois pra lá e dois pra cá.', 'Portanto, escute. Isto é muito serio!', '[...]"', 'Fevereiro - Matilde Campilho', 'Enquanto o seu dia não chega, até lá, fique com essa previsão para dias melhores.', '"Isto é uma proposta aos...".', 'Quem sabe ela não te salva também!', 'Com carinho, Meli.', 'Um beijo']

const typingDelay = 140
const erasingDelay = 50
const newTextDelay = 1000
let textArrayIndex = 0
let charIndex = 0

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing')
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex)
    charIndex++
    setTimeout(type, typingDelay)
  }
  else {
    cursorSpan.classList.remove('typing')
    setTimeout(erase, newTextDelay)
  }
}

function erase() {
  if (charIndex > 0) {
    if (cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing')
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1)
    charIndex--
    setTimeout(erase, erasingDelay)
  }
  else {
    cursorSpan.classList.remove('typing')
    textArrayIndex++
    if (textArray >= textArray.length) textArrayIndex = 0
    setTimeout(type, typingDelay + 1000);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (textArray.length) setTimeout(type, newTextDelay + 0.5)
})

const nextBirthday = new Date().getFullYear()
const newAge = new Date(`September 18 2020 00:00:00`)

nextBirthdayContainer.textContent = '20 años'

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const insertCountDownValues = ({ days, hours, minutes, seconds }) => {
  secondsContainer.textContent = getTimeUnit(seconds)
  minutesContainer.textContent = getTimeUnit(minutes)
  hoursContainer.textContent = getTimeUnit(hours)
  daysContainer.textContent = getTimeUnit(days)
}

const updateCountDown = () => {
  const currentTime = new Date()
  const difference = newAge - currentTime
  const days = Math.floor(difference / 1000 / 60 / 60 / 24)
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24
  const minutes = Math.floor(difference / 1000 / 60) % 60
  const seconds = Math.floor(difference / 1000) % 60

  insertCountDownValues({ days, hours, minutes, seconds })
}

const handleCountDownDisplay = () => {
  spinner.remove()
  countDownContainer.style.display = 'flex'
}

setTimeout(handleCountDownDisplay, 1000)

setInterval(updateCountDown, 1000)
