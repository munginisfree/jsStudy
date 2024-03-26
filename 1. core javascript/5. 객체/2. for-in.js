var phone = {
    company: `삼성`,
    colour: `pearl white`,
    model: `galaxy s24 ultra`,
    price: 1200000,
};

// return keys not the values
for (var data in phone){
    console.log(data);
    console.log(phone[data]);
}

// cheeck object property
// add new property to phone
console.log(`memory` in phone);

var newkey = `memory`;
if(!(newkey in phone)){
    phone[newkey] = `32GB`;
}