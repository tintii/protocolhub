---
id: protocol-ftp-data
slug: ftp-data
name: FTP - Data
expandedName: File Transfer Protocol - Data Protocol
origin: historical
provenance:
  source: protocols/protocol_FTP - Data.htm
  sha256: 24b9aeb56c61ce32229b4b57596b218e695727196dd1440d30c5f344451992eb
  provider: 'Colasoft Co., Ltd.'
aliases:
  - File Transfer Protocol - Data Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: File Transfer Protocol - Data Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: Application layer file transfer protocol
  - label: Ports
    html: 20 (TCP) default data
  - label: URI
    html: ftp
  - label: Working groups
    html: 'Ftpext, Extensions to FTP'
originalUpdate: '2006-10-16 13:35:36'
rfcs:
  - 114
  - 171
  - 172
  - 264
  - 265
  - 281
  - 294
  - 354
  - 385
  - 412
  - 414
  - 430
  - 438
  - 454
  - 458
  - 463
  - 468
  - 478
  - 479
  - 480
  - 506
  - 529
  - 542
  - 593
  - 607
  - 614
  - 624
  - 630
  - 640
  - 697
  - 737
  - 743
  - 765
  - 775
  - 949
  - 959
  - 1123
  - 1415
  - 1545
  - 1579
  - 1635
  - 1639
  - 2228
  - 2389
  - 2428
  - 2577
  - 2585
  - 2640
  - 2773
  - 3027
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

			File Transfer Protocol - Data protocol is the service used for FTP data connections. Transferring of files can be done via HTTP, but FTP is usually used and can be done in a dedicated FTP Client (like Leech FTP or Cute FTP) or a browser. FTP Data use port 20.
<br />
<br /><b>Data Transfer Functions</b>
<br />Files are transferred only via the data connection. The control connection is used for the transfer of commands, which describe the functions to be performed, and the replies to these commands (see the Section on FTP Replies). Several commands are concerned with the transfer of data between hosts. These data transfer commands include the MODE command which specify how the bits of the data are to be transmitted, and the STRUCTURE and TYPE commands, which are used to define the way in which the data are to be represented. The transmission and representation are basically independent but the Stream transmission mode is dependent on the file structure attribute and if Compressed transmission mode is used, the nature of the filler byte depends on the representation type.
<br />
<br /><ul><li><b>Data Representation and Storage</b>
<br />Data is transferred from a storage device in the sending host to a storage device in the receiving host. Often it is necessary to perform certain transformations on the data because data storage representations in the two systems are different. For example, NVT-ASCII has different data storage representations in different systems. DEC TOPS-20s's generally store NVT-ASCII as five 7-bit ASCII characters, left-justified in a 36-bit word. IBM Mainframe's store NVT-ASCII as 8-bit EBCDIC codes. Multics stores NVT-ASCII as four 9-bit characters in a 36-bit word. It is desirable to convert characters into the standard NVT-ASCII representation when transmitting text between dissimilar systems. The sending and receiving sites would have to perform the necessary transformations between the standard representation and their internal representations.
<br />
<br />A different problem in representation arises when transmitting binary data (not character codes) between host systems with different word lengths. It is not always clear how the sender should send data, and the receiver store it. For example, when transmitting 32-bit bytes from a 32-bit word-length system to a 36-bit word-length system, it may be desirable (for reasons of efficiency and usefulness) to store the 32-bit bytes right-justified in a 36-bit word in the latter system. In any case, the user should have the option of specifying data representation and transformation functions. It should be noted that FTP provides for very limited data type representations. Transformations desired beyond this limited capability should be performed by the user directly.<br /><br /></li>

<li><ul><li><b>Data Types</b>
<br />Data representations are handled in FTP by a user specifying a representation type. This type may implicitly (as in ASCII or EBCDIC) or explicitly (as in Local byte) define a byte size for interpretation which is referred to as the logical byte size. Note that this has nothing to do with the byte size used for transmission over the data connection, called the transfer byte size, and the two should not be confused. For example, NVT-ASCII has a logical byte size of 8 bits. If the type is Local byte, then the TYPE command has an obligatory second parameter specifying the logical byte size. The transfer byte size is always 8 bits.<br /><br /></li>

