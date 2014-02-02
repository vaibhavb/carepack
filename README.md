Direct In A Box
===============

A complete opensource Direct HISP and a modern end user client which embodies Bluebutton+, provides HL7 connectors and can be used and administered out of the box.

Get Started
-----------
**On a 64-bit Ubuntu machine, get started with** 
```>wget -O- http://bit.ly/install-directserver | sh```. 
_Please report bugs_. App and config instructions coming soon.


Goals
-----
* Provide an out of the box modern user interface to view and send Direct messages. The client (or apps) should be extensible and be able to view bluebutton messages. The client (or apps) should be build on a REST API which can be consumed by different systems.
* Provide an out of the box administration and reporting system for organizations to manage Direct.
* Provide a pluggable system so that different vendors like Identity Proofing providers, Certificate authorities etc. can interface with the system. Think of this as a marketplace enabled system.
* Provide a data ingestion system which allows triggering messages on hospital ADT feeds.
* Integrate with existing provider networks or messaging capabilities for e.g FAX.


Technology Choices
-------------------
* The system will use Direct Java reference implementation which will be Shim'ed with REST APIs.
* The user interface will be ruby on rails based. The data-store can be switched but initially will be MongoDB based (soon Postgres will be added).
* The data ingestion system will use HL7 HAPI java library.


Supported Systems
-----------------
* Deployable out of the box on Ubuntu


Current Progress
----------------
* Integrated Josh's ansible direct installer
* Sketches of the initial app 

![screenshot](http://raw2.github.com/vaibhavb/directinabox/master/packs/inbox-web-app/img/screenshot.png)

![screenshot-threecol](http://raw2.github.com/vaibhavb/directinabox/master/packs/inbox-web-app/img/screenshot-threecol.png)

Previous or Related Work
------------------------
* Direct Project - [Java Reference Implementation](http://wiki.directproject.org/Reference+Implementation+Workgroup).
* Josh Mandel's BB+ Push [Sample](https://github.com/jmandel/bb-tutorial-growthtastic).
* M. Jackson's [Visualization Framework](https://github.com/blue-button/bbClear) for bluebutton files and various entries from  [healthdesign challenge](http://healthdesignchallenge.com)
* [Health Tiles](https://github.com/blue-button/health-tiles)
* [HIE of One](https://github.com/phoss/HIEofOne)
* VIdentity's Open SSL based Certificate Authority [VCert](https://github.com/videntity/vcert)
