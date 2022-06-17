import { expect } from 'chai'
import * as sinon from 'sinon'

import messageModule from '../../src/message'

describe('index.ts 테스트', () => {
  describe('getMessage 메소드', () => {
    let spy: sinon.SinonSpy | null = null
    const MESSAGE = '숫자 야구 😊😊'

    beforeEach(() => {
      if (spy !== null) {
        throw new Error('invalid sinon spy: failed to restore')
      }
      spy = sinon.spy(messageModule, 'get')
    })
    afterEach(() => {
      if (spy === null) {
        throw new Error('invalid sinon spy: failed to setup')
      }
      spy.restore()
      spy = null
    })

    it(`결과값은 ${MESSAGE} 이다`, () => {
      if (spy === null) {
        throw new Error('invalid sinon spy: null')
      }
      const result = messageModule.get()
      expect(spy.calledOnce).to.be.equal(true)
      expect(result).to.be.equal(MESSAGE)
    })
  })
})
