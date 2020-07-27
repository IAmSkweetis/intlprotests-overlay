import './overlay.css'
import svg from 'raw-loader!./overlay.svg'

const containerEl = document.createElement('div')
containerEl.id = 'container'
containerEl.innerHTML = svg
document.body.appendChild(containerEl)

const timeFormat = new Intl.DateTimeFormat('en-US', {
  timeStyle: 'long',
})

function updateClock() {
  document.getElementById('timestamp').textContent = timeFormat.format()
}

setInterval(updateClock, 500)
updateClock()
