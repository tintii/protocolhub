---
id: protocol-ftp
slug: ftp
name: FTP
expandedName: File Transfer Protocol
origin: historical
provenance:
  source: protocols/protocol_FTP.htm
  sha256: 707d9e6fa4d2996df75003206cc402d660d9377f1dc13eb9722f69873e51eef3
  provider: 'Colasoft Co., Ltd.'
aliases:
  - File Transfer Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: File Transfer Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: File transfer protocol
  - label: Ports
    html: |-
      20 (TCP) default data
      <br />21 (TCP) control
  - label: URI
    html: 'ftp:'
  - label: Working groups
    html: 'Ftpext, Extensions to FTP'
originalUpdate: '2006-10-16 13:34:15'
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

			File Transfer Protocol (FTP), a standard Internet protocol, is the simplest way to exchange files between computers on the Internet. Like the Hypertext Transfer Protocol (HTTP), which transfers displayable Web pages and related files, and the Simple Mail Transfer Protocol (SMTP), which transfers e-mail, FTP is an application protocol that uses the Internet's TCP/IP protocols. FTP is commonly used to transfer Web page files from their creator to the computer that acts as their server for everyone on the Internet. It's also commonly used to download programs and other files to your computer from other servers.
<br />
<br />As a user, you can use FTP with a simple command line interface (for example, from the Windows MS-DOS Prompt window) or with a commercial program that offers a graphical user interface. Your Web browser can also make FTP requests to download programs you select from a Web page. Using FTP, you can also update (delete, rename, move, and copy) files at a server. You need to logon to an FTP server. However, publicly available files are easily accessed using anonymous FTP. 
<br />
<br />Basic FTP support is usually provided as part of a suite of programs that come with TCP/IP. However, any FTP client program with a graphical user interface usually must be downloaded from the company that makes it. 
<br />
<br />The FTP specification says that by default, all data transfers should be over a single connection. An active open is done by the server, from its port 20 to the same port on the client machine as was used for the control connection. The client does a passive open. For better or worse, most current FTP clients do not behave that way. A new connection is used for each transfer; to avoid running afoul of TCP's TIMEWAIT state, the client picks a new port number each time and sends a PORT command announcing that to the server. 
<br />
<br />FTP uses the Telnet protocol on the control connection.
<br /><hr />
<br /><b>Command-line Options</b>
<br />As you're starting the program from a DOS prompt:ftp [-v] [-d] [-i] [-n] [-g] [-s:filename] [-a] [-w:windowsize] [computer]
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>Option</p></td><td><p>Description</p></td></tr><tr><td><p>-v</p></td><td><p> Suppresses verbose display of remote server responses. </p></td></tr><tr><td><p>-n</p></td><td><p>Suppresses auto-login upon initial connection. </p></td></tr><tr><td><p>-i</p></td><td><p>Turns off interactive prompting during multiple file transfers. </p></td></tr><tr><td><p>-d</p></td><td><p>Enables debugging, displaying all ftp commands passed between the client and server. </p></td></tr><tr><td><p>-g</p></td><td><p>Disables filename globbing, which permits the use of wildcard chracters in local file and path names. </p></td></tr><tr><td><p>-s:filename</p></td><td><p> Specifies a text file containing ftp commands; the commands will automatically run after ftp starts. No spaces are allowed in this parameter. Use this switch instead of redirection (&gt;). </p></td></tr><tr><td><p>-a</p></td><td><p> Use any local interface when binding data connection. </p></td></tr><tr><td><p>-w:windowsize</p></td><td><p> Overrides the default transfer buffer size of 4096. </p></td></tr><tr><td><p>computer</p></td><td><p> Specifies the computer name or IP address of the remote computer to connect to. The computer, if specified, must be the last parameter on the line.</p></td></tr></tbody></table></div></div>
<br /><hr />
<br /><b>FTP Commands</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>Command</p></td><td><p>Description</p></td></tr><tr><td><p>!</p></td><td><p>Runs the specified command on the local computer </p></td></tr><tr><td><p>?</p></td><td><p>Displays descriptions for ftp commands </p></td></tr><tr><td><p>append</p></td><td><p>Appends a local file to a file on the remote computer </p></td></tr><tr><td><p>ascii</p></td><td><p>Sets the file transfer type to ASCII, the default </p></td></tr><tr><td><p>bell</p></td><td><p>Toggles a bell to ring after each file transfer command is completed (default = OFF) </p></td></tr><tr><td><p>binary</p></td><td><p>Sets the file transfer type to binary </p></td></tr><tr><td><p>bye</p></td><td><p>Ends the FTP session and exits ftp </p></td></tr><tr><td><p>cd</p></td><td><p>Changes the working directory on the remote computer </p></td></tr><tr><td><p>close</p></td><td><p>Ends the FTP session and returns to the command interpreter </p></td></tr><tr><td><p>debug</p></td><td><p>Toggles debugging (default = OFF) </p></td></tr><tr><td><p>delete</p></td><td><p>Deletes a single file on a remote computer </p></td></tr><tr><td><p>dir</p></td><td><p>Displays a list of a remote directory's files and subdirectories </p></td></tr><tr><td><p>disconnect</p></td><td><p>Disconnects from the remote computer, retaining the ftp prompt </p></td></tr><tr><td><p>get</p></td><td><p>Copies a single remote file to the local computer </p></td></tr><tr><td><p>glob</p></td><td><p>Toggles filename globbing (wildcard characters) (default = ON) </p></td></tr><tr><td><p>hash</p></td><td><p>Toggles hash-sign (#) printing for each data block transferred (default = OFF) </p></td></tr><tr><td><p>help</p></td><td><p>Displays descriptions for ftp commands </p></td></tr><tr><td><p>lcd</p></td><td><p>Changes the working directory on the local computer </p></td></tr><tr><td><p>literal</p></td><td><p>Sends arguments, verbatim, to the remote FTP server </p></td></tr><tr><td><p>ls</p></td><td><p>Displays an abbreviated list of a remote directory's files and subdirectories </p></td></tr><tr><td><p>mdelete</p></td><td><p>Deletes one or more files on a remote computer </p></td></tr><tr><td><p>mdir</p></td><td><p>Displays a list of a remote directory's files and subdirectories </p></td></tr><tr><td><p>mget</p></td><td><p>Copies one or more remote files to the local computer </p></td></tr><tr><td><p>mkdir</p></td><td><p>Creates a remote directory </p></td></tr><tr><td><p>mls</p></td><td><p>Displays an abbreviated list of a remote directory's files and subdirectories </p></td></tr><tr><td><p>mput</p></td><td><p>Copies one or more local files to the remote computer </p></td></tr><tr><td><p>open</p></td><td><p>Connects to the specified FTP server </p></td></tr><tr><td><p>prompt</p></td><td><p>Toggles prompting (default = ON) </p></td></tr><tr><td><p>put</p></td><td><p>Copies a single local file to the remote computer </p></td></tr><tr><td><p>pwd</p></td><td><p>Displays the current directory on the remote computer (literally, "print working directory") </p></td></tr><tr><td><p>quit</p></td><td><p>Ends the FTP session with the remote computer and exits ftp (same as "bye") </p></td></tr><tr><td><p>quote</p></td><td><p>Sends arguments, verbatim, to the remote FTP server (same as "literal") </p></td></tr><tr><td><p>recv</p></td><td><p>Copies a remote file to the local computer </p></td></tr><tr><td><p>remotehelp</p></td><td><p>Displays help for remote commands </p></td></tr><tr><td><p>rename</p></td><td><p>Renames remote files </p></td></tr><tr><td><p>rmdir</p></td><td><p>Deletes a remote directory </p></td></tr><tr><td><p>send</p></td><td><p>Copies a local file to the remote computer (same as "put") </p></td></tr><tr><td><p>status</p></td><td><p>Displays the current status of FTP connections </p></td></tr><tr><td><p>trace</p></td><td><p>Toggles packet tracing (default = OFF) </p></td></tr><tr><td><p>type</p></td><td><p>Sets or displays the file transfer type (default = ASCII) </p></td></tr><tr><td><p>user</p></td><td><p>Specifes a user to the remote computer </p></td></tr><tr><td><p>verbose</p></td><td><p>Toggles verbose mode (default = ON) </p></td></tr></tbody></table></div></div>
<br /><hr />
<br /><b>FTP Reply Rode Values</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td><p>Code</p></td><td><p>Meaning</p></td><td><p>Description</p></td></tr><tr><td><p>1yz</p></td><td><p>Positive Preliminary reply.</p></td><td><p>An initial response indicating that the command has been accepted and processing of it is still in progress. The user should expect another reply before a new command may be sent.</p></td></tr><tr><td><p>2yz</p></td><td><p>Positive Completion reply.</p></td><td><p>The command has been successfully processed and completed.</p></td></tr><tr><td><p>3yz</p></td><td><p>Positive Intermediate reply.</p></td><td><p>The command was accepted, but processing of it has been delayed, pending receipt of additional information. This type of reply is used in the middle of command sequences. For example, it is used as part of the authentication sequence after receiving a USER command but before the matching PASS command is sent.</p></td></tr><tr><td><p>4yz</p></td><td><p>Transient Negative Completion reply.</p></td><td><p>The command was not accepted and no action was taken, but the error is temporary and the command may be tried again. This is used for errors that may be a result of temporary glitches or conditions that may change; for example, a file being ¡°busy¡± due to another resource accessing it at the time a request was made for it.</p></td></tr><tr><td><p>5yz</p></td><td><p>Permanent Negative Completion reply.</p></td><td><p>The command was not accepted and no action was taken. Trying the same command again is likely to result in another error. For example, a request for a file that is not found on the server would fall into this category, or sending an invalid command like ¡°BUGU¡±.</p></td></tr><tr><td><p>x0z</p></td><td><p>Syntax. </p></td><td><p>These replies refer to syntax errors, syntactically correct commands that don't fit any functional category, unimplemented or superfluous commands.</p></td></tr><tr><td><p>x1z</p></td><td><p>Information. </p></td><td><p>These are replies to requests for information, such as status or help.</p></td></tr><tr><td><p>x2z</p></td><td><p>Connections. </p></td><td><p>Replies referring to the control and data connections.</p></td></tr><tr><td><p>x3z</p></td><td><p>Authentication and accounting. </p></td><td><p>Replies for the login process and accounting procedures.</p></td></tr><tr><td><p>x4z</p></td><td><p>Unspecified</p></td><td><p> </p></td></tr><tr><td><p>x5z</p></td><td><p> File system. </p></td><td><p>These replies indicate the status of the Server file system vis-a-vis the requested transfer or other file system action.</p></td></tr></tbody></table></div></div>
<br /><hr />
<br /><b>FTP Reply Codes</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td><p>Command</p></td><td><p>Description</p></td></tr><tr><td><p>110</p></td><td><p>Restart marker reply.</p></td></tr><tr><td><p>120</p></td><td><p>Service ready in nnn minutes.</p></td></tr><tr><td><p>125</p></td><td><p>Data connection already open; transfer starting.</p></td></tr><tr><td><p>150</p></td><td><p>File status okay; about to open data connection. </p></td></tr><tr><td><p>200</p></td><td><p>Command okay.</p></td></tr><tr><td><p>202</p></td><td><p>Command not implemented, superfluous at this site.</p></td></tr><tr><td><p>211</p></td><td><p>System status, or system help reply.</p></td></tr><tr><td><p>212</p></td><td><p>Directory status.</p></td></tr><tr><td><p>213</p></td><td><p>File status.</p></td></tr><tr><td><p>214</p></td><td><p>Help message.</p></td></tr><tr><td><p>215</p></td><td><p>NAME system type. Where NAME is an official system name from the list in the Assigned Numbers document.</p></td></tr><tr><td><p>220</p></td><td><p>Service ready for new user.</p></td></tr><tr><td><p>221</p></td><td><p>Service closing control connection. Logged out if appropriate.</p></td></tr><tr><td><p>225</p></td><td><p>Data connection open; no transfer in progress.</p></td></tr><tr><td><p>226</p></td><td><p>Closing data connection.Requested file action successful (for example, file transfer or file abort).</p></td></tr><tr><td><p>227</p></td><td><p>Entering Passive Mode (h1,h2,h3,h4,p1,p2).</p></td></tr><tr><td><p>230</p></td><td><p>User logged in, proceed.</p></td></tr><tr><td><p>250</p></td><td><p>Requested file action okay, completed.</p></td></tr><tr><td><p>257</p></td><td><p>"PATHNAME" created. </p></td></tr><tr><td><p>331</p></td><td><p>User name okay, need password.</p></td></tr><tr><td><p>332</p></td><td><p>Need account for login.</p></td></tr><tr><td><p>350</p></td><td><p>Requested file action pending further information. </p></td></tr><tr><td><p>421</p></td><td><p>Service not available, closing control connection. This may be a reply to any command if the service knows itmust shut down.</p></td></tr><tr><td><p>425</p></td><td><p>Can't open data connection.</p></td></tr><tr><td><p>426</p></td><td><p>Connection closed; transfer aborted.</p></td></tr><tr><td><p>450</p></td><td><p>Requested file action not taken. File unavailable (e.g., file busy).</p></td></tr><tr><td><p>451</p></td><td><p>Requested action aborted: local error in processing.</p></td></tr><tr><td><p>452</p></td><td><p>Requested action not taken.Insufficient storage space in system. </p></td></tr><tr><td><p>500</p></td><td><p>Syntax error, command unrecognized. This may include errors such as command line too long.</p></td></tr><tr><td><p>501</p></td><td><p>Syntax error in parameters or arguments.</p></td></tr><tr><td><p>502</p></td><td><p>Command not implemented.</p></td></tr><tr><td><p>503</p></td><td><p>Bad sequence of commands.</p></td></tr><tr><td><p>504</p></td><td><p>Command not implemented for that parameter.</p></td></tr><tr><td><p>530</p></td><td><p>Not logged in.</p></td></tr><tr><td><p>532</p></td><td><p>Need account for storing files.</p></td></tr><tr><td><p>550</p></td><td><p>Requested action not taken.File unavailable (e.g., file not found, no access).</p></td></tr><tr><td><p>551</p></td><td><p>Requested action aborted: page type unknown.</p></td></tr><tr><td><p>552</p></td><td><p>Requested file action aborted. Exceeded storage allocation (for current directory or dataset). File name not allowed.</p></td></tr><tr><td><p>553</p></td><td><p>Requested action not taken. File name not allowed.</p></td></tr><tr><td><p>554</p></td><td><p>Requested action not taken: invalid REST parameter. </p></td></tr><tr><td><p>555</p></td><td><p>Requested action not taken: type or stru mismatch. </p></td></tr></tbody></table></div></div>
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: Regular FTP Session</b>

          %   ftp nordsieck.cs.colorado.edu  
          Connected to nordsieck.cs.colorado.edu.  
          220 nordsieck FTP server (Version 5.53 Tue Aug 25 10:46:12 MDT 1992) ready.  
          Name (nordsieck.cs.colorado.edu:yourlogin): yourlogin  
          331 Password required for yourlogin.  
          Password:  
          230 User yourlogin logged in.  
          ftp&gt; cd HPSC/exercises  
          250 CWD command successful.  
          ftp&gt; ls  
          200 PORT command successful.  
          550 No files found.  
          ftp&gt; put tmul.out  
          200 PORT command successful.  
          150 Opening ASCII mode data connection for tmul.out.  
          226 Transfer complete.  
          local: tmul.out remote: tmul.out  
          1882 bytes sent in 0.0095 seconds (1.9e+02 Kbytes/s)  
          ftp&gt; ls  
          200 PORT command successful.  
          150 Opening ASCII mode data connection for file list.  
          tmul.out  
          226 Transfer complete.  
          9 bytes received in 0.0021 seconds (4.3 Kbytes/s)  
          ftp&gt; mput *  
          mput Makefile? y  
          200 PORT command successful.  
          150 Opening ASCII mode data connection for Makefile.  
          226 Transfer complete.  
          local: Makefile remote: Makefile  
          1020 bytes sent in 0.0062 seconds (1.6e+02 Kbytes/s)  
          mput tmul.out? n  
          ftp&gt; quit  
          221 Goodbye.  
          %   ls  
             . . .
          Makefile    
          tmul.out    
             . . .

