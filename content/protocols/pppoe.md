---
id: protocol-pppoe
slug: pppoe
name: PPPoE
expandedName: PPP over Ethernet
origin: historical
provenance:
  source: protocols/protocol_PPPoE.htm
  sha256: 6d8611f8685bacea41dd0b2cd2ccf05f426989fbefb5b5cdb42f74cf34d3fbaf
  provider: 'Colasoft Co., Ltd.'
aliases:
  - PPP over Ethernet
layers:
  - Network layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: PPP over Ethernet
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Network layer
  - label: Type
    html: ' 0x8863 (Discovery Stage), 0x8864 (PPP Session Stage)'
  - label: Related protocols
    html: 'PPP,<br />Ethernet,<br />PPPoA'
originalUpdate: '2007-01-11 14:27:05'
rfcs:
  - 2516
  - 3817
related:
  - protocol-ppp
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

			PPP over Ethernet (PPPoE) provides the ability to connect a network of hosts over a simple bridging access device to a remote Access Concentrator. With this model, each host utilizes it's own PPP stack and the user is presented with a familiar user interface. Access control, billing and type of service can be done on a per-user, rather than a per-site, basis.
<br />
<br />To provide a point-to-point connection over Ethernet, each PPP session must learn the Ethernet address of the remote peer, as well as establish a unique session identifier. PPPoE includes a discovery protocol that provides this.
<br />
<br />PPPoE has two distinct stages. There is a Discovery stage and a PPP Session stage. When a host wishes to initiate a PPPoE session, it must first perform Discovery to identify the Ethernet MAC address of the peer and establish a PPPoE Session_ID. While PPP defines a peer-to-peer relationship, Discovery is inherently a client-server relationship. In the Discovery process, a host (the client) discovers an Access Concentrator (the server). Based on the network topology, there may be more than one Access Concentrator that the host can communicate with. The Discovery stage allows the host to discover all Access Concentrators and then select one. When Discovery completes successfully, both the host and the selected Access Concentrator have the information they will use to build their point-to-point connection over Ethernet.
<br />
<br />The Discovery stage remains stateless until a PPP session is established. Once a PPP session is established, both the Host and the Access Concentrator must allocate the resources for a PPP virtual interface.
<br />
<br /><b>PPPoE header</b>
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>4</p></td><td><p>8</p></td><td><p>16</p></td><td><p>32 bit</p></td></tr><tr><td><p>Ver</p></td><td><p>Type</p></td><td><p>Code</p></td><td><p>Session-ID</p></td></tr><tr><td colspan="3"><p>Length</p></td><td><p>Payload</p></td></tr></tbody></table></div></div>
<br />
<br /><ul><li><b>Ver</b>
<br />version of PPPOE MUST be set to 0x1. <br /><br /></li>

<li><b>Type</b>
<br />MUST be set to 0x1. <br /><br /></li>

<li><b>Code</b>
<br />is defined below for the Discovery and PPP Session stages.<br /><br /></li>

<li><b>Session_ID</b>
<br />t is an unsigned value in network byte order. It's value is defined below for Discovery packets. The value is fixed for a given PPP session and, in fact, defines a PPP session along with the Ethernet SOURCE_ADDR and DESTINATION_ADDR. A value of 0xffff is reserved for future use and MUST NOT be used. <br /><br /></li>

<li><b>Length</b>
<br />The value, in network byte order, indicates the length of the PPPoE payload. It does not include the length of the Ethernet or PPPoE headers.</li></ul>
<br /><hr />
<br /><b>Discovery Stage</b>
<br />There are four steps to the Discovery stage. When it completes, both peers know the PPPoE Session_ID and the peer's Ethernet address, which together define the PPPoE session uniquely. The steps consist of the host broadcasting an Initiation packet, one or more Access Concentrators sending offer packets, the host sending a unicast Session Request packet and the selected Access Concentrator sending a confirmation packet. When the host receives the confirmation packet, it may proceed to the PPP Session Stage. When the Access Concentrator sends the confirmation packet, it may proceed to the PPP Session Stage.
<br />
<br />All Discovery Ethernet frames have the Ether_Type field set to the value 0x8863.
<br />
<br />The PPPoE payload contains zero or more TAGs. A TAG is a TLV (type - length-value) construct and is defined as follows:
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>16</p></td><td><p>32 bit</p></td></tr><tr><td><p>TAG_TYPE</p></td><td><p>TAG_LENGTH</p></td></tr><tr><td colspan="2"><p>TAG_VALUE</p></td></tr></tbody></table></div></div>
<br />
<br /><ul><li><b>TAG_TYPE</b>
<br />TAG_TYPE is a sixteen bit field in network byte order. <br /><br /></li>