<li><ul><li><b>ASCII Type</b>
<br />This is the default type and must be accepted by all FTP implementations. It is intended primarily for the transfer of text files, except when both hosts would find the EBCDIC type more convenient.<br /><br /></li>

<li><b>EBCDIC Type</b>
<br />This type is intended for efficient transfer between hosts which use EBCDIC for their internal character representation.<br /><br /></li>

<li><b>Image Type</b>
<br />The data are sent as contiguous bits which, for transfer, are packed into the 8-bit transfer bytes. The receiving site must store the data as contiguous bits. The structure of the storage system might necessitate the padding of the file (or of each record, for a record-structured file) to some convenient boundary (byte, word or block).<br /><br /></li>

<li><b>Local Type</b>
<br />The data is transferred in logical bytes of the size specified by the obligatory second parameter, Byte size. The value of Byte size must be a decimal integer; there is no default value. The logical byte size is not necessarily the same as the transfer byte size.<br /><br /></li>

<li><b>Format Control</b>
<br />The types ASCII and EBCDIC also take a second (optional) parameter; this is to indicate what kind of vertical format control, if any, is associated with a file. The following data representation types are defined in FTP:<br /><br /></li>

<li><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>Data</td><td>Description</td></tr><tr><td>NON PRINT</td><td>This is the default format to be used if the second (format) parameter is omitted. Non-print format must be accepted by all FTP implementations.</td></tr><tr><td>TELNET FORMAT CONTROLS</td><td>The file contains ASCII/EBCDIC vertical format controls which the printer process will interpret appropriately. In exactly this sequence, also denotes end-of-line.</td></tr><tr><td>CARRIAGE CONTROL (ASA)</td><td>The file contains ASA (FORTRAN) vertical format control characters.</td></tr></tbody></table></div></div></li></ul><br /><br /></li>

<li><b>Data Structures</b>
<br />In addition to different representation types, FTP allows the structure of a file to be specified. Three file structures are defined in FTP:<br /><br /></li>

<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>Type</td><td>Description</td></tr><tr><td>file-structure</td><td>where there is no internal structure and the file is considered to be a continuous sequence of data bytes</td></tr><tr><td>record-structure</td><td>where the file is made up of sequential records</td></tr><tr><td>and page-structure</td><td>where the file is made up of independent indexed pages</td></tr></tbody></table></div></div></li></ul><br /><br /></li>

<li><b>Establishing Data Connections</b>
<br />The mechanics of transferring data consists of setting up the data connection to the appropriate ports and choosing the parameters for transfer. Both the user and the server-DTPs have a default data port. The user-process default data port is the same as the control connection port (i.e., U). The server-process default data port is the port adjacent to the control connection port (i.e., L-1).
<br />
<br />The transfer byte size is 8-bit bytes. This byte size is relevant only for the actual transfer of the data; it has no bearing on representation of the data within a host's file system.
<br />
<br />The passive data transfer process (this may be a user-DTP or a second server-DTP) shall listen on the data port prior to sending a transfer request command. The FTP request command determines the direction of the data transfer. The server, upon receiving the transfer request, will initiate the data connection to the port. When the connection is established, the data transfer begins between DTP's, and the server-PI sends a confirming reply to the user-PI.
<br />
<br />Every FTP implementation must support the use of the default data ports, and only the USER-PI can initiate a change to non-default ports.
<br />
<br />It is possible for the user to specify an alternate data port by use of the PORT command. The user may want a file dumped on a TAC line printer or retrieved from a third party host. In the latter case, the user-PI sets up control connections with both server-PI's. One server is then told (by an FTP command) to listen for a connection which the other will initiate. The user-PI sends one server-PI a PORT command indicating the data port of the other. Finally, both are sent the appropriate transfer commands. The exact sequence of commands and replies sent between the user-controller and the servers is defined in the Section on FTP Replies.
<br />
<br />In general, it is the server's responsibility to maintain the data connection--to initiate it and to close it. The exception to this is when the user-DTP is sending the data in a transfer mode that requires the connection to be closed to indicate EOF. The server MUST close the data connection under the following conditions:
<br /><ul><li>The server has completed sending data in a transfer mode that requires a close to indicate EOF.
<br /></li><li>The server receives an ABORT command from the user.
<br /></li><li>The port specification is changed by a command from the user.
<br /></li><li>The control connection is closed legally or otherwise.
<br /></li><li>An irrecoverable error condition occurs.</li></ul>
<br />Otherwise the close is a server option, the exercise of which the server must indicate to the user-process by either a 250 or 226 reply only.<br /><br /></li>

