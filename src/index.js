import './main.sass'
import view from './view.pug'

let html = view({ name: 'Hank' })
document.body.innerHTML = html