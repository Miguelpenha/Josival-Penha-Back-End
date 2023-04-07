import IMatters, { IMatter } from '../../../types/student/matters'

const defaultMatterSchema: IMatter = {
    first: null,
    third: null,
    fourth: null,
    second: null
}

const defaultMatters: IMatters = {
    math: defaultMatterSchema,
    arts: defaultMatterSchema,
    history: defaultMatterSchema,
    english: defaultMatterSchema,
    science: defaultMatterSchema,
    religion: defaultMatterSchema,
    geography: defaultMatterSchema,
    portuguese: defaultMatterSchema,
    physicalEducation: defaultMatterSchema
}

export default defaultMatters