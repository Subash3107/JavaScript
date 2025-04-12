let amstrong = (a) => {
  let cube=0, last=1;
  for (let i = a; i > 0; i=Math.floor(i/10)) // in js / operator will return decimal value, to remove value we use math.floor(+)
    {last = i % 10;
    cube += (last * last * last);
    }
    if(a==cube){
      console.log(a+" is a amstrong number");

    }
    else{
      console.log(a+" is not a amstrong number");
    }
};
amstrong(153);
