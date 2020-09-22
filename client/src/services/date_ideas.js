import api from "./api-config"

export const getAllDateIdeas = async () => {
  const resp = await api.get("/date_ideas")
  return resp.data
}

export const getOneDateIdea = async (id) => {
  const resp = await api.get(`/date_ideas/${id}`)
  return resp.data
}

export const putDateIdea = async (id, formData) => {
  const resp = await api.put(`/date_ideas/${id}`, formData)
  return resp.data
}

export const postDateIdea = async (formData) => {
  const resp = await api.post("/date_ideas", formData)
  return resp.data
}

export const deleteDateIdea = async (id) => {
  const resp = await api.delete(`/date_ideas/${id}`)
  return resp.data
}

export const getAllUsers = async () => {
  const resp = await api.get("/users")
  return resp.data
}

export const addReview = async (formData) => {
  const resp = await api.post(`/reviews`, formData);
  return resp.data;
}
