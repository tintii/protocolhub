---
id: protocol-udp
slug: udp
name: UDP
expandedName: User Datagram Protocol
origin: historical
provenance:
  source: protocols/protocol_UDP.htm
  sha256: a7f1e0edf951e9755232b2d22f337d760f4c40ff8d1ca5aef98e5093a5ee18ab
  provider: 'Colasoft Co., Ltd.'
aliases:
  - User Datagram Protocol
layers:
  - Transport Layer
suites:
  - TCP/IP.
summary:
  - label: Protocol
    html: User Datagram Protocol
  - label: Protocol suite
    html: TCP/IP.
  - label: Layer
    html: Transport Layer
  - label: Type
    html: Connectionless transport protocol
  - label: SNMP MIBs
    html: |-
      iso.org.dod.internet.mgmt.mib-2.udp (1.3.6.1.2.1.7). 
      <br />iso.org.dod.internet.mgmt.mib-2.udpMIB (1.3.6.1.2.1.50)
      <br />
  - label: Ports
    html: Well known port numbers
  - label: Related protocols
    html: 'UDP-Lite,<br />Lightweight User Datagram Protocol'
originalUpdate: '2005-03-11 10:11:29'
rfcs:
  - 768
  - 1066
  - 1122
  - 1156
  - 1158
  - 1180
  - 1213
  - 1240
  - 1347
  - 1475
  - 1705
  - 1791
  - 1812
  - 1883
  - 2013
  - 2147
  - 2454
  - 2460
  - 2507
  - 2508
  - 2556
  - 2675
  - 2780
  - 3095
  - 3545
related: []
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

			UDP (User Datagram Protocol) is a communications protocol that offers a limited amount of service when messages are exchanged between computers in a network that uses the Internet Protocol (IP). UDP is an alternative to the Transmission Control Protocol (TCP) and, together with IP, is sometimes referred to as UDP/IP. Like the Transmission Control Protocol, UDP uses the Internet Protocol to actually get a data unit (called a datagram) from one computer to another. Unlike TCP, however, UDP does not provide the service of dividing a message into packets (datagrams) and reassembling it at the other end.
