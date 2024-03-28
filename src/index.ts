import { server } from "./server/Server";

server.listen(process.env.PORT || 5050,()=> console.log(`${process.env.PORT || 3333}`)
)