---
id: protocol-ftp-ctrl
slug: ftp-ctrl
name: FTP - Ctrl
expandedName: File Transfer Protocol - Control
origin: historical
provenance:
  source: protocols/protocol_FTP - Ctrl.htm
  sha256: 9c67776d02e35ef6936d567c3d13fdbbee925fd543dbee7c17d4e5a302cb108e
  provider: 'Colasoft Co., Ltd.'
aliases:
  - File Transfer Protocol - Control
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: File Transfer Protocol - Control
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Ports
    html: 21 (TCP) control
  - label: Related protocols
    html: 'TELNET,<br />SFTP,<br />SSH,<br />BBFTP'
  - label: URI
    html: ftp
  - label: Working groups
    html: 'Ftpext, Extensions to FTP'
originalUpdate: '2006-10-16 13:35:14'
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
related:
  - protocol-telnet
  - protocol-ssh
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

			The FTP-Control is the service used for FTP control connections. Transferring of files can be done via HTTP, but FTP is usually used and can be done in a dedicated FTP Client (like Leech FTP or Cute FTP) or a browser. FTP uses two channels to achieve the transfer, there is the control connection (using the FTP service) and a data channel. FTP uses two well-known sockets, one for transferring the data between the machines (Data) and one for controlling and maintaining the connection (Control).
<br />
<br />The communication channel from the user-PI to the server-PI is established as a TCP connection from the user to the standard server port. The user protocol interpreter is responsible for sending FTP commands and interpreting the replies received; the server-PI interprets commands, sends replies and directs its DTP to set up the data connection and transfer the data. If the second party to the data transfer (the passive transfer process) is the user-DTP, then it is governed through the internal protocol of the user-FTP host; if it is a second server-DTP, then it is governed by its PI on command from the user-PI. The FTP replies are discussed in the next section. In the description of a few of the commands in this section, it is helpful to be explicit about the possible replies.
<br />
<br />The FTP control connection is established via TCP between the user process port U and the server process port L. This protocol is assigned the service port 21 (25 octal), that is L=21.
<br /><hr />
<br /><b>Access Control commands</b>
<br />The following commands specify access control identifiers (command codes are shown in parentheses).
<br />
<br /><ul><li><b>USER NAME (USER)</b>
<br />The argument field is a Telnet string identifying the user. The user identification is that which is required by the server for access to its file system. This command will normally be the first command transmitted by the user after the control connections are made (some servers may require this). Additional identification information in the form of a password and/or an account command may also be required by some servers. Servers may allow a new USER command to be entered at any point in order to change the access control and/or accounting information. This has the effect of flushing any user, password, and account information already supplied and beginning the login sequence again. All transfer parameters are unchanged and any file transfer in progress is completed under the old access control parameters.<br /><br /></li>

<li><b>PASSWORD (PASS)</b>
<br />The argument field is a Telnet string specifying the user's password. This command must be immediately preceded by the user name command, and, for some sites, completes the user's identification for access control. Since password information is quite sensitive, it is desirable in general to "mask" it or suppress type out. It appears that the server has no foolproof way to achieve this. It is therefore the responsibility of the user-FTP process to hide the sensitive password information.<br /><br /></li>

<li><b>ACCOUNT (ACCT)</b>
<br />The argument field is a Telnet string identifying the user's account. The command is not necessarily related to the USER command, as some sites may require an account for login and others only for specific access, such as storing files. In the latter case the command may arrive at any time.
<br />
<br />There are reply codes to differentiate these cases for the automation: when account information is required for login, the response to a successful PASSword command is reply code 332. On the other hand, if account information is not required for login, the reply to a successful PASSword command is 230; and if the account information is needed for a command issued later in the dialogue, the server should return a 332 or 532 reply depending on whether it stores (pending receipt of the ACCounT command) or discards the command, respectively.<br /><br /></li>

<li><b>CHANGE WORKING DIRECTORY (CWD)</b>
<br />This command allows the user to work with a different directory or dataset for file storage or retrieval without altering his login or accounting information. Transfer parameters are similarly unchanged. The argument is a pathname specifying a directory or other system dependent file group designator.<br /><br /></li>

<li><b>CHANGE TO PARENT DIRECTORY (CDUP)</b>
<br />This command is a special case of CWD, and is included to simplify the implementation of programs for transferring directory trees between operating systems having different syntaxes for naming the parent directory. The reply codes shall be identical to the reply codes of CWD. <br /><br /></li>