<br />
<br />UDP is defined to make available a datagram mode of packet-switched computer communication in the environment of an interconnected set of computer networks. The User Datagram Protocol offers only a minimal transport service -- non-guaranteed datagram delivery -- and gives applications direct access to the datagram service of the IP layer. UDP is used by applications that do not require the level of service of TCP or that wish to use communications services (e.g., multicast or broadcast delivery) not available from TCP. 
<br />
<br />UDP is almost a null protocol; the only services it provides over IP are checksumming of data and multiplexing by port number. Therefore, an application program running over UDP must deal directly with end-to-end communication problems that a connection-oriented protocol would have handled -- e.g., retransmission for reliable delivery, packetization and reassembly, flow control, congestion avoidance, etc., when these are required. The fairly complex coupling between IP and TCP will be mirrored in the coupling between UDP and many applications using UDP.
<br />
<br />UDP is the transport protocol for several well-known application-layer protocols, including Network File System (NFS), Simple Network Management Protocol (SNMP), Domain Name System (DNS), and Trivial File Transfer Protocol (TFTP).
<br />
<br />This protocol provides a procedure for application programs to send messages to other programs with a minimum of protocol mechanism. The protocol is transaction oriented, and delivery and duplicate protection re not guaranteed. Applications requiring ordered reliable delivery of streams of data should use the Transmission Control Protocol (TCP)
<br />
<br />UDP provides a simple, but unreliable message service for transaction-oriented services. Each UDP header carries both a source port identifier and destination port identifier, allowing high-level protocols to target specific applications and services among hosts. 
<br /><hr />
<br /><b>User Interface</b>
<br />A user interface should allow the creation of new receive ports, receive operations on the receive ports that return the data octets and an indication of source port and source address, and an operation that allows a datagram to be sent, specifying the data, source and destination ports and addresses to be sent.
<br />
<br /><b>IP Interface</b>
<br />The UDP module must be able to determine the source and destination internet addresses and the protocol field from the internet header.  One possible UDP/IP interface would return the whole internet datagram including all of the internet header in response to a receive operation.
<br />Such an interface would also allow the UDP to pass a full internet datagram complete with header to the IP to send.  The IP would verify certain fields for consistency and compute the internet header checksum.
<br />
<br /><b>UDP Application Programming Interface</b>
<br />It provides for: 
<br /><ul><li>The creation of new receive ports. 
<br /></li><li>Receive operation that returns the data bytes and an indication of source port and source IP address. 
<br /></li><li>Send operation that has as parameters the data, source and destination ports and addresses. 
<br /></li><li>The way this should be implemented is left to the discretion of each vendor. </li></ul>
<br />
<br />Be aware that UDP and IP do not provide guaranteed delivery, flow-control or error recovery, so these must be provided by the application. 
<br />Standard applications using UDP include: 
<br /><ul><li>Trivial File Transfer Protocol (TFTP) 
<br /></li><li>Domain Name System (DNS) name server 
<br /></li><li>Remote Procedure Call (RPC), used by the Network File System (NFS) 
<br /></li><li>Network Computing System (NCS) 
<br /></li><li>Simple Network Management Protocol (SNMP)</li></ul>
<br /><hr />
<br /><b>UDP Header</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>16 </p></td><td><p>32 bits </p></td></tr><tr><td><p>Source port </p></td><td><p>Destination port </p></td></tr><tr><td><p>Length </p></td><td><p>Checksum </p></td></tr><tr><td colspan="2"><p>Data</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Source port</b>
<br />16 bits. Source port is an optional field. When used, it indicates the port of the sending process and may be assumed to be the port to which a reply should be addressed in the absence of any other information. If not used, a value of zero is inserted.
<br />
<br /></li><li><b>Destination port</b><br /></li>
<li>16 bits. Destination port has a meaning within the context of a particular Internet destination address.
<br /><br /></li>
<li><b>Length</b><br /></li>
<li>16 bits. The length in octets of this user datagram, including this header and the data. The minimum value of the length is eight.
<br /><br /></li>
<li><b>Checksum</b><br /></li>
<li>16 bits. It complement of the one¡¯s complement sum of a pseudo header of information from the IP header, the UDP header and the data, padded with zero octets at the end (if necessary) to make a multiple of two octets. If the computed checksum is zero, then this field must be set to 0xFFFF.
<br /><br /></li>
<li>When transported by IPv4, the pseudo header contains the following fields:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>1</p></td><td><p>28</p></td><td><p>32 bits</p></td></tr><tr><td colspan="3"><p>Source IPv6 address</p></td></tr><tr><td colspan="3"><p>Destination IPv6 address</p></td></tr><tr><td colspan="3"><p>Upper layer packet length</p></td></tr><tr><td colspan="2"><p>0</p></td><td><p>Next header</p></td></tr></tbody></table></div></div><br /></li>
<li><b>Data</b><br /></li>
<li>Variable length. UDP data field.</li></ul>
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
<td class="MapParent" aria-label="Parent layer protocols">IP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>UDP</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />SSH<br /><img src="/supporting/images/tline_r.gif" alt="" />Kerberos<br /><img src="/supporting/images/tline_r.gif" alt="" />DNS<br /><img src="/supporting/images/tline_r.gif" alt="" />BOOTP<br /><img src="/supporting/images/tline_r.gif" alt="" />HTTPS<br /><img src="/supporting/images/tline_r.gif" alt="" />Timbuktu<br /><img src="/supporting/images/tline_r.gif" alt="" />RTSP<br /><img src="/supporting/images/tline_r.gif" alt="" />L2TP<br /><img src="/supporting/images/tline_r.gif" alt="" />CSO<br /><img src="/supporting/images/tline_r.gif" alt="" />NetBIOS<br /><img src="/supporting/images/tline_r.gif" alt="" />CMIP Agent<br /><img src="/supporting/images/tline_r.gif" alt="" />Retrospect<br /><img src="/supporting/images/tline_r.gif" alt="" />RLOGIN<br /><img src="/supporting/images/tline_r.gif" alt="" />RSH<br /><img src="/supporting/images/tline_r.gif" alt="" />WINS<br /><img src="/supporting/images/tline_r.gif" alt="" />MSN<br /><img src="/supporting/images/tline_r.gif" alt="" />NFS<br /><img src="/supporting/images/tline_r.gif" alt="" />RPC<br /><img src="/supporting/images/tline_r.gif" alt="" />Lotus Notes<br /><img src="/supporting/images/tline_r.gif" alt="" />FileMaker<br /><img src="/supporting/images/tline_r.gif" alt="" />AOL<br /><img src="/supporting/images/tline_r.gif" alt="" />CU-SeeMe<br /><img src="/supporting/images/tline_r.gif" alt="" />HTTP Proxy<br /><img src="/supporting/images/tline_r.gif" alt="" />CIFS<br /><img src="/supporting/images/tline_r.gif" alt="" />SQL<br /><img src="/supporting/images/tline_r.gif" alt="" />NCP<br /><img src="/supporting/images/tline_r.gif" alt="" />SLP<br /><img src="/supporting/images/tline_r.gif" alt="" />PPTP<br /><img src="/supporting/images/tline_r.gif" alt="" />SIP<br /><img src="/supporting/images/tline_r.gif" alt="" />MGCP<br /><img src="/supporting/images/tline_r.gif" alt="" />SAP<br /><img src="/supporting/images/tline_r.gif" alt="" />H.323<br /><img src="/supporting/images/tline_r.gif" alt="" />H.225<br /><img src="/supporting/images/tline_r.gif" alt="" />Citrix ICA<br /><img src="/supporting/images/tline_r.gif" alt="" />GTP<br /><img src="/supporting/images/tline_r.gif" alt="" />LDAP<br /><img src="/supporting/images/tline_r.gif" alt="" />GroupWise<br /><img src="/supporting/images/tline_r.gif" alt="" />BitTorrent<br /><img src="/supporting/images/tline_r.gif" alt="" />FSP<br /><img src="/supporting/images/tline_r.gif" alt="" />TFTP<br /><img src="/supporting/images/tline_r.gif" alt="" />HSRP<br /><img src="/supporting/images/tline_r.gif" alt="" />L2F<br /><img src="/supporting/images/tline_r.gif" alt="" />NTP<br /><img src="/supporting/images/tline_r.gif" alt="" />SNMP<br /><img src="/supporting/images/tline_r.gif" alt="" />SNMP Trap<br /><img src="/supporting/images/tline_r.gif" alt="" />RIP<br /><img src="/supporting/images/tline_r.gif" alt="" />RADIUS Accounting<br /><img src="/supporting/images/tline_r.gif" alt="" />RADIUS<br /><img src="/supporting/images/tline_r.gif" alt="" />ISAKMP<br /><img src="/supporting/images/tline_r.gif" alt="" />Mobile IP<br /><img src="/supporting/images/tline_r.gif" alt="" />BACnet<br /><img src="/supporting/images/tline_r.gif" alt="" />WTP + WSP<br /><img src="/supporting/images/tline_r.gif" alt="" />AppleTalk Tunnel<br /><img src="/supporting/images/tline_r.gif" alt="" />Megaco<br /><img src="/supporting/images/tline_r.gif" alt="" />RTP<br /><img src="/supporting/images/tline_r.gif" alt="" />RTCP<br /><img src="/supporting/images/tline_r.gif" alt="" />SSDP<br /><img src="/supporting/images/tline_r.gif" alt="" />Other<br /><img src="/supporting/images/tline_r.gif" alt="" />QQ<br /><img src="/supporting/images/tline_r.gif" alt="" />GDP<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />ICP<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>DNS</b><br />DNS(Domain Name System or Service or Server), an Internet service that translates domain names into IP addresses. Because domain names are alphabetic, they're easier to remember. The Internet however, is really based on IP addresses. Every time you use a domain name, therefore, a DNS service must translate the name into the corresponding IP address. For example, the domain name www.example.com might translate to 198.105.232.4. 
<br />
<br />The DNS system is, in fact, its own network. If one DNS server doesn't know how to translate a particular domain name, it asks another one, and so on, until the correct IP address is returned.<br /><br /><b>NCS</b><br />NCS(Network Computing System )is a set of software tools developed by Apollo Computer Inc. that conform to the Network Computing Architecture. These tools include the Remote Procedure Call runtime library and the Location Broker. NCS is the underlying communications protocol used by License Use Management to transmit licensing transactions between clients and servers. Messages are broadcast from clients to the NCS-managed network.<br /><br /><b>NFS</b><br />NFS (Network File System) is a client/server application designed by Sun Microsystems that allows all network users to access shared files stored on computers of different types. NFS provides access to shared files through an interface called the Virtual File System (VFS) that runs on top of TCP/IP. Users can manipulate shared files as if they were stored locally on the user's own hard disk. 
<br />
<br />With NFS, computers connected to a network operate as clients while accessing remote files, and as servers while providing remote users access to local shared files. The NFS standards are publicly available and widely used.<br /><br /><b>Name server</b><br />Name server is a program that translates names from one form into another. For example, the Internet relies on Domain Name Servers (DNSs) that translate domain names into IP adresses.<br /><br /><b>RPC</b><br />RPC(Remote Procedure Call), a type of protocol that allows a program on one computer to execute a program on a server computer. Using RPC, a system developer need not develop specific procedures for the server. The client program sends a message to the server with appropriate arguments and the server returns a message containing the results of the program executed. 
<br />
<br />Two newer object-oriented methods for programs to communicate with each other, CORBA and DCOM, provide the same types of capabilities as traditional RPCs.<br /><br /><b>SNMP</b><br />SNMP (Simple Network Management Protocol) is a set of protocols for managing complex networks. The first versions of SNMP were developed in the early 80s. SNMP works by sending messages, called protocol data units (PDUs), to different parts of a network. SNMP-compliant devices, called agents, store data about themselves in Management Information Bases (MIBs) and return this data to the SNMP requesters.<br /><br /><b>TFTP</b><br />TFTP(Trivial File Transfer Protocol) is a simple form of the File Transfer Protocol (FTP). TFTP uses the User Datagram Protocol (UDP)and provides no security features. It is often used by servers to boot diskless workstations, X-terminals, and routers. <br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[IEN 88] User Datagram Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc768.html">RFC 768</a>] User Datagram Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc1122.html">RFC 1122</a>] Requirements for Internet Hosts -- Communication Layers.
[<a href="https://www.rfc-editor.org/rfc/rfc1156.html">RFC 1156</a>] Management Information Base for Network Management of TCP/IP-based internets.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1066.html">RFC 1066</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1180.html">RFC 1180</a>] A TCP/IP Tutorial.
[<a href="https://www.rfc-editor.org/rfc/rfc1213.html">RFC 1213</a>] Management Information Base for Network Management of TCP/IP-based internets: MIB-II.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1158.html">RFC 1158</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1240.html">RFC 1240</a>] OSI Connectionless Transport Services on top of UDP Version: 1.
[<a href="https://www.rfc-editor.org/rfc/rfc1347.html">RFC 1347</a>] TCP and UDP with Bigger Addresses (TUBA), A Simple Proposal for Internet Addressing and Routing.
[<a href="https://www.rfc-editor.org/rfc/rfc1475.html">RFC 1475</a>] TP/IX: The Next Internet.
[<a href="https://www.rfc-editor.org/rfc/rfc1705.html">RFC 1705</a>] Six Virtual Inches to the Left: The Problem with IPng.
[<a href="https://www.rfc-editor.org/rfc/rfc1791.html">RFC 1791</a>] TCP And UDP Over IPX Networks With Fixed Path MTU.
[<a href="https://www.rfc-editor.org/rfc/rfc1812.html">RFC 1812</a>] Requirements for IP Version 4 Routers.
[<a href="https://www.rfc-editor.org/rfc/rfc2013.html">RFC 2013</a>] SNMPv2 Management Information Base for the User Datagram Protocol using SMIv2.
                Defines SNMP MIB iso.org.dod.internet.mgmt.mib-2.udpMIB (1.3.6.1.2.1.50). 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1213.html">RFC 1213</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2454.html">RFC 2454</a>] IP Version 6 Management Information Base for the User Datagram Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc2460.html">RFC 2460</a>] Internet Protocol, Version 6 (IPv6) Specification.