<li><b>Data Connection Management</b>
<br />Default Data Connection Ports: All FTP implementations must support use of the default data connection ports, and only the User-PI may initiate the use of non-default ports.
<br />
<br />Negotiating Non-Default Data Ports: The User-PI may specify a non-default user side data port with the PORT command. The User-PI may request the server side to identify a non-default server side data port with the PASV command. Since a connection is defined by the pair of addresses, either of these actions is enough to get a different data connection, still it is permitted to do both commands to use new ports on both ends of the data connection.
<br />
<br />Reuse of the Data Connection: When using the stream mode of data transfer the end of the file must be indicated by closing the connection. This causes a problem if multiple files are to be transferred in the session, due to need for TCP to hold the connection record for a time out period to guarantee the reliable communication. Thus the connection can not be reopened at once.<br /><br /></li>

<li><b>Transmission Modes</b>
<br />The next consideration in transferring data is choosing the appropriate transmission mode. There are three modes: one which formats the data and allows for restart procedures; one which also compresses the data for efficient transfer; and one which passes the data with little or no processing. In this last case the mode interacts with the structure attribute to determine the type of processing. In the compressed mode, the representation type determines the filler byte.
<br />
<br />All data transfers must be completed with an end-of-file (EOF) which may be explicitly stated or implied by the closing of the data connection. For files with record structure, all the end-of-record markers (EOR) are explicit, including the final one. For files transmitted in page structure a "last-page" page type is used.
<br />
<br />The following transmission modes are defined in FTP:<br /><br /></li>

<li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td>Mode</td><td>Description</td></tr><tr><td>STREAM MODE</td><td>The data is transmitted as a stream of bytes. There is no restriction on the representation type used; record structures are allowed.</td></tr><tr><td>BLOCK MODE</td><td>The file is transmitted as a series of data blocks preceded by one or more header bytes. The header bytes contain a count field, and descriptor code.</td></tr><tr><td>COMPRESSED MODE</td><td>There are three kinds of information to be sent: regular data, sent in a byte string; compressed data, consisting of replications or filler; and control information, sent in a two-byte escape sequence.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>ERROR recovery and RESTART</b>
<br />There is no provision for detecting bits lost or scrambled in data transfer; this level of error control is handled by the TCP. However, a restart procedure is provided to protect users from gross system failures (including failures of a host, an FTP-process, or the underlying network).
<br />
<br />The restart procedure is defined only for the block and compressed modes of data transfer. It requires the sender of data to insert a special marker code in the data stream with some marker information. The marker information has meaning only to the sender, but must consist of printable characters in the default or negotiated language of the control connection (ASCII or EBCDIC). The marker could represent a bit-count, a record-count, or any other information by which a system may identify a data checkpoint. The receiver of data, if it implements the restart procedure, would then mark the corresponding position of this marker in the receiving system, and return this information to the user.</li></ul>
<br /><hr />
<br /><b>Data Transfer Commands</b>
<br />All data transfer parameters have default values, and the commands specifying data transfer parameters are required only if the default parameter values are to be changed. The default value is the last specified value, or if no value has been specified, the standard default value specified here. This implies that the server must "remember" the applicable default values. The commands may be in any order except that they must precede the FTP service request. The following commands specify data transfer parameters.
<br />
<br /><ul><li><b>Data Port (PORT)</b>
<br />The argument is a HOST-PORT specification for the data port to be used in data connection. There are defaults for both the user and server data ports, and under normal circumstances this command and its reply are not needed.
<br />
<br /></li><li><b>Passive (PASV)</b>
<br />This command requests the server-DTP to "listen" on a data port (which is not its default data port) and to wait for a connection rather than initiate one upon receipt of a transfer command. The response to this command includes the host and port address this server is listening on.<br /><br /></li>

