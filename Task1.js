const cekHariKerja = (day) =>{
    return new Promise ((resolve , reject)=>{
        setTimeout(() => {
            const dataDay = ['Senin','Selasa','Rabu','Kamis','Jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000);
    })
}


cekHariKerja()
.then((param1)=> console.log(param1))
.catch((e) =>{
    switch (e.check) {
        case item:{
            day === 'Senin'
        }
        break;
    
        default:{
            console.log("Libur");
        }
    }
})

// console.log(Promise);
// async function name(params) {
    
// }

// function cek(day) {
//     const dataDay = ['Senin','Selasa','Rabu','Kamis','Jumat']
//     let cek = dataDay.find(a => a == day)
//     return cek
// }


// console.log(cek('Rabu'));

// const dataDay = ['Senin','Selasa','Rabu','Kamis','Jumat']
//     let cek = dataDay.find(a => a === 'Jumat')
//     console.log(cek);