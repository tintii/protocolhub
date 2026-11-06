---
id: protocol-slp
slug: slp
name: SLP
expandedName: Service Location Protocol
origin: historical
provenance:
  source: protocols/protocol_SLP.htm
  sha256: 7643fd35721650c8fc7cd7d5c0a92ca77b7723b35849ee7035e91b5ac0984371
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Service Location Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Service Location Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: Application layer protocol
  - label: Multicast addresses
    html: 239.255.255.253 (Administratively Scoped SLP Multicast).
  - label: Ports
    html: |-
      427 (TCP, UDP)
      <br />1847 (TCP, UDP) notification
  - label: Related protocols
    html: 'TCP,<br />UDP,<br />DHCP'
  - label: URI
    html: service
  - label: Working groups
    html: 'Svrloc, Service Location Protocol.'
originalUpdate: '2005-11-10 16:22:39'
rfcs:
  - 2165
  - 2608
  - 2609
  - 2614
  - 2926
  - 3059
  - 3082
  - 3105
  - 3111
  - 3224
  - 3421
  - 3528
  - 3712
  - 3723
  - 3822
  - 3832
  - 4018
related:
  - protocol-tcp
  - protocol-udp
  - protocol-dhcp
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

			The Service Location Protocol (SLP) provides a scalable framework for the discovery and selection of network services. Using this protocol, computers using the Internet no longer need so much static configuration for network services for network-based applications. This is especially important as computers become more portable and users less tolerant or able to fulfill the demands of network system administration.
<br />
<br />Traditionally, users find services by using the name of a network host (a human readable text string) which is an alias for a network address. The Service Location Protocol eliminates the need for a user to know the name of a network host supporting a service. Rather, the user names the service and supplies a set of attributes which describe the service. The Service Location Protocol allows the user to bind this description to the network address of the service.
<br />
<br />Service Location provides a dynamic configuration mechanism for applications in local area networks. It is not a global resolution system for the entire Internet; rather it is intended to serve enterprise networks with shared services. Applications are modeled as clients that need to find servers attached to the enterprise network at a possibly distant location. For cases where there are many different clients and/or services available, the protocol is adapted to make use of nearby Directory Agents that offer a centralized repository for advertised services.
<br /><hr />
<br />The basic operation in Service Location is that a client attempts to discover the location of a Service. In smaller installations, each service will be configured to respond individually to each client. In larger installations, services will register their services with one or more Directory Agents, and clients will contact the Directory Agent to fulfill requests for Service Location information. Clients may discover the whereabouts of a Directory Agent by preconfiguration, DHC, or by issuing queries to the Directory Agent Discovery multicast address.
<br />
<br /><ul><li><b>Protocol Transactions</b>
<br />The diagram below illustrates the relationships described below:<br /><br /></li>

<li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">      +---------------+   we want this info:     +-----------+
      |  Application  | - - - - - - - - - - - -&gt; |  Service  |
      +---------------+                          +-----------+
           /|                                      |     |
            |                         +-------------+     |
            |                         |                   |
           |/                       |/                 |/
      +---------------+          +-----------+      +----------------+
      |   User Agent  |&lt;--------&gt;|  Service  |      |    Service     |
      +---------------+          |   Agent   |      | Agent which    |
            |                    +-----------+      | does not reply |
            |                         |             | to UA requests |
            |                        |/            +----------------+
            |                   +-------------+           |
            +------------------&gt;|  Directory  |&lt;----------+
                                |    Agent    |
                                +-------------+      ___________
                                     /|            / Many other
                                      +------------&gt;|   SA's    |
                                                    ___________/</pre><br /></li>
<li>The following describes the operations a User Agent would employ to find services on the site's network. The User Agent needs no configuration to begin network interaction. The User Agent can acquire information to construct predicates which describe the services that match the user's needs. The User Agent may build on the information received in earlier network requests to find the Service Agents advertising service information.
<br /><br /></li>
<li>A User Agent will operate two ways: 
<br /></li><li><ul><li>If the User Agent has already obtained the location of a Directory Agent, the User Agent will unicast a request to it in order to resolve a particular request. The Directory Agent will unicast a reply to the User Agent. The User Agent will retry a request to a Directory Agent until it gets a reply, so if the Directory Agent cannot service the request (say it has no information) it must return an response with zero values, possibly with an error code set.<br /><br /></li>

<li>If the User Agent does not have knowledge of a Directory Agent or if there are no Directory Agents available on the site network, a second mode of discovery may be used. The User Agent multicasts a request to the service-specific multicast address, to which the service it wishes to locate will respond. All the Service Agents which are listening to this multicast address will respond, provided they can satisfy the User Agent's request. A similar mechanism is used for Directory Agent discovery. Service Agents which have no information for the User Agent must not respond.</li></ul><br /><br /></li>

