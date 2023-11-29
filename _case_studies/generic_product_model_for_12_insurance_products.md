---
title: Generic Product model for 12 insurance products
authors: Felix
done: true
excerpt_separator: <!--more-->
layout: study
---
When developing a replacement for an old insurance system based on COBOL and hierarchical databases, a decision was made to use a generic product modeling system.<!--more-->

## What is the system’s background?
The background was an insurance company that had for a long time developed and operated a system to calculate, sell and maintain insurances in COBOL with a 32*70 terminal frontend with great success.
Since the technologies were getting more and more outdated, in the early 2000s the company decided to redevelop the system. The planned technology stack was a Java and XSLT based frontend calling a COBOL backend with a DB2 database.
The COBOL backend was supposed to have all decisions in it, the principle was "no business logic in Java". Since all business logic should be based on a business decisions, the COBOL backend should call a generic insurance product modelling system for all decisions.

## What was the good idea?
The supposedly good idea was to create a generic frontend and data model, completely managed by the product modelling system. Every decision and calculation should be done by the product model, so that the business people could change everything in the product model. If a new generation of an insurance tariff should be released, everything neccessary would just be modeled by the business and the new version of the model would just work, so the IT would not need to change anything. This principle would be followed through to the end: even decisions if a textbox should be visible or editable would be made by the business model.

## What were the bad consequences, why was everything bad?
There were many problems caused by this idea, from which the following were just the biggest:

The biggest problem was the idea that for a new product or tariff only the business model would need to be changed. This principle simply did not hold. For example when a new tariff or product should be released, and it required a new checkbox (for example if the new tariff for dog owner liability insurance needed to know if the dog is a fighting dog), this checkbox could not just be generated in the business model but to enable the business model to make it visible or editable, the checkbox needed to be created in the frontend, too. 

But it did not stop there, the checkbox also had to be created in the database to be able to store its value. The organization of the project was split into different teams, the product modeling team, the team working on the Java frontend, the team working on the COBOL backend, a separate team working on the mapping between COBOL backend and the business model and finally a team working on the database. Since every team had to change its software to just add one new checkbox, there was a massive communication overhead for every simple task.

The strategic decision that every bit of business logic needed to be handled by the product model, made the rountrip time for requests epic. If a sales person using the application wanted to add the dog owner liability component to the normal liability insurance in a sales conversation, the Java frontend would serialize the complete state of the sales conversation to XML, just changing the value of the checkbox for dog liability insurance. This XML structure was then send to the COBOL backend, parsed, then mapped to the data structure necessary to talk to the busines model. The business model would than evaluate the data structure handed over by the COBOL backend and would then set the value for the "fighting dog checkbox" to visible. This would be returned to the COBOL backend which would then map the business model back to XML and send it to the Java frontend, where the XML would be parsed and then the checkbox would show.


## What happened, was there a turning or tipping point?
The project was finally cancelled after more than 5 years of development in which 3 of the 12 planned products were finished. The running applications using this technical stack ran into massive performance problems due to the roundtrip time but also due to high CPU demand in the COBOL backend. (Mainframe CPUs are rented and high peaks such as at the end of the year when many people switch insurances can use up more CPU cycles than rented. Using more CPU cycles than the rented limit results in very high overdraft costs.)

## How was the situation resolved?
After the project was cancelled, a new project was started to do the same but with a lot of lessons learned from the old project. First of all the strategic rule of "all business logic has to be implemented in COBOL" was cancelled. The business model was reduced, so it only modelled the product structure and price calculation. This resulted in calling the product model a lot less during a sales conversation. The choice which checkboxes needed to be editable or shown was made in the Java frontend. The Java frontend communicated directly with the database. The COBOL backend was only called to talk to the business model and to transfer sold offers to the inventory system. Also the project team was one team, sitting in 3 rooms in proximity to each over, with people from all "old" teams from the previous project. The project was a success.

## Which patterns were encountered?
* [Misapplied Genericity](../patterns/misapplied_genericity.html)
* [Overengineering](../patterns/over_engineering.html)
