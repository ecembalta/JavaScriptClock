let nameReplace = document.getElementById('myName');

let fullName = prompt('Adınız Nedir?');

if (fullName != '') {
  fullName = `${fullName[0].toUpperCase()}${fullName.slice(1).toLowerCase()}`;
  nameReplace.innerHTML = fullName;
} else {
  alert('Lütfen adınızı giriniz..');
  fullName = prompt('Adınız Nedir?');
  fullName = `${fullName[0].toUpperCase()}${fullName.slice(1).toLowerCase()}`;
  nameReplace.innerHTML = fullName;
}

function showTime() {
  let date = new Date();

  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let d = date.getDay(); // 0 - 6
  let day;
  switch (d) {
    case 0:
      day = 'Pazar';
      break;
    case 1:
      day = 'Pazartesi';
      break;
    case 2:
      day = 'Salı';
      break;
    case 3:
      day = 'Çarşamba';
      break;
    case 4:
      day = 'Perşembe';
      break;
    case 5:
      day = 'Cuma';
      break;
    case 6:
      day = 'Cumartesi';
      break;
  }

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  let time = h + ':' + m + ':' + s + ' ' + day;
  document.getElementById('myClock').innerHTML = time;

  setTimeout(showTime, 1000);
}
showTime();
