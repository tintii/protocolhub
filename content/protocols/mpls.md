---
id: protocol-mpls
slug: mpls
name: MPLS
expandedName: Multi-Protocol Label Switching
origin: historical
provenance:
  source: protocols/protocol_MPLS.htm
  sha256: 4a8310b5e7c3dbe19386d775c6b62758980fac3b4f786e86e79b852e8855b46c
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Multi-Protocol Label Switching
layers:
  - Network Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Multi-Protocol Label Switching
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Network Layer
  - label: EtherType
    html: 0x8847 unicast;
  - label: SNMP MIBs
    html: ' iso.org.dod.internet.mgmt.mib-2.transmission.mplsStdMIB (1.3.6.1.2.1.10.166)'
  - label: Related protocols
    html: 'LDP,<br />CR-LDP,<br />RSVP-TE,<br />IP,<br />ATM,<br />ATM PNNI,<br />RSVP,<br />OSPF,<br />BGP,<br />GMPLS'
  - label: Working groups
    html: |-
      mpls, Multiprotocol Label Switching
      <br />tewg, Internet Traffic Engineering 
originalUpdate: '2006-09-01 17:20:43'
rfcs:
  - 2547
  - 2702
  - 2917
  - 3031
  - 3032
  - 3034
  - 3035
  - 3036
  - 3063
  - 3107
  - 3270
  - 3353
  - 3429
  - 3443
  - 3468
  - 3469
  - 3471
  - 3472
  - 3473
  - 3477
  - 3564
  - 3630
  - 3811
  - 3812
  - 3813
  - 3814
  - 3815
  - 3919
  - 3945
  - 3946
  - 4003
  - 4023
  - 4105
  - 4126
  - 4127
  - 4139
  - 4182
  - 4201
  - 4202
  - 4203
  - 4206
  - 4208
  - 4216
  - 4221
  - 4247
  - 4257
  - 4258
  - 4328
related:
  - protocol-ip
  - protocol-rsvp
  - protocol-ospf
  - protocol-bgp
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

			In computer networking and telecommunications, Multi-protocol Label Switching (MPLS) is a data-carrying mechanism which emulates some properties of a circuit-switched network over a packet-switched network. MPLS operates at an OSI Model layer that is generally considered to lie between traditional definitions of Layer 2 (data link layer) and Layer 3 (network layer), and thus is often referred to as a 'Layer 2.5' protocol. It was designed to provide a unified data-carrying service for both circuit-based clients and packet-switching clients which provide a datagram service model. It can be used to carry many different kinds of traffic, including IP packets, as well as native ATM, SONET, and Ethernet frames.