<li><b>STRUCTURE MOUNT (SMNT)</b>
<br />This command allows the user to mount a different file system data structure without altering his login or accounting information. Transfer parameters are similarly unchanged. The argument is a pathname specifying a directory or other system dependent file group designator.<br /><br /></li>

<li><b>REINITIALIZE (REIN)</b>
<br />This command terminates a USER, flushing all I/O and account information, except to allow any transfer in progress to be completed. All parameters are reset to the default settings and the control connection is left open. This is identical to the state in which a user finds himself immediately after the control connection is opened. A USER command may be expected to follow.<br /><br /></li>

<li><b>LOGOUT (QUIT)</b>
<br />This command terminates a USER and if file transfer is not in progress, the server closes the control connection. If file transfer is in progress, the connection will remain open for result response and the server will then close it. If the user-process is transferring files for several USERs but does not wish to close and then reopen connections for each, then the REIN command should be used instead of QUIT.
<br />
<br />An unexpected close on the control connection will cause the server to take the effective action of an abort (ABOR) and a logout (QUIT).</li></ul>
<br /><hr />
<br /><b>FTP SERVICE commands</b>
<br />The FTP service commands define the file transfer or the file system function requested by the user. The argument of an FTP service command will normally be a pathname. The syntax of pathnames must conform to server site conventions (with standard defaults applicable), and the language conventions of the control connection. The suggested default handling is to use the last specified device, directory or file name, or the standard default defined for local users. The commands may be in any order except that a "rename from" command must be followed by a "rename to" command and the restart command must be followed by the interrupted service command (e.g., STOR or RETR). The data, when transferred in response to FTP service commands, shall always be sent over the data connection, except for certain informative replies. The following commands specify FTP service requests:
<br />
<br /><ul><li><b>RETRIEVE (RETR)</b>
<br />This command causes the server-DTP to transfer a copy of the file, specified in the pathname, to the server- or user-DTP at the other end of the data connection. The status and contents of the file at the server site shall be unaffected.<br /><br /></li>

<li><b>STORE (STOR)</b>
<br />This command causes the server-DTP to accept the data transferred via the data connection and to store the data as a file at the server site. If the file specified in the pathname exists at the server site, then its contents shall be replaced by the data being transferred. A new file is created at the server site if the file specified in the pathname does not already exist.<br /><br /></li>

<li><b>STORE UNIQUE (STOU)</b>
<br />This command behaves like STOR except that the resultant file is to be created in the current directory under a name unique to that directory. The 250 Transfer Started response must include the name generated.<br /><br /></li>

<li><b>APPEND (with create) (APPE)</b>
<br />This command causes the server-DTP to accept the data transferred via the data connection and to store the data in a file at the server site. If the file specified in the pathname exists at the server site, then the data shall be appended to that file; otherwise the file specified in the pathname shall be created at the server site.<br /><br /></li>

<li><b>ALLOCATE (ALLO)</b>
<br />This command may be required by some servers to reserve sufficient storage to accommodate the new file to be transferred. The argument shall be a decimal integer representing the number of bytes (using the logical byte size) of storage to be reserved for the file. For files sent with record or page structure a maximum record or page size (in logical bytes) might also be necessary; this is indicated by a decimal integer in a second argument field of the command. This second argument is optional, but when present should be separated from the first by the three Telnet characters  R . This command shall be followed by a STORe or APPEnd command. The ALLO command should be treated as a NOOP (no operation) by those servers which do not require that the maximum size of the file be declared beforehand, and those servers interested in only the maximum record or page size should accept a dummy value in the first argument and ignore it.<br /><br /></li>

<li><b>RESTART (REST)</b>
<br />The argument field represents the server marker at which file transfer is to be restarted. This command does not cause file transfer but skips over the file to the specified data checkpoint. This command shall be immediately followed by the appropriate FTP service command which shall cause file transfer to resume.<br /><br /></li>

<li><b>RENAME FROM (RNFR)</b>
<br />This command specifies the old pathname of the file which is to be renamed. This command must be immediately followed by a "rename to" command specifying the new file pathname.<br /><br /></li>

<li><b>RENAME TO (RNTO)</b>
<br />This command specifies the new pathname of the file specified in the immediately preceding "rename from" command. Together the two commands cause a file to be renamed.<br /><br /></li>

