const error =
{
  path: '/:catchAll(.*)*',
  component: () =>
  import ('pages/ErrorNotFound.vue')
}

export default error


