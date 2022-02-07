function areaOfTriangle(num1, num2, num3)
{
    const s = (num1 + num2 + num3) / 2;
    const area = Math.sqrt(s * (s - num1) * (s - num2) * (s - num3));
    return area;
}
