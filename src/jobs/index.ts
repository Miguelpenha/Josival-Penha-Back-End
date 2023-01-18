import { CronJob } from 'cron'
import manageSpreadsheetJob from '../jobs/manageSpreadsheetJob'
import { blueBright as info } from 'chalk'

function jobs() {
    new CronJob('0/15 * * * * *', async () => {
        console.log(info('>> Job manageSpreadsheet is running'))

        await manageSpreadsheetJob()
    }, null, true, process.env.TZ)
}

export default jobs

export {
    manageSpreadsheetJob
}