<br />
<br /><b>Background</b>
<br />A number of different technologies were previously deployed with essentially identical goals, such as frame relay and ATM. MPLS is now replacing these technologies in the marketplace, mostly because it is better aligned with current and future technology and needs.
<br />
<br />In particular, MPLS dispenses with the cell-switching and signalling-protocol baggage of ATM. MPLS recognizes that small ATM cells are not needed in the core of modern networks, since modern optical networks (as of 2001) are so fast (at 10 Gbit/s and well beyond) that even full-length 1500 byte packets do not incur significant real-time queuing delays (the need to reduce such delays, to support voice traffic, having been the motivation for the cell nature of ATM).
<br />
<br />At the same time, it attempts to preserve the traffic engineering and out-of-band control that made frame relay and ATM attractive for deploying large scale networks.
<br />
<br />One original motivation was to allow the creation of simple high-speed switches, since for a significant length of time it was impossible to forward IP packets entirely in hardware. However, advances in VLSI have made such devices possible. The systemic advantages of MPLS, such as the ability to support multiple service models, do traffic management, etc, remain.
<br />
<br /><b>Architecture</b>
<br />As a packet of a connectionless network layer protocol travels from one router to the next, each router makes an independent forwarding decision for that packet. That is, each router analyzes the packet's header, and each router runs a network layer routing algorithm. Each router independently chooses a next hop for the packet, based on its analysis of the packet's header and the results of running the routing algorithm.
<br />
<br />Packet headers contain considerably more information than is needed simply to choose the next hop. Choosing the next hop can therefore be thought of as the composition of two functions. The first function partitions the entire set of possible packets into a set of ''Forwarding Equivalence Classes (FECs)'. The second maps each FEC to a next hop. Insofar as the forwarding decision is concerned, different packets which get mapped into the same FEC are indistinguishable. All packets which belong to a particular FEC and which travel from a particular node will follow the same path (or if certain kinds of multi-path routing are in use, they will all follow one of a set of paths associated with the FEC).
<br />
<br /><hr />
<br /><b>Header format</b>
<br />The format of the MPLS label stack is shown in the following illustration: 
<br /><b>MPLS label stack</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr><tr><td colspan="8">Label(20 bits)</td></tr><tr><td colspan="3"> </td><td colspan="4">CoS</td><td>S</td></tr><tr><td colspan="8">TTL</td></tr></tbody></table></div></div>
<br />
<br /><ul><li><b>Label</b><br /></li>
<li>The field contains the actual value for the label. This gives information on the protocol in the network layer and further information needed to forward the packet. 
<br /><br /></li>
<li><b>CoS</b><br /></li>
<li>Class of Service. The setting of this field affects the scheduling and/or discard algorithms which are applied to the packet as it is transmitted through the network. 
<br /><br /></li>
<li><b>S</b><br /></li>
<li>Set to one for the last entry in the label stack (i.e., for the bottom of the stack) and cleared to zero for all other label stack entries.
<br /><br /></li>
<li><b>TTL</b><br /></li>
<li>Time to Live, 8-bit field used to encode a time to live value.</li></ul>
<br /><hr />
<br />In conventional IP forwarding, a particular router will typically consider two packets to be in the same FEC if there is some address prefix X in that router's routing tables such that X is the "longest match" for each packet's destination address. As the packet traverses the network, each hop in turn reexamines the packet and assigns it to a FEC.
<br />
<br />In MPLS, the assignment of a particular packet to a particular FEC is done just once, as the packet enters the network. The FEC to which the packet is assigned is encoded as a short fixed length value known as a "label". When a packet is forwarded to its next hop, the label is sent along with it; that is, the packets are "labeled" before they are forwarded.
<br />
<br />At subsequent hops, there is no further analysis of the packet's network layer header.  Rather, the label is used as an index into a table which specifies the next hop, and a new label. The old label is replaced with the new label, and the packet is forwarded to its next hop.
<br />
<br />In the MPLS forwarding paradigm, once a packet is assigned to a FEC, no further header analysis is done by subsequent routers; all forwarding is driven by the labels. This has a number of advantages over conventional network layer forwarding.
<br />
<br /><ul><li>MPLS forwarding can be done by switches which are capable of doing label lookup and replacement, but are either not capable of analyzing the network layer headers, or are not capable of analyzing the network layer headers at adequate speed.<br /><br /></li>

<li>Since a packet is assigned to a FEC when it enters the network, the ingress router may use, in determining the assignment, any information it has about the packet, even if that information cannot be gleaned from the network layer header. For example, packets arriving on different ports may be assigned to different FECs. Conventional forwarding, on the other hand, can only consider information which travels with the packet in the packet header.<br /><br /></li>

<li>A packet that enters the network at a particular router can be labeled differently than the same packet entering the network at a different router, and as a result forwarding decisions that depend on the ingress router can be easily made. This cannot be done with conventional forwarding, since the identity of a packet's ingress router does not travel with the packet.<br /><br /></li>

<li>The considerations that determine how a packet is assigned to a FEC can become ever more and more complicated, without any impact at all on the routers that merely forward labeled packets.<br /><br /></li>