<li><b>Schemes</b>
<br />The Service Location Protocol, designed as a way for clients to access resources on the network, is a natural application for Universal Resource Locators (URLs). It is intended that by re-using URL specification and technology from the World Wide Web, clients and servers will be more flexible and able to be written using already existing code. Moreover, it is hoped that browsers will be written to take advantage of the similarity in locator format, so that a client can dynamically formulate requests for services that are resolved differently depending upon the circumstances.</li></ul>
<br /><hr />
<br /><b>SLP Header</b>
<br />The following header is used in all of the message descriptions below and is abbreviated by using "Service Location header =" followed by the function being used.
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>32 bit</p></td></tr><tr><td><p>Version</p></td><td><p>Function</p></td><td><p>Length</p></td></tr><tr><td><p>O M U A F rsvd</p></td><td><p>Dialect</p></td><td><p>Language Code</p></td></tr><tr><td colspan="2"><p>Char encoding</p></td><td><p>XID</p></td></tr></tbody></table></div></div>
<br />
<br /><ul><li><b>Version</b>
<br />The current version is version 1<br /><br /></li>

<li><b>Function</b>
<br />The function field describes the operation of the Service location datagram. The following message types exist:<br /><br /></li>

<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>Function</p></td><td><p>Message Type</p></td></tr><tr><td><p>1</p></td><td>Service Request</td></tr><tr><td><p>2</p></td><td>Service Reply</td></tr><tr><td><p>3</p></td><td>Service Registration</td></tr><tr><td><p>4</p></td><td>Service Deregister</td></tr><tr><td><p>5</p></td><td>Service Acknowledge</td></tr><tr><td><p>6</p></td><td>Attribute Request</td></tr><tr><td><p>7</p></td><td>Attribute Reply</td></tr><tr><td><p>8</p></td><td>DA Advertisement</td></tr><tr><td><p>9</p></td><td>Service Type Request</td></tr><tr><td><p>10</p></td><td>Service Type Reply</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Length</b>
<br />Number of bytes in the message including the Service location header. <br /><br /></li>

<li><b>O </b>
<br />The overflow bit. <br /><br /></li>

<li><b>M </b>
<br />The monolingual bit. <br /><br /></li>

<li><b>U </b>
<br />RL Authentication bit present. <br /><br /></li>

<li><b>A </b>
<br />Attribute authentication bit present. <br /><br /></li>

<li><b>F </b>
<br />If the F bit is set in a Service Acknowledgement, the directory agent has registered the service as a new entry.<br /><br /></li>

<li><b>Rsvd</b>
<br />These bits are reserved and must have a value of 0.<br /><br /></li>

<li><b>Dialect</b>
<br />To be use by future versions of the SLP. Must be set to zero.<br /><br /></li>

<li><b>Language Code</b>
<br />The language encoded in this field indicates the language in which the remainder of the message should be interpreted.<br /><br /></li>

<li><b>Character Encoding</b>
<br />The characters making up strings within the remainder of this message may be encoded in any standardized encoding.<br /><br /></li>

<li><b>Transaction Identifier (XID)</b>
<br />This field allows the requester to match replies to individual requests. Note that, whenever there is an Attribute Authentication block, there will also be a URL Authentication block.</li></ul>
<br />
<br /><b>SLP header version 2</b>
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td><p>8</p></td><td><p>9</p></td><td><p>10</p></td><td><p>11</p></td><td><p>16</p></td><td colspan="2"><p>32</p></td></tr><tr><td><p>Version</p></td><td colspan="4"><p>Function</p></td><td colspan="2"><p>Length</p></td></tr><tr><td><p>Length</p></td><td><p>O</p></td><td><p>F</p></td><td><p>R</p></td><td colspan="2"><p>reserved</p></td><td><p>Next Ext Offset</p></td></tr><tr><td colspan="5"><p>Next Ext Offset</p></td><td colspan="2"><p>XID</p></td></tr></tbody></table></div></div> 
<br />
<br /><ul><li><b>Version</b>
<br />Must be set to 2. Version of Service Location Protocol.<br /><br /></li>

<li><b>Function</b>
<br />Same as in version 1.<br /><br /></li>

<li><b>Length</b>
<br />The total number of bytes in the message including the SLP header.<br /><br /></li>

<li><b>O, Overflow</b>
<br />Set when the length of a message exceeds what can fit into a datagram.<br /><br /></li>

