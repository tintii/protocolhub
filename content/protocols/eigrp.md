---
id: protocol-eigrp
slug: eigrp
name: EIGRP
expandedName: Enhanced Interior Gateway Routing Protocol
origin: historical
provenance:
  source: protocols/protocol_EIGRP.htm
  sha256: 70c78ebc4978558a5883867ab3af8f4a4764f984e0c40f87879a59fb39944967
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Enhanced Interior Gateway Routing Protocol
layers:
  - Network Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Enhanced Interior Gateway Routing Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Network Layer
  - label: Type
    html: Transport layer interior gateway
  - label: Multicast addresses
    html: 224.0.0.10.
  - label: Related protocols
    html: 'IP,<br />TCP,<br />IGRP,<br />RIP,<br />EGP,<br />BGP'
originalUpdate: '2006-01-12 17:36:34'
rfcs: []
related:
  - protocol-ip
  - protocol-tcp
  - protocol-igrp
  - protocol-rip
  - protocol-egp
  - protocol-bgp
glossary: []
sections:
  - id: description
    title: Description
  - id: relations
    title: Protocol relations
  - id: glossary
    title: Local glossary
editorialNotes: []
---
<section aria-labelledby="description">
<h2 id="description">Description</h2>

			EIGRP Enhanced Interior Gateway Routing Protocol (EIGRP) is an enhanced version of IGRP. IGRP is Cisco's Interior Gateway Routing Protocol used in TCP/IP and OSI internets. It is regarded as an interior gateway protocol (IGP) but has also been used extensively as an exterior gateway protocol for inter-domain routing. IGRP uses distance vector routing technology. The same distance vector technology found in IGRP is also used in EIGRP, and the underlying distance information remains unchanged. The convergence properties and the operating efficiency of this protocol have improved significantly.
