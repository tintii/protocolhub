---
id: protocol-pim
slug: pim
name: PIM
expandedName: Protocol Independent Multicast
origin: historical
provenance:
  source: protocols/protocol_PIM.htm
  sha256: d63087769862391a9d204187d0b0d7930b2e17063b12adc117d7dcaa44b0eedc
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Protocol Independent Multicast
layers:
  - Network Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Protocol Independent Multicast
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Network Layer
  - label: Type
    html: Network Layer multicast routing protocol
  - label: SNMP MIBs
    html: 'Iso.org.dod.internet.experimental.pimMIB (1.3.6.1.3.61) '
  - label: Multicast addresses
    html: 224.0.0.13 (IPv4 all PIM routers)
  - label: Related protocols
    html: 'IP,<br />ICMP,<br />OSPF,<br />RIP,<br />DVMRP,<br />IS-IS,<br />BGP,<br />IGRP,<br />EIGRP'
  - label: Working groups
    html: |-
      Idmr, Inter-Domain Multicast Routing.
      <br />Pim, Protocol Independent Multicast
originalUpdate: '2005-11-15 14:46:48'
rfcs:
  - 2102
  - 2117
  - 2337
  - 2362
  - 2715
  - 2934
  - 3446
  - 3973
related:
  - protocol-ip
  - protocol-icmp
  - protocol-ospf
  - protocol-rip
  - protocol-bgp
  - protocol-igrp
  - protocol-eigrp
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

			Protocol Independent Multicast (PIM) is a collection of multicast routing protocols, each optimized for a different environment. There are two main PIM protocols, PIM Sparse Mode and PIM Dense Mode. A third PIM protocol, Bi-directional PIM, is less widely used.
<br />
<br />Typically, either PIM Sparse Mode or PIM Dense Mode will be used throughout a multicast domain. However, they may also be used together within a single domain, using Sparse Mode for some groups and Dense Mode for others. This mixed-mode configuration is known as Sparse-Dense Mode. Similarly, Bi-directional PIM may be used on its own, or it may be used in conjunction with one or both of PIM Sparse Mode and PIM Dense Mode.
<br />
<br />All PIM protocols share a common control message format. PIM control messages are sent as raw IP datagrams (protocol number 103), either multicast to the link-local all PIM routers multicast group, or unicast to a specific destination.
<br />
<br />Internet Protocol (IP) multicast is a bandwidth-conserving technology that reduces traffic by simultaneously delivering a single stream of information to thousands of corporate recipients and homes. Applications that take advantage of multicast include videoconferencing, corporate communications, distance learning, and distribution of software, stock quotes, and news.
<br />
<br />IP Multicast delivers source traffic to multiple receivers without adding any additional burden on the source or the receivers while using the least network bandwidth of any competing technology. Multicast packets are replicated in the network by Cisco routers enabled with Protocol Independent Multicast (PIM) and other supporting multicast protocols resulting in the most efficient delivery of data to multiple receivers possible. All alternatives require the source to send more than one copy of the data. Some even require the source to send an individual copy to each receiver. If there are thousands of receivers, even low-bandwidth applications benefit from using Cisco IP Multicast. High-bandwidth applications, such as MPEG video, may require a large portion of the available network bandwidth for a single stream. In these applications, the only way to send to more than one receiver simultaneously is by using IP Multicast.
<br /><hr />
<br /><b>PIM Sparse Mode</b>
<br />A router receives explicit Join/Prune messages from those neighboring routers that have downstream group members. The router then forwards data packets addressed to a multicast group, G, only onto those interfaces on which explicit joins have been received. Note that all routers mentioned in this document are assumed to be PIM-SM capable, unless otherwise specified.
<br />
<br />A Designated Router (DR) sends periodic Join/Prune messages toward a group-specific Rendezvous Point (RP) for each group for which it has active members. Each router along the path toward the RP builds a wildcard (any-source) state for the group and sends Join/Prune messages on toward the RP. We use the term route entry to refer to the state maintained in a router to represent the distribution tree. A route entry may include such fields as the source address, the group address, the incoming interface from which packets are accepted, the list of outgoing interfaces to which packets are sent, timers, flag bits, etc. 
<br />
<br />The wildcard route entry's incoming interface points toward the RP; the outgoing interfaces point to the neighboring downstream routers that have sent Join/Prune messages toward the RP. This state creates a shared, RP-centered, distribution tree that reaches all group members. When a data source first sends to a group, its DR unicasts Register messages to the RP with the source's data packets encapsulated within. If the data rate is high, the RP can send source-specific Join/Prune messages back towards the source and the source's data packets will follow the resulting forwarding state and travel unencapsulated to the RP. Whether they arrive encapsulated or natively, the RP forwards the source's decapsulated data packets down the RP-centered distribution tree toward group members. If the data rate warrants it, routers with local receivers can join a source-specific, shortest path, distribution tree, and prune this source's packets off of the shared RP-centered tree. For low data rate sources, neither the RP, nor last-hop routers need join a source-specific shortest path tree and data packets can be delivered via the shared, RP-tree.
<br />
<br /><b>Packet Formats</b>
<br />This section describes the details of the packet formats for PIM control messages. All PIM control messages have protocol number 103.
<br />
<br />Basically, PIM messages are either unicast (e.g. Registers and Register-Stop), or multicast hop-by-hop to `ALL-PIM-ROUTERS' group `224.0.0.13' (e.g. Join/Prune, Asserts, etc.).
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>4</p></td><td><p>8</p></td><td><p>16</p></td><td><p>32 bit</p></td></tr><tr><td><p>PIM Ver</p></td><td><p>Type</p></td><td><p>Reserved</p></td><td><p>Checksum</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>PIM Ver</b>
<br />PIM Version number is 2.<br /><br /></li>

