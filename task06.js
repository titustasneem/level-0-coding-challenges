function maximum(num1, num2, num3)
{
  var max = -999;

  if (num1 > max)
  {
      max = num1;
  }

  if (num2 > max)
  {
      max = num2;
  }

  if (num3 > max)
  {
      max = num3;
  }
  return max;

}

console.log(maximum(12, 354, 8));
console.log(maximum(1011, 19, 8));
console.log(maximum(12, 35, 8000));
console.log(maximum(12, 354, -999));