<li>Sometimes it is desirable to force a packet to follow a particular route which is explicitly chosen at or before the time the packet enters the network, rather than being chosen by the normal dynamic routing algorithm as the packet travels through the network. This may be done as a matter of policy, or to support traffic engineering. In conventional forwarding, this requires the packet to carry an encoding of its route along with it ("source routing"). In MPLS, a label can be used to represent the route, so that the identity of the explicit route need not be carried with the packet.</li></ul>
<br />
<br />Some routers analyze a packet's network layer header not merely to choose the packet's next hop, but also to determine a packet's "precedence" or "class of service". They may then apply different discard thresholds or scheduling disciplines to different packets. MPLS allows (but does not require) the precedence or class of service to be fully or partially inferred from the label. In this case, one may say that the label represents the combination of a FEC and a precedence or class of service.
<br />
<br />MPLS stands for "Multi-protocol" Label Switching, multi-protocol because its techniques are applicable to ANY network layer protocol. In this document, however, we focus on the use of IP as the network layer protocol.
<br />
<br />A router which supports MPLS is known as a "Label Switching Router", or LSR.
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
<td class="MapParent" aria-label="Parent layer protocols">Ethernet<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>MPLS</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />IP<br /><img src="/supporting/images/tline_r.gif" alt="" />IPv6<br /><img src="/supporting/images/tline_r.gif" alt="" />Ethernet II<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />IEEE 802.3<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>ATM</b><br />Asynchronous Transfer Mode (ATM) is a network technology based on transferring data in cells or packets of a fixed size. The cell used with ATM is relatively small compared to units used with older technologies. The small, constant cell size allows ATM equipment to transmit video, audio, and computer data over the same network, and assure that no single type of data hogs the line.<br /><br /><b>BGP</b><br />Border Gateway Protocol (BGP) is an exterior gateway routing protocol that enables groups of routers (called autonomous systems) to share routing information so that efficient, loop-free routes can be established. BGP is commonly used within and between Internet Service Providers (ISPs).<br /><br /><b>Ethernet</b><br />A local-area network (LAN) architecture developed by Xerox Corporation in cooperation with DEC and Intel in 1976. Ethernet uses a bus or star topology and supports data transfer rates of 10 Mbps. The Ethernet specification served as the basis for the IEEE 802.3 standard, which specifies the physical and lower software layers. Ethernet uses the CSMA/CD access method to handle simultaneous demands. It is one of the most widely implemented LAN standards. 
<br />
<br />A newer version of Ethernet, called 100Base-T (or Fast Ethernet), supports data transfer rates of 100 Mbps. And the newest version, Gigabit Ethernet supports data rates of 1 gigabit (1,000 megabits) per second.<br /><br /><b>FEC</b><br />FEC (Forwarding Equivalence Class) is a group of IP packets which are forwarded in the same manner (e.g., over the same path, with the same forwarding treatment).
<br /><br /><br /><b>IP</b><br />The IP (Internet Protocol) is a protocol which uses datagrams to communicate over a packet-switched network. IP specifies the format of packets, also called datagrams, and the addressing scheme. Most networks combine IP with a higher-level protocol called Transmission Control Protocol (TCP), which establishes a virtual connection between a destination and a source. 
<br />
<br />IP by itself is something like the postal system. It allows you to address a package and drop it in the system, but there's no direct link between you and the recipient. TCP/IP, on the other hand, establishes a connection between two hosts so that they can send messages back and forth for a period of time. 
<br />
<br />The current version of IP is IPv4. A new version, called IPv6 or IPng, is under development.<br /><br /><b>MPLS</b><br />MPLS (Multiprotocol Label Switching) is an IETF initiative that integrates Layer 2 information about network links (bandwidth, latency, utilization) into Layer 3 (IP) within a particular autonomous system--or ISP--in order to simplify and improve IP-packet exchange. <br /><br /><b>OSI</b><br />ISO (Open Systems Interconnection) is a worldwide communications that defines a networking framework for implementing protocols in seven layers. Control is passed from one layer to the next, starting at the application layer in one station, proceeding to the bottom layer, over the channel to the next station and back up the hierarchy. 
<br />
<br />At one time, most vendors agreed to support OSI in one form or another, but OSI was too loosely defined and proprietary standards were too entrenched. Except for the OSI-compliant X.400 and X.500 e-mail and directory standards, which are widely used, what was once thought to become the universal communications standard now serves as the teaching model for all other protocols. 
<br />
<br />Most of the functionality in the OSI model exists in all communications systems, although two or three OSI layers may be incorporated into one. 
<br />
<br />OSI is also referred to as the OSI Reference Model or just the OSI Model.<br /><br /><b>OSPF</b><br />OSPF is an interior gateway protocol which is used for routing within a group of routers. It uses link-state technology in which routers send each other information about the direct connections and links which they have to other routers.<br /><br /><b>RSVP</b><br />RSVP (Resource Reservation Setup Protocol) is a new Internet protocol being developed to enable the Internet to support specified Qualities-of-Service (QoS's). Using RSVP, an application will be able to reserve resources along a route from source to destination.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2547.html">RFC 2547</a>] BGP/MPLS VPNs.
                
[<a href="https://www.rfc-editor.org/rfc/rfc2702.html">RFC 2702</a>] Requirements for Traffic Engineering Over MPLS.
                
[<a href="https://www.rfc-editor.org/rfc/rfc2917.html">RFC 2917</a>] A Core MPLS IP VPN Architecture.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3031.html">RFC 3031</a>] Multiprotocol Label Switching Architecture.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3032.html">RFC 3032</a>] MPLS Label Stack Encoding.
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc4182.html">RFC 4182</a>. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc3034.html">RFC 3034</a>] Use of Label Switching on Frame Relay Networks Specification.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3035.html">RFC 3035</a>] MPLS using LDP and ATM VC Switching.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3036.html">RFC 3036</a>] LDP Specification.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3063.html">RFC 3063</a>] MPLS Loop Prevention Mechanism.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3107.html">RFC 3107</a>] Carrying Label Information in BGP-4.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3270.html">RFC 3270</a>] Multi-Protocol Label Switching (MPLS) Support of Differentiated Services.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3353.html">RFC 3353</a>] Overview of IP Multicast in a Multi-Protocol Label Switching (MPLS) Environment.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3429.html">RFC 3429</a>] Assignment of the OAM Alert Label' for Multiprotocol Label Switching Architecture (MPLS) Operation and Maintenance (OAM) Functions.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3443.html">RFC 3443</a>] Time To Live (TTL) Processing in Multi-Protocol Label Switching (MPLS) Networks.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc3032.html">RFC 3032</a>.
                 
