let inputOne = document.querySelector(".inputOne");
let inputTwo = document.querySelector(".inputTwo");
let btn = document.querySelector(".btn-enter");
let main = document.querySelector('.main');
btn.onclick = function () {
  let one = inputOne.value;
  let two = inputTwo.value;
  if (one > 100) return alert("masukkan angka maksimal 100");
  if (one % two !== 0)
    return alert(
      "masukkan jumlah kelompok sesuai dengan (jumlah siswa / jumlah kelompok)"
    );
  let member = one / two;
  let arr = [];
  for (let i = 0; i < two; i++) {
    let gr = [];
    arr.push(gr);
  }
  for (let i = 0; i < two; i++) {
    for (let j = 0; j < member; j++) {
      arr[i][j] = Math.floor(Math.random() * one + 1);
      if (arr.indexOf(arr[i][j]) == -1) {
        arr.push(arr[i][j]);
      } else
        j--;
    }
    let teg = document.createElement('p');
    let isi = document.createTextNode(`Kelompok ke ${i + 1} : ${arr[i]}`)
    teg.appendChild(isi);
    main.appendChild(teg);
    main.classList.add('kelompok')
  }
};

let btnClear = document.querySelector('.btn-reset');
let inputs = document.querySelectorAll('input');

btnClear.addEventListener('click', () => {
    inputs.forEach(input =>  input.value = '');
    location.reload();
});