<li><b>TAG_LENGTH</b>
<br />TAG_LENGTH is a sixteen bit field. It is an unsigned number in network byte order, indicating the length in octets of the TAG_VALUE.
<br />
<br />If a discovery packet is received with a TAG of unknown TAG_TYPE, the TAG must be ignored unless otherwise specified in this document. This provides for backwards compatibility if/when new TAGs are added. If new mandatory TAGs are added, the version number will be incremented.<br /><br /></li>

<li><b>TAG_TYPES and TAG_VALUES</b>
<br />0x0000 End-Of-List
<br />This TAG indicates that there are no further TAGs in the list. The TAG_LENGTH of this TAG MUST always be zero. Use of this TAG is not required, but remains for backwards compatibility.<br /></li>
<li><ul><li><b>0x0101 Service-Name</b>
<br />This TAG ind icates that a service name follows.  The TAG_VALUE is an UTF-8 string that is NOT NULL terminated. When the TAG_LENGTH is zero this TAG is used to indicate that any service is acceptable. Examples of the use of the Service-Name TAG are to indicate an ISP name or a class or quality of service.<br /><br /></li>

<li><b>0x0102 AC-Name</b>
<br />This TAG indicates that a string follows which uniquely identifies this particular Access Concentrator unit from all others. It may be a combination of trademark, model, and serial id information, or simply an UTF-8 rendition of the MAC address of the box. It is not NULL terminated.<br /><br /></li>

<li><b>0x0103 Host-Uniq</b>
<br />This TAG is used by a Host to uniquely associate an Access Concentrator response (PADO or PADS) to a particular Host request (PADI or PADR). The TAG_VALUE is binary data of any value and length that the Host chooses. It is not interpreted by the Access Concentrator. The Host MAY include a Host-Uniq TAG in a PADI or PADR. If the Access Concentrator receives this TAG, it MUST include the TAG unmodified in the associated PADO or PADS response.<br /><br /></li>

<li><b>0x0104 AC-Cookie</b>
<br />This TAG is used by the Access Concentrator to aid in protecting against denial of service attacks. The Access Concentrator MAY include this TAG in a PADO packet. If a Host receives this TAG, it MUST return the TAG unmodified in the following PADR. The TAG_VALUE is binary data of any value and length and is not interpreted by the Host.<br /><br /></li>

<li><b>0x0105 Vendor-Specific</b>
<br />This TAG is used to pass vendor proprietary information. The first four octets of the TAG_VALUE contain the vendor id and the remainder is unspecified. The high-order octet of the vendor id is 0 and the low-order 3 octets are the SMI Network Management Private Enterprise Code of the Vendor in network byte order.
<br />
<br />Use of this TAG is NOT RECOMMENDED. To ensure inter-operability, an implementation MAY silently ignore a Vendor-Specific TAG.<br /><br /></li>

<li><b>0x0110 Relay-Session-Id</b>
<br />This TAG MAY be added to any discovery packet by an intermediate agent that is relaying traffic. The TAG_VALUE is opaque to both the Host and the Access Concentrator. If either the Host or Access Concentrator receives this TAG they must include it unmodified in any discovery packet they send as a response. All PADI packets must guarantee sufficient room for the addition of a Relay-Session-Id TAG with a TAG_VALUE length of 12 octets.
<br />
<br />A Relay-Session-Id TAG must not be added if the discovery packet already contains one. In that case the intermediate agent should use the existing Relay-Session-Id TAG. If it can not use the existing TAG or there is insufficient room to add a Relay - Session-Id TAG, then it SHOULD return a Generic-Error TAG to the sender.<br /><br /></li>

<li><b>0x0201 Service-Name-Error</b>
<br />This TAG (typically with a zero-length data section) indicates that for one reason or another, the requested Service-Name request could not be honored.
<br />
<br />If there is data, and the first octet of the data is nonzero, then it must be a printable UTF-8 string which explains why the request was denied. This string may not be NULL terminated.<br /><br /></li>

