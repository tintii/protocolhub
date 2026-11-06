---
id: protocol-gtp
slug: gtp
name: GTP
expandedName: GPRS Tunneling Protocol
origin: historical
provenance:
  source: protocols/protocol_GTP.htm
  sha256: d080045eac312cf49733811ec14dd945f939d85abe9437f762e1a6039a831087
  provider: 'Colasoft Co., Ltd.'
aliases:
  - GPRS Tunneling Protocol
layers:
  - Network Layer
suites:
  - GPRS
summary:
  - label: Protocol
    html: GPRS Tunneling Protocol
  - label: Protocol suite
    html: GPRS
  - label: Layer
    html: Network Layer
originalUpdate: '2005-11-23 17:18:42'
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

			GTP (GPRS Tunneling Protocol) specifies a tunnel control and management protocol which allows the SGSN to provide GPRS network access for an MS. Signalling is used to create, modify and delete tunnels. In the transmission plane, GTP uses a tunneling mechanism to provide a service for carrying user data packets. The choice of path is dependent on whether the user data to be tunneled requires a reliable link or not. 
<br />
<br />The GTP protocol is implemented only by SGSNs and GGSNs. No other systems need to be aware of GTP. GPRS MSs are connected to a SGSN without being aware of GTP. It is assumed that there will be a many-to-many relationship between SGSNs and GGSNs. An SGSN may provide service to many GGSNs. A single GGSN may associate with many SGSNs to deliver traffic to a large number of geographically diverse mobile stations.
<br />
<br />GPRS Tunnelling Protocol is a IP based protocol used within GSM and UMTS networks. The GTP protocol is layered on top of UDP. There are in fact three separate protocols, GTP-C, GTP-U and GTP'. GTP-C is used within the GPRS core network for signalling between GPRS Support Nodes (GGSNs and SGSNs). This allows the SGSN to activate a session on the users behalf (PDP context activation), to deactivate the same session, to adjust quality of service parameters or to update a session for a subscriber who has just arrived from another SGSN. GTP-U is used for carrying user data within the GPRS core network and between the Radio Access Network and the core network. The user data transported can be packets in any of IPv4, IPv6 or PPP formats.
<br /><hr />
<br /><b>Header Format</b>
<br />The GTP header is a fixed format 20 octet header used for all GTP messages.
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>8</p></td><td><p>7</p></td><td><p>6</p></td><td><p>5</p></td><td><p>4</p></td><td><p>3</p></td><td><p>2</p></td><td><p>1</p></td><td><p>Octets</p></td></tr><tr><td colspan="3"><p>Version</p></td><td><p>PT</p></td><td colspan="3"><p>Spare " 1 1 1 "</p></td><td><p>SNN</p></td><td><p>1</p></td></tr><tr><td colspan="8"><p>Message type</p></td><td><p>2</p></td></tr><tr><td colspan="8"><p>Length</p></td><td><p>3-4</p></td></tr><tr><td colspan="8"><p>Sequence Number</p></td><td><p>5-6</p></td></tr><tr><td colspan="8"><p>Flow label</p></td><td><p>7-8</p></td></tr><tr><td colspan="8"><p>SNDCP N-PDULLC Number</p></td><td><p>9</p></td></tr><tr><td colspan="8"><p>Spare " 1 1 1 1 1 1 1 1 "</p></td><td><p>10</p></td></tr><tr><td colspan="8"><p>Spare " 1 1 1 1 1 1 1 1 "</p></td><td><p>11</p></td></tr><tr><td colspan="8"><p>Spare " 1 1 1 1 1 1 1 1 "</p></td><td><p>12</p></td></tr><tr><td colspan="8"><p>TID</p></td><td><p>13-20</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Version</b>
<br />Set to 0 to indicate the first version of GTP.<br /><br /></li>

<li><b>Reserved</b>
<br />Reserved bits for future use, set to 1.<br /><br /></li>

<li><b>LFN</b>
<br />Flag indicating whether the LLC frame number is included or not.<br /><br /></li>

<li><b>Message Type</b>
<br />Type of GTP message.<br /><br /></li>

