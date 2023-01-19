export interface IData<RowDataType=object> {
    name: string
    row: (data: RowDataType) => any
}