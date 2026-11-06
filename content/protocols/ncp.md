---
id: protocol-ncp
slug: ncp
name: NCP
expandedName: NetWare Core Protocol
origin: historical
provenance:
  source: protocols/protocol_NCP.htm
  sha256: 54c0c2ac45fd5373b4c7b8962d13b1b69a14f1fe369987fcd19d5e3634ed0acb
  provider: 'Colasoft Co., Ltd.'
aliases:
  - NetWare Core Protocol
layers:
  - Application layer
  - Presentation layer
  - Session layer
suites:
  - Novell NetWare
summary:
  - label: Protocol
    html: NetWare Core Protocol
  - label: Protocol suite
    html: Novell NetWare
  - label: Layer
    html: |-
      Application layer
      <br />Presentation layer
      <br />Session layer
  - label: Related protocols
    html: 'IPX,<br />SPX,<br />RIP,<br />NLSP,<br />NCP,<br />NetWare'
originalUpdate: '2005-11-08 10:21:49'
rfcs: []
related:
  - protocol-ipx
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

			NCP is the principal protocol for transmitting information between a NetWare server and its clients. NCP handles login requests and many other types of requests to the file system and the printing system. IPX (Internetwork Packet Exchange) is the underlying protocol that carries NCP messages. NCP is a client/server LAN protocol. Workstations create NCP requests and use IPX to send them over the network. At the server, NCP requests are received, unpacked, and interpreted.
<br />
<br />NCP services include file access, file locking, security, tracking of resource allocation, event notification, synchronization with other servers, connection and communication, print services and queue management, and network management. 
<br />
<br />NCP uses the underlying Internetwork Packet Exchange Layer Services (IPX). More recent NetWare versions (after NetWare 5.0) can also use TCP/IP.
<br />
<br />Protocol Structure 
<br />Novell NCP: NetWare Core Protocol. The format of the NCP Request header is shown below.
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>8</p></td><td><p>16bit</p></td></tr><tr><td colspan="2"><p>Request type</p></td></tr><tr><td><p>Sequence number</p></td><td><p>Connection number low</p></td></tr><tr><td><p>Task number</p></td><td><p>Connection number high</p></td></tr><tr><td><p>Request code</p></td><td><p> </p></td></tr></tbody></table></div></div>
<br />
<br /><ul><li><b>Request type</b>
<br />Identifies the packet type: 
<br /><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>1111H</td><td>Allocate slot request</td></tr><tr><td>2222H</td><td>File server request</td></tr><tr><td>3333H</td><td>File server reply</td></tr><tr><td>5555H</td><td>Deallocate slot request</td></tr><tr><td>7777H</td><td>Burst mode packet (BMP)</td></tr><tr><td>9999H</td><td>Positive acknowledge</td></tr><tr><td>H</td><td>signifies hexadecimal notation</td></tr></tbody></table></div></div>
<br />
<br /></li><li><b>Sequence number</b>
<br />Number used by the workstation and file server to identify packets which are sent and received.<br /><br /></li>

<li><b>Connection number low</b> 
<br />Low byte, this field uniquely identifies a communications connection between the file server and a computer workstation.<br /><br /></li>

<li><b>Task number</b>
<br />Identifies a specific client task using the connection. When set to zero, the file server assumes all tasks have terminated and that all allocated resources can be released.<br /><br /></li>

<li><b>Connection number high</b>
<br />High Connection ID number assigned to the workstation. Used only on the 1000-user version of NetWare, on all other versions will be set to 0.<br /><br /></li>

<li><b>Request code</b> 
<br />Identifies the specific request function code.<br /><br /></li>

<li>The structure of the NCP Reply header is the same as the Request header, but the last 2 bytes differ after Connection Number High. 
<br /></li><li><ul><li><b>Completion code</b>
<br />The completion code indicates whether or not the Client¡¯s request was successful. A value of 0 in the Completion Code field indicates that the request was successful. Any other value indicates an error.<br /><br /></li>

