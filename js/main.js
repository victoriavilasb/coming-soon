document.addEventListener("DOMContentLoaded", function() { 
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', () => {
    const email = document.querySelector('input')
    mail_re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let style = document.querySelector('.error-message').style
    if(!email.value.match(mail_re)) {
      email.style.border = ".5px solid var(--red)"
      style.display = 'block'
    } else {
      email.style.border = ".5px solid var(--pale_blue)"
      style.display =  'none'
    }
    console.log(email)
  })
})
