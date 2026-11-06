---
id: protocol-pptp
slug: pptp
name: PPTP
expandedName: Point-to-Point Tunneling Protocol
origin: historical
provenance:
  source: protocols/protocol_PPTP.htm
  sha256: 3899799be90b552497241ac7b6479f87bedbba8c327e087bed0f765efed9b50f
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Point-to-Point Tunneling Protocol
layers:
  - Data Link Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Point-to-Point Tunneling Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Data Link Layer
  - label: Type
    html: Application layer tunneling protocol
  - label: Ports
    html: 1723 (TCP) control
  - label: Related protocols
    html: 'PPP,<br />L2TP,<br />L2F,<br />GRE'
originalUpdate: '2006-01-12 17:20:37'
rfcs:
  - 2637
related:
  - protocol-ppp
  - protocol-l2tp
  - protocol-gre
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

			Designed as an extension of PPP, PPTP encapsulates PPP packets into IP datagrams for transmission over the Internet or other public TCP/IP based networks. PPTP (Point to Point Tunneling Protocol) allows PPP to be channeled through an IP network. It uses a client - server architecture to decouple functions which exist in current Network Access Servers and support Virtual Private Networks. It specifies a call-control and management protocol which allows the server to control access for dial-in circuit switched calls originating from a PSTN or ISDN, or to initiate outbound circuit switched connections. PPTP uses a GRE-like (Generic Routing Encapsulation) mechanism to provide a flow - and congestion-controlled encapsulated datagram service for carrying PPP packets.
<br />
<br />There are two parallel components of PPTP:
<br /><ul><li><b>Control connection overview</b>
<br />Before PPP tunneling can occur between a PAC and PNS, a control connection must be established between them. The control connection is a standard TCP session over which PPTP call control and management information is passed. <br /><br /></li>

<li><b>Tunnel protocol overview</b>
<br />PPTP requires the establishment of a tunnel for each communicating PNS-PAC pair. This tunnel is used to carry all user session PPP packets for sessions involving a given PNS-PAC pair. A key which is present in the GRE header indicates which session a particular PPP packet belongs to.</li></ul>
<br /><hr />
<br /><b>Message Format and Protocol Extensibility</b>
<br />PPTP defines a set of messages sent as TCP data on the control connection between a PNS and a given PAC. The TCP session for the control connection is established by initiating a TCP connection to port 1723. The source port is assigned to any unused port number.
<br />
<br />Each PPTP Control Connection message begins with an 8 octet fixed header portion. This fixed header contains the following: the total length of the message, the PPTP Message Type indicator, and a "Magic Cookie".
<br />
<br /><b>PPTP header</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>16</p></td><td><p>32 bits</p></td></tr><tr><td><p>Length</p></td><td><p>PPTP message type</p></td></tr><tr><td colspan="2"><p>Magic cookie</p></td></tr></tbody></table></div></div>
<br />
<br /><ul><li><b>Length</b>
<br />Total length in octets of this PPTP message including the entire PPTP header.<br /><br /></li>

