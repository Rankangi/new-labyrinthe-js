function createQ() {
  var Q = [];
  var L;

  for (var j = 0 ; j<row ; j++){ //
    L = [];

    for (var i = 0 ; i<col ; i++){ //
      L.push([0,0,0,0]);
    }
    Q.push(L);
  }

  return Q;
}

function randint(max) {
  return Math.floor(Math.random()*Math.floor(max));
}

function argMax(array) {
  return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
}
