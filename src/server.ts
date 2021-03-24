import './util/module-alias'
import app from "./app"

let port = process.env.PORT || 3333

app.listen(port)