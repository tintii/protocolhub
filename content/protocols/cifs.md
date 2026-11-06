---
id: protocol-cifs
slug: cifs
name: CIFS
expandedName: Common Internet File System
origin: historical
provenance:
  source: protocols/protocol_CIFS.htm
  sha256: 01dc185eae44155f2b229518553f5aed6b447c4cdd2608ddbee2afb456a0e8f5
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Common Internet File System
layers:
  - Application Layer
suites:
  - SMB protocol suite
summary:
  - label: Protocol
    html: Common Internet File System
  - label: Protocol suite
    html: SMB protocol suite
  - label: Layer
    html: Application Layer
  - label: Related protocols
    html: 'FTP,<br />DNS,<br />HTTP,<br />SMB.'
originalUpdate: '2005-11-07 17:37:37'
rfcs: []
related:
  - protocol-ftp
  - protocol-dns
  - protocol-http
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

			The Common Internet File System (CIFS) is the standard way that computer users share files across corporate intranets and the Internet. An enhanced version of the Microsoft open, cross-platform Server Message Block (SMB) protocol, CIFS is a native file-sharing protocol in Windows 2000.
<br />
<br />CIFS defines a standard remote file-system access protocol for use over the Internet, enabling groups of users to work together and share documents across the Internet or within corporate intranets. CIFS is an open, cross-platform technology based on the native file-sharing protocols built into Microsoft Windows and other popular PC operating systems, and supported on dozens of other platforms. With CIFS, millions of computer users can open and share remote files on the Internet without having to install new software or change the way they work.
<br />
<br />CIFS had its beginnings in the networking protocols, sometimes called Server Message Block (SMB) protocols, developed in the late 1980's for PCs to share files over the then nascent Local Area Network technologies (e.g., Ethernet).
<br />
<br />CIFS incorporates the same high-performance, multiuser read and write operations, locking, and file-sharing semantics that are the backbone of today's sophisticated enterprise computer networks. CIFS runs over TCP/IP and utilizes the Internet's global Domain Naming Service (DNS) for scalability, and is optimized to support slower speed dial-up connections common on the Internet.
<br /><hr />
<br /><b>Background</b>
<br />In fact, most of the SMB traffic that crosses the Internet today has already integrated some of the feature set of CIFS into it. The fact is, SMB was designed for use in local area network environments. Because of this, security was very weak. CIFS addresses the security weaknesses of SMB by adding encryption and more secure authentication capabilities.
<br />
<br />CIFS also adds a more flexible naming schema, allowing the user to name a CIFS file server using the computer name, a DNS entry, or an IP address. These features are already built into Windows NT and Windows 98. As you can imagine, it would be very difficult to connect to systems across the Internet using standard NetBIOS names¨Ceither an entry would have to be added to the LMHOSTS file every time a system was accessed or someone would have to manage a global WINS system.
<br />
<br />SMB, as a LAN protocol, was not designed to work over slow dial-up links. It has some bad habits that do not work well over dial-up links, such as minimal support for client-side caching, a tendency to open and close a file for multiple writes, and no ability to connect to a different server according to the geographical location.
<br />
<br />Together, SMB and these additional features make up the standard called CIFS. It is one of many standards currently being proposed for Internet file sharing, the most notable competitor being Sun¡¯s WebNFS (covered briefly later in this chapter). Those who use SMB file sharing currently will find themselves migrating to CIFS whether they like it or not¨CNT 5.0 will support it exclusively. Fortunately, CIFS is backward compatible with the aging SMB protocols.
<br />
<br /><b>Key features CIFS offers</b>
<br /><ul><li><b>Integrity and concurrency</b>
<br />CIFS allows multiple clients to access and update the same file while preventing conflicts by providing file sharing and file locking. File sharing and file locking is the process of allowing one user to access a file at a time and blocking access to all other users. These sharing and locking mechanisms can be used over the Internet and intranets. They also permit aggressive caching and read-ahead and write-behind without loss of integrity. File caches of buffers must be cleared before the file is usable by other clients. These capabilities ensure that only one copy of a file can be active at a time, preventing data corruption.<br /><br /></li>

<li><b>Optimization for slow links</b>
<br />The CIFS protocol has been tuned to run well over slow-speed dial-up lines. The effect is improved performance for users who access the Internet using a modem.<br /><br /></li>

