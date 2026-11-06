---
id: protocol-rtelnet
slug: rtelnet
name: RTELNET
expandedName: Remote Telnet service
origin: historical
provenance:
  source: protocols/protocol_RTELNET.htm
  sha256: 11027150091540ed00bd50f48eff858dc2eb95b02e63c6b11d896a938221ba5d
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Remote Telnet service
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Remote Telnet service
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: Application layer terminal protocol
  - label: Ports
    html: 107 (TCP) Remote User Telnet
  - label: Working groups
    html: |-
      Telnet, telnet.
      <br />Tn3270e, Telnet TN3270 Enhancements.
originalUpdate: '2005-12-06 15:26:38'
rfcs:
  - 818
  - 1372
related: []
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

			<b>Remote User Telnet Service</b>
<br />In the ARPANET Host-to-Host Network Control Protocol (NCP) and in the Internet Transmission Control Protocol (TCP) well known sockets or ports are used to identify services. The general notion is that there are a few types of services that are distinct and useful enough to use the NCP or TCP demultiplexing mechanism directly.
<br />
<br />The most common of these is the Server Telnet which generally speaking defines the network terminal access procedure for a system executive. That is, making a connection to the server Telnet port actually puts the caller in contact with the system executive, for example, the TOPS20
<br />EXEC or the Unix Shell.
<br />
<br />On some small hosts there may be very limited functionality and no executive. In such cases it may be useful to designate specific well known ports for specific applications.
<br />
<br />The specific service of User Telnet may be accessed (on hosts that choose to provide it) by opening a connection to port 107 (153 octal). The Telnet Protocol is to be used on the connection from the originating user to the server.
<br />
<br />Example: Remote Telnet service on the BBN TC68K
<br />The TC68K is a Terminal Concentrator based on the Motorola MC68000 microprocessor. It is used at Bolt Beranek &amp; Newman to provide access by terminals to the FiberNet, a local area network.
<br />
<br />The custom hardware provides one network connection, sixteen RS232 terminal connections, and a programmable timer.
<br />
<br />The software is based on the Micro-Operating System (MOS) using the IP, ICMP, TCP, and Telnet protocols. A user TC-Telnet application provides an interface to allow the user to use the network to connect to a host, providing a network virtual terminal. A server Telnet also exists on the TC68K to serve as a front end for devices that have no awareness of the net. This is used for remote printer/plotters and computers with no network software.
<br />
<br />The TC68Ks at BBN are distributed about several buildings. To provide an operational tool to test remote TC68Ks, the TC68K software was configured to put a user Telnet back to back with a server Telnet. An operator can open a connection to a remote TC68K and appear to be a terminal local to that unit. This verifies that the network path between the two units is operational and provides the operator with access to statistics that are kept as part of the standard user TC-Telnet application.
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">   Operator's         Local                  Remote         Remote
   Terminal   &lt;=TTY=&gt; user      &lt;=FiberNet=&gt; server &lt;=PTY=&gt; user
                      TC-Telnet              Telnet         TC-Telnet</pre>