<li><b>Representation Type (TYPE)</b>
<br />The argument specifies the representation type as described in the Section on Data Representation and Storage. Several types take a second parameter. The first parameter is denoted by a single Telnet character, as is the second Format parameter for ASCII and EBCDIC; the second parameter for local byte is a decimal integer to indicate Bytesize. <br /><br /></li>

<li><b>File Structure (STRU)</b>
<br />The argument is a single Telnet character code specifying file structure described in the Section on Data Representation and Storage.<br /><br /></li>

<li><b>Transfer Mode (MODE)</b>
<br />The argument is a single Telnet character code specifying the data transfer modes described in the Section on Transmission Modes.<br /><br /></li>

<li><b>Byte Size (BYTE)</b>
<br />The argument is an ASCII-represented decimal integer (1 through 255), specifying the byte size for the data connection for local byte and image representation types. The default byte size is 8 bits. The byte size is always 8 bits in the ASCII and Print file representation types. A server may reject specific byte size/type combinations by sending an appropriate reply.<br /><br /></li>

<li><b>Data Socket (SOCK)</b>
<br />The argument is a HOST-socket specification for the data socket to be used in data connection. There may be two data sockets, one from server to user and the other for user to server data transfer. An odd socket number defines a send socket and an even socket number defines a receive socket. The default HOST is the user HOST to which TELNET connections are made. The default data sockets are (U+4) and (U+5) where U is the socket number used in the TELNET ICP and the TELNET connections are on sockets (U+2) and (U+3).</li></ul>
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
			<b>ASCII</b><br />ASCII (American Standard Code for Information Interchange) is the most common format for text files in computers and on the Internet. In an ASCII file, each alphabetic, numeric, or special character is represented with a 7-bit binary number (a string of seven 0s or 1s). 128 possible characters are defined. 
