---
id: protocol-bgp
slug: bgp
name: BGP
expandedName: Border Gateway Protocol
origin: historical
provenance:
  source: protocols/protocol_BGP.htm
  sha256: b97a0af329929078552fb5ca1e87c75f3c4f68d1a05a84aafaaf04958a0824fd
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Border Gateway Protocol
layers:
  - Network Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Border Gateway Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Network Layer
  - label: Type
    html: Distance vector routing protocol
  - label: SNMP MIBs
    html: iso.org.dod.internet.mgmt.mib-2.bgp (1.3.6.1.2.1.15)
  - label: Working groups
    html: |-
      Bgp, Border Gateway Protocol.
      <br />Idr, Inter-Domain Routing
      <br />
originalUpdate: '2006-01-12 13:51:29'
rfcs:
  - 1105
  - 1163
  - 1164
  - 1265
  - 1266
  - 1267
  - 1268
  - 1269
  - 1364
  - 1397
  - 1403
  - 1654
  - 1655
  - 1656
  - 1657
  - 1745
  - 1771
  - 1772
  - 1773
  - 1774
  - 1812
  - 1817
  - 1863
  - 1930
  - 1965
  - 1966
  - 1997
  - 1998
  - 2042
  - 2270
  - 2283
  - 2385
  - 2439
  - 2519
  - 2545
  - 2547
  - 2791
  - 2796
  - 2842
  - 2858
  - 2918
  - 3065
  - 3107
  - 3166
  - 3167
  - 3221
  - 3345
  - 3392
  - 3765
  - 3882
related: []
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

			BGP (Border Gateway Protocol) is a protocol for exchanging routing information between gateway hosts (each with its own router) in a network of autonomous systems. BGP is often the protocol used between gateway hosts on the Internet. The routing table contains a list of known routers, the addresses they can reach, and a cost metric associated with the path to each router so that the best available route is chosen.
<br />
<br />BGP uses TCP as its transport protocol, on port 179. On connection start, BGP peers exchange complete copies of their routing tables, which can be quite large. However, only changes (deltas) are then exchanged, which makes long running BGP sessions more efficient than shorter ones. 
<br />
<br />BGP's basic unit of routing information is the BGP path, a route to a certain set of CIDR prefixes. Paths are tagged with various path attributes, of which the most important are AS_PATH and NEXT_HOP. 
<br />
<br />BGP was created to replace the EGP£¨Exterior Gateway Protocol£© routing protocol to allow fully decentralized routing in order to allow the removal of the NSFNET£¨National Science Foundation Network£© Internet backbone network. This allowed the Internet to become a truly decentralized system.
<br />
<br />Very large private IP networks can also make use of BGP; an example would be the joining of a number of large OSPF£¨Open Shortest Path First£© networks where OSPF by itself would not scale to size. Another reason to use BGP would be multihoming a network for better redundancy.
<br />
<br />BGP has proven to be scalable, stable and provides the mechanisms needed to support complex routing policies. When people talk about BGP today, they implicitly mean BGP4. There is no need to specify the -4 version number because no one uses earlier versions, and very few vendors even still support them.
<br />
<br />The Border Gateway Protocol is an inter-Autonomous System routing protocol. The primary function of a BGP speaking system is to exchange network reachability information with other BGP systems. This network reachability information includes information on the list of Autonomous Systems (ASs) that reachability information traverses. This information is sufficient to construct a graph of AS connectivity from which routing loops may be pruned and some policy decisions at the AS level may be enforced.
<br />
<br />The planned use of BGP in the Internet environment, including such issues as topology, the interaction between BGP and IGPs, and the enforcement of routing policy rules is presented in a companion document [5]. This document is the first of a series of documents planned to explore various aspects of BGP application.
<br /><hr />
<br /><b>BGP-4</b>
<br />This version redefines the previously class-based network layer reachability portion of the updates to specify prefixes of arbitrary length in order to represent multiple classful networks in a single entry. The AS_PATH attribute has been modified so that sets of autonomous systems, as well as individual ASs may be described. In addition, The INTER-AS METRIC attribute has been redefined as the MULTI-EXIT DISCRIMINATOR. The LOCAL-PREFERENCE and AGGREGATOR attributes have been added.
<br /><ul><li>Message size varies from 19 to 4096 bytes. </li><li>Supports CIDR.</li></ul>
<br />
<br /><b>BGP-4 header</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td> 16</td> <td> 2 </td><td> 1</td> <td> bytes</td> </tr><tr><td> Marker </td><td> Length</td> <td> Type</td><td></td> </tr></tbody></table></div></div><ul><li><b>Marker</b>
<br />This 16-octet field contains a value that the receiver of the message can predict. If the Type of the message is OPEN, or if the OPEN message carries no Authentication Information (as an Optional Parameter), then the Marker must be all ones. Otherwise, the value of the marker can be predicted by some a computation specified as part of the authentication mechanism (which is specified as part of the Authentication Information) used. The Marker can be used to detect loss of synchronization between a pair of BGP peers, and to authenticate incoming BGP messages.<br /></li>
<li><b>Length</b>
<br />This 2-octet unsigned integer indicates the total length of the message, including the header, in octets. Thus, e.g., it allows one to locate in the transport-level stream the (Marker field of the) next message. The value of the Length field must always be at least 19 and no greater than 4096, and may be further constrained, depending on the message type. No "padding" of extra data after the message is allowed, so the Length field must have the smallest value required given the rest of the message.<br /><br /></li>