<br />
<br />Here are some of EIGRP's improvements over IGRP:
<br /><ul><li>DUAL (Diffusing Update Algorithm)<br /></li>
<li>Incremental updates<br /></li>
<li>Loop-free networks<br /></li>
<li>Reduced bandwidth usage<br /></li> 
<li>Support for multiple network layer protocols (IP, IPX, AppleTalk)<br /></li>
<li>Support for variable-length subnet masks (VLSMs), discontiguous networks, and classless routing<br /></li>
<li>Advanced distance vector capabilities<br /></li>
<li>Automatic route summarization on major network boundaries</li></ul> 
<br />
<br />Enhanced IGRP provides compatibility and seamless interoperation with IGRP routers. An automatic-redistribution mechanism allows IGRP routes to be imported into Enhanced IGRP, and vice versa, so it is possible to add Enhanced IGRP gradually into an existing IGRP network. Because the metrics for both protocols are directly translatable, they are as easily comparable as if they were routes that originated in their own autonomous systems (ASs). In addition, Enhanced IGRP treats IGRP routes as external routes and provides a way for the network administrator to customize them.
<br />
<br />EIGRP uses bandwidth and delay by default to calculate its metric. It can also be configured to use reliability, load, and MTU. EIGRP's metric is the same as IGRP's metric, except that it is multiplied by 256 for improved granularity.
<br />
<br />Processes and Technologies
<br />To provide superior routing performance, Enhanced IGRP employs four key technologies that combine to differentiate it from other routing technologies: neighbor discovery/recovery, reliable transport protocol (RTP), DUAL finite-state machine, and protocol-dependent modules.
<br />
<br />The neighbor discovery/recovery mechanism enables routers to dynamically learn about other routers on their directly attached networks. Routers also must discover when their neighbors become unreachable or inoperative. This process is achieved with low overhead by periodically sending small hello packets. As long as a router receives hello packets from a neighboring router, it assumes that the neighbor is functioning, and the two can exchange routing information.
<br />
<br />The DUAL finite-state machine embodies the decision process for all route computations by tracking all routes advertised by all neighbors. DUAL uses distance information to select efficient, loop-free paths and selects routes for insertion in a routing table based on feasible successors. A feasible successor is a neighboring router used for packet forwarding that is a least-cost path to a destination that is guaranteed not to be part of a routing loop. When a neighbor changes a metric, or when a topology change occurs, DUAL tests for feasible successors. If one is found, DUAL uses it to avoid recomputing the route unnecessarily. When no feasible successors exist but neighbors still advertise the destination, a recomputation (also known as a diffusing computation) must occur to determine a new successor. Although recomputation is not processor-intensive, it does affect convergence time, so it is advantageous to avoid unnecessary recomputations.
<br />
<br />Protocol-dependent modules are responsible for network layer protocol-specific requirements. The IP-Enhanced IGRP module, for example, is responsible for sending and receiving Enhanced IGRP packets that are encapsulated in IP. Likewise, IP-Enhanced IGRP is also responsible for parsing Enhanced IGRP packets and informing DUAL of the new information that has been received. IP-Enhanced IGRP asks DUAL to make routing decisions, the results of which are stored in the IP routing table. IP-Enhanced IGRP is responsible for redistributing routes learned by other IP routing protocols.
<br /><hr />
<br /><b>Processes and Technologies</b>
<br />To provide superior routing performance, Enhanced IGRP employs four key technologies that combine to differentiate it from other routing technologies: neighbor discovery/recovery, reliable transport protocol (RTP), DUAL finite-state machine, and protocol-dependent modules.
<br />
<br />The neighbor discovery/recovery mechanism enables routers to dynamically learn about other routers on their directly attached networks. Routers also must discover when their neighbors become unreachable or inoperative. This process is achieved with low overhead by periodically sending small hello packets. As long as a router receives hello packets from a neighboring router, it assumes that the neighbor is functioning, and the two can exchange routing information.
<br />
<br />The DUAL finite-state machine embodies the decision process for all route computations by tracking all routes advertised by all neighbors. DUAL uses distance information to select efficient, loop-free paths and selects routes for insertion in a routing table based on feasible successors. A feasible successor is a neighboring router used for packet forwarding that is a least-cost path to a destination that is guaranteed not to be part of a routing loop. When a neighbor changes a metric, or when a topology change occurs, DUAL tests for feasible successors. If one is found, DUAL uses it to avoid recomputing the route unnecessarily. When no feasible successors exist but neighbors still advertise the destination, a recomputation (also known as a diffusing computation) must occur to determine a new successor. Although recomputation is not processor-intensive, it does affect convergence time, so it is advantageous to avoid unnecessary recomputations.
<br />
<br />Protocol-dependent modules are responsible for network layer protocol-specific requirements. The IP-Enhanced IGRP module, for example, is responsible for sending and receiving Enhanced IGRP packets that are encapsulated in IP. Likewise, IP-Enhanced IGRP is also responsible for parsing Enhanced IGRP packets and informing DUAL of the new information that has been received. IP-Enhanced IGRP asks DUAL to make routing decisions, the results of which are stored in the IP routing table. IP-Enhanced IGRP is responsible for redistributing routes learned by other IP routing protocols.
<br /><hr />
<br /><b>Capabilities and Attributes</b>
<br />Key capabilities that distinguish Enhanced IGRP from other routing protocols include fast convergence, support for variable-length subnet mask, support for partial updates, and support for multiple network layer protocols. 
<br />
<br />A router running Enhanced IGRP stores all its neighbors' routing tables so that it can quickly adapt to alternate routes. If no appropriate route exists, Enhanced IGRP queries its neighbors to discover an alternate route. These queries propagate until an alternate route is found.
<br />
<br />Its support for variable-length subnet masks permits routes to be automatically summarized on a network number boundary. In addition, Enhanced IGRP can be configured to summarize on any bit boundary at any interface.
<br />
<br /><b>Routing Concepts</b>
<br /><ul><li><b>Neighbor Tables</b><br /></li>
<li>When a router discovers a new neighbor, it records the neighbor's address and interface as an entry in the neighbor table. One neighbor table exists for each protocol-dependent module. When a neighbor sends a hello packet, it advertises a hold time, which is the amount of time that a router treats a neighbor as reachable and operational. If a hello packet is not received within the hold time, the hold time expires and DUAL is informed of the topology change.
<br /><br /></li>
<li><b>Topology Tables</b><br /></li>
<li>The topology table contains all destinations advertised by neighboring routers. The protocol-dependent modules populate the table, and the table is acted on by the DUAL finite-state machine. Each entry in the topology table includes the destination address and a list of neighbors that have advertised the destination. For each neighbor, the entry records the advertised metric, which the neighbor stores in its routing table. An important rule that distance vector protocols must follow is that if the neighbor advertises this destination, it must use the route to forward packets.
<br /><br /></li>
<li><b>Route States</b><br /></li>
<li>A topology-table entry for a destination can exist in one of two states: active or passive. A destination is in the passive state when the router is not performing a recomputation; it is in the active state when the router is performing a recomputation. If feasible successors are always available, a destination never has to go into the active state, thereby avoiding a recomputation.
<br /><br /></li>
<li><b>Route Tagging</b><br /></li>
<li>Enhanced IGRP supports internal and external routes. Internal routes originate within an Enhanced IGRP AS. Therefore, a directly attached network that is configured to run Enhanced IGRP is considered an internal route and is propagated with this information throughout the Enhanced IGRP AS. External routes are learned by another routing protocol or reside in the routing table as static routes. These routes are tagged individually with the identity of their origin.</li></ul>
<br /><hr />
<br /><b>Packet Types</b>
<br />Enhanced IGRP uses the following packet types: hello and acknowledgment, update, and query and reply.
<br /><ul><li>Hello packets are multicast for neighbor discovery/recovery and do not require acknowledgment. An acknowledgment packet is a hello packet that has no data. Acknowledgment packets contain a nonzero acknowledgment number and always are sent by using a unicast address.<br /><br /></li>

