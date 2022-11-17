export const getAllStories = async function (req, res) {
  try {
    return res.status(200).json({
      status: "success",
      message: "fetch your stories here",
      data: payload,
    })
  } catch (error) {
    return res.status(200).json({
      status: "error",
      error: error.message
    })

  }
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