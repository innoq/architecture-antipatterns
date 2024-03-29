---
title: Splitting a checkout system into too many services
authors: Tobias
done: true
excerpt_separator: <!--more-->
layout: study
---
The project should replace the existing, monolithic and hard to scale checkout system with a modern, scalable and loosely coupled implementation.<!--more--> 
To achieve this, a microservice architecture was chosen as the target architecture for the software system. The microservices should be orchestrated by some core service. In addition there was a Javascript desktop application with an associated backend for frontend (that used the core service as a main data provider). Communication between the services was either synchronous via HTTP or, in some cases, asynchronous via MQTP. 

## What happened, was there a turning or tipping point?
After some months of development, the complexity between the microservices started to increase significantly, because for every small feature a couple of services needed to be adapted and most of the services were dependend on each other.

Also, the architecture required at least five HTTP or MQTP connections per call, to access data from the legacy system, which still was the leading system for any kind of legal calculations or other complex processes.

Another pain point was the central orchestration service, which was a single point of failure for the whole application, because it was neither scalable nor implemented in a way that was optimal for this kind of software system.

## What were the bad consequences, why was everything bad?
Because of the increasing complexity and the dependencies between the single services, the velocity stagnated over time and the system became unstable. 

The first big problem was the central orchestration service, because a lot of the necessary features couldn't be implemented in the chosen framework. 
Also any communication to this service got ever more error prone because of inconsistent data formats and unstable connections the core service had to the other services or the legacy system. Whenever the whole system was down, this core service was the cause for most of the time.

The second problem was the dependency between the services, because any change in some "basic" service or adapter to the legacy system led a number of changes in all other services which were built upon this service. So for one little feature, the whole system hat to be adapted, all changed services had to be deployed simultaneously in the correct order and one developer had to work on different repositories.

## How could the situation be resolved?

Checkout systems require a consistent state. This system, however, was implemented as a distributed system with eventual consistancy. Implementing eventual consistancy is hard to get right and often results in error prone and difficult to maintain code. A possible solution would be to implement the checkout system as a "modulith" which uses local transactions. This new system would be much easier to maintain and could be scaled, too.

The "Layerism" would be solved too, since there is no need for network calls between the modules of the application anymore. This would also enable the application to abstract the access to the legacy system by having a single adapter instead of independent services.

The bad decisions were caused by "hype-driven-development" and the functional and non-functional requirements of the checkout system were partly ignored.


## Which patterns were encountered?
* [Over-Engineering](../patterns/over_engineering.html)
* [Over-Modularization](../patterns/over_modularization.html)
* Conference Driven Development
* Layerism
