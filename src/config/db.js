import mongoose from "mongoose";

const connectDB = async () => {
    try {
      await mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.PASSWORD}@${process.env.CLUSTER_ADDRESS}/${process.env.DB_NAME}`
      );
      console.log("Conectado ao MongoDB com sucesso");
    } catch (error) {
      console.error("Erro ao conectar ao MongoDB", error);
      process.exit(1);
    }
  };
  
  export default connectDB;