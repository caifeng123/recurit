import {useState} from 'react'

import {jsonp} from '../api/ajax'

export const useSelector = (init) =>{
  const [state, _setstate] = useState(init)
  const setstate = (change) =>{
    _setstate({
      ...state,...change
    })
  }
  return [state,setstate]
}

export const post = (id,ctmid,jobid) =>{
  jsonp('https://i.51job.com/delivery/platform/delivery_api.php?jobid=' +id, 'jobCallback')
    .then(res => {
      console.log(res,id)
      let status = res.status;
      if (status === "1") {
        let status2 = res.result[id].status;
        
        if (status2 === "-103" || status === "-102" || status === "-2") {
          if (status2 === "-103") {
            // 校招特殊逻辑
            window.location.href = 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid='+ctmid+'&jobid='+ id 
          } else {
            window.location.href = res.result[id].result;
          }
        }
        if (status2 === "-101") {
          alert("7天内请勿重复投递");
        }
        if (status2 === "-100") {
          alert("职位已经过期");
        }
        if (status2 === "1") {
          alert("投递成功!");
        }
      }
      if (status === "-2") {
        alert("您未登录，请登录后返回")
        window.location.href = "https://i.51job.com/resume/tri_resume.php";

      }
      if (status === "-5") {
        alert("您的账号中无简历，请先填写简历")
        window.location.href = "https://i.51job.com/resume/tri_resume.php";
      }
    })
}