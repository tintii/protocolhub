---
id: protocol-igrp
slug: igrp
name: IGRP
expandedName: Interior Gateway Routing Protocol
origin: historical
provenance:
  source: protocols/protocol_IGRP.htm
  sha256: b76979d63197db3508035f25d950183a55a6a71ceeab2a6ac4c4693e34fbffc2
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Interior Gateway Routing Protocol
layers:
  - Network Layer
suites:
  - TCP/IP.
summary:
  - label: Protocol
    html: Interior Gateway Routing Protocol
  - label: Protocol suite
    html: TCP/IP.
  - label: Layer
    html: Network Layer
  - label: Type
    html: Interior gateway protocol
  - label: Multicast addresses
    html: 224.0.0.10
originalUpdate: '2005-11-07 16:58:03'
rfcs: []
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
editorialNotes: []
---
<section aria-labelledby="description">
<h2 id="description">Description</h2>

			The Interior Gateway Routing Protocol (IGRP) is a Cisco interior routing protocol based on distance-vector routing and used to transfer routing information between routers. The principal goal in creating IGRP was to provide a robust protocol for routing within an autonomous system (AS). Such protocols are known as Interior Gateway Routing Protocols.
<br />
<br />Cisco developed IGRP in the 1980s to provide an alternative to RIP (Routing Information Protocol). At the time, IGRP was a significant improvement over RIP, which had a hop count restriction that limited the size of an internetwork. IGRP supports internetworks with up to 255 hops.
<br />
<br />IGRP implementation worked in Internet Protocol (IP) networks. IGRP was designed to run in any network environment, however, and Cisco soon ported it to run in OSI Connectionless-Network Protocol (CLNP) networks. Cisco developed Enhanced IGRP in the early 1990s to improve the operating efficiency of IGRP. This chapter discusses IGRP's basic design and implementation. 
<br />
<br />Distance vector routing protocols mathematically compare routes using some measurement of distance. This measurement is known as the distance vector. Routers using a distance vector protocol must send all or a portion of their routing table in a routing-update message at regular intervals to each of their neighboring routers. As routing information proliferates through the network, routers can identify new destinations as they are added to the network, learn of failures in the network, and, most importantly, calculate distances to all known destinations.
<br />
<br />IGRP uses a composite metric that is calculated by factoring weighted mathematical values for internetwork delay, bandwidth, reliability, and load. Network administrators can set the weighting factors for each of these metrics, although great care should be taken before any default values are manipulated. IGRP provides a wide range for its metrics. Reliability and load, for example, can take on any value between 1 and 255; bandwidth can take on values reflecting speeds from 1200 bps to 10 Gbps, while delay can take on any value from 1 to 224. These wide metric ranges are further complemented by a series of user-definable constants that enable a network administrator to influence route selection. These constants are hashed against the metrics, and each other, in an algorithm that yields a single, composite metric. Thus, the network administrator can influence route selection by giving higher or lower weighting to specific metrics. This flexibility allows administrators to fine-tune IGRP's automatic route selection.
<br />
<br />To provide additional flexibility, IGRP permits multipath routing. Dual equal-bandwidth lines can run a single stream of traffic in round-robin fashion, with automatic switchover to the second line if one line goes down. Multiple paths can have unequal metrics yet still be valid multipath routes. For example, if one path is three times better than another path (its metric is three times lower), the better path will be used three times as often. Only routes with metrics that are within a certain range or variance of the best route are used as multiple paths. Variance is another value that can be established by the network administrator.
<br />
<br />IGRP is a protocol that allows gateways to build up their routing table by exchanging information with other gateways. A gateway starts out with entries for all of the networks that are directly connected to it. It gets information about other networks by exchanging routing updates with adjacent gateways. In the simplest case, the gateway will find one path that represents the best way to get to each network. Metric information is a set of numbers that characterize how good the path is. This allows the gateway to compare paths that it has heard from various gateways and decide which one to use. There are often cases where it makes sense to split traffic between two or more paths. IGRP will do this whenever two or more paths are equally good. The user can also configure it to split traffic when paths are almost equally good. In this case more traffic will be sent along the path with the better metric.
<br />
<br />The metric used by IGRP includes: 
<br /><ul><li>The topological delay time<br /></li> 
<li>The bandwidth of the narrowest bandwidth segment of the path<br /></li> 
<li>The channel occupancy of the path<br /></li> 
<li>The reliability of the path</li></ul>
<br /><hr />
<br /><b>Operation</b>
<br />Each router routinely sends out on each local network to which it is attached a message containing a copy of its routing table. This message contains pairs of reachable networks and costs (metrics) to reach each network. A router receiving this message knows it can reach all the networks in the message as long as it can reach the router that sent the message. It computes the cost to reach those networks by adding to their costs, the cost to reach the router that sent the message. The routers update their tables accordingly, and send this information out in their next routine update. Eventually, each router in the autonomous system has information about the cost to reach each network in it.
<br />The basic operation is outlined below:
<br /><ul><li>Upon router startup, IGRP broadcast request messages to other routers. Upon receipt of the message, router send their routing tables to the startup router. Routing tables contain entries for each of the networks that a router can reach. <br /><br /></li>

