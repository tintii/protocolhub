---
id: protocol-imap3
slug: imap3
name: IMAP3
expandedName: Internet Message Access Protocol 3
origin: historical
provenance:
  source: protocols/protocol_IMAP3.htm
  sha256: 817127b5143c9cce56a6d6289e19b665e0c6aa23897b761bf4abd0a6925ddd4b
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Internet Message Access Protocol 3
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Internet Message Access Protocol 3
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: Application layer email protocol
  - label: Ports
    html: |-
      143 (TCP) IMAP2, IMAP4, IMAP 4rev1
      <br />220 (TCP) IMAP3
  - label: Related protocols
    html: 'SMTP,<br />POP,<br />POP3,<br />TCP,<br />MIME'
  - label: URI
    html: imap
  - label: Working groups
    html: |-
      Imap, Internet Message Access Protocol.
      <br />Imapext, Internet Message Access Protocol Extension.
originalUpdate: '2005-11-10 16:00:20'
rfcs:
  - 822
  - 1064
  - 1176
  - 1203
  - 1730
  - 1731
  - 1732
  - 1733
  - 2060
  - 2061
  - 2062
  - 2086
  - 2087
  - 2088
  - 2095
  - 2177
  - 2180
  - 2192
  - 2193
  - 2195
  - 2221
  - 2342
  - 2359
  - 2595
  - 2683
  - 2971
  - 3348
  - 3501
  - 3502
  - 3503
  - 3516
  - 3691
related:
  - protocol-smtp
  - protocol-pop
  - protocol-pop3
  - protocol-tcp
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

			The intent of the Interactive Mail Access Protocol, Version 3 (IMAP3) is to allow a (possibly unreliable) workstation or similar machine to access electronic mail from a reliable mailbox server in an efficient manner.
