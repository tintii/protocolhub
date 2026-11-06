---
id: protocol-gopher
slug: gopher
name: Gopher
expandedName: Gopher Protocol
origin: historical
provenance:
  source: protocols/protocol_Gopher.htm
  sha256: 0f2c8e0b1b5257fff68438c918854fb98d06fcca367d23e42fa5e64b96b1e5dc
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Gopher Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Gopher Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Ports
    html: 70 (TCP)
  - label: URI
    html: gopher
originalUpdate: '2006-09-01 17:05:20'
rfcs:
  - 1436
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

			The Internet Gopher, or simply Gopher, is a distributed document delivery service. It allows users to explore, search and retrieve information residing on different locations in a seamless fashion. When browsing it, the information appears to the user as a series of nested menus. This kind of menu structure resembles the organization of a directory with many subdirectories and files. The subdirectories and the files may be located either on the local server site or on remote sites served by other Gopher servers. From the user point of view, all information items presented on the menus appear to come from the same place.
<br />
<br />The information can be a text or binary file, directory information (loosely called phone book), image or sound. In addition, Gopher offers gateways to other information systems (World-Wide Web, WAIS, archie, WHOIS) and network services (Telnet, FTP). Gopher is often a more convenient way to navigate in a FTP directory and to download files.
<br />
<br />A Gopher server holds the information and handles the users' queries. In addition, links to other Gopher servers create a network wide cooperation to form the global Gopher web (Gopherspace).
<br />
<br /><b>History</b>
<br />The original Gopher system was released in late spring of 1991 by Mark McCahill, Farhad Anklesaria, Paul Lindner, Dan Torrey, and Bob Alberti of the University of Minnesota. Its central goals were:
<br /><ul><li>A file-like hierarchical arrangement that would be familiar to users <br /></li>
<li>A simple syntax<br /></li> 
<li>A system that can be created quickly and inexpensively<br /></li>
<li>Extending the file system metaphor to include things like searches</li></ul>
<br />
<br />The source of the name "Gopher" is claimed to be three-fold:
<br /><ul><li>Users instruct it to "go for" information <br /></li>
<li>It does so through a web of menu items analogous to gopher holes <br /></li>
<li>The sports team of the University of Minnesota is the Golden Gophers</li></ul>
<br />
<br />Gopher combines document hierarchies with collections of services, including WAIS, the Archie and Veronica search engines, and gateways to other information systems such as ftp and Usenet.
<br />
<br />The general interest in Campus-Wide Information Systems (CWISs) in higher education at the time, and the ease with which a Gopher server could be set up to create an instant CWIS with links to other sites' online directories and resources were the factors contributing to Gopher's rapid adoption. By 1992, the standard method of locating someone's e-mail address was to find their organization's CSO nameserver entry in Gopher, and query the nameserver.
<br />
<br />The exponential scaling of utility in social networked systems seen in Gopher, and then the web, is a common feature of networked hypermedia systems with distributed authoring. In 1993¨C1994, Web pages commonly contained large numbers of links to Gopher-delivered resources, as the Web continued Gopher's embrace and extend tradition of providing gateways to other services.
<br />
<br />The World Wide Web was in its infancy in 1991, and Gopher services quickly became established. However, by the late 1990s, Gopher had almost disappeared. Insofar as information management is concerned, the progress from gopher to the web as a standard can be seen simply as a natural progression from text-based to graphical interfaces.
<br />
<br />As of 2006, there are still a few Gopher servers present on the net, in organizations such as the Smithsonian Institution and the US government; a few are also being maintained by enthusiasts of the protocol, where almost all growth is occurring.
<br />
<br />Some have suggested that the bandwidth-sparing simple interface of Gopher would be a good match for mobile phones and Personal digital assistants (PDAs), but so far, the market prefers Wireless Markup Language (WML)/Wireless Application Protocol (WAP), DoCoMo i-mode, XHTML Basic or other adaptations of HTML and XML. The PyGopherd server, however, provides a built-in WML front-end to Gopher sites served with it.
<br /><hr />
<br /><b>Internet Gopher Model</b>
<br />In essence, the Gopher protocol consists of a client connecting to a server and sending the server a selector (a line of text, which may be empty) via a TCP connection. The server responds with a block of text terminated with a period on a line by itself, and closes the connection. No state is retained by the server between transactions with a client. The simple nature of the protocol stems from the need to implement servers and clients for the slow, smaller desktop computers (1 MB Macs and DOS machines), quickly, and efficiently.
<br />
<br />Below is a simple example of a client/server interaction; more complex interactions are dealt with later. Assume that a "well-known" Gopher server listens at a well known port for the campus (much like a domain-name server). The only configuration information the client software retains is this server's name and port number (in this example that machine is rawBits.micro.umn.edu and the port 70). In the example below the F character denotes the TAB character.
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">Client:          {Opens connection to rawBits.micro.umn.edu at port 70}
Server:          {Accepts connection but says nothing}
Client:  {Sends an empty line: Meaning "list what you have"}
Server:          {Sends a series of lines, each ending with CR LF}
0About internet GopherFStuff:About usFrawBits.micro.umn.eduF70
1Around University of MinnesotaFZ,5692,AUMFunderdog.micro.umn.eduF70
1Microcomputer News &amp; PricesFPrices/Fpserver.bookstore.umn.eduF70
1Courses, Schedules, CalendarsFFevents.ais.umn.eduF9120
1Student-Staff DirectoriesFFuinfo.ais.umn.eduF70
1Departmental PublicationsFStuff:DP:FrawBits.micro.umn.eduF70
                    {.....etc.....}
 .                  {Period on a line by itself}
                    {Server closes connection}</pre>