<li><b>0x0202 AC-System-Error</b>
<br />This TAG indicates that the Access Concentrator experienced some error in performing the Host request. (For example insufficient resources to create a virtual circuit.) It may be included in PADS packets.
<br />
<br />If there is data, and the first octet of the data is nonzero, then it must be a printable UTF-8 string which explains the nature of the error. This string may not be NULL terminated.<br /><br /></li>

<li><b>0x0203 Generic-Error</b>
<br />This TAG indicates an error.  It can be added to PADO, PADR or PADS packets when an unrecoverable error occurs and no other error TAG is appropriate. If there is data then it must be an UTF-8 string which explains the nature of the error. This string must not be NULL terminated.</li></ul></li></ul>
<br />
<br /><b>PPP Session Stage</b>
<br />Once the PPPoE session begins, PPP data is sent as in any other PPP encapsulation. All Ethernet packets are unicast. The Ether_Type field is set to 0x8864. The PPPoE code must be set to 0x00. The Session_ID must not change for that PPPoE session and must be the value assigned in the Discovery stage. The PPPoE payload contains a PPP frame. The frame begins with the PPP Protocol-ID.
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: Session Stage - PADI packet</b>

          0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                         0xffffffff                            |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |           0xffff              |        Host_mac_addr          |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                    Host_mac_addr (cont)                       |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |    ETHER_TYPE = 0x8863        | v = 1 | t = 1 |  CODE = 0x09  |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     SESSION_ID = 0x0000       |      LENGTH = 0x0004          |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |      TAG_TYPE = 0x0101        |    TAG_LENGTH = 0x0000        |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Session Stage - PADO packet</b>

                               1                   2                   3
           0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                         Host_mac_addr                         |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |      Host_mac_addr (cont)     | Access_Concentrator_mac_addr  |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |             Access_Concentrator_mac_addr (cont)               |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |    ETHER_TYPE = 0x8863        | v = 1 | t = 1 |  CODE = 0x07  |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     SESSION_ID = 0x0000       |      LENGTH = 0x0020          |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |      TAG_TYPE = 0x0101        |    TAG_LENGTH = 0x0000        |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |      TAG_TYPE = 0x0102        |    TAG_LENGTH = 0x0018        |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     0x47      |     0x6f      |     0x20      |     0x52      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     0x65      |     0x64      |     0x42      |     0x61      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     0x63      |     0x6b      |     0x20      |     0x2d      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     0x20      |     0x65      |     0x73      |     0x68      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     0x73      |     0x68      |     0x65      |     0x73      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     0x68      |     0x6f      |     0x6f      |     0x74      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: Session Stage - PPP LCP packet</b>

