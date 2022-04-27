const btn = document.querySelector('.server')
btn.addEventListener('click', () => {
    sendRequestToServer()
    .then(res => console.log(res))
    .catch(err => console.log(err));
})


function sendRequestToServer() {
  const url = "https://fcm.googleapis.com/fcm/send";
  const request = {
    "notification": {
      "title": "Ералаш",
      "body": "Начало в 21:00",
      "icon": "https://ticket-html.vercel.app/img/icon/android-icon-96x96.png",
      "click_action": "http://eralash.ru/"
    },
    "to": "91734333449"
  };

  return fetch(url, {
    method: 'post',
    headers: {
      'ContentType': 'application/json',
      'Authorization': key='AAAAFVvK2Ak:APA91bGFjpVYDRxQWDOimDq30VDKMXKH-A8Vot_tySKFpjpUvpfpBDuKE3wvp9gAVwwZhBlpTvDau_-6KaqecdBpZzD_VjYalY2lvKdCoOeKIAuuxz15VdaOq4y7GAxKwHTEpM7Uilr-'

    },
    body: JSON.stringify(request)
  }).then(respond = respond.json())
}