<li><b>F, Fresh</b>
<br />If set and the function is a Service Acknowledgement, the directory agent has registered the service as a new entry, not as an updated entry.<br /><br /></li>

<li><b>R, Request multicast</b>
<br />Set when multicasting or broadcasting requests.<br /><br /></li>

<li><b>Reserved</b>
<br />Must be cleared to zero.<br /><br /></li>

<li><b>Next Ext Offset</b>
<br />Cleared to 0 unless extensions are used. The first extension begins at 'offset' bytes, from the message's beginning. It is placed after the SLP message data.<br /><br /></li> 

<li><b>XID, Transaction Identifier</b>
<br />This field allows the requester to match replies to individual requests. Note that, whenever there is an Attribute Authentication block, there will also be a URL Authentication block.</li></ul>
<br />
<br /><b>SLP extensions</b>
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td><p>Extension</p></td><td><p>Description</p></td></tr><tr><td><p>0x0001</p></td><td><p>Attribute missing.</p></td></tr><tr><td><p>0x0002</p></td><td><p>Attribute list.</p></td></tr><tr><td><p>0x0003</p></td><td><p>Vendor opaque.</p></td></tr><tr><td><p>0x0004</p></td><td><p>Subscribe.</p></td></tr><tr><td><p>0x0005</p></td><td><p>NotifyAt.</p></td></tr><tr><td><p>0x0006</p></td><td><p>Mesh-enhancement.</p></td></tr><tr><td><p>0x4001</p></td><td><p>SLP Local Service Autoderegistration.</p></td></tr><tr><td><p>0x4002</p></td><td><p>Selection.</p></td></tr><tr><td><p>0x4003</p></td><td><p>Sort.</p></td></tr></tbody></table></div></div>
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
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>SLP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Address</b><br />A location of data, usually in main memory or on a disk. You can think of computer memory as an array of storage boxes, each of which is one byte in length. Each box has an address (a unique number) assigned to it. By specifying a memory address, programmers can access a particular byte of data. Disks are divided into tracks and sectors, each of which has a unique address. Usually, you do not need to worry about addresses unless you are a programmer. 
<br />
<br />A name or token that identifies a network component. In local area networks (LANs), for example, every node has a unique address. On the Internet, every file has a unique address called a URL.<br /><br /><b>Client</b><br />Clinet is a program which requests services of another program. It is a client part of a client-server architecture. Typically, a client is an application that runs on a personal computer or workstation and relies on a server to perform some operations. For example, an e-mail client is an application that enables you to send and receive e-mail.<br /><br /><b>Configuration</b><br />The way a system is set up, or the assortment of components that make up the system. Configuration can refer to either hardware or software, or the combination of both. For instance, a typical configuration for a PC consists of 32MB (megabytes) main memory, a floppy drive, a hard disk, a modem, a CD-ROM drive, a VGA monitor, and the Windows operating system.<br /><br /><b>DA</b><br />Directory Agent (DA) is a process which collects information from Service Agents to provide a single repository of service information in order to centralize it for efficient access by User Agents. There can only be one DA present per given host.<br /><br /><b>Host</b><br />Host is a computer system that is accessed by a user working at a remote location. Typically, the term is used when there are two computer systems connected by modems and telephone lines. The system that contains the data is called the host, while the computer at which the user sits is called the remote terminal. 
<br />
<br />Host can refer to a computer that is connected to a TCP/IP network, including the Internet. Each host has a unique IP address. 
<br />
<br />Host can refer to provide the infrastructure for a computer service too. For example, there are many companies that host Web servers. This means that they provide the hardware, software, and communications lines required by the server, but the content on the server may be controlled by someone else.<br /><br /><b>Internet</b><br />A global network connecting millions of computers. More than 100 countries are linked into exchanges of data, news and opinions. 
<br />
<br />Unlike online services, which are centrally controlled, the Internet is decentralized by design. Each Internet computer, called a host, is independent. Its operators can choose which Internet services to use and which local services to make available to the global Internet community. Remarkably, this anarchy by design works exceedingly well. 
<br />
<br />There are a variety of ways to access the Internet. Most online services, such as America Online, offer access to some Internet services. It is also possible to gain access through a commercial Internet Service Provider (ISP).<br /><br /><b>Network</b><br />Network is a group of two or more computer systems linked together. There are many types of computer networks, including: 
<br />LANs (local-area networks), WANs (wide-area networks), CANs (campus-area networks), MANs (metropolitan-area networks) and HANs (home-area networks).
<br />
<br />In addition to these types, the following characteristics are also used to categorize different types of networks: Topology, protocol and architecture.<br /><br /><b>Register</b><br />(n) A, special, high-speed storage area within the CPU. All data must be represented in a register before it can be processed. For example, if two numbers are to be multiplied, both numbers must be in registers, and the result is also placed in a register. 
<br />
<br />(v) To notify a manufacturer that you have purchased its product. Registering a product is often a prerequisite to receiving customer support, and it is one of the ways that software producers control software piracy.<br /><br /><b>SA</b><br />SA (Security Association) is a group of security settings related to a specific VPN tunnel. A Security Association groups together all the necessary settings needed to create a VPN tunnel. Different SAs may be created to connect branch offices, allow secure remote management, and pass unsupported traffic. All SAs require a specified encryption method, IPSec gateway address and destination network address. IKE includes a shared secret.<br /><br /><b>SLP</b><br />Service Location Protocol (SLP) was originally an Internet Engineering Task Force (IETF) standards track protocol that provides a framework to allow networking applications to discover the existence, location, and configuration of networked services in enterprise networks. Traditionally, in order to locate services on the network, users of network applications have been required to supply the host name or network address of the machine that provides a desired service. SLP can eliminate the need for users to know the names of network hosts. With SLP, the user only needs to know the description of the service he is interested in. Based on this description, SLP is then able to return the URL of the desired service.<br /><br /><b>Service</b><br />The NAS provides a service to the dial-in user, such as PPP or Telnet.<br /><br /><b>UA</b><br />User Agent (UA) is a process working on the user's behalf to acquire service attributes and configuration. The User Agent retrieves service information from the Service Agents or Directory Agents.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="https://www.iana.org/assignments/svrloc-extensions">SLP extensions</a><hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2165.html">RFC 2165</a>] Service Location Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc2608.html">RFC 2608</a>] Service Location Protocol, Version 2.
[<a href="https://www.rfc-editor.org/rfc/rfc2609.html">RFC 2609</a>] Service Templates and Service: Schemes.
                Defines SLP extension 0x0001 (Attribute Missing). 
                Defines URI scheme service. 
