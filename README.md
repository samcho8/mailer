# mailer
Initial Setup: 
download this application, run it using npm start. If you are already using PORT 5000 on your localhost, feel free to change the PORT variable to an available port.

Requesting Data:
  If PORT is unchanged, send a POST request to localhost:5000/send-mail with the following JSON body data. 
  
  from: Name <email>
  
  to: Destination email
  
  subject: title of email
  
  text: body of email
  
  htmlOptional: Optionally, embed text in html.
  
  scheduledDate: Date you want the email to be sent in. You want this to be in the UTC timezone, and in this following format: YYYY-MM-DD'T'H:M:S'Z',
  with YYYY being the year, MM being the month, DD being the day, H being hours, M being minutes, and S being seconds. 
  letters in quotes are to be sent literally without the quotes. Sample date to be sent. If you wanted to send an email at November 3rd, at midnight on UTC,
  this would be 2022-11-03T00:00:00Z.
  
  An example call:
  
  POST localhost:5000/send-mail.
  Body: 
  {
    "from": "Sung Cho <chosung@oregonstate.edu>",
    "to": "samcho8@gmail.com",
    "subject": "Example Call to my microservice",
    "text": "This is the body of the POST request"
  }
Receiving the data:
  You will receive a message back from the server telling you that it sent an email from the source to the destination email.
  Wait until the date that you specified to get the email from the mailer.

![image](https://user-images.githubusercontent.com/86897611/199165274-ca88bd77-51e4-4bb6-92ce-dde786cc1c84.png)

