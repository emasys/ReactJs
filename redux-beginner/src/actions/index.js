export function moviesList() {
  return {
    type: 'MOVIES_LIST',
    payload: [
      {
        id: 1,
        name: 'pulp fiction'
      }
    ]
  }
}