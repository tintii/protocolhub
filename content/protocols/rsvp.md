---
id: protocol-rsvp
slug: rsvp
name: RSVP
expandedName: Resource Reservation Protocol
origin: historical
provenance:
  source: protocols/protocol_RSVP.htm
  sha256: 279af9f3756477dec78aaeccc56da0ad03ac282f2157bc17bc0754b89673752b
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Resource Reservation Protocol
layers:
  - Network Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Resource Reservation Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Network Layer
  - label: Related protocols
    html: >-
      IP,<br />IPv4,<br />TCP,<br />UDP,<br />ICMP,<br />SNMP,<br />FTP,<br />TELNET,<br />SMTP,<br />ARP,<br />RARP,<br
      />RPC,<br />XDR,<br />NFS
originalUpdate: '2005-12-06 14:50:39'
rfcs:
  - 2205
  - 2750
related:
  - protocol-ip
  - protocol-tcp
  - protocol-udp
  - protocol-icmp
  - protocol-snmp
  - protocol-ftp
  - protocol-telnet
  - protocol-smtp
  - protocol-arp
  - protocol-rarp
  - protocol-rpc
  - protocol-nfs
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

			RSVP is a Resource ReSerVation setup Protocol designed for an integrated services Internet. It is used by a host to request specific qualities of service from the network for particular application data streams or flows. RSVP is also used by routers to deliver quality-of-service (QoS) requests to all nodes along the path(s) of the flows and to establish and maintain state to provide the requested service. RSVP requests will generally result in resources being reserved in each node along the data path.
<br />
<br />RSVP requests resources for simplex flows, i.e., it requests resources in only one direction. Therefore, RSVP treats a sender as logically distinct from a receiver, although the same application process may act as both a sender and a receiver at the same time. RSVP operates on top of IPv4 or IPv6, occupying the place of a transport protocol in the protocol stack. However, RSVP does not transport application data but is rather an Internet control protocol, like ICMP, IGMP, or routing protocols. Like the implementations of routing and management protocols, an implementation of RSVP will typically execute in the background, not in the data forwarding path, as shown in Figure 1.
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">                        HOST                              ROUTER

           _____________________________       ____________________________
          |  _______                    |     |                            |
          | |       |   _______         |     |            _______         |
          | |Appli- |  |       |        |RSVP |           |       |        |
          | | cation|  | RSVP &lt;---------------------------&gt; RSVP  &lt;----------&gt;
          | |       &lt;--&gt;       |        |     | _______   |       |        |
          | |       |  |process|  _____ |     ||Routing|  |process|  _____ |
          | |_._____|  |       --&gt;Polcy||     ||       &lt;--&gt;       --&gt;Polcy||
          |   |        |__.__._| |Cntrl||     ||process|  |__.__._| |Cntrl||
          |   |data       |  |   |_____||     ||__.____|     |  |   |_____||
          |===|===========|==|==========|     |===|==========|==|==========|
          |   |   --------|  |    _____ |     |   |  --------|  |    _____ |
          |   |  |        |  ----&gt;Admis||     |   |  |       |  ----&gt;Admis||
          |  _V__V_    ___V____  |Cntrl||     |  _V__V_    __V_____ |Cntrl||
          | |      |  |        | |_____||     | |      |  |        ||_____||
          | |Class-|  | Packet |        |     | |Class-|  | Packet |       |
          | | ifier|==&gt;Schedulr|================&gt; ifier|==&gt;Schedulr|===========&gt;
          | |______|  |________|        |data | |______|  |________|       |data
          |                             |     |                            |
          |_____________________________|     |____________________________|

                  Figure 1: RSVP in Hosts and Routers</pre>
<br />
<br />RSVP has the following attributes:
<br /><ul><li>RSVP makes resource reservations for both unicast and many-to-many multicast applications, adapting dynamically to changing group membership as well as to changing routes.<br /><br /></li>

<li>RSVP is simplex, i.e., it makes reservations for unidirectional data flows.<br /><br /></li>

<li>RSVP is receiver-oriented, i.e., the receiver of a data flow initiates and maintains the resource reservation used for that flow.<br /><br /></li>

<li>RSVP maintains soft state in routers and hosts, providing graceful support for dynamic membership changes and automatic adaptation to routing changes.<br /><br /></li>

<li>RSVP is not a routing protocol but depends upon present and future routing protocols.<br /><br /></li>

<li>RSVP transports and maintains traffic control and policy control parameters that are opaque to RSVP.<br /><br /></li>

<li>RSVP provides several reservation models or styles (defined below) to fit a variety of applications.<br /><br /></li>