<li><b>Length</b>
<br />Indicates the length in octets of the GTP message (G-PDU).<br /><br /></li>

<li><b>Sequence number</b>
<br />Transaction identity for signalling messages and an increasing sequence number for tunnelled T-PDUs.<br /><br /></li>

<li><b>Flow label</b>
<br />Identifies unambiguously a GTP flow.<br /><br /></li>

<li><b>LLC frame number</b>
<br />Used at the Inter SGSN Routing Update procedure to coordinate the data tranmsission on the link layer between the MS and the SGSN.<br /><br /></li>

<li><b>x</b>
<br />Spare bits x indicate the unused bits which are set to 0 by the sending side and are ignored by the receiving side.<br /><br /></li>

<li><b>FN</b>
<br />Continuation of LLC frame number.<br /><br /></li>

<li><b>TID</b>
<br />Tunnel identifier that points out MM and PDP contexts.The format of the TID is as follows:<br /><br /></li>

<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>8</p></td><td><p>7</p></td><td><p>6</p></td><td><p>5</p></td><td><p>4</p></td><td><p>3</p></td><td><p>2</p></td><td><p>1</p></td><td><p>Octets</p></td></tr><tr><td colspan="4"><p>MCC digit 2</p></td><td colspan="4"><p>MCC digit 1</p></td><td><p>1</p></td></tr><tr><td colspan="4"><p>MNC digit 1</p></td><td colspan="4"><p>MCC digit 3</p></td><td><p>2</p></td></tr><tr><td colspan="4"><p>MSIN digit 1</p></td><td colspan="4"><p>MNC digit 2</p></td><td><p>3</p></td></tr><tr><td colspan="4"><p>MSIN digit 3</p></td><td colspan="4"><p>MSIN digit 2</p></td><td><p>4</p></td></tr><tr><td colspan="4"><p>MSIN digit 5</p></td><td colspan="4"><p>MSIN digit 4</p></td><td><p>5</p></td></tr><tr><td colspan="4"><p>MSIN digit 7</p></td><td colspan="4"><p>MSIN digit 6</p></td><td><p>6</p></td></tr><tr><td colspan="4"><p>MSIN digit 9</p></td><td colspan="4"><p>MSIN digit 8</p></td><td><p>7</p></td></tr><tr><td colspan="4"><p>NSAPI</p></td><td colspan="4"><p>MSIN digit 10</p></td><td><p>8</p></td></tr></tbody></table></div></div><br /><br /></li>

<li><b>MCC, MNC, MSIN digits</b>
<br />Parts of the IMSI (defined in GMS 04.08).<br /><br /></li>

