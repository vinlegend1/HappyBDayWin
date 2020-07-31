async function getData() {
  const response = await fetch('https://api.imgflip.com/get_memes');
  const data = await response.json();
  const index = Math.floor(Math.random() * data.data.memes.length);
  
  const memeImageURL = data.data.memes[index].url;
  console.log(memeImageURL);
  document.getElementById("meme").src = memeImageURL;
}

getData().then(response => console.log('yay')).catch(err => console.log(err));

document.getElementById('new-meme').addEventListener('click', async function() {
  const response = await fetch('https://api.imgflip.com/get_memes');
  const data = await response.json();
  const index = Math.floor(Math.random() * data.data.memes.length);
  
  const memeImageURL = data.data.memes[index].url;
  console.log(memeImageURL);
  document.getElementById("meme").src = memeImageURL;
})

