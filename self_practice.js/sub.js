const subsetArray = (function() {
    return {
      getResult: getResult
    }
  
    function getResult(array, n) {
  
      function isBigEnough(value) {
        return value.length === n;
      }
  
      let ps = [
        []
      ];
      for (let i = 0; i < array.length; i++) {
        for (let j = 0, len = ps.length; j < len; j++) {
          ps.push(ps[j].concat(array[i]));
        }
      }
      return ps.filter(isBigEnough);
    }
  }) ();
  
  
  
   var arr = [1, 2, 3, 4,5,6,7,8,9];
   var arr = [1, 2, 3, 4];
   console.log(subsetArray.getResult(arr,3));