An FTP session to copy files from a remote machine back to nordsieck.cs.colorado.edu 
using one's own login and password.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Anonymous FTP Session</b>

          %   ftp cs.colorado.edu  
          Connected to cs.colorado.edu.  
          220 bruno FTP server (SunOS 4.1) ready.  
          Name (cs.colorado.edu:yourlogin): anonymous  
          331 Guest login ok, send ident as password.  
          Password:  
          230-This server is courtesy of Sun Microsystems, Inc.  
          230-  
          230-The data on this FTP server can be searched and accessed via WAIS, using  
          230-our Essence semantic indexing system.  Users can pick up a copy of the  
          230-WAIS ".src" file for accessing this service by anonymous FTP from  
          230-ftp.cs.colorado.edu, in pub/cs/distribs/essence/aftp-cs-colorado-edu.src  
          230-This file also describes where to get the prototype source code and a  
          230-paper about this system.  
          230-  
          230-  
          230 Guest login ok, access restrictions apply.  
          ftp&gt; cd /pub/HPSC  
          250 CWD command successful.  
          ftp&gt; ls  
          200 PORT command successful.  
          150 ASCII data connection for /bin/ls (128.138.242.10,3133) (0 bytes).  
          ElementsofAVS.ps.Z  
             . . .
          execsumm_tr.ps.Z  
          viShortRef.ps.Z  
          226 ASCII Transfer complete.  
          418 bytes received in 0.043 seconds (9.5 Kbytes/s)  
          ftp&gt; get README  
          200 PORT command successful.  
          150 ASCII data connection for README (128.138.242.10,3134) (2881 bytes).  
          226 ASCII Transfer complete.  
          local: README remote: README  
          2939 bytes received in 0.066 seconds (43 Kbytes/s)  
          ftp&gt; bye  
          221 Goodbye.  
          %   ls  
             . . .
          README    
             . . .

