---
id: protocol-cip
slug: cip
name: CIP
expandedName: Common Indexing Protocol
origin: historical
provenance:
  source: protocols/protocol_CIP.htm
  sha256: 98e842e00276189b81b0c6e2ac1aeec195cc79b0626bd0bb91ddf968b3339dc8
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Common Indexing Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Common Indexing Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: MIME subtype
    html: application/index
  - label: Working groups
    html: 'MIME, LDAP, HTTP, SMTP, TCP'
originalUpdate: '2005-12-15 17:33:53'
rfcs:
  - 2651
  - 2652
  - 2653
  - 2654
  - 2655
  - 2657
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

			CIP is an evolution and refinement of Whois++, an Internet protocol for finding information about resources on networks. CIP provides a way for information servers to know the contents of other information servers by exchanging index information. Once indexes are exchanged, a server can look in its own index to answer a query, or look in the indexes received from other servers to see if the query can be answered elsewhere.
<br />
<br />The Common Indexing Protocol (CIP) is used to pass indexing information from server to server in order to facilitate query routing. Query routing is the process of redirecting and replicating queries through a distributed database system towards servers holding the desired results. 
<br />
<br /><b>History and Motivation</b>
<br />The Common Indexing Protocol (CIP) is an evolution and refinement of distributed indexing concepts first introduced in the Whois++ Directory Service. While indexing proved useful in that system to promote query routing, the centroid index object which is passed among Whois++ servers is specifically designed for template-based databases searchable by token-based matching. With alternative index objects, the index-passing technology will prove useful to many more application domains, not simply Directory Services and those applications which can be cast into the form of template collections.
<br />
<br />The indexing part of Whois++ is integrated with the data access protocol. The goal in designing CIP is to extract the indexing portion of Whois++, while abstracting the index objects to apply more broadly to information retrieval. In addition, another kind of technology reuse has been undertaken by converting the ad-hoc data representations used by Whois++ into structures based on the MIME specification for structured Internet mail.
<br />
<br />Whois++ used a version number field in centroid objects to facilitate future growth. The initial version was 1. Version 1 of CIP (then embedded in Whois++, and not referred to separately as CIP) had support for only ISO-8895-1 characters, and for only the centroid index object type.
<br />
<br />Version 2 of the Whois++ centroid was used in the Digger software by Bunyip Information Systems to notify recipients that the centroid carried extra character set information. Digger's centroids can carry UTF-8 encoded 16-bit Unicode characters, or ISO-8859-1 characters, determined by a field in the headers.
<br />
<br />This specification is for CIP version 3. Version 3 is a major overhaul to the protocol. However, by using of a short negotiation sequence, CIP version 3 servers can interoperate with earlier servers in an index-passing mesh.
<br /><hr />
<br /><b>Architecture</b>
<br /><ul><li><b>CIP in the Information Retrieval World</b><br /></li>
<li><ul><li><b>Information Retrieval in the Abstract</b>
<br />In order to better understand how CIP fits into the information retrieval world, we need to first understand the unifying abstract features of existing information retrieval technology. 
<br />
<br />An abstract view of the client/server data retrieval process includes data sets and data access protocols. An individual server is responsible for handling queries over a fixed domain of data. For the purposes of CIP, we call this domain of data the dataset. Clients make searches in the dataset and retrieve parts of it via a data access protocol. There are many data access protocols, each optimized for the data in question. For instance, LDAP and Whois++ are access protocols that reflect the needs of the directory services application domain. Other data access protocols include HTTP and Z39.50.<br /><br /></li>

<li><b>Indexing Information Facilitates Query Routing</b>
<br />The above description reflects a world without indexing, where no server knows about any other server. In some cases (as with X.500 referrals, and HTTP redirects) a server will, as part of its reply, implicate another server in the process of resolving the query. However, those servers generate replies based solely on their local knowledge. When indexing information is introduced into a server's local database, the server now knows not only answers based on the local dataset, but also answers based on external indices. These indices come from peer servers, via an indexing protocol. CIP is one such indexing protocol.<br /><br /></li>

