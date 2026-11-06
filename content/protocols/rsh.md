---
id: protocol-rsh
slug: rsh
name: RSH
expandedName: Remote Shell Protocol
origin: historical
provenance:
  source: protocols/protocol_RSH.htm
  sha256: caf4c9227a700b0b6d9f73cb60d993cde7d58b615b6afe63d3898adb082dcb98
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Remote Shell Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Remote Shell Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
originalUpdate: '2005-12-07 17:01:03'
rfcs: []
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
editorialNotes: []
---
<section aria-labelledby="description">
<h2 id="description">Description</h2>

			RSH £¨Remote Shell Protocol Protocol£©allows a user to execute commands on a remote system without having to log in to the system. For example, RSH can be used to remotely examine the status of a number of access servers without connecting to each communication server, executing the command, and then disconnecting from the communication server.
<br />
<br />RSH (remote shell) is a command line computer program which can execute shell commands as another user, and on another computer across a computer network. The remote system on which the RSH executes the command needs to be running the RSHD daemon.
<br />
<br />RSH originated as part of the unix operating system, along with rcp, as part of the rlogin package on Berkeley Software Distribution version 4.2 in 1983. RSH has since been ported to other operating systems.
<br />
<br />As described in the rlogin article, the rsh protocol is not secure for network use, because it sends unencrypted information over the network, among other things. Some implementations also authenticate by sending unencrypted passwords over the network. rsh has largely been replaced by the very similar SSH (secure shell) program on untrusted networks like the internet.
<br />
<br />As an example of RSH use, the following executes the command mkdir testdir as user remote user on the computer remote computer:
<br />
<br />rsh -l remote user remote computer "mkdir testdir"
<br />After the command has finished RSH terminates. If no command is specified then rsh will log in on the remote system using rlogin.
<br /><hr />
<br /><b>RSH executes command on host</b>
<br />RSH copies its standard input to the remote command, the standard output of the remote command to its standard output, and the standard error of the remote command to its standard error. Interrupt, quit and terminate signals are propagated to the remote command; rsh normally terminates when the remote command does. The options are as follows:
<br /><ul><li><b>-d</b>
<br />The -d option turns on socket debugging (using setsockopt(2)) on the TCP sockets used for communication with the remote host.<br /><br /></li>

<li><b>-l</b>
<br />By default, the remote username is the same as the local username. The -l option allows the remote name to be specified.<br /><br /></li>

<li><b>-n</b>
<br />The -n option redirects input from the special device /dev/null (see the BUGS section of this manual page).</li></ul>
<br />
<br />If no command is specified, you will be logged in on the remote host using rlogin.
<br />
<br />Shell metacharacters which are not quoted are interpreted on local machine, while quoted metacharacters are interpreted on the remote machine. For example, the command
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">   rsh otherhost cat remotefile &gt;&gt; localfile

appends the remote file remotefile to the local file localfile, while
   rsh otherhost cat remotefile "&gt;&gt;" other_remotefile

appends remotefile to other_remotefile.</pre>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1</b>

To check the amount of free disk space on a remote host (the local host, host1, is 
listed in the /etc/hosts.equiv file at the remote host, host2), enter: 

          rsh host2 df

The amount of free disk space on host2 is displayed on the local system.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2</b>

To append a remote file to another file on the remote host, place the ¡°&gt;&gt;¡± 
metacharacters in quotation marks (the local host, host1, is listed in the 
/etc/hosts.equiv file at the remote host, host2), and enter: 

          rsh host2 cat test1 "&gt;&gt;" test2

The file test1 is appended to test2 on remote host host2.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3</b>

To append a remote file at the remote host to a local file ((the local host, host1, is 
listed in the /etc/hosts.equiv file at the remote host, host2)), omit the quotation 
marks, and enter: 

          rsh host2 cat test2 &gt;&gt; test3

The remote file test2 on host2 is appended to the local file test3.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 4" tabindex="0"><b>Example 4</b>

To append a remote file to a local file and use a remote user's permissions at the 
remote host (the local host, host1, is listed in the /etc/hosts.equiv file at the 
remote host, host2), enter: 

         rsh host2  -l jane cat test4 &gt;&gt; test5

The remote file test4 is appended to the local file test5 at the remote host, with user 
jane's permissions.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 5" tabindex="0"><b>Example 5</b>

