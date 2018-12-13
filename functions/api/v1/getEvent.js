const { exportEventData } = require('../../firestore/exports')

module.exports = async (req, res) => {
  const { state } = req.query

  try {
    const eventExport = await exportEventData(
      res.locals.event,
      null,
      { state },
      {
        event: ['name', 'categories', 'formats'],
        proposal: [
          'title',
          'state',
          'level',
          'abstract',
          'categories',
          'formats',
          'speakers',
          'comments',
        ],
        speaker: ['uid', 'displayName', 'bio', 'company', 'photoURL', 'twitter', 'github'],
      },
    )

    res.send(eventExport)
  } catch (error) {
    console.error(error) // eslint-disable-line no-console
    res.status(500).end()
  }
}