<br />
<br />Although different in many ways from POP2, IMAP3 may be thought of as a functional superset of POP2, and the POP2 <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>was used as a model for IMAP3. Like POP2, IMAP3 specifies a means of accessing stored mail and not of posting mail; this function is handled by a mail transfer protocol such as SMTP. A comparison with the DMSP protocol of PCMAIL can be found at the end of "System Model and Philosophy" section.
<br />
<br />This protocol assumes a reliable data stream such as provided by TCP or any similar protocol. When TCP is used, the IMAP server listens on port 220. When CHAOS is used the IMAP server listens for the logical contact name "IMAP3".
<br />
<br />Communication in IMAP is defined to be using the ASCII character interpretation of data. Communication using other conventions may be possible by the selection of features on some servers.
<br /><hr />
<br />The IMAP3 protocol consists of a sequence of client commands and server responses to those commands, with extra information from the server data being sent asynchronously to and independent to the responses to client commands. Unlike most Internet protocols, commands and responses are tagged. That is, a command begins with a unique identifier (typically a short alphanumeric sequence such as a Lisp "gensym" function would generate e.g., A0001, A0002, etc.), called a tag. The response to this command is given the same tag from the server.
<br />
<br />SOLICITED is the data sent by the server as the result of a client request. UNSOLICITED is the data sent by the server not as the result of a client request. The server may send unsolicited data at any time that would not fragment another piece of data on the same stream rendering it unintelligible. The server is contractually required, however, to return all data that is solicited by the client before the return of the completion signal for that command, i.e., all solicited data must be returned within the temporal extent of the request/completion acknowledgement wrapper. This does not, however, preclude the simultaneous processing of multiple requests by the client, it simply requires that the client be confident that it has all the requested data when a request finishes. This allows the implementation of both synchronous and asynchronous clients.
<br />
<br />Solicited data is identified by the tag of the initial request by the client. Unsolicited data is identified by the special reserved tag of "*". There is another special reserved tag, "+", discussed below.
<br />
<br />Note: the tagging of SOLICITED data is only permitted for a selected server version other than 2.0.
<br />
<br />No assumptions concerning serial or monolithic processing by the server can be made by a correct client. The server is at liberty to process multiple requests by the same client in any order. This allows servers to process costly searches over mailboxes on slow backing storage media in the background, while still preserving interactive performance. Clients can, however, assume the serialization of the request/data/completion behavior mentioned above.
<br />
<br /><b>Operation principle</b>
<br />When a connection is opened the server sends an unsolicited OK response as a greeting message and then waits for commands. When commands are received the server acts on them and responds with responses, often interspersed with data.
<br />
<br />The client opens a connection, waits for the greeting, then sends a LOGIN command with user name and password arguments to establish authorization. Following an OK response from the server, the client then sends a SELECT command to access the desired mailbox. The user's default mailbox has a special reserved name of "INBOX" which is independent of the operating system that the server is implemented on. The server will generally send a list of valid flags, number of messages, and number of messages arrived since last access for this mailbox as solicited data, followed by an OK response. The client may terminate access to this mailbox and access a different one with another SELECT command.
<br />
<br />Because the SELECT command affects the state of the server in a fundamental way, the server is required to process all outstanding commands for any given mailbox before sending the OK tag for the SELECT command. Thus, the client will always know that all responses before an OK SELECT response will refer to the old mailbox and all responses following it will apply to the new mailbox.
<br />
<br />Because, in the real world, local needs or experimental work will dictate that servers will support both supersets of the defined behavior and incompatible changes, servers will support a SELECT.VERSION command and a SELECT.FEATURES command, the purpose of which is to allow clients to select the overall behavior and specific features that they want from a server. The default behavior of any server is to process commands and to have interaction syntax the same as is specified by IMAP2. A server may not behave in any other manner unless the SELECT.VERSION or SELECT.FEATURES commands are used to select different behavior.
<br />
<br />Over time, when groups of generally useful changes to the current, default behavior of the server are found, these will be collected together and incorporated in such a way that all of the features can be selected simply by selecting a particular major version number of the protocol. It should be noted that the version numbers (both major and minor) selected by the SELECT.VERSION command denote versions of the IMAP protocol, not versions of the server per se. Thus, although in general changes to the protocol specification will be made in such a way that they are upwards compatible, this cannot be guaranteed. No client should rely on tests of the form "if major_version &gt; 2 then..." being valid for all protocol versions, since incompatible changes might be made in the future.
<br />
<br />The client reads mailbox information by means of FETCH commands. The actual data is transmitted via the solicited data mechanism (that is, FETCH should be viewed as poking the server to include the desired data along with any other data it wishes to transmit to the client).
<br />
<br />There are three major categories of data which may be fetched.
<br /><ul><li>The first category is that data which is associated with a message as an entity in the mailbox. There are presently three such items of data: All of the first category data can be fetched by using the macro-fetch word "FAST"; that is, "FAST" expands to "(FLAGS INTERNALDATE <a href="https://www.rfc-editor.org/rfc/rfc822.html">RFC 822</a>.SIZE)".
<br /><ul><li><b>internal date</b>
<br />The internal date is the date and time that the message was placed in the mailbox.<br /><br /></li>

<li><b><a href="https://www.rfc-editor.org/rfc/rfc822.html">RFC 822</a> size</b>
<br />The <a href="https://www.rfc-editor.org/rfc/rfc822.html">RFC 822</a> size is subject to deletion in the future; it is the size in bytes of the message, expressed as an <a href="https://www.rfc-editor.org/rfc/rfc822.html">RFC 822</a> text string. Current clients only use it as part of a status display line.<br /><br /></li>

<li><b>Flags</b>
<br />The flags are a list of status flags associated with the message.</li></ul> 
<br />
<br /></li><li>The second category is that data which describes the composition and delivery information of a message; that is, information such as the message sender, recipient lists, message-ID, subject, etc. This is the information which is stored in the message header in <a href="https://www.rfc-editor.org/rfc/rfc822.html">RFC 822</a> format message and is traditionally called the "envelope". IMAP3 defines a structured and unambiguous representation for the envelope which is particularly nice for Lisp-based parsers.<br /><br /></li> 

