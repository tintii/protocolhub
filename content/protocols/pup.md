---
id: protocol-pup
slug: pup
name: PUP
expandedName: (Xerox) Parc Universal Packet
origin: historical
provenance:
  source: protocols/protocol_PUP.htm
  sha256: e9125e9563070b3ff5f13082befe22a1d2625813639b8f8477e3d8afe0ffb956
  provider: 'Colasoft Co., Ltd.'
aliases:
  - (Xerox) Parc Universal Packet
layers:
  - Transport Layer
suites:
  - Xerox
summary:
  - label: Protocol
    html: (Xerox) Parc Universal Packet
  - label: Protocol suite
    html: Xerox
  - label: Layer
    html: Transport Layer
originalUpdate: '2005-12-08 13:56:29'
rfcs: []
related: []
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

			PUP (PARC Universal Packet) was one of the two earliest internetwork protocol suites; it was created by researchers at Xerox PARC in the mid-1970s. (Technically, the name PUP only refers to the internetwork-level protocol, but it is also applied to the whole protocol suite.) The entire suite provided routing and packet delivery, as well as higher level functions such as a reliable byte stream, along with numerous applications.
<br />
<br />The origins of the PUP suite lie in two developments; in the same events in the early 1970s as the very earliest stage of the development of TCP/IP, and the creation of the Ethernet local area network at PARC. However, the development of PUP split off because Xerox PARC wished to move ahead with implementation, for in-house use. The fundamental design of the PUP suite was substantially complete by 1974.
<br />
<br />In the 1980s Xerox used PUP as the base for the Xerox Network Services (XNS) protocol suite; some of the protocols in the XNS suite (e.g. the Internetwork Datagram Protocol) were lightly modified versions of the ones in the PUP suite, but others are quite different, reflecting the experience gained with PUP.
<br /><hr />
<br /><b>Basic internetwork protocol</b>
<br />The main internetwork layer protocol was PUP, which roughly corresponds to the Internet Protocol (IP) layer in TCP/IP. A full PUP network address consisted of an 8-bit network number, an 8-bit host number, and a 16-bit socket number. The network number had a particular special value which meant 'this network', for use by hosts which did not (yet) know their network number.
<br />
<br />Unlike TCP/IP, socket fields were part of the full network address in the PUP header, so that upper-layer protocols did not need to implement their own demultiplexing; PUP also supplied packet types (again, unlike IP). Also, an optional 2-byte checksum covered the entire packet.
<br />
<br />PUP packets were up to 554 bytes long (including the 20 byte PUP header), and the checksum. This was a smaller packet size than IP, which requires all hosts to support at least 576 (but supports packets of up to 65K bytes, if the hosts support them); individual PUP host pairs on a particular network might use larger packets, but no PUP router was required to handle them. Unlike in IP, larger packets could be fragmented.
<br />
<br />A protocol named the Gateway Information Protocol (a remote ancestor of RIP) was used as both the routing protocol, and for hosts to discover routers.
<br />
<br />PUP also included a simple echo protocol at the internetwork layer, similar to IP's ping, but operating at a lower level.
<br />
<br /><b>Transport layer protocols</b>
<br />To establish a transport connection, two protocols came into play. The first, the Rendezvous and Termination Protocol (RTP), which was used to initiate communication between two entities, as well as manage and terminate the connection. The second was the primary transport layer protocol, Byte Stream Protocol (BSP), which was analogous to TCP.
<br />
<br />Once RTP had started the connection, BSP took over and managed the data transfer. Like TCP, BSP's semantics and operation were in terms of bytes; this was discarded in favour of packets for the equivalent protocol in XNS, Sequenced Packet Protocol.
<br />
<br /><b>Application protocols</b>
<br />PUP supported a large number of applications. Some of them, such as Telnet and File Transfer Protocol, were basically the same protocols as used on the ARPANET (much as occurred with the TCP/IP suite).
<br />
<br />Others were novel, including protocols for printer spooling, copying disk packs, page-level remote access to file servers, name lookup, remote management, etc (although some of these capabilities had been seen before, e.g. the ARPANET already made heavy use of remote management for controlling the Interface Message Processors which made it up).
<br />
<br /><b>Impact</b>
<br />In showing that internetworking ideas were feasible, in being influential in the early work on TCP/IP, and as the foundation for the later XNS protocols, PUP was very influential. However, its biggest impact was probably as a key component of the office of the future model first demonstrated at Xerox PARC; that demonstration would not have been anything like as powerful as it was without all the capabilities that a working internetwork provided.
<br />
<br />The Gateway Information Protocol's descendant, RIP, (somewhat modified to match the syntax of addresses of other protocol suites), remains in wide use today in other protocol suites. One version of RIP served as one of the initial so-called interior gateway protocols for the growing Internet, before the arrival of the more modern OSPF and IS-IS. It is still in use as an interior routing protocol, in small sites with simple requirements.
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
<td class="MapParent" aria-label="Parent layer protocols">IP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>PUP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>ARPANET</b><br />The Advanced Research Projects Agency Network (ARPANET) developed by ARPA of the U.S. Department of Defense was the world's first operational packet switching network, and the progenitor of the global Internet.<br /><br /><b>BSP</b><br />BSP (Business Services Provider) is an application service provider that focuses on providing and hosting applications related exclusively to business functions.<br /><br /><b>Bit</b><br />Bit (binary digit), the smallest unit of information on a machine, a leading statistician and adviser to five presidents. A single bit can hold only one of two values: 0 or 1. More meaningful information is obtained by combining consecutive bits into larger units. For example, a byte is composed of 8 consecutive bits.<br /><br /><b>Byte</b><br />Byte (binary term) is a unit of storage capable of holding a single character. On almost all modern computers, a byte is equal to 8 bits. Large amounts of memory are indicated in terms of kilobytes (1,024 bytes), megabytes (1,048,576 bytes), and gigabytes (1,073,741,824 bytes).<br /><br /><b>Ethernet</b><br />A local-area network (LAN) architecture developed by Xerox Corporation in cooperation with DEC and Intel in 1976. Ethernet uses a bus or star topology and supports data transfer rates of 10 Mbps. The Ethernet specification served as the basis for the IEEE 802.3 standard, which specifies the physical and lower software layers. Ethernet uses the CSMA/CD access method to handle simultaneous demands. It is one of the most widely implemented LAN standards. 
<br />
<br />A newer version of Ethernet, called 100Base-T (or Fast Ethernet), supports data transfer rates of 100 Mbps. And the newest version, Gigabit Ethernet supports data rates of 1 gigabit (1,000 megabits) per second.<br /><br /><b>FTP</b><br />FTP (File Transfer Protocol) is the protocol for exchanging files over the Internet. FTP works in the same way as HTTP for transferring Web pages from a server to a user's browser and SMTP for transferring electronic mail across the Internet in that, like these technologies, FTP uses the Internet's TCP/IP protocols to enable data transfer. 
<br />
<br />FTP is most commonly used to download a file from a server using the Internet or to upload a file to a server (e.g., uploading a Web page file to a server).<br /><br /><b>Gateway</b><br />A network device used to translate between two different protocols. Used to interconnect two networks that use incompatible protocols. It is a node on a network that serves as an entrance to another network. In enterprises, the gateway is the computer that routes the traffic from a workstation to the outside network that is serving the Web pages. In homes, the gateway is the ISP that connects the user to the internet. 
<br />
<br />In enterprises, the gateway node often acts as a proxy server and a firewall. The gateway is also associated with both a router, which use headers and forwarding tables to determine where packets are sent, and a switch, which provides the actual path for the packet in and out of the gateway.
<br />
<br />It is also a computer system located on earth that switches data signals and voice signals between satellites and terrestrial networks and an earlier term for router, though now obsolete in this sense as router is commonly used.<br /><br /><b>IP</b><br />The IP (Internet Protocol) is a protocol which uses datagrams to communicate over a packet-switched network. IP specifies the format of packets, also called datagrams, and the addressing scheme. Most networks combine IP with a higher-level protocol called Transmission Control Protocol (TCP), which establishes a virtual connection between a destination and a source. 
<br />
<br />IP by itself is something like the postal system. It allows you to address a package and drop it in the system, but there's no direct link between you and the recipient. TCP/IP, on the other hand, establishes a connection between two hosts so that they can send messages back and forth for a period of time. 
<br />
<br />The current version of IP is IPv4. A new version, called IPv6 or IPng, is under development.<br /><br /><b>IS-IS</b><br />IS-IS (Intermediate system to intermediate system) is a protocol used by network devices (routers) to determine the best way to forward datagrams or packets through a packet-based network, a process called routing.<br /><br /><b>Interface Message Processors</b><br />Interface Message Processor was the packet-switching node (actually a mini-computer with special-purpose interfaces) used to make up the ARPANET in the late 1960s and 1970s. To connect to the ARPANET, host computers connected to IMPs using a special high-speed bit-serial interface.<br /><br /><b>Internetworking</b><br />Internetworking involves connecting two or more distinct computer networks together into an internetwork (often shortened to internet), using devices called routers to connect them together, to allow traffic to flow back and forth between them. <br /><br /><b>LAN</b><br />Local-area network (LAN) is a computer network that spans a relatively small area. Most LANs are confined to a single building or group of buildings. However, one LAN can be connected to other LANs over any distance via telephone lines and radio waves. A system of LANs connected in this way is called a wide-area network (WAN). 
<br />
<br />Most LANs connect workstations and personal computers. Each node (individual computer ) in a LAN has its own CPU with which it executes programs, but it also is able to access data and devices anywhere on the LAN. This means that many users can share expensive devices, such as laser printers, as well as data. Users can also use the LAN to communicate with each other, by sending e-mail or engaging in chat sessions.<br /><br /><b>OSPF</b><br />OSPF is an interior gateway protocol which is used for routing within a group of routers. It uses link-state technology in which routers send each other information about the direct connections and links which they have to other routers.<br /><br /><b>Ping</b><br />A utility to determine whether a specific IP address is accessible. It works by sending a packet to the specified address and waiting for a reply. PING is used primarily to troubleshoot Internet connections. There are many freeware and shareware Ping utilities available for personal computers. 
<br />
<br />It is often believed that "Ping" is an abbreviation for Packet Internet Groper, but Ping's author has stated that the names comes from the sound that a sonar makes.<br /><br /><b>RIP</b><br />RIP (Routing Information Protocol) is an interior gateway protocol specifies how routers exchange routing table information. With RIP, routers periodically exchange entire tables. Because this is inefficient, RIP is gradually being replaced by a newer protocol called Open Shortest Path First (OSPF).<br /><br /><b>RTP</b><br />RTP (Real-Time Transport Protocol) is an Internet protocol for transmitting real-time data such as audio and video. RTP itself does not guarantee real-time delivery of data, but it does provide mechanisms for the sending and receiving applications to support streaming data. Typically, RTP runs on top of the UDP protocol, although the specification is general enough to support other transport protocols.<br /><br /><b>Reliable byte stream</b><br />Reliable byte stream is a byte stream in which the bytes which emerge from the communication channel at the recipient are exactly the same, and in the exact same order, as the sender inserted into the channel.<br /><br /><b>Router</b><br />A device that forwards data packets along networks. A router is connected to at least two networks, commonly two LANs or WANs or a LAN and its ISP network. Routers are located at gateways, the places where two or more networks connect. 
<br />
<br />Routers use headers and forwarding tables to determine the best path for forwarding the packets, and they use protocols such as ICMP to communicate with each other and configure the best route between any two hosts.<br /><br /><b>Routing</b><br />Routing is a means of discovering paths in computer networks along which information can be sent. Routing directs forwarding, the passing of logically addressed packets from their source toward their ultimate destination through intermediary nodes, called routers.<br /><br /><b>TCP/IP</b><br />TCP/IP(transmission Control Protocol/Internet Protocol) is the suite of communications protocols used to connect hosts on the Internet. TCP/IP uses several protocols, the two main ones being TCP and IP. TCP/IP is built into the UNIX operating system and is used by the Internet, making it the de facto standard for transmitting data over networks. Even network operating systems that have their own protocols, such as Netware, also support TCP/IP.<br /><br /><b>Telnet</b><br />Telnet is a terminal emulation program for TCP/IP networks such as the Internet. The Telnet program runs on your computer and connects your PC to a server on the network. You can then enter commands through the Telnet program and they will be executed as if you were entering them directly on the server console. This enables you to control the server and communicate with other servers on the network. To start a Telnet session, you must log in to a server by entering a valid username and password. Telnet is a common way to remotely control Web servers.<br /><br /><b>XNS</b><br />XNS (Xerox Network Services) was a protocol suite promulgated by Xerox, which provided routing and packet delivery, as well as higher level functions such as a reliable stream, and remote procedure calls.<br /><br /><b>Xerox</b><br />Xerox Corporation has also had a profound influence on the computer industry. Many of their inventions, such as the mouse and the graphical user interface (GUI), have since become commonplace. Xerox continues to do groundbreaking research, especially in the area of document management.<br /><br /><b>Xerox PARC</b><br />Xerox Palo Alto Research Center (PARC) was a flagship research division of the Xerox Corporation, based in Palo Alto, California, USA. It was founded in 1970, and spun out as a separate company in 2002. It is best known for essentially creating the modern personal computer graphical user interface (GUI) paradigm.<br /><br />			</div>
		  
</section>

