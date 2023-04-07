import { Request, Response } from 'express'
import studentsModel from '../../../models/student'
import mongoose from 'mongoose'
import messageReportCard from './messageReportCard'

interface IParams {
    to: string
}

interface IQuery {
    unit: number
}

async function reportCard(req: Request<IParams, {}, {}, IQuery>, res: Response) {
    const { to } = req.params
    const { unit } = req.query

    if (to && unit) {
        if (to === 'all') {
            const students = await studentsModel.find().select('+matters')
    
            students.map(async student => {
                await messageReportCard(Number(student.telephone.replace('+', '').replace('(', '').replace(')', '').replace('-', '').replace(/\s/g, '')), {
                    unit,
                    urlBankSlip: '#',
                    student: student.name,
                    gender: student.gender as any,
                    grades: student.matters as any,
                    responsible: student.responsible1,
                    image: 'https://i.ibb.co/J37M6PD/NOTAS.png'
                })
            })

            res.json({ send: true })
        } else {
            if (mongoose.isValidObjectId(to)) {
                const student = await studentsModel.findById(to).select('+matters')
    
                if (student) {
                    await messageReportCard(Number(student.telephone.replace('(', '').replace(')', '').replace('-', '').replace(/\s/g, '')), {
                        unit,
                        urlBankSlip: '#',
                        student: student.name,
                        gender: student.gender as any,
                        grades: student.matters as any,
                        responsible: student.responsible1,
                        image: 'https://i.ibb.co/J37M6PD/NOTAS.png'
                    })

                    res.json({ send: true })
                } else {
                    res.json({ invalid: true })
                }
            } else {
                res.json({ invalid: true })
            }
        }
    } else {
        res.json({ invalid: true })
    }
}

export default reportCard