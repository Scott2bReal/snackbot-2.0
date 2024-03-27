import * as user from "./user"
import * as events from "./events"
import * as response from "./response"

const schema = {
  ...user,
  ...events,
  ...response,
}

export default schema