<li>RSVP provides transparent operation through routers that do not support it.<br /><br /></li>

<li>RSVP supports both IPv4 and IPv6.</li></ul>
<br /><hr />
<br /><b>Header format</b>
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>4</p></td><td><p>8</p></td><td><p>16</p></td><td><p>32 bits</p></td></tr><tr><td><p>Ver</p></td><td><p>Flags</p></td><td><p>Message type</p></td><td><p>RSVP checksum</p></td></tr><tr><td colspan="2"><p>Send TTL</p></td><td><p>(Reserved)</p></td><td><p>RSVP length</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Version</b>
<br />The protocol version number, this is version 1.<br /><br /></li>

<li><b>Flags</b>
<br />No flag bits are defined yet.<br /><br /></li>

<li><b>Message type</b>
<br />Possible values are:<br /><br /></li>

<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>1</td><td>Path.</td></tr><tr><td>2</td><td>Resv.</td></tr><tr><td>3</td><td>PathErr.</td></tr><tr><td>4</td><td>ResvErr.</td></tr><tr><td>5</td><td>PathTear.</td></tr><tr><td>6</td><td>ResvTear.</td></tr><tr><td>7</td><td>ResvConf.</td></tr></tbody></table></div></div><br /></li>
<li><b>RSVP checksum</b>
<br />The checksum.<br /><br /></li>

<li><b>Send TTL</b>
<br />The IP TTL value with which the message was sent.<br /><br /></li>

<li><b>RSVP length</b>
<br />The total length of the RSVP message in bytes, including the common header and the variable length objects that follow.</li></ul>
<br />
<br /><b>RSVP Messages</b>
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 2" tabindex="0">       Previous       Incoming           Outgoing             Next
       Hops           Interfaces         Interfaces           Hops

       _____             _____________________                _____
      |     | data --&gt;  |                     |  data --&gt;    |     |
      |  A  |-----------| a                 c |--------------|  C  |
      |_____| Path --&gt;  |                     |  Path --&gt;    |_____|
              &lt;-- Resv  |                     |  &lt;-- Resv     _____
       _____            |       ROUTER        |           |  |     |
      |     |  |        |                     |           |--|  D  |
      |  B  |--| data--&gt;|                     |  data --&gt; |  |_____|
      |_____|  |--------| b                 d |-----------|
               | Path--&gt;|                     |  Path --&gt; |   _____
       _____   | &lt;--Resv|_____________________|  &lt;-- Resv |  |     |
      |     |  |                                          |--|  D' |
      |  B' |--|                                          |  |_____|
      |_____|  |                                          |</pre>
<br />Each data flow arrives from a previous ho" through a corresponding incoming interface and departs through one or more outgoing interface. The same interface may act in both the incoming and outgoing roles for different data flows in the same session. Multiple previous hops and/or next hops may be reached through a given physical interface; for example, the figure implies that D and D' are connected to (d) with a broadcast LAN.
<br />
<br />There are two fundamental RSVP message types
<br /><ul><li><b>Resv.</b>
<br />Each receiver host sends RSVP reservation request (Resv) messages upstream towards the senders. These messages must follow exactly the reverse of the path(s) the data packets will use, upstream to all the sender hosts included in the sender selection. They create and maintain "reservation state" in each node along the path(s). Resv messages must finally be delivered to the sender hosts themselves, so that the hosts can set up appropriate traffic control parameters for the first hop. <br /><br /></li>

