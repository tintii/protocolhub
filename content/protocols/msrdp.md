---
id: protocol-msrdp
slug: msrdp
name: MSRDP
expandedName: Microsoft Remote Desktop Protocol
origin: historical
provenance:
  source: protocols/protocol_MSRDP.htm
  sha256: 1e429f308a273ab39c17e1fd5463c10eef1ef870d8d302115927a3a06e16c99a
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Microsoft Remote Desktop Protocol
layers:
  - Application Layer
suites: []
summary:
  - label: Protocol
    html: Microsoft Remote Desktop Protocol
  - label: Layer
    html: Application Layer
originalUpdate: '2005-11-29 18:18:07'
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

			Remote Desktop Protocol (RDP) is a multi-channel protocol that allows a user to connect to a computer running Microsoft Terminal Services. Clients exist for most versions of Windows, and other operating systems such as Linux. The server listens by default on TCP port 3389.
<br />
<br />Based on the ITU T.share protocol (also known as T.128), the first version of RDP (called version 4.0) was introduced with Terminal Services in Windows NT 4.0 Server, Terminal Server Edition. Version 5.0, introduced with Windows 2000 Server, added support for a number of features, including printing to local printers, and aimed to improve network bandwidth usage. Version 5.1, introduced with Windows XP Professional, included support for 24-bit color and sound. Version 5.2, introduced with Windows 2003 Server, included support for console mode connections, a session directory, and local resource mapping.
<br />
<br /><b>Features</b>
<br /><ul><li>24bit color support, giving a palette of 16.7 million colors. (8, 15 and 16 bit color are also supported.) <br /><br /></li>

<li>128bit encryption, using the RC4 encryption algorithm. (This is the default security; older clients may use encryption of lesser strength.) <br /><br /></li>

<li>Audio allows users to run an audio program on the remote desktop and have the sound redirected to their local computer. <br /><br /></li>

<li>File System Redirection allows users to use their local files on a remote desktop within the terminal session. <br /><br /></li>

<li>Printer Redirection allows users to use their local printer within the terminal session as they would with a locally or network shared printer. <br /><br /></li>

<li>Port Redirection allows applications running within the terminal session to access local serial and parallel ports directly.<br /><br /></li> 