<li><b>Type</b>
<br /><div>This 1-octet unsigned integer indicates the type code of the message. The following type codes are defined.
<br /><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>Type</td><td>Description</td></tr><tr><td>1</td><td>OPEN.</td></tr><tr><td>2</td><td>UPDATE.</td></tr><tr><td>3</td><td>NOTIFICATION.</td></tr><tr><td>4</td><td>KEEPALIVE.</td></tr><tr><td>5</td><td>ROUTE-REFRESH.</td></tr></tbody></table></div></div>
<br /><ul><li><b>OPEN Message Format</b>
<br />After a transport protocol connection is established, the first message sent by each side is an OPEN message. If the OPEN message is acceptable, a KEEPALIVE message confirming the OPEN is sent back. Once the OPEN is confirmed, UPDATE, KEEPALIVE, and NOTIFICATION messages may be exchanged.<br /><br /></li>

<li><b>UPDATE Message Format</b>
<br />UPDATE messages are used to transfer routing information between BGP peers. The information in the UPDATE packet can be used to construct a graph describing the relationships of the various Autonomous Systems. By applying rules to be discussed, routing information loops and some other anomalies may be detected and removed from inter-AS routing.<br /><br /></li>

<li><b>NOTIFICATION Message Format</b>
<br />A NOTIFICATION message is sent when an error condition is detected. The BGP connection is closed immediately after sending it.<br /><br /></li>

