export const getAllStories = function (req, res) {
  return res.status(200).json({
    message: "fetch your stories here"
  })
}

export const getStoryById = function (req, res) {
  console.log(req.params.id)
  return res.status(200).json({
    message: "fetch a story by id here"
  })
}

export const getStoryByEmail = function (req, res) {
  console.log(req.params.email)
  return res.status(200).json({
    message: "fetch a story by email here"
  })
}