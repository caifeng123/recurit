/**
 * 包含了所有接口请求的函数
 */
import ajax from './ajax'

const defaultSelector = {
  project_id:134,
  pageindex:1
}
export const getJobList = (selector) =>ajax('https://evp.51job.com/51job/api/1.0/index.php/yun/index/getjob',{...defaultSelector,...selector})
export const getCompanyList = (selector) =>ajax('http://evp.51job.com/51job/api/1.0/index.php/yun/index/getcompany',{...defaultSelector,...selector})