<li>At regular intervals, routers automatically transmit their routing tables to other routers which in turn update their own routing tables if there are changes in the topology. <br /><br /></li>

<li>A triggered update occurs if the network topology changes. Triggered updates allow quick responses to changes in the network. <br /><br /></li>

<li>When routers add entries to routing tables, 1 is added to the hop count to account for the hop between the router and the neighbor from which it received the route information.<br /><br /></li> 

<li>When a route is entered into the routing table, a timer is set. As routing table updates arrive and a route entry is verified to still be valid, the timer is reset. If a known router fails to appear in an update and in subsequent updates, the timer will run out and the route entry will be purged.</li></ul>
<br /><hr />
<br /><b>Stability Features</b>
<br />IGRP provides a number of features that are designed to enhance its stability. These include holddowns, triggered updates, split horizon, and poisoning These features are designed to prevent gateways from picking up erroneous routes.
<br />
<br /><ul><li><b>Holddowns</b><br /></li>
<li>Holddowns are used to prevent regular update messages from inappropriately reinstating a route that might have gone bad. When a router goes down, neighboring routers detect this via the lack of regularly scheduled update messages. These routers then calculate new routes and send routing update messages to inform their neighbors of the route change. This activity begins a wave of triggered updates that filter through the network. These triggered updates do not instantly arrive at every network device. Thus, it is possible for a device that has yet to be informed of a network failure to send a regular update message, which advertises a failed route as being valid to a device that has just been notified of the network failure. In this case, the latter device would contain (and potentially advertise) incorrect routing information. Holddowns tell routers to hold down any changes that might affect routes for some period of time. The holddown period usually is calculated to be just greater than the period of time necessary to update the entire network with a routing change.
<br /><br /></li>
<li><b>Triggered updates</b><br /></li>
<li>Triggered updates would be sufficient if we could guarantee that the wave of updates reached every appropriate gateway immediately. However, there are two problems. First, packets containing the update message can be dropped or corrupted by some link in the network. Second, the triggered updates don't happen instantaneously. It is possible that a gateway that has not yet gotten the triggered update will issue a regular update at just the wrong time, causing the bad route to be reinserted in a neighbor that had already gotten the triggered update. Holddowns are designed to get around these problems. The holddown rule says that when a route is removed, no new route will be accepted for the same destination for some period of time. This gives the triggered updates time to get to all other gateways, so that we can be sure any new routes we get aren't just some gateway reinserting the old one. The holddown period must be long enough to allow for the wave of triggered updates to go throughout the network. In addition, it should include a couple of regular broadcast cycles, to handle dropped packets. Consider what happens if one of the triggered updates is dropped or corrupted. The gateway that issued that update will issue another update at the next regular update. This will restart the wave of triggered updates at neighbors that missed the initial wave.
<br /><br /></li>
<li><b>Split horizons</b><br /></li>
<li>Split horizons derive from the premise that it is never useful to send information about a route back in the direction from which it came. For example, Router 1 (R1) advertises that it has a route to Network A. There is no reason for Router 2 (R2) to include this route in its update back to R1 because R1 is closer to Network A. The split-horizon rule says that R2 should strike this route from any updates that it sends to R1. The split-horizon rule helps prevent routing loops. Consider, e.g. the case in which R1's interface to Network A goes down. Without split horizons, R2 continues to inform R1 that it can get to Network A (through R1). If R1 does not have sufficient intelligence, it actually might pick up R2's route as an alternative to its failed direct connection, causing a routing loop. Although holddowns should prevent this, split horizons are implemented in IGRP because they provide extra algorithm stability.
<br /><br /></li>
<li>Split horizons should prevent routing loops between adjacent routers, but poison-reverse updates are necessary to defeat larger routing loops. Increases in routing metrics generally indicate routing loops. Poison-reverse updates then are sent to remove the route and place it in holddown. In Cisco's implementation of IGRP, poison-reverse updates are sent if a route metric has increased by a factor of 1.1 or greater.</li></ul> 
<br /><hr />
<br /><b>Header Format</b>
<br />IGRP is sent using IP datagrams with IP 9 (IGP). The packet begins with a header which starts immediately after the IP header.
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>24</p></td><td><p>32bits</p></td></tr><tr><td><p>Version</p></td><td><p>Opcode</p></td><td><p>Edition</p></td><td><p>ASystem</p></td></tr><tr><td><p>Ninterior</p></td><td><p>Nsystem</p></td><td><p>Nexterior</p></td><td><p>Checksum</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Version</b><br /></li>
<li>Protocol version number (currently 1).
<br /><br /></li>
<li><b>Opcode</b><br /></li>
<li>Operation code indicating the message type:
<br /></li><li><ul><li>1   Update.
<br /></li><li>2   Request.</li></ul><br /></li>
<li><b>Edition</b><br /></li>
<li>Serial number which is incremented whenever there is a change in the routing table. The edition number allows gateways to avoid processing updates containing information that they have already seen.
<br /><br /></li>
<li><b>ASystem</b><br /></li>
<li>Autonomous system number. A gateway can participate in more than one autonomous system where each system runs its own IGRP. For each autonomous system, there are completely separate routing tables. This field allows the gateway to select which set of routing tables to use.
<br /></li><li>Ninterior, Nsystem, Nexterior
<br /></li><li>Indicate the number of entries in each of these three sections of update messages. The first entries (Ninterior) are taken to be interior, the next entries (Nsystem) as being system, and the final entries (Nexterior) as exterior.
<br /><br /></li>
<li><b>Checksum</b><br /></li>
<li>IP checksum which is computed using the same checksum algorithm as a UDP checksum. The checksum is computed on the IGRP header and any routing information that follows it. The checksum field is set to zero when computing the checksum. The checksum does not include the IP header and there is no virtual header as in UDP and TCP.
<br /></li><li>An IGRP request asks the recipient to send its routing table. The request message has only a header. Only the Version, Opcode and ASystem fields are used; all other fields are zero.
<br /></li><li>An IGRP update message contains a header, immediately followed by routing entries. As many routing entries as possible are included to fit into a 1500-byte datagram (including the IP header). With current structure declarations, this allows up to 104 entries. If more entries are needed, several update messages are sent.</li></ul>
<br /><hr />
<br /><b>Goals for IGRP</b>
<br />IGRP is a protocol that allows a number of gateways to coordinate their routing. Its goals are 
<br /><ul><li>Stable routing even in very large or complex networks. No routing loops should occur, even as transients. <br /></li>
<li>Fast response to changes in network topology.<br /></li> 
<li>Low overhead. That is, IGRP itself should not use more bandwidth than what is actually needed for its task. <br /></li>
<li>Splitting traffic among several parallel routes when they are of roughly equal desirability. <br /></li>
<li>Taking into account error rates and level of traffic on different paths.<br /></li> 
<li>The ability to handle multiple "types of service" with a single set of information.</li></ul>
<br />
<br />No one tool is going to solve all routing problems. Conventionally the routing problem is broken into several pieces. Protocols such as IGRP are called "internal gateway protocols" (IGPs). They are intended for use within a single set of networks, either under a single management or closely coordinated managements. Such sets of networks are connected by "external gateway protocols" (EGPs). In fact, there are features in Cisco's implementation that allow IGRP to be used as an EGP in some circumstances. However, the emphasis in its design is on use as an IGP.
<br />
<br />IGRP has some similarities to older protocols such as Xerox's Routing Information Protocol, Berkeley's RIP, and Dave Mills' Hello. It differs from these protocols primarily in being designed for larger and more complex networks. Like these older protocols, IGRP is a distance vector protocol. In such a protocol, gateways exchange routing information only with adjacent gateways. This routing information contains a summary of information about the rest of the network. It can be shown mathematically that all of the gateways taken together are solving an optimization problem by what amounts to a distributed algorithm. Each gateway only needs to solve part of the problem, and it only has to receive a portion of the total data.
<br /><hr />
<br /><b>IGRP Configuration Task</b>
<br />To configure IGRP, perform the tasks in the following sections. It is only mandatory to create the IGRP routing process; the other tasks described are optional.
<br />
<br /><ul><li><b>Create the IGRP Routing Process</b><br /></li>
<li>To create the IGRP routing process, perform the following required tasks starting in global configuration mode:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>Command</p></td><td><p>Task </p></td></tr><tr><td>router igrp autonomous-system</td><td>Step 1 Enable an IGRP routing process, which places you in router configuration mode.</td></tr><tr><td>Network network-number</td><td>Step 2 Associate networks with an IGRP routing process.</td></tr></tbody></table></div></div><br /></li>
<li>IGRP sends updates to the interfaces in the specified networks. If an interface's network is not specified, it will not be advertised in any IGRP update.
<br /><br /></li>
<li><b>Allow Point-to-Point Updates for IGRP</b><br /></li>
<li>Because IGRP is normally a broadcast protocol, in order for IGRP routing updates to reach point-to-point or nonbroadcast networks, you must configure the router to permit this exchange of routing information.
<br /><br /></li>
<li>To permit information exchange, perform the following task in router configuration mode:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td><p>Command</p></td><td><p>Task</p></td></tr><tr><td>Nerighbor ip-address</td><td>Define a neighboring router with which to exchange point-to-point routing information.</td></tr></tbody></table></div></div><br /></li>
<li><b>Define Unequal-Cost Load Balancing</b><br /></li>
<li>IGRP can simultaneously use an asymmetric set of paths for a given destination. This feature is known as unequal-cost load balancing. Unequal-cost load balancing allows traffic to be distributed among multiple (up to four) unequal-cost paths to provide greater overall throughput and reliability. Alternate path variance (that is, the difference in desirability between the primary and alternate paths) is used to determine the feasibility of a potential route. An alternate route is feasible if the next router in the path is closer to the destination (has a lower metric value) than the current router and if the metric for the entire alternate path is within the variance. Only paths that are feasible can be used for load balancing and included in the routing table. These conditions limit the number of cases in which load balancing can occur, but ensure that the dynamics of the network will remain stable.
<br /><br /></li>
<li>The following general rules apply to IGRP unequal-cost load balancing:
<br /></li><li><ul><li>IGRP will accept up to four paths for a given destination network.<br /><br /></li>

