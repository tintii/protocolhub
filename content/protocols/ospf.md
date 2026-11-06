---
id: protocol-ospf
slug: ospf
name: OSPF
expandedName: Open Shortest Path First Routing Protocol
origin: historical
provenance:
  source: protocols/protocol_OSPF.htm
  sha256: 77e14b6812dcf9150f6f29350f135e134c01af5105d58c6ab54484a33390a75b
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Open Shortest Path First Routing Protocol
layers:
  - Network Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Open Shortest Path First Routing Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Network Layer
  - label: Type
    html: Network Layer interior link state routing protocol
  - label: SNMP MIBs
    html: |-
      iso.org.dod.internet.mgmt.mib-2.ospf (1.3.6.1.2.1.14) 
      <br />Working groups: ospf, Open Shortest Path First IGP
  - label: Multicast addresses
    html: '224.0.0.5 (all routers), 224.0.0.6 (designated routers)'
  - label: Related protocols
    html: 'IP,<br />TCP'
originalUpdate: '2005-11-14 12:19:27'
rfcs:
  - 791
  - 1060
  - 1122
  - 1123
  - 1131
  - 1195
  - 1245
  - 1246
  - 1247
  - 1248
  - 1252
  - 1253
  - 1349
  - 1364
  - 1370
  - 1403
  - 1583
  - 1586
  - 1587
  - 1745
  - 1765
  - 1793
  - 1812
  - 1850
  - 2154
  - 2178
  - 2328
  - 2329
  - 2370
  - 2676
  - 2740
  - 2844
  - 2991
  - 3101
  - 3137
  - 3166
  - 3167
  - 3509
  - 3623
  - 3630
  - 3883
  - 4061
  - 4062
  - 4063
  - 4124
  - 4136
  - 4167
related:
  - protocol-ip
  - protocol-tcp
glossary: []
sections:
  - id: description
    title: Description
  - id: examples
    title: Examples
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

			OSPF is an interior gateway protocol used for routing between routers belonging to a single Autonomous System. OSPF is classified as an Interior Gateway Protocol (IGP). This means that it distributes routing information between routers belonging to a single Autonomous System. The OSPF protocol is based on link-state or SPF technology. This is a departure from the Bellman-Ford base usedby traditional TCP/IP internet routing protocols.
