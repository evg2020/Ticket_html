window.addEventListener("DOMContentLoaded", () => {
  $('.nav-toggle').on('click', function () {
    console.log('click');
    $('.left_bar').toggleClass('view');
  });
})

const btnAdd = document.querySelector('#onSendMessage')


const url = 'https://uapi.gravitec.net/api/v3/push';
const APP_KEY= '31ccf9c18f39626412bc4cea8fd91f89';
const APP_SECRET = '21d2692a71af5368eaa9adbff1cbdf6f';
// curl -X \
//   -u "31ccf9c18f39626412bc4cea8fd91f89:21d2692a71af5368eaa9adbff1cbdf6f" \
//   -H "Content-Type: application/json" \
//   https://uapi.gravitec.net/api/v3/push

async function postPost() {
  const res = await fetch('https://uapi.gravitec.net/api/v3/push', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${APP_KEY}`,
      'Cache-Control': 'no-cache'
    },
    body: JSON.stringify(
      {
        "payload": {
          "message": " Test massage",
          "title": "Test message",
          "redirect_url": "https://gravitec.net",

        }
      }

    )
  }).then(res => res.json())
  return res;
}

btnAdd.addEventListener('click', () => {
  postPost()
    .then(res => console.log(res))
    .catch(err => console.log(err))
})


let isPushEnabled = false;

window.addEventListener('load', function() {
    let pushButton = document.querySelector('.js-push-button');
    pushButton.addEventListener('click', function() {
    if (isPushEnabled) {
        unsubscribe();
    } else {
        subscribe();
    }
    });

    // Check that service workers are supported, if so, progressively
    // enhance and add push messaging support, otherwise continue without it.
    if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(initialiseState);
    } else {
    console.warn('Service workers aren\'t supported in this browser.');
    }
});

