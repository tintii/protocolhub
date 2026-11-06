---
id: protocol-nntp
slug: nntp
name: NNTP
expandedName: Network News Transfer Protocol
origin: historical
provenance:
  source: protocols/protocol_NNTP.htm
  sha256: 69876972a190babf82ac8301a6a7829b4498810eaf1e77834e1499b21a070fd4
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Network News Transfer Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Network News Transfer Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: News protocol
  - label: Ports
    html: 119 (TCP)
  - label: URI
    html: nntp
  - label: Working groups
    html: 'Nntpext, NNTP Extensions'
originalUpdate: '2005-11-10 16:04:33'
rfcs:
  - 850
  - 977
  - 1036
  - 2980
  - 3675
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

			NNTP specifies a protocol for the distribution, inquiry, retrieval, and posting of news articles using a reliable stream (such as TCP), based transmission of news, server-client model. NNTP is designed to accept connections from hosts, and to provide a simple interface to the news database. This server is only an interface between programs and the news databases. It does not perform any user interaction or presentation- level functions. These "user-friendly" functions are better left to the client programs, which have a better understanding of the environment in which they are operating.
<br />
<br />NNTP is a request-reply protocol in the style of SMTP or FTP. Unlike mail, news does not require separate protocols for user-to-host and host-to-host exchanges. NNTP is used in all cases. NNTP has facilities to support reading newsgroups, posting new articles, and transferring articles between news servers.
<br />
<br />There are thousands of different newsgroups related to computers, social issues, science, the humanities, recreation, and other topics. NNTP used to send Usenet news messages between servers and from a news server to newsreader clients. It is a fairly simple protocol, similar in many ways to POP3 or SMTP and is of interest in part because of its simplicity (it's a lot easier to write one's own NNTP implementation for fun than it is to write one's own IMAP implementation for fun).
<br />
<br />USENET servers use NNTP to exchange news articles among themselves. NNTP is also used by clients who need to read news articles on USENET servers. The server-to-server and user-to-server connections are described here:
<br />
<br /><ul><li><b>Server-to-server exchanges</b>
<br />In the server-to-server exchange, one server either requests the latest articles from another server (pull) or allows the other server to push new articles to it. In either case, both servers engage in a conversation in which specific newsgroup information is requested and then delivered. A primary goal is to prevent the sending system from sending articles that the receiver already has. Select newsgroups and articles can be blocked.<br /><br /></li>

<li><b>User-to-server connections</b>
<br />Users run news readers, which are now included with most Web browsers. The user first connects with a newsgroup server (usually located at an ISP (Internet service provider), then downloads a list of available newsgroups. The user can then subscribe to a newsgroup and begin reading articles available in that group or post new articles.
<br />Before NNCP, USENET servers used UUCP (UNIX-to-UNIX Copy Program) to exchange information. UUCP is a "flood broadcast" mechanism. Hosts send new news articles they receive to other hosts, which in turn forward the news on to other hosts that they feed. Usually, a host receives duplicates of articles and must discard those duplicates-a time-consuming process and waste of bandwidth.</li></ul>
<br />NNTP uses an interactive command and response mechanism that lets hosts determine which articles are to be transmitted. A host acting as a client contacts a "server" host using NNTP, and then inquires if any new newsgroups have been created on any of the serving host systems. An administrator can choose to create similar newsgroups on the host he or she manages.
<br />
<br />During the same NNTP session, the client requests information about new articles that have arrived in all or some of the newsgroups. The server then sends the client a list of new articles and the client can request transmission of some or all of those articles. The client can refuse to accept articles that it already has.
<br /><hr />
<br /><b>Character Codes</b>
<br />Commands and replies are composed of characters from the ASCII character set.  When the transport service provides an 8-bit byte (octet) transmission channel, each 7-bit character is transmitted right justified in an octet with the high order bit cleared to zero.
<br />
<br /><b>Commands</b>
<br />Commands consist of a command word, which in some cases may be followed by a parameter.  Commands with parameters must separate the parameters from each other and from the command by one or more space or tab characters. Command lines must be complete with all required parameters, and may not contain more than one command.
<br />
<br />Commands and command parameters are not case sensitive. That is, a command or parameter word may be upper case, lower case, or any mixture of upper and lower case.
<br />
<br /><ul><li><b>NNTP commands</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>Command</td><td>Description</td></tr><tr><td>ARTICLE</td><td>There are two forms to the ARTICLE command (and the      related BODY, HEAD, and STAT commands), each using a different method of      specifying which article is to be retrieved.</td></tr><tr><td>AUTHINFO</td><td>AUTHINFO is used to inform a server about the identity      of a user of the server.</td></tr><tr><td>CHECK</td><td>CHECK is used by a peer to discover if the article with      the specified message-id should be sent to the server using the TAKETHIS      command.</td></tr><tr><td>DATE</td><td>The first NNTP working group discussed and proposed a      syntax for this command to help clients find out the current time from the      servers perspective.</td></tr><tr><td>GROUP</td><td>The successful selection response will return the      article numbers of the first and last articles in the group, and an      estimate of the number of articles on file in the group.</td></tr><tr><td>HELP</td><td>Provides a short summary of commands that are understood      by this implementation of the server.</td></tr><tr><td>IHAVE</td><td>The IHAVE command informs the server that the client has      an article whose id is .</td></tr><tr><td>LIST</td><td>Returns a list of valid newsgroups and associated      information.</td></tr><tr><td>LISTGROUP</td><td>The LISTGROUP command is used to get a listing of all      the article numbers in a particular news group.</td></tr><tr><td>MODE READER</td><td>MODE READER is used by the client to indicate to the      server that it is a news reading client.</td></tr><tr><td>MODE STREAM</td><td>MODE STREAM is used by a peer to indicate to the server      that it would like to suspend the lock step conversational nature of NNTP      and send commands in streams.</td></tr><tr><td>NEWGROUPS</td><td>A list of newsgroups created since will      be listed in the same format as the LIST command.</td></tr><tr><td>NEWNEWS</td><td>A list of message-ids of articles posted or received to      the specified newsgroup since "date" will be listed.</td></tr><tr><td>NEXT</td><td>The internally maintained "current article pointer" is      advanced to the next article in the current newsgroup.</td></tr><tr><td>POST</td><td>After the articles header and body have been completely      sent by the client to the server, a further response code will be returned      to indicate success or failure of the posting attempt.</td></tr><tr><td>QUIT</td><td>The server process acknowledges the QUIT command and      then closes the connection to the client.</td></tr><tr><td>SLAVE</td><td>Indicates to the server that this client connection is      to a slave server, rather than a user.</td></tr><tr><td>TAKETHIS</td><td>TAKETHIS is used to send articles to a server when in      streaming mode.</td></tr><tr><td>XGTITLE</td><td>The XGTITLE command is used to retrieve news group      descriptions for specific news groups.</td></tr><tr><td>XHDR</td><td>The XHDR command is used to retrieve specific headers      from specific articles.</td></tr><tr><td>XINDEX</td><td>The XINDEX command is used to retrieve an index file in      the format of originally created for use by the TIN [6] news reader.</td></tr><tr><td>XOVER</td><td>The XOVER command returns information from the overview      database for the article(s) specified.</td></tr><tr><td>XPAT</td><td>The XPAT command is used to retrieve specific headers      from specific articles, based on pattern matching on the contents of the      header.</td></tr><tr><td>XPATH</td><td>The XPATH command is used to determine the filenames in      which an article is filed.  It first appeared in INN.</td></tr><tr><td>XREPLIC</td><td>The XREPLIC command makes is possible to exactly      duplicate the news spool structure of one server in another server.</td></tr><tr><td>XROVER</td><td>The XROVER command returns reference information from      the overview database for the article(s) specified.</td></tr><tr><td>XTHREAD</td><td>The XTHREAD command is used to retrieve threading      information in format of originally created for use by the TRN news reader.</td></tr></tbody></table></div></div></li></ul>
<br /><hr />
<br /><b>Responses</b>
<br />Responses are of two kinds, textual and status.
<br />
<br /><ul><li><b>Text Responses</b>
<br />Text is sent only after a numeric status response line has been sent that indicates that text will follow. Text is sent as a series of successive lines of textual matter, each terminated with CR-LF pair. A single line containing only a period (.) is sent to indicate the end of the text (i.e., the server will send a CR-LF pair at the end of the last line of text, a period, and another CR-LF pair).<br /><br /></li>

<li><b>Status Responses</b>
<br />These are status reports from the server and indicate the response to the last command received from the client.
<br />Status response lines begin with a 3 digit numeric code which is sufficient to distinguish all responses. Some of these may herald the subsequent transmission of text.
<br />
<br />The first digit of the response broadly indicates the success, failure, or progress of the previous command.<br /><br /></li>

<li><ul><li><b>NNTP Reply Code</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>Code</td><td>Description</td></tr><tr><td>1yz</td><td>Informative message.</td></tr><tr><td>2yz</td><td>Command ok.</td></tr><tr><td>3yz</td><td>Command ok so far, send the rest of it.</td></tr><tr><td>4yz</td><td>Command was correct, but couldn't be performed for some reason.</td></tr><tr><td>5yz</td><td>Command unimplemented, or incorrect, or a serious program error occurred.</td></tr><tr><td>x0z</td><td>Connection, setup, and miscellaneous messages.</td></tr><tr><td>x1z</td><td>Newsgroup selection.</td></tr><tr><td>x2z</td><td>Article selection.</td></tr><tr><td>x3z</td><td>Distribution functions.</td></tr><tr><td>x4z</td><td>Posting.</td></tr><tr><td>x8z</td><td>Nonstandard (private implementation) extensions.</td></tr><tr><td>x9z</td><td>Debugging output.</td></tr></tbody></table></div></div></li></ul><br /><br /></li>

<li><b>General Responses</b>
<br />The following is a list of general response codes that may be sent by the NNTP server. These are not specific to any one command, but may be returned as the result of a connection, a failure, or some unusual condition.
<br />
<br />In general, 1xx codes may be ignored or displayed as desired; code 200 or 201 is sent upon initial connection to the NNTP server depending upon posting permission; code 400 will be sent when the NNTP server discontinues service (by operator request, for example); and 5xx codes indicate that the command could not be performed for some unusual reason.<br /><br /></li>

<li><ul><li><b>NNTP Reply Codes</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td>Code</td><td>Description</td></tr><tr><td>100</td><td>Help text follows.</td></tr><tr><td>199</td><td>Debug output.</td></tr><tr><td>200</td><td>Server ready - posting allowed.</td></tr><tr><td>201</td><td>Server ready - no posting allowed.</td></tr><tr><td>202</td><td>Slave status noted.</td></tr><tr><td>205</td><td>Closing connection - goodbye!</td></tr><tr><td>211</td><td>n f l s group selected.</td></tr><tr><td>215</td><td>List of newsgroups follows.</td></tr><tr><td>220</td><td>n <a> article retrieved - head and body follow 221 n </a><a> article retrieved - head follows.</a></td></tr><tr><td>222</td><td>n <a> article retrieved - body follows.</a></td></tr><tr><td>223</td><td>n <a> article retrieved - request text separately 230 list of new articles by message-id follows.</a></td></tr><tr><td>231</td><td>List of new newsgroups follows.</td></tr><tr><td>235</td><td>Article transferred ok.</td></tr><tr><td>240</td><td>Article posted ok.</td></tr><tr><td>335</td><td>Send article to be transferred. End with ..</td></tr><tr><td>340</td><td>Send article to be posted. End with ..</td></tr><tr><td>400</td><td>Service discontinued.</td></tr><tr><td>411</td><td>No such news group.</td></tr><tr><td>412</td><td>No newsgroup has been selected.</td></tr><tr><td>420</td><td>No current article has been selected.</td></tr><tr><td>421</td><td>No next article in this group.</td></tr><tr><td>422</td><td>No previous article in this group.</td></tr><tr><td>423</td><td>No such article number in this group.</td></tr><tr><td>430</td><td>No such article found.</td></tr><tr><td>435</td><td>Article not wanted - do not send it.</td></tr><tr><td>436</td><td>Transfer failed - try again later.</td></tr><tr><td>437</td><td>Article rejected - do not try again.</td></tr><tr><td>440</td><td>Posting not allowed.</td></tr><tr><td>441</td><td>Posting failed.</td></tr><tr><td>500</td><td>Command not recognized.</td></tr><tr><td>501</td><td>Command syntax error.</td></tr><tr><td>502</td><td>Access restriction or permission denied.</td></tr><tr><td>503</td><td>Program fault - command not performed.</td></tr></tbody></table></div></div></li></ul></li></ul>
<br /><hr />
<br /><b>Common NNTP Extensions</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td>Command</td><td>Description</td></tr><tr><td>LIST ACTIVE.TIMES</td><td>The active.times file is maintained by some news transports systems to contain information about the when and who created a particular news group.</td></tr><tr><td>LIST DISTRIBUTIONS</td><td>The distributions file is maintained by some news transport systems to contain information about valid values for the Distribution: line in a news article header and about what the values mean.</td></tr><tr><td>LIST DISTRIB.PATS</td><td>The distrib.pats file is maintained by some news transport systems to contain default values for the Distribution:?line in a news article header when posting to particular news groups.</td></tr><tr><td>LIST NEWSGROUPS</td><td>The newsgroups file is maintained by some news transport systems to contain the name of each news group which is active on the server and a short description about the purpose of each news group.</td></tr><tr><td>LIST OVERVIEW.FMT</td><td>The overview.fmt file is maintained by some news transport systems to contain the order in which header information is stored in the overview databases for each news group.</td></tr><tr><td>LIST SUBSCRIPTIONS</td><td>This command is used to get a default subscription list for new users of this server.?The order of groups is significant.</td></tr><tr><td>LISTGROUP</td><td>The LISTGROUP command is used to get a listing of all the article numbers in a particular news group.</td></tr></tbody></table></div></div>
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: relative access with NEXT</b>

          S:      (listens at TCP port 119)

          C:      (requests connection on TCP port 119)
          S:      200 wombatvax news server ready - posting ok

          (client asks for a current newsgroup list)
          C:      LIST
          S:      215 list of newsgroups follows
          S:      net.wombats 00543 00501 y
          S:      net.unix-wizards 10125 10011 y
                  (more information here)
          S:      net.idiots 00100 00001 n
          S:      .

          (client selects a newsgroup)
          C:      GROUP net.unix-wizards
          S:      211 104 10011 10125 net.unix-wizards group selected
                  (there are 104 articles on file, from 10011 to 10125)

          (client selects an article to read)
          C:      STAT 10110
          S:      223 10110 &lt;23445@sdcsvax.ARPA&gt; article retrieved - statistics
                  only (article 10110 selected, its message-id is
                  &lt;23445@sdcsvax.ARPA&gt;)

          (client examines the header)
          C:      HEAD
          S:      221 10110 &lt;23445@sdcsvax.ARPA&gt; article retrieved - head
                  follows (text of the header appears here)
          S:      .

          (client wants to see the text body of the article)
          C:      BODY
          S:      222 10110 &lt;23445@sdcsvax.ARPA&gt; article retrieved - body
                  follows (body text here)
          S:      .

          (client selects next article in group)
          C:      NEXT
          S:      223 10113 &lt;21495@nudebch.uucp&gt; article retrieved - statistics
                  only (article 10113 was next in group)

          (client finishes session)
          C:      QUIT
          S:      205 goodbye.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: absolute article access with ARTICLE</b>

          S:      (listens at TCP port 119)

          C:      (requests connection on TCP port 119)
          S:      201 UCB-VAX netnews server ready -- no posting allowed

          C:      GROUP msgs
          S:      211 103 402 504 msgs Your new group is msgs
                  (there are 103 articles, from 402 to 504)

          C:      ARTICLE 401
          S:      423 No such article in this newsgroup

          C:      ARTICLE 402
          S:      220 402 &lt;4105@ucbvax.ARPA&gt; Article retrieved, text follows
          S:      (article header and body follow)
          S:      .

          C:      HEAD 403
          S:      221 403 &lt;3108@mcvax.UUCP&gt; Article retrieved, header follows
          S:      (article header follows)
          S:      .

          C:      QUIT
          S:      205 UCB-VAX news server closing connection.  Goodbye.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: NEWGROUPS command</b>

          S:      (listens at TCP port 119)

          C:      (requests connection on TCP port 119)
          S:      200 Imaginary Institute News Server ready (posting ok)

          (client asks for new newsgroups since April 3, 1985)
          C:      NEWGROUPS 850403 020000

          S:      231 New newsgroups since 03/04/85 02:00:00 follow
          S:      net.music.gdead
          S:      net.games.sources
          S:      .

          C:      GROUP net.music.gdead
          S:      211 0 1 1 net.music.gdead Newsgroup selected
                  (there are no articles in that newsgroup, and
                  the first and last article numbers should be ignored)

          C:      QUIT
          S:      205 Imaginary Institute news server ceasing service.  Bye!</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 4" tabindex="0"><b>Example 4: posting a news article</b>

          S:      (listens at TCP port 119)

          C:      (requests connection on TCP port 119)
          S:      200 BANZAIVAX news server ready, posting allowed.

          C:      POST
          S:      340 Continue posting; Period on a line by itself to end
          C:      (transmits news article in RFC850 format)
          C:      .
          S:      240 Article posted successfully.

          C:      QUIT
          S:      205 BANZAIVAX closing connection.  Goodbye.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 5" tabindex="0"><b>Example 5: interruption due to operator request</b>

          S:      (listens at TCP port 119)

          C:      (requests connection on TCP port 119)
          S:      201 genericvax news server ready, no posting allowed.

                  (assume normal conversation for some time, and
                  that a newsgroup has been selected)

          C:      NEXT
          S:      223 1013 &lt;5734@mcvax.UUCP&gt; Article retrieved; text separate.

          C:      HEAD
          C:      221 1013 &lt;5734@mcvax.UUCP&gt; Article retrieved; head follows.

          S:      (sends head of article, but halfway through is
                  interrupted by an operator request.  The following
                  then occurs, without client intervention.)
          S:      (ends current line with a CR-LF pair)
          S:      .
          S:      400 Connection closed by operator.  Goodbye.
          S:      (closes connection)</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 6" tabindex="0"><b>Example 6: Using the news server to distribute news between systems.</b>

          S:      (listens at TCP port 119)

          C:      (requests connection on TCP port 119)
          S:      201 Foobar NNTP server ready (no posting)

          (client asks for new newsgroups since 2 am, May 15, 1985)
          C:      NEWGROUPS 850515 020000
          S:      235 New newsgroups since 850515 follow
          S:      net.fluff
          S:      net.lint
          S:      .

          (client asks for new news articles since 2 am, May 15, 1985)
          C:      NEWNEWS * 850515 020000
          S:      230 New news since 850515 020000 follows
          S:      &lt;1772@foo.UUCP&gt;
          S:      &lt;87623@baz.UUCP&gt;
          S:      &lt;17872@GOLD.CSNET&gt;
          S:      .

          (client asks for article &lt;1772@foo.UUCP&gt;)
          C:      ARTICLE &lt;1772@foo.UUCP&gt;
          S:      220 &lt;1772@foo.UUCP&gt; All of article follows
          S:      (sends entire message)
          S:      .

          (client asks for article &lt;87623@baz.UUCP&gt;
          C:      ARTICLE &lt;87623@baz.UUCP&gt;
          S:      220 &lt;87623@baz.UUCP&gt; All of article follows
          S:      (sends entire message)
          S:      .

          (client asks for article &lt;17872@GOLD.CSNET&gt;
          C:      ARTICLE &lt;17872@GOLD.CSNET&gt;
          S:      220 &lt;17872@GOLD.CSNET&gt; All of article follows
          S:      (sends entire message)
          S:      .
          (client offers an article it has received recently)
          C:      IHAVE &lt;4105@ucbvax.ARPA&gt;
          S:      435 Already seen that one, where you been?

          (client offers another article)
          C:      IHAVE &lt;4106@ucbvax.ARPA&gt;
          S:      335 News to me!   to end.
          C:      (sends article)
          C:      .
          S:      235 Article transferred successfully.  Thanks.

          (or)

          S:      436 Transfer failed.

          (client is all through with the session)
          C:      QUIT
          S:      205 Foobar NNTP server bids you farewell.</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>NNTP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>FTP</b><br />FTP (File Transfer Protocol) is the protocol for exchanging files over the Internet. FTP works in the same way as HTTP for transferring Web pages from a server to a user's browser and SMTP for transferring electronic mail across the Internet in that, like these technologies, FTP uses the Internet's TCP/IP protocols to enable data transfer. 
<br />
<br />FTP is most commonly used to download a file from a server using the Internet or to upload a file to a server (e.g., uploading a Web page file to a server).<br /><br /><b>IMAP</b><br />IMAP 9Internet Message Access Protocol) is a protocol for retrieving e-mail messages. The latest version, IMAP4, is similar to POP3 but supports some additional features. For example, with IMAP4, you can search through your e-mail messages for keywords while the messages are still on mail server. You can then choose which messages to download to your machine.<br /><br /><b>POP3</b><br />POP3 (Post Office Protocol 3) is the most recent version of a standard protocol for receiving e-mail. POP3 is a client/server protocol in which e-mail is received and held for you by your Internet server. Periodically, you (or your client e-mail receiver) check your mail-box on the server and download any mail, probably using POP3. This standard protocol is built into most popular e-mail products, such as Eudora and Outlook Express. It's also built into the Netscape and Microsoft Internet Explorer browsers. <br /><br /><b>SMTP</b><br />SMTP (Simple Mail Transfer Protocol) is a  protocol for sending e-mail messages between servers. Most e-mail systems that send mail over the Internet use SMTP to send messages from one server to another; the messages can then be retrieved with an e-mail client using either POP or IMAP. In addition, SMTP is generally used to send messages from a mail client to a mail server. This is why you need to specify both the POP or IMAP server and the SMTP server when you configure your e-mail application.<br /><br /><b>USENET News System</b><br />In the UNIX world the USENET News system provides a method of a worthwhile reduction of the amount of these resources used can be achieved if articles are stored in a central database on the receiving host instead of in each subscriber's mailbox. There is a central repository of the news articles in one place (customarily a spool directory of some sort), and a set of programs that allow a subscriber to select those items he wishes to read. Indexing, cross-referencing, and expiration of aged messages are also provided.<br /><br /><b>UUCP</b><br />UUCP (UNIX-to-UNIX Copy Program) is a Unix utility and protocol that enables one computer to send files to another computer over a direct serial connection or via modems and the telephone system. For most file transfer applications, UUCP has been superseded by other protocols, such as FTP, SMTP and NNTP.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc977.html">RFC 977</a>] Network News Transfer Protocol. A Proposed Standard for the Stream-Based Transmission of News.
[<a href="https://www.rfc-editor.org/rfc/rfc1036.html">RFC 1036</a>] Standard for Interchange of USENET Messages.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc850.html">RFC 850</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2980.html">RFC 2980</a>] Common NNTP Extensions.
[<a href="https://www.rfc-editor.org/rfc/rfc3675.html">RFC 3675</a>] .sex Considered Dangerous.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc850.html">RFC 850</a>] Standard for Interchange of USENET Messages.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1036.html">RFC 1036</a>.
                		  </div>
		  
</section>

