import moment from 'moment'

export const DATE = 'YYYY-MM-DD'
export const TIME = 'hh:mm:ss'
export const DATE_TIME = `${DATE} ${TIME}`

export const dateTime = (inp?: moment.MomentInput) => moment(inp).format(DATE_TIME)

export const date = (inp?: moment.MomentInput) => moment(inp).format(DATE)

export const time = (inp?: moment.MomentInput) => moment(inp).format(TIME)
