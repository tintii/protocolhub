---
id: protocol-egp
slug: egp
name: EGP
expandedName: Exterior Gateway Protocol
origin: historical
provenance:
  source: protocols/protocol_EGP.htm
  sha256: 3676171ca299672208cd6ec1c9c76f45b1b358ef3f4e745d72806e106ab34476
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Exterior Gateway Protocol
layers:
  - Network Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Exterior Gateway Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Network Layer
  - label: Type
    html: Exterior routing protocol
  - label: SNMP MIBs
    html: iso.org.dod.internet.mgmt.mib-2.egp (1.3.6.1.2.1.8)
  - label: Related protocols
    html: 'IP,<br />IPv4,<br />TCP,<br />BGP,<br />IGP'
originalUpdate: '2006-01-12 17:35:46'
rfcs:
  - 827
  - 888
  - 890
  - 904
  - 911
  - 975
  - 1004
  - 1066
  - 1092
  - 1156
  - 1158
related:
  - protocol-ip
  - protocol-tcp
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

			The Exterior Gateway Protocol (EGP) is an exterior routing protocol used for exchanging routing information with gateways in other autonomous systems. Unlike interior protocols, EGP propagates only reachability indications, not true metrics. EGP updates contain metrics, called distances which range from 0 to 255. GateD will only compare EGP distances learned from the same AS.
<br />
<br />EGP is responsible for communication of network reachability information between neighboring routers, which may or may not be in different autonomous systems. The operation of EGP is somewhat similar to that of BGP. Each EGP router maintains a database of information regarding what networks it can reach and how to reach them. It sends this information out on a regular basis to each router to which it is directly connected. Routers receive these messages and update their routing tables, and then use this new information to update other routers. Information about how to reach each network propagates across the entire internetwork.
<br />
<br />An exterior gateway using EGP passes along information to its EGP neighbors but does not advertise reachability information about its EGP neighbors (gateways are neighbors if they exchange routing information) outside the autonomous system. It has three main features: 
<br /><ul><li>It supports a neighbor acquisition protocol. Two gateways may be regarded as neighbors if they are connected by an internet which is transparent to them. EGP does not specify the way in which one gateway initially decides that it wants to become a neighbor of another. To become a neighbor it must send an Acquisition confirm message as a response to an Acquisition Request message. This step is necessary to obtain routing information from another gateway. <br /><br /></li>

<li>It supports a neighbor reachability protocol. It is used by a gateway to keep real-time information as to the reachability of its neighbors. The EGP protocol provides two message types for that purpose: a Hello message and an I Hear You message (response to Hello). <br /><br /></li>

