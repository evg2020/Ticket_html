const btnAdd = document.querySelector('#onSendMessage')

function createPost(body, cd) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
  xhr.addEventListener('load', () => {
    const res = JSON.parse(xhr.responseText)
    cd(res)
  });
  xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
  xhr.addEventListener('error', () => {
    console.log('error');
  })
  xhr.send(JSON.stringify(body))
}

btnAdd.addEventListener('click', () => {
  const newPost = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  }
  createPost(newPost, (res) => {
    console.log(res);
  })
})


btnAdd.addEventListener('click', () => {
  getPost(3)
  .then(post=> console.log(post))
  .catch(err => console.log(err))

})

async function getPost(id){
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await response.json()
  return data
}




async function getPost(id) {
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
  return response
  } catch (err){
    console.log(err);
    return Promise.reject(err)
  }

}

 async function getAll() {
   const [res1, res2] = await Promise.all([getPost(1), getPost(2)])
   console.log(res1, res2);

 }

 btnAdd.addEventListener('click', ()=>{
    getAll()
  })


///-----------------------------

  async function getPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
  return response
}

 async function postPost(){
   const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
     method: "POST",
     headers: {
      'Content-Type': 'application/json;charset=utf-8'
     },
     body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
     })
   }).then(res => res.json())
   return res;
 }

 btnAdd.addEventListener('click', ()=>{
   console.log('ok');
   postPost().then(res=> console.log(res))

 })

 ///---
 const btnAdd = document.querySelector('#onSendMessage')
const btnReply = document.querySelector('#reply')


btnReply.addEventListener('click', () => {
  getPost(1)
    .then(post => console.log(post))
    .catch(err => console.log(err))
})

async function getPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
  return response
}