<li><b>Abstracting the CIP index object</b>
<br />As useful as indices seem, the fact remains that not all queries can benefit from the same type of index. For example, say the index consists of a simple list of keywords. With such an index, it is impossible to answer queries about whether two keywords were near one another, or if a keyword was present in a certain context (for instance, in the title).</li></ul><br /><br /></li>

<li><b>Architectural Details</b>
<br />CIP implements index passing, providing the forward knowledge necessary to generate the referrals used for query routing. The core of the protocol is the index object. In the following sections, the structure of the index objects themselves is presented. Next, how and why indices are passed from server to server is discussed. Finally, the circumstances under which a server may synthesize an index object based on incoming ones are discussed.<br /><br /></li>

<li><ul><li><b>The CIP Index Object</b>
<br />A CIP index object is composed of two parts, the header and the payload. The header contains metadata necessary to process and make use of the index object being transmitted. The actual index resides in the payload.
<br />
<br />Three particular headers warrant specific mention at this point. The type of the index object selects one of many distinct CIP index object specifications which define exactly how the index blocks are to be created, parsed and used to facilitate query routing. Another header of note is the DSI (Dataset Identifier), which uniquely identifies the dataset from which the index was created. Another header that is crucial for generating referrals is the Base-URI. The URI (or URI's) contained in this header form the basis of any referrals generated based on this index block. The URI is also used as input during the index aggregation process to constrain the kinds of aggregation possible, due to multi protocol constraints. How that URI is used is defined by the aggregation algorithm. The exact syntax of these headers is specified in the CIP MIME specification document.<br /><br /></li>

<li><b>Moving Index Objects: How to Build a Mesh</b>
<br />Indices are transmitted among servers participating in a CIP mesh. By distributing this information in anticipation of a query, efficient, accurate query routing is possible at the time a query arrives.
<br />
<br />A CIP mesh is a set of CIP servers which pass indices of the same type among themselves. Typically, a mesh is arranged in a hierarchical tree fashion, with servers nearer the root of the tree having larger and more comprehensive indices. See Figure 1. However, a CIP mesh is explicitly allowed to have lateral links in it, and there may be more than one part of the mesh that has the properties of a "root". Mesh administrators are encouraged to avoid loops in the system, but they are not obliged to maintain a strict tree structure. Clients wishing to completely resolve all referrals they receive should protect against referral loops while attempting to traverse the mesh to avoid wasting time and network resources.<br /><br /></li>

<li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">          base level           index servers           index servers 
          directory               for base             for lower-level 
           servers             level servers           index servers
                                             
                                                
           _______
          |       |
          |   A   |__
          |_______|              _______
                      ---CIP----|       |
           _______               |   D   |__
          |       |   /---CIP----|_______|               ------
          |   B   |__/                       --CIP------|      |
          |_______|                                      |  F   |
                                             /--CIP------|______|
                                            /
           _______                _______  /
          |       |              |       |-
          |   C   |-------CIP----|   E   |
          |_______|              |_______|-
                                      |    
                                      r     
           _______                    e                  ______
          |       |                   f       --CIP-----|      |
          |   G   |-------CIP---------e------------------|  H   |
          |_______|                   r                  |______|
                  --referral---|     r      --referral-/
                                |     a     |
                                |     l     |
                                 3   | 2   | 1
                                  --------/
                                 |        |
                                  | client |
                                  |        |
                                   --------

             Figure 1: Sample layout of the Index Service mesh</pre><br /></li>
<li><b>Index Object Synthesis</b>
<br />Indexing servers read and write index objects as they pass them around the mesh. However, a CIP server need not simply pass the in-bound indices through as the out-bound ones. While it is always permissible to pass an index object through to other servers, a server may choose to aggregate two or more of them, thereby reducing redundancy in the index, at the cost of longer referral chains.
<br />
<br />The following two rules control how a CIP server formulates its outgoing indices:<br /></li>
<li><ul><li>An index server may pass any of the index objects in its local index and its in-bound indices through unchanged to polling servers.<br /><br /></li>

<li>If and only if the following three conditions are true, an index server can aggregate two or more index objects into a single new index object, to be added to the set of out-bound indices.<br /></li>
<li><ul><li>a. Each index object to be aggregated covers exactly the same set of protocols, as defined by the scheme component of the Base- URI's in each index object.
<br /></li><li>b. The index server supports every one of the data access protocols represented by the Base-URI's in the index objects to be aggregated.
<br /></li><li>c. The specification for the index object type specified by the type header of the index objects explicitly defines the aggregation operation.</li></ul></li></ul></li></ul></li></ul>
<br /><hr />
<br /><b>Navigating the mesh</b>
<br />With the CIP infrastructure in place to manage index objects, the only problem remaining is how to successfully use the indexing information to do efficient searches. CIP facilitates query routing, which is essentially a client activity. A client connects to one server, which redirects the query to servers closer to the answer. This redirection message is called a referral.
<br />
<br /><ul><li><b>The Referral</b>
<br />The concept of a referral and the mechanism for deciding when they should be issued is described by CIP. However, the referral itself must be transferred to the client in the native protocol, so its syntax is not directly a CIP issue. The mechanism for deciding that a referral needs to be made and generating that referral resides in the CIP implementation in the server. The mechanism for sending the referral to the client resides in the server's native protocol implementation.
<br />
<br />A referral is made when a search against the index objects held by the server shows that there may be hits available in one of the datasets represented by those index objects. If more that one index object indicates that a referral must be generated to a given dataset, the server should generate only one referral to the given dataset, as the client may not be able to detect duplicates.
<br />
<br />Though the format of the referral is dependent on the native protocol(s) of the CIP server, the baseline contents of the referral are constant across all protocols. At the least, a DSI and a URI must be returned. The DSI is the DSI associated with the dataset which caused the hit. This must be presented to the client so that it can avoid referral loops. The Base-URI parameter which travels along with index objects is used to provide the other required part of a referral.<br /><br /></li>

<li><b>Cross-protocol Mappings</b>
<br />Each data access protocol which uses CIP will need a clearly defined set of rules to map queries in the native protocol to searches against an index object. These rules will vary according to the data domain. In principle, this could create a bit of a scaling difficulty; for N protocols and M data domains, there would be N x M mappings required. In practice, this should not be the case, since some access protocols will be wholly unsuited to some data domains. Consider for example, a LDAP server trying to make a search in an index object composed from unorganized text based pages. <br /><br /></li>

<li><b>Moving through the mesh</b>
<br />From a client's point of view, CIP simply pushes all the "hard work" onto its shoulders. After all, it is the client which needs to track down the real data. While this is true, it is very misleading. Because the client has control over the query routing process, the client has significant control over the size of the result set, the speed with which the query progresses, and the depth of the search.
<br />
<br />The simplest client implementation provides referrals to the user in a raw, ready-to-reuse form, without attempting to follow them. For instance, one Whois++ client, which interacts with the user via a Web-based form, simply makes referrals into HTML hypertext links. Encoded in the link via the HTML forms interface GET encoding rules is the data of the referral: the hostname, port, and query. If a user chooses to follow the referral link, he executes a new search on the new host. A savvier client might present the referrals to the user and ask which should be followed. And, assuming appropriate limits were placed on search time and bandwidth usage, it might be reasonable to program a client to follow all referrals automatically.</li></ul>
<br /><hr />
<br /><b>CIP Transport Protocols</b>
<br />The philosophy of the CIP protocol design is one of building-block design. Instead of relying on bulky protocol definition tools, or ad-hoc text encodings, CIP draws on existing, well understood Internet technologies like MIME, Whois++, FTP, and SMTP. Hopefully this will serve to ease implementation and consensus building. It should also stand as an example of a simple way to leverage existing Internet technologies to easily implement new application-level services.
<br />
<br /><b>MIME message exchange mechanisms</b>
<br />CIP relies on interchange of standard MIME messages for all requests and replies. These messages are passed over a bidirectional, reliable transport system. This document defines transport over reliable network streams (via TCP), via HTTP, and via the Internet mail infrastructure.
<br />
<br />The CIP server which initiates the connection (conventionally referred to as a client) will be referred to below as the sender-CIP. The CIP server which accepts a sender-CIP's incoming connection and responds to the sender-CIP's requests is called a receiver-CIP.
<br />
<br /><ul><li><b>The Stream Transport</b>
<br />CIP messages are transmitted over bi-directional TCP connections via a simple text protocol. The transaction can take place over any TCP port, as specified by the mesh configuration. There is no well known port for CIP transactions. All configuration information in the system must include both a hostname and a port.
<br />
<br />All sender-CIP actions (including requests, connection initiation, and connection finalization) are acknowledged by the receiver-CIP with a response code. <br /><br /></li>

<li><b>Internet mail infrastructure as transport</b>
<br />As an alternative to TCP streams, CIP transactions can take place over the existing Internet mail infrastructure. There are two motivations for this feature of CIP. First, it lowers the barriers to entry for leaf servers. When the need for a full TCP implementation is relaxed, leaf nodes (which, by definition, only send index objects) can consist of as little as a database and an indexing program (possibly written in a very high level language) to participate in the mesh.
<br />
<br />Second, it keeps with the philosophy of making use of existing Internet technology. The MIME messages used for requests and responses are, by definition of the MIME specification, suitable for transport via the Internet mail infrastructure. With a few simple rules, we open up an entirely different way to interact with CIP servers which choose to implement this transport. <br /><br /></li>

<li><b>HTTP transport</b>
<br />HTTP may also be used to transport CIP objects, since they are just MIME objects. A transaction is performed by using the POST method to send an application/index.cmd and returning an application/index.response or an application/index.obj in the HTTP reply. The URL that is the target of the post is a configuration parameter of the CIP-sender to CIP-receiver relationship.</li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		</blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Application domain</b><br />Application domain is a problem domain to which CIP is applied which has indexing requirements which are not subsumed by any existing problem domain. Separate application domains require separate index object specifications, and potentially separate CIP meshes.<br /><br /><b>Bit</b><br />Bit (binary digit), the smallest unit of information on a machine, a leading statistician and adviser to five presidents. A single bit can hold only one of two values: 0 or 1. More meaningful information is obtained by combining consecutive bits into larger units. For example, a byte is composed of 8 consecutive bits.<br /><br /><b>CIP</b><br />CIP is an indexing protocol that defines methods for creating and exchanging index information among indexing servers. It distributes searches across several instances of a single type of search engine to create a global directory.<br /><br /><b>Centroid</b><br />Centroid is an index object type used with Whois++. In CIP versions before version 3, the index was not extensible, and could only take the form of a centroid. A centroid is a list of (template name, attribute name, token) tuples with duplicate removed.<br /><br /><b>DSI</b><br />DSI (Dataset Identifier) is an identifier chosen from any part of the ISO/CCITT OID space which uniquely identifies a given dataset among all datasets indexed by CIP.<br /><br /><b>Data</b><br />* Distinct pieces of information, usually formatted in a special way. All software is divided into two general categories: data and programs. Programs are collections of instructions for manipulating data. Data can exist in a variety of forms -- as numbers or text on pieces of paper, as bits and bytes stored in electronic memory, or as facts stored in a person's mind. Strictly speaking, data is the plural of datum, a single piece of information. In practice, however, people use data as both the singular and plural form of the word. 
<br />
<br />* The term data is often used to distinguish binary machine-readable information from textual human-readable information. For example, some applications make a distinction between data files (files that contain binary data) and text files (files that contain ASCII data). 
<br />
<br />* In database management systems, data files are the files that store the database information, whereas other files, such as index files and data dictionaries, store administrative information, known as metadata.<br /><br /><b>Dataset</b><br />Dataset is a collection of data (real or virtual) over which an index is created. When a CIP server aggregates two or more indices, the resultant index represents the index from a virtual dataset, spanning the previous two datasets<br /><br /><b>Domain</b><br />A group of computers and devices on a network that are administered as a unit with common rules and procedures. Within the Internet, domains are defined by the IP address. All devices sharing a common part of the IP address are said to be in the same domain.
<br />
<br />In database technology, domain refers to the description of an attribute's allowed values. The physical description is a set of values the attribute can have, and the semantic, or logical, description is the meaning of the attribute.<br /><br /><b>HTML</b><br />HyperText Markup Language is the authoring language used to create documents on the World Wide Web. HTML is similar to SGML, although it is not a strict subset.<br /><br /><b>HTTP</b><br />HTTP(HyperText Transfer Protocol) defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands. For example, when you enter a URL in your browser, this actually sends an HTTP command to the Web server directing it to fetch and transmit the requested Web page. 
<br />
<br />The other main standard that controls how the World Wide Web works is HTML, which covers how Web pages are formatted and displayed. 
<br />
<br />HTTP is called a stateless protocol because each command is executed independently, without any knowledge of the commands that came before it. This is the main reason that it is difficult to implement Web sites that react intelligently to user input. This shortcoming of HTTP is being addressed in a number of new technologies, including ActiveX, Java, JavaScript and cookies. <br /><br /><b>Hypertext</b><br />A special type of database system, invented by Ted Nelson in the 1960s, in which objects (text, pictures, music, programs, and so on) can be creatively linked to each other. When you select an object, you can see all the other objects that are linked to it. You can move from one object to another even though they might have very different forms. For example, while reading a document about Mozart, you might click on the phrase Violin Concerto in A Major, which could display the written score or perhaps even invoke a recording of the concerto. Clicking on the name Mozart might cause various illustrations of Mozart to appear on the screen. The icons that you select to view associated objects are called Hypertext links or buttons. 
<br />
<br />Hypertext systems are particularly useful for organizing and browsing through large databases that consist of disparate types of information. There are several Hypertext systems available for Apple Macintosh computers and PCs that enable you to develop your own databases. Such systems are often called authoring systems . HyperCard software from Apple Computer is the most famous.<br /><br /><b>IP</b><br />The IP (Internet Protocol) is a protocol which uses datagrams to communicate over a packet-switched network. IP specifies the format of packets, also called datagrams, and the addressing scheme. Most networks combine IP with a higher-level protocol called Transmission Control Protocol (TCP), which establishes a virtual connection between a destination and a source. 
<br />
<br />IP by itself is something like the postal system. It allows you to address a package and drop it in the system, but there's no direct link between you and the recipient. TCP/IP, on the other hand, establishes a connection between two hosts so that they can send messages back and forth for a period of time. 
<br />
<br />The current version of IP is IPv4. A new version, called IPv6 or IPng, is under development.<br /><br /><b>ISO</b><br />ISO (International Organization for Standardization) is a network of the national standards institutes of 146 countries, on the basis of one member per country, with a Central Secretariat in Geneva, Switzerland, that coordinates the system. ISO has defined a number of important computer standards, the most significant of which is perhaps OSI (Open Systems Interconnection), a standardized architecture for designing networks.<br /><br /><b>Index</b><br />Index is a summary or compressed form of a body of data. Examples include a unique list of words, a codified full text analysis, a set of keywords, etc.<br /><br /><b>Index object</b><br />Index object is the embodiment of the indices passed by CIP. An index object consists of some control attributes and an opaque payload.<br /><br /><b>LDAP</b><br />LDAP (Lightweight Directory Access Protocol) is a set of protocols for accessing information directories. LDAP is based on the standards contained within the X.500 standard, but is significantly simpler. And unlike X.500, LDAP supports TCP/IP, which is necessary for any type of Internet access. Because it's a simpler version of X.500, LDAP is sometimes called X.500-lite.<br /><br /><b>MIME</b><br />MIME (Multipurpose Internet Mail Extensions) is a specification for formatting non-ASCII messages so that they can be sent over the Internet. Many e-mail clients now support MIME, which enables them to send and receive graphics, audio, and video files via the Internet mail system. In addition, MIME supports messages in character sets other than ASCII. 
<br />
<br />There are many predefined MIME types, such as GIF graphics files and PostScript files. It is also possible to define your own MIME types. 
<br />
<br />In addition to e-mail applications, Web browsers also support various MIME types. This enables the browser to display or output files that are not in HTML format.<br /><br /><b>Payload</b><br />Payload or mission bit stream is the data, such as a data field, block, or stream, being processed or transported ¡ª the part that represents user information and user overhead information. It may include user-requested additional information, such as network management and accounting information. Note that the payload does not include system overhead information for the processing or transportation system.<br /><br /><b>Process</b><br />(n) An executing program. The term is used loosely as a synonym of task. 
<br />(v) To perform some useful operations on data.<br /><br /><b>Query routing</b><br />Query routing based on reference to indexing information, redirecting and replicating queries through a distributed database system towards the servers holding the actual results.<br /><br /><b>SMTP</b><br />SMTP (Simple Mail Transfer Protocol) is a  protocol for sending e-mail messages between servers. Most e-mail systems that send mail over the Internet use SMTP to send messages from one server to another; the messages can then be retrieved with an e-mail client using either POP or IMAP. In addition, SMTP is generally used to send messages from a mail client to a mail server. This is why you need to specify both the POP or IMAP server and the SMTP server when you configure your e-mail application.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>TCP</b><br />TCP (Transmission Control Protocol) is one of the main protocols in TCP/IP networks. TCP is one of the main protocols in TCP/IP networks. Whereas the IP protocol deals only with packets, TCP enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and also guarantees that packets will be delivered in the same order in which they were sent.<br /><br /><b>URI</b><br />URI (Uniform Resource Identifier) is the generic term for all types of names and addresses that refer to objects on the World Wide Web. A URL is one kind of URI.<br /><br /><b>URL</b><br />URL (Uniform Resource Locator) is the global address of documents and other resources on the World Wide Web. The first part of the address indicates what protocol to use, and the second part specifies the IP address or the domain name where the resource is located. 
<br />
<br />For example, the two URLs below point to two different files at the domain pcwebopedia.com. The first specifies an executable file that should be fetched using the FTP protocol; the second specifies a Web page that should be fetched using the HTTP protocol: 
<br />
<br />ftp://www.webpage.com/example.exe 
<br />http://www.webpage.com/index.html <br /><br /><b>UTF-8</b><br />UTF(Unicode Transformation Format) preserving the full US-ASCII range, providing compatibility with file systems, parsers and other software that rely on US-ASCII values but are transparent to other values. 
<br />
<br />UTF-8 encodes UCS-2 or UCS-4 characters as a varying number of octets, where the number of octets, and the value of each, depend on the integer value assigned to the character in ISO/IEC 10646.<br /><br /><b>Whois</b><br />WhoIs is an Internet utility that returns information about a domain name or IP address. For example, if you enter a domain name such as microsoft.com, whois will return the name and address of the domain's owner (in this case, Microsoft Corporation).<br /><br /><b>X.500</b><br />X500 is an ISO and ITU standard that defines how global directories should be structured. X.500 directories are hierarchical with different levels for each category of information, such as country, state, and city. X.500 supports X.400 systems.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2651.html">RFC 2651</a>] The Architecture of the Common Indexing Protocol (CIP).
[<a href="https://www.rfc-editor.org/rfc/rfc2652.html">RFC 2652</a>] MIME Object Definitions for the Common Indexing Protocol (CIP).
                Defines MIME media subtype application/index. 
[<a href="https://www.rfc-editor.org/rfc/rfc2653.html">RFC 2653</a>] CIP Transport Protocols.
[<a href="https://www.rfc-editor.org/rfc/rfc2654.html">RFC 2654</a>] A Tagged Index Object for use in the Common Indexing Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc2655.html">RFC 2655</a>] CIP Index Object Format for SOIF Objects.
[<a href="https://www.rfc-editor.org/rfc/rfc2657.html">RFC 2657</a>] LDAPv2 Client vs. the Index Mesh.
                		  </div>
		  
</section>

