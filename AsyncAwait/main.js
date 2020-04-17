function demo() {
  //private method

  let demo1 = async function() {
    try {
      return await new Promise(resolve => {
        //operation
        let value = 10;
        return resolve(value);
      });
    } catch (ex) {
      throw ex;
    }
  };

  let demo2 = async function(numValue) {
    try {
      return await new Promise(resolve => {
        //operation
        let result = numValue * 12;

        return resolve(result);
      });
    } catch (ex) {
      throw ex;
    }
  };

  let demo3 = async function(numValue) {
    try {
      return await new Promise(resolve => {
        let result = numValue * 12;
        return resolve(result);
      });
    } catch (ex) {
      throw ex;
    }
  };

  this.demo4 = async function() {
    try {
      return await new Promise(async resolve => {
        let result1 = await demo1();
        let result2 = await demo2(result1);
        let result3 = await demo3(result2);

        return resolve(result3);
      });
    } catch (ex) {
      console.log(ex.message);
      console.log(ex.stack);
    }
  };
}

function onSubmitClickButtonEvent() {
  let demoObj = new demo();

  demoObj.demo4().then(resolve => {
    console.log(resolve);
  });
}