An FTP session to obtain the HPSC README file from the cs.colorado.edu anonymous ftp 
directory using a loginname of anonymous and a password of one's own electronic mail 
address.</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>FTP</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />Data<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />Control<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>E-mail</b><br />The transmission of messages over communications networks. Most mainframes, minicomputers, and computer networks have an e-mail system. Most e-mail systems include a rudimentary text editor for composing messages, but many allow you to edit your messages using any editor you want. Sent messages are stored in electronic mailboxes until the recipient fetches them. All online services and Internet Service Providers (ISPs) offer e-mail, and most also support gateways so that you can exchange mail with users of other systems. 
<br />
<br />Although different e-mail systems use different formats, there are some emerging standards that are making it possible for users on all systems to exchange messages. To date, though, the de facto addressing standard is the one used by the Internet system because almost all e-mail systems have an Internet gateway.<br /><br /><b>HTTP</b><br />HTTP(HyperText Transfer Protocol) defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands. For example, when you enter a URL in your browser, this actually sends an HTTP command to the Web server directing it to fetch and transmit the requested Web page. 
<br />
<br />The other main standard that controls how the World Wide Web works is HTML, which covers how Web pages are formatted and displayed. 
<br />
<br />HTTP is called a stateless protocol because each command is executed independently, without any knowledge of the commands that came before it. This is the main reason that it is difficult to implement Web sites that react intelligently to user input. This shortcoming of HTTP is being addressed in a number of new technologies, including ActiveX, Java, JavaScript and cookies. <br /><br /><b>Internet</b><br />A global network connecting millions of computers. More than 100 countries are linked into exchanges of data, news and opinions. 
<br />
<br />Unlike online services, which are centrally controlled, the Internet is decentralized by design. Each Internet computer, called a host, is independent. Its operators can choose which Internet services to use and which local services to make available to the global Internet community. Remarkably, this anarchy by design works exceedingly well. 
<br />
<br />There are a variety of ways to access the Internet. Most online services, such as America Online, offer access to some Internet services. It is also possible to gain access through a commercial Internet Service Provider (ISP).<br /><br /><b>Logon</b><br />To make a computer system or network recognize you so that you can begin a computer session. Most personal computers have no log-on procedure -- you just turn the machine on and begin working. For larger systems and networks, however, you usually need to enter a username and password before the computer system will allow you to execute programs. 
<br />
<br />Alternative spellings for log on are log in and login. <br /><br /><b>MS-DOS</b><br />MS-DOS (Microsoft disk operating system). Originally developed by Microsoft for IBM, MS-DOS was the standard operating system for IBM-compatible personal computers. 
<br />
<br />The initial versions of DOS were very simple and resembled another operating system called CP/M. Subsequent versions have became increasingly sophisticated as they incorporated features of minicomputer operating systems. However, DOS is still a 16-bit operating system and does not support multiple users or multitasking. 
<br />
<br />For some time, it has been widely acknowledged that DOS is insufficient for modern computer applications. Microsoft Windows helped alleviate some problems, but still, it sat on top of DOS and relied on DOS for many services. Even Windows 95 sat on top of DOS. Newer operating systems, such as Windows NT and OS/2 Warp, do not rely on DOS to the same extent, although they can execute DOS-based programs. It is expected that as these operating systems gain market share, DOS will eventually disappear. In the meantime, Caldera, Inc. markets a version of DOS called DR-OpenDOS that extends MS-DOS in significant ways.<br /><br /><b>SMTP</b><br />SMTP (Simple Mail Transfer Protocol) is a  protocol for sending e-mail messages between servers. Most e-mail systems that send mail over the Internet use SMTP to send messages from one server to another; the messages can then be retrieved with an e-mail client using either POP or IMAP. In addition, SMTP is generally used to send messages from a mail client to a mail server. This is why you need to specify both the POP or IMAP server and the SMTP server when you configure your e-mail application.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>TCP/IP</b><br />TCP/IP(transmission Control Protocol/Internet Protocol) is the suite of communications protocols used to connect hosts on the Internet. TCP/IP uses several protocols, the two main ones being TCP and IP. TCP/IP is built into the UNIX operating system and is used by the Internet, making it the de facto standard for transmitting data over networks. Even network operating systems that have their own protocols, such as Netware, also support TCP/IP.<br /><br /><b>User interface</b><br />User interface include the keyboard, mouse, menus of a computer system. The user interface allows the user to communicate with the operating system.  Also see GUI.<br /><br /><b>Web browser</b><br />Also named browser. <br /><br /><b>Web page</b><br />Web page is a document on the World Wide Web. Every Web page is identified by a unique URL (Uniform Resource Locator). <br /><br />			</div>
		  
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

