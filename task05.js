function areaOfTriangle(num1, num2, num3){
    let s = (num1 + num2 + num3) / 2;
    let area = Math.sqrt(s * (s - num1) * (s - num2) * (s - num3));
    return area;
}