<br />
<br />Unix and DOS-based operating systems use ASCII for text files. Windows NT and 2000 uses a newer code, Unicode. IBM's S/390 systems use a proprietary 8-bit code called EBCDIC. Conversion programs allow different operating systems to change a file from one code to another. 
<br />
<br />ASCII was developed by the American National Standards Institute (ANSI).<br /><br /><b>Binary</b><br />Binary is pertaining to a number system that has just two unique digits. For most purposes, we use the decimal number system, which has ten unique digits, 0 through 9. All other numbers are then formed by combining these ten digits. Computers are based on the binary numbering system, which consists of just two unique numbers, 0 and 1. All operations that are possible in the decimal system (addition, subtraction, multiplication, division) are equally possible in the binary system.<br /><br /><b>Bit</b><br />Bit (binary digit), the smallest unit of information on a machine, a leading statistician and adviser to five presidents. A single bit can hold only one of two values: 0 or 1. More meaningful information is obtained by combining consecutive bits into larger units. For example, a byte is composed of 8 consecutive bits.<br /><br /><b>Byte</b><br />Byte (binary term) is a unit of storage capable of holding a single character. On almost all modern computers, a byte is equal to 8 bits. Large amounts of memory are indicated in terms of kilobytes (1,024 bytes), megabytes (1,048,576 bytes), and gigabytes (1,073,741,824 bytes).<br /><br /><b>Byte size</b><br />There are two byte sizes of interest in FTP: the logical byte size of the file, and the transfer byte size used for the transmission of the data. The transfer byte size is always 8 bits. The transfer byte size is not necessarily the byte size in which data is to be stored in a system, nor the logical byte size for interpretation of the structure of the data.<br /><br /><b>Client</b><br />Clinet is a program which requests services of another program. It is a client part of a client-server architecture. Typically, a client is an application that runs on a personal computer or workstation and relies on a server to perform some operations. For example, an e-mail client is an application that enables you to send and receive e-mail.<br /><br /><b>Code</b><br />Written computer instructions. The term code is somewhat colloquial. For example, a programmer might say: "I wrote a lot of code this morning" or "There's one piece of code that doesn't work." 
<br />
<br />Code can appear in a variety of forms. The code that a programmer writes is called source code. After it has been compiled, it is called object code. Code that is ready to run is called executable code or machine code.<br /><br /><b>Command</b><br />Command is an instruction to a computer or device to perform a specific task. Commands come in different forms. They can be: special words (keywords) that a program understands, function keys 
<br />choices in a menu and buttons or other graphical objects on your screen 
<br />
<br />Every program that interacts with people responds to a specific set of commands. The set of commands and the syntax for entering them is called the user interface and varies from one program to another.<br /><br /><b>DTP</b><br />The data transfer process establishes and manages the data connection. The DTP can be passive or active.<br /><br /><b>Data</b><br />* Distinct pieces of information, usually formatted in a special way. All software is divided into two general categories: data and programs. Programs are collections of instructions for manipulating data. Data can exist in a variety of forms -- as numbers or text on pieces of paper, as bits and bytes stored in electronic memory, or as facts stored in a person's mind. Strictly speaking, data is the plural of datum, a single piece of information. In practice, however, people use data as both the singular and plural form of the word. 
<br />
<br />* The term data is often used to distinguish binary machine-readable information from textual human-readable information. For example, some applications make a distinction between data files (files that contain binary data) and text files (files that contain ASCII data). 
<br />
<br />* In database management systems, data files are the files that store the database information, whereas other files, such as index files and data dictionaries, store administrative information, known as metadata.<br /><br /><b>Data connection</b><br />Data connection is a simplex connection over which data is transferred, in a specified byte size, mode and type. The data transferred may be a part of a file, an entire file or a number of files. The data connection may be in either direction (server-to-user or user-to server).<br /><br /><b>Data port</b><br />The passive data transfer process "listens" on the data port for a connection from the active transfer process in order to open the data connection.<br /><br /><b>EBCDIC</b><br />EBCDIC (Extended Binary-Coded Decimal Interchange Code) is an IBM code for representing characters as numbers. Although it is widely used on large IBM computers, most other computers, including PCs and Macintoshes, use ASCII codes.<br /><br /><b>EOF</b><br />The EOF (end-of-file) condition that defines the end of a file being transferred.<br /><br /><b>EOR</b><br />The EOR (end-of-record) condition that defines the end of a record being transferred.<br /><br /><b>Error recovery</b><br />Error recovery is a procedure that allows a user to recover from certain errors such as failure of either host system or transfer process. In FTP, error recovery may involve restarting a file transfer at a given checkpoint.<br /><br /><b>FTP</b><br />FTP (File Transfer Protocol) is the protocol for exchanging files over the Internet. FTP works in the same way as HTTP for transferring Web pages from a server to a user's browser and SMTP for transferring electronic mail across the Internet in that, like these technologies, FTP uses the Internet's TCP/IP protocols to enable data transfer. 
<br />
<br />FTP is most commonly used to download a file from a server using the Internet or to upload a file to a server (e.g., uploading a Web page file to a server).<br /><br /><b>File</b><br />File is an ordered set of computer data (including programs) of arbitrary length uniquely identified by a pathname.<br /><br /><b>HTTP</b><br />HTTP(HyperText Transfer Protocol) defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands. For example, when you enter a URL in your browser, this actually sends an HTTP command to the Web server directing it to fetch and transmit the requested Web page. 
<br />
<br />The other main standard that controls how the World Wide Web works is HTML, which covers how Web pages are formatted and displayed. 
<br />
<br />HTTP is called a stateless protocol because each command is executed independently, without any knowledge of the commands that came before it. This is the main reason that it is difficult to implement Web sites that react intelligently to user input. This shortcoming of HTTP is being addressed in a number of new technologies, including ActiveX, Java, JavaScript and cookies. <br /><br /><b>Host</b><br />Host is a computer system that is accessed by a user working at a remote location. Typically, the term is used when there are two computer systems connected by modems and telephone lines. The system that contains the data is called the host, while the computer at which the user sits is called the remote terminal. 
<br />
<br />Host can refer to a computer that is connected to a TCP/IP network, including the Internet. Each host has a unique IP address. 
<br />
<br />Host can refer to provide the infrastructure for a computer service too. For example, there are many companies that host Web servers. This means that they provide the hardware, software, and communications lines required by the server, but the content on the server may be controlled by someone else.<br /><br /><b>IBM</b><br />IBM (International Business Machines) is headquartered in Armonk, NY, USA. The company manufactures and sells computer hardware, software, and services.<br /><br /><b>Mode</b><br />Mode is the state or setting of a program or device. For example, when a word processor is in insert mode, characters that you type are inserted at the cursor position. In overstrike mode, characters typed replace existing characters.<br /><br /><b>NVT</b><br />The Network Virtual Terminal as defined in the Telnet Protocol.<br /><br /><b>PI</b><br />The protocol interpreter. The user and server sides of the protocol have distinct roles implemented in a user-PI and a server-PI.<br /><br /><b>Port</b><br />Port is an interface on a computer to which you can connect a device. Personal computers have various types of ports. Internally, there are several ports for connecting disk drives, display screens, and keyboards. Externally, personal computers have ports for connecting modems, printers, mice, and other peripheral devices. 
<br />
<br />Almost all personal computers come with a serial RS-232C port or RS-422 port for connecting a modem or mouse and a parallel port for connecting a printer. On PCs, the parallel port is a Centronics interface that uses a 25-pin connector. SCSI (Small Computer System Interface) ports support higher transmission speeds than do conventional ports and enable you to attach up to seven devices to the same port.<br /><br /><b>Server-DTP</b><br />The data transfer process, in its normal "active" state, establishes the data connection with the "listening" data port. It sets up parameters for transfer and storage, and transfers data on command from its PI. The DTP can be placed in a "passive" state to listen for, rather than initiate a connection on the data port.<br /><br /><b>Server-PI</b><br />The server protocol interpreter "listens" on Port L for a connection from a user-PI and establishes a control communication connection. It receives standard FTP commands from the user-PI, sends replies, and governs the server-DTP.<br /><br /><b>TCP</b><br />TCP (Transmission Control Protocol) is one of the main protocols in TCP/IP networks. TCP is one of the main protocols in TCP/IP networks. Whereas the IP protocol deals only with packets, TCP enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and also guarantees that packets will be delivered in the same order in which they were sent.<br /><br /><b>Type</b><br />The data representation type used for data transfer and storage. Type implies certain transformations between the time of data storage and data transfer. The representation types defined in FTP are described in the Section on Establishing Data Connections.<br /><br /><b>User</b><br />User is an individual who uses a computer. This includes expert programmers as well as novices. An end user is any individual who runs an application program.<br /><br /><b>User-DTP</b><br />The data transfer process "listens" on the data port for a connection from a server-FTP process. If two servers are transferring data between them, the user-DTP is inactive.<br /><br /><b>User-PI</b><br />The user protocol interpreter initiates the control connection from its port U to the server-FTP process, initiates FTP commands, and governs the user-DTP if that process is part of the file transfer.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc114.html">RFC 114</a>] A FILE TRANSFER PROTOCOL. 
[<a href="https://www.rfc-editor.org/rfc/rfc281.html">RFC 281</a>] A suggested Addition to File Transfer Protocol. 
[<a href="https://www.rfc-editor.org/rfc/rfc354.html">RFC 354</a>] THE FILE TRANSFER PROTOCOL. 
                Obsoleted: <a href="https://www.rfc-editor.org/rfc/rfc264.html">RFC 264</a>, <a href="https://www.rfc-editor.org/rfc/rfc265.html">RFC 265</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc385.html">RFC 385</a>] COMMENTS ON THE FILE TRANSFER PROTOCOL (<a href="https://www.rfc-editor.org/rfc/rfc354.html">RFC 354</a>). 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc354.html">RFC 354</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc412.html">RFC 412</a>] User FTP Documentation. 
