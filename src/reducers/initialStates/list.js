// @flow
export const initialState: {
  isFetching: boolean,
  hasFailed: boolean,
  hasSuccess: boolean,
  items: Array<null>,
} = {
  isFetching: false,
  hasFailed: false,
  hasSuccess: false,
  items: [],
}