<li><b>Security</b>
<br />CIFS servers support both anonymous transfers and secure, authenticated access to named files. File and directory security policies are easy to administer.<br /><br /></li>

<li><b>Performance and scalability</b>
<br />CIFS servers are highly integrated with the operating system, and are tuned for maximum system performance.<br /><br /></li>

<li><b>Unicode File names</b>
<br />File names can be in any character set, not just character sets designed for English or Western European languages.<br /><br /></li>

<li><b>Global File names</b>
<br />Users do not have to mount remote file systems, but can refer to them directly with globally significant names (names that can be located anywhere on the Internet), instead of ones that have only local significance (on a local computer or LAN). Distributed File Systems (DFS) allows users to construct an enterprise-wide namespace. Uniform Naming Convention (UNC) file names are supported so a drive letter does not need to be created before remote files can be accessed.</li></ul>
<br />
<br />The CIFS messages can be broadly classified as follows:
<br /><ul><li>Connection establishment messages consist of commands that start and end a redirector connection to a shared resource at the server.<br /></li>
<li>Namespace and File Manipulation messages are used by the redirector to gain access to files at the server and to read and write them.<br /></li> 
<li>Printer messages are used by the redirector to send data to a print queue at a server and to get status information about the print queue.<br /></li> 
<li>Miscellaneous messages are used by the redirector to write to mailslots and named pipes.</li></ul> 
<br />
<br />Some of the platforms that CIFS supports are:
<br /><ul><li>Microsoft Windows 2000, Microsoft Windows NT, Microsoft Windows 98, Microsoft Windows 95<br /></li> 
<li>Microsoft OS/2 LAN Manager <br /></li>
<li>Microsoft Windows for Workgroups<br /></li> 
<li>UNIX<br /></li> 
<li>VMS<br /></li> 
<li>Macintosh<br /></li> 
<li>IBM LAN Server<br /></li> 
<li>DEC PATHWORKS<br /></li> 
<li>Microsoft LAN Manager for UNIX<br /></li> 
<li>3Com 3+Open<br /></li> 
<li>MS-Net</li></ul> 
<br />
<br />CIFS complements Hypertext Transfer Protocol (HTTP) while providing more sophisticated file sharing and file transfer than older protocols, such as FTP. CIFS is shown servicing a user request for data from a networked server in the following illustration.
<br /><img width="484" height="324" alt="Message_flow.gif" />
<br />
<br />CIFS is still in development. The most up-to-date version of the standard is defined in an informational <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>that does not currently have a number but is named Common Internet File System Protocol (CIFS/1.0). However, several features of CIFS have already worked themselves into the Windows NT operating system. For example, the SMB signing capabilities that were included in service pack 3 are an early release of the CIFS feature set
<br />
<br />Many organizations are developing CIFS implementations. Because the CIFS standards are still evolving, the functionality implemented in each may vary. However, backward-compatibility is a strong point of the CIFS standards, so these varying levels of support should still be provided for transparent functionality.
<br /><hr />
<br /><b>Practical uses for CIFS</b>
<br />First, CIFS will replace any current file sharing occurring in organizations that choose to migrate to the newest version of Windows and Windows NT. So any situation you use file sharing in today will be supported by CIFS.
<br />
<br />CIFS¡¯s advantage really lies in its ability to internetwork. In this way, organizations may move their existing file sharing structure onto the Internet, forming a true extranet. The security provided for within CIFS will allow users within an organization to access files from anywhere¨Cassuming they can get a connection to the Internet. It is less likely that companies will offer files to the public through CIFS shares. HTTP is better suited to this type of file-sharing because users who are not internal to an organization will require some guidance regarding which files are interesting and which are not¨Cmerely connecting to a shared folder and looking at filenames will not suffice.
<br />
<br />CIFS provides speed advantages over SMB. Therefore, it is an excellent candidate anywhere files need to be served rapidly. One vendor, Network Appliance, creates a simple file-sharing system that serves files onto a network faster and with a greater capacity than any other file server is capable of. Network Appliance supports CIFS¨Cthereby allowing any Windows and Windows NT clients to connect and share its resources. One potential use would be a shared file system for multiple front-end Web servers, perhaps based on Windows NT and IIS. In this way, many Web servers could serve the same files to users on the Internet without burdening the administrator with the task of replicating files between each Web server.
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
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>CIFS</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Authentication</b><br />The process of identifying an individual, usually based on a username and password. In security systems, authentication is distinct from authorization , which is the process of giving individuals access to system objects based on their identity. Authentication merely ensures that the individual is who he or she claims to be, but says nothing about the access rights of the individual.<br /><br /><b>CIFS</b><br />Common Internet File System (CIFS), a protocol that defines a standard for remote file access using millions of computers at a time. With CIFS, users with different platforms and computers can share files without having to install new software. CIFS runs over TCP/IP but uses the SMB (Server Message Block) protocol found in Microsoft Windows for file and printer access; therefore, CIFS will allow all applications, not just Web browsers, to open and share files across the Internet.<br /><br /><b>DNS</b><br />DNS(Domain Name System or Service or Server), an Internet service that translates domain names into IP addresses. Because domain names are alphabetic, they're easier to remember. The Internet however, is really based on IP addresses. Every time you use a domain name, therefore, a DNS service must translate the name into the corresponding IP address. For example, the domain name www.example.com might translate to 198.105.232.4. 
<br />
<br />The DNS system is, in fact, its own network. If one DNS server doesn't know how to translate a particular domain name, it asks another one, and so on, until the correct IP address is returned.<br /><br /><b>Encryption</b><br />The translation of data into a secret code. Encryption is the most effective way to achieve data security. To read an encrypted file, you must have access to a secret key or password that enables you to decrypt it. Unencrypted data is called plain text; encrypted data is referred to as cipher text. 
<br />
<br />There are two main types of encryption: asymmetric encryption (also called public-key encryption) and symmetric encryption.<br /><br /><b>FTP</b><br />FTP (File Transfer Protocol) is the protocol for exchanging files over the Internet. FTP works in the same way as HTTP for transferring Web pages from a server to a user's browser and SMTP for transferring electronic mail across the Internet in that, like these technologies, FTP uses the Internet's TCP/IP protocols to enable data transfer. 
<br />
<br />FTP is most commonly used to download a file from a server using the Internet or to upload a file to a server (e.g., uploading a Web page file to a server).<br /><br /><b>HTTP</b><br />HTTP(HyperText Transfer Protocol) defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands. For example, when you enter a URL in your browser, this actually sends an HTTP command to the Web server directing it to fetch and transmit the requested Web page. 
<br />
<br />The other main standard that controls how the World Wide Web works is HTML, which covers how Web pages are formatted and displayed. 
<br />
<br />HTTP is called a stateless protocol because each command is executed independently, without any knowledge of the commands that came before it. This is the main reason that it is difficult to implement Web sites that react intelligently to user input. This shortcoming of HTTP is being addressed in a number of new technologies, including ActiveX, Java, JavaScript and cookies. <br /><br /><b>LAN</b><br />Local-area network (LAN) is a computer network that spans a relatively small area. Most LANs are confined to a single building or group of buildings. However, one LAN can be connected to other LANs over any distance via telephone lines and radio waves. A system of LANs connected in this way is called a wide-area network (WAN). 
<br />
<br />Most LANs connect workstations and personal computers. Each node (individual computer ) in a LAN has its own CPU with which it executes programs, but it also is able to access data and devices anywhere on the LAN. This means that many users can share expensive devices, such as laser printers, as well as data. Users can also use the LAN to communicate with each other, by sending e-mail or engaging in chat sessions.<br /><br /><b>NetBIOS</b><br />NetBIOS(Network Basic Input Output System) is an API that augments the DOS BIOS by adding special functions for local-area networks (LANs). Almost all Windows-based LANs for PCs are based on the NetBIOS. Some LAN manufacturers have even extended it, adding additional network capabilities. <br /><br /><b>SMB</b><br />Server Message Block (SMB) is a message format used by DOS and Windows to share files, directories and devices. NetBIOS is based on the SMB format, and many network products use SMB. These SMB-based networks include LAN Manager, Windows for Workgroups, Windows NT, and LAN Server. There are also a number of products that use SMB to enable file sharing among different operating system platforms. A product called Samba, for example, enables UNIX and Windows machines to share directories and files.<br /><br />			</div>
		  
</section>

