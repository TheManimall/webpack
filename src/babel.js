async function start() {
  return await Promise.resolve('Bla bla bla bla async is working')
}

start().then(console.log)