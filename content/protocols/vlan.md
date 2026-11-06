---
id: protocol-vlan
slug: vlan
name: VLAN
expandedName: 802.1Q VLAN
origin: historical
provenance:
  source: protocols/protocol_VLAN.htm
  sha256: 3df9c6ae4d9190e646e931dc62d50a50089a6d597596ed06d1c4a99f9f2b0bfe
  provider: 'Colasoft Co., Ltd.'
aliases:
  - 802.1Q VLAN
layers:
  - Data Link Layer
suites:
  - Cisco
summary:
  - label: Protocol
    html: 802.1Q VLAN
  - label: Protocol suite
    html: Cisco
  - label: Layer
    html: Data Link Layer
  - label: Related protocols
    html: 'IEEE 802.3,<br />802.2,<br />802.1D,<br />802.1p'
originalUpdate: '2005-12-05 13:05:38'
rfcs: []
related:
  - protocol-ieee-802-3
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

			A VLAN is a logical group of LAN segments, independent of physical location, with a common set of requirements. VLAN tagged frames carry an explicit identification of the VLAN to which it belongs. The value of the VID in the Tag header signifies the particular VLAN it belongs to. This additional tag field appears in the Ethernet and SNAP protocols.
<br />
<br />While clients and servers may be located anywhere on a network, they are grouped together by VLAN technology, and broadcasts are sent to devices within the VLAN. 
<br />
<br />VLANs configured bye using Media Access Control addresses can recognize when a station has been moved to another port on a switch. VLAN management software can then automatically reconfigure that station into its appropriate VLAN without the need to change the station's MAC or IP address.
<br />
<br />The 802.1Q specification establishes a standard method for inserting VLAN membership information into Ethernet frames. The ability to move endstations to different broadcast domains by setting membership profiles for each port on centrally managed switches is one of the main advantages of 802.1Q VLANs.
<br /><hr />
<br /><b>Protocol Structure</b>
<br />VLAN: Virtual Local Area Network and the IEEE 802.1QIEEE 802.1Q Tagged Frame for Ethernet:
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>7</td><td>1</td><td>6</td><td>6</td><td>2</td><td>2</td><td>2</td><td>42-1496</td><td>4 bytes</td></tr><tr><td>Preamble</td><td>SFD</td><td>DA</td><td>SA</td><td>TPID</td><td>TCI</td><td>Type Length</td><td>Data</td><td>CRC</td></tr></tbody></table></div></div>
<br />
<br /><ul><li><b>Preamble (PRE)</b>
<br />The PRE is an alternating pattern of ones and zeros that tells receiving stations that a frame is coming, and that provides a means to synchronize the frame-reception portions of receiving physical layers with the incoming bit stream. <br /><br /></li>

<li><b>Start-of-frame delimiter (SFD)</b>
<br />The SOF is an alternating pattern of ones and zeros, ending with two consecutive 1-bits indicating that the next bit is the left-most bit in the left-most byte of the destination address. <br /><br /></li>

<li><b>Destination address (DA)</b>
<br />The DA field identifies which station(s) should receive the frame. <br /><br /></li>

<li><b>Source addresses (SA)</b>
<br />The SA field identifies the sending station. <br /><br /></li>

<li><b>TPID</b>
<br />TPID defined value of 8100 in hex. When a frame has the EtherType equal to 8100, this frame carries the tag IEEE 802.1Q / 802.1P. <br /><br /></li>

<li><b>TCI</b>
<br />Tag Control Information field including user priority, Canonical format indicator and VLAN ID.<br /><br /></li>

<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>3</p></td><td><p>4</p></td><td><p>8 bit</p></td></tr><tr><td><p>User priority</p></td><td><p>CFI</p></td><td><p>VID</p></td></tr><tr><td colspan="3"><p>VID</p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b>User priority</b>
<br />3-bit binary number representing 8 priority levels, 0-7.<br /><br /></li>

<li><b>CFI</b>
<br />Canonical Format Indicator. When set, the E-RIF field is present and the NCFI bit determines whether MAC address information carried by the frame is in canonical or non-canonical format. When reset, indicates that the E-RIF field is not present and that all MAC information carried by the frame is in canonical format.<br /><br /></li>