This example shows how the root user can issue an rcp on a remote host when the 
authentication is Kerberos 4 on both the target and server. The root user must be in 
the authentication database and must have already issued kinit on the local host. 
The command is issued at the local host to copy the file, stuff, from node r05n07 to 
node r05n05 on an SP. 

         /usr/lpp/ssp/rcmd/bin/rsh r05n07 'export KRBTKTFILE=/tmp/rcmdtkt$$; 
         /usr/lpp/ssp/rcmd/bin/rcmdtgt; 
         /usr/lpp/ssp/rcmd/bin/rcp /tmp/stuff r05n05:/tmp/stuff;'

The root user sets the KRBTKTFILE environment variable to the name of a temporary 
ticket-cache file and then obtains a service ticket by issuing the rcmdtgt command. 
The rcp uses the service ticket to authenticate from host r05n07 to host r05n05.</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>RSH</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Authentication</b><br />The process of identifying an individual, usually based on a username and password. In security systems, authentication is distinct from authorization , which is the process of giving individuals access to system objects based on their identity. Authentication merely ensures that the individual is who he or she claims to be, but says nothing about the access rights of the individual.<br /><br /><b>Command</b><br />Command is an instruction to a computer or device to perform a specific task. Commands come in different forms. They can be: special words (keywords) that a program understands, function keys 
<br />choices in a menu and buttons or other graphical objects on your screen 
<br />
<br />Every program that interacts with people responds to a specific set of commands. The set of commands and the syntax for entering them is called the user interface and varies from one program to another.<br /><br /><b>Daemon</b><br />Daemon is a process that runs in the background and performs a specified operation at predefined times or in response to certain events. The term daemon is a UNIX term, though many other operating systems provide support for daemons, though they're sometimes called other names. Windows, for example, refers to daemons as System Agents and services. Typical daemon processes include print spoolers, e-mail handlers, and other programs that perform administrative tasks for the operating system. The term comes from Greek mythology, where daemons were guardian spirits.<br /><br /><b>Login</b><br />Alternative spellings for login are log in and log on.<br /><br /><b>OS</b><br />The most important program that runs on a computer. Every general-purpose computer must have an operating system to run other programs. Operating systems perform basic tasks, such as recognizing input from the keyboard, sending output to the display screen, keeping track of files and directories on the disk, and controlling peripheral devices such as disk drives and printers.<br /><br /><b>Password</b><br />A secret series of characters that enables a user to access a file, computer, or program. On multi-user systems, each user must enter his or her password before the computer will respond to commands. The password helps ensure that unauthorized users do not access the computer. In addition, data files and programs may require a password.<br /><br /><b>RSH</b><br />RSH (Remote shell) is one of an entire family of remote UNIX style commands. The UNIX copy command, cp, becomes rcp.<br /><br /><b>Rcp</b><br />Rcp is a command on UNIX operating systems that is used to remote copy a file. That is, to copy one or more files from one computer system to another. It typically uses the TCP/IP protocol, but can use kerberos for authentication.<br /><br /><b>Remote</b><br />In networks, remote refers to files, devices, and other resources that are not connected directly to your workstation. Resources at your workstation are considered local.<br /><br /><b>Rlogin</b><br />Rlogin (remote login) is a Unix command that allows an authorized user to login to other UNIX machines (hosts) on a network and to interact as if the user were physically at the host computer. Once logged in to the host, the user can do anything that the host has given permission for, such as read, edit, or delete files.<br /><br /><b>SSH</b><br />SSH (Secure Shell) is both a computer program and an associated network protocol designed for logging into and executing commands on a networked computer. Users of SSH can also use it for tunneling, forwarding arbitrary TCP ports and X11 connections over the resultant secure channel; and can transfer files using the associated SFTP or SCP protocols. An ssh server, by default, listens on the standard TCP port 22.<br /><br /><b>Unix</b><br />Unix or UNIX is a computer operating system originally developed in the 1960s and 1970s by a group of AT&amp;T Bell Labs employees including Ken Thompson, Dennis Ritchie, and Douglas McIlroy. Today's Unix systems are split into various branches, developed over time by AT&amp;T, several other commercial vendors, as well as several non-profit organizations.<br /><br /><b>User</b><br />User is an individual who uses a computer. This includes expert programmers as well as novices. An end user is any individual who runs an application program.<br /><br />			</div>
		  
</section>

