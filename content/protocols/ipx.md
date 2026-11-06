---
id: protocol-ipx
slug: ipx
name: IPX
expandedName: Internet Packet Exchange
origin: historical
provenance:
  source: protocols/protocol_IPX.htm
  sha256: 0cc0a8866682c8d349eb7b8d97763393263b54109fe7c7a625ebb3fec275397f
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Internet Packet Exchange
layers:
  - Network Layer
suites:
  - Novell NetWare
summary:
  - label: Protocol
    html: Internet Packet Exchange
  - label: Protocol suite
    html: Novell NetWare
  - label: Layer
    html: Network Layer
  - label: Related protocols
    html: 'IP,<br />IPv6,<br />NetWare,<br />SPX,<br />RIP,<br />NLSP'
originalUpdate: '2005-11-07 17:10:05'
rfcs:
  - 1132
  - 1234
  - 1298
  - 1362
  - 1420
  - 1551
  - 1552
  - 1553
  - 1634
  - 1791
  - 1792
related:
  - protocol-ip
  - protocol-ipv6
  - protocol-rip
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

			Developed by Novell Inc., in the early 1980's, IPX is a networking protocol used by the Novell NetWare operating system as a means to request services such as file servers, printers, software applications and other resources. IPX is a common protocol that many departments use to provide computing resources for computer users.
