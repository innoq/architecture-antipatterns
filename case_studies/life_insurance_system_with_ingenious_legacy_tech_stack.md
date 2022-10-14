# Life Insurance System with Ingenious Legacy Tech Stack ✅
*Author Stefan*

## Description
An insurance company developed a large and complex system to handle its life insurance policies. Due to the mixture of different technologies and paradigms, the system got very hard to maintain. The deployment cyle of 6 month was much too long for business requirements.

## What is the system’s background?
The system had already been in production for about a decade and the current size of the maintenance team was about 100 people working full-time.

Insurance policies have a very long life cycle, typically spanning decades. In fact it’s quite normal for a system like this to never have its data migrated once a successor has been built; instead, you simply keep it running until all the policies handled by it are terminated (i.e., everyone has been paid out because they reached retirement age – or died).

The system had numerous connections to the outside world via integrations. Furthermore, it had a GUI client for internal staff, built using SmallTalk. The client communicated to a mainframe system via the CICS transaction monitor, where the core database and policy life-cycle logic was implemented in COBOL. The core premium calculation component was built in C++ because of an existing library. It was shared with both, SmallTalk client and mainframe.

A model-driven design was used. An UML model for the contracts was maintained with IBM Rational® Rose. Code for the serialization in the DB2 was generated with a self written mapper. Futhermore, the objects of the C++ and SmallTalk client were generated with a self written OO mapper. The model was used for the communication between the three components of the system as well.

The SmallTalk team knew object oriented (OO) programing and pushed the use of OO in the non OO world of COBOL. (Knowledge Tunnelling)

## What were the good ideas?
* Writing the GUI client with SmallTalk in that time was state of the art.
* Buying and using an existing software written in C++ for the premium calculation instead of writing it from scratch.
* Common concepts and patterns shared in the components of a system.

## What were the bad consequences, why was everything bad?
* The time to develop features was too high because: The Model-driven approach created a massive centralization bottleneck (only two weeks of a six-month cycle to make model changes). There was just one person able to make those changes.
* The pressure to get features implemented led to “re-use” of existing attributes for other purposes. These attributes had to be renamed in the next release cycle. (Failing Rigidity)
* The attempt to create an OO environment in COBOL created performance issues for batch processing.
* Objects changed. Therefore, already serialized objects needed to be migrated to newer object versions.
* High maintenance costs.

## What happened, was there a turning or tipping point?
* The self written OO system led to high complexity and caused more problems than it solved.
* The highly proprietary custom object structures led to integration problems. (Knowledge Tunnelling)

## How could the situation be resolved?
* We would suggest to introduce a more flexible key-value store in the model as a short-term patch.
* In the long run, we would modulerise the system into easier to maintain sub-systems based on bounded contexts (e.g. Domain Driven Design). The new sub-systems would not share a common model anymore. Each sub-system would maintain its own model (Self Contained Systems). Smaller teams could work on single components independently with shorter release cycles.

## How to avoid such a situation?
* Do not use a common data model in multiple sub-systems.
* Do not write OO mappers yourself.
* Do not use OO mappers when you don't need to.
* Avoid organizational bottlenecks.
* Release often. Use a Continuous Integration and Deployment. (CI/CD pipeline)

## Which patterns were encountered?

* [Knowledge Tunnelling](../patterns/knowledge_tunneling.md)
* [Failing Rigidity](../patterns/failing_rigidity.md)
* [Data Model Bypass](../patterns/data_model_bypass.md)