<li><b>VID</b>
<br />VLAN Identifier. Uniquely identifies the VLAN to which the frame belongs.<br /><br /></li>

<li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td>0</td><td>Null VLAN ID. Indicates that the tag header contains only user priority information, no VLAN ID.</td></tr><tr><td>1</td><td>Default PVID value used for classifying frames on ingress through a bridge port.</td></tr><tr><td>FFF</td><td>Reserved for implementation use.</td></tr></tbody></table></div></div></li></ul><br /><br /></li>

<li><b>Length/Type</b>
<br />This field indicates either the number of MAC-client data bytes that are contained in the data field of the frame, or the frame type ID if the frame is assembled using an optional format. <br /><br /></li>

<li><b>Data</b>
<br />Data is a sequence of nbytes (42=&lt; n =&lt;1496) of any value. The total frame minimum is 64bytes. <br /><br /></li>

<li><b>Frame check sequence (FCS)</b>
<br />This sequence contains a 32-bit cyclic redundancy check (CRC) value, which is created by the sending MAC and is recalculated by the receiving MAC to check for damaged frames. </li></ul>
<br />
<br /><b>VLAN types</b>
<br />There are the following types of Virtual LANs: 
<br /><ul><li>Port-Based VLAN: each physical switch port is configured with an access list specifying membership in a set of VLANs. <br /></li>
<li>MAC-based VLAN: a switch is configured with an access list mapping individual MAC addresses to VLAN membership. <br /></li>
<li>Protocol-based VLAN: a switch is configured with a list of mapping layer 3 protocol types to VLAN membership - thereby filtering IP traffic from nearby end-stations using a particular protocol such as IPX. <br /></li>
<li>ATM VLAN - using LAN Emulation (LANE) protocol to map Ethernet packets into ATM cells and deliver them to their destination by converting an Ethernet MAC address into an ATM address.</li></ul>
<br /><hr />
<br />Most enterprises have moved toward the switched network paradigm, in which computers are connected to dedicated ports on Ethernet switches, Gigabit Ethernet switches, ATM switches, or other types of switches. Switching devices support network designs in which the entire network is one big flat network as opposed to many subnetworks interconnected by routers. In a flat network, all workstations are in the same broadcast domain. Any computer can directly communicate with any other computer. This has advantages and disadvantages that will be discussed here.
<br />
<br />A flat network easily interconnects all systems into a single broadcast domain, but a single broadcast domain has drawbacks related to security, network traffic problems, and a loss of local management. Some administrators prefer traditional subnetwork designs, which can be introduced into flat switched network designs with VLANs. The IEEE 802.1Q VLAN standard was rolled out to provide important VLAN techniques required to build large switched networks. The IEEE standard is discussed later.
<br />
<br />All the computers are connected to the same network. Two logical subnets in the form of VLANs overlay the physical network. In older physical LAN models, all the computers in Sales were connected to the same physical network within the same physical area. In the VLAN model, a computer at any location on the physical network can participate in a VLANs. For example, users in different buildings on the same campus can be part of the same VLAN group, broadcasting messages to one another and sharing the same group servers, printers, and other resources.
<br />
<br />Keep in mind that the underlying physical network for VLANs is a flat switched network. VLANs overlay this topology. Routers are still needed to forward packets between VLANs, as shown on the left in Figure V-2. They provide a way for each VLAN to maintain its autonomy and broadcast nature while forwarding packets between VLANs when necessary. Routing allows administrators to put security policies in place as well, such as packet-filtering techniques, as discussed under "Firewall." An optimally designed network will have VLANs configured to reduce as much inter-VLAN routing as possible.
<br />
<br />While routing adds the advantages of subnetworking back into the flat switched network topology, routing packets is slower than switching them (unless layer 3 routing is used, which reduces the need for VLANs, as discussed later). Even though a network may be subdivided into VLANs, the underlying network is still capable of switching packets to any computer at high speed. So the "route first, then switch" (or "cut-through" routing) technique is applied to boost performance. A router is initially used to establish a route between two systems in different VLANs and to provide security aspects of verifying that the two systems can set up a connection. Once the route is established and security is checked, packets are switched using the layer 2 switching fabric. This basically avoids moving all but the first few packets through the slow router once it has done its job. In some environments, a route server calculates routes, but all packets are switched. See "IP over ATM."
<br />
<br />The network administrator includes a computer (or user) in a VLAN based on a switch port address, a computer hardware address (the MAC, or Medium Access Control address of a network interface card), an IP address, or some other method. 
<br />
<br />VLANs are essential in organizations in which users move from one group to another, or the structure of the organization is such that members of the same workgroup are located in different physical locations. VLANs let scattered group members share common resources, such as storage devices, and be part of the same broadcast domain. In other words, traffic generated by users in a group should stay confined to their group. If users are highly mobile and move from one office to another as part of their job, the network administrator can use VLAN techniques to keep the user within a broadcast group no matter where they plug into the network.
<br />
<br />With the advent of routing switches, as described under "Multilayer Switching," VLAN usage has fallen off. Routing switches perform routing in hardware, which removes the performance problem of traditional software-based routers. These switches are said to route at wire speed. Thus, high-performance, inexpensive, well-understood routing via routing switches has supplanted VLANs. Still, many of these routing switches support VLAN technologies, so VLANs can be configured if necessary.
<br />
<br />VLANs have always been difficult to configure, while routed subneting is well understood. In addition, the network design supported by VLANs is not as practical in enterprise networks where traffic heads straight for enterprise data centers and the Internet, rather than servers and other devices within "local" groups.
<br /><hr />
<br /><b>Configuration Methods</b>
<br />Switching architectures are ideal for the creation of VLANs. The first VLANs were configured manually. Then, as the technology became better understood and more popular, more advanced techniques were employed. The following sections describe the various techniques that can be used to build VLANs. Many vendors are implementing some or all of these techniques. For example, the more advanced methods rely on IP protocols, but networks that use both IP and nonroutable protocols such, as NetBIOS, may need to use the MAC-based method described next in addition to the IP methods.
<br />
<br /><ul><li><b>Port Configuration Methods</b>
<br />The port configuration method is really a way to configure separate LANs within the same box. The resulting LANs are technically not VLANs because they are configured as distinct wiring configurations. The network administrator ties together specific ports on hub or switching devices to create individual LANs. For example, ports 2, 4, 5, and 8 are grouped as LAN #1, and ports 1, 3, 6, 7, 9, and 10 are grouped into LAN #2. Two backplane designs are used in hub or switch devices to allow LAN configuration: multibus backplanes or TDM (time division multiplexing) backplanes. With the multibus design, each bus represents a LAN and ports are linked to a specific bus. In the TDM design, specific time slots on a single bus are owned by a specific LAN. Because LANs are configured within the hub or switch itself, it is not possible with some hubs or switches to bridge a LAN configured in one device with a LAN configured in another device.<br /><br /></li>

