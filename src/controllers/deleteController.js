import activityService from "../services/ActivityService.js";

const remove = async (req, res) => {
  const activityId = req.params.id;
  const userId = req.userId;

  try {
    const activity = await activityService.deleteActivity(activityId, userId);
    res.status(200).json({ message: "Attività eliminata con successo" });
  } catch (error) {
    res.status(error.status).json({ message: error.message, code: error.code });
  }
};

export default remove;