<li>The local best metric must be greater than the metric learned from the next router; that is, the next-hop router must be closer (have a smaller metric value) to the destination than the local best metric.<br /><br /></li>

<li>The alternative path metric must be within the specified variance of the local best metric. The multiplier times the local best metric for the destination must be greater than or equal to the metric through the next router.</li></ul><br /></li>
<li><b>Control Traffic Distribution</b><br /></li>
<li>IGRP or Enhanced IGRP will distribute traffic among multiple routes of unequal cost to the same destination. If you want to have faster convergence to alternate routes but you do not want to send traffic across inferior routes in the normal case, you might prefer to have no traffic flow along routes with higher metrics. 
<br /><br /></li>
<li>To control how traffic is distributed among multiple routes of unequal cost, perform the following task in router configuration mode:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td>Command</td><td>Task</td></tr><tr><td>Traffic-share {balanced | min}</td><td>Distribute traffic proportionately to the ratios of metrics, or by the minimum-cost route.</td></tr></tbody></table></div></div><br /></li>
<li><b>Adjust the IGRP Metric Weights</b><br /></li>
<li>You have the option of altering the default behavior of IGRP routing and metric computations. This allows, for example, tuning system behavior to allow for transmissions via satellite. Adjusting IGRP metric weights can dramatically affect network performance, however, so ensure you make all metric adjustments carefully. 
<br /><br /></li>
<li>To adjust the IGRP metric weights, perform the following task in router configuration mode. Due to the complexity of this task, we recommend that you only perform it with guidance from an experienced system designer.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 5" tabindex="0"><table><caption>Description: preserved table 5</caption><tbody><tr><td><p>Command</p></td><td><p>Task</p></td></tr><tr><td>metric weights tos k1 k2 k3 k4 k5</td><td>Adjust the IGRP metric.</td></tr></tbody></table></div></div><br /></li>
<li>By default, the IGRP composite metric is a 24-bit quantity that is a sum of the segment delays and the lowest segment bandwidth (scaled and inverted) for a given route.
<br /><br /></li>
<li><b>Enforce a Maximum Network Diameter</b><br /></li>
<li>The router enforces a maximum diameter to the IGRP network. Routes whose hop counts exceed this diameter will not be advertised. The default maximum diameter is 100 hops. The maximum diameter is 255 hops.
<br /><br /></li>
<li>To configure the maximum diameter, perform the following task in router configuration mode:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 6" tabindex="0"><table><caption>Description: preserved table 6</caption><tbody><tr><td><p>Command</p></td><td><p>Task</p></td></tr><tr><td>metric maximum-hops hops</td><td>Configure the maximum network diameter.</td></tr></tbody></table></div></div><br /></li>
<li><b>Validate Source IP Addresses</b><br /></li>
<li>To disable the default function that validates the source IP addresses of incoming routing updates, perform the following task in router configuration mode:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 7" tabindex="0"><table><caption>Description: preserved table 7</caption><tbody><tr><td><p>Command</p></td><td><p>Task</p></td></tr><tr><td>metric maximum-hops hops</td><td>Configure the maximum network diameter.</td></tr></tbody></table></div></div></li></ul>
<br /><hr />
<br /><b>Enhanced IGRP</b>
<br />Enhanced IGRP is an enhanced version of the Interior Gateway Routing Protocol (IGRP) developed by Cisco Systems, Inc. Enhanced IGRP uses the same distance vector algorithm and distance information as IGRP. However, the convergence properties and the operating efficiency of Enhanced IGRP have improved significantly over IGRP. 
<br />
<br />The convergence technology is based on research conducted at SRI International and employs an algorithm referred to as the Diffusing Update Algorithm (DUAL). This algorithm guarantees loop-free operation at every instant throughout a route computation and allows all routers involved in a topology change to synchronize at the same time. Routers that are not affected by topology changes are not involved in recomputations. The convergence time with DUAL rivals that of any other existing routing protocol.
<br />
<br />The protocol has these additional features:
<br /><ul><li>Backward compatible with IGRP, allowing EIGRP to be introduced into existing IGRP networks. <br /><br /></li>

