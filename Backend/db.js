const mongoose = require('mongoose')
const mongoURI = "mongodb://<username>:<password>ac-0logltd-shard-00-00.ddlgs4o.mongodb.net:27017,ac-0logltd-shard-00-01.ddlgs4o.mongodb.net:27017,ac-0logltd-shard-00-02.ddlgs4o.mongodb.net:27017/gofood?ssl=true&replicaSet=atlas-i05ph8-shard-0&authSource=admin&retryWrites=true&w=majority";
module.exports = async function () {
  try {
      await mongoose.connect(mongoURI, { useNewUrlParser: true });
      console.log("connected to mongo");

      const foodCollection = await mongoose.connection.db.collection("food_items");
      global.foodData = await foodCollection.find({}).toArray();
      // console.log(global.foodData);

      const categoryCollection = await mongoose.connection.db.collection("food_category");
      global.foodCategory = await categoryCollection.find({}).toArray();
      // console.log(foodCategory);
      
      return [global.foodData, global.foodCategory];
  } 
  catch (err) {
      console.log("---" + err);
      throw err;
  }
};
