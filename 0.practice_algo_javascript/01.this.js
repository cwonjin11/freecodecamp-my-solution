function doSomething(a){
    console.log(a)
}

doSomething("hi how are you")


const obj = {
    key: "value",
    doSomething: () => {console.log("Funtion in object will be excuted")}
}

doSomething("what am i doing?")
obj.doSomething()


function doSomething1(){
    console.log(this.a);
  }
  var a = 6;
  doSomething1(); 