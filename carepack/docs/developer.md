#API Documentation
APIs available with CarePack.

## Introduction
Each API is available with an auth token. API is served from the same data center, at this point no support for third party.

## Authentication
Local

## Accounts
### /user

## Verifications
Provide verification with NIST LOA3, [Doximity](http://developer.doximity.com/profile.html), [E-Prescription](http://www.deadiversion.usdoj.gov/21cfr/cfr/1311/subpart_c100.htm#105), [Medicare/Medicaid](http://www.jointcommission.org/assets/1/18/20110705_LTC_Credentialing.pdf)

## Messaging
### GET /messages
### POST /messages

## Fax
### POST /fax/send 
Enables sending a fax message to a number.

## SMS TextMessaging
This set of APIs enable an application to send SMS text messages to end user.

## Notifications
Enable app notifications. If the App is not installed the initial notification is via E-Mail or SMS. End Users get capability to control where they want notifications (SMS/ E-mail).

## Directory
Directory of users which the app user can communicate with. Provide a CSV as well are LDIF compatible with HPDPlus Schema.

## WebHooks
Endpoints which enable services to asynchronously report on activities.