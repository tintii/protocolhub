---
id: protocol-vrrp
slug: vrrp
name: VRRP
expandedName: Virtual Router Redundancy Protocol
origin: historical
provenance:
  source: protocols/protocol_VRRP.htm
  sha256: ad1ab8195d76b86bd274ca15104c47aa98d7d07574b66903d0f3912cc2cf8d93
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Virtual Router Redundancy Protocol
layers:
  - Network Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Virtual Router Redundancy Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Network Layer
  - label: Type
    html: Network Layer election protocol
  - label: SNMP MIBs
    html: iso.org.dod.internet.mgmt.mib-2.vrrpMIB (1.3.6.1.2.1.68)
  - label: Multicast addresses
    html: 224.0.0.18
  - label: Related protocols
    html: 'IP,<br />IPv6,<br />DHCP'
  - label: Working groups
    html: 'Vrrp, Virtual Router Redundancy Protocol'
originalUpdate: '2005-11-15 15:54:48'
rfcs:
  - 2338
  - 2787
  - 3768
related:
  - protocol-ip
  - protocol-ipv6
  - protocol-dhcp
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

			VRRP specifies an election protocol to provide the virtual router function described earlier. All protocol messaging is performed using IP multicast datagrams, thus the protocol can operate over a variety of multi-access LAN technologies supporting IP multicast. Each VRRP virtual router has a single well-known MAC address allocated to it. This document currently only details the mapping to networks using the IEEE 802 48-bit MAC address. The virtual router MAC address is used as the source in all periodic VRRP messages sent by the Master router to enable bridge learning in an extended LAN.
<br />
<br />A virtual router is defined by its virtual router identifier (VRID) and a set of IP addresses. A VRRP router may associate a virtual router with its real addresses on an interface, and may also be configured with additional virtual router mappings and priority for virtual routers it is willing to backup. The mapping between VRID and addresses must be coordinated among all VRRP routers on a LAN. However, there is no restriction against reusing a VRID with a different address mapping on different LANs. The scope of each virtual router is restricted to a single LAN.
<br />
<br />To minimize network traffic, only the Master for each virtual router sends periodic VRRP Advertisement messages. A Backup router will not attempt to preempt the Master unless it has higher priority. This eliminates service disruption unless a more preferred path becomes available. It's also possible to administratively prohibit all preemption attempts. The only exception is that a VRRP router will always become Master of any virtual router associated with addresses it owns. If the Master becomes unavailable then the highest priority Backup will transition to Master after a short delay, providing a controlled transition of the virtual router responsibility with minimal service interruption.
<br />
<br />The VRRP protocol design provides rapid transition from Backup to Master to minimize service interruption, and incorporates optimizations that reduce protocol complexity while guaranteeing controlled Master transition for typical operational scenarios. The optimizations result in an election protocol with minimal runtime state requirements, minimal active protocol states, and a single message type and sender. The typical operational scenarios are defined to be two redundant routers and/or distinct path preferences among each router. A side effect when these assumptions are violated (i.e., more than two redundant paths all with equal preference) is that duplicate packets may be forwarded for a brief period during Master election. However, the typical scenario assumptions are likely to cover the vast majority of deployments, loss of the Master router is infrequent, and the expected duration in Master election convergence is quite small ( less than 1 second ). Thus the VRRP optimizations represent significant simplifications in the protocol design while incurring an insignificant probability of brief network degradation.
<br /><hr />
<br /><b>Packet Format</b>
<br />The purpose of the VRRP packet is to communicate to all VRRP routers the priority and the state of the Master router associated with the Virtual Router ID. VRRP packets are sent encapsulated in IP packets. They are sent to the IPv4 multicast address assigned to VRRP.
<br />
<br /><b>Header format</b>
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>4</p></td><td><p>8</p></td><td><p>16</p></td><td><p>24</p></td><td><p>32 bit</p></td></tr><tr><td><p>Version</p></td><td><p>Type</p></td><td><p>Virtual Rtr ID</p></td><td><p>Priority</p></td><td><p>Count IP Addrs</p></td></tr><tr><td colspan="2"><p>Auth Type</p></td><td><p>Advet Int</p></td><td colspan="2"><p>Checksum</p></td></tr><tr><td colspan="5"><p>IP Address (1)</p></td></tr><tr><td colspan="5"><p>IP Address (n)</p></td></tr><tr><td colspan="5"><p>Authentication Data (1)</p></td></tr><tr><td colspan="5"><p>Authentication Data (2)</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Version</b>
<br />The version field specifies the VRRP protocol version of this packet. This version is version 2.  <br /><br /></li>

