---
id: protocol-cops
slug: cops
name: COPS
expandedName: Common Open Policy Service
origin: historical
provenance:
  source: protocols/protocol_COPS.htm
  sha256: 4ddba1f135c58c4f0bb26687650c376a55bcb469af9e8464f66175877b16d528
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Common Open Policy Service
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Common Open Policy Service
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: SNMP MIBs
    html: iso.org.dod.internet.mgmt.mib-2.copsClientMIB (1.3.6.1.2.1.89).
  - label: Ports
    html: 3288 (TCP)
  - label: Related protocols
    html: 'TCP,<br />RSVP'
  - label: Working groups
    html: 'RAP, Resource Allocation Protocol'
originalUpdate: '2006-09-01 17:14:19'
rfcs:
  - 2748
  - 2749
  - 2940
  - 3084
  - 3127
  - 3159
  - 3317
  - 3535
  - 3571
  - 4261
related:
  - protocol-tcp
  - protocol-rsvp
glossary: []
sections:
  - id: description
    title: Description
  - id: relations
    title: Protocol relations
  - id: glossary
    title: Local glossary
  - id: references
    title: References
editorialNotes: []
---
<section aria-labelledby="description">
<h2 id="description">Description</h2>

			The Common Open Policy Service (COPS) Protocol is part of the internet protocol suite as defined by the IETF <a href="https://www.rfc-editor.org/rfc/rfc2748.html">RFC 2748</a>.
<br />
<br />COPS specifies a simple client/server model for supporting policy control over Quality of Service (QoS) signaling protocols (e.g. RSVP). Policies are stored on servers, also known as Policy Decision Points (PDP), and are enforced on clients, also known as Policy Enforcement Points (PEP).
<br />
<br />There are two "flavors", or models of COPS: The Outsourcing Model and the Provisioning Model. The Outsourcing Model is the simplest flavor of COPS. In this model, all policies are stored at the PDP. Whenever the PEP needs to make a decision, it sends all relevant information to the PDP. The PDP analyzes the information, takes the decision, and relays it to the PEP. The PEP then simply enforces the decision.
<br />
<br />In the Provisioning Model, the PEP reports its decision-making capabilities to the PDP. The PDP then downloads relevant policies on to the PEP. The PEP can then make its own decisions based on these policies. The Provisioning Model uses the Policy Information Base as a repository of the policies.
<br /><hr />
<br /><b>Common header</b>
<br />Each COPS message consists of the COPS header followed by a number of typed objects.
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>4</td>
<td>8</td><td>16</td>
<td>32</td></tr><tr><td>Version</td>
<td>Flags</td><td>Opcode</td>
<td>Client type</td></tr><tr>
<td colspan="4">Message length</td></tr><tr>
<td colspan="4">Data</td></tr></tbody></table></div></div>
<br />
<br /><ul><li><b>Version</b><br /></li>
<li>COPS version number. Current version is 1.
<br /><br /></li>
<li><b>Flags</b><br /></li>
<li>Defined flag values (all other flags must be set to 0): 0x1 Solicited Message Flag Bit. This flag is set when the message is solicited by another COPS message. This flag is NOT to be set (value=0) unless otherwise specified in section 3.
<br /><br /></li>
<li><b>Op Code</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>Opcode</td><td>Description</td></tr><tr><td>1</td><td>REQ, Request.</td></tr><tr><td>2</td><td>DEC, Decision.</td></tr><tr><td>3</td><td>RPT, Report State.</td></tr><tr><td>4</td><td>DRQ, Delete Request State.</td></tr><tr><td>5</td><td>SSQ, Synchronize State Req.</td></tr><tr><td>6</td><td>OPN, Client-Open.</td></tr><tr><td>7</td><td>CAT, Client-Accept.</td></tr><tr><td>8</td><td>CC, Client-Close.</td></tr><tr><td>9</td><td>KA, Keep-Alive.</td></tr><tr><td>10</td><td>SSC, Synchronize Complete.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Client-type</b><br /></li>
<li>The Client-type identifies the policy client. Interpretation of all encapsulated objects is relative to the client-type. Client-types that set the most significant bit in the client-type field are enterprise specific (these are client-types 0x8000 - 0xFFFF). For KA Messages, the client-type in the header must always be set to 0 as the KA is used for connection verification (not per client session verification).
<br /><br /></li>
<li><b>Message Length</b><br /></li>
<li>Size of message in octets, which includes the standard COPS header and all encapsulated objects. Messages must be aligned on 4 octet intervals.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td>Client type</td><td>Description</td></tr><tr><td>0x0001</td><td>RSVP.</td></tr><tr><td>0x0002</td><td>DiffServ QoS.</td></tr><tr><td>0x8001-0x8004</td><td>IP Highway.</td></tr><tr><td>0x8005</td><td>Fujitsu Application Server Software Division.</td></tr><tr><td>0x8006</td><td>HP OpenView PolicyXpert.</td></tr><tr><td>0x8007</td><td>HP OpenView PolicyXpert COPS-PR PXPIB.</td></tr><tr><td>0x8008</td><td>PacketCable Dynamic Quality of Service.</td></tr><tr><td>0x8009</td><td>COPS usage for 3GPP GO interface.</td></tr></tbody></table></div></div></li></ul>
<br /><hr />
<br /><b>COPS Specific Object Formats</b>
<br />All the objects follow the same object format; each object consists of one or more 32-bit words with a four-octet header, using the following format:
<br />
<br />The length is a two-octet value that describes the number of octets (including the header) that compose the object. If the length in octets does not fall on a 32-bit word boundary, padding must be added to the end of the object so that it is aligned to the next 32-bit boundary before the object can be sent on the wire. On the receiving side, a subsequent object boundary can be found by simply rounding up the previous stated object length to the next 32-bit boundary.
<br />
<br />Typically, C-Num identifies the class of information contained in the object, and the C-Type identifies the subtype or version of the information contained in the object.
<br />
<br /><b>Communication</b>
<br />The COPS protocol uses a single persistent TCP connection between the PEP and a remote PDP. One PDP implementation per server must listen on a well-known TCP port number (COPS=3288 [IANA]). The PEP is responsible for initiating the TCP connection to a PDP. The location of the remote PDP can either be configured, or obtained via a service location mechanism [SRVLOC]. Service discovery is outside the scope of this protocol, however.
<br />
<br />If a single PEP can support multiple client-types, it may send multiple Client-Open messages, each specifying a particular client-type to a PDP over one or more TCP connections. Likewise, a PDP residing at a given address and port number may support one or more client-types. Given the client-types it supports, a PDP has the ability to either accept or reject each client-type independently. If a client-type is rejected, the PDP can redirect the PEP to an alternative PDP address and TCP port for a given client-type via COPS. Different TCP port numbers can be used to redirect the PEP to another PDP implementation running on the same server. Additional provisions for supporting multiple client-types (perhaps from independent PDP vendors) on a single remote PDP server are not provided by the COPS protocol, but, rather, are left to the software architecture of the given server platform.
<br />
<br />It is possible a single PEP may have open connections to multiple PDPs. This is the case when there are physically different PDPs supporting different client-types as shown in the following figure.
<br />
<br />Multiple PDPs illustration
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">       +----------------+
       |                |
       |  Network Node  |                  Policy Servers
       |                |
       |   +-----+      | COPS Client Type 1  +-----+
       |   |     |&lt;-----|--------------------&gt;| PDP1|
       |   + PEP +      | COPS Client Type 2  +-----+
       |   |     |&lt;-----|---------\           +-----+
       |   +-----+      |          \----------| PDP2|
       |    ^           |                     +-----+
       |    |           |
       |    \--&gt;+-----+ |
       |        | LPDP| |
       |        +-----+ |
       |                |
       +----------------+</pre>