<li><b>Path</b>
<br />Each RSVP sender host transmits RSVP Path messages downstream along the uni-/multicast routes provided by the routing protocol, following the paths of the data. These Path messages store path state in each node along the way. This path state includes at least the unicast IP address of the previous hop node, which is used to route the Resv messages hop-by-hop in the reverse direction.</li></ul>
<br /><hr />
<br /><b>RSVP Data Flows Process</b>
<br />Unlike routing protocols, RSVP is designed to manage flows of data rather than make decisions for each individual datagram. Data flows consist of discrete sessions between specific source and destination machines. A session is more specifically defined as a simplex flow of datagrams to a particular destination and transport layer protocol. Thus, sessions are identified by the following data: destination address, protocol ID, and destination port. RSVP supports both unicast and multicast simplex sessions.
<br />
<br />A multicast session sends a copy of each datagram transmitted by a single sender to multiple destinations. A unicast session features a single source and destination machine. An RSVP source and destination address can correspond to a unique Internet host. A single host, however, can contain multiple logical senders and receivers distinguished by port numbers, with each port number corresponding to a different application. Given that RSVP tracks such application-specific information, it is possible for a unicast session to result in data being forwarded to multiple applications within the same destination host.
<br />
<br /><b>RSVP Reservation Style</b>
<br />Reservation style refers to a set of control options that specify a number of supported parameters. RSVP supports two major classes of reservation: distinct reservations and shared reservations. Distinct reservations install a flow for each relevant sender in each session. A shared reservation is used by a set of senders that are known not to interfere with each other. Figure 43-2 illustrates distinct and shared RSVP reservation-style types in the context of their scope. Each supported reservation style/scope combination is described following the illustration.
<br />
<br /><ul><li><b>Wildcard-Filter (WF) Style</b>
<br />The WF style implies the options: "shared" reservation and "wildcard" sender selection. Thus, a WF-style reservation creates a single reservation shared by flows from all upstream senders. This reservation may be thought of as a shared "pipe", whose "size" is the largest of the resource requests from all receivers, independent of the number of senders using it. A WF-style reservation is propagated upstream towards all sender hosts, and it automatically extends to new senders as they appear.
<br />
<br /></li><li><b>Fixed-Filter (FF) Style</b>
<br />The FF style implies the options: "distinct" reservations and "explicit" sender selection. Thus, an elementary FF-style reservation request creates a distinct reservation for data packets from a particular sender, not sharing them with other senders' packets for the same session.<br /><br /></li>