<li>The third category is that data which is intended for direct human viewing. The present <a href="https://www.rfc-editor.org/rfc/rfc822.html">RFC 822</a> based IMAP3 defines three such items: <a href="https://www.rfc-editor.org/rfc/rfc822.html">RFC 822</a>.HEADER, <a href="https://www.rfc-editor.org/rfc/rfc822.html">RFC 822</a>.TEXT, and <a href="https://www.rfc-editor.org/rfc/rfc822.html">RFC 822</a> (the latter being the two former appended together in a single text string). Fetching "<a href="https://www.rfc-editor.org/rfc/rfc822.html">RFC 822</a>" is equivalent to typing the <a href="https://www.rfc-editor.org/rfc/rfc822.html">RFC 822</a> representation of the message as stored on the mailbox without any filtering or processing.</li></ul>
<br />
<br />Typically, a client will "FETCH ALL" for some or all of the messages in the mailbox for use as a presentation menu, and when the user wishes to read a particular message will "FETCH <a href="https://www.rfc-editor.org/rfc/rfc822.html">RFC 822</a>.TEXT" to get the message body. A more primitive client could, of course, simply "FETCH <a href="https://www.rfc-editor.org/rfc/rfc822.html">RFC 822</a>" a la POP2-type functionality.
<br />
<br />The client can alter certain data by means of a STORE command. As an example, a message is deleted from a mailbox by a STORE command which includes the DELETED flag as one of the flags being set.
<br />
<br />Other client operations include copying a message to another mailbox (COPY command), permanently removing deleted messages (EXPUNGE command), checking for new messages (CHECK command), and searching for messages which match certain criteria (SEARCH command).
<br />
<br />The client terminates the session with the LOGOUT command. The server returns a "BYE" followed by an "OK".
<br /><hr />
<br /><b>Commands and Responses</b>
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>Commands</td><td>Description</td></tr><tr><td>tag NOOP</td><td>Returns an OK to the client.</td></tr><tr><td>tag LOGIN user password</td><td>Identifies the user to the server and carries the password authenticating this user.</td></tr><tr><td>tag LOGOUT</td><td>Indicates the client is done with the session.</td></tr><tr><td>tag SELECT mailbox</td><td>Selects a particular mailbox.</td></tr><tr><td>tag CHECK</td><td>Forces a check for new messages and a rescan of the mailbox for internal change for those implementations which allow multiple simultaneous read/write access to the same mailbox</td></tr><tr><td>tag EXPUNGE</td><td>Removes permanently all messages with the DELETED flag set in its flags from the mailbox.</td></tr><tr><td>tag COPY sequence mailbox</td><td>Copies the specified message(s) to the specified destination mailbox.</td></tr><tr><td>tag FETCH sequence data</td><td>Retrieves data associated with a message in the mailbox.</td></tr><tr><td>tag STORE sequence data value</td><td>Alters the values associated with particular keys for a message in the mailbox.</td></tr><tr><td>tag SEARCH criteria</td><td>Searches the mailbox for messages which match the given set of criteria.</td></tr><tr><td>tag BBOARD bboard</td><td>The BBOARD command is equivalent to SELECT, except that its argument is a bulletin board (BBoard) name.</td></tr><tr><td>tag FIND (BBOARDS / MAILBOXES) pattern</td><td>Accepts as arguments the keywords BBOARDS or MAILBOXES and a pattern which specifies some set of BBoard/mailbox names which are usable by the BBOARD/SELECT command.</td></tr><tr><td>tag READONLY</td><td>Indicates that the client wishes to make the mailbox read-only.</td></tr><tr><td>tag READWRITE</td><td>Indicates that the client wishes to make the mailbox read-write.</td></tr><tr><td>tag SELECT.VERSION (major_version minor_version)</td><td>Indicates that the client wishes to select certain behavior on the part of the server.</td></tr><tr><td>tag SELECT.FEATURES features</td><td>Indicates that the client wishes to select certain specific features on the part of the server.</td></tr><tr><td>tag SUPPORTED.VERSIONS</td><td>Solicits from the server a SUPPORTED.VERSIONS message, which encapsulates information about which versions and features the server supports.</td></tr><tr><td>tag FLAGS</td><td>Solicits a FLAGS response from the server.</td></tr><tr><td>tag SET.FLAGS</td><td>Defines the user specifiable flags for this mailbox.</td></tr><tr><td colspan="2">Responses (can be either solicited or unsolicited)</td></tr><tr><td>*/tag FLAGS flag_list</td><td>The list of flags which are applicable for this mailbox.</td></tr><tr><td>*/tag SEARCH (numbers) (criteria)</td><td>The number(s) refer to those messages which match the search criteria.</td></tr><tr><td>*/tag EXISTS</td><td>The number of messages exists in the mailbox.</td></tr><tr><td>*/tag RECENT</td><td>The number of messages have arrived since the last time this mailbox was selected with the SELECT command or equivalent.</td></tr><tr><td>*/tag EXPUNGE</td><td>The message number has been permanently removed from the mailbox.</td></tr><tr><td>*/tag STORE data</td><td>Functionally equivalent to FETCH, only it is sent by the server when the state of a mailbox changes.</td></tr><tr><td>*/tag FETCH data</td><td>The principle means by which data about a message is sent to the client.</td></tr><tr><td>*/tag BBOARD bboard_name</td><td>A name that can be supplied to the BBOARD command so as to select the appropriate bboard.</td></tr><tr><td>*/tag MAILBOX non_inbox_mailbox_name</td><td>A name that can be supplied to the SELECT command so as to select the appropriate mailbox.</td></tr><tr><td>*/tag SUPPORTED.VERSIONS version_data</td><td>A response to the SUPPORTED.VERSIONS or, in its unsolicited form, to indicate the dynamic addition or removal of support for features or protocol versions.</td></tr><tr><td>*/tag READONLY</td><td>Indicates that the mailbox is read-only.</td></tr><tr><td>*/tag READWRITE</td><td>Indicates that the mailbox is read-write.</td></tr><tr><td>*/tag OK text</td><td>Identifies successful completion of the command with the indicated tag in solicited form or the server is alive in unsolicited form.</td></tr><tr><td>*/tag NO text</td><td>Identifies successful completion of the command with the indicated tag in solicited form or some operational error at the server which cannot be traced to any protocol command in unsolicited form.</td></tr><tr><td>*/tag BAD text</td><td>Indicates faulty protocol received from the client and indicates a bug in solicited form or some protocol error at the server which cannot be traced to any protocol command in unsolicited form.</td></tr><tr><td>*/tag BYE text</td><td>Indicates that the server is about to close the connection.</td></tr><tr><td colspan="2">Responses (can only be solicited)</td></tr><tr><td>tag COPY message_number</td><td> </td></tr><tr><td colspan="2">Responses (can only be unsolicited)</td></tr><tr><td>+ text</td><td>Indicates that the server is ready to accept the text of a literal from the client.</td></tr></tbody></table></div></div>
<br /><hr />
<br /><b>IMAP3 Features</b>
<br /><ul><li><b>Required Features</b>
<br /><ul><li><b>AUTO.SET.SEEN</b>
<br />This feature is provided for the use of clients that are unable to pipeline their commands effectively and communicate over high latency connections.<br /><br /></li> 