<br />
<br />The OSPF protocol was developed by the OSPF working group of the Internet Engineering Task Force. It has been designed expressly for the TCP/IP internet environment, including explicit support for CIDR and the tagging of externally-derived routing information OSPF also provides for the authentication of routing updates, and utilizes IP multicast when sending/receiving the updates. In addition, much work has been done to produce a protocol that responds quickly to topology changes, yet involves small amounts of routing protocol traffic.
<br />
<br />OSPF routes IP packets based solely on the destination IP address found in the IP packet header. IP packets are routed "as is" -- they are not encapsulated in any further protocol headers as they transit the Autonomous System. OSPF is a dynamic routing protocol. It quickly detects topological changes in the AS (such as router interface failures) and calculates new loop-free routes after a period of convergence. This period of convergence is short and involves a minimum of routing traffic.
<br />
<br />In a link-state routing protocol, each router maintains a database describing the Autonomous System's topology. This database is referred to as the link-state database. Each participating router has an identical database. Each individual piece of this database is a particular router's local state (e.g., the router's usable interfaces and reachable neighbors). The router distributes its local state throughout the Autonomous System by flooding.
<br />
<br />All routers run the exact same algorithm, in parallel. From the link-state database, each router constructs a tree of shortest paths with itself as root. This shortest-path tree gives the route to each destination in the Autonomous System. Externally derived routing information appears on the tree as leaves.
<br />
<br />When several equal-cost routes to a destination exist, traffic is distributed equally among them. The cost of a route is described by a single dimensionless metric.
<br />
<br />OSPF allows sets of networks to be grouped together. Such a grouping is called an area. The topology of an area is hidden from the rest of the Autonomous System. This information hiding enables a significant reduction in routing traffic. Also, routing within the area is determined only by the area's own topology, lending the area protection from bad routing data. An area is a generalization of an IP subnetted network.
<br />
<br />OSPF enables the flexible configuration of IP subnets. Each route distributed by OSPF has a destination and mask. Two different subnets of the same IP network number may have different sizes (i.e., different masks). This is commonly referred to as variable length subnetting. A packet is routed to the best (i.e., longest or most specific) match. Host routes are considered to be subnets whose masks are "all ones" (0xffffffff).
<br />
<br />All OSPF protocol exchanges are authenticated. This means that only trusted routers can participate in the Autonomous System's routing. A variety of authentication schemes can be used; in fact, separate authentication schemes can be configured for each IP subnet.
<br />
<br />Externally derived routing data (e.g., routes learned from an Exterior Gateway Protocol such as BGP) is advertised throughout the Autonomous System. This externally derived data is kept separate from the OSPF protocol's link state data. Each external route can also be tagged by the advertising router, enabling the passing of additional information between routers on the boundary of the Autonomous System.
<br /><hr />
<br /><b>Version 2 header</b>
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>32 bits</p></td></tr><tr><td><p>Version No.</p></td><td><p>Packet Type</p></td><td><p>Packet length</p></td></tr><tr><td colspan="3"><p>Router ID</p></td></tr><tr><td colspan="3"><p>Area ID</p></td></tr><tr><td colspan="2"><p>Checksum</p></td><td><p>AU type</p></td></tr><tr><td colspan="3"><p>Authentication</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Version</b>
<br />OSPF version number.<br /><br /></li>

<li><b>Type</b>
<br />OSPF request/reply code.<br /><br /></li>

<li><b>Packet type</b>
<br />Valid types are as follows:<br /><br /></li>

<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>Type</td><td>Description</td></tr><tr><td>1</td><td>Hello.</td></tr><tr><td>2</td><td>Database description.</td></tr><tr><td>3</td><td>Link state request.</td></tr><tr><td>4</td><td>Link state update.</td></tr><tr><td>5</td><td>Link state acknowledgment.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Packet length</b>
<br />The length of the protocol packet in bytes. This length includes the standard OSPF header.<br /><br /></li>

<li><b>Router ID</b>
<br />The router ID of the packet¡¯s source. In OSPF, the source and destination of a routing protocol packet are the two ends of an (potential) adjacency.<br /><br /></li>

<li><b>Area ID</b>
<br />Area ID is a 32-bit number identifying the area that this packet belongs to. All OSPF packets are associated with a single area. Most travel a single hop only. Packets traveling over a virtual link are labeled with the back bone area ID of 0.0.0.0.<br /><br /></li>

<li><b>Checksum</b>
<br />The standard IP checksum of the entire contents of the packet, starting with the OSPF packet header but excluding the 64-bit authentication field. This checksum is calculated as the 16-bit one¡¯s complement of the one¡¯s complement sum of all the 16-bit words in the packet, except for the authentication field. If the packet length is not an integral number of 16-bit words, the packet is padded with a byte of zero before checksumming.<br /><br /></li>

<li><b>AU type</b>
<br />Identifies the authentication scheme to be used for the packet.<br /><br /></li>

<li><b>Authentication</b>
<br />Authentication is a field for use by the authentication scheme.<br /><br /></li>

<li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td>Authentication</td><td>Description</td></tr><tr><td>0</td><td>None.</td></tr><tr><td>1</td><td>Simple password authentication.</td></tr><tr><td>2</td><td>Cryptographic authentication.</td></tr><tr><td>3-65535</td><td>Reserved.</td></tr></tbody></table></div></div></li></ul>
<br />
<br /><b>OSPF version 3 header</b>
<br />This version is designed to support OSPF over IPv6 links.
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>24</p></td><td><p>32 bit</p></td></tr><tr><td><p>Version No.</p></td><td><p>Packet Type</p></td><td colspan="2"><p>Packet length</p></td></tr><tr><td colspan="4"><p>Router ID</p></td></tr><tr><td colspan="4"><p>Area ID</p></td></tr><tr><td colspan="2"><p>Checksum</p></td><td><p>Instance ID</p></td><td><p>Reserved</p></td></tr><tr><td colspan="4"><p>Authentication</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Version </b>
<br />Always set to 3. OSPF version number.<br /><br /></li>

<li><b>Checksum</b>
<br />OSPF uses the standard checksum calculation for IPv6 applications: The 16-bit one's complement of the one's complement sum of the entire contents of the packet, starting with the OSPF packet header, and prepending a "pseudo-header" of IPv6 header fields. The "Upper-Layer Packet Length" in the pseudo-header is set to value of the OSPF packet header's length field. The Next Header value used in the pseudo-header is 89. If the length of the packet is not an integral number of 16-bit words, the packet is padded with a byte of zero before checksumming. Before computing the checksum, the checksum field in the OSPF packet header is set to 0.<br /><br /></li>

<li><b>Instance ID</b>
<br />Enables multiple instances of OSPF to be run over a single link. Each protocol instance would be assigned a separate Instance ID; the Instance ID has local link significance only. Received packets whose Instance ID is not equal to the receiving interface's Instance ID are discarded.<br /><br /></li>

<li><b>reserved</b>
<br />Must be cleared to 0.</li></ul>
<br /><hr />
<br /><b>Functional Summary</b>
<br />A separate copy of OSPF's basic routing algorithm runs in each area. Routers having interfaces to multiple areas run multiple copies of the algorithm. A brief summary of the routing algorithm follows.
<br />
<br />When a router starts, it first initializes the routing protocol data structures. The router then waits for indications from the lower-level protocols that its interfaces are functional.
<br />
<br />A router then uses the OSPF's Hello Protocol to acquire neighbors. The router sends Hello packets to its neighbors, and in turn receives their Hello packets. On broadcast and point-to-point networks, the router dynamically detects its neighboring routers by sending its Hello packets to the multicast address AllSPFRouters. On non-broadcast networks, some configuration information is necessary in order to discover neighbors. On all multi-access networks (broadcast or non-broadcast), the Hello Protocol also elects a Designated router for the network.
<br />
<br />The router will attempt to form adjacencies with some of its newly acquired neighbors. Topological databases are synchronized between pairs of adjacent routers. On multi-access networks, the Designated Router determines which routers should become adjacent.
<br />
<br />Adjacencies control the distribution of routing protocol packets. Routing protocol packets are sent and received only on adjacencies. In particular, distribution of topological database updates proceeds along adjacencies.
<br />
<br />A router periodically advertises its state, which is also called link state. Link state is also advertised when a router's state changes. A router's adjacencies are reflected in the contents of its link state advertisements. This relationship between adjacencies and link state allows the protocol to detect dead routers in a timely fashion.
<br />
<br />Link state advertisements are flooded throughout the area. The flooding algorithm is reliable, ensuring that all routers in an area have exactly the same topological database. This database consists of the collection of link state advertisements received from each router belonging to the area. From this database each router calculates a shortest-path tree, with itself as root. This shortest-path tree in turn yields a routing table for the protocol.
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0">
The following figure shows an example of an adjacency forming. Routers RT1 and RT2 
are both connected to a broadcast network. It is assumed that RT2 is the Designated 
Router for the network, and that RT2 has a higher Router ID than Router RT1.

The neighbor state changes realized by each router are listed on the sides of the 
figure.

At the beginning of Figure 14, Router RT1's interface to the network becomes 
operational. It begins sending Hello Packets, although it doesn't know the identity 
of the Designated Router or of any other neighboring routers. Router RT2 hears 
this hello (moving the neighbor to Init state), and in its next Hello Packet indicates 
that it is itself the Designated Router and that it has heard Hello Packets from RT1. 
This in turn causes RT1 to go to state ExStart, as it starts to bring up the adjacency.

RT1 begins by asserting itself as the master. When it sees that RT2 is indeed the 
master (because of RT2's higher Router ID), RT1 transitions to slave state and adopts 
its neighbor's DD sequence number. Database Description packets are then exchanged, 
with polls coming from the master (RT2) and responses from the slave (RT1). This 
sequence of Database Description Packets ends when both the poll and associated 
response has the M-bit off.

               +---+                                         +---+
               |RT1|                                         |RT2|
               +---+                                         +---+

               Down                                          Down
                               Hello(DR=0,seen=0)
                          ------------------------------&gt;
                            Hello (DR=RT2,seen=RT1,...)      Init
                          &lt;------------------------------
               ExStart        D-D (Seq=x,I,M,Master)
                          ------------------------------&gt;
                              D-D (Seq=y,I,M,Master)         ExStart
                          &lt;------------------------------
               Exchange       D-D (Seq=y,M,Slave)
                          ------------------------------&gt;
                              D-D (Seq=y+1,M,Master)         Exchange
                          &lt;------------------------------
                              D-D (Seq=y+1,M,Slave)
                          ------------------------------&gt;
                                        ...
                                        ...
                                        ...
                              D-D (Seq=y+n, Master)
                          &lt;------------------------------
                              D-D (Seq=y+n, Slave)
                Loading   ------------------------------&gt;
                                    LS Request                Full
                          ------------------------------&gt;
                                    LS Update
                          &lt;------------------------------
                                    LS Request
                          ------------------------------&gt;
                                    LS Update
                          &lt;------------------------------
                Full

In this example, it is assumed that RT2 has a completely up to date database. In 
that case, RT2 goes immediately into Full state. RT1 will go into Full state after 
updating the necessary parts of its database. This is done by sending Link State 
Request Packets, and receiving Link State Update Packets in response. Note that, while 
RT1 has waited until a complete set of Database Description Packets has been received 
(from RT2) before sending any Link State Request Packets, this need not be the case. 
RT1 could have interleaved the sending of Link State Request Packets with the 
reception of Database Description Packets.</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">IP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>OSPF</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />Hello<br /><img src="/supporting/images/tline_r.gif" alt="" />Data Desc<br /><img src="/supporting/images/tline_r.gif" alt="" />Link State Req<br /><img src="/supporting/images/tline_r.gif" alt="" />Link State Upd<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />Link State Ack<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>AS</b><br />AS (Autonomous system) is the unit of router policy, either a single network or a group of networks that is controlled by a common network administrator (or group of administrators) on behalf of a single administrative entity.<br /><br /><b>Adjacency</b><br />Adjacency is a relationship formed between selected neighboring routers for the purpose of exchanging routing information. Not every pair of neighboring routers become adjacent.<br /><br /><b>Algorithm</b><br />Algorithm is a formula or set of steps for solving a particular problem. To be an algorithm, a set of rules must be unambiguous and have a clear stopping point. Algorithms can be expressed in any language, from natural languages like English or French to programming languages like FORTRAN.
<br />
<br />We use algorithms every day. For example, a recipe for baking a cake is an algorithm. Most programs, with the exception of some artificial intelligence applications, consist of algorithms. Inventing elegant algorithms -- algorithms that are simple and require the fewest steps possible -- is one of the principal challenges in programming.<br /><br /><b>Authentication</b><br />The process of identifying an individual, usually based on a username and password. In security systems, authentication is distinct from authorization , which is the process of giving individuals access to system objects based on their identity. Authentication merely ensures that the individual is who he or she claims to be, but says nothing about the access rights of the individual.<br /><br /><b>CIDR</b><br />CIDR (Classless Inter-Domain Routing) is a new addressing scheme for the Internet which allows for more efficient allocation of IP addresses than the old Class A, B, and C address scheme. A CIDR IP address looks like a normal IP address except that it ends with a slash followed by a number, called the IP network prefix. <br /><br /><b>Configuration</b><br />The way a system is set up, or the assortment of components that make up the system. Configuration can refer to either hardware or software, or the combination of both. For instance, a typical configuration for a PC consists of 32MB (megabytes) main memory, a floppy drive, a hard disk, a modem, a CD-ROM drive, a VGA monitor, and the Windows operating system.<br /><br /><b>Database</b><br />A database is an organized collection of data. The term originated within the computer industry, but its meaning has been broadened by popular use, to the extent that the European Database Directive (which creates intellectual property rights for databases) includes non-electronic databases within its definition. This article is confined to a more technical use of the term; though even amongst computing professionals, some attach a much wider meaning to the word than others.<br /><br /><b>Designated Router</b><br />Each broadcast and NBMA network that has at least two attached routers has a Designated Router. The Designated Router generates an LSA for the network and has other special responsibilities in the running of the protocol. The Designated Router is elected by the Hello Protocol.<br /><br /><b>Hello Protocol</b><br />Hello Protocol is the part of the OSPF protocol used to establish and maintain neighbor relationships. On broadcast networks the Hello Protocol can also dynamically discover neighboring routers.<br /><br /><b>IGP</b><br />IGP (Interior Gateway Protocol) is a protocol for exchanging routing information between gateways (hosts with routers) within an autonomous network. such as a enterprise LAN. IGPs typically support confined geographical areas. 
<br />
<br />RIP and OSPF are two examples of an IGP.<br /><br /><b>IP</b><br />The IP (Internet Protocol) is a protocol which uses datagrams to communicate over a packet-switched network. IP specifies the format of packets, also called datagrams, and the addressing scheme. Most networks combine IP with a higher-level protocol called Transmission Control Protocol (TCP), which establishes a virtual connection between a destination and a source. 
<br />
<br />IP by itself is something like the postal system. It allows you to address a package and drop it in the system, but there's no direct link between you and the recipient. TCP/IP, on the other hand, establishes a connection between two hosts so that they can send messages back and forth for a period of time. 
<br />
<br />The current version of IP is IPv4. A new version, called IPv6 or IPng, is under development.<br /><br /><b>IP address</b><br />IP address is an identifier for a computer or device on a TCP/IP network. Networks using the TCP/IP protocol route messages based on the IP address of the destination. The format of an IP address is a 32-bit numeric address written as four numbers separated by periods. Each number can be zero to 255. For example, 1.160.10.240 could be an IP address. Within an isolated network, you can assign IP addresses at random as long as each one is unique. However, connecting a private network to the Internet requires using registered IP addresses (called Internet addresses) to avoid duplicates. 
<br />
<br />The four numbers in an IP address are used in different ways to identify a particular network and a host on that network. Four regional Internet registries -- ARIN, RIPE NCC, LACNIC and APNIC -- assign Internet addresses from the following three classes. 
<br />Class A - supports 16 million hosts on each of 126 networks 
<br />Class B - supports 65,000 hosts on each of 16,000 networks 
<br />Class C - supports 254 hosts on each of 2 million networks 
<br />
<br />The number of unassigned Internet addresses is running out, so a new classless scheme called CIDR is gradually replacing the system based on classes A, B, and C and is tied to adoption of IPv6.<br /><br /><b>Interface</b><br />Interface is the connection between a router and one of its attached networks. An interface has state information associated with it, which is obtained from the underlying lower level protocols and the routing protocol itself. An interface to a network has associated with it a single IP address and mask (unless the network is an unnumbered point-to-point network). An interface is sometimes also referred to as a link.<br /><br /><b>Internet</b><br />A global network connecting millions of computers. More than 100 countries are linked into exchanges of data, news and opinions. 
<br />
<br />Unlike online services, which are centrally controlled, the Internet is decentralized by design. Each Internet computer, called a host, is independent. Its operators can choose which Internet services to use and which local services to make available to the global Internet community. Remarkably, this anarchy by design works exceedingly well. 
<br />
<br />There are a variety of ways to access the Internet. Most online services, such as America Online, offer access to some Internet services. It is also possible to gain access through a commercial Internet Service Provider (ISP).<br /><br /><b>Link state advertisement</b><br />Link state advertisement is the unit of data describing the local state of a router or network. For a router, this includes the state of the router's interfaces and adjacencies. Each link state advertisement is flooded throughout the routing domain. The collected link state advertisements of all routers and networks forms the protocol's link state database. Throughout this memo, link state advertisement is abbreviated as LSA.<br /><br /><b>Lower-level protocols</b><br />Lower-level protocols are the underlying network access protocols that provide services to the Internet Protocol and in turn the OSPF protocol. Examples of these are the X.25 packet and frame levels for X.25 PDNs, and the ethernet data link layer for ethernets.<br /><br /><b>Multicast</b><br />Multicast is designed to transmit a single message to a select group of recipients. A simple example of multicasting is sending an e-mail message to a mailing list. Teleconferencing and videoconferencing also use multicasting, but require more robust protocols and networks.<br /><br /><b>Neighboring routers</b><br />Neighboring routers are the two routers that have interfaces to a common network. Neighbor relationships are maintained by, and usually dynamically discovered by, OSPF's Hello Protocol.<br /><br /><b>Network</b><br />Network is a group of two or more computer systems linked together. There are many types of computer networks, including: 
<br />LANs (local-area networks), WANs (wide-area networks), CANs (campus-area networks), MANs (metropolitan-area networks) and HANs (home-area networks).
<br />
<br />In addition to these types, the following characteristics are also used to categorize different types of networks: Topology, protocol and architecture.<br /><br /><b>Non-broadcast networks</b><br />Networks supporting many (more than two) routers, but having no broadcast capability. Neighboring routers are maintained on these nets using OSPF's Hello Protocol. However, due to the lack of broadcast capability, some configuration information may be necessary to aid in the discovery of neighbors. On non-broadcast networks, OSPF protocol packets that are normally multicast need to be sent to each neighboring router, in turn. An X.25 Public Data Network (PDN) is an example of a non-broadcast network.<br /><br /><b>OSPF</b><br />OSPF is an interior gateway protocol which is used for routing within a group of routers. It uses link-state technology in which routers send each other information about the direct connections and links which they have to other routers.<br /><br /><b>Packet</b><br />A packet is the unit of data that is routed between an origin and a destination on the Internet or any other packet-switched network. When any file (e-mail message, HTML file, Graphics Interchange Format file, Uniform Resource Locator request, and so forth) is sent from one place to another on the Internet, the Transmission Control Protocol (TCP) layer of TCP/IP divides the file into "chunks" of an efficient size for routing. Each of these packets is separately numbered and includes the Internet address of the destination. The individual packets for a given file may travel different routes through the Internet. When they have all arrived, they are reassembled into the original file (by the TCP layer at the receiving end). <br /><br /><b>Path</b><br />The route taken by the SCTP packets sent by one SCTP endpoint to a specific destination transport address of its peer SCTP endpoint. Sending to different destination transport addresses does not necessarily guarantee getting separate paths.<br /><br /><b>Point-to-point networks</b><br />Point-to-point networks is a network that joins a single pair of routers. A 56Kb serial line is an example of a point-to-point network.<br /><br /><b>Router</b><br />A device that forwards data packets along networks. A router is connected to at least two networks, commonly two LANs or WANs or a LAN and its ISP network. Routers are located at gateways, the places where two or more networks connect. 
<br />
<br />Routers use headers and forwarding tables to determine the best path for forwarding the packets, and they use protocols such as ICMP to communicate with each other and configure the best route between any two hosts.<br /><br /><b>Subnet</b><br />Subnet is a portion of a network that shares a common address component. On TCP/IP networks, subnets are defined as all devices whose IP addresses have the same prefix. For example, all devices with IP addresses that start with 100.100.100. would be part of the same subnet. Dividing a network into subnets is useful for both security and performance reasons. IP networks are divided using a subnet mask.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="http://www.iana.org/assignments/ospf-authentication-codes">OSPF authentication codes</a>
                <a href="http://www.iana.org/assignments/ospf-opaque-types">OSPF Opaque types</a>
                <a href="http://www.iana.org/assignments/ospf-sig-alg">OSPF signature algorithms</a>
                <a href="http://www.iana.org/assignments/ospf-traffic-eng-tlvs">OSPF Traffic Engineering TLVs</a><hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1131.html">RFC 1131</a>] The OSPF Specification.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1247.html">RFC 1247</a>. 
                This document is only available in Postscript format. 
[<a href="https://www.rfc-editor.org/rfc/rfc1245.html">RFC 1245</a>] OSPF protocol analysis.
[<a href="https://www.rfc-editor.org/rfc/rfc1246.html">RFC 1246</a>] Experience with the OSPF protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc1349.html">RFC 1349</a>] Type of Service in the Internet Protocol Suite.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc791.html">RFC 791</a>, <a href="https://www.rfc-editor.org/rfc/rfc1060.html">RFC 1060</a>, <a href="https://www.rfc-editor.org/rfc/rfc1122.html">RFC 1122</a>, <a href="https://www.rfc-editor.org/rfc/rfc1123.html">RFC 1123</a>, <a href="https://www.rfc-editor.org/rfc/rfc1195.html">RFC 1195</a>, <a href="https://www.rfc-editor.org/rfc/rfc1247.html">RFC 1247</a>, <a href="https://www.rfc-editor.org/rfc/rfc1248.html">RFC 1248</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1370.html">RFC 1370</a>] Applicability Statement for OSPF.
[<a href="https://www.rfc-editor.org/rfc/rfc1403.html">RFC 1403</a>] BGP OSPF Interaction.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1364.html">RFC 1364</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1745.html">RFC 1745</a>] BGP4/IDRP for IP---OSPF Interaction.
[<a href="https://www.rfc-editor.org/rfc/rfc1586.html">RFC 1586</a>] Guidelines for Running OSPF Over Frame Relay Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc1765.html">RFC 1765</a>] OSPF Database Overflow.
[<a href="https://www.rfc-editor.org/rfc/rfc1793.html">RFC 1793</a>] Extending OSPF to Support Demand Circuits.
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3883.html">RFC 3883</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1812.html">RFC 1812</a>] Requirements for IP Version 4 Routers.
[<a href="https://www.rfc-editor.org/rfc/rfc1850.html">RFC 1850</a>] OSPF Version 2 Management Information Base.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1253.html">RFC 1253</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2154.html">RFC 2154</a>] OSPF with Digital Signatures.
[<a href="https://www.rfc-editor.org/rfc/rfc2328.html">RFC 2328</a>] OSPF Version 2.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2178.html">RFC 2178</a>.
[<a href="https://www.rfc-editor.org/rfc/rfc2329.html">RFC 2329</a>] OSPF Standardization Report.
[<a href="https://www.rfc-editor.org/rfc/rfc2370.html">RFC 2370</a>] The OSPF Opaque LSA Option.
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3630.html">RFC 3630</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2676.html">RFC 2676</a>] QoS Routing Mechanisms and OSPF Extensions.
                Defines extensions to OSPF to support QoS routes. 