<br />
<br />IPX performs the Open Systems Interconnection (OSI) network layer tasks of addressing, routing, and switching packets. IPX makes a best effort attempt to deliver packets to their destination; there is no guarantee or verification of successful delivery. Packet acknowledgment or connection control must be provided by protocols above IPX. 
<br />
<br />Guaranteed services, such as SPXII, can be built over IPX. However, IPX is used whenever guaranteed service is not required (for example, in service advertising) and for applications where an occasional lost packet is not critical. The low overhead of IPX means speed and performance. 
<br />
<br />IPX provides full internetwork addressing within a large address space. It defines network and socket numbers, while using the node addressing scheme of the network interface hardware for clients. This saves memory, bandwidth, and complexity. 
<br /><hr />
<br /><b>IPX Addressing</b>
<br />IPX addressing defines the internetwork, a collection of LANs connected by routers, bridges, and so forth. 
<br />
<br />IPX packet headers require both source and destination addresses. These designate the sender and the receiver of the packet respectively. 
<br />
<br /><b>IPX Internetwork Address Components</b> 
<br />If this table is unreadable, a preformatted table follows:
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>Address</p></td><td><p>Byte Length</p></td><td><p>Description s</p></td></tr><tr><td><p>Network</p></td><td><p>4 bytes</p></td><td>Identifies a specific network or LAN on an IPX internetwork</td></tr><tr><td><p>Node</p></td><td><p>6 bytes</p></td><td>Identifies individual nodes, or computers, on a network or LAN.</td></tr><tr><td><p>Socket</p></td><td><p>2 bytes</p></td><td>Identifies a process or function operating within a node. A socket is identified by a unique number</td></tr></tbody></table></div></div>
<br /><ul><li><b>Network address</b><br /></li>
<li>The network number (not the node address) is used by routers to forward packets to their destination. Each LAN is a configured network in IPX and is assigned a unique network number or address. 
<br /><br /></li>
<li>Each LAN (logical network) must be associated with a physical network and is limited to a single network frame type. When multiple frame types are used on the same networking segment, each frame type is considered a LAN and must have a unique network number. This means that all network devices which are cabled to a network segment and which use a common frame type must also use the same network address. 
<br /><br /></li>
<li>Where multiple LANs are configured on the same platform, an internal network number (logical address) serves as a common point of connection. 
<br /><br /></li>
<li><b>Node address</b><br /></li>
<li>The node address identifies a station, node, or individual computer on a network. For clients, the node is defined by networking hardware and is usually factory set. For NetWare servers 3.x and above, NetWare configures a logical node address. 
<br /><br /></li>
<li>The lower-level Media Access Control (MAC) protocols (such as the token ring, Ethernet, and ARCnet standards) define node addressing for each LAN, which is implemented within the hardware or firmware of each network interface board and is usually factory set. 
<br /><br /></li>
<li>In addition to the server's node address for the attached LAN, the server's logical node address is associated with the internal network address. 
<br /><br /></li>
<li><b>Socket address</b><br /></li>
<li>The socket address identifies the process in the destination node and is the ultimate destination for a packet. Socket numbers provide a sort of mail slot that distinguishes each process for IPX. 
<br /><br /></li>
<li>Sockets are the mechanism that allows multiple applications on the same station to send and receive data, without interfering with each other. Sockets have the same function as ports in other network protocols. 
<br /><br /></li>
<li>A socket number is assigned to a specific process. A process can use a well-known (static) socket number or can obtain a dynamic (ephemeral) number when the process requests a socket from IPX. Because socket numbers are internal to each node, each node can have its own domain of sockets independent of other nodes.</li></ul>
<br /><hr />
<br /><b>Header Format</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>32bits</p></td></tr><tr><td colspan="2"><p>Checksum</p></td><td><p>Packet length</p></td></tr><tr><td><p>Transport control</p></td><td><p>Type</p></td><td><p>Destination network</p></td></tr><tr><td colspan="2"><p>Destination network</p></td><td><p>Destination node</p></td></tr><tr><td colspan="3"><p>Destination node</p></td></tr><tr><td colspan="2"><p>Destination socket</p></td><td><p>Source network</p></td></tr><tr><td colspan="2"><p>Source network</p></td><td><p>Source node</p></td></tr><tr><td colspan="3"><p>Source node</p></td></tr><tr><td colspan="2"><p>Source socket</p></td><td><p>Data</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Checksum</b><br /></li>
<li>16 bits. Always set to 0xFFFF. The Checksum field is normally set to 0xFFFF, which indicates that no checksum is performed. This field, however, is configurable. 
<br /><br /></li>
<li>The value IPX_CHKSUM_TRIGGER (defined in the ipx_app.h file) directs IPX to generate a checksum of the IPX header (minus the Transport Control field) and the data. Any value which is not IPX_CHKSUM_TRIGGER is treated as 0xFFFF.
<br /><br /></li>
<li><b>Packet Length</b><br /></li>
<li>16 bits. The total length of the packet header and the data.
<br /><br /></li>
<li><b>Transport control</b><br /></li>
<li>8 bits. Used by NetWare routers. Set to zero by IPX before packet transmission. The Transport Control field is used to monitor the number of routers that a packet has crossed. IPX sets this field to zero before sending the packet. Each router increments the field before sending the packet on. If the packet passes through 16 routers, it is considered undeliverable and the sixteenth router discards it.
<br /><br /></li>
<li><b>Type</b><br /></li> 
<li>8 bits. Specifies the encapsulated protocol.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td><p>0x00</p></td><td><p>Hello or SAP.</p></td></tr><tr><td><p>0x01</p></td><td><p>RIP, Routing Information Protocol.</p></td></tr><tr><td><p>0x02</p></td><td><p>Echo Packet.</p></td></tr><tr><td><p>0x03</p></td><td><p>Error Packet.</p></td></tr><tr><td><p>0x04</p></td><td><p>NetWare 386 or SAP.</p></td></tr><tr><td><p>0x05</p></td><td><p>SPX, Sequenced Packet Protocol.</p></td></tr><tr><td><p>0x10</p><p>-</p><p>0x1F</p></td><td><p>Experimental Protocols.</p></td></tr><tr><td><p>0x11</p></td><td><p>NCP, NetWare Core Protocol</p></td></tr><tr><td><p>16-31</p></td><td><p>Experimental protocols.</p></td></tr><tr><td><p>17</p></td><td><p>NetWare 286.</p></td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Destination network</b><br /></li> 
<li>32 bits. A subnet identifier of the receiver. This field must be set with the network number to which the destination server is connected. The system administrator assigns a unique network number to each network within an internetwork. 
<br /><br /></li>
<li>Many NetWare servers are configured with a logical network number, called the internal network. This internal network number provides the server with a single network address even when it is connected to several physical networks. 
<br /><br /></li>
<li>If zero (0) is used for the network address, the packet is sent to the network to which the source host is connected. 
<br /><br /></li>
<li>If the source host has an internal network (just as a server), any packets sent with a network address of zero (0) are sent only to the internal network, whereas in the case of a host configured with no internal network (just as a client would be), a packet with a zero (0) network address is sent to the physical network. 
<br /><br /></li>
<li>Packets with a network address of zero (0) are typically used to query SAP for the address and name of the nearest server.
<br /><br /></li>
<li><b>Destination node</b><br /></li> 
<li>48 bits. The physical address of the receiver. The destination node address identifies the client on the network. It is typically determined by a factory set address on the network board. 
<br /><br /></li>
<li>In the case of a server, a configured internal network typically has a node address of 0x00 00 00 00 00 01. Addresses shorter than 6 bytes are left justified and zero filled. A node address of 0xFF FF FF FF FF FF designates a broadcast to all hosts on the network identified by the destination network address.
<br /><br /></li>
<li><b>Destination socket</b><br /></li> 
<li>16 bits. The socket number of the receiver. The destination socket number directs the packet to a specific process on the destination node. A socket number is assigned to a specific process. On UNIX; a process can use multiple sockets, but a socket cannot be shared among multiple processes. 
<br /><br /></li>
<li>Services written to run over IPX generally have static or well-known socket numbers associated with them. By having static socket numbers, IPX users ensure that their server and client application types match. 
<br /><br /></li>
<li>The following socket numbers are reserved by the IPX protocol
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td><p>0x02</p></td><td><p>Echo protocol socket</p></td></tr><tr><td><p>0x03</p></td><td>Error handler packet In addition, Novell has defined and reserved sockets for specific purposes. Some are listed below.</td></tr><tr><td><p>0x247</p></td><td>Novell VirtualTerminal (NVT) server </td></tr><tr><td><p>0x0451</p></td><td>NetWare Core Protocol</td></tr><tr><td><p>0x0452</p></td><td>NetWare Service Advertising Protocol (SAP) </td></tr><tr><td><p>0x0453</p></td><td>NetWare Routing Protocol (RIP) </td></tr><tr><td><p>0x0456</p></td><td>NetWare Diagnostics Protocol</td></tr><tr><td><p>0x8063</p></td><td>NVT2 Server </td></tr><tr><td><p>0x811E</p></td><td>Print Server</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Source network</b><br /></li>
<li>32 bits. Subnet identifier of the sender. The source network address is filled in by IPX when the packet is sent by the source machine. 
<br /><br /></li>
<li><b>Source node</b><br /></li>
<li>48 bits. The physical address of the sender. Identifies the LAN hardware address. If the node number is FFFF FFFF FFFF, it means broadcast, and if the node number is 0000 0000 0001, it means its the server (on NetWare 3.x and 4.x only).
<br /><br /></li>
<li><b>Source socket</b><br /></li> 
<li>16 bits. The socket number of the sender. The source socket address is filled in by IPX when the packet is sent by the source, except when a process has multiple sockets assigned. In this case, the correct socket number must be filled in by the application.
<br /><br /></li>
<li><b>Socket number</b><br /></li>
<li>A 16-bit number that identifies the higher-layer packet:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 5" tabindex="0"><table><caption>Description: preserved table 5</caption><tbody><tr><td><p>Socket</p></td><td><p>Description</p></td></tr><tr><td><p>0x01</p></td><td><p>RIP, Routing Information Packet.</p></td></tr><tr><td><p>0x02</p></td><td><p>Echo Protocol Packet.</p></td></tr><tr><td><p>0x03</p></td><td><p>Error Handling Packet.</p></td></tr><tr><td><p>0x20-0x3F</p></td><td><p>Experimental.</p></td></tr><tr><td><p>0x1-0xBB8</p></td><td><p>Xerox registered.</p></td></tr><tr><td><p>0xBB9</p></td><td><p>Dynamically Assigned.</p></td></tr><tr><td><p>0x451</p></td><td><p>NCP, NetWare Core Protocol</p></td></tr><tr><td><p>0x452</p></td><td><p>SAP, Service Advertising Protocol.</p></td></tr><tr><td><p>0x453</p></td><td><p>RIP, Routing Information Protocol</p></td></tr><tr><td><p>0x455</p></td><td><p>NetBIOS</p></td></tr><tr><td><p>0x456</p></td><td><p>Diagnostics</p></td></tr><tr><td><p>0x457</p></td><td><p>Serialization packet (SER)</p></td></tr><tr><td><p>0x8060</p></td><td><p>IPX.</p></td></tr><tr><td><p>0x9091</p></td><td><p>TCP over IPXF.</p></td></tr><tr><td><p>0x9092</p></td><td><p>UDP over IPXF.</p></td></tr><tr><td><p>0x9093</p></td><td><p>IPXF, IPX Fragmentation Protocol.</p></td></tr><tr><td><p>4000-6000H</p></td><td><p>Ephemeral sockets, used for file server and network communication. </p></td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Data</b><br /></li> 
<li>Variable length.</li></ul>
<br />
<br />IPX recognizes the following Ethernet frame types: 
<br /><ul><li><b>802.3 Raw</b><br /></li>
<li>The IPX header follows immediately after the Length field in the MAC header. 
<br /><br /></li>
<li><b>IEEE 802.2</b><br /></li>
<li>The IPX header follows immediately after the IEEE 802.2 header (DSAP, SSAP, and Control). 
<br /><br /></li>
<li><b>Ethernet II</b><br /></li>
<li>The Type field in the MAC header has a value of 8137, and the IPX header follows immediately after the Type field. 
<br /><br /></li>
<li><b>Ethernet SNAP</b><br /></li>
<li>The IPX header follows immediately after the 5-byte protocol identifier field.</li></ul> 
<br /><hr />
<br />Additionally, IPX recognizes the following token ring frame types: 
<br /><ul><li>Token ring<br /></li> 
<li>Token ring SNAP</li></ul>
<br />The maximum length of the data section of an IPX packet (MTU-30) varies depending on the lower layer MAC protocol (Ethernet or token ring) that is being used. 
<br />
<br />For example, Ethernet supports 1500-byte packets, where 30 bytes is the IPX header and 1470 bytes is the actual data. In some cases, the maximum data size is limited by routers connecting LANs. Some older Ethernet routers limit the maximum IPX packet size to 576 bytes. 
<br />
<br />The content and structure of the data portion are entirely the responsibility of the application using IPX and can take any format.
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
<td class="MapParent" aria-label="Parent layer protocols">Ethernet<img src="/supporting/images/tline_l_top.gif" alt="" /><br />Ethernet 802.3<img src="/supporting/images/tline_l.gif" alt="" /><br />Ethernet 802.2<img src="/supporting/images/tline_l_bottom.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>IPX</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />RIPX<br /><img src="/supporting/images/tline_r.gif" alt="" />SPX<br /><img src="/supporting/images/tline_r.gif" alt="" />NCP<br /><img src="/supporting/images/tline_r.gif" alt="" />NetBIOS MailSlot<br /><img src="/supporting/images/tline_r.gif" alt="" />NetBIOS<br /><img src="/supporting/images/tline_r.gif" alt="" />SAP<br /><img src="/supporting/images/tline_r.gif" alt="" />NLSP<br /><img src="/supporting/images/tline_r.gif" alt="" />DIAG<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />SER<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>ARCnet</b><br />ARCnet (Attached Resource Computer network) is a widely-installed local area network (LAN) technology that uses a token-bus scheme for managing line sharing among the workstations and other devices connected on the LAN. ARCnet was introduced by Datapoint Corporation in 1977. It uses a token-ring architecture, supports data rates of 2.5 Mbps, and connects up to 255 computers. A special advantage of ARCnet is that it permits various types of transmission media -- twisted-pair wire, coaxial cable, and fiber optic cable -- to be mixed on the same network. 
<br />
<br />A new specification, called ARCnet Plus, will support data rates of 20 Mbps.<br /><br /><b>Ethernet</b><br />A local-area network (LAN) architecture developed by Xerox Corporation in cooperation with DEC and Intel in 1976. Ethernet uses a bus or star topology and supports data transfer rates of 10 Mbps. The Ethernet specification served as the basis for the IEEE 802.3 standard, which specifies the physical and lower software layers. Ethernet uses the CSMA/CD access method to handle simultaneous demands. It is one of the most widely implemented LAN standards. 
<br />
<br />A newer version of Ethernet, called 100Base-T (or Fast Ethernet), supports data transfer rates of 100 Mbps. And the newest version, Gigabit Ethernet supports data rates of 1 gigabit (1,000 megabits) per second.<br /><br /><b>MAC</b><br />MAC (Medium Access Control) is a hardware address that uniquely identifies each node of a network. In IEEE 802 networks, the Data Link Control (DLC) layer of the OSI Reference Model is divided into two sublayers: the Logical Link Control (LLC) layer and the Media Access Control (MAC) layer. The MAC layer interfaces directly with the network medium. Consequently, each different type of network medium requires a different MAC layer. 
<br />
<br />On networks that do not conform to the IEEE 802 standards but do conform to the OSI Reference Model, the node address is called the Data Link Control (DLC) address.<br /><br /><b>OSI</b><br />ISO (Open Systems Interconnection) is a worldwide communications that defines a networking framework for implementing protocols in seven layers. Control is passed from one layer to the next, starting at the application layer in one station, proceeding to the bottom layer, over the channel to the next station and back up the hierarchy. 
<br />
<br />At one time, most vendors agreed to support OSI in one form or another, but OSI was too loosely defined and proprietary standards were too entrenched. Except for the OSI-compliant X.400 and X.500 e-mail and directory standards, which are widely used, what was once thought to become the universal communications standard now serves as the teaching model for all other protocols. 
<br />
<br />Most of the functionality in the OSI model exists in all communications systems, although two or three OSI layers may be incorporated into one. 
<br />
<br />OSI is also referred to as the OSI Reference Model or just the OSI Model.<br /><br /><b>SPXII</b><br />SPXII(Sequenced Packet Exchange) is an improvement on SPX that allows better performance on larger bandwidth networks.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1132.html">RFC 1132</a>] A Standard for the Transmission of 802.2 Packets over IPX Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc1234.html">RFC 1234</a>] Tunneling IPX Traffic through IP Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc1420.html">RFC 1420</a>] SNMP over IPX.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1298.html">RFC 1298</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1552.html">RFC 1552</a>] The PPP Internetwork Packet Exchange Control Protocol (IPXCP).
[<a href="https://www.rfc-editor.org/rfc/rfc1553.html">RFC 1553</a>] Compressing IPX Headers Over WAN Media (CIPX).
[<a href="https://www.rfc-editor.org/rfc/rfc1634.html">RFC 1634</a>] Novell IPX Over Various WAN Media (IPXWAN).
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1362.html">RFC 1362</a>, <a href="https://www.rfc-editor.org/rfc/rfc1551.html">RFC 1551</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1791.html">RFC 1791</a>] TCP And UDP Over IPX Networks With Fixed Path MTU.
[<a href="https://www.rfc-editor.org/rfc/rfc1792.html">RFC 1792</a>] TCP/IPX Connection Mib Specification.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc1298.html">RFC 1298</a>] SNMP over IPX.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1420.html">RFC 1420</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1362.html">RFC 1362</a>] Novell IPX Over Various WAN Media (IPXWAN).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1551.html">RFC 1551</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1551.html">RFC 1551</a>] Novell IPX Over Various WAN Media (IPXWAN).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1634.html">RFC 1634</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1362.html">RFC 1362</a>.<hr /><b>Publications:</b>
[Sybex Inc. and Novell Press, 1993.] Chappell, Laura and Dan Hakes. Novell's Guide to NetWare LAN Analysis (First Edition). 
[Sybex Inc. and Novell Press, 1994.] Chappell, Laura and Dan Hakes. Novell's Guide to NetWare LAN Analysis (Second Edition). 
[Annabooks, Inc., 1996.] Conner, Steve and Diane Conner. Programmer's Guide to the NetWare Core Protocol. 
                		  </div>
		  
</section>

