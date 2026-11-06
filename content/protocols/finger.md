---
id: protocol-finger
slug: finger
name: Finger
expandedName: Finger
origin: historical
provenance:
  source: protocols/protocol_Finger.htm
  sha256: 289760f81bf59f07137f98f9d8d18e889de467523614aec09e03410a7428cf4a
  provider: 'Colasoft Co., Ltd.'
aliases: []
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Finger
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: Application layer user information protocol
  - label: Ports
    html: |-
      117 (ICP)
      <br />79 (TCP)
  - label: Related protocols
    html: ' TCP,<br />TELNET,<br />FTP,<br />SMTP'
originalUpdate: '2005-11-10 16:12:22'
rfcs:
  - 742
  - 1194
  - 1196
  - 1288
related:
  - protocol-tcp
  - protocol-telnet
  - protocol-ftp
  - protocol-smtp
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

			Finger was one of the first computer network applications. It enabled people to see who else was using the computer system as well as find basic information on that user. To find information about a specific user, it was necessary to know that person's email address.
<br />
<br /><b>Use of the protocol</b>
<br /><ul><li><b>Flow of events</b><br /></li>
<li>Finger is based on the Transmission Control Protocol, using TCP port 79 decimal (117 octal). A TCP connection is opened to a remote host on the Finger port. An RUIP becomes available on the remote end of the connection to process the request. The RUIP is sent a one line query based upon the Finger query specification. The RUIP processes the query, returns an answer, then closes the connection normally.
<br /><br /></li>
<li><b>Data format</b><br /></li>
<li>Any data transferred MUST be in ASCII format, with no parity, and with lines ending in CRLF (ASCII 13 followed by ASCII 10). This excludes other character formats such as EBCDIC, etc. This also means that any characters between ASCII 128 and ASCII 255 should truly be international data, not 7-bit ASCII with the parity bit set.
<br /><br /></li>
<li><b>Query specifications</b><br /></li>
<li>An RUIP MUST accept the entire Finger query specification. The Finger query specification is defined:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>{Q1}</p></td><td>::= [{U}] [/W] {C}</td></tr><tr><td><p>{Q2}</p></td><td>::= [{U}]{H} [/W] {C}</td></tr><tr><td><p>{U}</p></td><td>::= username</td></tr><tr><td><p>{H}</p></td><td>::= @hostname | @hostname{H}</td></tr><tr><td><p>{C}</p></td><td>::= </td></tr></tbody></table></div></div><br /></li>
<li><ul><li>{H}, being recursive, means that there is no arbitrary limit on the number of @hostname tokens in the query. In examples of the {Q2} request specification, the number of @hostname tokens is limited to two, simply for brevity.
<br /><br /></li>
<li>Be aware that {Q1} and {Q2} do not refer to a user typing "finger user@host" from an operating system prompt. It refers to the line that an RUIP actually receives. So, if a user types "finger user@host</li><li>", the RUIP on the remote host receives "user", which corresponds to {Q1}.
<br />
<br />As with anything in the IP protocol suite, "be liberal in what you accept".</li></ul><br /><br /></li>

