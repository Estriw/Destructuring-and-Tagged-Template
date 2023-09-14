
// 1. Pada Array
const nilai = ['satu', 'dua', 'tiga']
const [s,, t] = nilai
console.log(s);
console.log(t);

// 2. Object
const mobil = [
  {
    name: 'fortuner1',
    type: 'toyota'
  },
  {
    name: 'fortuner2',
    type: 'toyota'
  },
]
const [mobilOne, mobilTwo] = mobil
const { name } = mobilOne
// const { name, type } = mobil
console.log(name);


// contoh pada function
function nameArray() {
  return ['budi', 'juna']
}

const [namaSatu, namaDua]= nameArray()
console.log(namaSatu, namaDua);

// 2. Object
const newMobil = {
  name1: 'fortuners',
  type: 'toyotas'
}

// Change Name
const { name1: newName1, type: ty } = newMobil
console.log(newName1, ty);


// mengambil field langsung dari parameter object yg dikirim
const mobilBaru = {
  name: 'Jazz',
  type: 'Honda'
}

function getCarName({ name }) {
  return name
}

console.log(getCarName(mobilBaru));