<li><b>Shared Explicit (SE) Style</b>
<br />The SE style implies the options: "shared" reservation and "explicit" sender selection. Thus, an SE-style reservation creates a single reservation shared by selected upstream senders. Unlike the WF style, the SE style allows a receiver to explicitly specify the set of senders to be included.</li></ul>
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
<td class="MapParent" aria-label="Parent layer protocols">IP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>RSVP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Data stream</b><br />In telecommunications, a data stream is a sequence of digitally encoded coherent signals (packets of data or datapackets) used to transmit or receive information that is in transmission.<br /><br /><b>Datagram</b><br />A datagram is a self-contained, independent entity of data carrying sufficient information to be routed from the source to the destination computer without reliance on earlier exchanges between this source and destination computer and the transporting network.
<br /> 	
<br />The term has been generally replaced by the term packet. Datagrams or packets are the message units that the Internet Protocol deals with and that the Internet transports. A datagram or packet needs to be self-contained without reliance on earlier exchanges because there is no connection of fixed duration between the two communicating points as there is, for example, in most voice telephone conversations.<br /><br /><b>Flowspec</b><br />Defines the QoS to be provided for a flow. The flowspec is used to set parameters in the packet scheduling function to provide the requested quality of service. A flowspec is carried in a FLOWSPEC object. The flowspec format is opaque to RSVP and is defined by the Integrated Services Working Group.<br /><br /><b>Host</b><br />Host is a computer system that is accessed by a user working at a remote location. Typically, the term is used when there are two computer systems connected by modems and telephone lines. The system that contains the data is called the host, while the computer at which the user sits is called the remote terminal. 
<br />
<br />Host can refer to a computer that is connected to a TCP/IP network, including the Internet. Each host has a unique IP address. 
<br />
<br />Host can refer to provide the infrastructure for a computer service too. For example, there are many companies that host Web servers. This means that they provide the hardware, software, and communications lines required by the server, but the content on the server may be controlled by someone else.<br /><br /><b>ICMP</b><br />Internet Control Message Protocol, an extension to the Internet Protocol (IP). ICMP supports packets containing error, control, and informational messages. The PING command, for example, uses ICMP to test an Internet connection.<br /><br /><b>IGMP</b><br />Internet Group Management Protocol is used to establish host memberships in particular multicast groups on a single network. The mechanisms of the protocol allow a host to inform its local router, using Host Membership Reports, that it wants to receive messages addressed to a specific multicast group.<br /><br /><b>IPv4</b><br />IPv4 is version 4 of the Internet Protocol (IP). It was the first version of the Internet Protocol to be widely deployed, and forms the basis for most of the current Internet. IPv4 uses 32-bit addresses, limiting it to 4,294,967,296 unique addresses, many of which are reserved for special purposes such as local networks or multicast addresses, reducing the number of addresses that can be allocated as public Internet addresses.<br /><br /><b>IPv6</b><br />IPv6 is designed as an evolutionary upgrade to the Internet Protocol and will, in fact, coexist with the older IPv4 for some time. IPv6 is designed to allow the Internet to grow steadily, both in terms of the number of hosts connected and the total amount of data traffic transmitted.<br /><br /><b>Incoming interface</b><br />The interface on which data packets are expected to arrive, and on which Resv messages are sent.<br /><br /><b>Interface</b><br />Interface is the connection between a router and one of its attached networks. An interface has state information associated with it, which is obtained from the underlying lower level protocols and the routing protocol itself. An interface to a network has associated with it a single IP address and mask (unless the network is an unnumbered point-to-point network). An interface is sometimes also referred to as a link.<br /><br /><b>Internet</b><br />A global network connecting millions of computers. More than 100 countries are linked into exchanges of data, news and opinions. 
<br />
<br />Unlike online services, which are centrally controlled, the Internet is decentralized by design. Each Internet computer, called a host, is independent. Its operators can choose which Internet services to use and which local services to make available to the global Internet community. Remarkably, this anarchy by design works exceedingly well. 
<br />
<br />There are a variety of ways to access the Internet. Most online services, such as America Online, offer access to some Internet services. It is also possible to gain access through a commercial Internet Service Provider (ISP).<br /><br /><b>Network</b><br />Network is a group of two or more computer systems linked together. There are many types of computer networks, including: 
<br />LANs (local-area networks), WANs (wide-area networks), CANs (campus-area networks), MANs (metropolitan-area networks) and HANs (home-area networks).
<br />
<br />In addition to these types, the following characteristics are also used to categorize different types of networks: Topology, protocol and architecture.<br /><br /><b>Object</b><br />Object is an element of an RSVP control message; a type, length, value triplet.<br /><br /><b>Outgoing interface</b><br />Interface through which data packets and Path messages are forwarded.<br /><br /><b>Path</b><br />The route taken by the SCTP packets sent by one SCTP endpoint to a specific destination transport address of its peer SCTP endpoint. Sending to different destination transport addresses does not necessarily guarantee getting separate paths.<br /><br /><b>Policy control</b><br />Policy control is a function that determines whether a new request for quality of service has administrative permission to make the requested reservation. Policy control may also perform accounting (usage feedback) for a reservation.<br /><br /><b>Previous hop</b><br />Previous hop is the previous router in the direction of traffic flow. Resv messages flow towards previous hops.<br /><br /><b>Process</b><br />(n) An executing program. The term is used loosely as a synonym of task. 
<br />(v) To perform some useful operations on data.<br /><br /><b>QoS</b><br />QoS (Quality of Service) refers to the capability of a network to provide better service to selected network traffic over various technologies, including Frame Relay, Asynchronous Transfer Mode (ATM), Ethernet and 802.1 networks, SONET, and IP-routed networks that may use any or all of these underlying technologies.<br /><br /><b>RSVP</b><br />RSVP (Resource Reservation Setup Protocol) is a new Internet protocol being developed to enable the Internet to support specified Qualities-of-Service (QoS's). Using RSVP, an application will be able to reserve resources along a route from source to destination.<br /><br /><b>Reservation state</b><br />Information kept in RSVP-capable nodes about successful RSVP reservation requests.<br /><br /><b>Reservation style</b><br />Reservation style describes a set of attributes for a reservation, including the sharing attributes and sender selection attributes.<br /><br /><b>Router</b><br />A device that forwards data packets along networks. A router is connected to at least two networks, commonly two LANs or WANs or a LAN and its ISP network. Routers are located at gateways, the places where two or more networks connect. 
<br />
<br />Routers use headers and forwarding tables to determine the best path for forwarding the packets, and they use protocols such as ICMP to communicate with each other and configure the best route between any two hosts.<br /><br /><b>Session</b><br />The session of activity that a user with a unique IP address spends on a Web site during a specified period of time. The number of user sessions on a site is used in measuring the amount of traffic a Web site gets. The site administrator determines what the time frame of a user session will be (e.g., 30 minutes).
<br />
<br />If the visitor comes back to the site within that time period, it is still considered one user session because any number of visits within that 30 minutes will only count as one session. If the visitor returns to the site after the allotted time period has expired, say an hour from the initial visit, then it is counted as a separate user session.<br /><br /><b>Traffic control</b><br />The entire set of machinery in the node that supplies requested QoS to data streams. Traffic control includes packet classifier, packet scheduler, and admission control functions<br /><br /><b>WF style</b><br />WF style (Wildcard Filter reservation style) has wildcard sender selection and shared attributes.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2205.html">RFC 2205</a>] Resource ReSerVation Protocol (RSVP) -- Version 1 Functional Specification
[<a href="https://www.rfc-editor.org/rfc/rfc2750.html">RFC 2750</a>] RSVP Extensions for Policy Control
                		  </div>
		  
</section>