<li><b>RUIP {Q2} behavior</b><br /></li>
<li>A query of {Q2} is a request to forward a query to another RUIP. An RUIP MUST either provide or actively refuse this forwarding service. If an RUIP provides this service, it MUST conform to the following behavior:
<br /><br /></li>
<li>Given that:
<br /></li><li>Host H1 opens a Finger connection F1-2 to an RUIP on host H2.
<br /><br /></li>
<li>H1 gives the H2 RUIP a query Q1-2 of type {Q2} (e.g., FOO@HOST1@HOST2).
<br /><br /></li>
<li><b>Expected RUIP response</b><br /></li>
<li>For the most part, the output of an RUIP doesn't follow a strict specification, since it is designed to be read by people instead of programs. It should mainly strive to be informative. Output of ANY query is subject to the discussion in the security section.</li></ul>
<br /><hr />
<br /><b>Security</b>
<br /><li><b>Implementation security</b></li>
<br />Sound implementation of Finger is of the utmost importance. Implementations should be tested against various forms of attack. In particular, an RUIP SHOULD protect itself against malformed inputs. Vendors providing Finger with the operating system or network software should subject their implementations to penetration testing.
<br />
<br />Finger is one of the avenues for direct penetration, as the Morris worm pointed out quite vividly. Like Telnet, FTP and SMTP, Finger is one of the protocols at the security perimeter of a host. Accordingly, the soundness of the implementation is paramount. The implementation should receive just as much security scrutiny during design, implementation, and testing as Telnet, FTP, or SMTP.
<br />
<br /><li><b>RUIP security</b></li>
<br />Warning! Finger discloses information about users; moreover, such information may be considered sensitive. Security administrators should make explicit decisions about whether to run Finger and what information should be provided in responses.
<br /><ul><li><b>{Q2} refusal</b><br /></li>
<li>For individual site security concerns, the system administrator SHOULD be given an option to individually turn on or off RUIP processing of {Q2}. If RUIP processing of {Q2} is turned off, the RUIP MUST return a service refusal message of some sort. "Finger forwarding service denied" is adequate. The purpose of this is to allow individual hosts to choose to not forward Finger requests, but if they do choose to, to do so consistently.
<br /><br /></li>
<li><b>{C} refusal</b><br /></li>
<li>For individual site security concerns, the system administrator SHOULD be given an option to individually turn on or off RUIP acceptance of {C}. If RUIP processing of {C} is turned off, the RUIP MUST return a service refusal message of some sort. "Finger online user list denied" is adequate. The purpose of this is to allow individual hosts to choose to not list the users currently online.
<br /><br /></li>
<li><b>Atomic discharge</b><br /></li>
<li>All implementations of Finger SHOULD allow individual system administrators to tailor what atoms of information are returned to a query.
<br /><br /></li>
<li><b>User information files</b><br /></li>
<li>Allowing an RUIP to return information out of a user-modifiable file should be seen as equivalent to allowing any information about your system to be freely distributed. That is, it is potentially the same as turning on all specifiable options. This information security breach can be done in a number of ways, some cleverly, others straightforwardly. This should disturb the sleep of system administrators who wish to control the returned information.
<br /><br /></li>
<li><b>Execution of user programs</b><br /></li>
<li>Allowing an RUIP to run a user program in response to a Finger query is potentially dangerous. BE CAREFUL!! -- the RUIP MUST NOT allow system security to be compromised by that program. Implementing this feature may be more trouble than it is worth, since there are always bugs in operating systems, which could be exploited via this type of mechanism.
<br /><br /></li>
<li><b>{U} ambiguity</b><br /></li>
<li>Be aware that a malicious user's clever and/or persistent use of this feature can result in a list of most of the usernames on a system.
<br /><br /></li>
<li><b>Audit trails</b><br /></li>
<li>Implementations SHOULD allow system administrators to log Finger queries.</li></ul>
<br />
<br /><li><b>Client security</b></li>
<br />It is expected that there will normally be some client program that the user runs to query the initial RUIP. By default, this program SHOULD filter any unprintable data, leaving only printable 7-bit characters (ASCII 32 through ASCII 126), tabs (ASCII 9), and CRLFs. This is to protect against people playing with terminal escape codes, changing other peoples' X window names, or committing other dastardly or confusing deeds. Two separate user options SHOULD be considered to modify this behavior, so that users may choose to view international or control characters:
<br /><ul><li>one to allow all characters less than ASCII 32
<br /></li><li>another to allow all characters greater than ASCII 126</li></ul>
<br />
<br />For environments that live and breathe international data, the system administrator SHOULD be given a mechanism to enable the latter option by default for all users on a particular system. This can be done via a global environment variable or similar mechanism.
<br /><hr />
<br /><b>Running Code ¨C Actual Implementations of Finger</b>
<br />To use Finger, it is necessary for the host computer to run the Finger daemon (a program running in the background) which will answer Finger requests.
<br /><ul><li><b>BSD Unix</b><br /></li>
<li>Finger appeared in version 3.0 of the Berkeley Software Distribution (BSD) Unix. According to the system documentation the Finger command usually "displays the user's login name, real name, terminal name and write status (as a ``*'' before the terminal name if write permission is denied), idle time, login time, office location and office phone number." By using the ¨Cl option, the following information would be displayed: "the user's home directory, home phone number, login shell, and the contents of the files ".forward'', ".plan'" and ".project'' from the user's home directory."
<br /><br /></li>
<li><b>Solaris Unix</b><br /></li>
<li>In Sun's Solaris the default for the Finger command is to display the following information: user name, user's full name, terminal name (prepended with a `*' (asterisk) if write-permission is denied), idle time, login time, and host name if logged in remotely. If queried for a specific user than the following is provided:  the user name and the user's full name, the user's home directory and login shell, time the user logged in if currently logged in, or the time the user last logged in; and the terminal or host from which the user logged in, last time the user received mail, and the last time the user read mail, the first line of the $HOME/.project file, if it exists, the contents of the $HOME/.plan file, if it exists 
<br /><br /></li>
<li><b>GNU Finger</b><br /></li>
<li>The Finger command was designed to provide information about users on a computer system. This worked well in the 1970s when there were many people connected to one computer. However, by the 1990s, the networking environment had changed. In the 1990s there were many computers mostly with a single user. To Finger someone in the 1990s, it was necessary to Finger each individual computer.  The GNU Finger implementation solved this problem by creating a central database listing all of the users in the site. This database was derived by continuously querying all the different computers at a "site". GNU Finger was developed in October 1992 and replaced Berkeley 4.3 Finger code.
<br /><br /></li>
<li><b>PFinger</b><br /></li>
<li>Another implementation of Finger, it is more recent. It claims that it has several security advantages over conventional implementations of the Finger command. For example, it allows .pgpfiles, no printing of users shell, home directory, and last login time. It also allows users to turn off Finger information by creating a .noFinger file or a user can update and store their own information.
<br /><br /></li>
<li><b>Configurable Finger Daemon (CFingerd)</b><br /></li>
<li>CFingerd is considered a hacked Finger daemon which provides extra security functions. It is considered an excellent replacement for standard Finger daemons. (1998) It was written by Ken Hollis with security issues in mind. According to its creators, cFingerd was created because many sites were turning off Finger for outside users. The system administrators did not want outsiders obtaining information about the users on the system. This program was created to provide these sites with a secure alternative.
<br /><br /></li>
<li><b>FFingerD</b><br /></li>
<li>FFingerd was created as secure Finger service in response to system administrators disabling the Finger service because Finger advertised too much information about the system and the security flaws in standard Finger daemons. Some key features: "It has been verified to compile on a wide variety of Unix variants. It does not run with superuser privileges. It can display PGP public keys, too. It even has a fascist logging option for paranoid administrators. Users can exclude their account from Fingering. You can't see if an account has been excluded or is not there."
<br /><br /></li>
<li><b>Troll-Ftpd</b><br /></li>
<li>Alternative to wu-ftpd and BSD Finger daemon which have security flaws. It is designed for Linux.
<br /><br /></li>
<li><b>PsFingerD</b><br /></li>
<li>In response to standard Finger daemon's that provide home directory, shell, and last login information which is valuably to hackers, PsFingerd was created. Some of the features of psFingerd are Disallowing indirect Fingers and empty Fingers, Support for pgp public key, .noFinger option, and the ability for users to hide their real name.</li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: Example with a null command line ({C})</b>

Site: elbereth.rutgers.edu
Command line:CRLF
<div><div class="table-scroll" role="region" aria-label="Examples table 1" tabindex="0"><table><caption>Examples: preserved table 1</caption><tbody><tr><td><p>Login</p></td><td><p>Name</p></td><td><p>TTY Idle</p></td><td><p>When</p></td><td><p>Office</p></td></tr><tr><td><p>rinehart</p></td><td><p>Mark J. Rinehart</p></td><td><p>p0</p></td><td><p>1:11 Mon 12:15</p></td><td><p>019 Hill x3166</p></td></tr><tr><td><p>greenfie</p></td><td><p>Stephen J. Greenfiel</p></td><td><p>p1</p></td><td><p>Mon 15:46</p></td><td><p>542 Hill x3074</p></td></tr><tr><td><p>rapatel</p></td><td><p>Rocky - Rakesh Patel</p></td><td><p>p3</p></td><td><p>4d Thu 00:58</p></td><td><p>028 Hill x2287</p></td></tr><tr><td><p>pleasant</p></td><td><p>Mel Pleasant</p></td><td><p>p4</p></td><td><p>3d Thu 21:32</p></td><td><p>019 Hill 908-932</p></td></tr><tr><td><p>dphillip</p></td><td><p>Dave Phillips</p></td><td><p>p5</p></td><td><p>021: Sun 18:24</p></td><td><p>265 Hill x3792</p></td></tr><tr><td><p>dmk</p></td><td><p>David Katinsky</p></td><td><p>p6</p></td><td><p>2d Thu 14:11</p></td><td><p>028 Hill x2492</p></td></tr><tr><td><p>cherniss</p></td><td><p>Cary Cherniss</p></td><td><p>p7</p></td><td><p>5 Mon 15:42</p></td><td><p>127 Psychol x2008</p></td></tr><tr><td><p>harnaga</p></td><td><p>Doug Harnaga</p></td><td><p>p8</p></td><td><p>2:01 Mon 10:15</p></td><td><p>055 Hill x2351</p></td></tr><tr><td><p>brisco</p></td><td><p>Thomas P. Brisco</p></td><td><p>pe</p></td><td><p>2:09 Mon 13:37</p></td><td><p>h055 x2351</p></td></tr><tr><td><p>laidlaw</p></td><td><p>Angus Laidlaw</p></td><td><p>q0</p></td><td><p>1:55 Mon 11:26</p></td><td><p>E313C 648-5592</p></td></tr><tr><td><p>cje</p></td><td><p>Chris Jarocha-Ernst</p></td><td><p>q1</p></td><td><p>8 Mon 13:43</p></td><td><p>259 Hill x2413</p></td></tr></tbody></table></div></div></pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Example with name specified ({U}{C})</b>

          Site: dimacs.rutgers.edu
          Command line: pirmann
          Login name: pirmann                        In real life: David Pirmann
          Office: 016 Hill, x2443                      Home phone: 989-8482
          Directory: /dimacs/u1/pirmann           Shell: /bin/tcsh
          Last login Sat Jun 23 10:47 on ttyp0 from romulus.rutgers.
          No unread mail
          Project:
          Plan:
                           Work Schedule, Summer 1990
                      Rutgers LCSR Operations, 908-932-2443

                             Monday       5pm - 12am
                             Tuesday      5pm - 12am
                             Wednesday    9am -  5pm
                             Thursday     9am -  5pm
                             Saturday     9am -  5pm

                                larf larf hoo hoo</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: Example with ambiguous name specified ({U}{C})</b>

          Site: elbereth.rutgers.edu
          Command line: ron
          Login name: spinner                     In real life: Ron Spinner
          Office: Ops Cubby,    x2443             Home phone: 463-7358
          Directory: /u1/spinner                  Shell: /bin/tcsh
          Last login Mon May  7 16:38 on ttyq7
          Plan:

                                ught i
                              ca      n
                            m           a
                          '      ...     t
                          I      .   .     i
                                 !         m  
                          !       !       e
                           p       !pool
                            l
                             e
                              H

          Login name: surak                       In real life: Ron Surak
          Office: 000 OMB Dou,    x9256
          Directory: /u2/surak                    Shell: /bin/tcsh
          Last login Fri Jul 27 09:55 on ttyq3
          No Plan.

          Login name: etter                       In real life: Ron Etter
          Directory: /u2/etter                    Shell: /bin/tcsh
          Never logged in.
          No Plan.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 4" tabindex="0"><b>Example 4: Example of query type {Q2} ({U}{H}{H}{C})</b>

          Site: dimacs.rutgers.edu
          Command line: hedrick@math.rutgers.edu@pilot.njin.net

          [pilot.njin.net]
          [math.rutgers.edu]
          Login name: hedrick                     In real life: Charles Hedrick
          Office: 484 Hill, x3088
          Directory: /math/u2/hedrick             Shell: /bin/tcsh
          Last login Sun Jun 24 00:08 on ttyp1 from monster-gw.rutge
          No unread mail
          No Plan.</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>Finger</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>ASCII</b><br />ASCII (American Standard Code for Information Interchange) is the most common format for text files in computers and on the Internet. In an ASCII file, each alphabetic, numeric, or special character is represented with a 7-bit binary number (a string of seven 0s or 1s). 128 possible characters are defined. 
<br />
<br />Unix and DOS-based operating systems use ASCII for text files. Windows NT and 2000 uses a newer code, Unicode. IBM's S/390 systems use a proprietary 8-bit code called EBCDIC. Conversion programs allow different operating systems to change a file from one code to another. 
<br />
<br />ASCII was developed by the American National Standards Institute (ANSI).<br /><br /><b>EBCDIC</b><br />EBCDIC (Extended Binary-Coded Decimal Interchange Code) is an IBM code for representing characters as numbers. Although it is widely used on large IBM computers, most other computers, including PCs and Macintoshes, use ASCII codes.<br /><br /><b>GNU</b><br />GNU is a UNIX-compatible software system developed by the Free Software Foundation (FSF). The philosophy behind GNU is to produce software that is non-proprietary. Anyone can download, modify and redistribute GNU software. The only restriction is that they cannot limit further redistribution. The GNU project was started in 1983 by Richard Stallman at the Massachusetts Institute of Technology.<br /><br /><b>Solaris</b><br />Solaris is an Unix-based operating environment developed by Sun Microsystems. Originally developed to run on Sun's SPARC workstations, Solaris now runs on many workstations from other vendors. 
<br />
<br />Solaris includes the SunOS operating system and a windowing system (either OpenWindows or CDE). Solaris currently supports multithreading, symmetric multiprocessing (SMP), integrated TCP/IP networking, and centralized network administration. A Wabi emulator is available to run Windows applications.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1288.html">RFC 1288</a>] The Finger User Information Protocol.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc742.html">RFC 742</a>, <a href="https://www.rfc-editor.org/rfc/rfc1194.html">RFC 1194</a>, <a href="https://www.rfc-editor.org/rfc/rfc1196.html">RFC 1196</a>.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc742.html">RFC 742</a>] NAME/FINGER.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1194.html">RFC 1194</a>, <a href="https://www.rfc-editor.org/rfc/rfc1196.html">RFC 1196</a>, <a href="https://www.rfc-editor.org/rfc/rfc1288.html">RFC 1288</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1194.html">RFC 1194</a>] The Finger User Information Protocol.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1196.html">RFC 1196</a>, <a href="https://www.rfc-editor.org/rfc/rfc1288.html">RFC 1288</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc742.html">RFC 742</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1196.html">RFC 1196</a>] The Finger User Information Protocol.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1288.html">RFC 1288</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc742.html">RFC 742</a>, <a href="https://www.rfc-editor.org/rfc/rfc1194.html">RFC 1194</a>.
                		  </div>
		  
</section>