<br />This solution was attractive as the only extra piece of software necessary for this was the "Pseudo Teletype" (PTY) device driver for MOS. This "device" appears as a terminal to its application, but what it is really doing is providing a character stream between two processes.
<br /><hr />
<br /><b>Telnet Remote Flow Control Option</b>
<br />Use of the option requires two phases. In the first phase, the telnet processes agree that one of them will TOGGLE-FLOW-CONTROL. WILL and DO are used only in this first phase. In general there will be only one exchange of WILL and DO for a session. Subnegotiations must not be issued until DO and WILL have been exchanged. It is permissible for either side to turn off the option by sending a WONT or DONT. Should this happen, no more subnegotiations may be sent, unless the option is reenabled by another exchange of DO and WILL.
<br />
<br />Once the hosts have exchanged a WILL and a DO, the sender of the DO TOGGLE-FLOW-CONTROL is free to send subnegotiations to enable and disable flow control in the other process. Normally, the sender of the DO will be a host, and the other end will be a user telnet process, which is connected to a terminal. Thus the protocol is normally asymmetric. However it may be used in both directions without confusion should need for this arise.
<br />
<br />As soon as the DO and WILL have been exchanged, the sender of the WILL must enable flow control. This allows flow control to begin in a known state. The decision of whether to restart output only when the XON character is received, or when any character received, starts in a system dependent state. (This is to make it consistent with older implementations of the TOGGLE-FLOW-CONTROL option that do not understand the RESTART-ANY and RESTART-XON suboptions.) The sender of the DO should send either a RESTART-ANY or RESTART-XON suboption to put the restart characteristics to a know state. Some clients might not be able to support both of the RESTART-ANY and RESTART-XON modes due to system limitations, and would then choose to ignore these commands. There is no way for the server to be notified of this condition, but a client should make every attempt to honor the state requested by the RESTART-ANY and RESTART-XON modes. Should the option be disabled by exchange of DONT and WONT, flow control may revert to an implementation-defined default state. It is not safe to assume that flow control will remain in the state requested by the most recent subnegotiation.
<br />
<br />In most implementations of software flow control, when enabled, the XOFF and XON characters are never propagated to the server; they are typically eaten by the terminal driver between the telnet client and the attached terminal. In most implementations that support the RESTART-ANY functionality, the typed character that re-enables the output is not eaten by the terminal driver, unless it is the XON character.
<br />
<br />Currently, only four command codes are defined for the subnegotiations: flow control off (code 0), flow control on (code 1), restart output on any character (code 2) and restart output only on XON (code 3). None of these codes requires any additional data, however it is possible that additional commands may be added. Thus subnegotiations having command codes other than those defined in this document should be silently ignored.
<br />
<br />This option does not deal with the issue of allowing the DO side of the connection to inform the WILL side which characters should be used for XON and XOFF. That functionality is already supplied by the LINEMODE option.
<br />
<br /><b>Command Name and Code</b>
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>TOGGLE-FLOW-CONTROL</td><td>33</td></tr><tr><td>OFF</td><td>0</td></tr><tr><td>ON</td><td>1</td></tr><tr><td>RESTART-ANY</td><td>2</td></tr><tr><td>RESTART-XON</td><td>3</td></tr></tbody></table></div></div>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Telnet Remote Flow Control Option</b>

       Client                           Server
                                        IAC DO TOGGLE-FLOW-CONTROL
       IAC WILL TOGGLE-FLOW-CONTROL
       [ The server is now free to send commands to change flow control. Note that the 
client must now have enabled flow control, but that whether it is restart on XON only 
or on any character is client specific.  ]
                                        IAC SB TOGGLE-FLOW-CONTROL
                                        RESTART-ANY IAC SE

       [ The client should now switch to allowing output to restart when the user types 
any character, if the client is able to support that functionality.  ]
                                        IAC SB TOGGLE-FLOW-CONTROL OFF
                                        IAC SE
                                        IAC SB TOGGLE-FLOW-CONTROL ON
                                        IAC SE</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>RTELNET</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>ARPANET</b><br />The Advanced Research Projects Agency Network (ARPANET) developed by ARPA of the U.S. Department of Defense was the world's first operational packet switching network, and the progenitor of the global Internet.<br /><br /><b>Access</b><br />(v.) 
