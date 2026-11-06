---
id: protocol-rip
slug: rip
name: RIP
expandedName: Routing Information Protocol
origin: historical
provenance:
  source: protocols/protocol_RIP.htm
  sha256: 56526589e170af964b899c0a8b1fa8d90066a848cdf270cd6e8dc526be54ea9c
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Routing Information Protocol
layers:
  - Network Layer
suites:
  - XNS ProtocolsRouting
summary:
  - label: Protocol
    html: Routing Information Protocol
  - label: Protocol suite
    html: XNS ProtocolsRouting
  - label: Layer
    html: Network Layer
  - label: Type
    html: Interior gateway protocol
  - label: SNMP MIBs
    html: iso.org.dod.internet.mgmt.mib-2.rip-2 (1.3.6.1.2.1.23)
  - label: Multicast addresses
    html: 224.0.0.9
  - label: Ports
    html: 520 (UDP)
  - label: Working groups
    html: 'RIP, Routing Information Protocol'
originalUpdate: '2005-11-07 17:08:13'
rfcs:
  - 1058
  - 1387
  - 1388
  - 1389
  - 1581
  - 1582
  - 1721
  - 1722
  - 1723
  - 1724
  - 1812
  - 1923
  - 2082
  - 2091
  - 2092
  - 2453
related: []
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

			RIP is probably the most widely used in Internet interior routing protocols. It is a distance-vector protocol based on a 1970s Xerox design. RIP is a routing protocol based on the Bellman-Ford (or distance vector) algorithm. This algorithm has been used for routing computations in computer networks since the early days of the ARPANET. The particular packet formats and protocol described here are based on the program "routed," which is included with the Berkeley distribution of Unix.
<br />
<br />In an international network, such as the Internet, it is very unlikely that a single routing protocol will used for the entire network. Rather, the network will be organized as a collection of Autonomous Systems (AS), each of which will, in general, be administered by a single entity. Each AS will have its own routing technology, which may differ among AS's. RIP was designed to work as an IGP in moderate-size AS's. It is not intended for use in more complex environments.
<br />
<br />This protocol is most useful as an "interior gateway protocol". In a nationwide network such as the current Internet, it is very unlikely that a single routing protocol will used for the whole network Rather, the network will be organized as a collection of "autonomous systems". 
<br />
<br />RIP is one of a class of algorithms known as "distance vector. Because of this, they are sometimes known as Ford-Fulkerson algorithms. RIP is intended for use within the IP-based Internet. This protocol does not solve every possible routing problem. As mentioned above, it is primary intended for use as an IGP, in reasonably homogeneous networks of moderate size. 
<br />
<br />RIP is intended to allow hosts and gateways to exchange information for computing routes through an IP-based network. RIP is a distance vector protocol. RIP is used to convey information about routes to "destinations", which may be individual hosts, networks, or a special destination used to convey a default route.
<br />
<br />Each host that implements RIP is assumed to have a routing table. This table has one entry for every destination that is reachable through the system described by RIP. Each entry contains at least the following information:
<br /><ul><li>The IP address of the destination.<br /><br /></li>

<li>Metric represents the total cost of getting a datagram from the host to that destination. This metric is the sum of the costs associated with the networks that would be traversed in getting to the destination.<br /><br /></li>

<li>The IP address of the next gateway along the path to the destination. If the destination is on one of the directly-connected networks, this item is not needed.<br /><br /></li>

<li>A flag to indicate that information about the route has changed recently. This will be referred to as the "route change flag."<br /><br /></li>