<br />
<br />When a TCP connection is torn down or is lost, the PDP is expected to eventually clean up any outstanding request state related to request/decision exchanges with the PEP. When the PEP detects a lost connection due to a timeout condition it should explicitly send a Client-Close message for each opened client-type containing an  object indicating the "Communication Failure" Error-Code. Additionally, the PEP should continuously attempt to contact the primary PDP or, if unsuccessful, any known backup PDPs. Specifically the PEP SHOULD keep trying all relevant PDPs with which it has been configured until it can establish a connection. If a PEP is in communication with a backup PDP and the primary PDP becomes available, the backup PDP is responsible for redirecting the PEP back to the primary PDP (via a  message containing a  object identifying the primary PDP to use for each affected client-type). Section 2.5 details synchronization behavior between PEPs and PDPs.
<br />
<br /><b>Client Handle Usage</b>
<br />The client handle is used to identify a unique request state for a single PEP per client-type. Client handles are chosen by the PEP and are opaque to the PDP. The PDP simply uses the request handle to uniquely identify the request state for a particular Client-Type over a particular TCP connection and generically tie its decisions to a corresponding request. Client handles are initiated in request messages and are then used by subsequent request, decision, and report messages to reference the same request state. When the PEP is ready to remove a local request state, it will issue a delete message to the PDP for the corresponding client handle. A handle must be explicitly deleted by the PEP before it can be used by the PEP to identify a new request state. Handles referring to different request states must be unique within the context of a particular TCP connection and client-type.
<br />
<br /><b>Synchronization Behavior</b>
<br />When disconnected from a PDP, the PEP should revert to making local decisions. Once a connection is reestablished, the PEP is expected to notify the PDP of any events that have passed local admission control. Additionally, the remote PDP may request that all the PEP's internal state be resynchronized (all previously installed requests are to be reissued) by sending a Synchronize State message.
<br />
<br />After a failure and before a new connection is fully functional, disruption of service can be minimized if the PEP caches previously communicated decisions and continues to use them for some appropriate length of time. Specific rules for such behavior are to be defined in the appropriate COPS client-type extension specifications.
<br />
<br />A PEP that caches state from a previous exchange with a disconnected PDP must communicate this fact to any PDP with which it is able to later reconnect. This is accomplished by including the address and TCP port of the last PDP for which the PEP is still caching state in the Client-Open message. The  object will only be included for the last PDP with which the PEP was completely in sync. If the service interruption was temporary and the PDP still contains the complete state for the PEP, the PDP may choose not to synchronize all states. It is still the responsibility of the PEP to update the PDP of all state changes that occurred during the disruption of service including any states communicated to the previous PDP that had been deleted after the connection was lost. These must be explicitly deleted after a connection is reestablished. If the PDP issues a synchronize request the PEP must pass all current states to the PDP followed by a Synchronize State Complete message (thus completing the synchronization process). If the PEP crashes and loses all cached state for a client-type, it will simply not include a  in its Client-Open message.
<br /><hr />
<br /><b>COPS for RSVP</b>
<br />Common Open Policy Service (COPS) is a protocol for communicating network traffic policy information to network devices. Resource ReSerVation Protocol (RSVP) is a means for reserving network resources¡ªprimarily bandwidth¡ªto guarantee that applications transmitting end-to-end across the Internet will perform at the desired speed and quality.
<br />
<br />Combined, COPS with RSVP gives network managers centralized monitoring and control of RSVP, including the ability to:
<br /><ul><li>Ensure adequate bandwidth and jitter &amp; delay bounds for time-sensitive traffic such as voice transmission.<br /></li> 
<li>Ensure adequate bandwidth for multimedia applications such as videoconferencing and distance learning.<br /></li>
<li>Prevent bandwidth-hungry applications from delaying top priority flows or harming the performance of other applications customarily run over the same network.</li></ul>
<br />
<br />In so doing, COPS for RSVP supports the following crucial RSVP features:
<br /><ul><li>Admission control¡ªThe RSVP reservation is accepted or rejected based on end-to-end available network resources. <br /></li>
<li>Bandwidth guarantee¡ªThe RSVP reservation, if accepted, will guarantee that those reserved resources will continue to be available while the reservation is in place. <br /></li>
<li>Media-independent reservation¡ªAn end-to-end RSVP reservation can span arbitrary lower layer media types. 
<br /></li><li>Data classification¡ªWhile a reservation is in place, data packets belonging to that RSVP flow are separated from other packets and forwarded as part of the reserved flow. <br /></li>
<li>Data policing¡ªData packets belonging to an RSVP flow that exceed the reserved bandwidth size are marked with a lower packet precedence.</li></ul>
<br />
<br />
<br />		    
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>COPS</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>COPS</b><br />COPS (Common Open Policy Service ) is a protocol for communicating network traffic policy information to network devices. COPS specifies a simple client/server model for supporting policy control over Quality of Service (QoS) signaling protocols.<br /><br /><b>IETF</b><br />IETF (Internet Engineering Task Force) is the main standards organization for the Internet. The IETF is a large open international community of network designers, operators, vendors, and researchers concerned with the evolution of the Internet architecture and the smooth operation of the Internet. It is open to any interested individual.<br /><br /><b>QoS</b><br />QoS (Quality of Service) refers to the capability of a network to provide better service to selected network traffic over various technologies, including Frame Relay, Asynchronous Transfer Mode (ATM), Ethernet and 802.1 networks, SONET, and IP-routed networks that may use any or all of these underlying technologies.<br /><br /><b>RSVP</b><br />RSVP (Resource Reservation Setup Protocol) is a new Internet protocol being developed to enable the Internet to support specified Qualities-of-Service (QoS's). Using RSVP, an application will be able to reserve resources along a route from source to destination.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2748.html">RFC 2748</a>] The COPS (Common Open Policy Service) Protocol.
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc4261.html">RFC 4261</a>. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc2749.html">RFC 2749</a>] COPS usage for RSVP.
                
