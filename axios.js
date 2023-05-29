//test
let worksData = []
let pagesData = {}

const data = {
  type: '',
  sort: 0,
  page: 1,
  search: '',
}
function getData({ type, sort, page, search }){
  const apiPath = `${apiPath}/api/v1/works?sort=${sort}&page=${page}&${type ? `type=${type}&` : ''}${search ? `search=${search}` : ''}`;

  axios.get(apiPath)
  .then((response)=>{
    console.log(response)
   })
}