<li><b>Type</b>
<br />The type field specifies the type of this VRRP packet. The only packet type defined in this version of the protocol is: 1 ADVERTISEMENT. A packet with an unknown type must be discarded. <br /><br /></li>

<li><b>Virtual Rtr ID</b>
<br />The Virtual Router Identifier (VRID) field identifies the virtual router this packet is reporting status for.<br /><br /></li>

<li><b>Priority</b>
<br />Priority specifies the sending VRRP router's priority for the virtual router. Higher values equal higher priority. The priority value for the VRRP router that owns the IP address(es) associated with the virtual router must be 255. VRRP routers backing up a virtual router must use priority values between 1 and 254. The default priority value for VRRP routers backing up a virtual router is 100. The priority value zero (0) has special meaning indicating that the current Master has stopped participating in VRRP. This is used to trigger Backup routers to quickly transition to Master without having to wait for the current Master to timeout.<br /><br /></li>

<li><b>Count IP Addresses</b>
<br />The number of IP addresses contained in this VRRP advertisement.<br /><br /></li>

<li><b>Auth Type</b>
<br />Identifies the authentication method being utilized.<br /><br /></li>

<li><b>Authentication type</b>
<br />Identifies the authentication method being utilized. Authentication type is unique on a per interface basis. The authentication type field is an 8 bit unsigned integer. A packet with unknown authentication type or that does not match the locally configured authentication method must be discarded.<br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>0</td><td>No Authentication</td></tr><tr><td>1</td><td>Simple Text Password</td></tr><tr><td>2</td><td>IP Authentication Header</td></tr></tbody></table></div></div><br /></li>
<li><b>Advertisement interval</b>
<br />Indicates the time interval in seconds between ADVERTISEMENTS. This field is used for troubleshooting misconfigured routers.<br /><br /></li>

<li><b>Checksum</b>
<br />16-bit one's complement of the one's complement sum of the entire VRRP message starting with the version field. For computing the checksum, the checksum field is cleared to zero.<br /><br /></li>

<li><b>IP Address(es)</b>
<br />One or more IP addresses that are associated with the virtual router. The number of addresses included is specified in the "Count IP Addrs" field. These fields are used for troubleshooting misconfigured routers.<br /><br /></li>

<li><b>Authentication Data</b>
<br />The authentication string is currently only utilized for simple text authentication, similar to the simple text authentication found in the Open Shortest Path First routing protocol (OSPF). It is up to 8 characters of plain text.</li></ul>
<br /><hr />
<br /><b>Operational Issues</b>
<br /><ul><li><b>ICMP Redirects</b>
<br />ICMP Redirects may be used normally when VRRP is running between a group of routers. This allows VRRP to be used in environments where the topology is not symmetric.
<br />
<br />The IP source address of an ICMP redirect should be the address the end host used when making its next hop routing decision. If a VRRP router is acting as Master for virtual router(s) containing addresses it does not own, then it must determine which virtual router the packet was sent to when selecting the redirect source address. One method to deduce the virtual router used is to examine the destination MAC address in the packet that triggered the redirect.
<br />
<br />It may be useful to disable Redirects for specific cases where VRRP is being used to load share traffic between a number of routers in a symmetric topology.<br /><br /></li>

<li><b>Host ARP Requests</b>
<br />When a host sends an ARP request for one of the virtual router IP addresses, the Master virtual router must respond to the ARP request with the virtual MAC address for the virtual router. The Master virtual router must not respond with its physical MAC address. This allows the client to always use the same MAC address regardless of the current Master router.<br /><br /></li>

<li>When a VRRP router restarts or boots, it should not send any ARP messages with its physical MAC address for the IP address it owns, it should only send ARP messages that include Virtual MAC addresses. This may entail:
<br /></li><li><ul><li>When configuring an interface, VRRP routers should broadcast a gratuitous ARP request containing the virtual router MAC address for each IP address on that interface.<br /><br /></li>

<li>At system boot, when initializing interfaces for VRRP operation; delay gratuitous ARP requests and ARP responses until both the IP address and the virtual router MAC address are configured.</li></ul><br /><br /></li>

<li><b>Proxy ARP</b>
<br />If Proxy ARP is to be used on a VRRP router, then the VRRP router must advertise the Virtual Router MAC address in the Proxy ARP message. Doing otherwise could cause hosts to learn the real MAC address of the VRRP router.<br /><br /></li>

