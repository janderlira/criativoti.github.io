const url = 'https://www.criativoti.ga/sucesso'
const btn = document.querySelector('#btn')

function openInNewTab(url) {
    const win = window.open(url, '_blank')
    win.fucus()
}

btn.addEventListener('click', () => {
    openInNewTab(url)
})