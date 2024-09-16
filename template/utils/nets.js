const os = require('os')

function availableNetworks() {
  const networkInterfaces = os.networkInterfaces()
  const networkAddresses = [] 
  for (const networkInterface of Object.keys(networkInterfaces)) {
    for (const interface of networkInterfaces[networkInterface]) {
      if (interface.family == 'IPv4'){
        networkAddresses.push(interface.address)
      }
    }
  }
  return networkAddresses
}

function showAvailableNetworks(PORT) {
  for (const avnetwork of availableNetworks()) {
    console.log(`http://${avnetwork}:${PORT}/`)
  }
}

module.exports = { availableNetworks, showAvailableNetworks }