<li><b>ABORT (ABOR)</b>
<br />This command tells the server to abort the previous FTP service command and any associated transfer of data. The abort command may require "special action", as discussed in the Section on FTP Commands, to force recognition by the server. No action is to be taken if the previous command has been completed (including data transfer). The control connection is not to be closed by the server, but the data connection must be closed.
<br />
<br />There are two cases for the server upon receipt of this command: the FTP service command was already completed, or (2) the FTP service command is still in progress. In the first case, the server closes the data connection (if it is open) and responds with a 226 reply, indicating that the abort command was successfully processed.
<br />
<br />In the second case, the server aborts the FTP service in progress and closes the data connection, returning a 426 reply to indicate that the service request terminated abnormally. The server then sends a 226 reply, indicating that the abort command was successfully processed.<br /><br /></li>

<li><b>DELETE (DELE)</b>
<br />This command causes the file specified in the pathname to be deleted at the server site. If an extra level of protection is desired (such as the query, "Do you really wish to delete?"), it should be provided by the user-FTP process.<br /><br /></li>

<li><b>REMOVE DIRECTORY (RMD)</b>
<br />This command causes the directory specified in the pathname to be removed as a directory (if the pathname is absolute) or as a subdirectory of the current working directory (if the pathname is relative).<br /><br /></li>

<li><b>MAKE DIRECTORY (MKD)</b>
<br />This command causes the directory specified in the pathname to be created as a directory (if the pathname is absolute) or as a subdirectory of the current working directory (if the pathname is relative). <br /><br /></li>

<li><b>PRINT WORKING DIRECTORY (PWD)</b>
<br />This command causes the name of the current working directory to be returned in the reply. <br /><br /></li>

<li><b>LIST (LIST)</b>
<br />This command causes a list to be sent from the server to the passive DTP. If the pathname specifies a directory or other group of files, the server should transfer a list of files in the specified directory. If the pathname specifies a file then the server should send current information on the file. A null argument implies the user's current working or default directory. The data transfer is over the data connection in type ASCII or type EBCDIC. Since the information on a file may vary widely from system to system, this information may be hard to use automatically in a program, but may be quite useful to a human user.<br /><br /></li>

<li><b>NAME LIST (NLST)</b>
<br />This command causes a directory listing to be sent from server to user site. The pathname should specify a directory or other system-specific file group descriptor; a null argument implies the current directory. The server will return a stream of names of files and no other information. The data will be transferred in ASCII or EBCDIC type over the data connection as valid pathname strings separated by  or . This command is intended to return information that can be used by a program to further process the files automatically. For example, in the implementation of a "multiple get" function.<br /><br /></li>

<li><b>SITE PARAMETERS (SITE)</b>
<br />This command is used by the server to provide services specific to his system that are essential to file transfer but not sufficiently universal to be included as commands in the protocol. The nature of these services and the specification of their syntax can be stated in a reply to the HELP SITE command.<br /><br /></li>

<li><b>SYSTEM (SYST)</b>
<br />This command is used to find out the type of operating system at the server. The reply shall have as its first word one of the system names listed in the current version of the Assigned Numbers document.<br /><br /></li>

<li><b>STATUS (STAT)</b>
<br />This command shall cause a status response to be sent over the control connection in the form of a reply. The command may be sent during a file transfer (along with the Telnet IP and Synch signals--see the Section on FTP Commands) in which case the server will respond with the status of the operation in progress, or it may be sent between file transfers. In the latter case, the command may have an argument field. If the argument is a pathname, the command is analogous to the "list" command except that data shall be transferred over the control connection. If a partial pathname is given, the server may respond with a list of file names or attributes associated with that specification. If no argument is given, the server should return general status information about the server FTP process. This should include current values of all transfer parameters and the status of connections.<br /><br /></li>

<li><b>HELP (HELP)</b>
<br />This command shall cause the server to send helpful information regarding its implementation status over the control connection to the user. The command may take an argument (e.g., any command name) and return more specific information as a response. The reply is type 211 or 214. It is suggested that HELP be allowed before entering a USER command. The server may use this reply to specify site-dependent parameters, e.g., in response to HELP SITE.<br /><br /></li>

