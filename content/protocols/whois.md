---
id: protocol-whois
slug: whois
name: WhoIs
expandedName: WhoIs
origin: historical
provenance:
  source: protocols/protocol_WhoIs.htm
  sha256: 2d24877fb46d37ce57dc5beff61637032889902942e81fbb34a0c21bc9f89145
  provider: 'Colasoft Co., Ltd.'
aliases: []
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: WhoIs
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Ports
    html: 43 (TCP) server
  - label: Related protocols
    html: 'SMTP,<br />FTP,<br />Finger,<br />DNS'
originalUpdate: '2005-11-07 17:48:55'
rfcs:
  - 812
  - 954
  - 2345
  - 3912
related:
  - protocol-smtp
  - protocol-ftp
  - protocol-finger
  - protocol-dns
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

			WhoIs is a TCP-based transaction-oriented query/response protocol that is widely used for querying a database in order to determine the owner of a domain name, an IP address, or an autonomous system number on the Internet. While originally used to provide "white pages" services and information about registered domain names, current deployments cover a much broader range of information services. The protocol delivers its content in a human-readable format.
<br />
<br />Looking up information via the WhoIs service is a great way to find information about the owners of websites, or the ISPs of people WhoIs spam or are abusive users. When you query a users IP address, it should give you the contact information of their Internet Service Provider (ISP) and provide you with detailed contact information and an e-mail for abusive users.
<br />
<br />Anyone WhoIs runs a server should consider learning how to use the WhoIs information service. This is a very valuable tool that you can use in conjunction with your security logs to contact ISPs regarding problem users, or just for the average user WhoIs wants to report a spammer.
<br /><hr />
<br /><b>History</b>
<br />When the Internet was emerging out of the ARPANET entity, there was only one organization that handled all domain registrations, which was DARPA itself. WHOIS was standardized in the early 80's to look-up domains, people and other resources related domain and number registrations. Because all registration was done by one organization in that time, one centralized server was used for WhoIs queries. This made looking-up information very easy.
<br />
<br />Currently, in 2005, there are many more Generic Top-Level Domains than there were in the early 80's. There are also many, many more Country-Code Top-Level Domains. This has led to a complex network of registrars and registrar associations, especially as the management of Internet infrastructure has become more internationalized. As such, performing a WHOIS query on a domain requires knowing the correct, authoritative WHOIS server to use. Tools to do WHOIS proxy searches have become common, and there's a command-line WhoIs client (jwhois) which uses a configuration file to map-out domain names and network blocks to their appropriate registrar.
<br />
<br />In 2004, an IETF committee was been formed to standardize a WhoIs new way to look-up information on domain names and network numbers. The current working name for this proposed new standard is CRISP (Cross Registry Information Service Protocol).
<br />
<br /><b>Thin and Thick lookups</b>
<br />There are two ways that WhoIs information may be stored: Thick or Thin. With the thick model, one WhoIs server stores the WhoIs information from all the registrars for the particular set of data (so that one WhoIs server can respond with WhoIs information on all .org domains, for example). With the thin model, one WhoIs server stores the name of the WhoIs server of a registrar that has the full details on the data being looked up (such as the .com WhoIs servers, which refer the WhoIs query to the registrar that the domain was registered from). The thick model usually ensures consistent data and slightly faster lookups (since only one WhoIs server needs to be contacted).
<br />
<br />If a WhoIs client does not understand the information being returned, the results of a thin lookup (which include the WhoIs server of the registrar, and perhaps a few other necessary details) will be displayed to the end user. If the WhoIs client understood how to deal with this situation, it would display the full information from the registrar. Unfortunately, there is no standard in the WhoIs protocol for determining how to distinguish the thin model from the thick model.
<br />
<br />Exact implementation of which records are stored varies between domain name registries. Some Top Level Domains, including .com and .net, operate a thin WhoIs, allowing the various domain registrars the ability to maintain their own customers' data. Other registries, including .org, operate a thick model.
<br />
<br /><b>Querying WHOIS Servers</b>
<br />A WhoIs client makes a text request to the WhoIs server, then the WhoIs server replies with text content. All requests are terminated with ASCII CR and then ASCII LF. The response might contain more than one line of text, so the presence of ASCII CR or ASCII LF characters does not indicate the end of the response. The WHOIS server closes its connection as soon as the output is finished. The closed connection is the indication to the client that the response has been received.
<br />
<br /><ul><li><b>Command-Line clients</b>
<br />Originally the only method by which a WhoIs server could be contacted was to use a command-line text client. In most cases this was on a Unix or Unix-like platform. The WhoIs client software was (and still is) distributed as open source, as intended for an open standard. Various commercial Unix implementations may use their own implementations.
<br />
<br />A WhoIs command-line client typically has options to choose which host to connect to for WhoIs queries, with a default WhoIs server being compiled in. Additional options may allow control of what port to connect on, displaying additional debugging data, or changing recursion/referral behavior.
<br />
<br />Like most TCP/IP client/server applications, a WhoIs client takes the user input and then opens an IP socker to it's destination server. The WhoIs protocol is used to establish a connection on the appropriate port and send the query. The client waits for a response from the server, which it then either returns to the end-user or uses to make additional queries.<br /><br /></li> 