<li><b>TAGGED.SOLICITED</b>
<br />This feature is provided so as to smooth the transition from IMAP2 to IMAP3.</li></ul>
<br />
<br /></li><li><b>Recommended Features</b>
<br /><ul><li><b>EIGHT.BIT.TRANSPARENT</b>
<br />This feature is provided for the purpose of supporting national character sets within messages, encoded languages such as Japanese Kanji characters and also of binary data, such as programs, graphics and sound.<br /><br /></li>

<li><b>NEW.MAIL.NOTIFY</b>
<br />This feature is provided to allow clients to switch off any periodic polling strategy that they may use to look for new mail.<br /><br /></li> 

<li><b>SEND</b>
<br />The SEND command instructs the server to send a message, rather than requiring the client to use its own, local message sending capability.<br /><br /></li>

<li><b>ADD.MESSAGE</b>
<br />This feature is provided so that clients can easily add mail to specific mailboxes.<br /><br /></li>

<li><b>RENUMBER</b>
<br />The RENUMBER command will reorder the assignment of message numbers to the messages in the mailbox.<br /><br /></li>

<li><b>ENCODING</b>
<br />This feature is supplied so as to allow support for emergent multi-part and multi-media mail standards.<br /><br /></li>

<li><b>INDEXABLE.FIELDS</b>
<br />This feature is provided so as to allow resource-limited clients to read very large messages and also to allow clients to improve interactive response for the reading of large  messages by fetching the first "screen full" of data to display immediately and fetching the rest of the message in the background.<br /><br /></li>