[<a href="https://www.rfc-editor.org/rfc/rfc2507.html">RFC 2507</a>] IP Header Compression.
[<a href="https://www.rfc-editor.org/rfc/rfc2508.html">RFC 2508</a>] Compressing IP/UDP/RTP Headers for Low-Speed Serial Links.
[<a href="https://www.rfc-editor.org/rfc/rfc2556.html">RFC 2556</a>] OSI connectionless transport services on top of UDP Applicability Statement for Historic Status. 
[<a href="https://www.rfc-editor.org/rfc/rfc2675.html">RFC 2675</a>] IPv6 Jumbograms.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2147.html">RFC 2147</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2780.html">RFC 2780</a>] IANA Allocation Guidelines For Values In the Internet Protocol and Related Headers.
[<a href="https://www.rfc-editor.org/rfc/rfc3095.html">RFC 3095</a>] RObust Header Compression (ROHC): Framework and four profiles: RTP, UDP, ESP, and uncompressed.
[<a href="https://www.rfc-editor.org/rfc/rfc3545.html">RFC 3545</a>] Enhanced Compressed RTP (CRTP) for Links with High Delay, Packet Loss and Reordering.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc1066.html">RFC 1066</a>] Management Information Base for Network Management of TCP/IP-based internets.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1156.html">RFC 1156</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2147.html">RFC 2147</a>] TCP and UDP over IPv6 Jumbograms.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2675.html">RFC 2675</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1883.html">RFC 1883</a>.
                		  </div>
		  
</section>

