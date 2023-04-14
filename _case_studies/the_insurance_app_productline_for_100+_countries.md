---
title: The Insurance App Productline for 100+ countries
authors: Sven
done: true
excerpt_separator: <!--more-->
layout: study
---
One of the largest insurances in the world developed one mobile app product line for all their country entities around the world to provide self-service functionality for viewing and changing policy data.<!--more-->

## What is the system’s background?
* Mobile App, iOS and Android
* Hybrid App (native code and web view)
* World-wide market
* App Productline developed by newly created digital factory in the headquarters
* The digital factory designed a worldwide generic datamodel and API that the App consumed. The API’s implementation was done by the various countries, which had to map their data model to the generic one
* Highly political: a German board member promised a global board member that Germany will implement the backend for the App

## What was the good idea?
The idea behind the App was the belief that it can be developed once and centrally and could be used by 100+ countries. So not every country develops the App itself, but uses a configurable problem.

There was the belief that fancy and expensive features such as chatbots would be implemented, because the cost would be shared by all countries

## What were the bad consequences, why was everything bad?
* The generic domain model was of course not generic enough. You cannot represent all the country specific things in one model. Therefore the model we used in Germany had also attributes which were Japan-only or Saudi-Arabia-only (Misapplied genericity).
* It was a huge effort to somehow squeeze the data from german backend systems and german data models into that domain model. Not every insurance domain across all companies and countries are equal (Misapplied genericity).
* Variability engineering has been solved by mixing webviews with native App development. That create a bad user experience. Mixing webviews and native code also broke authentication, which was sold from the App development team as a feature, not a bug. 
* The approach they selected for domain and variability engineering for product lines has been deprecated since 2007, because it never worked. There was absolutely no knowledge about building product lines and that “non knowledge” was not known to the team. They thought they do the right thing and never questioned the approach or asked experts (Knowledge Tunneling).
* Every little new feature you wanted from the product line required to be put on the roadmap and prioritized. If you have 100+ countries, this becomes a crazy bottleneck. However, Germany was high prio, so we got tiny features within 6 months (Centralisation bottleneck).
* The generic app also had a generic “middleware” which did something no one understood. Everything was secret. The business case for the “middleware” required that operations of that “middleware” needed to be done by Indians which needed to access the production environment in Spain and France. Since german law requires insurance data to be in Germany, the whole production environment for that “middleware” had to be recreated for Germany only. Of course on an extra invoice for the german branch (Misapplied genericity).
* Sunk cost fallacy: after millions have been spent, more millions have been spent to save the project. The whole project was the idea of the new digital lead and he got buy-in from several board members (Emotional misattachment).
* Developing a new feature required efforts on several layers (app, middleware, backend), which have been developed by different teams in different countries (Horizontalism, Generic Conway Failure).

## Which patterns were encountered?
* [Misapplied genericity](../patterns/misapplied_genericity.html)
* Centralization bottleneck
* Generic Conway Failure
* Knowledge Tunneling
* Horizontalism
* [Emotional misattachment](../patterns/emotional_misattachment.html)

## How was the situation resolved?
* Project has been restarted: large countries develop the App on their own. Small countries become a default App.
* Head of Digital Factory has been fired
* App rating for the German App improved from 1.8 stars to 4.3 stars (iOS)