[<a href="https://www.rfc-editor.org/rfc/rfc3468.html">RFC 3468</a>] The Multiprotocol Label Switching (MPLS) Working Group decision on MPLS signaling protocols.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3469.html">RFC 3469</a>] Framework for Multi-Protocol Label Switching (MPLS)-based Recovery.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3471.html">RFC 3471</a>] Generalized Multi-Protocol Label Switching (GMPLS) Signaling Functional Description.
                Category: Standards Track. 
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc4201.html">RFC 4201</a>, <a href="https://www.rfc-editor.org/rfc/rfc4328.html">RFC 4328</a>. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc3472.html">RFC 3472</a>] Generalized Multi-Protocol Label Switching (GMPLS) Signaling Constraint-based Routed Label Distribution Protocol (CR-LDP) Extensions.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3473.html">RFC 3473</a>] Generalized Multi-Protocol Label Switching (GMPLS) Signaling Resource ReserVation Protocol-Traffic Engineering (RSVP-TE) Extensions.
                
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc4003.html">RFC 4003</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3477.html">RFC 3477</a>] Signalling Unnumbered Links in Resource ReSerVation Protocol - Traffic Engineering (RSVP-TE).
                
[<a href="https://www.rfc-editor.org/rfc/rfc3564.html">RFC 3564</a>] Requirements for Support of Differentiated Services-aware MPLS Traffic Engineering.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3811.html">RFC 3811</a>] Definitions of Textual Conventions (TCs) for Multiprotocol Label Switching (MPLS) Management.
                iso.org.dod.internet.mgmt.mib-2.transmission.mplsStdMIB (1.3.6.1.2.1.10.166). 
                
