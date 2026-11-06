---
id: protocol-rarp
slug: rarp
name: RARP
expandedName: Reverse Address Resolution Protocol
origin: historical
provenance:
  source: protocols/protocol_RARP.htm
  sha256: 34f3eb890d50ec11192147cdedf1dae9b51800a1b9dff7880c843ff2238e4df8
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Reverse Address Resolution Protocol
layers:
  - Data Link Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Reverse Address Resolution Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Data Link Layer
  - label: EtherType
    html: '0x8035'
  - label: Related protocols
    html: 'ARP,<br />DRARP,<br />Dynamic RARP'
originalUpdate: '2005-11-14 17:16:27'
rfcs:
  - 903
related:
  - protocol-arp
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

			RARP (Reverse Address Resolution Protocol) is a protocol by which a physical machine in a local area network can request to learn its IP address from a gateway server's Address Resolution Protocol (ARP) table or cache. A network administrator creates a table in a local area network's gateway router that maps the physical machine (or Media Access Control - MAC address) addresses to corresponding Internet Protocol addresses. When a new machine is set up, its RARP client program requests from the RARP server on the router to be sent its IP address. Assuming that an entry has been set up in the router table, the RARP server will return the IP address to the machine which can store it for future use.
<br />
<br />RARP is a separate protocol at the data-link level. For example, if the medium used is Ethernet, then RARP packets will have an Ethertype (still to be assigned) different from that of ARP. This recognizes that ARP and RARP are two fundamentally different operations, not supported equally by all hosts. The impact on existing systems is minimized; existing ARP servers will not be confused by RARP packets. It makes RARP a general facility that can be used for mapping hardware addresses to any higher level protocol address.
<br />
<br />This approach provides the simplest implementation for RARP client hosts, but also provides the most difficulties for RARP server hosts. However, these difficulties should not be insurmountable.
<br />
<br />RARP is available for Ethernet, Fiber Distributed-Data Interface, and Token Ring LANs. ARP (Address Resolution Protocol) performs the opposite function as the RARP: mapping of an IP address to a physical machine address.
<br />
<br /><b>Header structure</b>
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>32 bit</p></td></tr><tr><td colspan="2"><p>Hardware Type</p></td><td><p>Protocol Type</p></td></tr><tr><td><p>HLen</p></td><td><p>Plen</p></td><td><p>Operation</p></td></tr><tr><td colspan="3"><p>Sender Hardware Address</p></td></tr><tr><td colspan="3"><p>Sender Protocol Address</p></td></tr><tr><td colspan="3"><p>Target Hardware Address</p></td></tr><tr><td colspan="3"><p>Target Protocol Address</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Hardware type</b><br /><br /></li>

<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>Type</td><td>Description</td></tr><tr><td>1</td><td>Ethernet.</td></tr><tr><td>2</td><td>Experimental Ethernet.</td></tr><tr><td>3</td><td>Amateur Radio AX.25.</td></tr><tr><td>4</td><td>Proteon ProNET Token Ring.</td></tr><tr><td>5</td><td>Chaos.</td></tr><tr><td>6</td><td>IEEE 802.</td></tr><tr><td>7</td><td>ARCNET.</td></tr><tr><td>8</td><td>Hyperchannel.</td></tr><tr><td>9</td><td>Lanstar.</td></tr><tr><td>10</td><td>Autonet Short Address.</td></tr><tr><td>11</td><td>LocalTalk.</td></tr><tr><td>12</td><td>LocalNet (IBM PCNet or SYTEK LocalNET).</td></tr><tr><td>13</td><td>Ultra link.</td></tr><tr><td>14</td><td>SMDS.</td></tr><tr><td>15</td><td>Frame Relay.</td></tr><tr><td>16</td><td>ATM, Asynchronous Transmission Mode.</td></tr><tr><td>17</td><td>HDLC.</td></tr><tr><td>18</td><td>Fibre Channel.</td></tr><tr><td>19</td><td>ATM, Asynchronous Transmission Mode.</td></tr><tr><td>20</td><td>Serial Line.</td></tr><tr><td>21</td><td>ATM, Asynchronous Transmission Mode.</td></tr><tr><td>22</td><td>MIL-STD-188-220.</td></tr><tr><td>23</td><td>Metricom.</td></tr><tr><td>24</td><td>IEEE 1394.1995.</td></tr><tr><td>25</td><td>MAPOS.</td></tr><tr><td>26</td><td>Twinaxial.</td></tr><tr><td>27</td><td>EUI-64.</td></tr><tr><td>28</td><td>HIPARP.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Protocol type</b><br /><br /></li>

<li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td>Protocol</td><td>Description</td></tr><tr><td>0x800</td><td>IP.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Hardware address length</b>
<br />Length of the hardware address in bytes.<br /><br /></li>

<li><b>Protocol address length</b>
<br />Length of the protocol address in bytes.<br /><br /></li>

