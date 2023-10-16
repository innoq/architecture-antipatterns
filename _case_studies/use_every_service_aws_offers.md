---
title: Use every service AWS offers
authors: Sven
done: false
excerpt_separator: <!--more-->
layout: study
---
A data analytics platform - within a larger system - used basically every single AWS service which is available.<!--more--> When a senior developer from another team saw the architecture the first time, his initial question was: “is there any AWS service you are not using?”.

## What is the system’s background?
* All sorts of AWS services to receive, process, store and serve data to clients, e.g. Lambda, API Gateway, S3, Glacier, RDS, Kinesis, Step Functions, Cloud Watch and more. No single part of the system was not an AWS service. 
* Python was used to develop the AWS Lambda functions
* The other, much bigger part of the system, let's call it "webshop", was running on a totally different technology stack: Java/Go/JavaScript on Elastic Kubernetes Service, used another AWS account and also different tools for observability

## What was the good idea?
* The developers had a lot of experience with most of the used AWS technologies
* They had their own AWS account, which let them move fast instead of waiting for the webshops infrastructure team provisioning everything they required to get started.

## What were the bad consequences, why was everything bad?
* The data analytics team could write new services and functionalities fast, but they couldn't get any support for other concerns like security, operations, infrastructure and more, because the people who provided this knowledge focused on the architecture and technology stack all teams of the webshop were using. The data team needed to learn everything by themselves, which cost a lot of time. As a consequence, they abandoned some of those topics and focused on development only, which led to low quality and increased security risks
* They used AWS Lambda also for serving customer recommendations, which got roughly 800 requests per second at peak usage time and 200 req/sec during low usage time. This worked, but it was unnecessary expensive on the AWS invoice.
* The integration with the webshop was painful. Every webshop team followed certain patterns except the data team. Everyone working on architectural concerns always had to think about two approaches, which is unnecessary expensive.

## Which patterns were encountered?
* [Emotional Misattachment](../patterns/emotional_misattachment.html)

## How was the situation resolved?
* The recommendation engine had to be rewritten using the technology stack and architecture of the webshop
* The rest of the data analytics platform remained, not resolving the problems.