<li>EIGRP provides fast convergence since routers store all neighbor routing tables to promote faster route updates if necessary.<br /><br /></li> 

<li>Supports variable-length subnet mask, allowing route summarization (aggregation) and the creation of network boundaries.<br /><br /></li>

<li>Supports partial updates so that entire routing tables do not need to be sent at regular intervals. Updates are sent when a route changes and the changes are sent to only the routers that need the information. <br /><br /></li>

<li>Supports multiple network-layer protocols, including AppleTalk, Novell NetWare, and IP. The IP implementation of EIGRP redistributes reoutes learned from OSPF, RIP, IS-IS, EGP, and BGP.<br /><br /></li>

<li>EIGRP uses neighbor discovery/recovery to dynamically learn about other routers on directly attached networks. Hello packets are periodically sent to monitor the status of links. EIGRP also uses a reliable transport protocol to provide guaranteed, ordered delivery of packets to neighbors. Route computations are handled by DUAL, which uses distance information to select efficient, loop-free paths.</li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>IP Implementation</b>

This section gives a brief description of the packet formats used by Cisco's IGRP. IGRP is 
sent using IP datagrams with IP protocol 9 (IGP). The packet begins with a header. It 
starts immediately after the IP header. 

          unsigned version: 4;  /* protocol version number */
          unsigned opcode: 4;   /* opcode */
          uchar edition;        /* edition number */
          ushort asystem;       /* autonomous system number */
          ushort ninterior;     /* number of subnets in local net */
          ushort nsystem;       /* number of networks in AS */
          ushort nexterior;     /* number of networks outside AS */
          ushort checksum;      /* checksum of IGRP header and data */</pre>
