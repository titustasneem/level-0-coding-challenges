function areaOfTriangle(num1, num2, num3){
    var s = (num1 + num2 + num3) / 2;
    var area = Math.sqrt(s * (s - num1) * (s - num2) * (s - num3));
    return area;
}
var area = areaOfTriangle(3, 4, 5);
console.log(area);