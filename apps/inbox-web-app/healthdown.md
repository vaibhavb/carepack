# HealthDown
============
- *Human readable(md)[https://help.github.com/articles/github-flavored-markdown]* and (computable)[http://www.wolfram.com/cdf/] healthcare document with primary purpose of facilitating communication between various participants of the healthcare ecosystem.
- The document can be enriched by data sources or services you have.
- Any added data is self contained in the document, and can be imported in structured fashion by reading system.

To facilitate adoption
- The format	 (md for reading + yml for data serialization)
- Display canvas (HTML5)
- Action functions (js) are open-sourced as CC-BY-SA
All of the above should have a mobile first display.

By default - 
- The primary transport for this secure communication mechanism is ONC Direct, Fax, E-mail inviting to view it securely.
- Out of box transforms for the document should include a CCDA transformer.
- When sent to an out of band system the output will be transformed to html & pdf.

Disrupting use-cases or scenarios -
- A patient wanting to share pedometer/heart-rate monitor data with a doctor.
- A Quantified self user wanting to write a computable workbook to share with others.
- Care co-ordination (including others, fyi, group messaging, forum-posts)

The primary consumer of this document are humans and the security is maintained by
the fact that data is self-contained.

A good scenario for this is blog-post being shared with other humans and facebook 
feed activity which drives high user interaction. When used in conjuction with a 
data feeding system this will be very powerful!

Implementation use case
-----------------------
- A patient with a data feed system adds a service to get information on activity and sleep
- He write a note to his doctor: 
	@drjohn please see below @my weekly activity report from @service,fitbit. 
	what do you think of it, is it causing my sleep disorder? #sleepcarecirle Attaching @healthrecord,profile
	(Technical note: The canvas implementation adds information for user in yml, unrolls the @ identity identifiers and # sharing channels)

- If no @drjohn in system then a TO: bar shows up and the user gets to type Drs e-mail, fax or direct address. In case of fax appropriate footer information to reach the patient (communication bar) gets filled up. A CC box shows up for the sleepcarecircle if defined.

The display will have a similar mobile experience.

The base service
----------------
- Has a user store (all data is alwayws private, only documents are share-able)
- Is able to sync with devices and services
- Publishing and sharing (facebook:PatientLikeMe) experience 
- Forums (discourse:HealthTap) ? - Ask Community (pick community key-words)
- A Blog (medium:QS) ? - share/motivational
- Computable Document (keas)