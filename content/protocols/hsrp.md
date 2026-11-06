---
id: protocol-hsrp
slug: hsrp
name: HSRP
expandedName: Hot Standby Router Protocol
origin: historical
provenance:
  source: protocols/protocol_HSRP.htm
  sha256: b541b060e91b0816bee80b493bd8bc045e1bd71e1ea28334f25660a0c5283871
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Hot Standby Router Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Hot Standby Router Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Ports
    html: 1985 (UDP) server
  - label: Related protocols
    html: 'IP,<br />UDP'
originalUpdate: '2007-02-26 11:21:38'
rfcs:
  - 2281
related:
  - protocol-ip
  - protocol-udp
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

			The Hot Standby Router Protocol, HSRP, provides a mechanism which is designed to support non-disruptive failover of IP traffic in certain circumstances. In particular, the protocol protects against the failure of the first hop router when the source host cannot learn the IP address of the first hop router dynamically. The protocol is designed for use over multi-access, multicast or broadcast capable LANs (e.g., Ethernet). HSRP is not intended as a replacement for existing dynamic router discovery mechanisms and those protocols should be used instead whenever possible.
<br />
<br />All of the routers participating in HSRP are assumed to be running appropriate IP routing protocols and have a consistent set of routes. The discussion of which protocols are appropriate and whether routing is consistent in any given situation is beyond the scope of this specification.
<br />
<br />Using HSRP, a set of routers work in concert to present the illusion of a single virtual router to the hosts on the LAN. This set is known as an HSRP group or a standby group. A single router elected from the group is responsible for forwarding the packets that hosts send to the virtual router.  This router is known as the active router. Another router is elected as the standby router. In the event that the active router fails, the standby assumes the packet forwarding duties of the active router. Although an arbitrary number of routers may run HSRP, only the active router forwards the packets sent to the virtual router.
<br />
<br />To minimize network traffic, only the active and the standby routers send periodic HSRP messages once the protocol has completed the election process. If the active router fails, the standby router takes over as the active router. If the standby router fails or becomes the active router, another router is elected as the standby router.
<br />
<br />On a particular LAN, multiple hot standby groups may coexist and overlap. Each standby group emulates a single virtual router. For each standby group, a single well-known MAC address is allocated to the group, as well as an IP address. The IP address should belong to the primary subnet in use on the LAN, but must differ from the addresses allocated as interface addresses on all routers and hosts on the LAN, including virtual IP addresses assigned to other HSRP groups.
<br />
<br />If multiple groups are used on a single LAN, load splitting can be achieved by distributing hosts among different standby groups.
<br /><hr />
<br />The standby protocol runs on top of UDP, and uses port number 1985. Packets are sent to multicast address 224.0.0.2 with TTL 1.
<br />
<br />Routers use their actual IP address as the source address for protocol packets, not the virtual IP address. This is necessary so that the HSRP routers can identify each other.
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>8</td><td>16</td><td>24</td><td>32</td></tr><tr><td>Version</td><td>Opcode</td><td>State</td><td>Hellotime</td></tr><tr><td>Holdtime</td><td>Priority</td><td>Group</td><td>Reserved</td></tr><tr><td colspan="4">Authentication Data</td></tr><tr><td colspan="4">Virtual IP Address</td></tr></tbody></table></div></div>
<br />
<br /><ul><li><b>Version</b><br /></li>
<li>The version of the HSRP messages. This document describes version 0.
<br /><br /></li>
<li><b>Opcode</b><br /></li>
<li>The Op Code describes the type of message contained in this packet.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>Opcode</td><td>Description</td></tr><tr><td>0</td><td>Hello. The router is running and is capable of becoming the active or standby router.</td></tr><tr><td>1</td><td>Coup. The router wishes to become the active router.</td></tr><tr><td>2</td><td>Resign. The router no longer wishes to be the active router.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>State</b><br /></li>
<li>Internally, each router in the standby group implements a state machine. The State field describes the current state of the router sending the message.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td>State</td><td>Description</td></tr><tr><td>0</td><td>Initial. This is the starting state and indicates that HSRP is not running. This state is entered via a configuration change or when an interface first comes up.</td></tr><tr><td>1</td><td>Learn. The router has not determined the virtual IP address, and not yet seen an authenticated Hello message from the active router. In this state the router is still waiting to hear from the active  router.</td></tr><tr><td>2</td><td>Listen. The router knows the virtual IP address, but is neither the active router nor the standby router. It listens for Hello messages from those routers.</td></tr><tr><td>4</td><td>Speak. The router sends periodic Hello messages and is actively participating in the election of the active and/or standby router. A router cannot enter Speak state unless it has the virtual IP address.</td></tr><tr><td>8</td><td>Standby. The router is a candidate to become the next active router and sends periodic Hello messages. Excluding transient conditions, there must be at most one router in the group in Standby state.</td></tr><tr><td>16</td><td>Active. The router is currently forwarding packets that are sent to the group's virtual MAC address. The router sends periodic Hello messages. Excluding transient conditions, there MUST be at most one router in Active state in the group.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Hellotime</b><br /></li>
<li>This field is only meaningful in Hello messages. It contains the approximate period between the Hello messages that the router sends. The time is given in seconds. If the Hellotime is not configured on a router, then it MAY be learned from the Hello message from the active router. The Hellotime should only be learned if no Hellotime is configured and the Hello message is authenticated. A router that sends a Hello message MUST insert the Hellotime that it is using in the Hellotime field in the Hello message.
<br /><br /></li>
<li><b>Holdtime</b><br /></li>
<li>This field is only meaningful in Hello messages. It contains the amount of time that the current Hello message should be considered valid. The time is given in seconds. If a router sends a Hello message, then receivers should consider that Hello message to be valid for one Holdtime. The Holdtime should be at least three times the value of the Hellotime and MUST be greater than the Hellotime. If the Holdtime is not configured on a router, then it MAY be learned from the Hello message from the active router. The Holdtime should only be learned if the Hello message is authenticated. A router that sends a Hello message must insert the Holdtime that it is using in the Holdtime field in the Hello message. A router which is in active state must not learn new values for the Hellotime and the Holdtime from other routers, although it may continue to use values which it learned from the previous active router. It may also use the Hellotime and Holdtime values learned through manual configuration. The active router must not use one configured time and one learned time.
<br /><br /></li>
<li><b>Priority </b><br /></li>
<li>This field is used to elect the active and standby routers. When comparing priorities of two different routers, the router with the numerically higher priority wins. In the case of routers with equal priority the router with the higher IP address wins.
<br /><br /></li>
<li><b>Group </b><br /></li>
<li>This field identifies the standby group. For Token Ring, values between 0 and 2 inclusive are valid. For other media values between 0 and 255 inclusive are valid.
<br /><br /></li>
<li><b>Authentication Data</b><br /></li>
<li>This field contains a clear text 8 character reused password. If no authentication data is configured, the RECOMMENDED default value is 0x63 0x69 0x73 0x63 0x6F 0x00 0x00 0x00.
<br /><br /></li>
<li><b>Virtual IP Address</b><br /></li>
<li>The virtual IP address used by this group. If the virtual IP address is not configured on a router, then it MAY be learned from the Hello message from the active router. An address SHOULD only be learned if no address was configured and the Hello message is authenticated.</li></ul>
<br /><hr />
<br /><b>Operational parameters</b>
<br />The following information must be known to each router in the standby group. The mechanisms used to determine this information are outside of the scope of this document.
<br />Standby group number
<br /><ul><li>Virtual MAC address<br /></li>
<li>Priority<br /></li>
<li>Authentication Data<br /></li>
<li>Hellotime<br /></li>
<li>Holdtime</li></ul>
<br />
<br /><ul><li>The following information must be known to at least one router in each standby group and may be known by any of the other routers in the group.
<br /><b>Virtual IP Address</b><br /><br /></li>