[<a href="https://www.rfc-editor.org/rfc/rfc2940.html">RFC 2940</a>] Definitions of Managed Objects for Common Open Policy Service (COPS) Protocol Clients.
                Defines SNMP MIB iso.org.dod.internet.mgmt.mib-2.copsClientMIB (1.3.6.1.2.1.89). 
                
[<a href="https://www.rfc-editor.org/rfc/rfc3084.html">RFC 3084</a>] COPS Usage for Policy Provisioning (COPS-PR).
                
[<a href="https://www.rfc-editor.org/rfc/rfc3127.html">RFC 3127</a>] Authentication, Authorization, and Accounting: Protocol Evaluation.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3159.html">RFC 3159</a>] Structure of Policy Provisioning Information (SPPI).
                
[<a href="https://www.rfc-editor.org/rfc/rfc3317.html">RFC 3317</a>] Differentiated Services Quality of Service Policy Information Base.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3535.html">RFC 3535</a>] Overview of the 2002 IAB Network Management Workshop.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3571.html">RFC 3571</a>] Framework Policy Information Base for Usage Feedback.
                
[<a href="https://www.rfc-editor.org/rfc/rfc4261.html">RFC 4261</a>] Common Open Policy Service (COPS) Over Transport Layer Security (TLS).
                Defines COPS object class = 16, type = 2 (Integrity-TLS). 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2748.html">RFC 2748</a>.
                		  </div>
		  
</section>