<li><b>KEEPALIVE Message Format</b>
<br />BGP does not use any transport protocol-based keep-alive mechanism to determine if peers are reachable. Instead, KEEPALIVE messages are exchanged between peers often enough as not to cause the Hold Timer to expire. A reasonable maximum time between KEEPALIVE messages would be one third of the Hold Time interval. KEEPALIVE messages MUST NOT be sent more frequently than one per second. An implementation MAY adjust the rate at which it sends.</li></ul></div></li></ul>
<br /><hr />
<br />To characterize the set of policy decisions that can be enforced using BGP, one must focus on the rule that a BGP speaker advertise to its peers (other BGP speakers which it communicates with) in neighboring ASs only those routes that it itself uses.  This rule reflects the "hop-by-hop" routing paradigm generally used throughout the current Internet.  Note that some policies cannot be supported by the "hop-by-hop" routing paradigm and thus require techniques such as source routing to enforce.  For example, BGP does not enable one AS to send traffic to a neighboring AS intending that the traffic take a different route from that taken by traffic originating in the neighboring AS.  On the other hand, BGP can support any policy conforming to the "hop-by-hop" routing paradigm.  Since the current Internet uses only the "hop-by-hop" routing paradigm and since BGP can support any policy that conforms to that paradigm, BGP is highly applicable as an inter-AS routing protocol for the current Internet.
<br />
<br />A more complete discussion of what policies can and cannot be enforced with BGP is outside the scope of this document (but refer to the companion document discussing BGP usage [5]).
<br />
<br />BGP runs over a reliable transport protocol.  This eliminates the need to implement explicit update fragmentation, retransmission, acknowledgement, and sequencing.  Any authentication scheme used by the transport protocol may be used in addition to BGP's own authentication mechanisms. The error notification mechanism used in BGP assumes that the transport protocol supports a "graceful" close, i.e., that all outstanding data will be delivered before the connection is closed.
<br />
<br />BGP uses TCP [4] as its transport protocol.  TCP meets BGP's transport requirements and is present in virtually all commercial routers and hosts.  In the following descriptions the phrase "transport protocol connection" can be understood to refer to a TCP connection.  BGP uses TCP port 179 for establishing its connections.
<br />
<br />This document uses the term `Autonomous System' (AS) throughout.  The classic definition of an Autonomous System is a set of routers under a single technical administration, using an interior gateway protocol and common metrics to route packets within the AS, and using an exterior gateway protocol to route packets to other ASs.  Since this classic definition was developed, it has become common for a single
<br />
<br />AS to use several interior gateway protocols and sometimes several sets of metrics within an AS. The use of the term Autonomous System here stresses the fact that, even when multiple IGPs and metrics are used, the administration of an AS appears to other ASs to have a single coherent interior routing plan and presents a consistent picture of what destinations are reachable through it.
<br />
<br />The planned use of BGP in the Internet environment, including such issues as topology, the interaction between BGP and IGPs, and the enforcement of routing policy rules is presented in a companion document [5].  This document is the first of a series of documents planned to explore various aspects of BGP application.  Please send comments to the BGP mailing list.
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
<td class="MapParent" aria-label="Parent layer protocols">TCP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>BGP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>AS_PATH</b><br />AS_PATH is a well-known mandatory attribute.<br /><br /><b>Autonomous Systems</b><br />Autonomous system (AS) is the unit of router policy, either a single network or a group of networks that is controlled by a common network administrator (or group of administrators) on behalf of a single administrative entity.<br /><br /><b>CIDR</b><br />CIDR (Classless Inter-Domain Routing) is a new addressing scheme for the Internet which allows for more efficient allocation of IP addresses than the old Class A, B, and C address scheme. A CIDR IP address looks like a normal IP address except that it ends with a slash followed by a number, called the IP network prefix. <br /><br /><b>EGP</b><br />EGP (Exterior Gateway Protocol) is for exchanging routing information between two neighbor gateway hosts in a network of autonomous systems. An EGP is typically used between hosts on the Internet to share routing table information. 
<br />
<br />BGP is an example of an EGP.<br /><br /><b>NEXT_HOP</b><br />The IP address of the border router that should be used as the next hop to the destinations listed in the UPDATE message.<br /><br /><b>NSFNET</b><br />NSFnet is a wide-area network developed under the auspices of the National Science Foundation (NSF). NSFnet replaced ARPANET as the main government network linking universities and research facilities. In 1995, however, the NSF dismantled NSFnet and replaced it with a commercial Internet backbone. At the same time, the NSF implemented a new backbone called very high-speed Backbone Network Service (vBNS), which serves as a testing ground for the next generation of Internet technologies.<br /><br /><b>OSPF</b><br />OSPF is an interior gateway protocol which is used for routing within a group of routers. It uses link-state technology in which routers send each other information about the direct connections and links which they have to other routers.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="http://www.iana.org/assignments/bgp-parameters">BGP parameters</a>
                <a href="http://www.iana.org/assignments/bgp-well-known-communities">BGP Well-Known Communities</a><hr /><b>RFCs</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1265.html">RFC 1265</a>] BGP Protocol Analysis.
[<a href="https://www.rfc-editor.org/rfc/rfc1266.html">RFC 1266</a>] Experience with the BGP Protocol
[<a href="https://www.rfc-editor.org/rfc/rfc1267.html">RFC 1267</a>] A Border Gateway Protocol 3 (BGP-3).
                Defines BGP-3. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1105.html">RFC 1105</a>, <a href="https://www.rfc-editor.org/rfc/rfc1163.html">RFC 1163</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1269.html">RFC 1269</a>] Definitions of Managed Objects for the Border Gateway Protocol (Version 3).
[<a href="https://www.rfc-editor.org/rfc/rfc1397.html">RFC 1397</a>] Default Route Advertisement In BGP2 And BGP3 Versions Of The Border Gateway Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc1403.html">RFC 1403</a>] BGP OSPF Interaction.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1364.html">RFC 1364</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1657.html">RFC 1657</a>] Definitions of Managed Objects for the Fourth Version of the Border Gateway Protocol (BGP-4) using SMIv2.
[<a href="https://www.rfc-editor.org/rfc/rfc1745.html">RFC 1745</a>] BGP4/IDRP for IP---OSPF Interaction.
[<a href="https://www.rfc-editor.org/rfc/rfc1771.html">RFC 1771</a>] A Border Gateway Protocol 4 (BGP-4).
                Defines BGP version 4. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1654.html">RFC 1654</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1772.html">RFC 1772</a>] Application of the Border Gateway Protocol in the Internet.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1655.html">RFC 1655</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1773.html">RFC 1773</a>] Experience with the BGP-4 protocol.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1656.html">RFC 1656</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1774.html">RFC 1774</a>] BGP-4 Protocol Analysis.
[<a href="https://www.rfc-editor.org/rfc/rfc1812.html">RFC 1812</a>] Requirements for IP Version 4 Routers.
[<a href="https://www.rfc-editor.org/rfc/rfc1817.html">RFC 1817</a>] CIDR and Classful Routing.
[<a href="https://www.rfc-editor.org/rfc/rfc1863.html">RFC 1863</a>] A BGP/IDRP Route Server alternative to a full mesh routing.
[<a href="https://www.rfc-editor.org/rfc/rfc1930.html">RFC 1930</a>] Guidelines for creation, selection, and registration of an Autonomous System (AS).
[<a href="https://www.rfc-editor.org/rfc/rfc1966.html">RFC 1966</a>] BGP Route Reflection. An alternative to full mesh IBGP.
[<a href="https://www.rfc-editor.org/rfc/rfc1997.html">RFC 1997</a>] BGP Communities Attribute.
[<a href="https://www.rfc-editor.org/rfc/rfc1998.html">RFC 1998</a>] An Application of the BGP Community Attribute in Multi-home Routing.
[<a href="https://www.rfc-editor.org/rfc/rfc2042.html">RFC 2042</a>] Registering New BGP Attribute Types.
[<a href="https://www.rfc-editor.org/rfc/rfc2270.html">RFC 2270</a>] Using a Dedicated AS for Sites Homed to a Single Provider.
[<a href="https://www.rfc-editor.org/rfc/rfc2385.html">RFC 2385</a>] Protection of BGP Sessions via the TCP MD5 Signature Option.
[<a href="https://www.rfc-editor.org/rfc/rfc2439.html">RFC 2439</a>] BGP Route Flap Damping.
[<a href="https://www.rfc-editor.org/rfc/rfc2519.html">RFC 2519</a>] A Framework for Inter-Domain Route Aggregation.
[<a href="https://www.rfc-editor.org/rfc/rfc2545.html">RFC 2545</a>] Use of BGP-4 Multiprotocol Extensions for IPv6 Inter-Domain Routing.
[<a href="https://www.rfc-editor.org/rfc/rfc2547.html">RFC 2547</a>] BGP/MPLS VPNs.
[<a href="https://www.rfc-editor.org/rfc/rfc2791.html">RFC 2791</a>] Scalable Routing Design Principles.
[<a href="https://www.rfc-editor.org/rfc/rfc2796.html">RFC 2796</a>] BGP Route Reflection - An Alternative to Full Mesh IBGP.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1966.html">RFC 1966</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2858.html">RFC 2858</a>] Multiprotocol Extensions for BGP-4.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2283.html">RFC 2283</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2918.html">RFC 2918</a>] Route Refresh Capability for BGP-4.
[<a href="https://www.rfc-editor.org/rfc/rfc3065.html">RFC 3065</a>] Autonomous System Confederations for BGP.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1965.html">RFC 1965</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3107.html">RFC 3107</a>] Carrying Label Information in BGP-4.
[<a href="https://www.rfc-editor.org/rfc/rfc3166.html">RFC 3166</a>] Request to Move <a href="https://www.rfc-editor.org/rfc/rfc1403.html">RFC 1403</a> to Historic Status.
[<a href="https://www.rfc-editor.org/rfc/rfc3167.html">RFC 3167</a>] Request to Move <a href="https://www.rfc-editor.org/rfc/rfc1745.html">RFC 1745</a> to Historic Status.
[<a href="https://www.rfc-editor.org/rfc/rfc3221.html">RFC 3221</a>] Commentary on Inter-Domain Routing in the Internet.
[<a href="https://www.rfc-editor.org/rfc/rfc3345.html">RFC 3345</a>] Border Gateway Protocol (BGP) Persistent Route Oscillation Condition.
[<a href="https://www.rfc-editor.org/rfc/rfc3392.html">RFC 3392</a>] Capabilities Advertisement with BGP-4.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2842.html">RFC 2842</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3765.html">RFC 3765</a>] NOPEER Community for Border Gateway Protocol (BGP) Route Scope Control.
                Defines BGP community (0xFFFFFF04) NOPEER. 
[<a href="https://www.rfc-editor.org/rfc/rfc3882.html">RFC 3882</a>] Configuring BGP to Block Denial-of-Service Attacks.<hr /><b>Obsolete RFCs</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1105.html">RFC 1105</a>] A Border Gateway Protocol (BGP).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1163.html">RFC 1163</a>. 
                Defines BGP-1. 
[<a href="https://www.rfc-editor.org/rfc/rfc1163.html">RFC 1163</a>] A Border Gateway Protocol (BGP).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1267.html">RFC 1267</a>. 
                Defines BGP-2. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1105.html">RFC 1105</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1164.html">RFC 1164</a>] Application of the Border Gateway Protocol in the Internet.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1268.html">RFC 1268</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1268.html">RFC 1268</a>] Application of the Border Gateway Protocol in the Internet.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1655.html">RFC 1655</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1164.html">RFC 1164</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1364.html">RFC 1364</a>] BGP OSPF Interaction.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1403.html">RFC 1403</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1654.html">RFC 1654</a>] A Border Gateway Protocol 4 (BGP-4).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1771.html">RFC 1771</a>. 
                Defines BGP-4. 
[<a href="https://www.rfc-editor.org/rfc/rfc1655.html">RFC 1655</a>] Application of the Border Gateway Protocol in the Internet.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1772.html">RFC 1772</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1268.html">RFC 1268</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1656.html">RFC 1656</a>] BGP-4 Protocol Document Roadmap and Implementation Experience.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1773.html">RFC 1773</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1965.html">RFC 1965</a>] Autonomous System Confederations for BGP.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3065.html">RFC 3065</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2283.html">RFC 2283</a>] Multiprotocol Extensions for BGP-4.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2858.html">RFC 2858</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2842.html">RFC 2842</a>] Capabilities Advertisement with BGP-4.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3392.html">RFC 3392</a>.<hr /><b>Publications</b>
[ISBN 0201379511] BGP4: Inter-Domain Routing in the Internet.
[ISBN 0321127005] Practical BGP.
                		  </div>
		  
</section>

