import { expect } from 'chai'
import { importMarcFile } from '../actions/index.js'
import { constants } from '../constants/actionTypes.js'

describe('Actions', () => {
    describe('importMarcFile', () => {
        it('will return an action object with a defined type', () => {
            expect(importMarcFile('binaryString').type).to.not.eql(undefined)
        })

        it(`will return an action object of type ${constants.IMPORT_MARC_FILE}`, () => {
            expect(importMarcFile('binaryString').type).to.eql(constants.IMPORT_MARC_FILE)
        })

        it('will return binary string payload', () => {
            expect(importMarcFile('binaryString').payload).to.deep.eql('binaryString')
        })
    })

})