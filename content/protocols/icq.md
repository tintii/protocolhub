---
id: protocol-icq
slug: icq
name: ICQ
expandedName: ''
origin: historical
provenance:
  source: protocols/protocol_ICQ.htm
  sha256: 2d408063be858376eeec504fa0782cf9aabd9c601f88381efd7e12895ef87ec4
  provider: 'Colasoft Co., Ltd.'
aliases: []
layers:
  - Application Layer
suites: []
summary:
  - label: Layer
    html: Application Layer
originalUpdate: '2005-11-04 16:51:03'
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

			ICQ actually stands for "I seek you". It is one of the most popular communication tools used on the Internet, besides the good old plain e-mail. ICQ is a user-friendly and real-time Internet tool that allows users to find other people, add them to a contact list, see their online/offline status at any given time, and communicate with them in several different ways. ICQ provides capabilities of messaging, one-on-one or multi-user chat sessions, user-to-user file transfer, sending URLs, playing games, and invoking external applications, like NetMeeting, CoolTalk, or other online-conferencing tools.
<br />
<br />The ICQ Program is one of the most popular and most widely spread chat and instant-messaging programs on the Internet, and the community of ICQ users is still growing very rapidly. Most ICQ users do not need to know how the ICQ Protocol works. They are also not aware of or concerned about the security aspects of the ICQ Protocol. The protocol certainly has its vulnerabilities, which the majority of users don't know about.
<br />
<br /><b>Reverse-Engineering using SocketSpy</b>
<br />One of the ways to reverse-engineer the ICQ Protocol is by using a tool that traces all network traffic (packets) on a raw socket and dumps them on the screen or in a file. One such tool is SocketSpy which has been developed by WinTech. For any application that uses WINSOCK.DLL, all API calls are intercepted by the Interceptor. DLL and SocketSpy prints out the information of the API calls.
<br />
<br /><b>Packet Header</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>Length</p></td><td><p>Content (if fixed)</p></td><td><p>Designation</p></td><td><p>Description</p></td></tr><tr><td><p>2 bytes</p></td><td>05 00</td><td><p>VERSION</p></td><td><p>Protocol version</p></td></tr><tr><td><p>4 bytes</p></td><td>00 00 00 00</td><td><p>ZERO</p></td><td><p>Just zeros, purpose unknown</p></td></tr><tr><td><p>4 bytes</p></td><td>AA 6C 4E 00</td><td><p>UIN</p></td><td><p>Your (the client's) UIN</p></td></tr><tr><td><p>4 bytes</p></td><td>77 72 55 FC</td><td><p>SESSION_ID</p></td><td><p>Used to prevent 'spoofing'. See below.</p></td></tr><tr><td><p>2 bytes</p></td><td>EE C2</td><td><p>COMMAND</p></td><td><p> </p></td></tr><tr><td><p>2 bytes</p></td><td>A4 01</td><td><p>SEQ_NUM1</p></td><td><p>Starts at a random number</p></td></tr><tr><td><p>2 bytes</p></td><td>E8 C6</td><td><p>SEQ_NUM2</p></td><td><p>Starts at 1</p></td></tr><tr><td><p>4 bytes</p></td><td>xx xx xx xx</td><td><p>CHECKCODE</p></td><td><p> </p></td></tr><tr><td><p>variable</p></td><td>xx ...</td><td><p>PARAMETERS</p></td><td><p>Parameters for the command being sent</p></td></tr></tbody></table></div></div>
<br />
<br />Naturally, to figure out the protocol specifications from spying on the packets send through the WinSocket is not trivial and requires much work and effort. Magnus Ihse, who started researching the ICQ protocol V2 early on and published one of the first documents about the ICQ Protocol, formed a mailing list called ICQ-devel due to the huge amount of responses and questions he received.  Through constant effort over the years, the participants of the ICQ-devel list reverse-engineered mostly all of the ICQ protocol versions and implemented ICQ Clients on different platforms and in different programming languages.
<br />
<br /><b>Protocol Versions</b>
<br />The ICQ Protocol has gone through several version since its inception in 1996. The earlier versions did not use any kind of encryption and had many security holes (see section 4.3). In version 4 some kind of encryption was introduced. Version 5 also uses other means (Session Id. and Sequence number) for security purposes. The latest two versions of ICQ (ICQ98 and ICQ99) are able to use all protocol versions currently still in use (V2 through V5).
<br />
<br /><ul><li><b>Protocol V1</b><br /></li>
<li>V1 was the first version of the ICQ Protocol and is no longer in use. This version was never used by any publicly released ICQ clients. I was not able to find any specific documentation on Version 1. 
<br /><br /></li>
<li><b>Protocol V2</b><br /></li>
<li>Version 2 of the ICQ Protocol was implemented in the first release of ICQ in 1996, which is still available to download at this site. V2 is the oldest version of the ICQ Protocol that is still in use today. 
<br /></li><li>The UDP packet sent from the client to the server has the following general 
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>Length</p></td><td><p>Content (if fixed)</p></td><td><p>Name</p></td><td><p>Description</p></td></tr><tr><td><p>2 bytes</p></td><td><p>02 00</p></td><td><p>VERSION</p></td><td>Identifies the packet as an ICQ packet</td></tr><tr><td><p>2 bytes</p></td><td><p>xx xx</p></td><td><p>COMMAND</p></td><td>Code for service the server should provide</td></tr><tr><td><p>2 bytes</p></td><td><p>xx xx</p></td><td><p>SEQ_NUM</p></td><td>Sequence number</td></tr><tr><td><p>4 bytes</p></td><td><p>xx xx xx xx</p></td><td><p>UIN</p></td><td>The senders UIN</td></tr><tr><td><p>variable</p></td><td><p> </p></td><td><p>PARAMETERS</p></td><td>0 or more parameters (depending on COMMAND)</td></tr></tbody></table></div></div><br /><br /></li>

<li>The UDP packet sent from the server to the client has the following general layout:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td><p>Length</p></td><td><p>Content (if fixed)</p></td><td><p>Name</p></td><td><p>Description</p></td></tr><tr><td><p>2 bytes</p></td><td><p>02 00</p></td><td><p>VERSION</p></td><td>Identifies the packet as an ICQ packet</td></tr><tr><td><p>2 bytes</p></td><td><p>xx xx</p></td><td><p>COMMAND</p></td><td>Code for service the server should provide</td></tr><tr><td><p>2 bytes</p></td><td><p>xx xx</p></td><td><p>SEQ_NUM</p></td><td>Sequence number</td></tr><tr><td><p>variable</p></td><td><p></p></td><td><p>PARAMETERS</p></td><td>0 or more parameters (depending on COMMAND)</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Version 3</b><br /></li>
<li>The second protocol which came out was version 3 which has a simple checksum as security. 
<br /></li><li>Version 3 header is as follows:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td><p>2 Bytes</p></td><td><p>This is the Version of the protocol = 03 00 (Major, Minor</p></td></tr><tr><td><p>2 Bytes</p></td><td><p>This is the Function code.  The ones I know are listed below.</p></td></tr><tr><td><p>2 Bytes</p></td><td><p>First Sequence Code   These are usually the same</p></td></tr><tr><td><p>2 Bytes</p></td><td><p>Second Sequence Code   /</p></td></tr><tr><td><p>4 Bytes</p></td><td><p>This is the user ID of the client user</p></td></tr><tr><td><p>4 Bytes</p></td><td><p>These four bytes are ICQ's weak attempt at security:</p><p>to get these do the following:</p><p>check1 = ( data[8] &lt;&lt; 24) | ( data[4] &lt;&lt; 16 ) | ( data[2] &lt;&lt; 8 ) | ( data[6] );</p><p>offs1 = Random % length; // offset into packet</p><p>offs2 = Random % 256;// offset into magic data</p><p>check2 = ( offs1 &lt;&lt; 24 ) | !( data[offs1] &lt;&lt; 16 ) | ( offs2 &lt;&lt; 8) | !( magic[offs2] );</p><p>check = check1 ^ check2; // XOR the two checks</p></td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Protocol V4</b><br /></li>
<li>In Version 4, encryption was added to the protocol. The following is the Header for Version 4 packets:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 5" tabindex="0"><table><caption>Description: preserved table 5</caption><tbody><tr><td><p>8 </p></td><td><p>16</p></td><td><p>32 bits </p></td></tr><tr><td><p>4</p></td><td><p>0</p></td><td><p>RANDOM</p></td></tr><tr><td colspan="3"><p>Everything below this point is encrypted</p></td></tr><tr><td colspan="2"><p>ZEROS</p></td><td><p>COMMAND</p></td></tr><tr><td colspan="2"><p>SEQUENCE</p></td><td><p>SECOND SEQUENCE</p></td></tr><tr><td colspan="3"><p>UIN</p></td></tr><tr><td colspan="3"><p>CHECK</p></td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Protocol V5</b><br /></li>
<li>The version 5 is the most recent version which has not yet been fully explained anywhere. 
<br /></li><li>An example of a V5 header is shown in Fig. 4.3. Version 5 is used in the newest release of ICQ 99b.</li></ul>
<br /><hr />
<br /><b>Client-Server Communication</b>
<br />When an ICQ user connects to the Internet, the ICQ NetDetect Agent can automatically detect the connection and launch the ICQ application. First, the ICQ program tries to establish a connection to a Mirabilis ICQ-Server, by sending UDP packets to port 4000. During the login process, the client sends information about itself to the server, including its IP address, the TCP port reserved for ICQ, the user's password and the user's contact list. Once a connection has been established, the client reports its user's online-status and inquires the online-status for each ICQ user on the contact list. 
<br />The information provided from any ICQ user during registration is also stored on the ICQ-Server. If someone requests the public information about a certain user, a request command in a UDP packet is sent to the server which then sends back the information about the inquired ICQ user. All UDP packets must be acknowledged, otherwise retransmission will occur after 10 seconds. 
<br />
<br /><b>Client-Client Communication</b>
<br />For messaging, sending URLs, file transfers, and chat sessions, a Client-to-Client connection using TCP is established. The IP addresses and port numbers for ICQ users are received from the ICQ server upon connection.
<br /><hr />
<br /><b>Related Protocols</b>
<br />There exist many protocols similar to the ICQ protocol. Even though none of them is as wide-spread as ICQ, they may be important anyway. At least two of them (RVP/PIP and ICGnu) is still under development. 
<br /><ul><li><b>Instant Messaging and Presence Protocol (IMPP)</b><br /></li>
<li>The IMPP (formerly known as RVP (Rendez-vous Protocol) / PIP (Presence Information Protocol) is an open protocol being developed by IETF (Internet Engineering Task Force). They've been working on this for quite some time, and should have avoided all mistakes that ICQ has made. If you feel that haven't, they'd surely be glad to hear. I recommend everyone interested in "enhancing" the ICQ protocol to first check if IMPP doesn't already do what you want to do.
<br /><br /></li>
<li><b>Jabber</b><br /></li>
<li>Jabber is a ambitious large-scale open source project to create an unified instant messaging protocol, with connections (known as transports) to other IM services, such as ICQ and AIM. 
<br /><br /></li>
<li><b>ICGnu</b><br /></li>
<li>ICGnu is another initiative to create an open protocol for presence notification and instant messaging. The project seem to have disappeared now, however.
<br /><br /></li>
<li><b>AIM (AOL Instant Messenger)</b><br /></li>
<li>Some important understanding about the AIM (AOL Instant Messenger) protocol has been achieved, and writing of a clone has been started. More information about the AIM Protocol and the FAIM clone can be found at Adam Fritzler's web pages.
<br /><br /></li>
<li><b>Pagoo</b>
<br />There have been some discussion about trying to decode the Pagoo protocol (which are similar to ICQ). However, as far as I know, no information is known at the moment about this protocols. If you know something about them, please send me an e-mail!</li></ul>
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
			<b>AIM</b><br />Some important understanding about the AIM (AOL Instant Messenger) protocol has been achieved, and writing of a clone has been started. More information about the AIM Protocol and the FAIM clone can be found at Adam Fritzler's web pages.<br /><br /><b>API</b><br />API(Application Program Interface), a set of routines, protocols, and tools for building software applications. A good API makes it easier to develop a program by providing all the building blocks. A programmer puts the blocks together. 
<br />
<br />Most operating environments, such as MS-Windows, provide an API so that programmers can write applications consistent with the operating environment. Although APIs are designed for programmers, they are ultimately good for users because they guarantee that all programs using a common API will have similar interfaces. This makes it easier for users to learn new programs.<br /><br /><b>DLL</b><br />DLL(Dynamic Link Library) is a library of executable functions or data that can be used by a Windows application. Typically, a DLL provides one or more particular functions and a program accesses the functions by creating either a static or dynamic link to the DLL. A static link remains constant during program execution while a dynamic link is created by the program as needed. DLLs can also contain just data. DLL files usually end with the extension .dll,.exe., drv, or .fon. 
<br />
<br />A DLL can be used by several applications at the same time. Some DLLs are provided with the Windows operating system and available for any Windows application. Other DLLs are written for a particular application and are loaded with the application.<br /><br /><b>ICGnu</b><br />ICGnu is another initiative to create an open protocol for presence notification and instant messaging. The project seem to have disappeared now, however.<br /><br /><b>IETF</b><br />IETF (Internet Engineering Task Force) is the main standards organization for the Internet. The IETF is a large open international community of network designers, operators, vendors, and researchers concerned with the evolution of the Internet architecture and the smooth operation of the Internet. It is open to any interested individual.<br /><br /><b>PIP</b><br />PIP(Presence Information Protocol) PIP enables the exchange of document based virtual presence information. Virtual presence information is the foundation for virtual neighborhood services which provide users with information about virtual neighbors, ie other users who are close within the virtual document space established by the World Wide Web. PIP also allows the exchange of simple text-based messages.<br /><br /><b>RVP</b><br />RVP(Rendez-vous Protocol)
<br />This assumes the protocol: 
<br />*source sends ready-to-send 
<br />*destination sends ready-to-receive 
<br />*data is exchanged 
<br />
<br />Data is never buffered, although ready-to-send messages may be. This protocol is likely to be more efficient for long messages, because it eliminates the need to copy data from input-buffer to user space. A ready-to-receive message can include an identifier for the request object at the receiving end. The sending end can reflect this id in the header of the data packet, allowing the input handler at the receiving end to retrieve the relevant request when the data arrives. <br /><br /><b>SocketSpy</b><br />SocketSpy is multipurpose utility unitially created for trapping Winsock, SNMPAPI, ICMP calls and network TCP/UDP traffic of active or new processes. In other words you may investigate already running process or start a new one in Socket Spy debug environment. Later versions of SocketSpy can show I/O File (KERNEL32.DLL) or Windows Registry (ADVAPI.DLL) operations of tested process. For example, you may capture all network and file input/output traffic of IExplore, OutLook Express and other programs. It is possible to capture only file I/O, network I/O, Windows Registry access separately. The utility may be used for trojan and virus finding, high level network protocol study or reverse engineering of network software. In short form results are presented in as Rich Edit text in output window and the full information may be saved as log file.
<br />
<br />Really SocketSpy is based on Win32 Debug functions, but if tested process wants to know if debugger  present, SocketSpy may block this request and tested process will receive an answer "No". <br /><br />			</div>
		  
</section>

