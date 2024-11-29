const base_Url = "https://monku-morowali.my.id/api/";
const apiKey = "monitoring1234";

function getData() {
  if ("caches" in window) {
    caches.match(`${base_Url}data`).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          setData(data);
        });
      }
    });
  }

  fetch(`${base_Url}data`, {
    headers: {
      key: apiKey,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => setData(responseJson))
    .catch((error) => console.log(error));
}
