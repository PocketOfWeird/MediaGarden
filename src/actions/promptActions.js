export const SET_PROMPT = 'SET_PROMPT'
export const CLEAR_PROMPT = 'CLEAR_PROMPT'

export const setPrompt = prompt => ({
  type: SET_PROMPT,
  payload: prompt
})

export const clearPrompt = () => ({
  type: CLEAR_PROMPT
})