<li>Various timers associated with the route.</li></ul>
<br />
<br />The entries for the directly-connected networks are set up by the host, using information gathered by means not specified in this protocol. The metric for a directly-connected network is set to the cost of that network. In existing RIP implementations, 1 is always used for the cost. In that case, the RIP metric reduces to a simple hop-count. More complex metrics may be used when it is desirable to show preference for some networks over others, for example because of differences in bandwidth or reliability.
<br />
<br />The current RIP packet contains the minimal amount of information necessary for routers to route packets through a network. It also contains a large amount of unused space, owing to its origins.
<br />
<br />The current RIP protocol does not consider autonomous systems and IGP/EGP interactions, subnetting, and authentication since implementations of these postdate RIP. The lack of subnet masks is a particularly serious problem for routers since they need a subnet mask to know how to determine a route.
<br /><hr />
<br /><b>Operation</b>
<br /><ul><li>When RIP is started it sends a message to each of its neighbors (on well-known UDP port 520) asking for a copy of the neighbor's routing table. This message is a query (command set to 1) with an address family of 0 and a metric of 16. The neighboring routers return a copy of their routing tables.<br /><br /></li> 

<li>When RIP is in active mode it sends all or part of its routing table to all of its neighbor routers (by broadcasting and/or by sending it on any point-to-point links to its neighbors). This is done every 30 seconds. The routing table is sent as a reply (command is 2, even though it is unsolicited). <br /><br /></li>

<li>When RIP discovers a metric has changed, it broadcasts the change to other routers. <br /><br /></li>

<li>When RIP receives a reply, the message is validated and the local routing table is updated if necessary. <br /><br /></li>

<li>To improve performance and reliability, RIP specifies that once a router (or host) learns a route from another router, it must keep that route until it learns of a better one (with a strictly lower cost). This prevents routes from oscillating between two or more equal cost paths. <br /><br /></li>

<li>When RIP receives a request, other than one for the entire table, it is returned as the response with the metric for each entry set to the value from the local routing table. If no route exists in the local table, the metric is set to 16. <br /><br /></li>

