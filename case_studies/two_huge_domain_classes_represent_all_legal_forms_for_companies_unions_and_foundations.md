# Two huge domain classes represent all legal forms for companies, unions and foundations
Author: Sven

## Name of the example: 
Flattening the Hierarchy

## Description: 
A SaaS provider offered insurances, law firms and banks information about all kinds of legal forms and their current and previous owners. The domain is quite complex, e.g. you have all sorts of public and private companies, unions, associations, shipping lines and foundations. The documentation of the chamber of commerce of the (small) country the SaaS provider operated, listed in 2015 overall 46 types of legal forms. Each legal form has its own properties, but there’s of course also a quite complex inheritance hierarchy, they all have a begin date and founders, but only some have the properties of companies, public or private, and so on. Depending on the legal form, the SaaS offered certain views and actions on those data, e.g. a detailed page on a public company shows a lot of data, because those types of companies are forced in a very structured way to report on their financial year. A details page of a one business does not show those data, because the data set it needs to provide is not as rich as with a public company.

Although the real world domain model was quite rich, the implemented domain model had only two classes: Fulladdress2 and AddtionalData. Both classes had more than 100 attributes each and the logic across the code base resulted in crazy if-else battles. If a certain attribute of the Fulladdress2 class was “7” and another one was “N”, you knew that the legal form was a private foundation and you could look up the specific fields in FullAddress2 for private foundations and show them.

Despite this, the software worked quite well and we delivered and deployed continuously. But it took a long time for new developers to onboard and understand the system. We had to create an extremely rich set of (integration) tests to make sure that the system kept stable, especially after a very expensive bug in the billing system. 

## What is the system’s background?
* Spring, ElasticSearch, EC2, MySQL, JPA
* SaaS in a relative small country in Europe
* Small and highly effective and efficient company
* Software is the business, not a cost center.
* Basically all software developers (who also operated the system) were external developers. 

## What was the good idea?
The chamber of commerce of that country offered at that time (2015) only one way to get data from newly registered legal forms: an export of their rich data model to a flat CSV file. The SaaS provider got every week one of those files and, for some reason, it looked obvious to the original developers to just read that CSV into one gigantic table. However, MySQL has row size limits and therefore a line in a CSV file required to be split into two tables. It also makes communication with the chamber of commerce easier. If you have a problem or question with the data, you can easily pinpoint it and start communication. Finally, this very specific knowledge of a brittle code base makes the external developer who is around for a long time to a valuable resource who can do whatever he wants without fearing consequences. 

## What were the bad consequences, why was everything bad?
* Code was basically impossible to understand without 12 months of experience in the codebase
* Changes took way longer than necessary.
* Brittle code. Lots of (integration)  tests needed to be written to savely deploy into production or before you can do even little improvements to the structure
* Some developers had too much power in the organisation because of their very specific knowledge

## Which patterns were encountered?
[Domain allergy](../patterns/domain_allergy.md) - although there was an incredible amount of tacit domain knowledge, nobody cared about explicitely creating a domain model 
Detail exposure - the two domain classes were spread across the code. Whoever wanted to do something, analysing data, fraud detection, indexing a search engine, calculate costs, etc. required extrem detailed knowledge about the generic model
[Under modularization](../patterns/under_modularization.md) - the system had almost a good modularization, but: the only problem was that all those nice modules shared the two domain classes, their database access and several core utilities. This core grew and grew with every new functionality and eventually it became the largest part of the system. 

## How was the situation resolved?
First and foremost we had to convince the lead developer, who created the domain model, that it wasn’t a good idea. He really and honestly made the impression that he thought it is a good idea. Then we introduced specific models piece by piece and created an anti-corruption layer to the storage. Eventually, but I left the project too early, the plan was to strangulate the whole application. The database was still two classes, but the rest of the application used proper domain models. When this is done, we can start refactoring the database and getting rid of the anti-corruption layer. However, it was still a good idea to import the CSV into a existing structure of two classes (see “what was the good idea”), but in a second step, the data had to be transformed in proper domain classes.