[<a href="https://www.rfc-editor.org/rfc/rfc2740.html">RFC 2740</a>] OSPF for IPv6.
[<a href="https://www.rfc-editor.org/rfc/rfc2844.html">RFC 2844</a>] OSPF over ATM and Proxy-PAR.
[<a href="https://www.rfc-editor.org/rfc/rfc2991.html">RFC 2991</a>] Multipath Issues in Unicast and Multicast Next-Hop Selection.
[<a href="https://www.rfc-editor.org/rfc/rfc3101.html">RFC 3101</a>] The OSPF Not-So-Stubby Area (NSSA) Option.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1587.html">RFC 1587</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3137.html">RFC 3137</a>] OSPF Stub Router Advertisement.
[<a href="https://www.rfc-editor.org/rfc/rfc3166.html">RFC 3166</a>] Request to Move <a href="https://www.rfc-editor.org/rfc/rfc1403.html">RFC 1403</a> to Historic Status.
[<a href="https://www.rfc-editor.org/rfc/rfc3167.html">RFC 3167</a>] Request to Move <a href="https://www.rfc-editor.org/rfc/rfc1745.html">RFC 1745</a> to Historic Status.
[<a href="https://www.rfc-editor.org/rfc/rfc3509.html">RFC 3509</a>] Alternative Implementations of OSPF Area Border Routers.
[<a href="https://www.rfc-editor.org/rfc/rfc3623.html">RFC 3623</a>] Graceful OSPF Restart.
[<a href="https://www.rfc-editor.org/rfc/rfc3630.html">RFC 3630</a>] Traffic Engineering (TE) Extensions to OSPF Version 2.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2370.html">RFC 2370</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3883.html">RFC 3883</a>] Detecting Inactive Neighbors over OSPF Demand Circuits (DC).
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1793.html">RFC 1793</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc4061.html">RFC 4061</a>] Benchmarking Basic OSPF Single Router Control Plane Convergence.
[<a href="https://www.rfc-editor.org/rfc/rfc4062.html">RFC 4062</a>] OSPF Benchmarking Terminology and Concepts.
[<a href="https://www.rfc-editor.org/rfc/rfc4063.html">RFC 4063</a>] Considerations When Using Basic OSPF Convergence Benchmarks.
[<a href="https://www.rfc-editor.org/rfc/rfc4124.html">RFC 4124</a>] Protocol Extensions for Support of Diffserv-aware MPLS Traffic Engineering.
                Defines IS-IS sub-TLV (22, 22) Bandwidth Constraints. 
                Defines OSPF sub-TLV (2, 17) Bandwidth Contraints. 
                Defines RSVP class 66 (CLASSTYPE). 
