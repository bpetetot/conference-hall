module.exports = (event, talk, url) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Talk confirmed by speaker</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0 " />
</head>
<body>
  <p>👌 The talk <strong>"${talk.title}"</strong> has been confirmed by speaker for <strong>${event.name}</strong></p>
  <p>
  <strong><a href="${url}/organizer/event/${event.id}/proposal/${talk.id}">Check it here!</a></strong>
  </p>
  <p>
  – <i>Conference Hall</i>
  </p>
  </body>
</html>
`