<li><b>Graphical Clients</b>
<br />The term "Graphical Client" may be a bit of a misnomer for a WhoIs client, since all the data to be derived from a WhoIs server is plain text, and the protocol is a relatively static one. There's not much interaction to do with a WhoIs server. In this context, the term "Graphical Client" is taken to mean a WhoIs client that runs as an application on a GUI OS and uses the OS's standard GUI for user interaction.
<br />
<br />One popular and freely available WhoIs client for Windows is part of the Sam-Spade package, and allows for hotlinking of lookups (i.e. you can click on part of the results of a WhoIs query to generate a new query).<br /><br /></li>

<li><b>Web-Based Clients</b>
<br />With the advent of the World-Wide Web and especially the loosening up of the Network Solutions monopoly, looking up WhoIs information via the Web has become quite common. Most early web-based WhoIs clients were merely front-ends to a command-line client, where the resulting output just got displayed on a webpage with little, if any, clean-up or formatting.
<br />
<br />Nowadays, web-based WhoIs clients usually perform the WhoIs queries directly and then format the results for display. Many such clients are proprietary, authored by Domain Registrars such as GoDaddy or Network Solutions. WhoIswever, there are Open Source clients such as the original GeekTools client or the much-improved WhoIs Proxy client.
<br />
<br />The need for web-based clients came from the fact that command-line WhoIs clients pretty much existed only in the Unix and large computing worlds. PC and Macintosh computers had no WhoIs clients with their native OS, so Registrars had to find a way to provide access to WhoIs data for potential customers. Many end-users still rely on such clients, even though command-line and graphical clients exist now for most home PC platforms.<br /><br /></li>

<li><b>Perl Modules</b>
<br />Not surprisingly, there are multiple modules available for Perl that work with WhoIs servers. Many modules are, sadly, not current and do not fully function with the current (2005) WhoIs server infrastructure. However, there is still plenty of useful functionality to derive including looking up AS numbers and registrant contacts.</li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0">If one places a request of the WHOIS server located at WhoIs.nic.mil for 
information about "Smith", the packets on the wire will look like:

          client                           server at WhoIs.nic.mil

          open TCP   ---- (SYN) ------------------------------&gt;
                     &lt;---- (SYN+ACK) -------------------------
          send query ---- "Smith" --------------------&gt;
          get answer &lt;---- "Info about Smith" ---------
                     &lt;---- "More info about Smith" ----
          close      &lt;---- (FIN) ------------------------------
                     ----- (FIN) -----------------------------&gt;</pre>
