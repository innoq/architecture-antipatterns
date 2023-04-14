---
title: Using a BPMN engine for the store checkout process
authors: Tobias
done: true
excerpt_separator: <!--more-->
layout: study
---
As the existing store checkout system of an international commerce company got more complicated over time, the company's management decided to initiate a project to implement a new system based on modern technologies.<!--more-->

## What is the system’s background?
* mainly Java and TypeScript
* Microservices
* internal customers and users are not located close to each other

## What was the good idea?
Since the old store checkout system had a lot of complex and intransparent processes, the team decided that they wanted to use some technology which provides insight into the running processes. They chose to go for a tool that allowed for graphical process models, to provide this insight into the running processes.
This should help to understand the system and improve the maintainability.
Because they knew a competitor built its online checkout with the same technology, the decision to use an BPMN engine was made. This enabled anyone to define business processes in a visual editor and let the engine execute the underlying data representation. The only programmatic task would be the implementation of the specific BPMN tasks.

## What happened, was there a turning or tipping point?
At the beginning of the project, the first results were delivered really fast. But with an increasing amount of microservices and some requirements, like an automatic logout for active sessions, the development got slower every sprint.
The main reason was that the BPMN engine was not intended to be a session storage or state machine with a lot of circular steps, but the project used it like that. In contrast to that, the competitor, which was used as role model, had a linear checkout process for which a BPMN engine is predestined. 
But even without that knowledge a look at the BPMN diagram that defined the running checkout process showed that this process was messed up. 
Unfortunately all discussions about alternatives to this architecture achieved nothing since some stakeholders were emotionally attached to the idea of using the BPMN engine and defended it against all rational arguments. 

## What were the bad consequences?
The first consequence was that no progress could be made anymore, because most of the features couldn't be implemented within the BPMN engine. Also, most of the time was spent to fix the current process and the data transfer to the client.
Also, one team member left the project, because he didn't see any possibility to have a better - more appropriate to the problem - solution, since the discussions were not based on technical merits but on emotional attachment.

## Which patterns were encountered?
* [Cargo Culting](../patterns/cargo_culting.html)
* [Emotional Misattachment](../patterns/emotional_misattachment.html)
