export const postUser = user => (
  $.ajax({
    url:'/api/users',
    method: 'post',
    data: {user}
  })
)