The PPP protocol value is shown (0xc021) but the PPP payload is left to the reader. 
This is a packet from the Host to the Access Concentrator.

                               1                   2                   3
           0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                  Access_Concentrator_mac_addr                 |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |Access_Concentrator_mac_addr(c)|        Host_mac_addr          |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                     Host_mac_addr (cont)                      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |    ETHER_TYPE = 0x8864        | v = 1 | t = 1 |  CODE = 0x00  |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     SESSION_ID = 0x1234       |      LENGTH = 0x????          |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |    PPP PROTOCOL = 0xc021      |        PPP payload            ~
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</pre>
<br />	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">Ethernet II<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>PPPoE</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Address</b><br />A location of data, usually in main memory or on a disk. You can think of computer memory as an array of storage boxes, each of which is one byte in length. Each box has an address (a unique number) assigned to it. By specifying a memory address, programmers can access a particular byte of data. Disks are divided into tracks and sectors, each of which has a unique address. Usually, you do not need to worry about addresses unless you are a programmer. 
<br />
<br />A name or token that identifies a network component. In local area networks (LANs), for example, every node has a unique address. On the Internet, every file has a unique address called a URL.<br /><br /><b>Client</b><br />Clinet is a program which requests services of another program. It is a client part of a client-server architecture. Typically, a client is an application that runs on a personal computer or workstation and relies on a server to perform some operations. For example, an e-mail client is an application that enables you to send and receive e-mail.<br /><br /><b>Concentrator</b><br />Concentrator is a type of multiplexor that combines multiple channels onto a single transmission medium in such a way that all the individual channels can be simultaneously active. For example, ISPs use concentrators to combine their dial-up modem connections onto faster T-1 lines that connect to the Internet. 
<br />
<br />Concentrators are also used in local-area networks (LANs) to combine transmissions from a cluster of nodes. In this case, the concentrator is often called a hub or MAU.<br /><br /><b>Ethernet</b><br />A local-area network (LAN) architecture developed by Xerox Corporation in cooperation with DEC and Intel in 1976. Ethernet uses a bus or star topology and supports data transfer rates of 10 Mbps. The Ethernet specification served as the basis for the IEEE 802.3 standard, which specifies the physical and lower software layers. Ethernet uses the CSMA/CD access method to handle simultaneous demands. It is one of the most widely implemented LAN standards. 
<br />
<br />A newer version of Ethernet, called 100Base-T (or Fast Ethernet), supports data transfer rates of 100 Mbps. And the newest version, Gigabit Ethernet supports data rates of 1 gigabit (1,000 megabits) per second.<br /><br /><b>Host</b><br />Host is a computer system that is accessed by a user working at a remote location. Typically, the term is used when there are two computer systems connected by modems and telephone lines. The system that contains the data is called the host, while the computer at which the user sits is called the remote terminal. 
<br />
<br />Host can refer to a computer that is connected to a TCP/IP network, including the Internet. Each host has a unique IP address. 
<br />
<br />Host can refer to provide the infrastructure for a computer service too. For example, there are many companies that host Web servers. This means that they provide the hardware, software, and communications lines required by the server, but the content on the server may be controlled by someone else.<br /><br /><b>MAC address</b><br />MAC address (Media access control address) is a 6-byte hexadecimal address that a manufacturer assigns to the Ethernet controller for a port. Higher-layer protocols use the MAC address at the MAC sublayer of the Data Link layer (Layer 2) to access the physical media. The MAC function determines the use of network capacity and the stations that are allowed to use the medium for transmission.<br /><br /><b>PPP</b><br />PPP(Point-to-Point Protocol) is a method of connecting a computer to the Internet. PPP is more stable than the older SLIP protocol and provides error checking features. Working in the data link layer of the OSI model, PPP sends the computer's TCP/IP packets to a server that puts them onto the Internet. <br /><br /><b>PPPoE</b><br />Point-to-Point Protocol over Ethernet (PPPoE) relies on two widely accepted standards: PPP and Ethernet. PPPoE is a specification for connecting the users on an Ethernet to the Internet through a common broadband medium, such as a single DSL line, wireless device or cable modem. All the users over the Ethernet share a common connection, so the Ethernet principles supporting multiple users in a LAN combine with the principles of PPP, which apply to serial connections.<br /><br /><b>Payload</b><br />Payload or mission bit stream is the data, such as a data field, block, or stream, being processed or transported ¡ª the part that represents user information and user overhead information. It may include user-requested additional information, such as network management and accounting information. Note that the payload does not include system overhead information for the processing or transportation system.<br /><br /><b>Remote</b><br />In networks, remote refers to files, devices, and other resources that are not connected directly to your workstation. Resources at your workstation are considered local.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>Session</b><br />The session of activity that a user with a unique IP address spends on a Web site during a specified period of time. The number of user sessions on a site is used in measuring the amount of traffic a Web site gets. The site administrator determines what the time frame of a user session will be (e.g., 30 minutes).
<br />
<br />If the visitor comes back to the site within that time period, it is still considered one user session because any number of visits within that 30 minutes will only count as one session. If the visitor returns to the site after the allotted time period has expired, say an hour from the initial visit, then it is counted as a separate user session.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2516.html">RFC 2516</a>] A Method for Transmitting PPP Over Ethernet (PPPoE).
[<a href="https://www.rfc-editor.org/rfc/rfc3817.html">RFC 3817</a>] Layer 2 Tunneling Protocol (L2TP) Active Discovery Relay for PPP over Ethernet (PPPoE).
                Defines L2TP AVP attributes 55 (PPPoE Relay), 56 (PPPoE Relay Response Capability), 57(PPPoE Relay Forward Capability). 
                		  </div>
		  
</section>

