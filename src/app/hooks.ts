import React from 'react'
import database from '../plugins/database/database'
import { Database } from '../plugins/database/types'

const useDatabase = () => {
  const key = 'RE-database'
  const [value, setValue] = React.useState<Database>(() => {
    const cache = localStorage.getItem(key)
    return cache ? JSON.parse(cache) : database
  })

  const setDatabase = (value: Database) => {
    localStorage.setItem(key, JSON.stringify(value))
    setValue(value)
  }

  return [value, setDatabase] as [Database, (value: Database) => void]
}

export default {
  useDatabase,
}
