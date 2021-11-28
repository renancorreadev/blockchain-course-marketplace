const NETWORK_ID = process.env.NEXT_PUBLIC_NETWORK_ID

export const loadContract = async (name, web3) => {
  const res = await fetch(`./contracts/${name}.json`)
  const Artifact = await res.json()

  let contract = null

  try {
    contract = new web3.eth.Contract(
      Artifact.abi,
      '0xFd85B304Fc8541c73dA802f46911eb2730572e7e',
    )
    console.log('sucess! ')
  } catch {
    console.log(`Contract ${name} cannot be loaded`)
  }

  return contract
}

// export const loadContract = async (name, provider) => {
//   const res = await fetch(`/contracts/${name}.json`)
//   const Artifact = await res.json()

//   const _contract = window.TruffleContract(Artifact)
//   _contract.setProvider(provider)

//   let deployedContract = null
//   try {
//     deployedContract = await _contract.deployed()
//   } catch {
//     console.log(`Contract ${name} cannot be loaded`)
//   }

//   return deployedContract
// }
