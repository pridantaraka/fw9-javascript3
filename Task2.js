const getmonth = (callback)=>{
    setTimeout(() => {
        let error = false;
        let month = ['January','February','March','April','May','Juni','July','August','September','October','November','December']
        if(!error){
            callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found',[]))
        }
    }, 4000);
}

// const lowermonth = getmonth().month.toLowerCase()


// .then((param1)=> console.log(param1))
// .catch((e) =>{

// })
// console.log(getmonth());
// let month = ['January','February','March','April','May','Juni','July','August']
function lower(element) {
    return element.toLowerCase()
}

function call(){
    getmonth(callback)
}


call(()=>{
    console.log('');
    }
)

// getmonth(()=>{
//     const lowermonth = getmonth(()=>{month.map(lower)})
//     callback()
// })
// let lowermonth = getmonth.month.map(lower)

// console.log(lowermonth);