<li><b>Operation</b>
<br />The values are as follows:<br /><br /></li>

<li><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td>Opcode</td><td>Description</td></tr><tr><td>1</td><td>ARP request</td></tr><tr><td>2</td><td>ARP response</td></tr><tr><td>3</td><td>RARP request.</td></tr><tr><td>4</td><td>RARP response</td></tr><tr><td>5</td><td>Dynamic RARP request</td></tr><tr><td>6</td><td>Dynamic RARP reply</td></tr><tr><td>7</td><td>Dynamic RARP error</td></tr><tr><td>8</td><td>InARP request</td></tr><tr><td>9</td><td>InARP reply</td></tr></tbody></table></div></div></li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: Implementations for 4.2BSD Unix</b>

Provide access to data-link level packets outside the kernel. The RARP server is 
implemented completely outside the kernel and interacts with the kernel only to 
receive and send RARP packets. The kernel has to be modified to provide the 
appropriate access for these packets; currently the 4.2 kernel allows access only 
to IP packets. One existing mechanism that provides this capability is the CMU 
"packet-filter" pseudo driver. This has been used successfully at CMU and Stanford 
to implement similar sorts of "user-level" network servers.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Implementations for 4.2BSD Unix</b>

Maintain a cache of database entries inside the kernel. The full RARP server 
database is maintained outside the kernel by a user process. The RARP server 
itself is implemented directly in the kernel and employs a small cache of database 
entries for its responses. This cache could be the same as is used for forward ARP.