<li>Update packets are used to convey reachability of destinations. When a new neighbor is discovered, unicast update packets are sent so that the neighbor can build up its topology table. In other cases, such as a link-cost change, updates are multicast. Updates always are transmitted reliably.<br /><br /></li>

<li>Query and reply packets are sent when a destination has no feasible successors. Query packets are always multicast. Reply packets are sent in response to query packets to instruct the originator not to recomputed the route because feasible successors exist. Reply packets are unicast to the originator of the query. Both query and reply packets are transmitted reliably.</li></ul>
<br />
<br /><b>Header format</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>32 bits</p></td></tr><tr><td><p>Version</p></td><td><p>Opcode</p></td><td><p>Checksum</p></td></tr><tr><td colspan="3"><p>Flags</p></td></tr><tr><td colspan="3"><p>Sequence number</p></td></tr><tr><td colspan="3"><p>Acknowledge number</p></td></tr><tr><td colspan="3"><p>Asystem: Autonomous system number</p></td></tr><tr><td colspan="2"><p>Type</p></td><td><p>Length</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Version</b><br /></li> 
<li>The version of the protocol.
<br /><br /></li>
<li><b>Opcode</b><br /></li>
<li>Operation code indicating the message type: 1 Update. 2 Reserved. 3 Query. 4 Hello. 5 IPX-SAP.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>1</td><td>Update</td></tr><tr><td>2</td><td>Reserved</td></tr><tr><td>3</td><td>Query</td></tr><tr><td>4</td><td>Hello</td></tr><tr><td>5</td><td>IPX-SAP</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Checksum</b><br /></li>
<li>IP checksum which is computed using the same checksum algorithm as a UDP checksum
<br /><br /></li>
<li><b>Flag</b><br /></li>
<li>Initialization bit and is used in establishing a new neighbor relationship
<br /><br /></li>
<li><b>Sequence number</b><br /></li>
<li>It used to send messages reliably
<br /><br /></li>
<li><b>Acknowledge number</b><br /></li>
<li>Acknowledge number used to send messages reliably
<br /><br /></li>
<li><b>Asystem (Autonomous system number)</b><br /></li>
<li>A gateway can participate in more than one autonomous system where each system runs its own IGRP. For each autonomous system, there are completely separate routing tables. This field allows the gateway to select which set of routing tables to use.
<br /><br /></li>
<li><b>Type</b><br /></li>
<li>Value in the type field: 1 EIGRP Parameters. 2 Reserved. 3 Sequence. 4 Software version. 5 Next Multicast sequence.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td>1</td><td>EIGRP Parameters</td></tr><tr><td>2</td><td>Reserved</td></tr><tr><td>3</td><td>Sequence</td></tr><tr><td>4</td><td>Software version</td></tr><tr><td>5</td><td>Next Multicast sequence</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Length</b><br /></li>
<li>Length of the frame.</li></ul>
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
<td class="MapParent" aria-label="Parent layer protocols">IP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>EIGRP</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />Update<br /><img src="/supporting/images/tline_r.gif" alt="" />Query<br /><img src="/supporting/images/tline_r.gif" alt="" />Reply<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />Hello<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Autonomous systems</b><br />Autonomous system (AS) is the unit of router policy, either a single network or a group of networks that is controlled by a common network administrator (or group of administrators) on behalf of a single administrative entity.<br /><br /><b>Gateway</b><br />A network device used to translate between two different protocols. Used to interconnect two networks that use incompatible protocols. It is a node on a network that serves as an entrance to another network. In enterprises, the gateway is the computer that routes the traffic from a workstation to the outside network that is serving the Web pages. In homes, the gateway is the ISP that connects the user to the internet. 
<br />
<br />In enterprises, the gateway node often acts as a proxy server and a firewall. The gateway is also associated with both a router, which use headers and forwarding tables to determine where packets are sent, and a switch, which provides the actual path for the packet in and out of the gateway.
<br />
<br />It is also a computer system located on earth that switches data signals and voice signals between satellites and terrestrial networks and an earlier term for router, though now obsolete in this sense as router is commonly used.<br /><br /><b>IGP</b><br />IGP (Interior Gateway Protocol) is a protocol for exchanging routing information between gateways (hosts with routers) within an autonomous network. such as a enterprise LAN. IGPs typically support confined geographical areas. 
<br />
<br />RIP and OSPF are two examples of an IGP.<br /><br /><b>IGRP</b><br />Interior Gateway Routing Protocol (IGRP) is a distance-vector routing protocol, which means that each router sends all or a portion of its routing table in a routing message update at regular intervals to each of its neighboring routers. A router chooses the best path between a source and a destination. Since each path can comprise many links, the system needs a way to compare the links in order to find the best path. A system such as RIP uses only one criteria -- hops -- to determine the best path. IGRP uses five criteria to determine the best path: the link's speed, delay, packet size, loading and reliability. Network administrators can set the weighting factors for each of these metrics.<br /><br /><b>MTU</b><br />MTU (Maximum transmission unit) is the size of the largest packet that can be transmitted over a particular medium. Packets exceeding the MTU value in size are fragmented or segmented, and then reassembled at the receiving end. If fragmentation is not supported or possible, a packet that exceeds the MTU value is dropped.<br /><br /><b>OSI</b><br />ISO (Open Systems Interconnection) is a worldwide communications that defines a networking framework for implementing protocols in seven layers. Control is passed from one layer to the next, starting at the application layer in one station, proceeding to the bottom layer, over the channel to the next station and back up the hierarchy. 
<br />
<br />At one time, most vendors agreed to support OSI in one form or another, but OSI was too loosely defined and proprietary standards were too entrenched. Except for the OSI-compliant X.400 and X.500 e-mail and directory standards, which are widely used, what was once thought to become the universal communications standard now serves as the teaching model for all other protocols. 
<br />
<br />Most of the functionality in the OSI model exists in all communications systems, although two or three OSI layers may be incorporated into one. 
<br />
<br />OSI is also referred to as the OSI Reference Model or just the OSI Model.<br /><br /><b>RTP</b><br />RTP (Real-Time Transport Protocol) is an Internet protocol for transmitting real-time data such as audio and video. RTP itself does not guarantee real-time delivery of data, but it does provide mechanisms for the sending and receiving applications to support streaming data. Typically, RTP runs on top of the UDP protocol, although the specification is general enough to support other transport protocols.<br /><br /><b>Router</b><br />A device that forwards data packets along networks. A router is connected to at least two networks, commonly two LANs or WANs or a LAN and its ISP network. Routers are located at gateways, the places where two or more networks connect. 
<br />
<br />Routers use headers and forwarding tables to determine the best path for forwarding the packets, and they use protocols such as ICMP to communicate with each other and configure the best route between any two hosts.<br /><br />			</div>
		  
</section>