<br />
<br />The first character on each line tells whether the line describes a document, directory, or search service (characters '0', '1', '7'; there are a handful more of these characters described later). The succeeding characters up to the tab form a user display string to be shown to the user for use in selecting this document (or directory) for retrieval. The first character of the line is really defining the type of item described on this line. In nearly every case, the Gopher client software will give the users some sort of idea about what type of item this is (by displaying an icon, a short text tag, or the like).
<br />
<br />The characters following the tab, up to the next tab form a selector string that the client software must send to the server to retrieve the document (or directory listing). The selector string should mean nothing to the client software; it should never be modified by the client. In practice, the selector string is often a pathname or other file selector used by the server to locate the item desired. The next two tab delimited fields denote the domain-name of the host that has this document (or directory), and the port at which to connect. If there are yet other tab delimited fields, the basic Gopher client should ignore them. A CR LF denotes the end of the item.
<br />
<br />In the example, line 1 describes a document the user will see as "About internet Gopher". To retrieve this document, the client software must send the retrieval string: "Stuff:About us" to rawBits.micro.umn.edu at port 70. If the client does this, the server will respond with the contents of the document, terminated by a period on a line by itself. A client might present the user with a view of the world something like the following list of items:
<br />
<br />About Internet Gopher
<br /><ul><li>Around the University of Minnesota...<br /></li>
<li>Microcomputer News &amp; Prices...<br /></li>
<li>Courses, Schedules, Calendars...<br /></li>
<li>Student-Staff Directories...<br /></li>
<li>Departmental Publications...</li></ul>
<br />
<br />In this case, directories are displayed with an ellipsis and files are displayed without any.  However, depending on the platform the client is written for and the author's taste, item types could be denoted by other text tags or by icons. For example, the UNIX curses-based client displays directories with a slash (/) following the name; Macintosh clients display directories alongside an icon of a folder.
<br />
<br />The user does not know or care that the items up for selection may reside on many different machines anywhere on the Internet.
<br />
<br />Suppose the user selects the line "Microcomputer News &amp; Prices...". This appears to be a directory, and so the user expects to see contents of the directory upon request that it be fetched. The following lines illustrate the ensuing client-server interaction:
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 2" tabindex="0">Client:           (Connects to pserver.bookstore.umn.edu at port 70)
Server:           (Accepts connection but says nothing)
Client: Prices/   (Sends the magic string terminated by CRLF)
Server:           (Sends a series of lines, each ending with CR LF)
0About PricesFPrices/AboutusFpserver.bookstore.umn.eduF70
0Macintosh PricesFPrices/MacFpserver.bookstore.umn.eduF70
0IBM PricesFPrices/IckFpserver.bookstore.umn.eduF70
0Printer &amp; Peripheral PricesFPrices/PPPFpserver.bookstore.umn.eduF70
                      (.....etc.....)
    .                 (Period on a line by itself)
                      (Server closes connection)</pre>