<li><b>Potential Forwarding Loop</b>
<br />A VRRP router should not forward packets addressed to the IP Address(es) it becomes Master for if it is not the owner. Forwarding these packets would result in unnecessary traffic. Also in the case of LANs that receive packets they transmit (e.g., token ring) this can result in a forwarding loop that is only terminated when the IP TTL expires.</li></ul>
<br />
<br /><b>Operation over FDDI, Token Ring, and ATM LANE</b>
<br /><li><b>Operation over FDDI</b>
<br />FDDI interfaces remove from the FDDI ring frames that have a source MAC address matching the device's hardware address. Under some conditions, such as router isolations, ring failures, protocol transitions, etc., VRRP may cause there to be more than one Master router. If a Master router installs the virtual router MAC address as the hardware address on a FDDI device, then other Masters' ADVERTISEMENTS will be removed from the ring during the Master convergence, and convergence will fail.
<br />
<br />To avoid this an implementation SHOULD configure the virtual router MAC address by adding a unicast MAC filter in the FDDI device, rather than changing its hardware MAC address. This will prevent a Master router from removing any ADVERTISEMENTS it did not originate.</li>
<br />
<br /><li><b>Operation over Token Ring</b>
<br />Token ring has several characteristics that make running VRRP difficult. These include:</li>
<br /><ul><li>In order to switch to a new master located on a different bridge token ring segment from the previous master when using source route bridges, a mechanism is required to update cached source route information.<br /><br /></li>

<li>No general multicast mechanism supported across old and new token ring adapter implementations. While many newer token ring adapters support group addresses, token ring functional address support is the only generally available multicast mechanism. Due to the limited number of token ring functional addresses these may collide with other usage of the same token ring functional addresses.</li></ul>
<br />
<br /><li><b>Operation over ATM LANE</b>
<br />Operation of VRRP over ATM LANE on routers with ATM LANE interfaces and/or routers behind proxy LEC's are beyond the scope of this document.</li>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: Configuration 1</b>

The following figure shows a simple network with two VRRP routers implementing one 
virtual router. Note that this example is provided to help understand the protocol, 
but is not expected to occur in actual practice.

                  +-----------+      +-----------+
                  |   Rtr1    |      |   Rtr2    |
                  |(MR VRID=1)|      |(BR VRID=1)|
                  |           |      |           |
          VRID=1  +-----------+      +-----------+
          IP A ----------&gt;*            *&lt;--------- IP B
                          |            |
                          |            |
        ------------------+------------+-----+--------+--------+--------+--
                                             ^        ^        ^        ^
                                             |        |        |        |
                                           (IP A)   (IP A)   (IP A)   (IP A)
                                             |        |        |        |
                                          +--+--+  +--+--+  +--+--+  +--+--+
                                          |  H1 |  |  H2 |  |  H3 |  |  H4 |
                                          +-----+  +-----+  +--+--+  +--+--+
           Legend:
                    ---+---+---+--  =  Ethernet, Token Ring, or FDDI
                                 H  =  Host computer
                                MR  =  Master Router
                                BR  =  Backup Router
                                 *  =  IP Address
                              (IP)  =  default router for hosts

