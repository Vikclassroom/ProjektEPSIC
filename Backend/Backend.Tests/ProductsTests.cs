using Microsoft.VisualStudio.TestTools.UnitTesting;


namespace Backend.Tests
{
    [TestClass]
    class ProductsTests
    {
        [TestInitialize]
        public void TestInit() 
        {
            int id = 3;
        }

        [TestMethod]
        public void GetProduct_AvecId3_RetourneProduct3(int id)
        {
            int result = ProductsController.GetProduct(id);
            Assert.IsNull(result);
        }

        [TestCleanup]
        public void TestClean()
        { 
        
        }
    }
}
