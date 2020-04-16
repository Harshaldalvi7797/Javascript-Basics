function bl(repository) {
  let repositoryObj = repository;
  this.demo = function() {
    try {
      console.log("bussiness logic");
      repositoryObj.onDemo();
    } catch (ex) {
      throw ex;
    }
  };
}