[<a href="https://www.rfc-editor.org/rfc/rfc2614.html">RFC 2614</a>] An API for Service Location.
[<a href="https://www.rfc-editor.org/rfc/rfc2926.html">RFC 2926</a>] Conversion of LDAP Schemas to and from SLP Templates.
[<a href="https://www.rfc-editor.org/rfc/rfc3059.html">RFC 3059</a>] Attribute List Extension for the Service Location Protocol.
                Defines SLP extension 0x0002 (Attribute List). 
[<a href="https://www.rfc-editor.org/rfc/rfc3082.html">RFC 3082</a>] Notification and Subscription for SLP.
                Defines SLP extensions 0x0004 (Subscribe) and 0x0005 (NotifyAt). 
[<a href="https://www.rfc-editor.org/rfc/rfc3105.html">RFC 3105</a>] Finding an RSIP Server with SLP.
[<a href="https://www.rfc-editor.org/rfc/rfc3111.html">RFC 3111</a>] Service Location Protocol Modifications for IPv6.
[<a href="https://www.rfc-editor.org/rfc/rfc3224.html">RFC 3224</a>] Vendor Extensions for Service Location Protocol, Version 2.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2608.html">RFC 2608</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3421.html">RFC 3421</a>] Select and Sort Extensions for the Service Location Protocol (SLP).
                Defines SLP extensions 0x4002 (Selection) and 0x4003 (Sort). 
[<a href="https://www.rfc-editor.org/rfc/rfc3528.html">RFC 3528</a>] Mesh-enhanced Service Location Protocol (mSLP).
                Defines SLP extension 0x0006 (Mesh Forwarding). 
[<a href="https://www.rfc-editor.org/rfc/rfc3712.html">RFC 3712</a>] Lightweight Directory Access Protocol (LDAP): Schema for Printer Services.
[<a href="https://www.rfc-editor.org/rfc/rfc3723.html">RFC 3723</a>] Securing Block Storage Protocols over IP.
[<a href="https://www.rfc-editor.org/rfc/rfc3822.html">RFC 3822</a>] Finding Fibre Channel over TCP/IP (FCIP) Entities Using Service Location Protocol version 2 (SLPv2).
[<a href="https://www.rfc-editor.org/rfc/rfc3832.html">RFC 3832</a>] Remote Service Discovery in the Service Location Protocol (SLP) via DNS SRV.
[<a href="https://www.rfc-editor.org/rfc/rfc4018.html">RFC 4018</a>] Finding Internet Small Computer Systems Interface (iSCSI) Targets and Name Servers by Using Service Location Protocol version 2 (SLPv2).
                		  </div>
		  
</section>