<li><b>Type</b>  
<br />Types for specific PIM messages. PIM Types are:<br /><br /></li>

<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>Code</td><td>Description</td></tr><tr><td>0</td><td>Hello</td></tr><tr><td>1</td><td>Register</td></tr><tr><td>2</td><td>Register-Stop</td></tr><tr><td>3</td><td>Join/Prune</td></tr><tr><td>4</td><td>Bootstrap</td></tr><tr><td>5</td><td>Assert</td></tr><tr><td>6</td><td>Graft (used in PIM-DM only)</td></tr><tr><td>7</td><td>Graft-Ack (used in PIM-DM only)</td></tr><tr><td>8</td><td>Candidate-RP-Advertisement</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Reserved</b>
<br />Reserved set to zero. Ignored upon receipt.<br /><br /></li>

<li><b>Checksum</b>
<br />The checksum is the 16-bit one's complement of the one's complement sum of the entire PIM message, (excluding the data portion in the Register message). For computing the checksum, the checksum field is zeroed.</li></ul>
<br /><hr />
<br /><b>PIM Dense Mode</b>
<br />PIM-DM assumes that when a source starts sending, all downstream systems want to receive multicast datagrams. Initially, multicast datagrams are flooded to all areas of the network. PIM-DM uses RPF to prevent looping of multicast datagrams while flooding. If some areas of the network do not have group members, PIM-DM will prune off the forwarding branch by instantiating prune state.
<br />
<br />Prune state has a finite lifetime. When that lifetime expires, data will again be forwarded down the previously pruned branch.
<br />
<br />Prune state is associated with an (S,G) pair. When a new member for a group G appears in a pruned area, a router can "graft" toward the source S for the group, thereby turning the pruned branch back into a forwarding branch.
<br />
<br />The broadcast of datagrams followed by pruning of unwanted branches is often referred to as a flood and prune cycle and is typical of dense mode protocols.
<br />
<br />To minimize repeated flooding of datagrams and subsequent pruning associated with a particular (S,G) pair, PIM-DM uses a state refresh message. This message is sent by the router(s) directly connected to the source and is propagated throughout the network. When received by a router on its RPF interface, the state refresh message causes an existing prune state to be refreshed.
<br />
<br />Compared with multicast routing protocols with built-in topology discovery mechanism, PIM-DM has a simplified design and is not hard-wired into a specific topology discovery protocol. However, this simplification does incur more overhead by causing flooding and pruning to occur on some links that could be avoided if sufficient topology information were available; i.e., to decide whether an interface leads to any downstream members of a particular group. Additional overhead is chosen in favor of the simplification and flexibility gained by not depending on a specific topology discovery protocol.
<br />
<br />PIM-DM differs from PIM-SM in two essential ways:
<br /><ul><li>There are no periodic joins transmitted, only explicitly triggered prunes and grafts. <br /></li>
<li>There is no Rendezvous Point (RP). This is particularly important in networks that cannot tolerate a single point of failure.</li></ul>
<br />
<br /><b>PIM Packet Formats</b>
<br />All PIM-DM packets use the same format as PIM-SM packets. All PIM control messages have IP protocol number 103. All PIM-DM messages MUST be sent with a TTL of 1. All PIM-DM messages except Graft and Graft Ack messages MUST be sent to the ALL-PIM-ROUTERS group. Graft messages SHOULD be unicast to the RPF'(S). Graft Ack messages MUST be unicast to the sender of the Graft.
<br />
<br />The IPv4 ALL-PIM-ROUTERS group is 224.0.0.13. The IPv6 ALL-PIM-ROUTERS group is 'ff02::d'.
<br /><hr />
<br /><b>Bi-directional PIM</b>
<br />Bi-directional PIM (BIDIR-PIM) is a third PIM protocol, based on PIM-SM. The main way BIDIR-PIM differs from PIM-SM is in the method used to send data from a source to the RP. Whereas in PIM-SM data is sent using either encapsulation or a source-based tree, in BIDIR-PIM the data flows to the RP along the shared tree, which is bi-directional - data flows in both directions along any given branch.
<br />
<br />BIDIR-PIM's major differences from PIM-SM are as follows.
<br /><ul><li>There are no source-based trees, and in fact no (S,G) state at all. Therefore there is no option for routers to switch from a shared tree to a source-based tree, and Source-Specific Multicast is not supported.<br /><br /></li>

