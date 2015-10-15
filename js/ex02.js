function imply(a,b){

  return a && b || !a
}

var result4 = imply(true,true);
var result5 = imply(true,false);
var result6 = imply(false,true);
var result7 = imply(false,false);