<li><b>NOOP (NOOP)</b>
<br />This command does not affect any parameters or previously entered commands. It specifies no action other than that the server send an OK reply.</li></ul>
<br />
<br />The File Transfer Protocol follows the specifications of the Telnet protocol for all communications over the control connection. Since the language used for Telnet communication may be a negotiated option, all references in the next two sections will be to the "Telnet language" and the corresponding "Telnet end-of-line code". Currently, one may take these to mean NVT-ASCII and . No other specifications of the Telnet protocol will be cited.
<br />
<br />FTP commands are "Telnet strings" terminated by the "Telnet end of line code". The command codes themselves are alphabetic characters terminated by the character  (Space) if parameters follow and Telnet-EOL otherwise. The command codes and the semantics of commands are described in this section; the detailed syntax of commands is specified in the Section on Commands, the reply sequences are discussed in the Section on Sequencing of Commands and Replies, and scenarios illustrating the use of commands are provided in the Section on Typical FTP Scenarios.
<br />
<br />FTP commands may be partitioned as those specifying access-control identifiers, data transfer parameters, or FTP service requests. Certain commands (such as ABOR, STAT, QUIT) may be sent over the control connection while a data transfer is in progress. Some servers may not be able to monitor the control and data connections simultaneously, in which case some special action will be necessary to get the server's attention. The following ordered format is tentatively recommended:
<br />
<br /><ul><li>User system inserts the Telnet "Interrupt Process" (IP) signal in the Telnet stream.
<br /><br /></li>
<li>User system sends the Telnet "Synch" signal.
<br /><br /></li>
<li>User system inserts the command (e.g., ABOR) in the Telnet stream.
<br /><br /></li>
<li>Server PI, after receiving "IP", scans the Telnet stream for EXACTLY ONE FTP command.</li></ul>
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
<br />ASCII was developed by the American National Standards Institute (ANSI).<br /><br /><b>Access controls</b><br />Access controls define users' access privileges to the use of a system, and to the files in that system. Access controls are necessary to prevent unauthorized or accidental use of files. It is the prerogative of a user-FTP process to provide access controls.<br /><br /><b>Byte size</b><br />There are two byte sizes of interest in FTP: the logical byte size of the file, and the transfer byte size used for the transmission of the data. The transfer byte size is always 8 bits. The transfer byte size is not necessarily the byte size in which data is to be stored in a system, nor the logical byte size for interpretation of the structure of the data.<br /><br /><b>Client</b><br />Clinet is a program which requests services of another program. It is a client part of a client-server architecture. Typically, a client is an application that runs on a personal computer or workstation and relies on a server to perform some operations. For example, an e-mail client is an application that enables you to send and receive e-mail.<br /><br /><b>Code</b><br />Written computer instructions. The term code is somewhat colloquial. For example, a programmer might say: "I wrote a lot of code this morning" or "There's one piece of code that doesn't work." 
<br />
<br />Code can appear in a variety of forms. The code that a programmer writes is called source code. After it has been compiled, it is called object code. Code that is ready to run is called executable code or machine code.<br /><br /><b>Command</b><br />Command is an instruction to a computer or device to perform a specific task. Commands come in different forms. They can be: special words (keywords) that a program understands, function keys 
<br />choices in a menu and buttons or other graphical objects on your screen 
<br />
<br />Every program that interacts with people responds to a specific set of commands. The set of commands and the syntax for entering them is called the user interface and varies from one program to another.<br /><br /><b>Control</b><br />Control is an object in a window or dialog box. Examples of controls include push-buttons, scroll bars, radio buttons, and pull-down menus.<br /><br /><b>Control connection</b><br />Control connection is the communication path between the USER-PI and SERVER-PI for the exchange of commands and replies. This connection follows the Telnet Protocol.<br /><br /><b>DTP</b><br />The data transfer process establishes and manages the data connection. The DTP can be passive or active.<br /><br /><b>Data</b><br />* Distinct pieces of information, usually formatted in a special way. All software is divided into two general categories: data and programs. Programs are collections of instructions for manipulating data. Data can exist in a variety of forms -- as numbers or text on pieces of paper, as bits and bytes stored in electronic memory, or as facts stored in a person's mind. Strictly speaking, data is the plural of datum, a single piece of information. In practice, however, people use data as both the singular and plural form of the word. 
<br />
<br />* The term data is often used to distinguish binary machine-readable information from textual human-readable information. For example, some applications make a distinction between data files (files that contain binary data) and text files (files that contain ASCII data). 
<br />
<br />* In database management systems, data files are the files that store the database information, whereas other files, such as index files and data dictionaries, store administrative information, known as metadata.<br /><br /><b>Data connection</b><br />Data connection is a simplex connection over which data is transferred, in a specified byte size, mode and type. The data transferred may be a part of a file, an entire file or a number of files. The data connection may be in either direction (server-to-user or user-to server).<br /><br /><b>End-of-Line</b><br />The end-of-line sequence defines the separation of printing lines. The sequence is Carriage Return, followed by Line Feed.<br /><br /><b>FTP</b><br />FTP (File Transfer Protocol) is the protocol for exchanging files over the Internet. FTP works in the same way as HTTP for transferring Web pages from a server to a user's browser and SMTP for transferring electronic mail across the Internet in that, like these technologies, FTP uses the Internet's TCP/IP protocols to enable data transfer. 
<br />
<br />FTP is most commonly used to download a file from a server using the Internet or to upload a file to a server (e.g., uploading a Web page file to a server).<br /><br /><b>File</b><br />File is an ordered set of computer data (including programs) of arbitrary length uniquely identified by a pathname.<br /><br /><b>HTTP</b><br />HTTP(HyperText Transfer Protocol) defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands. For example, when you enter a URL in your browser, this actually sends an HTTP command to the Web server directing it to fetch and transmit the requested Web page. 
<br />
<br />The other main standard that controls how the World Wide Web works is HTML, which covers how Web pages are formatted and displayed. 
<br />
<br />HTTP is called a stateless protocol because each command is executed independently, without any knowledge of the commands that came before it. This is the main reason that it is difficult to implement Web sites that react intelligently to user input. This shortcoming of HTTP is being addressed in a number of new technologies, including ActiveX, Java, JavaScript and cookies. <br /><br /><b>I/O</b><br />I/O (Input/output) is the collection of interfaces that different functional units (sub-systems) of an information processing system use to communicate with each other, or the signals (information) sent through those interfaces. Inputs are the signals received by the unit, and outputs are the signals sent from it.<br /><br /><b>Login</b><br />Alternative spellings for login are log in and log on.<br /><br /><b>NVT</b><br />The Network Virtual Terminal as defined in the Telnet Protocol.<br /><br /><b>PI</b><br />The protocol interpreter. The user and server sides of the protocol have distinct roles implemented in a user-PI and a server-PI.<br /><br /><b>Parameter</b><br />Characteristic, means defining the characteristics of something. In general, parameters are used to customize a program. For example, filenames, page lengths, and font specifications could all be considered parameters. 
<br />
<br />In programming, the term parameter is synonymous with argument, a value that is passed to a routine.<br /><br /><b>Password</b><br />A secret series of characters that enables a user to access a file, computer, or program. On multi-user systems, each user must enter his or her password before the computer will respond to commands. The password helps ensure that unauthorized users do not access the computer. In addition, data files and programs may require a password.<br /><br /><b>Pathname</b><br />Pathname is defined to be the character string which must be input to a file system by a user in order to identify a file. Pathname normally contains device and/or directory names, and file name specification. FTP does not yet specify a standard pathname convention. Each user must follow the file naming conventions of the file systems involved in the transfer.<br /><br /><b>Server-DTP</b><br />The data transfer process, in its normal "active" state, establishes the data connection with the "listening" data port. It sets up parameters for transfer and storage, and transfers data on command from its PI. The DTP can be placed in a "passive" state to listen for, rather than initiate a connection on the data port.<br /><br /><b>Server-PI</b><br />The server protocol interpreter "listens" on Port L for a connection from a user-PI and establishes a control communication connection. It receives standard FTP commands from the user-PI, sends replies, and governs the server-DTP.<br /><br /><b>Service</b><br />The NAS provides a service to the dial-in user, such as PPP or Telnet.<br /><br /><b>TCP</b><br />TCP (Transmission Control Protocol) is one of the main protocols in TCP/IP networks. TCP is one of the main protocols in TCP/IP networks. Whereas the IP protocol deals only with packets, TCP enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and also guarantees that packets will be delivered in the same order in which they were sent.<br /><br /><b>User-DTP</b><br />The data transfer process "listens" on the data port for a connection from a server-FTP process. If two servers are transferring data between them, the user-DTP is inactive.<br /><br /><b>User-FTP process</b><br />A set of functions including a protocol interpreter, a data transfer process and a user interface which together perform the function of file transfer in cooperation with one or more server-FTP processes. The user interface allows a local language to be used in the command-reply dialogue with the user.<br /><br /><b>User-PI</b><br />The user protocol interpreter initiates the control connection from its port U to the server-FTP process, initiates FTP commands, and governs the user-DTP if that process is part of the file transfer.<br /><br />			</div>
		  
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