[<a href="https://www.rfc-editor.org/rfc/rfc3812.html">RFC 3812</a>] Multiprotocol Label Switching (MPLS) Traffic Engineering (TE) Management Information Base (MIB).
                iso.org.dod.internet.mgmt.mib-2.transmission.mplsStdMIB.MPLS-TE-STD-MIB (1.3.6.1.2.1.10.166.3). 
                
[<a href="https://www.rfc-editor.org/rfc/rfc3813.html">RFC 3813</a>] Multiprotocol Label Switching (MPLS) Label Switching Router (LSR) Management Information Base (MIB).
                iso.org.dod.internet.mgmt.mib-2.transmission.mplsStdMIB.MPLS-LSR-STD-MIB (1.3.6.1.2.1.10.166.2). 
                
[<a href="https://www.rfc-editor.org/rfc/rfc3814.html">RFC 3814</a>] Multiprotocol Label Switching (MPLS) Forwarding Equivalence Class To Next Hop Label Forwarding Entry (FEC-To-NHLFE) Management Information Base (MIB).
                iso.org.dod.internet.mgmt.mib-2.transmission.mplsStdMIB.MPLS-FTN-STD-MIB (1.3.6.1.2.1.10.166.8). 
                
[<a href="https://www.rfc-editor.org/rfc/rfc3815.html">RFC 3815</a>] Definitions of Managed Objects for the Multiprotocol Label Switching (MPLS), Label Distribution Protocol (LDP).
                iso.org.dod.internet.mgmt.mib-2.transmission.mplsStdMIB.MPLS-LDP-STD-MIB (1.3.6.1.2.1.10.166.4). 
                iso.org.dod.internet.mgmt.mib-2.transmission.mplsStdMIB.MPLS-LDP-ATM-STD-MIB (1.3.6.1.2.1.10.166.5). 
                iso.org.dod.internet.mgmt.mib-2.transmission.mplsStdMIB.MPLS-LDP-FRAME-RELAY-STD-MIB (1.3.6.1.2.1.10.166.6). 
                iso.org.dod.internet.mgmt.mib-2.transmission.mplsStdMIB.MPLS-LDP-GENERIC-STD-MIB (1.3.6.1.2.1.10.166.7). 
                
[<a href="https://www.rfc-editor.org/rfc/rfc3919.html">RFC 3919</a>] Remote Network Monitoring (RMON) Protocol Identifiers for IPv6 and Multi Protocol Label Switching (MPLS).
                
[<a href="https://www.rfc-editor.org/rfc/rfc3945.html">RFC 3945</a>] Generalized Multi-Protocol Label Switching (GMPLS) Architecture.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3946.html">RFC 3946</a>] Generalized Multi-Protocol Label Switching (GMPLS) Extensions for Synchronous Optical Network (SONET) and Synchronous Digital Hierarchy (SDH) Control.
                Defines CR-LDP TLV 0x0838 (SONET/SDH Traffic Parameters). 
                Defines RSVP 0x0904 (SONET/SDH FLOWSPEC) and 0x0C04 (SONET/SDH SENDER_TSPEC). 
                
[<a href="https://www.rfc-editor.org/rfc/rfc4003.html">RFC 4003</a>] GMPLS Signaling Procedure for Egress Control.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc3473.html">RFC 3473</a>. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc4023.html">RFC 4023</a>] Encapsulating MPLS in IP or Generic Routing Encapsulation (GRE).
                Defines IP protocol 137 (MPLS in IP). 
                
