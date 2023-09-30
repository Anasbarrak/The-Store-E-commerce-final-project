const mongoose = require ("mongoose");
const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://BarrakMohamedAnas:gwtDtVm1e2h3zdur@cluster0.wpcn6wa.mongodb.net/?retryWrites=true&w=majority"
    )
    console.log('Database is connected');
  } catch (error) {
    console.log('Databae is not connected',error)
  }
};
module.exports= connectDatabase