[<a href="https://www.rfc-editor.org/rfc/rfc414.html">RFC 414</a>] FILE TRANSFER PROTOCOL (FTP) STATUS AND FURTHER COMMENTS. 
[<a href="https://www.rfc-editor.org/rfc/rfc430.html">RFC 430</a>] COMMENTS ON FILE TRANSFER PROTOCOL. 
[<a href="https://www.rfc-editor.org/rfc/rfc438.html">RFC 438</a>] FTP Server-Server Interaction. 
[<a href="https://www.rfc-editor.org/rfc/rfc454.html">RFC 454</a>] FILE TRANSFER PROTOCOL - Meeting Announcement and a New Proposed Document. 
[<a href="https://www.rfc-editor.org/rfc/rfc458.html">RFC 458</a>] Mail Retrieval via FTP. 
[<a href="https://www.rfc-editor.org/rfc/rfc463.html">RFC 463</a>] FTP Comments and Response to <a href="https://www.rfc-editor.org/rfc/rfc430.html">RFC 430</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc468.html">RFC 468</a>] FTP DATA COMPRESSION. 
[<a href="https://www.rfc-editor.org/rfc/rfc478.html">RFC 478</a>] FTP Server-Server Interaction-II. 
[<a href="https://www.rfc-editor.org/rfc/rfc479.html">RFC 479</a>] Use of FTP by the NIC Journal. 
[<a href="https://www.rfc-editor.org/rfc/rfc480.html">RFC 480</a>] Host-Dependent FTP Parameters. 
[<a href="https://www.rfc-editor.org/rfc/rfc506.html">RFC 506</a>] An FTP Command-Naming Problem. 
[<a href="https://www.rfc-editor.org/rfc/rfc529.html">RFC 529</a>] A Note on Protocol Synch Sequences. 
[<a href="https://www.rfc-editor.org/rfc/rfc542.html">RFC 542</a>] File Transfer Protocol for the ARPA Network. 
[<a href="https://www.rfc-editor.org/rfc/rfc593.html">RFC 593</a>] Telnet and FTP Implementation Schedule Change. 
[<a href="https://www.rfc-editor.org/rfc/rfc614.html">RFC 614</a>] Response to <a href="https://www.rfc-editor.org/rfc/rfc607.html">RFC 607</a>, "Comments on the File Transfer Protocol". 
[<a href="https://www.rfc-editor.org/rfc/rfc624.html">RFC 624</a>] Comments on the File Transfer Protocol. 
                Obsoleted: <a href="https://www.rfc-editor.org/rfc/rfc607.html">RFC 607</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc630.html">RFC 630</a>] FTP Error Code Usage for More Reliable Mail Service. 
