import express from "express"
import vehicleRouter from "./routers/vehicleRouter.js";
import maintenanceRouter from "./routers/maintenanceRouter.js";
import workshopRouter from "./routers/workshopRouter.js";
import connectDB from "./config/db.js";

connectDB()

const app = express()
app.use(express.json())
app.use('/Vehicle', vehicleRouter)
app.use('/Maintenance', maintenanceRouter)
app.use('/Workshop', workshopRouter)

const port = 3000

app.listen(port ,() => console.log(`servidor rodando na porta 3000`))

