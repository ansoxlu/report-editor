import useLocalStorage from 'react-use-localstorage'
import database from '../plugins/database/database'
import { Database } from '../plugins/database/types'

const useAppDatabase = () => {
  const [value, setValue] = useLocalStorage('RE-database', JSON.stringify(database))

  const setDatabase = (value: Database) => {
    setValue(JSON.stringify(value))
  }

  return [JSON.parse(value), setDatabase] as [Database, (value: Database) => void]
}

export default {
  useDatabase: useAppDatabase,
}
