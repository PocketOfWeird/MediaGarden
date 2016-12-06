import config from './config'
import io from 'socket.io-client'


const socket = io.connect(config.url)
export default socket