[<a href="https://www.rfc-editor.org/rfc/rfc4136.html">RFC 4136</a>] OSPF Refresh and Flooding Reduction in Stable Topologies.
[<a href="https://www.rfc-editor.org/rfc/rfc4167.html">RFC 4167</a>] Graceful OSPF Restart Implementation Report.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc1131.html">RFC 1131</a>] The OSPF Specification.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1247.html">RFC 1247</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1247.html">RFC 1247</a>] OSPF Version 2.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1583.html">RFC 1583</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1131.html">RFC 1131</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1248.html">RFC 1248</a>] OSPF Version 2 Management Information Base.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1252.html">RFC 1252</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1252.html">RFC 1252</a>] OSPF Version 2 Management Information Base.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1253.html">RFC 1253</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1248.html">RFC 1248</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1253.html">RFC 1253</a>] OSPF Version 2 Management Information Base.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1850.html">RFC 1850</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1252.html">RFC 1252</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1364.html">RFC 1364</a>] BGP OSPF Interaction.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1403.html">RFC 1403</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1583.html">RFC 1583</a>] OSPF Version 2.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2178.html">RFC 2178</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1247.html">RFC 1247</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1587.html">RFC 1587</a>] The OSPF NSSA Option.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3101.html">RFC 3101</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2178.html">RFC 2178</a>] OSPF Version 2.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2328.html">RFC 2328</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1583.html">RFC 1583</a>.<hr /><b>Publications:</b>
[ISBN 0201634724] OSPF: Anatomy of An Internet Routing Protocol.
[ISBN 0201309661] OSPF: Complete Implementation.
                		  </div>
		  
</section>