<li>RIP routes learned from other routers time out unless they are re-advertised within 180 seconds (6 broadcast cycles). When a route times out, its metric is set to infinity, the invalidation of the route is broadcast to the router's neighbors, and 60 seconds later, the route is deleted from the local routing table.</li></ul>
<br /><hr />
<br /><b>Limitation</b>
<br />This protocol does not solve every possible routing problem. As mentioned above, it is primary intended for use as an IGP in networks of moderate size. In addition, the following specific limitations are mentioned:
<br /><ul><li>The protocol is limited to networks whose longest path (the network's diameter) is 15 hops. The designers believe that the basic protocol design is inappropriate for larger networks.<br /><br /></li>

<li>Solving the counting to infinity problem is done by using the split horizon, poisoned reverse and triggered updates techniques.<br /><br /></li>

<li>The protocol depends upon "counting to infinity" to resolve certain unusual situations. (This will be explained in the next section.) If the system of networks has several hundred networks, and a routing loop was formed involving all of them, the resolution of the loop would require either much time (if the frequency of routing updates were limited) or bandwidth (if updates were sent whenever changes were detected).<br /><br /></li>

<li>This protocol uses fixed "metrics" to compare alternative routes. It is not appropriate for situations where routes need to be chosen based on real-time parameters such a measured delay, reliability, or load.</li></ul>
<br /><hr />
<br /><b>Header Format</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>32bits</p></td></tr><tr><td><p>Command</p></td><td><p>Version</p></td><td><p>Routing Domain</p></td></tr><tr><td colspan="2"><p>Address family Identifier</p></td><td><p>Route tag</p></td></tr><tr><td colspan="3"><p>IPv4 address</p></td></tr><tr><td colspan="3"><p>Subnet mask</p></td></tr><tr><td colspan="3"><p>Next hop</p></td></tr><tr><td colspan="3"><p>Metric</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Command</b><br /></li> 
<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>Value</td><td>Command</td><td>Description</td></tr><tr><td>1</td><td>Request</td><td>A request for the responding system to send all or part of its routing table.</td></tr><tr><td>2</td><td>Response</td><td>A message containing all or part of the sender's routing table. This message may be sent in response to a request, or it may be an unsolicited routing update generated by the sender.</td></tr><tr><td>3</td><td>Trace on. Obsolete</td><td> </td></tr><tr><td>4</td><td>Trace off. Obsolete.</td><td> </td></tr><tr><td>5</td><td>SUN reserved.</td><td> </td></tr><tr><td>6</td><td>Triggered request</td><td>A triggered request is retransmitted at periodic intervals until a triggered response is received.</td></tr><tr><td>7</td><td>Triggered response</td><td>A triggered response is retransmitted at periodic intervals until a triggered acknowledgement is received.</td></tr><tr><td>8</td><td>Triggered acknowledgement</td><td>A message sent in response to every triggered response packet received.</td></tr><tr><td>9</td><td>Update Request</td><td>It is a request to the peer system to send ALL appropriate elements in its routing database.</td></tr><tr><td>10</td><td>Update Response</td><td>It is a message containing zero or more routes in an update.</td></tr><tr><td>11</td><td>Update Acknowledge</td><td>It is a message sent in response to every Update Response packet received.</td></tr></tbody></table></div></div><br /></li>
<li><b>Version</b><br /></li>
<li>8 bits. The RIP protocol version.
<br /><br /></li>
<li><b>Routing Domain</b><br /></li>
<li>The Routing Domain (RD) number is the number of the routing process to which this update belongs. This field is used to associate the routing update to a specific routing process on the receiving router.
<br /><br /></li>
<li><b>Address family Identifier</b> 16 bits.<br /><br /></li>

<li><b>Route tag</b><br /></li> 
<li>16 bits. Cleared to 0 for RIPv1. For RIPv2, this is an attribute assigned to a route which must be preserved and readvertised with a route. The intended use of this tag is to provide a method of separating routes for networks within the RIP routing domain from routes which may have been imported from an EGP or another IGP.
<br /><br /></li>
<li><b>IPv4 address</b> 
<br />32 bits.<br /><br /></li>

<li><b>Subnet mask.</b><br /></li> 
<li>32 bits. The Subnet Mask field contains the subnet mask which is applied to the IP address to yield the non-host portion of the address. If this field is zero, then no subnet mask has been included for this entry.On an interface where a RIP-1 router may hear and operate on the information in a RIP-2 routing entry the following two rules apply:
<br /></li><li><ul><li>Information internal to one network must never be advertised into another network.<br /></li>
<li>Information about a more specific subnet may not be advertised where RIP-1 routers would consider it a host route.</li></ul><br /><br /></li>

<li><b>Next hop</b><br /></li> 
<li>32 bits. The immediate next hop IP address to which packets to the destination specified by this route entry should be forwarded. 
<br /><br /></li>
<li><b>Metric</b><br /></li> 
<li>32 bits. Contains a value from 1 to 15 which specifies the current metric for the destination. A value of 16 indicates that the destination is not reachable.</li></ul>
<br />The maximum datagram size is 512 octets. This includes only the portions of the datagram described above. It does not count the IP or UDP headers. The commands that involve network information allow information to be split across several datagrams. No special provisions are needed for continuations, since correct results will occur if the datagrams are processed individually.
<br /><hr />
<br /><b>Addressing Considerations</b>
<br />Distance vector routing can be used to describe routes to individual hosts or to networks. The RIP protocol allows either of these possibilities. The destinations appearing in code used to indicate a default address. In general, the kinds of routes actually used will depend upon the routing strategy used for the particular network. Many networks are set up so that routing information for individual hosts is not needed.
<br />
<br />The RIP packet formats do not distinguish among various types of address. Fields that are labeled "address" can contain any of the following:
<br /><ul><li>Host address<br /></li>
<li>Subnet number<br /></li>
<li>Network number<br /></li>
<li>0, indicating a default route</li></ul>
<br />Entities that use RIP are assumed to use the most specific information available when routing a datagram.
<br /><hr />
<br /><b>Timers</b>
<br />Every 30 seconds, the output process is instructed to generate a complete response to every neighboring gateway. When there are many gateways on a single network, there is a tendency for them to synchronize with each other such that they all issue updates at the same time. This can happen whenever the 30 second timer is affected by the processing load on the system. It is undesirable for the update messages to become synchronized, since it can lead to unnecessary collisions on broadcast networks. Thus, implementations are required to take one of two precautions.
<br /><ul><li>The 30-second updates are triggered by a clock whose rate is not affected by system load or the time required to service the previous update timer.<br /><br /></li>

<li>The 30-second timer is offset by addition of a small random time each time it is set.</li></ul>
<br />There are two timers associated with each route, a "timeout" and a "garbage-collection time".  Upon expiration of the timeout, the route is no longer valid.
<br />
<br />Deletions can occur for one of two reasons: (1) the timeout expires, or (2) the metric is set to 16 because of an update received from the current gateway. In either case, the following events happen:
<br /><ul><li>The garbage-collection timer is set for 120 seconds.<br /><br /></li>

<li>The metric for the route is set to 16 (infinity). This causes the route to be removed from service.<br /><br /></li>

<li>A flag is set noting that this entry has been changed, and the output process is signaled to trigger a response.</li></ul>
<br /><hr />
<br /><b>Input Processing</b>
<br />This section will describe the handling of datagrams received on UDP port 520. Before processing the datagrams in detail, certain general format checks must be made. These depend upon the version number field in the datagram, as follows:
<br /><ul><li>0   Datagrams whose version number is zero are to be ignored. These are from a previous version of the protocol, whose packet format was machine-specific.<br /><br /></li>

<li>1   Datagrams whose version number is one are to be processed as described in the rest of this specification. All fields that are described above as "must be zero" are to be checked. If any such field contains a non-zero value, the entire message is to be ignored.<br /><br /></li>

<li>&gt;1  Datagrams whose version number are greater than one are to be processed as described in the rest of this specification. All fields that are described above as "must be zero" are to be ignored.  Future versions of the protocol may put data into these fields.</li></ul>
<br />After checking the version number and doing any other preliminary checks, processing will depend upon the value in the command field.
<br />
<br /><ul><li><b>Request</b><br /></li>
<li>Request is used to ask for a response containing all or part of the host's routing table. Note that the term host is used for either host or gateway, in most cases it would be unusual for a non-gateway host to send RIP messages.The request is processed entry by entry. If there are no entries, no response is given.
<br /><br /></li>
<li>Note that there is a difference in handling depending upon whether the request is for a specified set of destinations, or for a complete routing table. If the request is for a complete host table, normal output processing is done. If the request is for specific entries, they are looked up in the host table and the information is returned.
<br /><br /></li>
<li><b>Response</b><br /></li>
<li>Responses can be received for several different reasons:
<br /></li><li><ul><li>Response to a specific query<br /></li>
<li>Regular updates<br /></li>
<li>Triggered updates triggered by a metric change</li></ul><br /></li>
<li>Because processing of a response may update the host's routing table, the response must be checked carefully for validity. The response must be ignored if it is not from port 520. The IP source address should be checked to see whether the datagram is from a valid neighbor.
<br /><br /></li>
<li>Now that the datagram as a whole has been validated, process the entries in it one by one.  Again, start by doing validation. If the metric is greater than infinity, ignore the entry.
<br /></li><li>Now look up the address to see whether this is already a route for it. In general, if not, we want to add one.
<br /></li><li>We want to avoid adding routes to hosts if the host is part of a net or subnet for which we have at least as good a route. If neither of these exceptions applies, add a new entry to the routing database. This includes the following actions:
<br /></li><li><ul><li>Set the destination and metric to those from the datagram.<br /></li>
<li>Set the gateway to be the host from which the datagram came.<br /></li>
<li>Initialize the timeout for the route. If the garbage- collection timer is running for this route, stop it. <br /></li>
<li>Set the route change flag, and signal the output process to trigger an update.</li></ul><br /></li>
<li>If the datagram is from the same gateway as the existing route and the new metric is different than the old one, or if the new metric is lower than the old one, do the following actions:
<br /></li><li><ul><li>Adopt the route from the datagram. That is, put the new metric in, and set the gateway to be the host from which the datagram came.<br /></li>
<li>Initialize the timeout for the route.<br /></li>
<li>Set the route change flag, and signal the output process to trigger an update.<br /></li>
<li>If the new metric is 16 (infinity), the deletion process is started.</li></ul></li></ul>
<br /><hr />
<br /><b>Output Processing</b>
<br />This section describes the processing used to create response messages that contain all or part of the routing table. This processing may be triggered in any of the following ways:
<br /><ul><li>By input processing when a request is seen.  In this case, the resulting message is sent to only one destination.<br /></li>
<li>By the regular routing update. Every 30 seconds, a response containing the whole routing table is sent to every neighboring gateway.<br /></li>
<li>By triggered updates. Whenever the metric for a route is changed, an update is triggered.</li></ul>
<br />Triggered updates require special handling for two reasons. First, experience shows that triggered updates can cause excessive loads on networks with limited capacity or with many gateways on them. Second, triggered updates do not need to include the entire routing table.
<br />
<br />The only difference between a triggered update and other update messages is the possible omission of routes that have not changed. The rest of the mechanisms about to be described must all apply to triggered updates.
<br />
<br />Here is how a response datagram is generated for a particular directly-connected network:
<br /><ul><li>The IP source address must be the sending host's address on that network.<br /></li>
<li>Set the version number to the current version of RIP.<br /></li>
<li>To fill in the entries, go down all the routes in the internal routing table.</li></ul>
<br />If the route passes these tests, then the destination and metric are put into the entry in the output datagram. Routes must be included in the datagram even if their metrics are infinite.
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: Plain Text Authentication</b>

One of the two ways in which RIP updates can be authenticated is using plain text 
authentication. This can be configured as shown in the tables below.

          RB#debug ip rip
           RIP protocol debugging is on
          *Mar  3 02:11:39.207: RIP: received packet with text authentication 234
          *Mar  3 02:11:39.211: RIP: received v2 update from 141.108.0.10 on Serial0
          *Mar  3 02:11:39.211: RIP: 70.0.0.0/8 via 0.0.0.0 in 1 hops
          RB#show ip route  
          R    70.0.0.0/8 [120/1] via 141.108.0.10, 00:00:25, Serial0
               80.0.0.0/24 is subnetted, 1 subnets
          C       80.80.80.0 is directly connected, Loopback0
               141.108.0.0/30 is subnetted, 1 subnets
          C       141.108.0.8 is directly connected, Serial0

Using plain text authentication improves the network design by preventing the 
addition of routing updates originated by routers not meant to take part in the 
local routing exchange process. However, this type of authentication is not secure. 
The password (234 in this example) is exchanged in plain text. It can be captured 
easily and thus exploited.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Troubleshooting Commands</b>

Certain show commands are supported by the Output Interpreter Tool (registered 
customers only), which allows you to view an analysis of show command output.

          RA#debug ip rip
             RIP protocol debugging is on

             *Mar 1 06:47:42.422: RIP: received packet with text authentication 234
             *Mar 1 06:47:42.426: RIP: ignored v2 packet from 141.108.0.9 (invalid 
             authentication)

             RB#debug ip rip
             RIP protocol debugging is on

             *Mar 1 06:48:58.478: RIP: received packet with text authentication 235
             *Mar 1 06:48:58.482: RIP: ignored v2 packet from 141.108.0.10 (invalid 
             authentication)

The following output from the show ip route command shows that the router is not 
learning any routes via RIP:

          RB#show ip route
         Codes: C - connected, S - static, R - RIP, M - mobile, B - BGP 
                 D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area 
                 N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2
                 E1 - OSPF external type 1, E2 - OSPF external type 2
                 i - IS-IS, su - IS-IS summary, L1 - IS-IS level-1, L2 - IS-IS level-2
                 ia - IS-IS inter area, * - candidate default, U - per-user static route
                 o - ODR, P - periodic downloaded static route

Gateway of last resort is not set

          80.0.0.0/24 is subnetted, 1 subnets
             C 80.80.80.0 is directly connected, Loopback0
                  141.108.0.0/30 is subnetted, 1 subnets
             C 141.108.0.8 is directly connected, Serial0
             RB#</pre>
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
<td class="MapParent" aria-label="Parent layer protocols">UDP<img src="/supporting/images/tline_l_top.gif" alt="" /><br />XNSs<img src="/supporting/images/tline_l_bottom.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>RIP</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />RIPv1<br /><img src="/supporting/images/tline_r.gif" alt="" />RIPv2<br /><img src="/supporting/images/tline_r.gif" alt="" />RIPv3<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />RIPv4<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Autonomous Systems</b><br />Autonomous system (AS) is the unit of router policy, either a single network or a group of networks that is controlled by a common network administrator (or group of administrators) on behalf of a single administrative entity.<br /><br /><b>IGP</b><br />IGP (Interior Gateway Protocol) is a protocol for exchanging routing information between gateways (hosts with routers) within an autonomous network. such as a enterprise LAN. IGPs typically support confined geographical areas. 
<br />
<br />RIP and OSPF are two examples of an IGP.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1058.html">RFC 1058</a>] Routing Information Protocol.
                Defines RIP version 1.
[<a href="https://www.rfc-editor.org/rfc/rfc1581.html">RFC 1581</a>] Protocol Analysis for Extensions to RIP to Support Demand Circuits.
[<a href="https://www.rfc-editor.org/rfc/rfc1582.html">RFC 1582</a>] Extensions to RIP to Support Demand Circuits.
[<a href="https://www.rfc-editor.org/rfc/rfc1721.html">RFC 1721</a>] RIP Version 2 Protocol Analysis.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1387.html">RFC 1387</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1722.html">RFC 1722</a>] RIP Version 2 Protocol Applicability Statement.
[<a href="https://www.rfc-editor.org/rfc/rfc1723.html">RFC 1723</a>] RIP Version 2 Carrying Additional Information.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1388.html">RFC 1388</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1724.html">RFC 1724</a>] RIP Version 2 MIB Extension.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1389.html">RFC 1389</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1812.html">RFC 1812</a>] Requirements for IP Version 4 Routers.
[<a href="https://www.rfc-editor.org/rfc/rfc1923.html">RFC 1923</a>] RIPv1 Applicability Statement for Historic Status.
[<a href="https://www.rfc-editor.org/rfc/rfc2082.html">RFC 2082</a>] RIP-2 MD5 Authentication.
[<a href="https://www.rfc-editor.org/rfc/rfc2091.html">RFC 2091</a>] Triggered Extensions to RIP to Support Demand Circuits.
[<a href="https://www.rfc-editor.org/rfc/rfc2092.html">RFC 2092</a>] Protocol Analysis for Triggered RIP.
[<a href="https://www.rfc-editor.org/rfc/rfc2453.html">RFC 2453</a>] RIP Version 2.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc1387.html">RFC 1387</a>] RIP Version 2 Protocol Analysis.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1721.html">RFC 1721</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1388.html">RFC 1388</a>] RIP Version 2 Carrying Additional Information.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1723.html">RFC 1723</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1058.html">RFC 1058</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1389.html">RFC 1389</a>] RIP Version 2 MIB Extension.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1724.html">RFC 1724</a>.
                		  </div>
		  
</section>

