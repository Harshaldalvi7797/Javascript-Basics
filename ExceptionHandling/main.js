function ui(bl) {
  let blObj = bl;

  this.demo = function() {
    try {
      blObj.demo();
    } catch (ex) {
      //log maintain
      console.log(ex.message);
      console.log(ex.stack);
    }
  };
}

let reposotoryObj = new repository();

let blObj = new bl(reposotoryObj);

let uiObj = new ui(blObj);
uiObj.demo();