[<a href="https://www.rfc-editor.org/rfc/rfc640.html">RFC 640</a>] Revised FTP Reply Codes. 
[<a href="https://www.rfc-editor.org/rfc/rfc697.html">RFC 697</a>] CWD Command of FTP. 
[<a href="https://www.rfc-editor.org/rfc/rfc737.html">RFC 737</a>] FTP Extension: XSEN. 
[<a href="https://www.rfc-editor.org/rfc/rfc743.html">RFC 743</a>] FTP extension: XRSQ/XRCP. 
[<a href="https://www.rfc-editor.org/rfc/rfc775.html">RFC 775</a>] DIRECTORY ORIENTED FTP COMMANDS. 
[<a href="https://www.rfc-editor.org/rfc/rfc949.html">RFC 949</a>] FTP UNIQUE-NAMED STORE COMMAND. 
[<a href="https://www.rfc-editor.org/rfc/rfc959.html">RFC 959</a>] File Transfer Protocol (FTP). 
                Obsoleted: <a href="https://www.rfc-editor.org/rfc/rfc765.html">RFC 765</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1123.html">RFC 1123</a>] Requirements for Internet Hosts -- Application and Support. 
[<a href="https://www.rfc-editor.org/rfc/rfc1415.html">RFC 1415</a>] FTP-FTAM Gateway Specification. 
[<a href="https://www.rfc-editor.org/rfc/rfc1579.html">RFC 1579</a>] Firewall-Friendly FTP. 
[<a href="https://www.rfc-editor.org/rfc/rfc1635.html">RFC 1635</a>] How to Use Anonymous FTP. 
[<a href="https://www.rfc-editor.org/rfc/rfc1639.html">RFC 1639</a>] FTP Operation Over Big Address Records (FOOBAR). 
                Obsoleted: <a href="https://www.rfc-editor.org/rfc/rfc1545.html">RFC 1545</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2228.html">RFC 2228</a>] FTP Security Extensions. Defines FTP commands AUTH, ADAT, PROT, PBSZ, CCC, MIC, CONF, ENC . 
