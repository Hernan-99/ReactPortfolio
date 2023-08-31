import app from "./app.js";
import { PORT } from "./settings.js";

app.listen(PORT);
console.log(`App corriendo en el puerto ${PORT}`);
