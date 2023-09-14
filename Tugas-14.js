//TUGAS
//1. Buat contoh sebuah function yang menggunakan metode destructuring.
//2. Buat sebuah contoh tagged template 

// 1. Function destructuring

function makanan(){
    const makan = [
        {
          nama : 'brokoli',
          jenis : 'sayur'
        },
        {
          nama : 'melon',
          jenis : 'buah'
        }
      ]
    return makan;
  }
  
  const [namaSatu, namaDua] = makanan()
  const {nama} = namaDua
  console.log(nama)
  //output : melon

  // 2. Function tagged template

  const sayur = 'wortel'
  const masak1 = 'tumis'
  const masak2 = 'rebus'
  const kalimat = masak`${sayur} ${masak1} ${masak2}`
  console.log(kalimat)
  
  function masak(str, sayur, masak1, masak2){
    return `sayur ${sayur} bisa dimasak dengan cara di ${masak1}atau di ${masak2} `
  }

//output : sayur wortel bisa dimasak dengan cara di tumisatau di rebus 