<li>The clipboard can be shared between the remote computer and the local computer. </li></ul>
<br />
<br />In response to customer demand, Windows 2000 Terminal Services and the RDP 5.0 protocol includes several critical new features together with some significant performance improvements over all types of network connections, including LAN, WAN, and dial-up.  
<br />
<br />To test the relative performance improvements of RDP 5.0 over RDP 4.0, the Business Graphics WinMark 99 test from ZD's WinBench 99 v1.0 was used. Video graphics adaptor performance test tools are useful for determining how efficient a remote display protocol performs when sending data to the client for display. The test results, and more importantly, the actual user experience, demonstrate that the performance of the RDP 5.0 in Windows 2000 is substantially better than RDP 4.0 on TS 4.0, resulting in an improved user experience, less network bandwidth usage, and greater scalability on the server than before.
<br />
<br />Microsoft intends to further this trend, by continuing to add features that customers demand and improving the performance of the protocol with subsequent releases of the Windows operating system.
<br />
<br /><b>Terminal Services Advanced Client</b>
<br />The Terminal Services Advanced Client (TSAC) has recently superceded the RDP client that ships with Windows 2000. The TSAC is based on the RDP 5.0 feature set, but comes in the form of an ActiveX control. The performance of the TSAC is comparable to the previous client, but offers far more flexibility in its deployment. It can be downloaded and executed within Microsoft Internet Explorer, or any application that can make use of ActiveX controls, such as those written in the Visual Basic or Visual C++ development systems. In addition to the downloadable ActiveX control, it is also available in the form of an MSI (Windows Installer) package, which looks and feels to the end user like the traditional RDP 5.0 client. Finally, the client is also available as an MMC snap-in, for administrators to use to assist with server administration.
<br /><hr />
<br /><b>Basic Architecture</b>
<br />RDP is based on, and is an extension of, the T.120 protocol family standards. It is a multichannel-capable protocol that allows for separate virtual channels for carrying device communication and presentation data from the server, as well as encrypted client mouse and keyboard data. RDP provides a very extensible base from which to build many more capabilities, supporting up to 64,000 separate channels for data transmission as well as provisions for multipoint transmission. Examples of these new capabilities in RDP 5.0 include features such as Print Redirection, Clipboard Mapping, and other Virtual Channel applications. 
<br />
<br />RDP uses its own video driver on the server side to render display output by constructing the rendering information into network packets using RDP protocol and sending them over the network to the client. On the client side, it receives rendering data and interprets them into the corresponding Win32 GDI API calls. On the input path, client mouse and keyboard messages are redirected from the client to the server. On the server side, RDP uses its own virtual keyboard and mouse driver to receive these keyboard and mouse events. 
<br />
<br /><b>Capabilities</b>
<br />Microsoft RDP includes the following features and capabilities
<br /><ul><li><b>Encryption</b>
<br />Without encrypting the display protocol, it is very easy to ¡®sniff¡¯ the wire to discover users¡¯ passwords as they logon to the system. Allowing an administrator to logon using a non-encrypted protocol exposes the entire domain resources vulnerable to hackers, especially if connecting over a public network without the use of a virtual private network. It is important to note that protocols that use ¡°scrambling¡± to protect data are just as vulnerable to this sort of attack as protocols that send data using clear-text.
<br />
<br />Every version of RDP uses RSA Security¡¯s RC4 cipher, a stream cipher designed to efficiently encrypt small amounts of varying size data. RC4 is designed for secure communications over networks, and is also used in protocols such as SSL, which encrypts traffic to and from secure Web sites.
<br />
<br />In Windows 2000, administrators can choose to encrypt the data using a 56- or 128-bit key. Encryption is bi-directional except when using the ¡®low¡¯ security setting that only encrypts data from the client to the server (which protects sensitive information such as passwords). The default setting is ¡°medium¡± which uses a 56-bit key to bi-directionally encrypt the data. 128-bit encryption can be enabled after installing the Windows 2000 High Encryption Pack.<br /><br /></li>

<li><b>Bandwidth Reduction Features</b>
<br />RDP supports various mechanisms to reduce the amount of data transmitted over the network connection.  
<br />
<br />In addition to compression (which is the recommended default for all Terminal Services sessions) and caching of bitmaps and glyphs and fragments in RAM[4], RDP 5.0 adds persistent bitmap caching, which augments the RAM cache with a 10 megabyte (MB) disk cache for bitmaps. Bitmaps that gets cached in memory can also be stored in the persistent bitmap cache, which is also made available to subsequent Terminal Services sessions. This cache can provide a substantial improvement in performance over low-bandwidth connections, especially when running applications that make extensive use of large bitmaps.<br /><br /></li>

<li><b>Roaming Disconnect</b>
<br />Users can disconnect from a session without logging off by either manually disconnecting the session or if the session is unexpectedly terminated due to a network or client failure. When the user logs back onto the system, either from the same or a different device, the user is automatically reconnected to their disconnected session. If the user connects using a different screen resolution, RDP automatically resizes the Terminal Services session to the correct size.<br /><br /></li> 

<li><b>Clipboard Mapping</b>
<br />Users can cut, copy, and paste text and graphics between applications running on the local machine and those running in a Terminal Services session and also between sessions.<br /><br /></li>

<li><b>Print Redirection</b>
<br />Applications running within a Terminal Services session can automatically print to a printer attached to the client device.<br /><br /></li>

<li><b>Virtual Channels</b>
<br />Using the RDP Virtual Channel Architecture, existing applications can be augmented and new applications can be developed to add just about any feature that requires communications between the client device and an application running in a Terminal Services session.<br /><br /></li>

<li><b>Remote Control</b>
<br />Helpdesk staff can view or control another Terminal Services session. Keyboard input, mouse movements, and display graphics are shared between two Terminal Services sessions, giving the support person the ability to diagnose and resolve configuration problems, as well as train the user remotely. This feature is especially useful for organizations with branch offices, and can also be used for peer-to-peer collaborative efforts.<br /><br /></li>