<li><b>PPTP message type</b>
<br />The message type. Possible values are:<br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>1</td><td>Control message.</td></tr><tr><td>2</td><td>Management message.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Magic cookie</b>
<br />The magic cookie is always sent as the constant 0x1A2B3C4D. Its basic purpose is to allow the receiver to ensure that it is properly synchronized with the TCP data stream.<br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td>Code</td><td>Control Message</td></tr><tr><td colspan="2">Control Connection Management</td></tr><tr><td>1</td><td>Start-Control-Connection-Request</td></tr><tr><td>2</td><td>Start-Control-Connection-Reply</td></tr><tr><td>3</td><td>Stop-Control-Connection-Request</td></tr><tr><td>4</td><td>Stop-Control-Connection-Reply</td></tr><tr><td>5</td><td>Echo-Request</td></tr><tr><td>6</td><td>Echo-Reply</td></tr><tr><td colspan="2">Call Management</td></tr><tr><td>7</td><td>Outgoing-Call-Request</td></tr><tr><td>8</td><td>Outgoing-Call-Reply</td></tr><tr><td>9</td><td>Incoming-Call-Request</td></tr><tr><td>10</td><td>Incoming-Call-Reply</td></tr><tr><td>11</td><td>Incoming-Call-Connected</td></tr><tr><td>12</td><td>Call-Clear-Request</td></tr><tr><td>13</td><td>Call-Disconnect-Notify</td></tr><tr><td colspan="2">Error Reporting</td></tr><tr><td>14</td><td>WAN-Error-Notify</td></tr><tr><td colspan="2">PPP Session Control</td></tr><tr><td>15</td><td>Set-Link-Info</td></tr></tbody></table></div></div></li></ul>
<br /><hr />
<br /><b>Control connection protocol specification</b>
<br />Control connection messages are used to establish and clear user sessions. The first set of control connection messages are used to maintain the control connection itself. The control connection is initiated by either the PNS or PAC after they establish the underlying TCP connection. The procedure and configuration information required to determine which TCP connections are established is not covered by this protocol.
<br />
<br />The following control connection messages are all sent as user data on the established TCP connection between a given PNS-PAC pair. Note that care has been taken to ensure that all word (2 octet) and longword (4 octet) values begin on appropriate boundaries. All data is sent in network order (high order octets first). Any "reserved" fields MUST be sent as 0 values to allow for protocol extensibility.
<br />
<br /><b>Control connection protocol operation</b>
<br />This section describes the operation of various PPTP control connection functions and the control connection messages which are used to support them. The protocol operation of the control connection is simplified because TCP is used to provide a reliable transport mechanism. Ordering and retransmission of messages is not a concern at this level. The TCP connection itself, however, can close at any time and an appropriate error recovery mechanism must be provided to handle this case.
<br />
<br />Some error recovery procedures are common to all states of the control connection. If an expected reply does not arrive within 60 seconds, the control connection is closed, unless otherwise specified. Appropriate logging should be implemented for easy determination of the problems and the reasons for closing the control connection.
<br />
<br />Receipt of an invalid or malformed Control Connection message should be logged appropriately, and the control connection should be closed and restarted to ensure recovery into a known state.
<br /><ul><li><b>Control Connection States</b>
<br />The control connection relies on a standard TCP connection for its service. The PPTP control connection protocol is not distinguishable between the PNS and PAC, but is distinguishable between the originator and receiver. The originating peer is the one which first attempts the TCP open. Since either PAC or PNS may originate a connection, it is possible for a TCP collision to occur.<br /><br /></li>

<li><b>Call States</b>
<br /><ul><li><b>Timing considerations</b>
<br />Because of the real-time nature of telephone signaling, both the PNS and PAC should be implemented with multi-threaded architectures such that messages related to multiple calls are not serialized and blocked. The transit delay between the PAC and PNS should not exceed one second. The call and connection state figures do not specify exceptions caused by timers. The implicit assumption is that since the TCP-based control connection is being verified with keep-alives, there is less need to maintain strict timers for call control messages.<br /><br /></li>

<li><b>Timing considerations</b>
<br />Because of the real-time nature of telephone signaling, both the PNS and PAC should be implemented with multi-threaded architectures such that messages related to multiple calls are not serialized and blocked. The transit delay between the PAC and PNS should not exceed one second. The call and connection state figures do not specify exceptions caused by timers. The implicit assumption is that since the TCP-based control connection is being verified with keep-alives, there is less need to maintain strict timers for call control messages.<br /><br /></li>

<li><b>Incoming Calls</b>
<br />An Incoming-Call-Request message is generated by the PAC when an associated telephone line rings. The PAC selects a Call ID and serial number and indicates the call bearer type. Modems should always indicate analog call type. ISDN calls should indicate digital when unrestricted digital service or rate adaption is used and analog if digital modems are involved. Dialing number, dialed number, and subaddress may be included in the message if they are available from the telephone network.<br /><br /></li>