<br /><hr />
<br /><b>More details</b>
<br /><ul><li><b>Locating services</b><br /></li>
<li>Documents (or other services that may be viewed ultimately as documents, such as a student-staff phonebook) are linked to the machine they are on by the trio of selector string, machine domain-name, and IP port. It is assumed that there will be one well-known top-level or root server for an institution or campus. The information on this server may be duplicated by one or more other servers to avoid a single point of failure and to spread the load over several servers. Departments that wish to put up their own departmental servers need to register the machine name and port with the administrators of the top-level Gopher server, much the same way as they register a machine name with the campus domain-name server. An entry which points to the departmental server will then be made at the top level server. This ensures that users will be able to navigate their way down what amounts to a virtual hierarchical file system with a well known root to any campus server if they desire.
<br /><br /></li>
<li>Note that there is no requirement that a department register secondary servers with the central top-level server; they may just place a link to the secondary servers in their own primary servers. They may indeed place links to any servers they desire in their own server, thus creating a customized view of the Gopher information universe; links can of course point back at the top-level server. The virtual (networked) file system is therefore an arbitrary graph structure and not necessarily a rooted tree. The top-level node is merely one convenient, well-known point of entry. A set of Gopher servers linked in this manner may function as a campus-wide information system.
<br /><br /></li>
<li>Servers may of course point links at other than secondary servers. Indeed servers may point at other servers offering useful services anywhere on the internet. Viewed in this manner, Gopher can be seen as an Internet-wide information system.
<br /><br /></li>
<li><b>Server portability and naming</b><br /></li>
<li>It is recommended that all registered servers have alias names (domain name system CNAME) that are used by Gopher clients to locate them. Links to these servers should use these alias names rather than the primary names. If information needs to be moved from one machine to another, a simple change of domain name system alias (CNAME) allows this to occur without any reconfiguration of clients in the field.  In short, the domain name system may be used to re-map a server to a new address. There is nothing to prevent secondary servers or services from running on otherwise named servers or ports other than 70, however these should be reachable via a primary server.
<br /><br /></li>
<li><b>Contacting server administrators</b><br /></li>
<li>It is recommended that every server administrator have a document called something like: "About Bogus University's Gopher server" as the first item in their server's top level directory.  In this document should be a short description of what the server holds, as well as name, address, phone, and an e-mail address of the person who administers the server. This provides a way for users to get word to the administrator of a server that has inaccurate information or is not running correctly. It is also recommended that administrators place the date of last update in files for which such information matters to the users.
<br /><br /></li>
<li><b>Modular addition of services</b><br /></li>
<li>The first character of each line in a server-supplied directory listing indicates whether the item is a file, a directory, or a search. This is the base set of item types in the Gopher protocol. It is desirable for clients to be able to use different services and speak different protocols (simple ones such as finger; others such as CSO phonebook service, or Telnet, or X.500 directory service) as needs dictate. CSO phonebook service is a client/server phonebook system typically used at Universities to publish names, e-mail addresses, and so on. The CSO phonebook software was developed at the University of Illinois and is also sometimes referred to as ph or qi.
<br /><br /></li>
<li>On the other hand, subsets of other document retrieval schemes may be mapped onto the Gopher protocol by means of "gateway-servers". Examples of such servers include Gopher-to-FTP gateways, Gopher-to-archie gateways, Gopher-to-WAIS gateways, etc.  There are a number of advantages of such mechanisms. First, a relatively powerful server machine inherits both the intelligence and work, rather than the more modest, inexpensive desktop system that typically runs client software or basic server software. Equally important, clients do not have to be modified to take advantage of a new resource.
<br /><br /></li>
<li><b>Building clients</b><br /></li>
<li>A client simply sends the retrieval string to a server if it wants to retrieve a document or view the contents of a directory. Of course, each host may have pointers to other hosts, resulting in a "graph" (not necessarily a rooted tree) of hosts. The client software may save (or rather "stack") the locations that it has visited in search of a document. The user could therefore back out of the current location by unwinding the stack. Alternatively, a client with multiple-window capability might just be able to display more than one directory or document at the same time.
<br /><br /></li>
<li>A smart client could cache the contents of visited directories (rather than just the directory's item descriptor), thus avoiding network transactions if the information has been previously retrieved.
<br /><br /></li>
<li><b>Building ordinary internet Gopher servers</b><br /></li>
<li>The retrieval string sent to the server might be a path to a file or directory. It might be the name of a script, an application or even a query that generates the document or directory returned.  The basic server uses the string it gets up to but not including a CR-LF or a TAB, whichever comes first.
<br /><br /></li>
<li><b>Special purpose servers</b><br /></li>
<li>There are two special server types (beyond the normal Gopher server) also discussed below:
<br /></li><li><ul><li>A server directory listing can point at a CSO nameserver to allow a campus student-staff phonebook lookup service. This may show up on the user's list of choices, perhaps preceded by the icon of a phone-book.<br /></li>
<li>A server can also point at a "search server". Such servers may implement campus network (or subnet) wide searching capability. The most common search servers maintain full-text indexes on the contents of text documents held by some subset of Gopher servers.<br /><br /></li>

<li><b>Item type characters</b><br /></li>
<li>The client software decides what items are available by looking at the first character of each line in a directory listing. Augmenting this list can extend the protocol. A list of defined item-type characters follows:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>0</td><td>Item is a file</td></tr><tr><td>1</td><td>Item is a directory</td></tr><tr><td>2</td><td>Item is a CSO phone-book server</td></tr><tr><td>3</td><td>Error</td></tr><tr><td>4</td><td>Item is a BinHexed Macintosh file</td></tr><tr><td>5</td><td>Item is DOS binary archive of some sort. Client must read until the TCP connection closes.  Beware.</td></tr><tr><td>6</td><td>Item is a UNIX uuencoded file.</td></tr><tr><td>7</td><td>Item is an Index-Search server.</td></tr><tr><td>8</td><td>Item points to a text-based telnet session.</td></tr><tr><td>9</td><td>Item is a binary file! Client must read until the TCP connection closes.  Beware.</td></tr><tr><td>+</td><td>Item is a redundant server</td></tr><tr><td>T</td><td>Item points to a text-based tn3270 session.</td></tr><tr><td>g</td><td>Item is a GIF format graphics file.</td></tr><tr><td>I</td><td>Item is some kind of image file.  Client decides how to display.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>User display strings and server selector strings</b><br /></li>
<li>User display strings are intended to be displayed on a line on a typical screen for a user's viewing pleasure. While many screens can accommodate 80 character lines, some space is needed to display a tag of some sort to tell the user what sort of item this is. Because of this, the user display string should be kept under 70 characters in length. Clients may truncate to a length convenient to them.</li></ul><br /><br /></li>

		    </ul>
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>Gopher</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>CNAME</b><br />CNAME (Canonical Name Record ) is a record in a DNS database that indicates the true, or canonical, host name of a computer that its aliases are associated with. A computer hosting a Web site must have an IP address in order to be connected to the World Wide Web. The DNS resolves the computer domain name to its IP address, but sometimes more than one domain name resolves to the same IP address, and this is where the CNAME is useful. A machine can have an unlimited number of CNAME aliases, but a separate CNAME record must be in the database for each alias.<br /><br /><b>DOS</b><br />DoS (Disk Operating System) can refer to any operating system, but it is most often used as a shorthand for MS-DOS (Microsoft disk operating system). Originally developed by Microsoft for IBM, MS-DOS was the standard operating system for IBM-compatible personal computers.<br /><br /><b>Domain name</b><br />The term domain name has multiple meanings, all related to the [Domain Name System] (main article).
<br />*a name that is entered into a computer (e.g. as part of a website or other URL, or an email address) and then looked up in the global [Domain Name System] which informs the computer of the IP address(es) with that name. 
<br />*the product that registrars provide to their customers. 
<br />*a name looked up in the DNS for other purposes.<br /><br /><b>FTP</b><br />FTP (File Transfer Protocol) is the protocol for exchanging files over the Internet. FTP works in the same way as HTTP for transferring Web pages from a server to a user's browser and SMTP for transferring electronic mail across the Internet in that, like these technologies, FTP uses the Internet's TCP/IP protocols to enable data transfer. 
<br />
<br />FTP is most commonly used to download a file from a server using the Internet or to upload a file to a server (e.g., uploading a Web page file to a server).<br /><br /><b>Gateway</b><br />A network device used to translate between two different protocols. Used to interconnect two networks that use incompatible protocols. It is a node on a network that serves as an entrance to another network. In enterprises, the gateway is the computer that routes the traffic from a workstation to the outside network that is serving the Web pages. In homes, the gateway is the ISP that connects the user to the internet. 
<br />
<br />In enterprises, the gateway node often acts as a proxy server and a firewall. The gateway is also associated with both a router, which use headers and forwarding tables to determine where packets are sent, and a switch, which provides the actual path for the packet in and out of the gateway.
<br />
<br />It is also a computer system located on earth that switches data signals and voice signals between satellites and terrestrial networks and an earlier term for router, though now obsolete in this sense as router is commonly used.<br /><br /><b>Gopher</b><br />A system that pre-dates the World Wide Web for organizing and displaying files on Internet servers. A Gopher server presents its contents as a hierarchically structured list of files. With the ascendance of the Web, many gopher databases were converted to Web sites which can be more easily accessed via Web search engines. 
<br />
<br />Gopher was developed at the University of Minnesota and named after the school's mascot. Two systems, Veronica and Jughead, let you search global indices of resources stored in Gopher systems.<br /><br /><b>HTML</b><br />HyperText Markup Language is the authoring language used to create documents on the World Wide Web. HTML is similar to SGML, although it is not a strict subset.<br /><br /><b>Mac</b><br />MAC (Medium Access Control) is a hardware address that uniquely identifies each node of a network. In IEEE 802 networks, the Data Link Control (DLC) layer of the OSI Reference Model is divided into two sublayers: the Logical Link Control (LLC) layer and the Media Access Control (MAC) layer. The MAC layer interfaces directly with the network medium. Consequently, each different type of network medium requires a different MAC layer. 
<br />
<br />On networks that do not conform to the IEEE 802 standards but do conform to the OSI Reference Model, the node address is called the Data Link Control (DLC) address.<br /><br /><b>PDA</b><br />PDA (Personal digital assistants) is handheld devices that were originally designed as personal organizers, but became much more versatile over the years. A basic PDA usually includes a clock, date book, address book, task list, memo pad and a simple calculator. One major advantage of using PDAs is their ability to synchronize data with desktop, notebook and desknote computers. <br /><br /><b>Telnet</b><br />Telnet is a terminal emulation program for TCP/IP networks such as the Internet. The Telnet program runs on your computer and connects your PC to a server on the network. You can then enter commands through the Telnet program and they will be executed as if you were entering them directly on the server console. This enables you to control the server and communicate with other servers on the network. To start a Telnet session, you must log in to a server by entering a valid username and password. Telnet is a common way to remotely control Web servers.<br /><br /><b>WAIS</b><br />WAIS (Wide Area Information Server) is an Internet system in which specialized subject databases are created at multiple server locations, kept track of by a directory of servers at one location, and made accessible for searching by users with WAIS client programs. The user of WAIS is provided with or obtains a list of distributed databases. The user enters a search argument for a selected database and the client then accesses all the servers on which the database is distributed. The results provide a description of each text that meets the search requirements. The user can then retrieve the full text.<br /><br /><b>WHOIS</b><br />WhoIs is an Internet utility that returns information about a domain name or IP address. For example, if you enter a domain name such as microsoft.com, whois will return the name and address of the domain's owner (in this case, Microsoft Corporation).<br /><br /><b>WWW</b><br />WWW(World Wide Web) is a system of Internet servers that support specially formatted documents. The documents are formatted in a markup language called HTML (HyperText Markup Language) that supports links to other documents, as well as graphics, audio, and video files. There are several applications called Web browsers that make it easy to access the World Wide Web; Two of the most popular being Netscape Navigator and Microsoft's Internet Explorer.<br /><br /><b>XHTML Basic</b><br />XHTML Basic is an XML-based structured markup language primarily used for simple (mainly handheld) user agents, typically mobile devices. It is a subset of XHTML 1.1, defined using XHTML Modularization including a reduced set of modules for document structure, images, forms, basic tables, and object support. <br /><br /><b>XML</b><br />XML (Extensible Markup Language) is a specification developed by the W3C. XML is a pared-down version of SGML, designed especially for Web documents.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1436.html">RFC 1436</a>] The Internet Gopher Protocol (a distributed document search and retrieval protocol).
                		  </div>
		  
</section>

