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

// error => object error
// hanya fungsi yang bisa di invoke
// ()invoke

// cekHariKerja('Senin')
// .then((param1)=> {
//     console.log(param1);
// })
// .catch((e) =>{
//     switch (e.message) {
//         case 'Hari ini bukan hari kerja':{
//             console.log("program error");
//             break;
//         }
//         default:{
//             console.log("Error");
//         }
//     }
// })



async function process(param1) {
    try{
        const getCaracter= await cekHariKerja(param1)
        console.log(getCaracter);

    }catch(e){
        switch (e.message) {
            case 'Hari ini bukan hari kerja':{
                console.log("program error");
                break;
            }
            default:{
                console.log("Error");
            }
        }
    }
}

process('Senin')