<li>The following information MAY be configured on any router:
<br /><b>Preemption capability</b>
<br />If a router has higher priority than the active router and preemption is configured, it MAY take over as the active router</li></ul>
<br /><hr />
<br /><b>States</b>
<br />Each router in the group participates in the protocol by implementing a simple state machine. This specification describes the externally visible behavior of this state machine. Implementations may vary their internal implementations within the functional description of the state machine.
<br />
<br />All routers begin in the Initial state. 
<br /><ul><li><b>Initial</b><br /></li>
<li>This is the starting state and indicates that HSRP is not running. This state is entered via a configuration change or when an interface first comes up.
<br /><br /></li>
<li><b>Learn</b><br /></li>
<li>The router has not determined the virtual IP address, and not yet seen an authenticated Hello message from the active router. In this state the router is still waiting to hear from the active router.
<br /><br /></li>
<li><b>Listen</b><br /></li>
<li>The router knows the virtual IP address, but is neither the active router nor the standby router. It listens for Hello messages from those routers.
<br /><br /></li>
<li><b>Speak</b><br /></li>
<li>The router sends periodic Hello messages and is actively participating in the election of the active and/or standby router. A router cannot enter Speak state unless it has the virtual IP address.
<br /><br /></li>
<li><b>Standby</b><br /></li>
<li>The router is a candidate to become the next active router and sends periodic Hello messages. Excluding transient conditions, there must be at most one router in the group in Standby state.
<br /><br /></li>
<li><b>Active</b><br /></li>
<li>The router is currently forwarding packets that are sent to the group's virtual MAC address. The router sends periodic Hello messages. Excluding transient conditions, there must be at most one router in Active state in the group.</li></ul>
<br />
<br /><b>Timers</b>
<br />Each router maintains three timers, an Active timer, a Standby timer, and a Hello timer.
<br />
<br />The Active timer is used to monitor the active router. The active timer is started anytime an authenticated Hello message is seen from the active router. It is set to expire in the Holdtime seen in the Hello message.
<br />
<br />The Standby timer is used to monitor the standby router The Standby timer is started anytime an authenticated Hello message is seen from the standby router. It is set to expire in the Holdtime seen in the Hello message.
<br />
<br />The Hello timer expires once per Hellotime period. If the router is in Speak, Standby, or Active states, it should generate a Hello message upon Hello timer expiry. The Hello timer must be jittered.
<br />
<br /><b>Events</b>
<br />These are the events in the HSRP finite state machine.
<br /><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td>a</td><td>HSRP is configured on an enabled interface.</td></tr><tr><td>b</td><td>HSRP is disabled on an interface or the interface is disabled. </td></tr><tr> <td>c</td><td>Active timer expiry. The Active timer was set to the Holdtime when the last Hello message was seen from the active router.</td></tr><tr><td>d</td><td>Standby timer expiry. The Standby timer was set to the Holdtime when the last Hello message was seen from the standby router.</td></tr><tr><td>e</td><td>Hello timer expiry. The periodic timer for sending Hello messages has expired.</td></tr><tr><td>f</td><td>Receipt of a Hello message of higher priority from a router in Speak state.</td></tr><tr><td>g</td><td>Receipt of a Hello message of higher priority from the active router.</td></tr><tr><td>h</td><td>Receipt of a Hello message of lower priority from the active router.</td></tr><tr><td>i</td><td>Receipt of a Resign message from the active router.</td></tr><tr><td>j</td><td>Receipt of a Coup message from a higher priority router.</td></tr><tr><td>k</td><td>Receipt of a Hello message of higher priority from the standby router.</td></tr><tr><td>l</td><td>Receipt of a Hello message of lower priority from the standby router.</td></tr></tbody></table></div></div>
<br />
<br /><b>Actions</b>
<br />This section specifies the actions to be taken as part of the state machine.
<br />
<br /><ul><li><b>Start Active Timer</b><br /></li>
<li>If this action occurred as the result of the receipt of a an authenticated Hello message from the active router, the Active timer is set to the Holdtime field in the Hello message. Otherwise the Active timer is set to the current Holdtime value in use by this router. The Active timer is then started.
<br /><br /></li>
<li><b>Start Standby Timer</b><br /></li>
<li>If this action occurred as the result of the receipt of an authenticated Hello message from the standby router, the Standby timer is set to the Holdtime field in the Hello message. Otherwise the Standby timer is set to the current hold time value in use by this router. The Standby timer is then started.
<br /><br /></li>
<li><b>Stop Active Timer</b><br /></li>
<li>The Active timer is stopped.
<br /><br /></li>
<li><b>Stop Standby Timer</b><br /></li>
<li>The Standby timer is stopped.
<br /><br /></li>
<li><b>Learn Parameters</b><br /></li>
<li>This action is taken when an authenticated message is received from the active router. If the virtual IP address for this group was not manually configured, the virtual IP address may be learned from the message. The router may learn Hellotime and Holdtime values from the message.
<br /><br /></li>
<li><b>Send Hello Message</b><br /></li>
<li>The router sends a Hello message with its current State, Hellotime and Holdtime.
<br /><br /></li>
<li><b>Send Coup Message</b><br /></li>
<li>The router sends a Coup message to inform the active router that there is a higher priority router available.
<br /><br /></li>
<li><b>Send Resign Message</b><br /></li>
<li>The router sends a Resign message to allow another router to become the active router.
<br /><br /></li>
<li><b>Send Gratuitous ARP Message</b><br /></li>
<li>The router broadcasts an ARP response packet advertising the group's virtual IP address and virtual MAC address. The packet is sent using the virtual MAC address as the source MAC address in the link layer header, as well as within the ARP packet.</li></ul>
<br />
<br /><b>State Transitions</b>
<br />This table describes the state transitions of the state machine. For each event and current state of the router, the router must perform the set of actions specified and transition to the designated state. If no action is specified, no action should be taken. If no state change is specified, no state change should be performed.
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
<td class="MapParent" aria-label="Parent layer protocols">UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>HSRP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>TTL</b><br />TTL (Time to Live) is a field in the Internet Protocol (IP) that specifies how many more hops a packet can travel before being discarded or returned.<br /><br /><b>Ethernet</b><br />A local-area network (LAN) architecture developed by Xerox Corporation in cooperation with DEC and Intel in 1976. Ethernet uses a bus or star topology and supports data transfer rates of 10 Mbps. The Ethernet specification served as the basis for the IEEE 802.3 standard, which specifies the physical and lower software layers. Ethernet uses the CSMA/CD access method to handle simultaneous demands. It is one of the most widely implemented LAN standards. 
<br />
<br />A newer version of Ethernet, called 100Base-T (or Fast Ethernet), supports data transfer rates of 100 Mbps. And the newest version, Gigabit Ethernet supports data rates of 1 gigabit (1,000 megabits) per second.<br /><br /><b>HSRP</b><br />HSRP (Hot Standby Routing Protocol) is a proprietary protocol from Cisco. HSRP is a routing protocol that provides backup to a router in the event of failure.<br /><br /><b>LAN</b><br />Local-area network (LAN) is a computer network that spans a relatively small area. Most LANs are confined to a single building or group of buildings. However, one LAN can be connected to other LANs over any distance via telephone lines and radio waves. A system of LANs connected in this way is called a wide-area network (WAN). 
<br />
<br />Most LANs connect workstations and personal computers. Each node (individual computer ) in a LAN has its own CPU with which it executes programs, but it also is able to access data and devices anywhere on the LAN. This means that many users can share expensive devices, such as laser printers, as well as data. Users can also use the LAN to communicate with each other, by sending e-mail or engaging in chat sessions.<br /><br /><b>MAC address</b><br />MAC address (Media access control address) is a 6-byte hexadecimal address that a manufacturer assigns to the Ethernet controller for a port. Higher-layer protocols use the MAC address at the MAC sublayer of the Data Link layer (Layer 2) to access the physical media. The MAC function determines the use of network capacity and the stations that are allowed to use the medium for transmission.<br /><br /><b>Monitor</b><br />Monitor is an application that receives RTCP packets sent by participants in an RTP session, in particular the reception reports, and estimates the current quality of service for distribution monitoring, fault diagnosis and long-term statistics. The monitor function is likely to be built into the application(s) participating in the session, but may also be a separate application that does not otherwise participate and does not send or receive the RTP data packets. These are called third party monitors.
<br /><br /><br /><b>Router</b><br />A device that forwards data packets along networks. A router is connected to at least two networks, commonly two LANs or WANs or a LAN and its ISP network. Routers are located at gateways, the places where two or more networks connect. 
<br />
<br />Routers use headers and forwarding tables to determine the best path for forwarding the packets, and they use protocols such as ICMP to communicate with each other and configure the best route between any two hosts.<br /><br /><b>VIP</b><br />A VIP (virtual IP address) is an IP address that is not connected to a specific computer or network interface card (NIC) on a computer. Incoming packets are sent to the VIP address, but all packets travel through real network interfaces.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2281.html">RFC 2281</a>] Cisco Hot Standby Router Protocol (HSRP).
                		  </div>
		  
</section>

