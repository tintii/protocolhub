---
id: protocol-rlogin
slug: rlogin
name: RLOGIN
expandedName: Remote Login Protocol
origin: historical
provenance:
  source: protocols/protocol_RLOGIN.htm
  sha256: 3429c3b328d212fa41934447b659edd9594059e0135953c7a6e386d679c7125e
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Remote Login Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Remote Login Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Ports
    html: 513 (TCP)
  - label: Related protocols
    html: 'FTP,<br />TELNET'
originalUpdate: '2005-11-11 16:45:59'
rfcs:
  - 1258
  - 1282
  - 3027
related:
  - protocol-ftp
  - protocol-telnet
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

			The RLOGIN (Remote login) facility provides a remote-echoed, locally flow-controlled virtual terminal with proper flushing of output. It is widely used between UNIX hosts because it provides transport of more of the Unix terminal environment semantics than does the Telnet protocol, and because on many Unix hosts it can be configured not to require user entry of passwords when connections originate from trusted hosts.
<br />
<br />The rlogin protocol requires the use of the TCP. The contact port is 513. An eight-bit transparent stream is assumed.
<br />
<br />Remote login occurs when a user connects to an Internet host to use its native user interface. In the 1970s and early 1980s, text-oriented terminals were the predominate tools for computer users. Protocols such as TELNET and RLOGIN were developed for terminal users to use their terminals as if they were directly connected to a remote system. UNIX systems, with their predominately terminal-oriented interface, still make heavy use of these protocols. 
<br />
<br />In the late 1980s, as graphical, window-oriented user interfaces became popular, protocols were developed to allow remote windowing operations, much as earlier protocols allowed remote terminal operations. Although conceptually similar, the operation of such windowing protocols is markedly different, and they are not discussed here.
<br /><hr />
<br /><b>Connection Establishment</b>
<br />Upon connection establishment, the client sends four null-terminated strings to the server. The first is an empty string (i.e., it consists solely of a single zero byte), followed by three non-null strings: the client username, the server username, and the terminal type and speed. 
<br />
<br />        
<br />        client-user-name
<br />        server-user-name
<br />        terminal-type/speed
<br />
<br />        For example:
<br />        
<br />        bostic
<br />        kbostic
<br />        vt100/9600
<br />
<br />The server returns a zero byte to indicate that it has received these strings and is now in data transfer mode. Window size negotiation may follow this initial exchange.
<br />
<br /><b>From Client to Server (and Flow Control)</b>
<br />Initially, the client begins operation in "cooked" (as opposed to "raw") mode. In this mode, the START and STOP (usually ASCII DC1, DC3) characters are intercepted and interpreted by the client to start and stop output from the remote server to the local terminal, whereas all other characters are transmitted to the remote host as they are received.
<br />
<br />In "raw" mode, the START and STOP characters are not processed locally, but are sent as any other character to the remote server. The server thus determines the semantics of the START and STOP characters when in "raw" mode; they may be used for flow control or have quite different meanings independent of their ordinary usage on the client.
<br />
<br /><b>Screen/Window Size</b>
<br />The remote server indicates to the client that it can accept window size change information by requesting a window size message (as out of band data) just after connection establishment and user identification exchange. The client should reply to this request with the current window size.
<br />
<br />If the remote server has indicated that it can accept client window size changes and the size of the client's window or screen dimensions changes, a 12-byte special sequence is sent to the remote server to indicate the current dimensions of the client's window, should the user process running on the server care to make use of that information.
<br />
<br />The window change control sequence is 12 bytes in length, consisting of a magic cookie (two consecutive bytes of hex FF), followed by two bytes containing lower-case ASCII "s", then 8 bytes containing the 16-bit values for the number of character rows, the number of characters per row, the number of pixels in the X direction, and the number of pixels in the Y direction, in network byte order. Thus:
<br />
<br />        FF FF s s rr cc xp yp
<br />
<br />Other flags than "ss" may be used in future for other in-band control messages. None are currently defined.
<br />
<br /><b>From Server to Client</b>
<br />Data from the remote server is sent to the client as a stream of characters. Normal data is simply sent to the client's display, but may be processed before actual display (tabs expanded, etc.).
<br />
<br />The server can imbed single-byte control messages in the data stream by inserting the control byte in the stream of data and pointing the TCP "urgent-data" pointer at the control byte. When a TCP urgent - data pointer is received by the client, data in the TCP stream up to the urgent byte is buffered for possible display after the control byte is handled, and the control byte pointed to is received and interpreted as follows:
<br /><ul><li>02   A control byte of hex 02 causes the client to discard all buffered data received from the server that has not yet been written to the client user's screen.<br /><br /></li>

