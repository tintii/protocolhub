---
id: protocol-pop
slug: pop
name: POP
expandedName: Post Office Protocol
origin: historical
provenance:
  source: protocols/protocol_POP.htm
  sha256: 4798476e73e1ed9fad490c5f5d6d1b99ae758f1f9216b47590fa0aa1e790c636
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Post Office Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Post Office Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: Application layer email access protocol
  - label: Ports
    html: |-
      109 (TCP), version 2
      <br />110 (TCP), version 3
  - label: URI
    html: pop
originalUpdate: '2005-11-17 16:44:30'
rfcs:
  - 918
  - 937
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

			The Post Office Protocol (POP) is a mechanism for reading mail on and optionally fetching mail from a remote server. It comes in two versions, POP 2 and POP 3. POP 2 is an extinct protocol. 
<br />
<br />The intent of the Post Office Protocol Version 2 (POP2) is to allow a user's workstation to access mail from a mailbox server. It is expected that mail will be posted from the workstation to the mailbox server via the Simple Mail Transfer Protocol (SMTP).
<br />
<br />This protocol assumes a reliable data stream such as provided by TCP or any similar protocol. When TCP is used, the POP2 server listens on port 109
<br />
<br />There are two versions of POP. The first, called POP2, became a standard in the mid-80's and requires SMTP to send messages. The newer version, POP3, can be used with or without SMTP.
<br /><hr />
<br />The POP2 protocol is a sequence of commands and replies. The design draws from many previous protocols of the ARPA-Internet community.
<br /><ul><li>The server must be listening for a connection. When a connection is opened the server sends a greeting message and waits for commands. When commands are received the server acts on them and responds with replies.<br /><br /></li>

<li>The client opens a connection, waits for the greeting, then sends the HELO command with the user name and password arguments to establish authorization to access mailboxes. The server returns the number of messages in the default mailbox.<br /><br /></li>

<li>The client may read the default mailbox associated with the user name or may select another mailbox by using the FOLD command. The server returns the number of messages in the mailbox selected.<br /><br /></li>

<li>The client begins a message reading transaction with a read command. The read command may optionally indicate which message number to read, the default is the current message (incremented when a message is read and set to one when a new folder is selected). The server returns the number of characters in the message.<br /><br /></li>

<li>The client asks for the content of the message to be sent with the RETR command. The server sends the message data.<br /><br /></li>

<li>When all the data has been received the client sends an acknowledgment command. This is one of ACKS, ACKD, and NACK.<br /></li>
<li><ul><li>ACKS means "I've received the message successfully and please keep it in the mailbox".<br /><br /></li>

<li>ACKD means "I've received the message successfully and please delete it from the mailbox".<br /><br /></li>

<li>NACK means "I did not receive the message and please keep it in the mailbox".</li></ul></li></ul>
<br />
<br />In the case of ACKS or ACKD the server increments the current message indicator. In the case of NACK the current message indicator stays the same. In all cases the server returns the number of characters in the (now) current message. The client terminates the session with the QUIT command. The server returns an ok.
<br />
<br /><b>The Normal Scenario</b>
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">           Client                    Server
           ------                    ------
                                Wait for Connection
      Open Connection  --&gt;
                           &lt;--  + POP2 Server Ready
                                Wait for Command
      HELO Fred Secret --&gt;
                           &lt;--  #13 messages for you
                                Wait for Command
      READ 13          --&gt;   
                           &lt;--  =537 characters in that message
                                Wait for Command
      RETR             --&gt;   
                           &lt;--  (send the message data)
                                Wait for Command
      ACKS             --&gt;   
                           &lt;--  =0 no more messages
                                Wait for Command
      QUIT             --&gt;
                           &lt;--  + OK
      Close connection --&gt; &lt;--  Close connection
                                Wait for Connection (go back to start)</pre>
<br /><hr />
<br /><b>Commands and Replies</b>
<br /><ul><li><b>Commands</b><br /><br /></li>

<li><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>Commands</td><td>Description</td></tr><tr><td>HELO user password</td><td>The Hello command identifies the user to the server and carries the password authenticating this user. This information is used by the server to control access to the mailboxes.</td></tr><tr><td>FOLD mailbox</td><td>The Folder command selects another mailbox or mail folder. The server must check that the user is permitted read access to this mailbox.</td></tr><tr><td>READ [n]</td><td>The Read command begins a message reading transaction.</td></tr><tr><td>RETR</td><td>The Retrieve command confirms that the client is ready to receive the mail data. It must be followed by an acknowledgment command.</td></tr><tr><td>ACKS</td><td>The Acknowledge and Save command confirms that the client has received and accepted the message. The ACKS command ends the message reading transaction. The message is kept in the mailbox.</td></tr><tr><td>ACKD</td><td>The Acknowledge and Delete command confirms that the client has received and accepted the message. The ACKD command ends the message reading transaction.</td></tr><tr><td>NACK</td><td>The Negative Acknowledge command reports that the client did not receive the message. The NACK command ends the message reading transaction.</td></tr><tr><td>QUIT</td><td>The Quit command indicates the client is done with the session. The server sends an OK response and then closes the connection.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Replies</b><br /><br /></li>

