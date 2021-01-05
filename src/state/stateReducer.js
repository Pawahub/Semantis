export const Reducer = (state, action) => {
  switch (action.type) {
    case "open":
      return { ...state, show: action.payload }
    case "close":
      return { ...state, show: false }
    case "changeSection":
      return { ...state, selectedSection: action.payload }
    default:
      throw new Error()
  }
}
