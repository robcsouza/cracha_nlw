const linksSocialMedia = {
  github: 'robcsouza',
  linkedin: '/in/robcsouza',
  instagram: 'robison_souza',
  facebook: 'robison.souza.84',
  twitter: 'robcsouza',
  youtube: '/channel/UCykgil1n_8XWpxfw_H9KWBQ'
}

function changeSocialMediaLinks(){
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data =>{
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })
}
getGitHubProfileInfos()