import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDB = async () => {
    
      mongoose
      .connect(`${process.env.URI}`)
      .then("Conectado ao MongoDB com sucesso")
      .catch(console.error("Erro ao conectar ao MongoDB"))
}
  
  export default connectDB;