<li><b>MAC-Based VLANs</b>
<br />The MAC address is the hardwired address built into network interface cards. The network administrator essentially creates a table that defines which MAC addresses belong with what VLAN. Compared to port configuration methods, this method provides true VLAN capabilities because membership in a VLAN is not directly tied to a specific hardware port. Configuration is done in software and a computer can usually belong to two or more VLANs. In addition, if a computer is moved to another location, it still belongs to the same VLAN because its MAC address moves with it.<br /><br /></li>

<li><b>Layer 3 VLANs</b>
<br />This type of VLAN uses layer 3 information to build VLANs based on internetwork protocol addresses. A layer 3 switch is capable of looking at the network address in a frame and forwarding the frame based on information in a table the matches the network address with membership in a particular VLAN. Like the MAC-based VLANs, moves are easy because the port of the workstation does not determine VLAN membership. However, looking at the layer 3 address can cause performance problems. The layer 3 approach can be extended to include more routing functionality right in the switch, and that is what many vendors have done with their high-end switches. You can refer to "Multilayer Switching" to learn about the architectural details of these switches.<br /><br /></li>

<li><b>IP Multicast VLANs</b>
<br />In this approach, a VLAN is defined by membership in an IP multicast group. IP multicasting is a way for one workstation to transmit to some but not all workstations on a network. The workstations that receive the transmissions are known as the multicast group. Multicasting is basically one-to-many communication supported by Internet standards. Multicasting is set up by using IP class D addresses. Routers must be multicast enabled to use this feature. Multicasting is a two-way process. Routers set up multicasting among themselves, but a router only does multicasting if some host on its attached network has requested to be a member of a multicast group. Routers without any need to be part of a particular multicast do not get involved, in order to avoid unnecessary traffic. Multicasting is dynamic in that workstations can join and drop out of a multicast group at any time. Using this feature to create VLANs is useful and flexible. Multicasting also allows the VLAN to span WAN-based routers.<br /><br /></li>

