function randomStr(length) {
  const buffer = []
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const size = characters.length
  for (let i = 0; i < length; i++) {
    buffer.push(characters.charAt(Math.floor(Math.random() * size)))
  }
  return buffer.join('')
}

const data = new Proxy({}, {
  get(target, p, receiver) {
    if (target[p]) {
      return target[p]
    } else {
      target[p] = randomStr(1000)
      return target[p]
    }
  },
})

async function read(path, id) {
  if (data[id]) {
    return data[id]
  } else {
    throw new Error('not found')
  }
}

export {
  read,
}
