const os = require('os')

/**
 * This contains all available ipv4 ip address.
 * @returns {Object[]} netfaces - All ipv4 ip address.
 * */
const ipv4s = () => {
  const netfaces = [] 
  const interfaces = os.networkInterfaces()
  for (const key of Object.keys(interfaces)) {
    for (const interface of interfaces[key]) {
      if (interface.family == 'IPv4'){
        netfaces.push(interface.address)
      }
    }
  }
  return netfaces
}

module.exports = { ipv4s }