<li><b>Outgoing Calls</b>
<br />Outgoing messages are initiated by a PNS and instruct a PAC to place a call on a telco interface. There are only two messages for outgoing calls: Outgoing-Call-Request and Outgoing-Call-Reply. The PNS sends an Outgoing-Call-Request specifying the dialed party phone number and subaddress as well as speed and window parameters. The PAC MUST respond to the Outgoing-Call-Request message with an Outgoing-Call- Reply message once the PAC determines that:
<br />The call has been successfully connected.</li></ul></li></ul>
<br />
<br /><b>Tunnel Protocol Operation</b>
<br />The user data carried by the PPTP protocol are PPP data packets. PPP packets are carried between the PAC and PNS, encapsulated in GRE packets which in turn are carried over IP. The encapsulated PPP  packets are essentially PPP data packets less any media specific framing elements. No HDLC flags, bit insertion, control characters, or control character escapes are included. No CRCs are sent through the tunnel.
<br />
<br /><ul><li><b>Enhanced GRE header</b>
<br />The GRE header used in PPTP is enhanced slightly from that specified in the current GRE protocol specification. The main difference involves the definition of a new Acknowledgment Number field, used to determine if a particular GRE packet or set of packets has arrived at the remote end of the tunnel. This Acknowledgment capability is not used in conjunction with any retransmission of user data packets. It is used instead to determine the rate at which user data packets are to be transmitted over the tunnel for a given user session. The format of the enhanced GRE header is as follows:<br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td><p>1</p></td><td><p>2</p></td><td><p>3</p></td><td><p>4</p></td><td><p>5</p></td><td><p>8</p></td><td><p>9</p></td><td><p>13</p></td><td><p>16</p></td><td><p>32</p></td></tr><tr><td><p>C</p></td><td><p>R</p></td><td><p>K</p></td><td><p>S</p></td><td><p>s</p></td><td><p>Recur</p></td><td><p>A</p></td><td><p>Flags</p></td><td><p>Ver</p></td><td><p>Protocol Type</p></td></tr><tr><td colspan="9"><p>Key (HW) Payload Length</p></td><td><p>Key (LW) Call ID</p></td></tr><tr><td colspan="10"><p>Sequence Number (Optional)</p></td></tr><tr><td colspan="10"><p>Acknowledgment Number (Optional)</p></td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Sliding Window Protocol</b>
<br />The sliding window protocol used on the PPTP data path is used for flow control by each side of the data exchange. The enhanced GRE protocol allows packet acknowledgments to be piggybacked on data packets. Acknowledgments can also be sent separately from data packets. Again, the main purpose of the sliding window protocol is for flow control--retransmissions are not performed by the tunnel  peers.<br /><br /></li>

<li><b>Out-of-sequence Packets</b>
<br />Occasionally packets lose their sequencing across a complicated internetwork. Say, for example that a PNS sends packets 0 to 5 to a PAC. Because of rerouting in the internetwork, packet 4 arrives at the PAC before packet 3. The PAC acknowledges packet 4, and may assume packet 3 is lost. This acknowledgment grants window credit beyond packet 4.<br /><br /></li>

