# Super-generic framework in logistics ✅

*Author: Sven*

## Name of the example: 
The one order engine which solves it all

## Description: 
A very large logistics company hired a consultancy which to implement a web shop for buying products of that logistics company. At the heart of the system was a proprietary order engine built with a generic order framework. We reviewed the system and found the following behaviour:
* Everything was an order. If you want to change your address, buy something or change credit card information, you use the Order class, and you configure it. The framework figures out what to do by parsing meta information and bit masks. Based on the bit mask, SQL statements have been assembled.
* The system had only two database tables: transaction and master data. The tables were incredibly huge because they had to keep all kinds of transactions and all kinds of master data. Relations were managed by deep “connect-by-prior” trees in Oracle. Whatever couldn’t be mapped to the table “structure” had been piggybacked in a “data” varchar2 field. The framework knew what to do with the data field by understanding which bit mask required which parsing of that varchar2 field. In many cases, the framework parsed the value to integer, long or arrays of strings.
* There were no unit tests. The consultancy said that “the system is too complex for unit tests”.

It took almost two weeks to set up the developer workstation for developers not using Linux. Linux users could luckily make it in a few days. There were so many scripts to run to get Weblogic up and running with specific “framework plugins” and no one seemed to get it right. There was no documentation, everything was trial and error.

## What is the system’s background?
* It looked like Enterprise Java, but with a lot of specific custom implementations
* Oracle database, Weblogic application server
* Huge organization
* First steps of the organization to sell digital products
* A sister company offered a similar service, but with way lower development costs. That triggered the review.

## What was the good idea?
There was the belief to build a generic order engine which could be reused across many projects of the client and projects with other clients.

## What were the bad consequences, why was everything bad?
Implementing new features took forever. It was hard to understand the code base, but it was even harder to test it. Unit tests were not possible, integration tests were possible, but the feedback cycle was very long. The application domain itself was simple, but still we had enormous problems where you wouldn’t think you will have them. The idea to have two generic database table turned out to be a big performance bottleneck which required very specific Oracle knowledge to solve. 

## Which patterns were encountered?
[Over-Engineering](../patterns/over_engineering.md) - the customer wanted a simple web shop for one simple product. The consultancy delivered a highly complex system which could theoretically deal with a magnitude of products. Furthermore, the system didn’t use existing technologies, they reinvented the wheel. Because unit tests where not possible, they came up with their own integration testing framework and many other “not invented here” syndrome solutions.

[Misapplied genericity](../patterns/misapplied_genericity.md) - the customer wanted a solution for a specific problem: a web shop for one product. The solution was a system which solves all web shop problems in the world. However, the solution didn’t work properly, was too expensive and too slow. 

Abstraction bias - everything is an order. An order of a product is an order. But also changing address data or the password is an order. Everything is an order, where a simple CRUD application could have done it

## How was the situation resolved?
The original consultancy got fired and a new one got hired to develop the system from scratch.
