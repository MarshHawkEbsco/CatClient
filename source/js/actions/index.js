import { constants } from '../constants/actionTypes.js'

export const importMarcFile = (binaryString) => ({
    type: constants.IMPORT_MARC_FILE,
    payload: binaryString
});