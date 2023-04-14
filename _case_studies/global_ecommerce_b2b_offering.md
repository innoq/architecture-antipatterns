---
title: Global eCommerce B2B offering
authors: Stefan
done: true
excerpt_separator: <!--more-->
layout: study
---
An e-commerce service provider offered online stores to its clients. You could say the business it was in was literally providing e-commerce services<!--more-->: The provider offered its clients an easy way to set up a online store where *their* clients – the provider’s clients’ clients, sorry, but sometimes life is complicated – could order digital goods. The provider handled a lot of the hassle associated with that, such as taking care of payment with multiple different payment methods, in different currencies, handling country-specific tax aspects, export restrictions, etc. In essence, it operated a giant multi-tenant platform at a time when many of their clients barely knew how e-commerce worked.

## What was the good idea?
The core offering required stores that could be made to appear as if they were completely owned, created and operated by the provider’s clients. To support this concept, the provider had decided to allow for extensive customization. This included simple aspects, such as adding a logo, changing colors, typography, text strings, or other visual aspects, but also more complicated things such as customizing business rules and processes, and even adding custom logic. What started out with a very simple configuration language and user interface became more and more complex over time as more and more customization options were added.
To support the customization efforts, an associated tool set was created, growing over time until it was essentially an integrated development environment (IDE). This is not an exaggeration: It was based on a popular open source IDE toolkit, and featured everything you would expect from such a thing, including a several hundred megabyte-sized download and a steep learning curve.

## What were the bad consequences, why was everything bad?
The situation our e-commerce company was in was problematic in a number of ways:

* The customization tooling grew incredibly complex and had to be maintained by a large group of developers. Still, it fell behind whenever the underlying open source toolkit was updated, as well as when new tools appeared on the market.
* The tooling was of course supposed to make development easier, but instead became a burden in itself because it essentially required specialized developers. Very few clients were willing to invest in educating their own developers, or hiring ones who alread had that knowledge (which were very hard to find compared to developers with more general-purpose skills).
* This lead to most of the customization being done not by the client, but by specialized professional service developers working for the e-commerce provider. While this generated revenue, it didn’t scale appropriately, and led to unhappy clients, because they not only had to pay extra for the customization, it also took a very long time to get anything done because of the communication overhead and the lack of resources on the professional services side.
* Some of the provider’s most important clients – basically 2-3 companies that generated almost half of the revenue – had customization requirements that exceeded the tooling’s capabilities. To accomodate their needs, the tooling had to be extended before it could be used for their specific needs.
* On the other end of the spectrum, there were a lot of “long-tail” clients that would have been happy with very limited customization, but had to use the way too powerful tooling (or pay for the provider’s services) to get it done.

In the end, the provider created a tool set that worked perfectly for a specific subset of its potential clients: The ones who had enough developers to build something themselves, but still wanted to use this capability to customize a solution using highly proprietary, vendor-specific tooling, and who had enough revenue to be interesting, but no specific needs exceeding the tooling’s capabilities. 

Sadly, it turned out that this perfect subset of clients simply did not exist: The tooling was far too complicated for the long-tail customers, and not nearly capable enough for the needs of the strategic ones.

## What was the solution, if any?
Our recommendation to the provider was to drop the complicated configuration solution and instead create two alternative paths for its two main client categories: On the one end, the very few, very influential and very lucrative clients were worth creating a solution explicitly designed to meet their needs. Essentially, a custom solution was developed for each of them, with a dedicated team that attended to each client’s specifics. On the other end of the spectrum, a standard solution with only very limited configuration options, mostly related to colors, graphics, and text strings, was created to meet the need of long-tail clients.

## Which patterns were encountered?
* Configurability Fallacy
