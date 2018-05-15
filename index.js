const form = document.querySelector('form#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const form = ev.target
  const userName = form.userName.value
  const age = form.age.value
  const favoriteColor = form.favoriteColor.value
  const users = document.querySelector('#users')

const p = document.createElement('P')
p.textContent = '${userName}, ${age}, ${favoriteColor}'
p.style.backgroundColor = favoriteColors

  users.innerHTML += `<p>${userName}, ${age}, ${favoriteColor}</p>`
  form.reset()
  form.userName.focus()
}

form.addEventListener('submit', handleSubmit)