The cache gets filled from the actual RARP database by means of two new ioctls. 
(These are like SIOCIFADDR, in that they are not really associated with a specific 
socket.) One means: "sleep until there is a translation to be done, then pass the 
request out to the user process"; the other means: "enter this translation into 
the kernel table". Thus, when the kernel can't find an entry in the cache, it puts 
the request on a (global) queue and then does a wakeup (). The implementation 
of the first ioctl is to sleep() and then pull the first item off of this queue and 
return it to the user process. Since the kernel can't wait around at interrupt level 
until the user process replies, it can either give up (and assume that the 
requesting host will retransmit the request packet after a second) or if the second 
ioctl passes a copy of the request back into the kernel, formulate and send a 
response at that time.</pre>
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
<td class="MapParent" aria-label="Parent layer protocols">Ethernet<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>RARP</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />Request<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />Response<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>ARP</b><br />Address Resolution Protocol (ARP) is a network layer protocol used to convert an IP address into a physical address (called a DLC address), such as an Ethernet address. A host wishing to obtain a physical address broadcasts an ARP request onto the TCP/IP network. The host on the network that has the IP address in the request then replies with its physical hardware address.<br /><br /><b>Data-link</b><br />The main task of the data link layer is to take a raw transmission facility and transform it into a line that appears free of transmission errors in the network layer. The data link layer is the layer of the model which ensures that data is transferred correctly between adjacent network nodes in a wide area network. The data link layer provides the functional and procedural means to transfer data between network entities and to detect and possibly correct errors that may occur in the Physical layer.<br /><br /><b>Ethernet</b><br />A local-area network (LAN) architecture developed by Xerox Corporation in cooperation with DEC and Intel in 1976. Ethernet uses a bus or star topology and supports data transfer rates of 10 Mbps. The Ethernet specification served as the basis for the IEEE 802.3 standard, which specifies the physical and lower software layers. Ethernet uses the CSMA/CD access method to handle simultaneous demands. It is one of the most widely implemented LAN standards. 
<br />
<br />A newer version of Ethernet, called 100Base-T (or Fast Ethernet), supports data transfer rates of 100 Mbps. And the newest version, Gigabit Ethernet supports data rates of 1 gigabit (1,000 megabits) per second.<br /><br /><b>FDDI</b><br />Fiber Distributed Data Interface, a set of ANSI protocols for sending digital data over fiber optic cable. FDDI networks are token-passing networks, and support data rates of up to 100 Mbps (100 million bits) per second. FDDI networks are typically used as backbones for wide-area networks.<br /><br /><b>Gateway</b><br />A network device used to translate between two different protocols. Used to interconnect two networks that use incompatible protocols. It is a node on a network that serves as an entrance to another network. In enterprises, the gateway is the computer that routes the traffic from a workstation to the outside network that is serving the Web pages. In homes, the gateway is the ISP that connects the user to the internet. 
<br />
<br />In enterprises, the gateway node often acts as a proxy server and a firewall. The gateway is also associated with both a router, which use headers and forwarding tables to determine where packets are sent, and a switch, which provides the actual path for the packet in and out of the gateway.
<br />
<br />It is also a computer system located on earth that switches data signals and voice signals between satellites and terrestrial networks and an earlier term for router, though now obsolete in this sense as router is commonly used.<br /><br /><b>Host</b><br />Host is a computer system that is accessed by a user working at a remote location. Typically, the term is used when there are two computer systems connected by modems and telephone lines. The system that contains the data is called the host, while the computer at which the user sits is called the remote terminal. 
<br />
<br />Host can refer to a computer that is connected to a TCP/IP network, including the Internet. Each host has a unique IP address. 
<br />
<br />Host can refer to provide the infrastructure for a computer service too. For example, there are many companies that host Web servers. This means that they provide the hardware, software, and communications lines required by the server, but the content on the server may be controlled by someone else.<br /><br /><b>IP address</b><br />IP address is an identifier for a computer or device on a TCP/IP network. Networks using the TCP/IP protocol route messages based on the IP address of the destination. The format of an IP address is a 32-bit numeric address written as four numbers separated by periods. Each number can be zero to 255. For example, 1.160.10.240 could be an IP address. Within an isolated network, you can assign IP addresses at random as long as each one is unique. However, connecting a private network to the Internet requires using registered IP addresses (called Internet addresses) to avoid duplicates. 
<br />
<br />The four numbers in an IP address are used in different ways to identify a particular network and a host on that network. Four regional Internet registries -- ARIN, RIPE NCC, LACNIC and APNIC -- assign Internet addresses from the following three classes. 
<br />Class A - supports 16 million hosts on each of 126 networks 
<br />Class B - supports 65,000 hosts on each of 16,000 networks 
<br />Class C - supports 254 hosts on each of 2 million networks 
<br />
<br />The number of unassigned Internet addresses is running out, so a new classless scheme called CIDR is gradually replacing the system based on classes A, B, and C and is tied to adoption of IPv6.<br /><br /><b>LAN</b><br />Local-area network (LAN) is a computer network that spans a relatively small area. Most LANs are confined to a single building or group of buildings. However, one LAN can be connected to other LANs over any distance via telephone lines and radio waves. A system of LANs connected in this way is called a wide-area network (WAN). 
<br />
<br />Most LANs connect workstations and personal computers. Each node (individual computer ) in a LAN has its own CPU with which it executes programs, but it also is able to access data and devices anywhere on the LAN. This means that many users can share expensive devices, such as laser printers, as well as data. Users can also use the LAN to communicate with each other, by sending e-mail or engaging in chat sessions.<br /><br /><b>Local</b><br />In networks, local refers to files, devices, and other resources at your workstation. Resources located at other nodes on the networks are remote.<br /><br /><b>MAC address</b><br />MAC address (Media access control address) is a 6-byte hexadecimal address that a manufacturer assigns to the Ethernet controller for a port. Higher-layer protocols use the MAC address at the MAC sublayer of the Data Link layer (Layer 2) to access the physical media. The MAC function determines the use of network capacity and the stations that are allowed to use the medium for transmission.<br /><br /><b>Network</b><br />Network is a group of two or more computer systems linked together. There are many types of computer networks, including: 
<br />LANs (local-area networks), WANs (wide-area networks), CANs (campus-area networks), MANs (metropolitan-area networks) and HANs (home-area networks).
<br />
<br />In addition to these types, the following characteristics are also used to categorize different types of networks: Topology, protocol and architecture.<br /><br /><b>Packet</b><br />A packet is the unit of data that is routed between an origin and a destination on the Internet or any other packet-switched network. When any file (e-mail message, HTML file, Graphics Interchange Format file, Uniform Resource Locator request, and so forth) is sent from one place to another on the Internet, the Transmission Control Protocol (TCP) layer of TCP/IP divides the file into "chunks" of an efficient size for routing. Each of these packets is separately numbered and includes the Internet address of the destination. The individual packets for a given file may travel different routes through the Internet. When they have all arrived, they are reassembled into the original file (by the TCP layer at the receiving end). <br /><br /><b>RARP</b><br />RARP (Reverse Address Resolution Protocol) is a TCP/IP protocol that permits a physical address, such as an Ethernet address, to be translated into an IP address. Hosts such as diskless workstations often only know their hardware interface addresses, or MAC address, when booted but not their IP addresses. They must discover their IP addresses from an external source, usually a RARP server.<br /><br /><b>Router</b><br />A device that forwards data packets along networks. A router is connected to at least two networks, commonly two LANs or WANs or a LAN and its ISP network. Routers are located at gateways, the places where two or more networks connect. 
<br />
<br />Routers use headers and forwarding tables to determine the best path for forwarding the packets, and they use protocols such as ICMP to communicate with each other and configure the best route between any two hosts.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>Token Ring</b><br />Token Ring is a local area network (LAN) access method developed by IBM. Conforming to the IEEE 802.5 standard, Token Ring uses a token ring access method and connects up to 255 nodes in a star topology at 4, 16 or 100 Mbps. All stations connect to a central wiring hub called the "Multistation Access Unit" (MAU) using twisted wire cable.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc903.html">RFC 903</a>] A Reverse Address Resolution Protocol.
                		  </div>
		  
</section>

