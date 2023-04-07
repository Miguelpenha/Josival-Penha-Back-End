import { IData } from '../../services/generateSpreadsheetService/type'

export interface ISpreadsheet {
    name: string
    data: IData[]
    value: object[]
    nameFile: string
}