<br />	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>WhoIs</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>ARPANET</b><br />The Advanced Research Projects Agency Network (ARPANET) developed by ARPA of the U.S. Department of Defense was the world's first operational packet switching network, and the progenitor of the global Internet.<br /><br /><b>AS</b><br />AS (Autonomous system) is the unit of router policy, either a single network or a group of networks that is controlled by a common network administrator (or group of administrators) on behalf of a single administrative entity.<br /><br /><b>ASCII</b><br />ASCII (American Standard Code for Information Interchange) is the most common format for text files in computers and on the Internet. In an ASCII file, each alphabetic, numeric, or special character is represented with a 7-bit binary number (a string of seven 0s or 1s). 128 possible characters are defined. 
<br />
<br />Unix and DOS-based operating systems use ASCII for text files. Windows NT and 2000 uses a newer code, Unicode. IBM's S/390 systems use a proprietary 8-bit code called EBCDIC. Conversion programs allow different operating systems to change a file from one code to another. 
<br />
<br />ASCII was developed by the American National Standards Institute (ANSI).<br /><br /><b>Client</b><br />Clinet is a program which requests services of another program. It is a client part of a client-server architecture. Typically, a client is an application that runs on a personal computer or workstation and relies on a server to perform some operations. For example, an e-mail client is an application that enables you to send and receive e-mail.<br /><br /><b>DARPA</b><br />The Defense Advanced Research Projects Agency (DARPA) is an agency of the United States Department of Defense responsible for the development of new technology for use by the military. DARPA was responsible for funding development of many technologies which have had a major impact on the world, including computer networking (starting with the ARPANET, which eventually grew into the Internet), as well as NLS, which was both the first hypertext system, and an important precursor to the contemporary ubiquitous graphical user interface.<br /><br /><b>Database</b><br />A database is an organized collection of data. The term originated within the computer industry, but its meaning has been broadened by popular use, to the extent that the European Database Directive (which creates intellectual property rights for databases) includes non-electronic databases within its definition. This article is confined to a more technical use of the term; though even amongst computing professionals, some attach a much wider meaning to the word than others.<br /><br /><b>Domain Name</b><br />The term domain name has multiple meanings, all related to the [Domain Name System] (main article).
<br />*a name that is entered into a computer (e.g. as part of a website or other URL, or an email address) and then looked up in the global [Domain Name System] which informs the computer of the IP address(es) with that name. 
<br />*the product that registrars provide to their customers. 
<br />*a name looked up in the DNS for other purposes.<br /><br /><b>GUI</b><br />GUI(Graphical User Interface) is a program interface that takes advantage of the computer's graphics capabilities to make the program easier to use. Well-designed graphical user interfaces can free the user from learning complex command languages. On the other hand, many users find that they work more effectively with a command-driven interface, especially if they already know the command language.
<br /> 
<br />Graphical user interfaces, such as Microsoft Windows and the one used by the Apple Macintosh, feature the following basic components: 
<br />*pointer-- A symbol that appears on the display screen and that you move to select objects and commands. Usually, the pointer appears as a small angled arrow. Text -processing applications, however, use an I-beam pointer that is shaped like a capital I. 
<br />*pointing device-- A device, such as a mouse or trackball, that enables you to select objects on the display screen. 
<br />*icons-- Small pictures that represent commands, files, or windows. By moving the pointer to the icon and pressing a mouse button, you can execute a command or convert the icon into a window. You can also move the icons around the display screen as if they were real objects on your desk. 
<br />*desktop-- The area on the display screen where icons are grouped is often referred to as the desktop because the icons are intended to represent real objects on a real desktop. 
<br />*windows-- You can divide the screen into different areas. In each window, you can run a different program or display a different file. You can move windows around the display screen, and change their shape and size at will. 
<br />*menus-- Most graphical user interfaces let you execute commands by selecting a choice from a menu.
<br />
<br />In addition to their visual components, graphical user interfaces also make it easier to move data from one application to another. A true GUI includes standard formats for representing text and graphics. Because the formats are well-defined, different programs that run under a common GUI can share data. This makes it possible, for example, to copy a graph created by a spreadsheet program into a document created by a word processor.<br /><br /><b>IETF</b><br />IETF (Internet Engineering Task Force) is the main standards organization for the Internet. The IETF is a large open international community of network designers, operators, vendors, and researchers concerned with the evolution of the Internet architecture and the smooth operation of the Internet. It is open to any interested individual.<br /><br /><b>IP address</b><br />IP address is an identifier for a computer or device on a TCP/IP network. Networks using the TCP/IP protocol route messages based on the IP address of the destination. The format of an IP address is a 32-bit numeric address written as four numbers separated by periods. Each number can be zero to 255. For example, 1.160.10.240 could be an IP address. Within an isolated network, you can assign IP addresses at random as long as each one is unique. However, connecting a private network to the Internet requires using registered IP addresses (called Internet addresses) to avoid duplicates. 
<br />
<br />The four numbers in an IP address are used in different ways to identify a particular network and a host on that network. Four regional Internet registries -- ARIN, RIPE NCC, LACNIC and APNIC -- assign Internet addresses from the following three classes. 
<br />Class A - supports 16 million hosts on each of 126 networks 
<br />Class B - supports 65,000 hosts on each of 16,000 networks 
<br />Class C - supports 254 hosts on each of 2 million networks 
<br />
<br />The number of unassigned Internet addresses is running out, so a new classless scheme called CIDR is gradually replacing the system based on classes A, B, and C and is tied to adoption of IPv6.<br /><br /><b>ISP</b><br />Internet service provider (ISP) is a business or organization that offers users access to the Internet and related services. Many but not all ISPs are telephone companies. They provide services such as Internet transit, domain name registration and hosting, dial-up access, leased line access and colocation.<br /><br /><b>Internet</b><br />A global network connecting millions of computers. More than 100 countries are linked into exchanges of data, news and opinions. 
<br />
<br />Unlike online services, which are centrally controlled, the Internet is decentralized by design. Each Internet computer, called a host, is independent. Its operators can choose which Internet services to use and which local services to make available to the global Internet community. Remarkably, this anarchy by design works exceedingly well. 
<br />
<br />There are a variety of ways to access the Internet. Most online services, such as America Online, offer access to some Internet services. It is also possible to gain access through a commercial Internet Service Provider (ISP).<br /><br /><b>Macintosh computer</b><br />A popular model of computer made by Apple Computer. Introduced in 1984, the Macintosh features a graphical user interface (GUI) that utilizes windows, icons, and a mouse to make it relatively easy for novices to use the computer productively. Rather than learning a complex set of commands, you need only point to a selection on a menu and click a mouse button.<br /><br /><b>OS</b><br />The most important program that runs on a computer. Every general-purpose computer must have an operating system to run other programs. Operating systems perform basic tasks, such as recognizing input from the keyboard, sending output to the display screen, keeping track of files and directories on the disk, and controlling peripheral devices such as disk drives and printers.<br /><br /><b>Perl</b><br />Practical Extraction and Report Language is an interpreted procedural programming language designed by Larry Wall. Perl has a unique set of features partly borrowed from C, shell scripting (sh), awk, sed, and (to a lesser extent) many other programming languages (even Lisp).<br /><br /><b>Plain text</b><br />Plain text refers to textual data in ASCII format. Plain text is the most portable format because it is supported by nearly every application on every machine. It is quite limited, however, because it cannot contain any formatting commands.<br /><br /><b>RFC</b><br /><a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>(Requests for Comments) document series is a set of technical and organizational notes about the Internet (originally the ARPANET), beginning in 1969(when the Internet was the ARPANET). An Internet Document can be submitted to the IETF by anyone, but the IETF decides if the document becomes an RFC. Eventually, if it gains enough interest, it may evolve into an Internet standard. 
<br />
<br />Each <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>is designated by an <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>number. Once published, an <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>never changes. Modifications to an original <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>are assigned a new <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>number.<br /><br /><b>Register</b><br />(n) A, special, high-speed storage area within the CPU. All data must be represented in a register before it can be processed. For example, if two numbers are to be multiplied, both numbers must be in registers, and the result is also placed in a register. 
<br />
<br />(v) To notify a manufacturer that you have purchased its product. Registering a product is often a prerequisite to receiving customer support, and it is one of the ways that software producers control software piracy.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>Unix</b><br />Unix or UNIX is a computer operating system originally developed in the 1960s and 1970s by a group of AT&amp;T Bell Labs employees including Ken Thompson, Dennis Ritchie, and Douglas McIlroy. Today's Unix systems are split into various branches, developed over time by AT&amp;T, several other commercial vendors, as well as several non-profit organizations.<br /><br /><b>User</b><br />User is an individual who uses a computer. This includes expert programmers as well as novices. An end user is any individual who runs an application program.<br /><br /><b>WWW</b><br />WWW(World Wide Web) is a system of Internet servers that support specially formatted documents. The documents are formatted in a markup language called HTML (HyperText Markup Language) that supports links to other documents, as well as graphics, audio, and video files. There are several applications called Web browsers that make it easy to access the World Wide Web; Two of the most popular being Netscape Navigator and Microsoft's Internet Explorer.<br /><br /><b>Website</b><br />Website is a site (location) on the World Wide Web. Each Web site contains a home page, which is the first document users see when they enter the site. The site might also contain additional documents and files. Each site is owned and managed by an individual, company or organization.<br /><br /><b>WhoIs</b><br />WhoIs is an Internet utility that returns information about a domain name or IP address. For example, if you enter a domain name such as microsoft.com, whois will return the name and address of the domain's owner (in this case, Microsoft Corporation).<br /><br /><b>Windows</b><br />Windows (Microsoft Windows) is a family of operating systems for personal computers. Windows dominates the personal computer world, running, by some estimates, on 90% of all personal computers. The remaining 10% are mostly Macintosh computers. Like the Macintosh operating environment, Windows provides a graphical user interface (GUI), virtual memory management, multitasking, and support for many peripheral devices.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2345.html">RFC 2345</a>] Domain Names and Company Name Retrieval.
[<a href="https://www.rfc-editor.org/rfc/rfc3912.html">RFC 3912</a>] WHOIS Protocol Specification.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc812.html">RFC 812</a>, <a href="https://www.rfc-editor.org/rfc/rfc954.html">RFC 954</a>. <hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc812.html">RFC 812</a>] NICNAME/WHOIS.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc954.html">RFC 954</a>, <a href="https://www.rfc-editor.org/rfc/rfc3912.html">RFC 3912</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc954.html">RFC 954</a>] NICNAME/WHOIS.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3912.html">RFC 3912</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc812.html">RFC 812</a>.
                		  </div>
		  
</section>

