const LinksSocialMedia = {
  github: 'ramondev8',
  youtube: 'channel/UCSfwM5u0Kce6Cce8_S72olg',
  instagram: 'ramondev8',
  facebook: 'ramonbrs8',
  twitter: 'ramondev8'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `http://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
