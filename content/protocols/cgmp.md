---
id: protocol-cgmp
slug: cgmp
name: CGMP
expandedName: Cisco Group Management Protocol
origin: historical
provenance:
  source: protocols/protocol_CGMP.htm
  sha256: 9caac2f4bc50ce036e436c8565b7d7533673dd880ac29539f026a1f892b23824
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Cisco Group Management Protocol
layers:
  - Data Link Layer
suites:
  - Cisco
summary:
  - label: Protocol
    html: Cisco Group Management Protocol
  - label: Protocol suite
    html: Cisco
  - label: Layer
    html: Data Link Layer
  - label: Related protocols
    html: 'IPv4,<br />IGMP,<br />PIM-SM,<br />RGMP'
originalUpdate: '2006-01-13 09:19:07'
rfcs:
  - 1112
related:
  - protocol-igmp
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

			CGMP is related to the Catalyst 5000 platform only. It is a short-term solution since the hardware cannot tell the difference between IP multicast data packets and IGMP Report messages which are both MAC level addressed to the same group address. Therefore, the Catalyst 1200 IGMP functionality cannot be implemented in the Catalyst 5000.
<br />
<br />Support is required in both the IOS based router and the Catalyst 5000 switch. This scheme may be applicable to other switch families, to be determined later.
<br />
<br /><b>Goals</b>
<br /><ul><li>Lebgacy IP multicast hosts (that run IGMP v1 or v2 only) can send and receive IP multicast packets through a switched network.<br /></li>
<li>Reduce broadcast flooding over the switched network for IP multicast traffic.<br /></li>
<li>Interoperates with the Catalyst 1200 switch.<br /></li>
<li>Support multiple hosts on a single LAN connected to a switch.<br /></li>
<li>Deals with host (that are attached to the switched network) moves.<br /></li>
<li>Requires no host changes.</li></ul>
<br />
<br />CGMP provides the following services: 
<br /><ul><li>Allows IP multicast packets to be switched only to those ports that have IP multicast clients.<br /></li>
<li>Saves network bandwidth on user segments by not propagating unnecessary IP multicast traffic.<br /></li>
<li>Does not require changes to the end host systems.<br /></li>
<li>Does not incur the overhead of creating a separate VLAN for each multicast group in the switched network.</li></ul>
<br /><hr />
<br /><b>Message Format</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>4</p></td><td><p>8</p></td><td colspan="2"><p>24</p></td><td><p>32</p></td></tr><tr><td><p>Ver</p></td><td><p>Type</p></td><td colspan="2"><p>Reserved</p></td><td><p>Count</p></td></tr><tr><td colspan="5"><p>GDA</p></td></tr><tr><td colspan="3"><p>GDA</p></td><td colspan="2"><p>USA</p></td></tr><tr><td colspan="5"><p>USA</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Ver </b><br /></li>
<li>4 bits - Version field is always set to 1. Any other version numbers are ignored at this time.
<br /><br /></li>
<li><b>Type</b><br /></li>
<li>4 bits 
<br /></li><li>0 = Join
<br /></li><li>1 = Leave
<br /><br /></li>
<li><b>Reserved</b><br /></li>
<li>2 bytes. Reserved must be set to 0 and ignored on receipt.
<br /><br /></li>
<li><b>Count</b><br /></li>
<li>1 byte. The number of GDA/USA pairs in the message.
<br /><br /></li>
<li><b>GDA (Group Destination Address)</b><br /></li>
<li>6 bytes. IEEE MAC level group address in canonical format. For IP, it is the </li><li><a href="https://www.rfc-editor.org/rfc/rfc1112.html">RFC 1112</a></li><li> converted address from a class D IP multicast address. This could be a unicast address, but this is under further study. 0000.0000.0000 is the all-groups address and is used when routers send CGMP Join/Leave messages so switches can populate router ports.
<br /><br /></li>
<li><b>USA (Unicast Source Address)</b><br /></li>
<li>6 bytes IEEE MAC level unicast address in canonical format. This must not be a group address. This is the address of the host which originated the IGMP Report which this CGMP message is being generated for.
<br /><br /></li>
<li>A switch will lookup this address from its bridge forwarding table. It obtains the port associated with the address. This is the port the host is either directly connected to or is reachable via another switch. For Join messages, this port is added to the the group address entry in the bridge forwarding table. For Leave, messages, this port is deleted from the entry, if and only if it is not a router port. 
<br /><br /></li>
<li>If USA = 0000.0000.0000, then all ports are deleted for the specified group address.</li></ul>
<br /><hr />
<br /><b>Encapsulation</b>
<br />CGMP messages will be encapsulated within SNAP formatted frames, using cisco's ORG ID of 0x00000c with ethertype value of 0x2001. The following header is prepended to the above CGMP message to construct the entire frame.
<br />
<br />MAC header
<br />802.2 header: aa aa 03
<br />SNAP header:  00 00 0c 20 01
<br />CGMP header
<br />
<br />The source MAC address will be the router's MAC address for the interface the CGMP packet is sent on. The destination MAC address is a Cisco specific link layer multicast address 0100.0cdd.dddd.
<br />
<br /><b>Forwarding Rules</b>
<br />Since the switched network will be in a spanning tree loop-free topology, IGMP Reports will be forwarded along a specific path to reach a router. In turn, the CGMP packets will flow on the reverse path as the IGMP Reports. This happens since both messages are sent as multicasts (even though they are different MAC level multicast addresses) which are all forwarded along the same spanning tree. Therefore, no loop avoidance or routing of CGMP messages needs to be explicitly supported.
<br /><hr />
<br /><b>Switch Cache Population Rules</b>
<br />If a switch receives an IGMP Report which it has no bridge forwarding table for the MAC level destination group address, it will not forward the packet in hardware. The NMP will create an entry and populate the outgoing port list with the ports in the router port table (if any exists). Note this is not the case for IGMP Queries which are sent on all non-blocking ports (except the port the message was received on).
<br />
<br />A switch needs to forward multicast data packets from "switched network sources" towards routers. The router ports are determined when a router sends a CGMP Join with GDA equal to 0000.0000.0000 and an USA equal to its own MAC address on the interface where the switched network resides. This avoids the need for the Catalyst 5000 to listen for IGMP or PIM Queries since it has limited resources for MAC level address recognition. 
<br />
<br />There is an issue when there are multicast sources only in the switched network (i.e. no group members). Since the Catalyst 5000 cannot populate the bridge forwarding table at packet forwarding time, the router will send CGMP Joins with GDA equal to the group address the source sent to with a USA of the router's MAC address. The IGMP querier router is the only one that does this as long as it detects there are no group members on the LAN (if there were group members CGMP Joins would be sent with a USA equal to the member's MAC address).
<br />
<br />If a switch receives a multicast data packet or an IGMP Report which it has a bridge forwarding table entry for the MAC level destination group address, it simply forwards it (in hardware) according to the ports that exist in the outgoing port list. This design is based on the fact that the NMP cannot receive Reports after the bridge forwarding table is populated because the hardware is doing the forwarding and doesn't do special checks for IGMP Reports.
<br />
<br />If the switch receives a CGMP Join message, it looks up the USA address in the bridge forwarding table and adds the port corresponding to the host to the outgoing port list for the group address entry in the bridge forwarding table. If the USA address does not exist, do nothing. 
<br />
<br />If the GDA is 0000.0000.0000, add the port the USA address resides on to the switches router port table. In addition, the port must be added to all existing group-based entries. If the USA address does not exist, add the port the CGMP Join was received on to the router port table. This handles the case when a router has not send any packets so the switch has not learned where it is.
<br />
<br />Routers will send CGMP Join messages periodically for their own MAC address to keep the router port table state alive in switches.
<br />
<br />If a switch receives an CGMP Join message and there is no corresponding bridge forwarding table entry for the group address, it creates one and follows the rules in bullet 4. When it creates an entry, it must add all router ports to the entry in addition to the port that the USA address resides on.
<br /><hr />
<br /><b>Interoperability with non-Cisco switches</b>
<br />Non-CGMP capable switches will merely forward IP multicast packets to CGMP capable switches. The protocol can run over non-Cisco switches at the expense of indefinite flooding for all groups.
<br />
<br />For the Catalyst 1200, a further optimization is performed since it can process IGMP Reports. However, the Catalyst 1200 must distinguish a CGMP message from a CDP message (since both are addressed to the CDP multicast address). CDP messages must be processed internally, not forwarded, and CGMP messages must be flooded like broadcast packets.
<br />
<br /><b>Interoperability with non-Cisco routers:</b>
<br />Since routers expect packets from sources on the switched network, they deliver them by discovering router ports. Since this is done with CGMP, non-Cisco routers will not send CGMP packets and won't get discovered. Therefore, when a Cisco router interoperates with a non-Cisco router doing IGMP or any multicast routing protocol, it will send CGMP Joins/Leaves for the MAC address associated with non-Cisco router. We call this function CGMP Proxy.
<br />
<br />The ciscoes will be configured on a per interface basis if they should perform CGMP Proxy. If more than one router is configured to do so, only one will send the Proxy Joins/Leaves.
<br />
<br />The IGMP querier will be the CGMP Proxy sender. The network administrator must force a Cisco to be the IGMP querier by assigning its IP address appropriately.
<br />
<br />A CGMP Proxy Join/Leave contains a GDA of 0000.0000.0000 and a USA equal to the MAC address of the non-Cisco/CGMP router.
<br /><hr />
<br /><b>Joining a Multicast Group</b>
<br />When a particular host wants to join an IP multicast group, it sends an IGMP join message specifying its MAC address and which IP multicast group it wants to join. The CGMP-capable router then builds a CGMP join message and multicasts the join message to the well-known address to which the Catalyst 3000 series switches listen. Upon receipt of the join message, each Catalyst 3000 series switch searches a table to determine if it contains the MAC address of the host asking to join the multicast group. If a switch finds the host's MAC address in the table associating the MAC address with a port, the switch creates a multicast forwarding entry in the forwarding table. The host associated with that port will now receive multicast traffic for that multicast group. In this way, the table automatically learns the MAC addresses and port numbers of the IP multicast hosts. 
<br />
<br /><b>Leaving a Multicast Group</b>
<br />The CGMP-capable router sends periodic multicast-group queries. If a host wants to remain in a multicast group, it responds to the query from the router. In this case, the router does nothing. If a host does not want to remain in the multicast group, it does not respond to the router query. If after a number of queries, the router receives no reports from any host in a multicast group, the router sends a CGMP command to the Catalyst 3000 series switch, telling it to remove the multicast group from its forwarding tables.
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
<td class="MapParent" aria-label="Parent layer protocols">Ethernet SNAP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>CGMP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>CDP</b><br />The Cisco Discovery Protocol (CDP) is a media- and network protocol independent layer 2 protocol that is used to discover information about neighboring network devices.<br /><br /><b>IGMP</b><br />Internet Group Management Protocol is used to establish host memberships in particular multicast groups on a single network. The mechanisms of the protocol allow a host to inform its local router, using Host Membership Reports, that it wants to receive messages addressed to a specific multicast group.<br /><br /><b>LAN</b><br />Local-area network (LAN) is a computer network that spans a relatively small area. Most LANs are confined to a single building or group of buildings. However, one LAN can be connected to other LANs over any distance via telephone lines and radio waves. A system of LANs connected in this way is called a wide-area network (WAN). 
<br />
<br />Most LANs connect workstations and personal computers. Each node (individual computer ) in a LAN has its own CPU with which it executes programs, but it also is able to access data and devices anywhere on the LAN. This means that many users can share expensive devices, such as laser printers, as well as data. Users can also use the LAN to communicate with each other, by sending e-mail or engaging in chat sessions.<br /><br /><b>MAC</b><br />MAC (Medium Access Control) is a hardware address that uniquely identifies each node of a network. In IEEE 802 networks, the Data Link Control (DLC) layer of the OSI Reference Model is divided into two sublayers: the Logical Link Control (LLC) layer and the Media Access Control (MAC) layer. The MAC layer interfaces directly with the network medium. Consequently, each different type of network medium requires a different MAC layer. 
<br />
<br />On networks that do not conform to the IEEE 802 standards but do conform to the OSI Reference Model, the node address is called the Data Link Control (DLC) address.<br /><br /><b>Multicast</b><br />Multicast is designed to transmit a single message to a select group of recipients. A simple example of multicasting is sending an e-mail message to a mailing list. Teleconferencing and videoconferencing also use multicasting, but require more robust protocols and networks.<br /><br /><b>PIM</b><br />PIM (Protocol Independent Multicast) routing protocol  runs over an existing unicast infrastructure. There are two variations of PIM: 
<br />*PIM-SM -- Short for PIM-Sparse Mode, which is used when recipients are scattered over a large area. 
<br />*PIM-DM -- Short for PIM-Dense Mode, which is used when the targeted recipients are in a concentrated area.<br /><br /><b>SNAP</b><br />SubNetwork Access Protocol (SNAP) is used for encapsulating IP datagrams and ARP requests and replies on IEEE 802 networks. IP datagrams are sent on IEEE 802 networks encapsulated within the 802.2 LLC and SNAP data link layers and the 802.3, 802.4 or 802.5 physical network layers. The SNAP header follows the LLC header and contains an organization code indicating that the following 16 bits specify the EtherType code.<br /><br />			</div>
		  
</section>