<br />	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">IP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>IGRP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>CLNP</b><br />CLNP (Connectionless Network Protocol) is a datagram network protocol. It provides fundamentally the same underlying service to a transport layer as IP. CLNP provides essentially the same maximum datagram size, and for those circumstances where datagrams may need to traverse a network whose maximum packet size is smaller than the size of the datagram, CLNP provides mechanisms for fragmentation (data unit identification, fragment/total length and offset). Like IP, a checksum computed on the CLNP header provides a verification that the information used in processing the CLNP datagram has been transmitted correctly, and a lifetime control mechanism ("Time to Live") imposes a limit on the amount of time a datagram is allowed to remain in the internet system. As is the case in IP, a set of options provides control functions needed or useful in some situations but unnecessary for the most common communications.<br /><br /><b>Checksum</b><br />Checksum is a simple error-detection scheme in which each transmitted message is accompanied by a numerical value based on the number of set bits in the message. The receiving station then applies the same formula to the message and checks to make sure the accompanying numerical value is the same. If not, the receiver can assume that the message has been garbled. <br /><br /><b>EGP</b><br />EGP (Exterior Gateway Protocol) is for exchanging routing information between two neighbor gateway hosts in a network of autonomous systems. An EGP is typically used between hosts on the Internet to share routing table information. 
<br />
<br />BGP is an example of an EGP.<br /><br /><b>OSPF</b><br />OSPF is an interior gateway protocol which is used for routing within a group of routers. It uses link-state technology in which routers send each other information about the direct connections and links which they have to other routers.<br /><br />			</div>
		  
</section>

