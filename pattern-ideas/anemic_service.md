---
title: Anemic REST Service
authors: Andreas, Christian, Theo
done: false
excerpt_separator: <!--more-->
layout: pattern
---
REST Services designed to solely encapsulate data, with logic left to the caller.
<!--more-->
Logik sollte im eigentlichen Services stattfinden. Die Aufrufer muss Kenntnisse von der Geschäftslogik haben. Logik verteilt sich über mehrere Systeme bzw. Teams. Höherer Cogntive Load für Teams, da sie sich mit einer zusätzlichen Business Domain befassen müssen. Höherer Korrdniationsaufwand zwischen den Teams (mehrere Teams für dieselbe Domäne).
Deployment kann komplexerer werden, wenn die Geschäftslogik "synchron" gehalten werden muss.
Führt zu einer stärkeren Kopplung zwischen Services und Aufrufer und eine schwache Kohäsion innerhalb von Services.
Reduzierter Wartbarkeit, alle Clients müssen vorbereitet werden.
Geringerer Mehrwert des Services

Weiterer Punkt Security: 
Die API wird erweitert und angreifbarer, Man-in-the-middle Attacken, Ausnutzen von Implementierungsdetails etc.


## What are some examples?
- CRUD Services
- GraphQL
- Firebase?
 
## Why does this happen?
- 

## How can we avoid getting into the situation in the first place?

## What are suggestions to get out of the situation if we ended up in it?

## Related Patterns

https://www.thoughtworks.com/radar/techniques/anemic-rest