<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>Replies</td><td>Description</td></tr><tr><td>Greeting </td><td>The greeting is sent by the server as soon as the connection is established. The greeting is a plus sign, followed by the protocol name ("POP2"), followed by the server host name, optionally followed by text, and ending with a CRLF.</td></tr><tr><td>+</td><td>The success or plus sign response indicates successful completion of the operation specified in the command. The success response is a plus sign, optionally followed by text, and ending with a CRLF. </td></tr><tr><td>-</td><td>The failure or minus sign response indicates the failure of the operation specified in the command. The failure response is a minus sign, optionally followed by text, and ending with a CRLF. </td></tr><tr><td>=</td><td>The length or equal sign response tells the length in characters of the message referenced by the command. The length response is a equal sign, followed by a number, optionally followed by text, and ending with a CRLF.</td></tr><tr><td>#</td><td>The count or number sign response tells the number of messages in a folder or mailbox referenced by the command. The count response is a number sign, followed by a number, optionally followed by text, and ending with a CRLF.</td></tr></tbody></table></div></div></li></ul>
<br />
<br /><b>Extensions Not Supported</b>
<br />POP2 does not examine the internal data of messages. In particular, the server does not parse message headers.
<br />
<br />The server doesn't have any state information (i.e., it doesn't know from one session to the next what has happened). For example, the server doesn't know which messages were received since the last time the user used POP2, so it can't send just the "new" messages.
<br />
<br /><b>Combined flow diagram</b>
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 2" tabindex="0">   +----+                                                              
   |CALL|&lt;------------------------------------------------------------+
   |LSTN|                                                             ^
   +----+                                                             |
    | Greet                                                           |
    |                                                                 |
    |  +-----------------------------------------------------&gt;+       |
    |  ^ QUIT                                                 |       |
    V  |                                                      V       |
   +----+        +----+                                      +----+   |
   |CALL| HELO   |NMBR|                                      |EXIT|   |
   |AUTH|-------&gt;|AUTH|                                      |AUTH|   |
   +----+        +----+                                      +----+   |
                  | #NNN                                   + Bye |    |
                  |                                              |    |
                  |  +------------------------------------&gt;+     |    |
                  |  ^ QUIT                                |     |    |
                  V  |                                     V     |    |
            +---&gt;+----+        +----+                     +----+ |    |
       FOLD ^    |NMBR| READ   |SIZE|                     |EXIT| |    |
       ---- |    |MBOX|-------&gt;|MBOX|                     |MBOX| |    |
       #NNN +&lt;---+----+        +----+                     +----+ |    |
                     ^           | =CCC                 + Bye |  |    |
                     |           |                            |  |    |
                FOLD +&lt;--------+ | +-------------------&gt;+     |  |    |
                ----           ^ | ^ QUIT               |     |  |    |
                #NNN           | V |                    V     |  |    |
                         +---&gt;+-----+        +----+    +----+ |  |    |
                    READ ^    |SIZE | RETR   |XFER|    |EXIT| |  |    |
                    ---- |    | ITEM|-------&gt;|ITEM|    |ITEM| |  |    |
                    =CCC +&lt;---+-----+        +----+    +----+ |  |    |
                                 ^             | data      |  |  |    |
                                 |             |           |  |  |    |
                            =CCC |             V     + Bye |  |  |    |
                               +----+        +----+        |  |  |    |
                               |SIZE|    Ack |XFER|        |  |  |    |
                               |NEXT|&lt;-------|NEXT|        |  |  |    |
                               +----+        +----+        |  |  |    |
                                                           |  |  |    |
                                                           |  |  |    |
                                                           V  V  V    |
                                                          +-------+   |
                                                          | EXIT  |--&gt;+
                                                          | DONE  |    
                                                          +-------+</pre>    
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1</b>

           Client                    Server
           ------                    ------
                                Wait for connection
      Open connection  --&gt;
                           &lt;--  + POP2 USC-ISIF.ARPA Server
      HELO POSTEL SECRET --&gt;
                           &lt;--  #2 messages in your mailbox
      READ             --&gt;   
                           &lt;--  =537 characters in message 1
      RETR             --&gt;   
                           &lt;--  [data of message 1]
      ACKD             --&gt;   
                           &lt;--  =234 characters in message 2
      RETR             --&gt;   
                           &lt;--  [data of message 2]
      ACKD             --&gt;   
                           &lt;--  =0 no more messages
      QUIT             --&gt;
                           &lt;--  + OK, bye, bye
      Close connection --&gt; &lt;--  Close connection
                                Go back to start</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2</b>

           Client                    Server
           ------                    ------
                                Wait for connection
      Open connection  --&gt;
                           &lt;--  + POP2 ISI-VAXA.ARPA server here
      HELO smith secret --&gt;
                           &lt;--  #35 messages
      FOLD /usr/spool/mail/smith --&gt;
                           &lt;--  #27 messages
      READ  27         --&gt;   
                           &lt;--  =10123 characters in that message
      RETR             --&gt;   
                           &lt;--  [data of message 27]
      ACKS             --&gt;   
                           &lt;--  =0 no more messages
      QUIT             --&gt;
                           &lt;--  + bye, call again sometime.
      Close connection --&gt; &lt;--  Close connection
                                Go back to start</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3</b>

           Client                    Server
           ------                    ------
                                Wait for connection
      Open connection  --&gt;
                           &lt;--  + POP2 ISI-VAXA.ARPA server here
      HELO Jones secret --&gt;
                           &lt;--  #0 messages
      READ             --&gt;   
                           &lt;--  Close connection
      Close connection --&gt;
                                Go back to start</pre>	  
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
			<b>ARPA</b><br />ARPA is an agency of the United States Department of Defense, ARPA (Advanced Research Projects Agency) underwrote development for the precursor of the Internet, known as ARPANET. Initially a modest network of four interconnected university computers, ARPANET's initial purpose was to enable mainly scientific users at the connected institutions to communicate and share resources.<br /><br /><b>Arguments</b><br />These arguments have system specific definitions.
