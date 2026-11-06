---
id: protocol-wins
slug: wins
name: WINS
expandedName: Windows Internet Name Service
origin: historical
provenance:
  source: protocols/protocol_WINS.htm
  sha256: 313c4b4034b749e2c3368f50b9a133344c053d58f1decfe5a3b9327315e5f0a6
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Windows Internet Name Service
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Windows Internet Name Service
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Ports
    html: '1512 (TCP, UDP)'
originalUpdate: '2005-11-25 15:14:27'
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
  - id: references
    title: References
editorialNotes: []
---
<section aria-labelledby="description">
<h2 id="description">Description</h2>

			When using TCP/IP to communicate on a network, the friendly computer name that is used in a net user command, must be resolved to an IP address. This is necessary because TCP/IP does not know how to establish communication with a computer name, such as \server1, but does know how to communicate with 223.223.223.1. In order to resolve the computer name to its IP address, TCP/IP can use a variety of methods: broadcasts, a static mapping file (LMHOSTS), or a name server (WINS). The Windows Internet Name Service (WINS) was designed to eliminate the need for broadcasts to resolve computer names to IP addresses and provide a dynamic database that maintains computer name to IP address mappings. There are two types of systems that use WINS:
<br />
<br /><ul><li><b>WINS Clients</b><br /></li>
<li>WINS Clients are configured with the IP address of one or more WINS Servers. On startup, WINS Clients communicate directly with a WINS Server to register their computer name and corresponding IP address. When a WINS Client needs to resolve a computer name to an IP address, such as when a net use \servershare is performed, the WINS Client sends a request to the WINS Server for the IP address for the computer name being used. 
<br /><br /></li>
<li><b>WINS Servers</b><br /></li>
<li>A WINS (Windows Internet Name Service) Server maintains a database that maps the IP addresses of WINS Clients to their computer name, also referred to as a NetBIOS name. Therefore, instead of using broadcasts to resolve a computer name to an IP address when trying to establish a network connection, WINS Clients request the IP address for the desired system from a WINS Server which retrieves the IP address from its database.</li></ul>
<br /><hr />
<br />WINS has been enhanced for the release of Microsoft Windows 2000 Server. The result is an easier-to-manage and more robust solution for mapping NetBIOS names to IP addresses on Transmission Control Protocol/Internet Protocol (TCP/IP) networks. 
<br />
<br />Windows 2000 WINS includes server enhancements, additional client functions, and an improved management tool. WINS provides a distributed database for registering and querying dynamic computer name-to-IP address mapping in a routed network environment. This support for dynamic registering of NetBIOS computer names means that WINS can be used with Dynamic Host Configuration Protocol (DHCP) services to provide easy configuration and administration of Windows-based TCP/IP networks. 
<br />
<br />The WINS server solves the problems inherent in resolving NetBIOS names through IP broadcasts, and frees network administrators from the demands of updating static mapping files, such as LMHOST files. WINS, which is compliant with the NetBIOS Name Server (NBNS) <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>s (1001/1002), also automatically updates the WINS database when dynamic addressing through DHCP results in new IP addresses for computers that move between subnets. Neither the user nor the network administrator needs to make manual accommodations for such name resolutions.
<br />
<br />The new implementation of WINS provides a number of features, including:
<br /><ul><li><b>Persistent connections</b>
<br />This configurable feature allows each WINS server to maintain a persistent connection with one or more replication partners to eliminate the overhead of opening and terminating connections and to increase the speed of replication. <br /><br /></li>

<li><b>Manual tombstoning</b>
<br />Use of the Manual tombstoning feature marks a record for deletion so that the tombstone state for the record is replicated across all WINS servers, preventing an undeleted copy of the record on a different server database from being re-propagated.<br /><br /></li>

<li><b>Improved management tools</b>
<br />The WINS Manager is fully integrated with the Microsoft Management Console (MMC), providing a more user-friendly and powerful environment for viewing and managing WINS information.<br /><br /></li>

<li><b>Enhanced filtering and record searching</b>
<br />These functions help locate records of interest by showing only those that fit a specific criteria. This is particularly useful for analyzing very large WINS databases.<br /><br /></li>

<li><b>Dynamic record deletion and multi-select</b>
<br />Managing the WINS database is made easier with dynamic record deletion and multi-select. Dynamic and static records can be deleted, and the point-and-click interface makes it possible to delete files with non-alphanumeric characters that could not be handled from the command line.<br /><br /></li>

<li><b>Record verification and version number validation</b>
<br />Two tools are available for quickly checking the consistency between various WINS servers. The tests are done by comparing the IP addresses of a NetBIOS name query returned from different WINS servers or by examining owner address to version-number mapping tables.<br /><br /></li>

