window.addEventListener("DOMContentLoaded", () => {
  $('.nav-toggle').on('click', function () {
    console.log('click');
    $('.left_bar').toggleClass('view');
  });
})

const btnAdd = document.querySelector('#onSendMessage')


const url = 'https://uapi.gravitec.net/api/v3/push';
const APP_KEY = '31ccf9c18f39626412bc4cea8fd91f89';
const APP_SECRET = '21d2692a71af5368eaa9adbff1cbdf6f';
// curl -X \
//   -u "31ccf9c18f39626412bc4cea8fd91f89:21d2692a71af5368eaa9adbff1cbdf6f" \
//   -H "Content-Type: application/json" \
//   https://uapi.gravitec.net/api/v3/push

// async function postPost() {

//   const myHeaders = new Headers();
//   const myInit = {
//     method: 'POST',
//     myHeaders: {
//       'Content-Type': 'application/json',
//       'Authorization': `${APP_KEY}`,
//       'referer': 'https://ticket-app-message.vercel.app',
//       'Origin' : 'https://ticket-app-message.vercel.app',
//       'Access-Control-Request-Methods': 'POST',
//       'Access-Control-Request-Headers': 'Content-Type,Authorization',
//       'Access-Control-Allow-Origin': 'https://ticket-app-message.vercel.app'
//     },
//     body: {
//       "payload": {
//         "message": " Test massage",
//         "title": "Test message",
//         "redirect_url": "https://gravitec.net",
//       }
//     },
//     cache: 'default'
//   };

//   const myRequest = new Request('https://uapi.gravitec.net/api/v3/push', myInit);

//   const result = await fetch(myRequest).then(function (response) {
//     return response.data
//   })
//   return result
// }

async function postPost() {
  let myHeaders = new Headers();

  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', 'MzFjY2Y5YzE4ZjM5NjI2NDEyYmM0Y2VhOGZkOTFmODk6MjFkMjY5MmE3MWFmNTM2OGVhYTlhZGJmZjFjYmRmNmY=');
  myHeaders.append('Origin', 'https://ticket-app-message.vercel.app');

  fetch(url , {
      mode: 'no-cors',
      credentials: 'include',
      method: 'POST',
      headers: myHeaders,
      body: {
        "payload": {
          "message": "Test massage",
          "title": "Test message",
          "redirect_url": "https://gravitec.net"
        }
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error.message));
}
btnAdd.addEventListener('click', () => {
  postPost()
    .then(res => console.log(res))
    .catch(err => console.log(err))
})