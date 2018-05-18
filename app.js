const displayBorder = () => {
    let mails = document.getElementsByClassName('zA yO')
    if (mails.length == 0) return

    let lastDate = mails[0].getElementsByClassName('xW xY')[0].textContent
    for (mail of mails) {
        let receiveDate = mail.getElementsByClassName('xW xY')[0].textContent
        if (receiveDate.match(/.*月.*日/) && receiveDate != lastDate) {
            mail.style.borderTop = '1px solid #aaa'
        }

        lastDate = receiveDate
    }
}


window.setInterval(displayBorder, 1000)