<li><b>Network Load Balancing</b>
<br />RDP takes advantage of Network Load Balancing (NLB), available in Windows 2000 Advanced Server and Datacenter Server. NLB lets Terminal Services clients connect to a pool of servers running Terminal Services, eliminating a single point of failure. For more information on NLB.</li></ul>
<br /><hr />
<br /><b>RDP 5.1</b>
<br />RDP 5.1 adds the following features and enhancements:
<br /><ul><li>Support for 24-bit color. <br /></li>
<li>Improved performance over low-speed dial-up connections through reduced bandwidth. <br /></li>
<li>Smart Card authentication through Terminal Services. <br /></li>
<li>Keyboard hooking. The ability to direct special WINDOWS key combinations, in full-screen mode, to the local computer or to a remote computer. <br /></li>
<li>Sound, drive, port, and network printer redirection. Sounds that occur on the remote computer can be heard on the client computer running the Terminal Server software, and local client drives will be visible to the Terminal Server session.</li></ul>
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
<td class="MapParent" aria-label="Parent layer protocols">TCP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>MSRDP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>API</b><br />API(Application Program Interface), a set of routines, protocols, and tools for building software applications. A good API makes it easier to develop a program by providing all the building blocks. A programmer puts the blocks together. 
<br />
<br />Most operating environments, such as MS-Windows, provide an API so that programmers can write applications consistent with the operating environment. Although APIs are designed for programmers, they are ultimately good for users because they guarantee that all programs using a common API will have similar interfaces. This makes it easier for users to learn new programs.<br /><br /><b>Algorithm</b><br />Algorithm is a formula or set of steps for solving a particular problem. To be an algorithm, a set of rules must be unambiguous and have a clear stopping point. Algorithms can be expressed in any language, from natural languages like English or French to programming languages like FORTRAN.
<br />
<br />We use algorithms every day. For example, a recipe for baking a cake is an algorithm. Most programs, with the exception of some artificial intelligence applications, consist of algorithms. Inventing elegant algorithms -- algorithms that are simple and require the fewest steps possible -- is one of the principal challenges in programming.<br /><br /><b>Bandwidth</b><br />*A range within a band of frequencies or wavelengths.
<br />
<br />*The amount of data that can be transmitted in a fixed amount of time. For digital devices, the bandwidth is usually expressed in bits per second(bps) or bytes per second. For analog devices, the bandwidth is expressed in cycles per second, or Hertz (Hz).<br /><br /><b>Bit</b><br />Bit (binary digit), the smallest unit of information on a machine, a leading statistician and adviser to five presidents. A single bit can hold only one of two values: 0 or 1. More meaningful information is obtained by combining consecutive bits into larger units. For example, a byte is composed of 8 consecutive bits.<br /><br /><b>Data</b><br />* Distinct pieces of information, usually formatted in a special way. All software is divided into two general categories: data and programs. Programs are collections of instructions for manipulating data. Data can exist in a variety of forms -- as numbers or text on pieces of paper, as bits and bytes stored in electronic memory, or as facts stored in a person's mind. Strictly speaking, data is the plural of datum, a single piece of information. In practice, however, people use data as both the singular and plural form of the word. 
<br />
<br />* The term data is often used to distinguish binary machine-readable information from textual human-readable information. For example, some applications make a distinction between data files (files that contain binary data) and text files (files that contain ASCII data). 
<br />
<br />* In database management systems, data files are the files that store the database information, whereas other files, such as index files and data dictionaries, store administrative information, known as metadata.<br /><br /><b>Dial-up</b><br />Dial up networking technology provides PCs and other network devices access to a LAN or WAN via standard telephone lines. Dial up Internet service providers offer subscription plans for home computer users.<br /><br /><b>Encryption</b><br />The translation of data into a secret code. Encryption is the most effective way to achieve data security. To read an encrypted file, you must have access to a secret key or password that enables you to decrypt it. Unencrypted data is called plain text; encrypted data is referred to as cipher text. 
<br />
<br />There are two main types of encryption: asymmetric encryption (also called public-key encryption) and symmetric encryption.<br /><br /><b>GDI</b><br />GDI (Graphical Device Interface) is a Windows standard for representing graphical objects and transmitting them to output devices, such as monitors and printers.<br /><br /><b>ITU</b><br />The International Telecommunication Union (ITU) is an international organization established to standardize and regulate international radio and telecommunications. It was founded as the International Telegraph Union in Paris in May 17, 1865, and is today the world's oldest international organization. Its main tasks include standardization, allocation of the radio spectrum, and organizing interconnection arrangements between different countries to allow international phone calls. It is one of the specialized agencies of the United Nations, and has its headquarters in Geneva, Switzerland, next to the main United Nations campus.<br /><br /><b>Keyboard</b><br />Keyboard is a set of typewriter-like keys that enables you to enter data into a computer. Computer keyboards are similar to electric-typewriter keyboards but contain additional keys. The keys on computer keyboards are often classified as follows: 
<br />*alphanumeric keys -- letters and numbers 
<br />*punctuation keys -- comma, period, semicolon, and so on. 
<br />*special keys -- function keys, control keys, arrow keys, Caps Lock key, and so on.
<br />
<br />The standard layout of letters, numbers, and punctuation is known as a QWERTY keyboard because the first six keys on the top row of letters spell QWERTY. The QWERTY keyboard was designed in the 1800s for mechanical typewriters and was actually designed to slow typists down to avoid jamming the keys. Another keyboard design, which has letters positioned for speed typing, is the Dvorak keyboard. 
<br />
<br />There is no standard computer keyboard, although many manufacturers imitate the keyboards of PCs. There are actually three different PC keyboards: the original PC keyboard, with 84 keys; the AT keyboard, also with 84 keys; and the enhanced keyboard, with 101 keys. The three differ somewhat in the placement of function keys, the Control key, the Return key, and the Shift keys. 
<br />
<br />In addition to these keys, IBM keyboards contain the following keys: Page Up, Page Down, Home, End, Insert, Pause, Num Lock, Scroll Lock, Break, Caps Lock, Print Screen. 
<br />
<br />There are several different types of keyboards for the Apple Macintosh. All of them are called ADB keyboards because they connect to the Apple Desktop bus (ADB). The two main varieties of Macintosh keyboards are the standard keyboard and the extended keyboard, which has 15 additional special-function keys.<br /><br /><b>LAN</b><br />Local-area network (LAN) is a computer network that spans a relatively small area. Most LANs are confined to a single building or group of buildings. However, one LAN can be connected to other LANs over any distance via telephone lines and radio waves. A system of LANs connected in this way is called a wide-area network (WAN). 
<br />
<br />Most LANs connect workstations and personal computers. Each node (individual computer ) in a LAN has its own CPU with which it executes programs, but it also is able to access data and devices anywhere on the LAN. This means that many users can share expensive devices, such as laser printers, as well as data. Users can also use the LAN to communicate with each other, by sending e-mail or engaging in chat sessions.<br /><br /><b>Linux</b><br />Linux is a freely-distributable open source operating system that runs on a number of hardware platforms. The Linux kernel was developed mainly by Linus Torvalds. Because it's free, and because it runs on many platforms, including PCs and Macintoshes, Linux has become an extremely popular alternative to proprietary operating systems.<br /><br /><b>Microsoft</b><br />Microsoft founded in 1975 by Paul Allen and Bill Gates, Microsoft Corporation is one of the largest and most influential companies in the personal computer industry. In addition to developing the de facto standard operating systems -- DOS and Windows -- Microsoft has a strong presence in almost every area of computer software, from programming tools to end-user applications.<br /><br /><b>Multichannel</b><br />In audio and sound terms channel refers to an individual discrete audio track. When referring to more than two channels it is called multichannel.<br /><br /><b>Port</b><br />Port is an interface on a computer to which you can connect a device. Personal computers have various types of ports. Internally, there are several ports for connecting disk drives, display screens, and keyboards. Externally, personal computers have ports for connecting modems, printers, mice, and other peripheral devices. 
<br />
<br />Almost all personal computers come with a serial RS-232C port or RS-422 port for connecting a modem or mouse and a parallel port for connecting a printer. On PCs, the parallel port is a Centronics interface that uses a 25-pin connector. SCSI (Small Computer System Interface) ports support higher transmission speeds than do conventional ports and enable you to attach up to seven devices to the same port.<br /><br /><b>RC4</b><br />RC4 (or ARCFOUR) is the most widely-used software stream cipher and is used in popular protocols such as Secure Sockets Layer (SSL) (to protect Internet traffic) and WEP (to secure wireless networks). RC4 falls short of the high standards of security set by cryptographers, and some ways of using RC4 lead to very insecure cryptosystems (including WEP).<br /><br /><b>RDP</b><br />The RDP (Microsoft Remote Desktop Protocol) provides remote display and input capabilities over network connections for Windows-based applications running on a server. RDP is designed to support different types of network topologies and multiple LAN protocols<br /><br /><b>Remote Control</b><br />Remote Control refers to a program's or device's ability to control a computer system from a remote location. Remote-control programs for PCs enable you to access data stored on your home system even when you are traveling.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>T.120</b><br />T.120 is a comprehensive specification that solves several troublesome problems that have historically slowed market growth for applications of this nature. Perhaps most importantly, T.120 resolves complex technological issues in a manner that is acceptable to both the computing and telecommunications industries.<br /><br /><b>TCP</b><br />TCP (Transmission Control Protocol) is one of the main protocols in TCP/IP networks. TCP is one of the main protocols in TCP/IP networks. Whereas the IP protocol deals only with packets, TCP enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and also guarantees that packets will be delivered in the same order in which they were sent.<br /><br /><b>Terminal Services</b><br />Terminal Services is a component of Microsoft Windows operating systems (both client and server versions) that allows a user to access applications or data stored on a remote computer over a network connection. Terminal Services is Microsoft's take on server centric computing, which allows individual users to access network resources easily.<br /><br /><b>Virtual Channel</b><br />The communication channel associated with a virtual channel connection (VCC) that provides for the transport of asynchronous transfer mode (ATM) cells among ATM active elements. A VCC is an association established at the ATM Layer between two or more endpoints for the purpose of user-user, user-network, or network-network information transfer.<br /><br /><b>WAN</b><br />WAN (Wide Area Network) is a network that spans a large area, typically including routers, gateways, and many different IP address groups.
<br />
<br />In the context of firewalls, the WAN interface is the one directly connected to the Internet. In the context of corporate networks, the WAN generally refers to the network that connects all of the organization's locations onto the corporate network. Historically this was accomplished with expensive private leased lines like frame relay and similar technologies. With the low cost and widespread availability of broadband Internet connections, many organizations are switching to using VPN in lieu of leased lines. VPN provides the same functionality, though is not as reliable as leased lines and has higher latency.<br /><br /><b>Windows 2000</b><br />Windows 2000 (also referred to as Win2K, W2K or Windows NT 5.0) is a preemptible and interruptible, graphical, business-oriented operating system that was designed to work with either uniprocessor or symmetric multi-processor (SMP) 32-bit Intel x86 computers. It is part of the Microsoft Windows NT line of operating systems and was released on February 17, 2000. Windows 2000 comes in four versions: Professional, Server, Advanced Server, and Datacenter Server. Additionally, Microsoft offers Windows 2000 Advanced Server- Limited Edition, which released in 2001 and runs on 64-bit Intel Itanium microprocessors.<br /><br /><b>Windows 2003 Server</b><br />Windows 2003 Server is the successor to Windows 2000 Server. For a considerable time, this was also referred to as the .net server, but that name has now been dropped. Improvements include improved manageability, supports newest features of Exchange 2003 and Office 2003, and improved performance.<br /><br /><b>Windows NT 4.0</b><br />Windows NT 4.0 was the fourth release of Microsoft's Windows NT operating system, released in 1996. It is a 32-bit Windows system available in workstation and server versions with a graphical environment similar to Windows 95. The "NT" designation in the product's title initially stood for "New Technology" according to Bill Gates, but no longer has any specific meaning, although some critics of its security shortcomings claimed the suffix stood for "Nice Try".<br /><br /><b>Windows XP Professional</b><br />Windows XP Professional, which has additional features and is targeted at power users and business clients. Windows XP Media Center Edition, released one year later, consists of Windows XP Professional with new entertainment addons, which allow users to record and watch TV shows, watch DVDs, listen to music and more.<br /><br />			</div>
		  
</section>