<li><b>SET.EOL</b>
<br />This feature is provided because frequently clients and servers might have end-of-line conventions other than the CRLF.</li></ul></li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>IMAP3 session</b>

The following is a transcript of an actual IMAP3 session. Server output is identified 
by "S:" and client output by "U:". In cases where lines were too long to fit within 
the boundaries of this document, the line was continued on the next line preceded 
by a tab.

          S:     * OK SUMEX-AIM.Stanford.EDU Interactive Mail Access Protocol
                  III Service 6.1(349) at Mon, 14 May 90 14:58:30 PDT
          U:     a001 SUPPORTED.VERSIONS
          S:     * SUPPORTED.VERSIONS ((2 0 ) (3 0 EIGHT.BIT.TRANSPARENT
                     AUTO.SET.SEEN TAGGED.SOLICITED))

          S:     A001 Supported Versions returned.
          U:     a002 SELECT.VERSION (3 0)
          S:     a002 OK Version 3.0 Selected.
          U:     a003 SELECT.FEATURES TAGGED.SOLICITED
          S:     a003 OK Features selected.
          U:     a004 login crispin secret
          S:     a004 OK User CRISPIN logged in at Thu, 9 Jun 90 14:58:42 PDT,
                  job 76
          U:     a005 select inbox
          S:     a005 FLAGS (Bugs SF Party Skating Meeting Flames Request AI
                  Question Note XXXX YYYY Answered Flagged Deleted
                  Seen)
          S:     a005 16 EXISTS
          S:     a005 0 RECENT
          S:     a006 OK Select complete
          U:     a006 fetch 16 all
          S:     a006 16 Fetch (Flags (Seen) InternalDate " 9-Jun-88 12:55:
              RFC822.Size 637 Envelope ("Sat, 4 Jun 88 13:27:11 PDT"
              "INFO-MAC Mail Message" (("Larry Fagan" NIL "FAGAN"
              "SUMEX-AIM.Stanford.EDU" NIL)) (("Larry Fagan" NIL "FAGAN"
              "SUMEX-AIM.Stanford.EDU" NIL)) (("Larry Fagan" NIL "FAGAN"
              "SUMEX-AIM.Stanford.EDU" NIL)) ((NIL NIL "rindflEISCH"
              "SUMEX-AIM.Stanford.EDU" NIL)) NIL NIL NIL
              "&lt;12403828905.13.FAGAN@SUMEX-AIM.Stanford.EDU&gt;"))
          S:  a006 OK Fetch completed
          U:  a007 fetch 16 rfc822
          S:  a007 16 Fetch (RFC822 {637}
          S:  Mail-From: RINDFLEISCH created at  9-Jun-88 12:55:43
          S:  Mail-From: FAGAN created at  4-Jun-88 13:27:12
          S:  Date: Sat, 4 Jun 88 13:27:11 PDT
          S:  From: Larry Fagan  
          S:  To: rindflEISCH@SUMEX-AIM.Stanford.EDU
          S:  Subject: INFO-MAC Mail Message
          S:  Message-ID: &lt;12403828905.13.FAGAN@SUMEX-AIM.Stanford.EDU&gt;
          S:  ReSent-Date: Thu, 9 Jun 88 12:55:43 PDT
          S:  ReSent-From: TC Rindfleisch 
          S:  ReSent-To: Yeager@SUMEX-AIM.Stanford.EDU,
                  Crispin@SUMEX-AIM.Stanford.EDU
          S:  ReSent-Message-ID:
          &lt;12405133897.80.RINDFLEISCH@SUMEX-AIM.Stanford.EDU&gt;
          S:
          S:  The file is usenetv4-55.arc  ...
          S:  Larry
          S:  -------
          S:  )
          S:  a007 OK Fetch completed
          U:  a008 logout
          S:  a008 BYE UNIX IMAP III server terminating connection

          S:  a008 OK SUMEX-AIM.Stanford.EDU Interim Mail Access Protocol
                  Service logout</pre>