<li>10   A control byte of hex 10 commands the client to switch to "raw" mode, where the START and STOP characters are no longer handled by the client, but are instead treated as plain data.<br /><br /></li>

<li>20   A control byte of hex 20 commands the client to resume interception and local processing of START and STOP flow control characters.<br /><br /></li>

<li>80   The client responds by sending the current window size as above.</li></ul>
<br />
<br />All other values of the urgent-data control byte are ignored. In all cases, the byte pointed to by the urgent data pointer is not written to the client user's display.
<br />
<br /><b>Connection Closure</b>
<br />When the TCP connection closes in either direction, the client or server process which notices the close should perform an orderly shut-down, restoring terminal modes and notifying the user or processes of the close before it closes the connection in the other direction.
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
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>RLOGIN</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>ASCII</b><br />ASCII (American Standard Code for Information Interchange) is the most common format for text files in computers and on the Internet. In an ASCII file, each alphabetic, numeric, or special character is represented with a 7-bit binary number (a string of seven 0s or 1s). 128 possible characters are defined. 
<br />
<br />Unix and DOS-based operating systems use ASCII for text files. Windows NT and 2000 uses a newer code, Unicode. IBM's S/390 systems use a proprietary 8-bit code called EBCDIC. Conversion programs allow different operating systems to change a file from one code to another. 
<br />
<br />ASCII was developed by the American National Standards Institute (ANSI).<br /><br /><b>Bit</b><br />Bit (binary digit), the smallest unit of information on a machine, a leading statistician and adviser to five presidents. A single bit can hold only one of two values: 0 or 1. More meaningful information is obtained by combining consecutive bits into larger units. For example, a byte is composed of 8 consecutive bits.<br /><br /><b>Byte</b><br />Byte (binary term) is a unit of storage capable of holding a single character. On almost all modern computers, a byte is equal to 8 bits. Large amounts of memory are indicated in terms of kilobytes (1,024 bytes), megabytes (1,048,576 bytes), and gigabytes (1,073,741,824 bytes).<br /><br /><b>Client</b><br />Clinet is a program which requests services of another program. It is a client part of a client-server architecture. Typically, a client is an application that runs on a personal computer or workstation and relies on a server to perform some operations. For example, an e-mail client is an application that enables you to send and receive e-mail.<br /><br /><b>Connection</b><br />A logical communication path identified by a pair of endpoints.
<br />
<br />In dbAnywhere, a connection refers to the connection to the SQL Anywhere database.<br /><br /><b>Cookie</b><br />A cookie is a random number used by a mobile node to prevent spoofing by a bogus correspondent node in the return routability procedure.<br /><br /><b>Data</b><br />* Distinct pieces of information, usually formatted in a special way. All software is divided into two general categories: data and programs. Programs are collections of instructions for manipulating data. Data can exist in a variety of forms -- as numbers or text on pieces of paper, as bits and bytes stored in electronic memory, or as facts stored in a person's mind. Strictly speaking, data is the plural of datum, a single piece of information. In practice, however, people use data as both the singular and plural form of the word. 
<br />
<br />* The term data is often used to distinguish binary machine-readable information from textual human-readable information. For example, some applications make a distinction between data files (files that contain binary data) and text files (files that contain ASCII data). 
<br />
<br />* In database management systems, data files are the files that store the database information, whereas other files, such as index files and data dictionaries, store administrative information, known as metadata.<br /><br /><b>Host</b><br />Host is a computer system that is accessed by a user working at a remote location. Typically, the term is used when there are two computer systems connected by modems and telephone lines. The system that contains the data is called the host, while the computer at which the user sits is called the remote terminal. 
<br />
<br />Host can refer to a computer that is connected to a TCP/IP network, including the Internet. Each host has a unique IP address. 
<br />
<br />Host can refer to provide the infrastructure for a computer service too. For example, there are many companies that host Web servers. This means that they provide the hardware, software, and communications lines required by the server, but the content on the server may be controlled by someone else.<br /><br /><b>Identification</b><br />In a biometric security system, the process of comparing a biometric data sample against all of the system databased reference templates in order to establish the identity of the person trying to gain access to the system.<br /><br /><b>Internet</b><br />A global network connecting millions of computers. More than 100 countries are linked into exchanges of data, news and opinions. 
<br />
<br />Unlike online services, which are centrally controlled, the Internet is decentralized by design. Each Internet computer, called a host, is independent. Its operators can choose which Internet services to use and which local services to make available to the global Internet community. Remarkably, this anarchy by design works exceedingly well. 
<br />
<br />There are a variety of ways to access the Internet. Most online services, such as America Online, offer access to some Internet services. It is also possible to gain access through a commercial Internet Service Provider (ISP).<br /><br /><b>Pixel</b><br />Pixel (Picture Element) is a single point in a graphic image. Graphics monitors display pictures by dividing the display screen into thousands (or millions) of pixels, arranged in rows and columns. The number of bits used to represent each pixel determines how many colors or shades of gray can be displayed. For example, in 8-bit color mode, the color monitor uses 8 bits for each pixel, making it possible to display 2 to the 8th power (256) different colors or shades of gray.<br /><br /><b>Port</b><br />Port is an interface on a computer to which you can connect a device. Personal computers have various types of ports. Internally, there are several ports for connecting disk drives, display screens, and keyboards. Externally, personal computers have ports for connecting modems, printers, mice, and other peripheral devices. 
<br />
<br />Almost all personal computers come with a serial RS-232C port or RS-422 port for connecting a modem or mouse and a parallel port for connecting a printer. On PCs, the parallel port is a Centronics interface that uses a 25-pin connector. SCSI (Small Computer System Interface) ports support higher transmission speeds than do conventional ports and enable you to attach up to seven devices to the same port.<br /><br /><b>Process</b><br />(n) An executing program. The term is used loosely as a synonym of task. 
<br />(v) To perform some useful operations on data.<br /><br /><b>RLOGIN</b><br />Rlogin (remote login) is a Unix command that allows an authorized user to login to other UNIX machines (hosts) on a network and to interact as if the user were physically at the host computer. Once logged in to the host, the user can do anything that the host has given permission for, such as read, edit, or delete files.<br /><br /><b>Remote</b><br />In networks, remote refers to files, devices, and other resources that are not connected directly to your workstation. Resources at your workstation are considered local.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>Stream</b><br />Stream is a uni-directional logical channel established from one to another associated SCTP endpoint, within which all user messages are delivered in sequence except for those submitted to the unordered delivery service.<br /><br /><b>TCP</b><br />TCP (Transmission Control Protocol) is one of the main protocols in TCP/IP networks. TCP is one of the main protocols in TCP/IP networks. Whereas the IP protocol deals only with packets, TCP enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and also guarantees that packets will be delivered in the same order in which they were sent.<br /><br /><b>Telnet</b><br />Telnet is a terminal emulation program for TCP/IP networks such as the Internet. The Telnet program runs on your computer and connects your PC to a server on the network. You can then enter commands through the Telnet program and they will be executed as if you were entering them directly on the server console. This enables you to control the server and communicate with other servers on the network. To start a Telnet session, you must log in to a server by entering a valid username and password. Telnet is a common way to remotely control Web servers.<br /><br /><b>Terminal</b><br />Terminal is a device that enables you to communicate with a computer. Generally, a terminal is a combination of keyboard and display screen. In networking, a terminal is a personal computer or workstation connected to a mainframe. The personal computer usually runs terminal emulation software that makes the mainframe think it is like any other mainframe terminal.<br /><br /><b>UNIX</b><br />Unix or UNIX is a computer operating system originally developed in the 1960s and 1970s by a group of AT&amp;T Bell Labs employees including Ken Thompson, Dennis Ritchie, and Douglas McIlroy. Today's Unix systems are split into various branches, developed over time by AT&amp;T, several other commercial vendors, as well as several non-profit organizations.<br /><br /><b>User</b><br />User is an individual who uses a computer. This includes expert programmers as well as novices. An end user is any individual who runs an application program.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1282.html">RFC 1282</a>] BSD Rlogin.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1258.html">RFC 1258</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3027.html">RFC 3027</a>] Protocol Complications with the IP Network Address Translator.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc1258.html">RFC 1258</a>] BSD Rlogin.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1282.html">RFC 1282</a>.
                		  </div>
		  
</section>

