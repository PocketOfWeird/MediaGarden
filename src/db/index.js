import io from 'socket.io-client'
import settings from '../../.config/settings'


const socket = io.connect(settings.url)
export default socket