<br />	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>IMAP3</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Access</b><br />(v.) 
<br />*To use. For example, programs can access memory , which means they read data from or write data to main memory. A user can access files, directories, computers, or peripheral devices. 
<br />*More specifically, access often means to read data from or write data to a mass storage device. The time it takes to locate a single byte of information on a mass-storage device is called the access time. 
<br />*To visit a Web site. 
<br />
<br />(n.)
<br /> *The act of reading data from or writing data to a storage device. 
<br />*A privilege to use computer information in some manner. For example, a user might be granted read access to a file, meaning that the user can read the file but cannot modify or delete it. Most operating systems have several different types of access privileges that can be granted or denied to specific users or groups of users. 
<br />*When capitalized as Access, short for Microsoft Access.<br /><br /><b>Authorization</b><br />The process of identifying an individual, usually based on a username and password. In security systems, authentication is distinct from authorization , which is the process of giving individuals access to system objects based on their identity. Authentication merely ensures that the individual is who he or she claims to be, but says nothing about the access rights of the individual.<br /><br /><b>Client</b><br />Clinet is a program which requests services of another program. It is a client part of a client-server architecture. Typically, a client is an application that runs on a personal computer or workstation and relies on a server to perform some operations. For example, an e-mail client is an application that enables you to send and receive e-mail.<br /><br /><b>Command</b><br />Command is an instruction to a computer or device to perform a specific task. Commands come in different forms. They can be: special words (keywords) that a program understands, function keys 
<br />choices in a menu and buttons or other graphical objects on your screen 
<br />
<br />Every program that interacts with people responds to a specific set of commands. The set of commands and the syntax for entering them is called the user interface and varies from one program to another.<br /><br /><b>Data</b><br />* Distinct pieces of information, usually formatted in a special way. All software is divided into two general categories: data and programs. Programs are collections of instructions for manipulating data. Data can exist in a variety of forms -- as numbers or text on pieces of paper, as bits and bytes stored in electronic memory, or as facts stored in a person's mind. Strictly speaking, data is the plural of datum, a single piece of information. In practice, however, people use data as both the singular and plural form of the word. 
<br />
<br />* The term data is often used to distinguish binary machine-readable information from textual human-readable information. For example, some applications make a distinction between data files (files that contain binary data) and text files (files that contain ASCII data). 
<br />
<br />* In database management systems, data files are the files that store the database information, whereas other files, such as index files and data dictionaries, store administrative information, known as metadata.<br /><br /><b>IMAP</b><br />IMAP 9Internet Message Access Protocol) is a protocol for retrieving e-mail messages. The latest version, IMAP4, is similar to POP3 but supports some additional features. For example, with IMAP4, you can search through your e-mail messages for keywords while the messages are still on mail server. You can then choose which messages to download to your machine.<br /><br /><b>Internet</b><br />A global network connecting millions of computers. More than 100 countries are linked into exchanges of data, news and opinions. 
<br />
<br />Unlike online services, which are centrally controlled, the Internet is decentralized by design. Each Internet computer, called a host, is independent. Its operators can choose which Internet services to use and which local services to make available to the global Internet community. Remarkably, this anarchy by design works exceedingly well. 
<br />
<br />There are a variety of ways to access the Internet. Most online services, such as America Online, offer access to some Internet services. It is also possible to gain access through a commercial Internet Service Provider (ISP).<br /><br /><b>Login</b><br />Alternative spellings for login are log in and log on.<br /><br /><b>Mailbox</b><br />Mailbox is an area in memory or on a storage device where e-mail is placed. In e-mail systems, each user has a private mailbox. When the user receives e-mail, the mail system automatically puts it in the mailbox. 
<br />
<br />The mail system allows you to scan mail that is in your mailbox, copy it to a file, delete it, print it, or forward it to another user. If you want to save mail, it is a good idea to copy it to a file, because files tend to be more stable than mailboxes.<br /><br /><b>OS</b><br />The most important program that runs on a computer. Every general-purpose computer must have an operating system to run other programs. Operating systems perform basic tasks, such as recognizing input from the keyboard, sending output to the display screen, keeping track of files and directories on the disk, and controlling peripheral devices such as disk drives and printers.<br /><br /><b>POP</b><br />POP (Post Office Protocol) is a protocol used to retrieve e-mail from a mail server. Most e-mail applications (sometimes called an e-mail client) use the POP protocol, although some can use the newer IMAP (Internet Message Access Protocol). There are two versions of POP. The first, called POP2, became a standard in the mid-80's and requires SMTP to send messages. The newer version, POP3, can be used with or without SMTP.<br /><br /><b>Password</b><br />A secret series of characters that enables a user to access a file, computer, or program. On multi-user systems, each user must enter his or her password before the computer will respond to commands. The password helps ensure that unauthorized users do not access the computer. In addition, data files and programs may require a password.<br /><br /><b>RFC</b><br /><a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>(Requests for Comments) document series is a set of technical and organizational notes about the Internet (originally the ARPANET), beginning in 1969(when the Internet was the ARPANET). An Internet Document can be submitted to the IETF by anyone, but the IETF decides if the document becomes an RFC. Eventually, if it gains enough interest, it may evolve into an Internet standard. 
<br />
<br />Each <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>is designated by an <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>number. Once published, an <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>never changes. Modifications to an original <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>are assigned a new <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>number.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>TCP</b><br />TCP (Transmission Control Protocol) is one of the main protocols in TCP/IP networks. TCP is one of the main protocols in TCP/IP networks. Whereas the IP protocol deals only with packets, TCP enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and also guarantees that packets will be delivered in the same order in which they were sent.<br /><br /><b>Tag</b><br />(n) A command inserted in a document that specifies how the document, or a portion of the document, should be formatted. Tags are used by all format specifications that store documents as text files. This includes SGML and HTML. 
<br />
<br />(v) To mark a section of a document with a formatting command.<br /><br /><b>Workstation</b><br />*A type of computer used for engineering applications (CAD/CAM), desktop publishing, software development, and other types of applications that require a moderate amount of computing power and relatively high quality graphics capabilities.
<br />
<br />* In networking, workstation refers to any computer connected to a local-area network. It could be a workstation or a personal computer.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links</b>
                <a href="https://www.iana.org/assignments/imap4-capabilities">IMAP4 capabilities</a><hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1176.html">RFC 1176</a>] INTERACTIVE MAIL ACCESS PROTOCOL - VERSION 2.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1064.html">RFC 1064</a>.
