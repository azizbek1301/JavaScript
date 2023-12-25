let email='        ali@gmail.com      ';
let result=email.lastIndexOf('m');

console.log(result);

// slices

let result1=email.slice(email.indexOf('a'),email.lastIndexOf('m'));
console.log(result1);

// substr()

let result2=email.substr(3,10).length;
console.log(result2);

// replace

let result3=email.replace('a','v');
console.log(result3);


// charAt()- birinchi harakaterni olib beradi

let result4=email.charAt()
console.log(result4);

// trim()

let result5=email.trim();
console.log(email);
console.log(email.trimEnd());
console.log(email.trimStart());
console.log(result5);

// splite

let result6=email.split('');

console.log(result6);