Eliminating all mention of VRRP (VRID=1) from the figure above leaves it as a typical 
IP deployment. Each router is permanently assigned an IP address on the LAN interface 
(Rtr1 is assigned IP A and Rtr2 is assigned IP B), and each host installs a static 
default route through one of the routers (in this example they all use Rtr1's IP A).

Moving to the VRRP environment, each router has the exact same permanently assigned 
IP address. Rtr1 is said to be the IP address owner of IP A, and Rtr2 is the IP address 
owner of IP B. A virtual router is then defined by associating a unique identifier (the 
virtual router ID) with the address owned by a router. Finally, the VRRP protocol 
manages virtual router fail over to a backup router.

The example above shows a virtual router configured to cover the IP address owned by 
Rtr1 (VRID=1,IP_Address=A). When VRRP is enabled on Rtr1 for VRID=1 it will assert 
itself as Master, with priority=255, since it is the IP address owner for the virtual 
router IP address. When VRRP is enabled on Rtr2 for VRID=1 it will transition to 
Backup, with priority=100, since it is not the IP address owner. If Rtr1 should fail 
then the VRRP protocol will transition Rtr2 to Master, temporarily taking over 
forwarding responsibility for IP A to provide uninterrupted service to the hosts.

Note that in this example IP B is not backed up, it is only used by Rtr2 as its 
interface address. In order to backup IP B, a second virtual router must be configured. 
This is shown in the next section.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Configuration 2</b>

The following figure shows a configuration with two virtual routers with the hosts 
spitting their traffic between them. This example is expected to be very common 
in actual practice.

                      +-----------+      +-----------+
                  |   Rtr1    |      |   Rtr2    |
                  |(MR VRID=1)|      |(BR VRID=1)|
                  |(BR VRID=2)|      |(MR VRID=2)|
          VRID=1  +-----------+      +-----------+  VRID=2
          IP A ----------&gt;*            *&lt;---------- IP B
                          |            |
                          |            |
        ------------------+------------+-----+--------+--------+--------+--
                                             ^        ^        ^        ^
                                             |        |        |        |
                                           (IP A)   (IP A)   (IP B)   (IP B)
                                             |        |        |        |
                                          +--+--+  +--+--+  +--+--+  +--+--+
                                          |  H1 |  |  H2 |  |  H3 |  |  H4 |
                                          +-----+  +-----+  +--+--+  +--+--+
           Legend:
                    ---+---+---+--  =  Ethernet, Token Ring, or FDDI
                                 H  =  Host computer
                                MR  =  Master Router
                                BR  =  Backup Router
                                 *  =  IP Address
                              (IP)  =  default router for hosts

In the example above, half of the hosts have configured a static route through Rtr1's 
IP A and half are using Rtr2's IP B. The configuration of virtual router VRID=1 is 
exactly the same as in the first example (see section 4.1), and a second virtual router 
has been added to cover the IP address owned by Rtr2 (VRID=2, IP_Address=B). In 
this case Rtr2 will assert itself as Master for VRID=2 while Rtr1 will act as a backup. 
This scenario demonstrates a deployment providing load splitting when both routers 
are available while providing full redundancy for robustness.</pre>
<br />	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">IP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>VRRP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>ARP</b><br />Address Resolution Protocol (ARP) is a network layer protocol used to convert an IP address into a physical address (called a DLC address), such as an Ethernet address. A host wishing to obtain a physical address broadcasts an ARP request onto the TCP/IP network. The host on the network that has the IP address in the request then replies with its physical hardware address.<br /><br /><b>ATM LANE</b><br />ATM LANE is an element of the multiple protocol over ATM (MPOA) architecture that is being defined by the ATM Forum. This work is addressing encapsulation of multiple protocols over ATM, automatic address resolution, and the routing issues associated with minimizing multiple router hops in ATM networks.<br /><br /><b>Address</b><br />A location of data, usually in main memory or on a disk. You can think of computer memory as an array of storage boxes, each of which is one byte in length. Each box has an address (a unique number) assigned to it. By specifying a memory address, programmers can access a particular byte of data. Disks are divided into tracks and sectors, each of which has a unique address. Usually, you do not need to worry about addresses unless you are a programmer. 
<br />
<br />A name or token that identifies a network component. In local area networks (LANs), for example, every node has a unique address. On the Internet, every file has a unique address called a URL.<br /><br /><b>Datagram</b><br />A datagram is a self-contained, independent entity of data carrying sufficient information to be routed from the source to the destination computer without reliance on earlier exchanges between this source and destination computer and the transporting network.
<br /> 	
<br />The term has been generally replaced by the term packet. Datagrams or packets are the message units that the Internet Protocol deals with and that the Internet transports. A datagram or packet needs to be self-contained without reliance on earlier exchanges because there is no connection of fixed duration between the two communicating points as there is, for example, in most voice telephone conversations.<br /><br /><b>FDDI</b><br />Fiber Distributed Data Interface, a set of ANSI protocols for sending digital data over fiber optic cable. FDDI networks are token-passing networks, and support data rates of up to 100 Mbps (100 million bits) per second. FDDI networks are typically used as backbones for wide-area networks.<br /><br /><b>ICMP</b><br />Internet Control Message Protocol, an extension to the Internet Protocol (IP). ICMP supports packets containing error, control, and informational messages. The PING command, for example, uses ICMP to test an Internet connection.<br /><br /><b>IEEE 802</b><br />IEEE 802 is a set of network standards developed by the IEEE. They include: 
<br />*IEEE 802.1: Standards related to network management. 
<br />*IEEE 802.2: General standard for the data link layer in the OSI Reference Model.
<br />*IEEE 802.3: Defines the MAC layer for bus networks that use CSMA/CD.
<br />*IEEE 802.4: Defines the MAC layer for bus networks that use a token-passing mechanism (token bus networks). 
<br />*IEEE 802.5: Defines the MAC layer for token-ring networks. 
<br />*IEEE 802.6: Standard for Metropolitan Area Networks (MANs).<br /><br /><b>IP</b><br />The IP (Internet Protocol) is a protocol which uses datagrams to communicate over a packet-switched network. IP specifies the format of packets, also called datagrams, and the addressing scheme. Most networks combine IP with a higher-level protocol called Transmission Control Protocol (TCP), which establishes a virtual connection between a destination and a source. 
<br />
<br />IP by itself is something like the postal system. It allows you to address a package and drop it in the system, but there's no direct link between you and the recipient. TCP/IP, on the other hand, establishes a connection between two hosts so that they can send messages back and forth for a period of time. 
<br />
<br />The current version of IP is IPv4. A new version, called IPv6 or IPng, is under development.<br /><br /><b>Interface</b><br />Interface is the connection between a router and one of its attached networks. An interface has state information associated with it, which is obtained from the underlying lower level protocols and the routing protocol itself. An interface to a network has associated with it a single IP address and mask (unless the network is an unnumbered point-to-point network). An interface is sometimes also referred to as a link.<br /><br /><b>LAN</b><br />Local-area network (LAN) is a computer network that spans a relatively small area. Most LANs are confined to a single building or group of buildings. However, one LAN can be connected to other LANs over any distance via telephone lines and radio waves. A system of LANs connected in this way is called a wide-area network (WAN). 
<br />
<br />Most LANs connect workstations and personal computers. Each node (individual computer ) in a LAN has its own CPU with which it executes programs, but it also is able to access data and devices anywhere on the LAN. This means that many users can share expensive devices, such as laser printers, as well as data. Users can also use the LAN to communicate with each other, by sending e-mail or engaging in chat sessions.<br /><br /><b>MAC address</b><br />MAC address (Media access control address) is a 6-byte hexadecimal address that a manufacturer assigns to the Ethernet controller for a port. Higher-layer protocols use the MAC address at the MAC sublayer of the Data Link layer (Layer 2) to access the physical media. The MAC function determines the use of network capacity and the stations that are allowed to use the medium for transmission.<br /><br /><b>Multicast</b><br />Multicast is designed to transmit a single message to a select group of recipients. A simple example of multicasting is sending an e-mail message to a mailing list. Teleconferencing and videoconferencing also use multicasting, but require more robust protocols and networks.<br /><br /><b>Router</b><br />A device that forwards data packets along networks. A router is connected to at least two networks, commonly two LANs or WANs or a LAN and its ISP network. Routers are located at gateways, the places where two or more networks connect. 
<br />
<br />Routers use headers and forwarding tables to determine the best path for forwarding the packets, and they use protocols such as ICMP to communicate with each other and configure the best route between any two hosts.<br /><br /><b>TTL</b><br />TTL (Time to Live) is a field in the Internet Protocol (IP) that specifies how many more hops a packet can travel before being discarded or returned.<br /><br /><b>Token Ring</b><br />Token Ring is a local area network (LAN) access method developed by IBM. Conforming to the IEEE 802.5 standard, Token Ring uses a token ring access method and connects up to 255 nodes in a star topology at 4, 16 or 100 Mbps. All stations connect to a central wiring hub called the "Multistation Access Unit" (MAU) using twisted wire cable.<br /><br /><b>VRID</b><br />The Virtual Router Identifier (VRID) field identifies the virtual router this packet is reporting status for. Configurable item in the range 1-255 (decimal).<br /><br /><b>VRRP</b><br />The term virtual is popular among computer scientists and is used in a wide variety of situations. In general, it distinguishes something that is merely conceptual from something that has physical reality.<br /><br /><b>VRRP Router</b><br />VRRP Router is a router running the Virtual Router Redundancy Protocol. It may participate in one or more virtual routers.<br /><br /><b>Virtual Router</b><br />Virtual Router is an abstract object managed by VRRP that acts as a default router for hosts on a shared LAN. It consists of a Virtual Router Identifier and a set of associated IP address(es) across a common LAN. A VRRP Router may backup one or more virtual routers.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2787.html">RFC 2787</a>] Definitions of Managed Objects for the Virtual Router Redundancy Protocol.
                Defines SNMP MIB iso.org.dod.internet.mgmt.mib-2.vrrpMIB (1.3.6.1.2.1.68). 
[<a href="https://www.rfc-editor.org/rfc/rfc3768.html">RFC 3768</a>] Virtual Router Redundancy Protocol (VRRP).
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2338.html">RFC 2338</a>. 
                <hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc2338.html">RFC 2338</a>] Virtual Router Redundancy Protocol.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3768.html">RFC 3768</a>.
                		  </div>
		  
</section>