[<a href="https://www.rfc-editor.org/rfc/rfc1203.html">RFC 1203</a>] INTERACTIVE MAIL ACCESS PROTOCOL - VERSION 3.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1064.html">RFC 1064</a>.
[<a href="https://www.rfc-editor.org/rfc/rfc1731.html">RFC 1731</a>] IMAP4 Authentication Mechanisms.
[<a href="https://www.rfc-editor.org/rfc/rfc1732.html">RFC 1732</a>] IMAP4 COMPATIBILITY WITH IMAP2 AND IMAP2BIS.
[<a href="https://www.rfc-editor.org/rfc/rfc1733.html">RFC 1733</a>] DISTRIBUTED ELECTRONIC MAIL MODELS IN IMAP4.
[<a href="https://www.rfc-editor.org/rfc/rfc2061.html">RFC 2061</a>] IMAP4 COMPATIBILITY WITH IMAP2BIS.
[<a href="https://www.rfc-editor.org/rfc/rfc2062.html">RFC 2062</a>] Internet Message Access Protocol - Obsolete Syntax.
[<a href="https://www.rfc-editor.org/rfc/rfc2086.html">RFC 2086</a>] IMAP4 ACL extension.
[<a href="https://www.rfc-editor.org/rfc/rfc2087.html">RFC 2087</a>] IMAP4 QUOTA extension.
[<a href="https://www.rfc-editor.org/rfc/rfc2088.html">RFC 2088</a>] IMAP4 non-synchronizing literals.
[<a href="https://www.rfc-editor.org/rfc/rfc2177.html">RFC 2177</a>] IMAP4 IDLE command.
                Defines the IMAP IDLE capability. 
