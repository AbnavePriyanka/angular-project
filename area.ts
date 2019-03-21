function Area(radious, PI)
{
  var area;
  if (PI == undefined)
  {
   PI = 3.14;
  }
  area = radious * radious * PI;
  return area;
}
var iret;
iret = Area(5);
console.log("area is" + iret);
