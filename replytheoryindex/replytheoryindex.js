
// const attackVector = [
    
// ]




// const company = [
//     {
//         id: 1,
//         name: '123',
//         recValue: 45.9,
//         attackVectorValue:{
//             av1: 58.5,
//             av2: 34.2,
//             av3: 55.9,
//             av4: 0,
//             av5: 88.9,
//             av6: 24,
//             av7: 32.6
//         }        
//     },
//     {
//         id: 2,
//         name: '456',
//         recValue: 45.9,
//         attackVectorValue:{
//             av1: 48.5,
//             av2: 34.2,
//             av3: 65.9,
//             av4: 67.2,
//             av5: 8.9,
//             av6: 0,
//             av7: 52.6
//         }        
//     },
//     {
//         id:3,
//         name: '674',
//         recValue: 45.9,
//         attackVectorValue:{
//             av1: 52.5,
//             av2: 34.2,
//             av3: 65.9,
//             av4: 67.2,
//             av5: 8.9,
//             av6: 0,
//             av7: 52.6
//         }        
//     }
// ]

// function iterateCompany() {
//    company.map((item) =>{
//        var atck = item.attackVectorValue;
//        var atckValues = Object.values(atck)
//        var max = Math.max(...atckValues);
//        var id = item.id;
//        console.log(id + ':' + max);
//    })
// }

// iterateCompany();

$('.check').on('change', function(){
    let dataVal = $(this).attr('data-val');
    $('.graph-inner').find(`.${dataVal}`).fadeToggle();
})