<li><b>Rules-Based VLANs</b>
<br />Some vendors have implemented "rules-based" VLAN configuration techniques, which allows administrators to create VLANs based on information contained in packets that switches look at and evaluate. This method involves creating rules in software that are followed to determine VLAN membership. While this technique adds a lot of flexibility, setup and maintenance can be complex. For example, a VLAN might be described with these rules:<br /></li>
<li><ul><li>All stations with subnet address 200.100.10.x
<br /></li><li>excluding these IP addresses: 200.100.10.5, 200.100.10.6
<br /></li><li>excluding these MAC addresses: 06-1A-0A-05-3C-02-04</li></ul></li></ul>
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
<td class="MapParent" aria-label="Parent layer protocols">Ethernet<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>VLAN</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />Ethernet II<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />IEEE 802.3<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>802.1Q</b><br />IEEE 802.1q was a project in the IEEE 802 standards process to develop a mechanism to allow multiple bridged networks to transparently share the same physical network link without leakage of information between networks. IEEE 802.1q is also the name of the standard issued by this process, and in common usage the name of the encapsulation protocol used to implement this mechanism over Ethernet networks.<br /><br /><b>ATM</b><br />Asynchronous Transfer Mode (ATM) is a network technology based on transferring data in cells or packets of a fixed size. The cell used with ATM is relatively small compared to units used with older technologies. The small, constant cell size allows ATM equipment to transmit video, audio, and computer data over the same network, and assure that no single type of data hogs the line.<br /><br /><b>Bridge</b><br />A device that connects and passes packets between two network segments that use the same communications protocol. Bridges operate at the data link layer (Layer 2) of the OSI reference model. In general, a bridge will filter, forward, or flood an incoming frame based on the MAC address of that frame.<br /><br /><b>Broadcast Domain</b><br />A broadcast domain is the portion of a network sharing the same layer two network segment. In a network with a single switch, the broadcast domain is that entire switch. In a network with multiple switches interconnected by crossover cables without the use of VLAN's, the broadcast domain includes all of those switches.
<br />
<br />A single broadcast domain can contain more than one IP subnet, however that is generally not considered good network design. IP subnets should be segregated into separate broadcast domains via the use of separate switches, or VLAN's.<br /><br /><b>Broadcast domain</b><br />A broadcast domain is the portion of a network sharing the same layer two network segment. In a network with a single switch, the broadcast domain is that entire switch. In a network with multiple switches interconnected by crossover cables without the use of VLAN's, the broadcast domain includes all of those switches.
<br />
<br />A single broadcast domain can contain more than one IP subnet, however that is generally not considered good network design. IP subnets should be segregated into separate broadcast domains via the use of separate switches, or VLAN's.<br /><br /><b>CSMA/CD</b><br />CSMA/CD (Carrier Sense Multiple Access with Collision Detection). Algorithm used when transmitting frames. The network is checked for other transmissions; when the way is clear, the computer transmissions can begin. If a collision is detected the packet is retransmitted later.<br /><br /><b>Collision Domain</b><br />In Ethernet, the network area within which frames that have collided are propagated. Repeaters and hubs propagate collisions; LAN switches, bridges and routers do not.<br /><br /><b>Edge Device</b><br />Edge device is a physical device that is capable of forwarding packets between legacy interfaces (such as Ethernet and Token Ring) and ATM interfaces based on data-link and network layer information. An edge device does not participate in the running of any network layer routing protocol.<br /><br /><b>Ethernet</b><br />A local-area network (LAN) architecture developed by Xerox Corporation in cooperation with DEC and Intel in 1976. Ethernet uses a bus or star topology and supports data transfer rates of 10 Mbps. The Ethernet specification served as the basis for the IEEE 802.3 standard, which specifies the physical and lower software layers. Ethernet uses the CSMA/CD access method to handle simultaneous demands. It is one of the most widely implemented LAN standards. 
<br />
<br />A newer version of Ethernet, called 100Base-T (or Fast Ethernet), supports data transfer rates of 100 Mbps. And the newest version, Gigabit Ethernet supports data rates of 1 gigabit (1,000 megabits) per second.<br /><br /><b>IEEE</b><br />IEEE (Institute of Electrical and Electronics Engineers) is best known for developing standards for the computer and electronics industry, which founded in 1884 as the AIEE, the IEEE was formed in 1963 when AIEE merged with IRE. IEEE is an organization composed of engineers, scientists, and students. The IEEE is best known for developing standards for the computer and electronics industry. In particular, the IEEE 802 standards for local-area networks are widely followed.<br /><br /><b>IP address</b><br />IP address is an identifier for a computer or device on a TCP/IP network. Networks using the TCP/IP protocol route messages based on the IP address of the destination. The format of an IP address is a 32-bit numeric address written as four numbers separated by periods. Each number can be zero to 255. For example, 1.160.10.240 could be an IP address. Within an isolated network, you can assign IP addresses at random as long as each one is unique. However, connecting a private network to the Internet requires using registered IP addresses (called Internet addresses) to avoid duplicates. 
<br />
<br />The four numbers in an IP address are used in different ways to identify a particular network and a host on that network. Four regional Internet registries -- ARIN, RIPE NCC, LACNIC and APNIC -- assign Internet addresses from the following three classes. 
<br />Class A - supports 16 million hosts on each of 126 networks 
<br />Class B - supports 65,000 hosts on each of 16,000 networks 
<br />Class C - supports 254 hosts on each of 2 million networks 
<br />
<br />The number of unassigned Internet addresses is running out, so a new classless scheme called CIDR is gradually replacing the system based on classes A, B, and C and is tied to adoption of IPv6.<br /><br /><b>LAN</b><br />Local-area network (LAN) is a computer network that spans a relatively small area. Most LANs are confined to a single building or group of buildings. However, one LAN can be connected to other LANs over any distance via telephone lines and radio waves. A system of LANs connected in this way is called a wide-area network (WAN). 
<br />
<br />Most LANs connect workstations and personal computers. Each node (individual computer ) in a LAN has its own CPU with which it executes programs, but it also is able to access data and devices anywhere on the LAN. This means that many users can share expensive devices, such as laser printers, as well as data. Users can also use the LAN to communicate with each other, by sending e-mail or engaging in chat sessions.<br /><br /><b>LANE</b><br />LANE (LAN emulation) is technology that allows an ATM network to function as a LAN backbone. The ATM network must provide multicast and broadcast support, address mapping (MAC-to-ATM), SVC management, and a usable packet format. LANE also defines Ethernet and Token Ring ELANs.<br /><br /><b>Latency</b><br />Delay between the time a device requests access to a network and the time it is granted permission to transmit. It is also the delay between the time when a device receives a frame and the time that frame is forwarded out the destination port.<br /><br /><b>MAC</b><br />MAC (Medium Access Control) is a hardware address that uniquely identifies each node of a network. In IEEE 802 networks, the Data Link Control (DLC) layer of the OSI Reference Model is divided into two sublayers: the Logical Link Control (LLC) layer and the Media Access Control (MAC) layer. The MAC layer interfaces directly with the network medium. Consequently, each different type of network medium requires a different MAC layer. 
<br />
<br />On networks that do not conform to the IEEE 802 standards but do conform to the OSI Reference Model, the node address is called the Data Link Control (DLC) address.<br /><br /><b>Multicast</b><br />Multicast is designed to transmit a single message to a select group of recipients. A simple example of multicasting is sending an e-mail message to a mailing list. Teleconferencing and videoconferencing also use multicasting, but require more robust protocols and networks.<br /><br /><b>NetBIOS</b><br />NetBIOS(Network Basic Input Output System) is an API that augments the DOS BIOS by adding special functions for local-area networks (LANs). Almost all Windows-based LANs for PCs are based on the NetBIOS. Some LAN manufacturers have even extended it, adding additional network capabilities. <br /><br /><b>Node</b><br />In networks, node is a processing location. A node can be a computer or some other device, such as a printer. Every node has a unique network address, sometimes called a Data Link Control (DLC) address or Media Access Control (MAC) address. 
<br />
<br />In tree structures, node is a point where two or more lines meet. <br /><br /><b>OSI Model</b><br />Open System Interconnection reference model. Network architectural model developed by ISO and ITU-T. The model consists of seven layers, each of which specifies particular network functions such as addressing, flow control, error control, encapsulation, and reliable message transfer. The lowest layer (the physical layer) is closest to the media technology. The lower two layers are implemented in hardware and software, while the upper five layers are implemented only in software. The highest layer (the application layer) is closest to the user. The OSI reference model is used universally as a method for teaching and understanding network functionality.<br /><br /><b>Port</b><br />Port is an interface on a computer to which you can connect a device. Personal computers have various types of ports. Internally, there are several ports for connecting disk drives, display screens, and keyboards. Externally, personal computers have ports for connecting modems, printers, mice, and other peripheral devices. 
<br />
<br />Almost all personal computers come with a serial RS-232C port or RS-422 port for connecting a modem or mouse and a parallel port for connecting a printer. On PCs, the parallel port is a Centronics interface that uses a 25-pin connector. SCSI (Small Computer System Interface) ports support higher transmission speeds than do conventional ports and enable you to attach up to seven devices to the same port.<br /><br /><b>Router</b><br />A device that forwards data packets along networks. A router is connected to at least two networks, commonly two LANs or WANs or a LAN and its ISP network. Routers are located at gateways, the places where two or more networks connect. 
<br />
<br />Routers use headers and forwarding tables to determine the best path for forwarding the packets, and they use protocols such as ICMP to communicate with each other and configure the best route between any two hosts.<br /><br /><b>Subnet</b><br />Subnet is a portion of a network that shares a common address component. On TCP/IP networks, subnets are defined as all devices whose IP addresses have the same prefix. For example, all devices with IP addresses that start with 100.100.100. would be part of the same subnet. Dividing a network into subnets is useful for both security and performance reasons. IP networks are divided using a subnet mask.<br /><br /><b>Subnet Mask</b><br />Subnet Mask is the address mask used in IP to indicate the bits of an IP address that are being used for the subnet address. The subnet mask is sometimes referred to simply as mask.<br /><br /><b>Switch</b><br />In networks, switch is a device that filters and forwards packets between LAN segments. Switches operate at the data link layer (layer 2) and sometimes the network layer (layer 3) of the OSI Reference Model and therefore support any packet protocol.<br /><br /><b>TDM</b><br />Time Division Multiplexing, a type of multiplexing that combines data streams by assigning each stream a different time slot in a set. TDM repeatedly transmits a fixed sequence of time slots over a single transmission channel. Within T-Carrier systems, such as T-1 and T-3, TDM combines Pulse Code Modulated (PCM) streams created for each conversation or data stream.<br /><br /><b>VLAN</b><br />Virtual LAN (VLAN) is a network of computers that behave as if they are connected to the same wire even though they may actually be physically located on different segments of a LAN. VLANs are configured through software rather than hardware, which makes them extremely flexible. One of the biggest advantages of VLANs is that when a computer is physically moved to another location, it can stay on the same VLAN without any hardware reconfiguration.<br /><br />			</div>
		  
</section>

