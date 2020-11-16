import sleep from "../lib/sleep.js"

export default class MusicQuizManager {
  constructor(msg, connection) {
    this.msg = msg
    this.channel = msg?.channel
    this.connection = connection
    this.finish = () => {}
    this.fail = () => {}
  }

  onFinish(func) { this.finish = func; return this }
  onFail(func) { this.fail = func; return this }

  async startQuiz() {
    sleep(10000).then(() => {
      this.channel?.send('waited 10 seconds to start quiz')
      this.finish()
    })
    return this
  }
}