# Domain Allergy 🚧
*Author(s): Stefan*

## Short Summary
Being unwilling to understand the business domain of the problem space, fleeing into technology problems instead

## Description: What is it, and what are the bad consequences?
Some architects focus solely on technology, and consider the business problem domain to be somebody else’s boring problem. This is what we call “domain allergy”.

## Problem that we see when we observe this anti-pattern are:

Very often, the perception of the domain being boring is simply wrong. Almost every actual real-life problem has some aspects that make it unique and require very specific solutions. If no architect considers the domain worthy of their attention, some of its challenging aspects won’t get exposed and addressed early. 
A technical architecture that is chosen for its own sake – e.g. because it provided intellectual stimulation and entertaining work days for the people creating it – won’t be a good match for the actual business problem at hand. It might be suitable that is a lot more complicated, it might include solutions for problems that don’t exist in this domain, and ignore some of the technical challenges because they have been overlooked.
The architect will fail to communicate well with business stakeholders because they don’t speak their language. This will lead to misunderstandings and frustration for both parties.

## What are some examples?
- Two huge domain classes represent all legal forms for companies, unions and foundations
- Rating application based on generic thing machine

🚧 missing examples in case studies 🚧

## Why does this happen?
Architects very often share a passion for working on interesting, challenging problems. They want to work with something that hasn’t been used a thousand times already, want to build something that is truly innovative, and explore new and exciting options to solve problems. Sometimes projects don’t offer many challenges from a domain or business perspective, though – at least not from the point of view of a technical architect. Because they perceive the business domain as boring, some architects end up treating it as somewhat of an annoying nuisance. 

## How can we avoid getting into the situation in the first place?
A thorough understanding of the business domain should be a common goal for every architect working on a system. It will inevitably make them a better communication partner for business-oriented stakeholders and co-workers, help them to recognize and address technical problems earlier, enable them to build solutions that match actual needs instead of theoretical ones, and possibly help advance the business domain by showing where new or not-yet-used technology might open up new opportunities. Architects should therefore talk to users and stakeholders, ask questions, read documents, look at existing systems, and in general strive to become very well versed in the business domain they work with.

## What are suggestions to get out of the situation if we ended up in it?
Most likely, there will be manifestations of other anti-patterns, such as Emotional Mis-Attachment,  Over-Engineering, Misapplied Genericity as a result of Domain Allergy. These will require significant refactoring of existing solutions. In contrast, Domain Allergy itself requires “only” a change of mind in the way architects approach their job.
