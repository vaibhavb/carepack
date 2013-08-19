Direct In A Box
===============

A complete opensource Direct HISP and a modern end user client which embodies Bluebutton+ and can be used out of the box.


Goals
-----
* Provide an out of the box modern user interface to view and send Direct messages. The client should be extensible and be able to view bluebutton messages. The client should be build on a REST API which can be consumed by different systems.
* Provide an out of the box administration and reporting system for organizations to manage Direct.
* Provide a pluggable system so that different vendors like Identity Proofing providers, Certificate authorities etc. can interface with the system. Think of this as a marketplace enabled system.
* Provide a data ingestion system which allows triggering messages on hospital ADT feeds.
* Integrate with existing provider networks or messaging capabilities for e.g FAX.


Technology Choices
-------------------
* The system will use Direct Java reference implementation which will be Shim'ed with REST APIs.
* The user interface will be ruby on rails based. The data-store can be switched but initially will be Mongo.
* The data ingestion system will use HL7 HAPI java library.


Supported Systems
-----------------
* Deployable out of the box on Ubuntu


Previous or Related Work
------------------------
* Direct Project - [Java Reference Implementation][http://wiki.directproject.org/Reference+Implementation+Workgroup].
* Josh Mandel's BB+ Push [Sample][https://github.com/jmandel/bb-tutorial-growthtastic].
* M. Jackson's [Visualization Framework] [https://github.com/blue-button/bbClear] for bluebutton files.
* [Health Tiles] [https://github.com/blue-button/health-tiles]

