# Lumberyard

## Tests

```
mocha
```

## .env

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
MOFO_STAFF_EMAIL=
INCOMING_QUEUE_NAME=
AWS_QUEUE_REGION=

WEBMAKER_URL=

SPREADSHEET_KEY=
GOOGLE_USERNAME= (any valid google username/email, required for tests to pass)
GOOGLE_PASSWORD= (any valid password, required for tests to pass)

## Workers

### Mailer

This worker allows you to send HTML emails to any number of recipients.

#### Notification message

Event type: 'mailer'

Data:

'From' should be a string of the form `Full Name <email@something.com>` or `email@something.com`. 'To' can be an array or a string.

```js
{
  from: 'help@webmaker.org',
  to: ['email1@blda23ah.com', 'email2@asd23dasdas.com'],
  subject: 'A subject for the email',
  html: '<h1>This is the email body</h1><p>lorem ipsum...</p>'
}
```

Test command:

```shell
aws sqs send-message --queue-url  https://sqs.us-east-1.amazonaws.com/<<QUEUE NAME>> --message-body '{"event_type":"mailer","data":{"from":"help@webmaker.org","to":["<<YOUREMAIL>>"],"subject":"A subject for the email","html":"<h1>This is the email body</h1><p>lorem ipsum...</p>"}}'
```

### Suggest Featured Resources

This worker allows you to send HTML emails to any number of recipients.

#### Notification message

Event type: 'suggested_featured_resource'

Data:

```js
{
  from: 'help@webmaker.org',
  to: ['email1@blda23ah.com', 'email2@asd23dasdas.com'],
  subject: 'A subject for the email',
  html: '<h1>This is the email body</h1><p>lorem ipsum...</p>'
}
```

Test command:

```shell
aws sqs send-message --queue-url  https://sqs.us-east-1.amazonaws.com/<<QUEUE NAME>> --message-body '{"event_type":"mailer","data":{"from":"help@webmaker.org","to":["<<YOUREMAIL>>"],"subject":"A subject for the email","html":"<h1>This is the email body</h1><p>lorem ipsum...</p>"}}'
```