[<a href="https://www.rfc-editor.org/rfc/rfc4105.html">RFC 4105</a>] Requirements for Inter-Area MPLS Traffic Engineering.
                
[<a href="https://www.rfc-editor.org/rfc/rfc4126.html">RFC 4126</a>] Max Allocation with Reservation Bandwidth Constraints Model for Diffserv-aware MPLS Traffic Engineering &amp; Performance Comparisons.
                
[<a href="https://www.rfc-editor.org/rfc/rfc4127.html">RFC 4127</a>] Russian Dolls Bandwidth Constraints Model for Diffserv-aware MPLS Traffic Engineering.
                
[<a href="https://www.rfc-editor.org/rfc/rfc4139.html">RFC 4139</a>] Requirements for Generalized MPLS (GMPLS) Signaling Usage and Extensions for Automatically Switched Optical Network (ASON).
                
[<a href="https://www.rfc-editor.org/rfc/rfc4182.html">RFC 4182</a>] Removing a Restriction on the use of MPLS Explicit NULL.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc3032.html">RFC 3032</a>. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc4201.html">RFC 4201</a>] Link Bundling in MPLS Traffic Engineering (TE).
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc3471.html">RFC 3471</a>, <a href="https://www.rfc-editor.org/rfc/rfc3472.html">RFC 3472</a>, <a href="https://www.rfc-editor.org/rfc/rfc3473.html">RFC 3473</a>. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc4202.html">RFC 4202</a>] Routing Extensions in Support of Generalized Multi-Protocol Label Switching (GMPLS).
                
[<a href="https://www.rfc-editor.org/rfc/rfc4203.html">RFC 4203</a>] OSPF Extensions in Support of Generalized Multi-Protocol Label Switching (GMPLS).
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc3630.html">RFC 3630</a>. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc4206.html">RFC 4206</a>] Label Switched Paths (LSP) Hierarchy with Generalized Multi-Protocol Label Switching (GMPLS) Traffic Engineering (TE).
                
[<a href="https://www.rfc-editor.org/rfc/rfc4208.html">RFC 4208</a>] Generalized Multiprotocol Label Switching (GMPLS) User-Network Interface (UNI): Resource ReserVation Protocol-Traffic Engineering (RSVP-TE) Support for the Overlay Model.
                
[<a href="https://www.rfc-editor.org/rfc/rfc4216.html">RFC 4216</a>] MPLS Inter-Autonomous System (AS) Traffic Engineering (TE) Requirements.
                
[<a href="https://www.rfc-editor.org/rfc/rfc4221.html">RFC 4221</a>] Multiprotocol Label Switching (MPLS) Management Overview.
                
[<a href="https://www.rfc-editor.org/rfc/rfc4247.html">RFC 4247</a>] Requirements for Header Compression over MPLS.
                
[<a href="https://www.rfc-editor.org/rfc/rfc4257.html">RFC 4257</a>] Framework for Generalized Multi-Protocol Label Switching (GMPLS)-based Control of Synchronous Digital Hierarchy/Synchronous Optical Networking (SDH/SONET) Networks.
                
[<a href="https://www.rfc-editor.org/rfc/rfc4258.html">RFC 4258</a>] Requirements for Generalized Multi-Protocol Label Switching (GMPLS) Routing for the Automatically Switched Optical Network (ASON).
                
[<a href="https://www.rfc-editor.org/rfc/rfc4328.html">RFC 4328</a>] Generalized Multi-Protocol Label Switching (GMPLS) Signaling Extensions for G.709 Optical Transport Networks Control.
                	Category: Standards Track. 
                	Defines RSVP 0x0905 (G.709) and 0x0C05 (G.709). 
                	Updates: <a href="https://www.rfc-editor.org/rfc/rfc3471.html">RFC 3471</a>.
                		  </div>
		  
</section>