<br />*To use. For example, programs can access memory , which means they read data from or write data to main memory. A user can access files, directories, computers, or peripheral devices. 
<br />*More specifically, access often means to read data from or write data to a mass storage device. The time it takes to locate a single byte of information on a mass-storage device is called the access time. 
<br />*To visit a Web site. 
<br />
<br />(n.)
<br /> *The act of reading data from or writing data to a storage device. 
<br />*A privilege to use computer information in some manner. For example, a user might be granted read access to a file, meaning that the user can read the file but cannot modify or delete it. Most operating systems have several different types of access privileges that can be granted or denied to specific users or groups of users. 
<br />*When capitalized as Access, short for Microsoft Access.<br /><br /><b>Host</b><br />Host is a computer system that is accessed by a user working at a remote location. Typically, the term is used when there are two computer systems connected by modems and telephone lines. The system that contains the data is called the host, while the computer at which the user sits is called the remote terminal. 
<br />
<br />Host can refer to a computer that is connected to a TCP/IP network, including the Internet. Each host has a unique IP address. 
<br />
<br />Host can refer to provide the infrastructure for a computer service too. For example, there are many companies that host Web servers. This means that they provide the hardware, software, and communications lines required by the server, but the content on the server may be controlled by someone else.<br /><br /><b>ICMP</b><br />Internet Control Message Protocol, an extension to the Internet Protocol (IP). ICMP supports packets containing error, control, and informational messages. The PING command, for example, uses ICMP to test an Internet connection.<br /><br /><b>IP</b><br />The IP (Internet Protocol) is a protocol which uses datagrams to communicate over a packet-switched network. IP specifies the format of packets, also called datagrams, and the addressing scheme. Most networks combine IP with a higher-level protocol called Transmission Control Protocol (TCP), which establishes a virtual connection between a destination and a source. 
<br />
<br />IP by itself is something like the postal system. It allows you to address a package and drop it in the system, but there's no direct link between you and the recipient. TCP/IP, on the other hand, establishes a connection between two hosts so that they can send messages back and forth for a period of time. 
<br />
<br />The current version of IP is IPv4. A new version, called IPv6 or IPng, is under development.<br /><br /><b>Internet</b><br />A global network connecting millions of computers. More than 100 countries are linked into exchanges of data, news and opinions. 
<br />
<br />Unlike online services, which are centrally controlled, the Internet is decentralized by design. Each Internet computer, called a host, is independent. Its operators can choose which Internet services to use and which local services to make available to the global Internet community. Remarkably, this anarchy by design works exceedingly well. 
<br />
<br />There are a variety of ways to access the Internet. Most online services, such as America Online, offer access to some Internet services. It is also possible to gain access through a commercial Internet Service Provider (ISP).<br /><br /><b>MOS</b><br />MOS (Micro Operating Systems) is a study of the MS-DOS and other IBM-PC-based operating systems, such as Windows, and Unix or OS/2. Topics include the nature and function of operating systems, the basic command structure for each operating system studied and shell or batch programming, where appropriate.<br /><br /><b>NCP</b><br />NCP (Novell NetWare Core Protocol) manages access to the primary NetWare server resources. Used to establish and configure one or more network layer protocols that will be used by the link. Protocol field values in the range of 0x8XXX to 0xBXXX identify packets belonging to the associated Network Control Protocol.<br /><br /><b>Port</b><br />Port is an interface on a computer to which you can connect a device. Personal computers have various types of ports. Internally, there are several ports for connecting disk drives, display screens, and keyboards. Externally, personal computers have ports for connecting modems, printers, mice, and other peripheral devices. 
<br />
<br />Almost all personal computers come with a serial RS-232C port or RS-422 port for connecting a modem or mouse and a parallel port for connecting a printer. On PCs, the parallel port is a Centronics interface that uses a 25-pin connector. SCSI (Small Computer System Interface) ports support higher transmission speeds than do conventional ports and enable you to attach up to seven devices to the same port.<br /><br /><b>Remote</b><br />In networks, remote refers to files, devices, and other resources that are not connected directly to your workstation. Resources at your workstation are considered local.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>Service</b><br />The NAS provides a service to the dial-in user, such as PPP or Telnet.<br /><br /><b>Socket</b><br />In UNIX and some other operating systems, socket is a software object that connects an application to a network protocol. In UNIX, for example, a program can send and receive TCP/IP messages by opening a socket and reading and writing data to and from the socket.<br /><br /><b>TCP</b><br />TCP (Transmission Control Protocol) is one of the main protocols in TCP/IP networks. TCP is one of the main protocols in TCP/IP networks. Whereas the IP protocol deals only with packets, TCP enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and also guarantees that packets will be delivered in the same order in which they were sent.<br /><br /><b>Telnet</b><br />Telnet is a terminal emulation program for TCP/IP networks such as the Internet. The Telnet program runs on your computer and connects your PC to a server on the network. You can then enter commands through the Telnet program and they will be executed as if you were entering them directly on the server console. This enables you to control the server and communicate with other servers on the network. To start a Telnet session, you must log in to a server by entering a valid username and password. Telnet is a common way to remotely control Web servers.<br /><br /><b>Terminal</b><br />Terminal is a device that enables you to communicate with a computer. Generally, a terminal is a combination of keyboard and display screen. In networking, a terminal is a personal computer or workstation connected to a mainframe. The personal computer usually runs terminal emulation software that makes the mainframe think it is like any other mainframe terminal.<br /><br /><b>Unix</b><br />Unix or UNIX is a computer operating system originally developed in the 1960s and 1970s by a group of AT&amp;T Bell Labs employees including Ken Thompson, Dennis Ritchie, and Douglas McIlroy. Today's Unix systems are split into various branches, developed over time by AT&amp;T, several other commercial vendors, as well as several non-profit organizations.<br /><br /><b>XON</b><br />Xon/Xoff (sometimes written "X-on/X-off" or "XON/XOFF") is a protocol for controlling the flow of data between computers and other devices on an asynchronous serial connection. For example, a computer typically sends data to a printer faster than the printer can print. The printer contains a buffer where data is stored until the printer catches up with the computer.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="https://www.iana.org/assignments/telnet-options">Telnet options</a>
                <hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc818.html">RFC 818</a>] The Remote User Telnet Service.
[<a href="https://www.rfc-editor.org/rfc/rfc1372.html">RFC 1372</a>] Telnet Remote Flow Control Option.
                		  </div>
		  
</section>