[<a href="https://www.rfc-editor.org/rfc/rfc2389.html">RFC 2389</a>] Feature negotiation mechanism for the File Transfer Protocol. Defines FTP commands FEAT and OPTS. 
[<a href="https://www.rfc-editor.org/rfc/rfc2428.html">RFC 2428</a>] FTP Extensions for IPv6 and NATs. Defines FTP commands EPRT and EPSV. 
[<a href="https://www.rfc-editor.org/rfc/rfc2577.html">RFC 2577</a>] FTP Security Considerations. 
[<a href="https://www.rfc-editor.org/rfc/rfc2585.html">RFC 2585</a>] Internet X.509 Public Key Infrastructure Operational Protocols: FTP and HTTP. 
[<a href="https://www.rfc-editor.org/rfc/rfc2640.html">RFC 2640</a>] Internationalization of the File Transfer Protocol. Defines FTP command LANG. 
[<a href="https://www.rfc-editor.org/rfc/rfc2773.html">RFC 2773</a>] Encryption using KEA and SKIPJACK. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc959.html">RFC 959</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3027.html">RFC 3027</a>] Protocol Complications with the IP Network Address Translator. <hr /><b><b>Obsolete RFCs:</b> </b>
[<a href="https://www.rfc-editor.org/rfc/rfc172.html">RFC 172</a>] THE FILE TRANSFER PROTOCOL. 
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc265.html">RFC 265</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc114.html">RFC 114</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc264.html">RFC 264</a>] THE DATA TRANSFER PROTOCOL. 
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc354.html">RFC 354</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc171.html">RFC 171</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc265.html">RFC 265</a>] THE FILE TRANSFER PROTOCOL. 
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc354.html">RFC 354</a>. 
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc294.html">RFC 294</a>. 
                Obsoleted: <a href="https://www.rfc-editor.org/rfc/rfc172.html">RFC 172</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc607.html">RFC 607</a>] Comments on the File Transfer Protocol. 
[<a href="https://www.rfc-editor.org/rfc/rfc765.html">RFC 765</a>] FILE TRANSFER PROTOCOL. 
[<a href="https://www.rfc-editor.org/rfc/rfc1545.html">RFC 1545</a>] FTP Operation Over Big Address Records (FOOBAR). 
                		  </div>
		  
</section>