<li>To avoid forwarding loops, for each RP one router on each link is elected the Designated Forwarder (DF). This is done at RP discovery time using the DF election message.<br /><br /></li>

<li>There is no concept of a Designated Router.<br /><br /></li>

<li>No encapsulation is used.<br /><br /></li>

<li>The forwarding rules are very much simpler than in PIM-SM, and there are no data-driven events in the control plane at all.</li></ul> 
<br />
<br />The main advantage of BIDIR-PIM is that it scales very well when there are many sources for each group. However, the lack of source-based trees means that traffic is forced to remain on the possibly inefficient shared tree.
<br />
<br />There have been two proposed specifications for Bi-directional PIM. The first was described in draft-farinacci-bidir-pim, which dates from 1999. The protocol described here is a replacement, simpler than and with some improvements over the first. It is described in draft-ietf-pim-bidir.
<br />
<br /><b>Mixed-mode PIM Configurations</b>
<br />Typically, PIM-SM, PIM-DM or BIDIR-PIM would be used alone throughout a multicast domain. However it is possible to use a combination of the three by distributing multicast groups between the different protocols. Each group must operate in either sparse, dense or bi-directional mode; it is not possible to use a single group in more than one mode at once. Given such a division, the protocols coexist largely independent of one another.
<br />
<br />The one way in which the protocols interact is that the same PIM Hello protocol is used by each, and is only run once on each link. The information learned from the Hello message exchange must be shared among the three routing protocols.
<br />
<br />The method used to distribute groups between the three protocols is outside the scope of the PIM protocols and is a matter of local configuration. Note that it is important that every router in the domain has the same assignment of groups to protocols. The following techniques are used.
<br />The Bootstrap Router (BSR) protocol, used for RP discovery, has been extended to add a "Bi-directional" bit for each group range. This method may be used to assign groups between sparse and bi-directional modes if using BSR.
<br />
<br />Routers may be configured to use dense mode if the RP discovery mechanism (whatever that may be) fails to find an available RP for a group, and to use sparse or bi-directional mode otherwise.
<br />
<br />Router may be manually configured with group ranges for sparse, dense and bi-directional modes.
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
<td class="MapParent" aria-label="Parent layer protocols">IP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>PIM</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Bandwidth</b><br />*A range within a band of frequencies or wavelengths.
<br />
<br />*The amount of data that can be transmitted in a fixed amount of time. For digital devices, the bandwidth is usually expressed in bits per second(bps) or bytes per second. For analog devices, the bandwidth is expressed in cycles per second, or Hertz (Hz).<br /><br /><b>Cisco</b><br />One of the leading manufacturers of network equipment. Cisco's primary business is in internetworking products, such as routers, bridges, and switches.<br /><br /><b>Data</b><br />* Distinct pieces of information, usually formatted in a special way. All software is divided into two general categories: data and programs. Programs are collections of instructions for manipulating data. Data can exist in a variety of forms -- as numbers or text on pieces of paper, as bits and bytes stored in electronic memory, or as facts stored in a person's mind. Strictly speaking, data is the plural of datum, a single piece of information. In practice, however, people use data as both the singular and plural form of the word. 
<br />
<br />* The term data is often used to distinguish binary machine-readable information from textual human-readable information. For example, some applications make a distinction between data files (files that contain binary data) and text files (files that contain ASCII data). 
<br />
<br />* In database management systems, data files are the files that store the database information, whereas other files, such as index files and data dictionaries, store administrative information, known as metadata.<br /><br /><b>Datagram</b><br />A datagram is a self-contained, independent entity of data carrying sufficient information to be routed from the source to the destination computer without reliance on earlier exchanges between this source and destination computer and the transporting network.
<br /> 	
<br />The term has been generally replaced by the term packet. Datagrams or packets are the message units that the Internet Protocol deals with and that the Internet transports. A datagram or packet needs to be self-contained without reliance on earlier exchanges because there is no connection of fixed duration between the two communicating points as there is, for example, in most voice telephone conversations.<br /><br /><b>Domain</b><br />A group of computers and devices on a network that are administered as a unit with common rules and procedures. Within the Internet, domains are defined by the IP address. All devices sharing a common part of the IP address are said to be in the same domain.
<br />
<br />In database technology, domain refers to the description of an attribute's allowed values. The physical description is a set of values the attribute can have, and the semantic, or logical, description is the meaning of the attribute.<br /><br /><b>Interface</b><br />Interface is the connection between a router and one of its attached networks. An interface has state information associated with it, which is obtained from the underlying lower level protocols and the routing protocol itself. An interface to a network has associated with it a single IP address and mask (unless the network is an unnumbered point-to-point network). An interface is sometimes also referred to as a link.<br /><br /><b>MPEG</b><br />MPEG (Moving Picture Experts Group) is a working group of ISO. The term also refers to the family of digital video compression standards and file formats developed by the group. MPEG generally produces better-quality video than competing formats, such as Video for Windows, Indeo and QuickTime. MPEG files can be decoded by special hardware or by software.<br /><br /><b>Multicast</b><br />Multicast is designed to transmit a single message to a select group of recipients. A simple example of multicasting is sending an e-mail message to a mailing list. Teleconferencing and videoconferencing also use multicasting, but require more robust protocols and networks.<br /><br /><b>PIM</b><br />PIM (Protocol Independent Multicast) routing protocol  runs over an existing unicast infrastructure. There are two variations of PIM: 
<br />*PIM-SM -- Short for PIM-Sparse Mode, which is used when recipients are scattered over a large area. 
<br />*PIM-DM -- Short for PIM-Dense Mode, which is used when the targeted recipients are in a concentrated area.<br /><br /><b>Packet</b><br />A packet is the unit of data that is routed between an origin and a destination on the Internet or any other packet-switched network. When any file (e-mail message, HTML file, Graphics Interchange Format file, Uniform Resource Locator request, and so forth) is sent from one place to another on the Internet, the Transmission Control Protocol (TCP) layer of TCP/IP divides the file into "chunks" of an efficient size for routing. Each of these packets is separately numbered and includes the Internet address of the destination. The individual packets for a given file may travel different routes through the Internet. When they have all arrived, they are reassembled into the original file (by the TCP layer at the receiving end). <br /><br /><b>Register</b><br />(n) A, special, high-speed storage area within the CPU. All data must be represented in a register before it can be processed. For example, if two numbers are to be multiplied, both numbers must be in registers, and the result is also placed in a register. 
<br />
<br />(v) To notify a manufacturer that you have purchased its product. Registering a product is often a prerequisite to receiving customer support, and it is one of the ways that software producers control software piracy.<br /><br /><b>Router</b><br />A device that forwards data packets along networks. A router is connected to at least two networks, commonly two LANs or WANs or a LAN and its ISP network. Routers are located at gateways, the places where two or more networks connect. 
<br />
<br />Routers use headers and forwarding tables to determine the best path for forwarding the packets, and they use protocols such as ICMP to communicate with each other and configure the best route between any two hosts.<br /><br /><b>Stream</b><br />Stream is a uni-directional logical channel established from one to another associated SCTP endpoint, within which all user messages are delivered in sequence except for those submitted to the unordered delivery service.<br /><br /><b>Wildcard</b><br />Wildcard character is a special symbol that stands for one or more characters. Many operating systems and applications support wildcards for identifying files and directories. This enables you to select multiple files with a single specification.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2102.html">RFC 2102</a>] Multicast Support for Nimrod: Requirements and Solution Approaches.
[<a href="https://www.rfc-editor.org/rfc/rfc2337.html">RFC 2337</a>] Intra-LIS IP multicast among routers over ATM using Sparse Mode PIM.
[<a href="https://www.rfc-editor.org/rfc/rfc2362.html">RFC 2362</a>] Protocol Independent Multicast-Sparse Mode (PIM-SM): Protocol Specification.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2117.html">RFC 2117</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2715.html">RFC 2715</a>] Interoperability Rules for Multicast Routing Protocols.
[<a href="https://www.rfc-editor.org/rfc/rfc2934.html">RFC 2934</a>] Protocol Independent Multicast MIB for IPv4.
[<a href="https://www.rfc-editor.org/rfc/rfc3446.html">RFC 3446</a>] Anycast Rendevous Point (RP) mechanism using Protocol Independent Multicast (PIM) and Multicast Source Discovery Protocol (MSDP).
[<a href="https://www.rfc-editor.org/rfc/rfc3973.html">RFC 3973</a>] Protocol Independent Multicast - Dense Mode (PIM-DM): Protocol Specification (Revised).
                <hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc2117.html">RFC 2117</a>] Protocol Independent Multicast-Sparse Mode (PIM-SM): Protocol Specification.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2362.html">RFC 2362</a>.
                		  </div>
		  
</section>