<li><b>Export function</b>
<br />The Export command can be used to place WINS data into a comma-delimited text file that can be imported into Microsoft Excel, reporting tools, scripting applications, and so on, for analysis and reporting.<br /><br /></li>

<li><b>Increased fault tolerance</b>
<br />Windows 2000 and Windows 98 allow a client to specify more than two WINS servers (up to a maximum of 12 addresses) per interface. The extra WINS server addresses are used only if the primary and secondary WINS servers fail to respond.<br /><br /></li>

<li><b>Dynamic re-registration</b>
<br />WINS clients can now re-register their NetBIOS name-to- IP address mapping without rebooting the server.</li></ul>
<br />
<br />All of this combines to make Windows 2000 WINS a superior choice for NetBIOS name resolution. The new generation of WINS services are designed to make many network management tasks much easier for network managers.
<br /><hr />
<br /><b>How does WINS work?</b> 
<br />As soon as a WINS client obtains the IP configuration from the DHCP server (or on bootup if the WINS server's IP address was statically assigned), the WINS client issues a NameRegistrationRequest message to the WINS server. Unlike standard NetBIOS behavior, this message isn't a broadcast. It is a message sent only to the primary WINS server and includes the client¡¯s computer name and IP address. 
<br />
<br />The WINS server checks to see whether the computer name is listed in its database. If it isn't listed, the WINS server assumes that it's unique on the network and responds with a positive WINS name registration response. The registration response includes a period called the time-to-live (TTL) during which the registration is valid. If the name isn't unique, a negative response is sent to the client, and the WINS server sends a challenge to the name's current owner. Typically, the computer that currently owns the name acknowledges that it is alive on the network and the negative response message informs the new computer that there is a conflict. 
<br />
<br />To configure DHCP and WINS in an NT network, DHCP options 44 and 46 must be configured. Recall from Chapter 8 that option 44 is the IP address of the WINS/NBNS server, and option 46 is the Node Type of the WINS/NBNS server. As we explained in Chapter 6, there are four possible node types, three of which are applicable in this instance: 
<br /><ul><li>P node (point-to-point) 
<br /></li><li>M node (mixed - broadcasts then point-to-point) 
<br /></li><li>H node (hybrid - point-to-point then broadcast) </li></ul>
<br />
<br />H node is the default configuration and is suitable for most networks. If you have a small network or if your WINS server is located across a router, you may want to consider M node. This may provide some network-traffic optimization if most of your resources are local and not across the router.
<br />
<br /><b>Advantages and disadvantages</b>
<br />There are many advantages to using WINS. It provides dynamic NetBIOS name resolution, thereby reducing or eliminating the administrative effort required to update HOSTS, LMHOSTS, and/or DNS files. WINS reduces the number of IP broadcasts, thus reducing network traffic. It also provides a centralized management scheme for a NetBIOS computer name database, and it allows replication of that database to other WINS servers. 
<br />
<br />The disadvantages of using WINS include 
<br /><ul><li>WINS is a proprietary Microsoft service. Only Windows-based computers or computers that understand SMB (Server Message Block) networking or Common Internet File System (CIFS) can be clients. Your options include computers running NT Server, NT Workstation, Windows 95/98, Windows for Workgroups, LAN Manager 2.x, or systems running products like SAMBA. However, a WINS proxy can be used to help resolve NetBIOS name queries for non-WINS enabled computers.<br /><br /></li> 

<li>Usually, only NT servers can be WINS servers. However, you can create a WINS server using SAMBA; this method is discussed in "WINS Servers - Unix and Linux" later in this chapter. <br /><br /></li>

<li>WINS adds one more level of complication to the Microsoft name resolution service. 2000 Server is striving to eliminate the need for WINS by adopting dynamic DNS and encouraging the elimination of NetBIOS traffic. However, because many applications use NetBIOS, eliminating NetBIOS is probably not a practical solution in the short term.</li></ul>
<br /><hr />
<br /><b>Setting up WINS servers</b> 
<br />The following sections describe WINS server setup and operation in NT 4.0 networks, 2000 Server networks, and heterogeneous Unix/NT networks. 
<br />
<br /><ul><li><b>WINS Servers - NT 4.0 </b>
<br />Normally only NT 4.0 and 2000 Server computers can be set up as WINS servers. To add the WINS service to an NT 4.0 computer, click Start, and select Settings, Control Panel, and Network. Switch to the Services tab and click Add. Select Windows Internet Naming Service, insert the NT CD-ROM and select {drive letter}/I386. (If you are installing on an Alpha-processor-based server, go to the Alpha directory instead of I386.) Only administrators, by default, can add the WINS (or any) service to an NT computer. After you install WINS, reboot the computer and you are in business. Once the WINS service is installed, your Administrative Tools list contains WINS Manager option, and you can use this to configure WINS.<br /><br /></li> 

<li><b>WINS Servers - 2000 Server </b>
<br />WINS servers are typically not required with 2000 Server because most of the NetBIOS-related services are gone. However, if you have clients like Windows 95, Windows for Workgroups, NT Workstation and Server 3.x and 4.0, you may want to set up a WINS server on your 2000 Server. Click Start and select Settings, Control Panel, Add/Remove Programs, Configure Windows. Click Components and select Networking Options. Check the WINS server box. 
<br />
<br />With NT 4.0, when the statistics pane of WINS Manager window is grayed, the WINS server isn't running. If the service is running, it shows the server start time. WINS Manager user interface in 2000 Server uses the Microsoft Management Console (MMC) and, as a result, is more intuitive. For example, it is easier to determine the server status. <br /><br /></li>

<li><b>WINS Servers - Unix and Linux </b>
<br />One of the most popular and well-written networking programs is SAMBA, an SMB server for Unix and Unix-like operating systems. Versions of SAMBA run on VMS, NetWare, MVS, MPE/ix, and other operating systems. SAMBA can be configured as a WINS server. Typically this is recommended only if you don't use an NT Server as a primary domain controller (PDC). In situations where you have a large number of Windows computers but no NT Servers - for example, a remote office or a department that won't use NT Servers - you could consider using this free product. 
<br />
<br />After you install SAMBA, all you have to do to have a Unix-based WINS server is edit the smb.conf file, usually located in the /etc directory. Look for the entry "wins support = yes." By default this is a comment. Uncomment this line by removing the semicolon, and you have a WINS server that runs on a Unix computer. Make sure that the entry "wins server = a.b.c.d" remains a comment because SAMBA can't be a WINS server and a WINS client simultaneously.</li></ul>
<br />
<br /><b>Setting up WINS clients </b>
<br />If you are configuring WINS clients using a DHCP server, you don't have to worry about the following steps. Configuring clients using DHCP also avoids the requests from NT for a reboot whenever network parameters are changed. Just set up the DHCP server options 44 and 46 via the DHCP Manager menu item DHCP Options. Select the DHCP server, DHCP Options, and the appropriate scope. Choose Scope to configure options for one scope only; choose Global to configure options for all scopes. Select the options and the values in the resulting screen. 
<br />
<br />To force the client to surrender its current IP address and renew the newly configured IP address, go to the client and use the ipconfig/release and ipconfig /renew commands at the command prompt (or from the graphical utility winipcfg.exe in the case of Windows 95 or 98 computers). 
<br />
<br /><ul><li><b>WINS Clients - NT 4.0 </b>
<br />To use WINS, NT 4.0 clients must be configured with the address of a WINS server. If you are using DHCP, the clients are configured automatically, but you can also assign an address. To configure an NT 4.0 client to use WINS, open the Control Panel, select Network, Protocols, TCP/IP, and switch to the WINS Address tab (Figure 9.1). Specify the primary and secondary WINS servers and, if you wish, enable DNS lookup or LMHOSTS lookup. If DNS lookup is selected, DNS will be used if WINS fails to resolve the name. The resolution is performed by joining the domain name with the computer name to form a fully-qualified domain name. If LMHOSTS is selected, LMHOSTS will be used to resolve a query if the WINS query fails. If both are selected, the order of name resolution attempts for the host name will be as follows: 
<br />
<br /><ul><li>Check local computer host name. <br /></li>
<li>Check the HOSTS file. <br /></li>
<li>If there is no entry in the HOSTS file and if a DNS server is available, query the DNS server. <br /></li>
<li>If the DNS server doesn't respond and the resource was accessed using a name, try NetBIOS name resolution. <br /></li>
<li>If the resource is being accessed through an IP address, send a NetBIOS request (NetBIOS Adapter Status Request) to the IP address for a list of NetBIOS names registered for that adapter.<br /></li> 
<li>Parse the results for a computer name. </li></ul>
<br />
<br />On the other hand, if a NetBIOS name resolution is being attempted, the order tends to be as follows: 
<br />
<br /><ul><li>Check the NetBIOS local name cache. <br /></li>
<li>Check the NetBIOS name server (WINS). <br /></li>
<li>Send broadcasts within an IP subnetwork. <br /></li>
<li>Check the LMHOSTS file(s). <br /></li>
<li>Check the HOSTS file. <br /></li>
<li>Query the DNS server. </li></ul>
<br />
<br /></li><li><b>WINS Clients - 2000 Server </b>
<br />If you have a mixed NT 4.0 and 2000 Server network or if you are using WINS/NBNS servers (for example, SAMBA) on other platforms, you may need to configure 2000 Server clients (workstations and servers) to be registered and resolved through WINS servers. Open the Control Panel, select Network Connections, and right-click Local Area Connections. From the menu, select Properties, Internet Protocol, Advanced, and switch to the WINS tab. Add the IP address of your WINS server and you can use the specified WINS server for NetBIOS name resolution. <br /><br /></li>

<li><b>WINS Clients - Unix and Unix-like Systems </b>
<br />It's very easy to configure any computer running SAMBA as a WINS client, but recall from the server discussion that SAMBA can't be a WINS server and a WINS client at the same time. So, first ensure that the smb.conf file entry "wins support = yes" (which configures the SAMBA computer as a WINS server) is a comment (the default). Then edit the next line to read "wins server = www.xxx.yyy.zzz ," where www.xxx.yyy.zzz is the IP address of your WINS server. 
<br />
<br />You don't have to reboot the Unix computer. SAMBA automatically reads the configuration file changes. To force the changes to take place immediately, rather than waiting for SAMBA to read the changes from the configuration file, you can stop and restart the SAMBA programs using the /etc/rc.d/init.d/smb stop and /etc/rc.d/init.d/smb start commands.</li></ul>
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
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>WINS</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Broadcast</b><br />Broadcast is the term used to describe communication where a piece of information is sent from one point to all other points. Broadcasting is a useful feature in e-mail systems. It is also supported by some fax systems. 
<br />
<br />In networking, a distinction is made between broadcasting and multicasting. Broadcasting sends a message to everyone on the network whereas multicasting sends a message to a select list of recipients.<br /><br /><b>Client</b><br />Clinet is a program which requests services of another program. It is a client part of a client-server architecture. Typically, a client is an application that runs on a personal computer or workstation and relies on a server to perform some operations. For example, an e-mail client is an application that enables you to send and receive e-mail.<br /><br /><b>Command</b><br />Command is an instruction to a computer or device to perform a specific task. Commands come in different forms. They can be: special words (keywords) that a program understands, function keys 
<br />choices in a menu and buttons or other graphical objects on your screen 
<br />
<br />Every program that interacts with people responds to a specific set of commands. The set of commands and the syntax for entering them is called the user interface and varies from one program to another.<br /><br /><b>DNS</b><br />DNS(Domain Name System or Service or Server), an Internet service that translates domain names into IP addresses. Because domain names are alphabetic, they're easier to remember. The Internet however, is really based on IP addresses. Every time you use a domain name, therefore, a DNS service must translate the name into the corresponding IP address. For example, the domain name www.example.com might translate to 198.105.232.4. 
<br />
<br />The DNS system is, in fact, its own network. If one DNS server doesn't know how to translate a particular domain name, it asks another one, and so on, until the correct IP address is returned.<br /><br /><b>Database</b><br />A database is an organized collection of data. The term originated within the computer industry, but its meaning has been broadened by popular use, to the extent that the European Database Directive (which creates intellectual property rights for databases) includes non-electronic databases within its definition. This article is confined to a more technical use of the term; though even amongst computing professionals, some attach a much wider meaning to the word than others.<br /><br /><b>Dynamic</b><br />Dynamic refers to actions that take place at the moment they are needed rather than in advance. For example, many programs perform dynamic memory allocation, which means that they do not reserve memory ahead of time, but seize sections of memory when needed. In general, such programs require less memory, although they may run a little more slowly.<br /><br /><b>Host</b><br />Host is a computer system that is accessed by a user working at a remote location. Typically, the term is used when there are two computer systems connected by modems and telephone lines. The system that contains the data is called the host, while the computer at which the user sits is called the remote terminal. 
<br />
<br />Host can refer to a computer that is connected to a TCP/IP network, including the Internet. Each host has a unique IP address. 
<br />
<br />Host can refer to provide the infrastructure for a computer service too. For example, there are many companies that host Web servers. This means that they provide the hardware, software, and communications lines required by the server, but the content on the server may be controlled by someone else.<br /><br /><b>IP address</b><br />IP address is an identifier for a computer or device on a TCP/IP network. Networks using the TCP/IP protocol route messages based on the IP address of the destination. The format of an IP address is a 32-bit numeric address written as four numbers separated by periods. Each number can be zero to 255. For example, 1.160.10.240 could be an IP address. Within an isolated network, you can assign IP addresses at random as long as each one is unique. However, connecting a private network to the Internet requires using registered IP addresses (called Internet addresses) to avoid duplicates. 
<br />
<br />The four numbers in an IP address are used in different ways to identify a particular network and a host on that network. Four regional Internet registries -- ARIN, RIPE NCC, LACNIC and APNIC -- assign Internet addresses from the following three classes. 
<br />Class A - supports 16 million hosts on each of 126 networks 
<br />Class B - supports 65,000 hosts on each of 16,000 networks 
<br />Class C - supports 254 hosts on each of 2 million networks 
<br />
<br />The number of unassigned Internet addresses is running out, so a new classless scheme called CIDR is gradually replacing the system based on classes A, B, and C and is tied to adoption of IPv6.<br /><br /><b>Internet</b><br />A global network connecting millions of computers. More than 100 countries are linked into exchanges of data, news and opinions. 
<br />
<br />Unlike online services, which are centrally controlled, the Internet is decentralized by design. Each Internet computer, called a host, is independent. Its operators can choose which Internet services to use and which local services to make available to the global Internet community. Remarkably, this anarchy by design works exceedingly well. 
<br />
<br />There are a variety of ways to access the Internet. Most online services, such as America Online, offer access to some Internet services. It is also possible to gain access through a commercial Internet Service Provider (ISP).<br /><br /><b>Linux</b><br />Linux is a freely-distributable open source operating system that runs on a number of hardware platforms. The Linux kernel was developed mainly by Linus Torvalds. Because it's free, and because it runs on many platforms, including PCs and Macintoshes, Linux has become an extremely popular alternative to proprietary operating systems.<br /><br /><b>MMC</b><br />MMC (Microsoft Management Console) is an extensible common presentation service for management applications. MMC is included in the Windows&amp;reg; 2000 operating system.<br /><br /><b>Microsoft</b><br />Microsoft founded in 1975 by Paul Allen and Bill Gates, Microsoft Corporation is one of the largest and most influential companies in the personal computer industry. In addition to developing the de facto standard operating systems -- DOS and Windows -- Microsoft has a strong presence in almost every area of computer software, from programming tools to end-user applications.<br /><br /><b>Network</b><br />Network is a group of two or more computer systems linked together. There are many types of computer networks, including: 
<br />LANs (local-area networks), WANs (wide-area networks), CANs (campus-area networks), MANs (metropolitan-area networks) and HANs (home-area networks).
<br />
<br />In addition to these types, the following characteristics are also used to categorize different types of networks: Topology, protocol and architecture.<br /><br /><b>SMB</b><br />Server Message Block (SMB) is a message format used by DOS and Windows to share files, directories and devices. NetBIOS is based on the SMB format, and many network products use SMB. These SMB-based networks include LAN Manager, Windows for Workgroups, Windows NT, and LAN Server. There are also a number of products that use SMB to enable file sharing among different operating system platforms. A product called Samba, for example, enables UNIX and Windows machines to share directories and files.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>TCP/IP</b><br />TCP/IP(transmission Control Protocol/Internet Protocol) is the suite of communications protocols used to connect hosts on the Internet. TCP/IP uses several protocols, the two main ones being TCP and IP. TCP/IP is built into the UNIX operating system and is used by the Internet, making it the de facto standard for transmitting data over networks. Even network operating systems that have their own protocols, such as Netware, also support TCP/IP.<br /><br /><b>TTL</b><br />TTL (Time to Live) is a field in the Internet Protocol (IP) that specifies how many more hops a packet can travel before being discarded or returned.<br /><br /><b>Unix</b><br />Unix or UNIX is a computer operating system originally developed in the 1960s and 1970s by a group of AT&amp;T Bell Labs employees including Ken Thompson, Dennis Ritchie, and Douglas McIlroy. Today's Unix systems are split into various branches, developed over time by AT&amp;T, several other commercial vendors, as well as several non-profit organizations.<br /><br /><b>WINS</b><br />WINS (Windows Internet Naming Service) is Microsoft's implementation of NetBIOS Name Server (NBNS) on Windows, a name server and service for NetBIOS computer names. Effectively, it is to NetBIOS names what DNS is to domain names - a central store for information, so that when a client needs to contact a computer on the network, it can query the central database for the address to contact rather than broadcasting a request for which address to contact.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="http://www.microsoft.com/ntserver">Microsoft Windows T Server 4.0 Windows Internet Naming Service (WINS) Architecture and Capacity Planning</a>
                		  </div>
		  
</section>