<br />*user - A login account name.
<br />*password - The password for the login account.
<br />*mailbox - A mailbox name (also called a mail folder).<br /><br /><b>Client</b><br />Clinet is a program which requests services of another program. It is a client part of a client-server architecture. Typically, a client is an application that runs on a personal computer or workstation and relies on a server to perform some operations. For example, an e-mail client is an application that enables you to send and receive e-mail.<br /><br /><b>Data</b><br />* Distinct pieces of information, usually formatted in a special way. All software is divided into two general categories: data and programs. Programs are collections of instructions for manipulating data. Data can exist in a variety of forms -- as numbers or text on pieces of paper, as bits and bytes stored in electronic memory, or as facts stored in a person's mind. Strictly speaking, data is the plural of datum, a single piece of information. In practice, however, people use data as both the singular and plural form of the word. 
<br />
<br />* The term data is often used to distinguish binary machine-readable information from textual human-readable information. For example, some applications make a distinction between data files (files that contain binary data) and text files (files that contain ASCII data). 
<br />
<br />* In database management systems, data files are the files that store the database information, whereas other files, such as index files and data dictionaries, store administrative information, known as metadata.<br /><br /><b>Mailbox</b><br />Mailbox is an area in memory or on a storage device where e-mail is placed. In e-mail systems, each user has a private mailbox. When the user receives e-mail, the mail system automatically puts it in the mailbox. 
<br />
<br />The mail system allows you to scan mail that is in your mailbox, copy it to a file, delete it, print it, or forward it to another user. If you want to save mail, it is a good idea to copy it to a file, because files tend to be more stable than mailboxes.<br /><br /><b>POP</b><br />POP (Post Office Protocol) is a protocol used to retrieve e-mail from a mail server. Most e-mail applications (sometimes called an e-mail client) use the POP protocol, although some can use the newer IMAP (Internet Message Access Protocol). There are two versions of POP. The first, called POP2, became a standard in the mid-80's and requires SMTP to send messages. The newer version, POP3, can be used with or without SMTP.<br /><br /><b>POP3</b><br />POP3 (Post Office Protocol 3) is the most recent version of a standard protocol for receiving e-mail. POP3 is a client/server protocol in which e-mail is received and held for you by your Internet server. Periodically, you (or your client e-mail receiver) check your mail-box on the server and download any mail, probably using POP3. This standard protocol is built into most popular e-mail products, such as Eudora and Outlook Express. It's also built into the Netscape and Microsoft Internet Explorer browsers. <br /><br /><b>SMTP</b><br />SMTP (Simple Mail Transfer Protocol) is a  protocol for sending e-mail messages between servers. Most e-mail systems that send mail over the Internet use SMTP to send messages from one server to another; the messages can then be retrieved with an e-mail client using either POP or IMAP. In addition, SMTP is generally used to send messages from a mail client to a mail server. This is why you need to specify both the POP or IMAP server and the SMTP server when you configure your e-mail application.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>Stream</b><br />Stream is a uni-directional logical channel established from one to another associated SCTP endpoint, within which all user messages are delivered in sequence except for those submitted to the unordered delivery service.<br /><br /><b>TCP</b><br />TCP (Transmission Control Protocol) is one of the main protocols in TCP/IP networks. TCP is one of the main protocols in TCP/IP networks. Whereas the IP protocol deals only with packets, TCP enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and also guarantees that packets will be delivered in the same order in which they were sent.<br /><br /><b>Workstation</b><br />*A type of computer used for engineering applications (CAD/CAM), desktop publishing, software development, and other types of applications that require a moderate amount of computing power and relatively high quality graphics capabilities.
<br />
<br />* In networking, workstation refers to any computer connected to a local-area network. It could be a workstation or a personal computer.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc937.html">RFC 937</a>] POST OFFICE PROTOCOL - VERSION 2.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc918.html">RFC 918</a>.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc918.html">RFC 918</a>] POST OFFICE PROTOCOL.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc937.html">RFC 937</a>.
                		  </div>
		  
</section>