<li>It supports update messages (also called network reachability (NR) messages) that carry routing information. No gateway is required to send NR.</li></ul>
<br /><hr />
<br /><b>Neighbor Acquisition</b>
<br />Before it is possible to obtain routing information from an exterior gateway, it is necessary to acquire that gateway as a direct neighbor. (The distinction between direct and indirect neighbors will be made in a later section.) In order for two gateways to become direct neighbors, they must be neighbors, in the sense defined above, and they must execute the NEIGHBOR ACQUISITION PROTOCOL, which is simply a standard three-way handshake.
<br />
<br />A gateway that wishes to initiate neighbor acquisition with another sends it a Neighbor Acquisition Request. This message should be repeatedly transmitted (at a reasonable rate, perhaps once every 30 seconds or so) until a Neighbor Acquisition Reply is received. The Request will contain an identification number which is copied into the reply so that request and reply can be matched up.
<br />
<br />A gateway receiving a Neighbor Acquisition Request must determine whether it wishes to become a direct neighbor of the source of the Request. If not, it may, at its option, respond with a Neighbor Acquisition Refusal message, optionally specifying the reason for refusal. Otherwise, it should send a Neighbor Acquisition Reply message. It must also send a Neighbor Acquisition Request message, unless it has done so already.
<br />
<br />Two gateways become direct neighbors when each has sent a Neighbor Acquisition Message to, and received the corresponding Neighbor Acquisition Reply from, the other.
<br />
<br /><b>Neighbor Reachability</b>
<br />The purpose of the neighbor-reachability algorithm is to confirm that the neighbor can safely be considered operational and capable of providing reliable net-reachability information. An equally important purpose is to filter noisy reachability information before sending it on to the remainder of the Internet gateway system, thus avoiding unnecessary reachability changes.
<br />
<br />As described above, a gateway operating in the active mode sends periodic Hello commands and listens for I-H-U responses in order to determine neighbor-reachability indications. A gateway operating in the passive mode determines reachability indications by means of the Status field in received Hello commands. Poll commands and Update responses can be used in lieu of Hello commands and I-H-U responses respectively, since they contain the same Status-field information.
<br />
<br />The neighbor-reachability algorithm runs continuously while the gateway is in the Down and Up states and operates as follows.  Define a moving window in time starting at the present and extending backwards for t seconds. Then count the number n of neighbor-reachability indications which have occurred in that window. If n increases to j, then declare a Up event.  If n decreases to k, then declare a Down event. The number n is set to zero upon entering the Down state from any state other than the Up state.
<br />
<br /><b>Network Reachability</b>
<br />Network reachability information is encoded into Update messages in the form of lists of nets and gateways. The IP Source Address field of the Poll command is used to specify a network common to the autonomous systems of each of the neighbors, which is usually, but not necessarily, the one common to the neighbors themselves. The Update response includes a list of gateways on the common net. Associated with each gateway is a list of the networks reachable via that gateway together with corresponding hop counts.
<br />
<br />Two types of gateway lists can be included in the Update response, the format of which is described in Appendix A. Both lists include only those gateways directly connected to the net specified in the IP Source Network field of the last-received Poll command. The internal list includes some or all of the gateways in the same autonomous system as the sender, together with the nets which are reachable via these gateways, with the sending gateway listed first. A net is reachable in this context if a path exists to that net including only gateways in the system. The external list includes those gateways in other autonomous systems known to the sender. It is important to realize that the hop counts do not represent a routing metric and are comparable between different gateways only if those gateways belong to the same autonomous system; that is, are in the internal list.
<br /><hr />
<br /><b>Header format</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>24</p></td><td><p>32</p></td></tr><tr><td><p>Version</p></td><td><p>Type</p></td><td><p>Code</p></td><td><p>Status</p></td></tr><tr><td colspan="2"><p>Checksum</p></td><td colspan="2"><p>Autonomous System</p></td></tr><tr><td colspan="2"><p>Sequence</p></td><td colspan="2"><p>Data</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Version</b><br /></li>
<li>8 bits. The version number. This version is version 2.
<br /><br /></li>
<li><b>Type</b><br /></li>
<li>8 bits. The type identifies the message type.
<br /><br /></li>
<li><b>Code</b><br /></li>
<li>8 bits. The code identifies the message code (subtype).
<br /><br /></li>
<li><b>Status</b><br /></li>
<li>8 bits. The status contains message-dependent status information.
<br /><br /></li>
<li><b>Checksum</b><br /></li>
<li>16 bits. The EGP checksum is the 16-bit one's complement of the one's complement sum of the EGP message starting with the EGP version number field. When computing the checksum the checksum field itself should be zero.
<br /><br /></li>
<li><b>Autonomous System</b><br /></li>
<li>16 bits. The assigned number identifying the particular autonomous system.
<br /><br /></li>
<li><b>Sequence</b><br /></li>
<li>16 bits. The sequence number is for the send state variable (commands) or receive state variable (responses and indications).
<br /><br /></li>
<li><b>Data</b><br /></li>
<li>Variable length.</li></ul>
<br /><hr />
<br /><b>EGP message types</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>Name</p></td><td><p>Function</p></td></tr><tr><td><p>Request</p></td><td>Request acquisition of neighbor and/or initialize polling variables</td></tr><tr><td><p>Confirm</p></td><td>Confirm acquisition of neighbor and/or initialize polling variables</td></tr><tr><td><p>Refuse</p></td><td>Refuse acquisition of neighbor</td></tr><tr><td><p>Cease</p></td><td>Request de-acquisition of neighbor</td></tr><tr><td><p>Cease-ack</p></td><td>Confirm de-acquisition of neighbor</td></tr><tr><td><p>Hello</p></td><td>Request neigbor reachability</td></tr><tr><td><p>I-H-U</p></td><td>Confirm neigbor reachability</td></tr><tr><td><p>Poll</p></td><td>Request net-reachability update</td></tr><tr><td><p>Update</p></td><td>Net-reachability update</td></tr><tr><td><p>Error</p></td><td>Error message</td></tr></tbody></table></div></div>
<br />
<br /><b>State Machine</b>
<br />The state-machine model includes a number of state variables which establish the state of the protocol between the gateway and each of its neighbors. Thus, a gateway maintaining EGP with a number of neighbors must maintain a separate set of these state variables for each neighbor. The current state, events and actions of the state machine apply to each neighbor separately.
<br />
<br />The model assumes that system resources, including the set of state variables, are allocated when the state machine leaves the Idle state, either because of the arrival of a Request specifying a new neighbor address, or because of a Start event specifying a new neighbor address. When either of these events occur the values of the state variables are initialized as indicated below. Upon return to the Idle state all resources, including the set of state variables, are deal located and returned to the system. Implementators may, of course, elect to dedicate resources and state variables permanently.
<br />
<br />Following is a list of time-interval parameters which control retransmissions and other time-dependent functions.
<br /><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td><p>Name</p></td><td><p>Value</p></td><td><p>Description</p></td></tr><tr><td>P1</td><td>30 sec</td><td>minimum interval acceptable between successive Hello commands received</td></tr><tr><td>P2</td><td>2 min</td><td>minimum interval acceptable between successive Poll commands received</td></tr><tr><td>P3</td><td>30 sec</td><td>interval between Request or Cease command retransmissions</td></tr><tr><td>P4</td><td>1 hr</td><td>interval during which state variables are maintained in the absence of commands or responses in the Down and Up states.</td></tr><tr><td>P5</td><td>2 min</td><td>interval during which state variables are maintained in the absence of responses in the Acquisition and Cease states</td></tr></tbody></table></div></div>
<br />
<br /><b>Managing the State Variables</b>
<br />This section describes the detailed management of these variables, including sequence numbers, polling intervals and timers.
<br /><ul><li><b>Sequence Numbers</b><br /></li>
<li>All EGP commands and replies carry a sequence number. The state variable R records the last sequence number received in a command from that neighbor. The current value of R is used as the sequence number for all replies and indications sent to the neighbor until a command with a different sequence number is received from that neighbor.
<br /><br /></li>
<li>Implementors are free to manage the sequence numbers of the commands sent; however, it is suggested that a separate send state variable S be maintained for each EGP neighbor and that its value be incremented just before the time an Poll command is sent and at no other times. The actions upon receipt of a response or indication with sequence number not equal to S is not specified; however, it is recommended these be discarded.
<br /><br /></li>
<li><b>Polling Intervals</b><br /></li>
<li>As part of the Request/Confirm exchange a set of polling intervals are established including T1, which establishes the interval between Hello command retransmissions, and T2, which establishes the interval between Poll retransmissions.
<br /><br /></li>
<li>Each gateway configuration is characterized by a set of fixed parameters, including P1, which specifies the minimum polling interval at which it will respond to Hello commands, and P2, which specifies the minimum polling interval at which it will respond to Poll commands. P1 and P2 are inserted in the Hello Interval (S1) and Poll Interval (S2) fields, respectively, of Request commands and Confirm responses.
<br /><br /></li>
<li><b>Hello Polling Mode</b><br /></li>
<li>The neighbor-reachability algorithm can be used in either the active or passive mode. In the active mode Hello commands are sent periodically along with Poll commands, with reachability determined by the corresponding I-H-U and Update responses. In the passive mode Hello commands are not sent and I-H-U responses are not expected. Reachability is then determined from the Status field of received Hello or Poll commands or Update responses.
<br /><br /></li>
<li><b>Timers</b><br /></li>
<li>There are three timers defined in the state machine: t1, used to control retransmission of Request, Hello and Cease messages, t2, used to control retransmission of Poll commands, and t3, which serves as an abort-timer mechanism should the protocol hang indefinitely. The timers are set to specified values upon entry to each state and count down to zero.</li></ul>
<br /><hr />
<br /><b>Starting and Stopping the Protocol</b>
<br />The Start and Stop events are intrinsic to the system environment of the gateway. They can be declared as the result of the gateway process being started and stopped by the operator, for example. A Start event has meaning only in some states; however, a Stop event has meaning in all states.
<br />
<br />In all except the Idle state the abort timer t3 is presumed running. This timer is initialized at P5 seconds upon entry to any state and at P4 seconds upon receipt of a neighbor-reachability indication in the Down and Up states. If it expires a Stop event is declared. A Stop event can also be declared by an intrinsic system action such as a resource problem or operator command.
<br />
<br /><b>Determining Neighbor Reachability</b>
<br />The purpose of the neighbor-reachability algorithm is to confirm that the neighbor can safely be considered operational and capable of providing reliable net-reachability information.  An equally important purpose is to filter noisy reachability information before sending it on to the remainder of the Internet gateway system, thus avoiding unnecessary reachability changes.
<br />
<br />As described above, a gateway operating in the active mode sends periodic Hello commands and listens for I-H-U responses in order to determine neighbor-reachability indications. A gateway operating in the passive mode determines reachability indications by means of the Status field in received Hello commands. Poll commands and Update responses can be used in lieu of Hello commands and I-H-U responses respectively, since they contain the same Status-field information.
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
<td class="MapParent" aria-label="Parent layer protocols">IP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>EGP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>BGP</b><br />Border Gateway Protocol (BGP) is an exterior gateway routing protocol that enables groups of routers (called autonomous systems) to share routing information so that efficient, loop-free routes can be established. BGP is commonly used within and between Internet Service Providers (ISPs).<br /><br /><b>Gateway</b><br />A network device used to translate between two different protocols. Used to interconnect two networks that use incompatible protocols. It is a node on a network that serves as an entrance to another network. In enterprises, the gateway is the computer that routes the traffic from a workstation to the outside network that is serving the Web pages. In homes, the gateway is the ISP that connects the user to the internet. 
<br />
<br />In enterprises, the gateway node often acts as a proxy server and a firewall. The gateway is also associated with both a router, which use headers and forwarding tables to determine where packets are sent, and a switch, which provides the actual path for the packet in and out of the gateway.
<br />
<br />It is also a computer system located on earth that switches data signals and voice signals between satellites and terrestrial networks and an earlier term for router, though now obsolete in this sense as router is commonly used.<br /><br /><b>Router</b><br />A device that forwards data packets along networks. A router is connected to at least two networks, commonly two LANs or WANs or a LAN and its ISP network. Routers are located at gateways, the places where two or more networks connect. 
<br />
<br />Routers use headers and forwarding tables to determine the best path for forwarding the packets, and they use protocols such as ICMP to communicate with each other and configure the best route between any two hosts.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc827.html">RFC 827</a>] EXTERIOR GATEWAY PROTOCOL (EGP).
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc904.html">RFC 904</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc888.html">RFC 888</a>] STUB EXTERIOR GATEWAY PROTOCOL.
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc904.html">RFC 904</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc890.html">RFC 890</a>] Exterior Gateway Protocol Implementation Schedule.
[<a href="https://www.rfc-editor.org/rfc/rfc904.html">RFC 904</a>] Exterior Gateway Protocol Formal Specification.
                STD: 18. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc827.html">RFC 827</a>, <a href="https://www.rfc-editor.org/rfc/rfc888.html">RFC 888</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc911.html">RFC 911</a>] EGP GATEWAY UNDER BERKELEY UNIX 4.2.
[<a href="https://www.rfc-editor.org/rfc/rfc975.html">RFC 975</a>] Autonomous Confederations.
[<a href="https://www.rfc-editor.org/rfc/rfc1004.html">RFC 1004</a>] A Distributed-Protocol Authentication Scheme.
[<a href="https://www.rfc-editor.org/rfc/rfc1092.html">RFC 1092</a>] EGP and Policy Based Routing in the New NSFNET Backbone.
[<a href="https://www.rfc-editor.org/rfc/rfc1156.html">RFC 1156</a>] Management Information Base for Network Management of TCP/IP-based internets.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1066.html">RFC 1066</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1158.html">RFC 1158</a>] Management Information Base for Network Management of TCP/IP-based internets: MIB-II.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc1066.html">RFC 1066</a>] Management Information Base for Network Management of TCP/IP-based internets.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1156.html">RFC 1156</a>
                		  </div>
		  
</section>

