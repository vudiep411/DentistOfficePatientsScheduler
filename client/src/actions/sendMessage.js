import * as api from '../API'

export const sendText = async (data) => {
    const { log } = await api.sendText(data)
    console.log(log)
}