<li><b>Acknowledgment Time-Outs</b>
<br />PPTP uses sliding windows and time-outs to provide both user session flow-control across the internetwork and to perform efficient data buffering to keep the PAC-PNS data channels full without causing receive buffer overflow. PPTP requires that a time-out be used to recover from dropped data or acknowledgment packets. The exact implementation of the time-out is vendor-specific. It is suggested that an adaptive time-out be implemented with backoff for congestion control.</li></ul>
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
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>PPTP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Call</b><br />A connection or attempted connection between two terminal endpoints on a PSTN or ISDN - for example, a telephone call between two modems.<br /><br /><b>Datagram</b><br />A datagram is a self-contained, independent entity of data carrying sufficient information to be routed from the source to the destination computer without reliance on earlier exchanges between this source and destination computer and the transporting network.
<br /> 	
<br />The term has been generally replaced by the term packet. Datagrams or packets are the message units that the Internet Protocol deals with and that the Internet transports. A datagram or packet needs to be self-contained without reliance on earlier exchanges because there is no connection of fixed duration between the two communicating points as there is, for example, in most voice telephone conversations.<br /><br /><b>GRE</b><br />Generic Routing Encapsulation (GRE) is an internet based term applied to the encapsulation of IP datagrams tunneled through the internet. The encapsulation includes security, typically in the form of IPSec, and is most commonly found in VPN (Virtual Private Network) implementation.<br /><br /><b>IP</b><br />The IP (Internet Protocol) is a protocol which uses datagrams to communicate over a packet-switched network. IP specifies the format of packets, also called datagrams, and the addressing scheme. Most networks combine IP with a higher-level protocol called Transmission Control Protocol (TCP), which establishes a virtual connection between a destination and a source. 
<br />
<br />IP by itself is something like the postal system. It allows you to address a package and drop it in the system, but there's no direct link between you and the recipient. TCP/IP, on the other hand, establishes a connection between two hosts so that they can send messages back and forth for a period of time. 
<br />
<br />The current version of IP is IPv4. A new version, called IPv6 or IPng, is under development.<br /><br /><b>ISDN</b><br />ISDN (Integrated Services Digital Network), an international communications standard for sending voice, video, and data over digital telephone lines or normal telephone wires. ISDN supports data transfer rates of 64 Kbps (64,000 bits per second).<br /><br /><b>Internet</b><br />A global network connecting millions of computers. More than 100 countries are linked into exchanges of data, news and opinions. 
<br />
<br />Unlike online services, which are centrally controlled, the Internet is decentralized by design. Each Internet computer, called a host, is independent. Its operators can choose which Internet services to use and which local services to make available to the global Internet community. Remarkably, this anarchy by design works exceedingly well. 
<br />
<br />There are a variety of ways to access the Internet. Most online services, such as America Online, offer access to some Internet services. It is also possible to gain access through a commercial Internet Service Provider (ISP).<br /><br /><b>NAS</b><br />NAS (Netnews Administration System) is based on a database which contains information about certain groups and hierarchies. This database is structured in a hierarchical manner, distributed to various servers and is able to receive queries at any time.	The service is comparable to directory services like DNS, LDAP or	NIS. The NAS protocol is inspired by protocols like NNTP and SMTP. The port 991 is reserved for NAS and registered by the Internet Assigned Number Authority(IANA).<br /><br /><b>Network</b><br />Network is a group of two or more computer systems linked together. There are many types of computer networks, including: 
<br />LANs (local-area networks), WANs (wide-area networks), CANs (campus-area networks), MANs (metropolitan-area networks) and HANs (home-area networks).
<br />
<br />In addition to these types, the following characteristics are also used to categorize different types of networks: Topology, protocol and architecture.<br /><br /><b>PAC</b><br />PAC (PPTP Access Concentrator) is a device attached to one or more PSTN or ISDN lines capable of PPP operation and of handling the PPTP protocol. The PAC need only implement TCP/IP to pass traffic to one or more PNSs. It may also tunnel non-IP protocols.<br /><br /><b>PNS</b><br />A PNS (PPTP Network Server) is envisioned to operate on general-purpose computing/server platforms. The PNS handles the server side of the PPTP protocol. Since PPTP relies completely on TCP/IP and is independent of the interface hardware, the PNS may use any combination of IP interface hardware including LAN and WAN devices.<br /><br /><b>PPP</b><br />PPP(Point-to-Point Protocol) is a method of connecting a computer to the Internet. PPP is more stable than the older SLIP protocol and provides error checking features. Working in the data link layer of the OSI model, PPP sends the computer's TCP/IP packets to a server that puts them onto the Internet. <br /><br /><b>PPTP</b><br />Point-to-Point Tunneling Protocol (PPTP) is a new technology for creating Virtual Private Networks (VPNs) , developed jointly by Microsoft Corporation, U.S. Robotics, and several remote access vendor companies, known collectively as the PPTP Forum. A VPN is a private network of computers that uses the public Internet to connect some nodes. Because the Internet is essentially an open network, the Point-to-Point Tunneling Protocol (PPTP) is used to ensure that messages transmitted from one VPN node to another are secure. With PPTP, users can dial in to their corporate network via the Internet.<br /><br /><b>PSTN</b><br />PSTN (Public Switched Telephone Network), which refers to the international telephone system based on copper wires carrying analog voice data. This is in contrast to newer telephone networks base on digital technologies, such as ISDN and FDDI.<br /><br /><b>Session</b><br />The session of activity that a user with a unique IP address spends on a Web site during a specified period of time. The number of user sessions on a site is used in measuring the amount of traffic a Web site gets. The site administrator determines what the time frame of a user session will be (e.g., 30 minutes).
<br />
<br />If the visitor comes back to the site within that time period, it is still considered one user session because any number of visits within that 30 minutes will only count as one session. If the visitor returns to the site after the allotted time period has expired, say an hour from the initial visit, then it is counted as a separate user session.<br /><br /><b>TCP</b><br />TCP (Transmission Control Protocol) is one of the main protocols in TCP/IP networks. TCP is one of the main protocols in TCP/IP networks. Whereas the IP protocol deals only with packets, TCP enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and also guarantees that packets will be delivered in the same order in which they were sent.<br /><br /><b>TCP/IP</b><br />TCP/IP(transmission Control Protocol/Internet Protocol) is the suite of communications protocols used to connect hosts on the Internet. TCP/IP uses several protocols, the two main ones being TCP and IP. TCP/IP is built into the UNIX operating system and is used by the Internet, making it the de facto standard for transmitting data over networks. Even network operating systems that have their own protocols, such as Netware, also support TCP/IP.<br /><br /><b>Tunnel</b><br />A tunnel is defined by a PNS-PAC pair. The tunnel protocol is defined by a modified version of GRE. The tunnel carries PPP datagrams between the PAC and the PNS. Many sessions are multiplexed on a single tunnel. A control connection operating over TCP controls the establishment, release, and maintenance of sessions and of the tunnel itself.<br /><br /><b>VPN</b><br />VPN (virtual private network), a network that is constructed by using public wires to connect nodes. For example, there are a number of systems that enable you to create networks using the Internet as the medium for transporting data. These systems use encryption and other security mechanisms to ensure that only authorized users can access the network and that the data cannot be intercepted.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2637.html">RFC 2637</a>] Point-to-Point Tunneling Protocol (PPTP).
                		  </div>
		  
</section>