<li><b>Connection status</b>
<br />The fourth bit in this byte will be set to 1 if DOWN is typed at the console prompt, to bring the server down.</li></ul></li></ul>
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
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/tline_l_top.gif" alt="" /><br />IPX<img src="/supporting/images/tline_l_bottom.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>NCP</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />Conn Req<br /><img src="/supporting/images/tline_r.gif" alt="" />Request<br /><img src="/supporting/images/tline_r.gif" alt="" />Reply<br /><img src="/supporting/images/tline_r.gif" alt="" />Destroy<br /><img src="/supporting/images/tline_r.gif" alt="" />Burst<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />Delay<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Access</b><br />(v.) 
<br />*To use. For example, programs can access memory , which means they read data from or write data to main memory. A user can access files, directories, computers, or peripheral devices. 
<br />*More specifically, access often means to read data from or write data to a mass storage device. The time it takes to locate a single byte of information on a mass-storage device is called the access time. 
<br />*To visit a Web site. 
<br />
<br />(n.)
<br /> *The act of reading data from or writing data to a storage device. 
<br />*A privilege to use computer information in some manner. For example, a user might be granted read access to a file, meaning that the user can read the file but cannot modify or delete it. Most operating systems have several different types of access privileges that can be granted or denied to specific users or groups of users. 
<br />*When capitalized as Access, short for Microsoft Access.<br /><br /><b>Client</b><br />Clinet is a program which requests services of another program. It is a client part of a client-server architecture. Typically, a client is an application that runs on a personal computer or workstation and relies on a server to perform some operations. For example, an e-mail client is an application that enables you to send and receive e-mail.<br /><br /><b>IPX</b><br />IPX(Internetwork Packet Exchange), a networking protocol used by the Novell NetWare operating systems. Like UDP/IP, IPX is a datagram protocol used for connectionless communications. Higher-level protocols, such as SPX and NCP, are used for additional error recovery services. <br /><br /><b>LAN</b><br />Local-area network (LAN) is a computer network that spans a relatively small area. Most LANs are confined to a single building or group of buildings. However, one LAN can be connected to other LANs over any distance via telephone lines and radio waves. A system of LANs connected in this way is called a wide-area network (WAN). 
<br />
<br />Most LANs connect workstations and personal computers. Each node (individual computer ) in a LAN has its own CPU with which it executes programs, but it also is able to access data and devices anywhere on the LAN. This means that many users can share expensive devices, such as laser printers, as well as data. Users can also use the LAN to communicate with each other, by sending e-mail or engaging in chat sessions.<br /><br /><b>Login</b><br />Alternative spellings for login are log in and log on.<br /><br /><b>NCP</b><br />NCP (Novell NetWare Core Protocol) manages access to the primary NetWare server resources. Used to establish and configure one or more network layer protocols that will be used by the link. Protocol field values in the range of 0x8XXX to 0xBXXX identify packets belonging to the associated Network Control Protocol.<br /><br /><b>NetWare</b><br />A local-area network (LAN) operating system developed by Novell Corporation. NetWare is a software product that runs on a variety of different types of LANs, from Ethernets to IBM token-ring networks. It provides users and programmers with a consistent interface that is independent of the actual hardware used to transmit messages.<br /><br /><b>Network</b><br />Network is a group of two or more computer systems linked together. There are many types of computer networks, including: 
<br />LANs (local-area networks), WANs (wide-area networks), CANs (campus-area networks), MANs (metropolitan-area networks) and HANs (home-area networks).
<br />
<br />In addition to these types, the following characteristics are also used to categorize different types of networks: Topology, protocol and architecture.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>TCP/IP</b><br />TCP/IP(transmission Control Protocol/Internet Protocol) is the suite of communications protocols used to connect hosts on the Internet. TCP/IP uses several protocols, the two main ones being TCP and IP. TCP/IP is built into the UNIX operating system and is used by the Internet, making it the de facto standard for transmitting data over networks. Even network operating systems that have their own protocols, such as Netware, also support TCP/IP.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			
                Chappell, Laura and Dan Hakes. Novell's Guide to NetWare LAN Analysis (First Edition). Sybex Inc. and Novell Press, 1993.
                Chappell, Laura and Dan Hakes. Novell's Guide to NetWare LAN Analysis (Second Edition). Sybex Inc. and Novell Press, 1994.
                Conner, Steve and Diane Conner. Programmer's Guide to the NetWare Core Protocol. Annabooks, Inc., 1996.
                		  </div>
		  
</section>

