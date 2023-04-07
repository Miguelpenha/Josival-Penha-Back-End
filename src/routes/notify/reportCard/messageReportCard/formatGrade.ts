function formatGrade(gradeRaw: number | string) {
    const grade = Number(gradeRaw).toFixed(2).replace('.', ',')

    return typeof gradeRaw === 'string' ? ' ' : grade
}

export default formatGrade