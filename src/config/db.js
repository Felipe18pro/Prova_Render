import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDB = async () => {
    
      mongoose
      .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.PASSWORD}@${process.env.CLUSTER_ADDRESS}/${process.env.DB_NAME}`)
      .then("Conectado ao MongoDB com sucesso")
      .catch(console.error("Erro ao conectar ao MongoDB"))
}
  
  export default connectDB;