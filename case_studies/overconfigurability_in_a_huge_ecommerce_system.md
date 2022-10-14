# Over-Configurability in a (huuuuge) eCommerce System 🚧
Author: Gernot, Christine

A huge organization developed and operated a system for selling special kinds of goods to their customers. 

## What is the system’s background

* Cobol, Mainframe
* Huge (government-oriented) organization
* Mass-Market
* Formal requirements (availability, guaranteed fair pricing…)
* Complex pricing scheme
* Several (heavily disagreeing) business-units, which struggle about business-priorities and about (shared and centralized) development capacity.


To understand the system and its properties, one needs to know a bit about the goods the systems deals with: They

are in high demand, so the company sells hundreds-of-thousand per day.
can be bought both in shops distributed all over the country, and online (both via browser and a smartphone app)
have to be individualized or customized
Have a complicated pricing model: Prices are calculated depending on product-factors (let’s call them size, color, texture, material here), your buying history, the date or season or numerous other factors.
Parts of this pricing model depends on external entities (like governmental rules, international trading partners involved in these products etc)
People can buy vouchers, rebate-cards, can get volume- or company discounts, or things like repeated-customer-discounts…
There are also group discounts, if a group of people buys the product together.
Both pricing and availability of goods changes all the time, therefore we need rather high flexibility in that respect.

The system once started as a collection of mainframe programs, some of which are still in operation and heavy use - especially those integrating enterprises and data from other countries (!). 
As the organization is extremely risk-aware, they operated more than 6 (!) test stages for their system. At least 5 of these stages are responsible for certain parameters of product configuration, and thus need to test how their parameters influence overall pricing and availability of the products. Sounds complicated? Yeah, it really is…

In production environments, all these configurations culminate in a “data driven pricing”, where the data resides in a plethora of different formats and sources: Some configuration is stored in mainframe databases, others in relational stores and others in configuration files (!).

To make flexibility even more intense, the developers included more than 300 (!) “feature toggles” in their code, but only about half of those were documented :-(



## What was the good idea?
(optional: What happened, was there a turning or tipping point?)

Configurability of numerous system parameters (data-driven product configuration, pricing, rebates, storefront-details) - so that business and operations can change product and pricing parameters and even functional behavior of the system without re-deploying the overall system.
Multi-Paradigm Development: Specific technologies enabled fast prototyping/development of difficult features
Integration of (too?) many existing systems -> fast time-to-market, quick integration is faster (in the short term) than a “solid” integration


## What were the bad consequences, why was everything bad?


Overly large and heterogeneous development team (>150 persons from different companies), making development very expensive (and slow, see below)
Time-to-market became slower and slower, due to 
overwhelming complexity of the overall system
organizational dependencies between sub-teams

Lack of persistent knowledge about the system and its operation (missing overview-documentation)
No overview of configuration options (the official feature-toggle documentation covered only 50% of the more than 300 existing toggles)

Operational instability: increasing number of severe runtime issues (system not available)
Many regression errors (errors that surfaced again, although they had already been fixed in a prior version)


## Which patterns were encountered?
(optional: How was the situation resolved?)