[<a href="https://www.rfc-editor.org/rfc/rfc2180.html">RFC 2180</a>] IMAP4 Multi-Accessed Mailbox Practice.
[<a href="https://www.rfc-editor.org/rfc/rfc2192.html">RFC 2192</a>] IMAP URL Scheme.
                Defines URI scheme imap. 
[<a href="https://www.rfc-editor.org/rfc/rfc2193.html">RFC 2193</a>] IMAP4 Mailbox Referrals.
[<a href="https://www.rfc-editor.org/rfc/rfc2195.html">RFC 2195</a>] IMAP/POP AUTHorize Extension for Simple Challenge/Response.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2095.html">RFC 2095</a>.
[<a href="https://www.rfc-editor.org/rfc/rfc2221.html">RFC 2221</a>] IMAP4 Login Referrals.
[<a href="https://www.rfc-editor.org/rfc/rfc2342.html">RFC 2342</a>] IMAP4 Namespace.
[<a href="https://www.rfc-editor.org/rfc/rfc2359.html">RFC 2359</a>] IMAP4 UIDPLUS extension.
[<a href="https://www.rfc-editor.org/rfc/rfc2595.html">RFC 2595</a>] Using TLS with IMAP, POP3 and ACAP.
[<a href="https://www.rfc-editor.org/rfc/rfc2683.html">RFC 2683</a>] IMAP4 Implementation Recommendations.
[<a href="https://www.rfc-editor.org/rfc/rfc2971.html">RFC 2971</a>] IMAP4 ID extension.
[<a href="https://www.rfc-editor.org/rfc/rfc3348.html">RFC 3348</a>] The Internet Message Action Protocol (IMAP4) Child Mailbox Extension.
[<a href="https://www.rfc-editor.org/rfc/rfc3501.html">RFC 3501</a>] INTERNET MESSAGE ACCESS PROTOCOL - VERSION 4rev1.
                Defines IMAP4rev1. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2060.html">RFC 2060</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3502.html">RFC 3502</a>] Internet Message Access Protocol (IMAP) - MULTIAPPEND Extension.
                Defines the IMAP MULTIAPPEND capability. 
[<a href="https://www.rfc-editor.org/rfc/rfc3503.html">RFC 3503</a>] Message Disposition Notification (MDN) profile for Internet Message Access Protocol (IMAP).
[<a href="https://www.rfc-editor.org/rfc/rfc3516.html">RFC 3516</a>] IMAP4 Binary Content Extension.
[<a href="https://www.rfc-editor.org/rfc/rfc3691.html">RFC 3691</a>] Internet Message Access Protocol (IMAP) UNSELECT command.
                Defines the IMAP UNSELECT capability and UNSELECT command. 
                <hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc1064.html">RFC 1064</a>] INTERACTIVE MAIL ACCESS PROTOCOL - VERSION 2.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1176.html">RFC 1176</a>, <a href="https://www.rfc-editor.org/rfc/rfc1203.html">RFC 1203</a>. 
                Defines IMAP2. 
[<a href="https://www.rfc-editor.org/rfc/rfc1730.html">RFC 1730</a>] INTERNET MESSAGE ACCESS PROTOCOL - VERSION 4.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2060.html">RFC 2060</a>, <a href="https://www.rfc-editor.org/rfc/rfc2061.html">RFC 2061</a>. 
                Defines IMAP4. 
[<a href="https://www.rfc-editor.org/rfc/rfc2060.html">RFC 2060</a>] INTERNET MESSAGE ACCESS PROTOCOL - VERSION 4rev1.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3501.html">RFC 3501</a>. 
                Defines IMAP4rev1. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1730.html">RFC 1730</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2095.html">RFC 2095</a>] IMAP/POP AUTHorize Extension for Simple Challenge/Response.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2195.html">RFC 2195</a>.
                		  </div>
		  
</section>