<li><b>NSAPI</b>
<br />Network service access point identifier.</li></ul>
<br />
<br /><b>General Features</b>
<br />All variants of GTP have certain features in common. The structure of the messages is the same, with a GTP header following the UDP header and containing the following fields
<br /><ul><li>version information and flags<br /></li>
<li>message type <br /></li>
<li>length <br /></li>
<li>tunnel end point identification </li></ul>
<br />
<br />These mandatory fields give a minimum length of 8 octets. depending whether any flags are present, these may be followed by sequence number, n-pdu number, next extension type and then by extension headers if needed.
<br />
<br />Apart from the common message structure, there is also a common mechanism for verifying connectivity from GSN to GSN. This uses two messages.
<br /><ul><li>echo request <br /></li>
<li>echo response </li></ul>
<br />
<br />As often as every 60 seconds, a GSN can send an echo request to each other GSN with which it has an active connection. If the other end does not respond it can be treated as down and active connections to it deleted.
<br />
<br />Apart from the two messages previously mentioned, there are no other messages common across all GTP variants meaning that, for the most part, they effectively form three completely separate protocols.
<br />
<br /><b>History</b>
<br />GTP was originally standardised within ETSI (GSM standard 09.60). With the creation of the UMTS standards this was moved over to the 3GPP which, as of 2005 maintains it as 3GPP standard 29.060. GTP' uses the same message format, but it's special uses are covered in standard 32.295 along with the standardised formats for the charging data it transfers.
<br />
<br />The original version of GTP (version 0) had considerable differences from the current version (version 1).
<br /><ul><li>the tunnel identification was non random <br /></li>
<li>options were provided for transporting X.25 <br /></li>
<li>the fixed port number 3386 was used for all functions (not just charging as in GTPv1) <br /></li>
<li>TCP was allowed as a transport option instead of UDP, but support for this was optional <br /></li>
<li>subscription related fields such as Quality of Service were more limited </li></ul>
<br />
<br />The non random TEID in version 0 represented a security problem if an attacker had access to any roaming partner's network, or could find some other way to remotely send packets to the GPRS backbone. Version 0 is going out of use and being replaced by version 1 in almost all networks. Even so, the standard for the newer version states that the older version must be supported by the GSN. Fortunately, however the use of different port numbers allows easy blocking of version 0 through simple IP access lists.
<br /><hr />
<br /><b>GTP-C - GTP Control</b>
<br />The GTP-C protocol is the control section of the GTP standard. When a subscriber requests a PDP context, the SGSN will send an Activate PDP Context GTP-C message to the GGSN giving details of the subscriber's request. The GGSN will then respond with an Activate PDP Context Response message which will either give details of the PDP context actually activated or will indicate a failure and give a reason for that failure.
<br />
<br /><b>GTP-U - GTP User Data Tunnelling</b>
<br />GTP-U is, in effect a relatively simple IP based tunnelling protocol which permits many tunnels between each set of end points. When used in the UMTS, each subscriber will have one or more tunnel, one for each PDP context they have active plus, possibly separate tunnels for specific connections with different Quality of service requirements.
<br />
<br />The separate tunnels are identified by a TEID (Tunnel Endpoint Identifier) in the GTP-U messages, which should be a dynamically allocated random number. If this random number is of cryptographic quality, then it will provide a measure of security against certain attacks. Even so, the requirement of the 3GPP standard is that all GTP traffic, including user data should be sent within secure private networks, not directly connected to the Internet.
<br />
<br /><b>GTP' - Charging Transfer</b>
<br />The GTP' (pronounced GTP prime) protocol is used to transfer charging data to the Charging Gateway Function. GTP' uses UDP port 3386.
<br />
<br /><b>Within in the GPRS Core Network</b>
<br />GTP is the primary protocol used in the GPRS core network it is the protocol which allows end users of a GSM or UMTS network to move from place to place whilst continuing to connect to the Internet as if from one location at the GGSN. It does this by carrying the subscriber's data from the subscriber's current SGSN to the GGSN which is handling the subscriber's session. Three forms of GTP are used by the GPRS core network.
<br /><ul><li>GTP-U for transfer of user data in separated tunnels for each PDP context <br /></li>
<li>GTP-C for control reasons including: <br /></li>
<li><ul><li>setup and deletion of PDP contexts 
<br /></li><li>verification of GSN reachability 
<br /></li><li>updates, e.g. as subscribers move from one SGSN to another. </li></ul><br /></li>
<li>GTP' for transfer of charging data from GSNs to the charging function. </li></ul>
<br />
<br />GGSNs and SGSNs (collectively known as GSNs) listen for GTP-C messages on UDP port 2123 and for GTP-U messages on port 2152. This communication happens within a single network or may, in the case of international roaming, happen internationally, probably across a GPRS Roaming Exchange (GRX).
<br />
<br />The "Charging Gateway Function" (CGF) listens to GTP' messages sent from the GSNs on UDP port 3386. The core network sends charging information to the CGF, typically including PDP context activation times and the quantity of data which the end user has transferred. However, this communication which occurs within one network is less standardised and may, depending on the vendor and configuration options, use proprietary encoding or even an entirely proprietary system.
<br />
<br /><b>Use on the IuPS interface</b>
<br />GTP-U is used on the IuPS between the GPRS core network and the Radio Access Network, however the GTP-C protocol is not used. In this case, RANAP is used as a control protocol and establishes GTP-U tunnels between the SGSN and the RNC.
<br />
<br /><b>GTP-U Protocol Stack</b> 
<br />All variations of GTP are transported over UDP.
<br />
<br />As of 2004 there are two versions defined, version 0 and version 1. Interestingly version 0 and version 1 are considerably different in structure. In version 0 the signalling protocol (the protocol which sets up the tunnels by activating the PDP context) is combined with the tunnelling protocol on one port. Version 1 is actually effectively two protocols, one for control (called GTP-C) and one for user data tunnelling (called GTP-U).
<br />
<br />GTP-U is also used to transport user data from the RNC to the SGSN in UMTS networks. However, in this case signalling is done using RANAP instead of GTP-C.
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
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>GTP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>3GPP</b><br />The 3GPP (3rd Generation Partnership Project) is a collaboration agreement that was established in December 1998. It's a co-operation between ETSI (Europe), ARIB/TTC (Japan), CCSA (China), ATIS (North America) and TTA (South Korea).<br /><br /><b>Access</b><br />(v.) 
<br />*To use. For example, programs can access memory , which means they read data from or write data to main memory. A user can access files, directories, computers, or peripheral devices. 
<br />*More specifically, access often means to read data from or write data to a mass storage device. The time it takes to locate a single byte of information on a mass-storage device is called the access time. 
<br />*To visit a Web site. 
<br />
<br />(n.)
<br /> *The act of reading data from or writing data to a storage device. 
<br />*A privilege to use computer information in some manner. For example, a user might be granted read access to a file, meaning that the user can read the file but cannot modify or delete it. Most operating systems have several different types of access privileges that can be granted or denied to specific users or groups of users. 
<br />*When capitalized as Access, short for Microsoft Access.<br /><br /><b>Data</b><br />* Distinct pieces of information, usually formatted in a special way. All software is divided into two general categories: data and programs. Programs are collections of instructions for manipulating data. Data can exist in a variety of forms -- as numbers or text on pieces of paper, as bits and bytes stored in electronic memory, or as facts stored in a person's mind. Strictly speaking, data is the plural of datum, a single piece of information. In practice, however, people use data as both the singular and plural form of the word. 
<br />
<br />* The term data is often used to distinguish binary machine-readable information from textual human-readable information. For example, some applications make a distinction between data files (files that contain binary data) and text files (files that contain ASCII data). 
<br />
<br />* In database management systems, data files are the files that store the database information, whereas other files, such as index files and data dictionaries, store administrative information, known as metadata.<br /><br /><b>ETSI</b><br />The ETSI (European Telecommunications Standards Institute) is a standardization organization of the telecommunications industry (equipment makers and network operators) in Europe, with worldwide projection. ETSI has been successful in standardizing the GSM cell phone system and the TETRA professional mobile radio system.<br /><br /><b>GGSN</b><br />The GGSN (Gateway GPRS Support Node) is the node which carries out the role in GPRS equivalent to the Home Agent in Mobile IP. It is a router which detunnels user data from GPRS Tunnelling Protocol and sends out normal user data IP packets.<br /><br /><b>GPRS</b><br />GPRS (General Packet Radio Service) is a mobile data service available to users of GSM mobile phones. It is often described as "2.5G", that is, a technology between the second (2G) and third (3G) generations of mobile telephony. It provides moderate speed data transfer, by using unused TDMA channels in the GSM network.<br /><br /><b>GPRS Core Network</b><br />The GPRS system is used by GSM Mobile phones, as of 2004 the most common mobile phone system in the world, for transmitting IP packets. The GPRS Core Network is the centralised part of the GPRS system and also provides support for UMTS based 3G networks. The GPRS core network is an integrated part of the GSM core network.<br /><br /><b>GSM</b><br />The GSM (Global System for Mobile Communications) is the most popular standard for mobile phones in the world. GSM phones are used by over a billion people across more than 200 countries. The ubiquity of the GSM standard makes international roaming very common between mobile phone operators which enables phone users to access their services in many other parts of the world as well as their own country.<br /><br /><b>GTP</b><br />GTP (GPRS Tunneling Protocol) creates a secure connection in the IP environment, by encapsulating encrypted data in an IP packet. GTP handles the flow of user packet data and signaling information between the SGSN and GGSN in a GPRS network.<br /><br /><b>IP</b><br />The IP (Internet Protocol) is a protocol which uses datagrams to communicate over a packet-switched network. IP specifies the format of packets, also called datagrams, and the addressing scheme. Most networks combine IP with a higher-level protocol called Transmission Control Protocol (TCP), which establishes a virtual connection between a destination and a source. 
<br />
<br />IP by itself is something like the postal system. It allows you to address a package and drop it in the system, but there's no direct link between you and the recipient. TCP/IP, on the other hand, establishes a connection between two hosts so that they can send messages back and forth for a period of time. 
<br />
<br />The current version of IP is IPv4. A new version, called IPv6 or IPng, is under development.<br /><br /><b>Network</b><br />Network is a group of two or more computer systems linked together. There are many types of computer networks, including: 
<br />LANs (local-area networks), WANs (wide-area networks), CANs (campus-area networks), MANs (metropolitan-area networks) and HANs (home-area networks).
<br />
<br />In addition to these types, the following characteristics are also used to categorize different types of networks: Topology, protocol and architecture.<br /><br /><b>Packet</b><br />A packet is the unit of data that is routed between an origin and a destination on the Internet or any other packet-switched network. When any file (e-mail message, HTML file, Graphics Interchange Format file, Uniform Resource Locator request, and so forth) is sent from one place to another on the Internet, the Transmission Control Protocol (TCP) layer of TCP/IP divides the file into "chunks" of an efficient size for routing. Each of these packets is separately numbered and includes the Internet address of the destination. The individual packets for a given file may travel different routes through the Internet. When they have all arrived, they are reassembled into the original file (by the TCP layer at the receiving end). <br /><br /><b>Path</b><br />The route taken by the SCTP packets sent by one SCTP endpoint to a specific destination transport address of its peer SCTP endpoint. Sending to different destination transport addresses does not necessarily guarantee getting separate paths.<br /><br /><b>Quality of service</b><br />In the fields of packet-switched networks and computer networking, the traffic engineering term Quality of Service (QoS) refers to the probability of the telecommunication network meeting a given traffic contract, or in many cases is used informally to refer the probability of a packet succeeding in passing between two points in the network.<br /><br /><b>RANAP</b><br />RANAP Radio Access Network Application Part) protocol is used in UMTS signaling between the Core Network, which can be a MSC or SGSN, and the UTRAN. RANAP is carried over Iu-interface.<br /><br /><b>RNC</b><br />The RNC (Radio Network Controller) is the governing element in the UMTS radio access network (UTRAN) responsible for control of the Node-Bs, that is to say the base stations which are connected to the controller. The RNC carries out radio resource management, some of the mobility management functions and is the point where encryption is done before user data is sent to and from the mobile.<br /><br /><b>SGSN</b><br />The SGSN (Serving GPRS Support Node) is the node which in some sense carries out the same function as the Local Agent in Mobile IP. However, an SGSN is actually considerably more complex since it also does the full set of interworking with the connected radio network. This means that the functions carried out by the SGSN vary quite considerably between GSM and UMTS.<br /><br /><b>Service</b><br />The NAS provides a service to the dial-in user, such as PPP or Telnet.<br /><br /><b>Tunnel</b><br />A tunnel is defined by a PNS-PAC pair. The tunnel protocol is defined by a modified version of GRE. The tunnel carries PPP datagrams between the PAC and the PNS. Many sessions are multiplexed on a single tunnel. A control connection operating over TCP controls the establishment, release, and maintenance of sessions and of the tunnel itself.<br /><br /><b>UDP</b><br />UDP (User Datagram Protocol) is a connectionless protocol that, like TCP, runs on top of IP networks. Unlike TCP/IP, UDP/IP provides very few error recovery services, offering instead a direct way to send and receive datagrams over an IP network. It's used primarily for broadcasting messages over a network.<br /><br /><b>UMTS</b><br />UMTS (Universal Mobile Telecommunications System) is one of the third-generation (3G) mobile phone technologies. It uses W-CDMA as the underlying standard, is standardized by the 3GPP, and represents the European/Japanese answer to the ITU IMT-2000 requirements for 3G Cellular radio systems.<br /><br /><b>User</b><br />User is an individual who uses a computer. This includes expert programmers as well as novices. An end user is any individual who runs an application program.<br /><br />			</div>
		  
</section>

