---
id: protocol-lpd
slug: lpd
name: LPD
expandedName: Line Printer Daemon
origin: historical
provenance:
  source: protocols/protocol_LPD.htm
  sha256: 839c6ad74811ac18169428120ffa1397e3b3b352767882fda960a01458c0b4e8
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Line Printer Daemon
layers:
  - Application Layer
suites:
  - Unix
summary:
  - label: Protocol
    html: Line Printer Daemon
  - label: Protocol suite
    html: Unix
  - label: Layer
    html: Application Layer
originalUpdate: '2005-11-24 11:54:38'
rfcs:
  - 1179
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

			The Line Printer Daemon protocol (or LPR, LPD) also known as the Berkeley printing system, is a set of programs that provide printer spooling and network print server functionality for Unix-like systems. The most common implementations of LPD are the official BSD UNIX operating system and the LPRng project. The Common UNIX Printing System (or CUPS), which is more common on modern Linux distributions, borrows heavily from LPD.
<br />
<br /><b>Message formats</b>
<br />LPD is a TCP-based protocol. The port on which a line printer daemon listens is 515. The source port must be in the range 721 to 731, inclusive. A line printer daemon responds to commands send to its port. All commands begin with a single octet code, which is a binary number which represents the requested function. The code is immediately followed by the ASCII name of the printer queue name on which the function is to be performed. If there are other operands to the command, they are separated from the printer queue name with white space (ASCII space, horizontal tab, vertical tab, and form feed). The end of the command is indicated with an ASCII line feed character.
<br /><hr />
<br /><b>Daemon commands</b>
<br />The verbs in the command names should be interpreted as statements made to the daemon. Thus, the command "Print any waiting jobs" is an imperative to the line printer daemon to which it is sent. A new connection must be made for each command to be given to the daemon.
<br />
<br /><ul><li><b>Print any waiting jobs</b>
<br />This command starts the printing process if it not already running.<br /><br /></li>

<li><b>Receive a printer job</b>
<br />Receiving a job is controlled by a second level of commands. The daemon is given commands by sending them over the same connection. <br /><br /></li>

<li><b>Send queue state (short)</b>
<br />If the user names or job numbers or both are supplied then only those jobs for those users or with those numbers will be sent.<br /><br /></li>

<li><b>Send queue state (long)</b>
<br />If the user names or job numbers or both are supplied then only those jobs for those users or with those numbers will be sent.<br /><br /></li>

<li><b>Remove jobs</b>
<br />This command deletes the print jobs from the specified queue which are listed as the other operands. If only the agent is given, the command is to delete the currently active job. Unless the agent is "root", it is not possible to delete a job which is not owned by the user.  This is also the case for specifying user names instead of numbers. That is, agent "root" can delete jobs by user name but no other agents can.</li></ul>
<br />
<br /><b>Receive job subcommands</b>
<br />These commands are processed when the line printer daemon has been given the receive job command. The daemon will continue to process commands until the connection is closed.
<br />
<br />After a subcommand is sent, the client must wait for an acknowledgement from the daemon. A positive acknowledgement is an octet of zero bits. A negative acknowledgement is an octet of any other pattern.
<br />
<br />LPD clients should be able to sent the receive data file and receive control file subcommands in either order. LPD servers must be able to receive the control file subcommand first and should be able to receive the data file subcommand first.
<br /><hr />
<br /><b>Control file lines</b>
<br />Each line of the control file consists of a single, printable ASCII character which represents a function to be performed when the file is printed. Interpretation of these command characters are case- sensitive. The rest of the line after the command character is the command's operand. No leading white space is permitted after the command character. The line ends with an ASCII new line.
<br />
<br />Those commands which have a lower case letter as a command code are used to specify an actual printing request. The commands which use upper case are used to describe parametric values or background conditions.
<br />
<br />Some commands must be included in every control file. These are 'H' (responsible host) and 'P' (responsible user). Additionally, there must be at least one lower case command to produce any output.
<br />
<br /><ul><li><b>C - Class for banner page</b>
<br />This command sets the class name to be printed on the banner page. The name must be 31 or fewer octets. The name can be omitted. If it is, the name of the host on which the file is printed will be used. The class is conventionally used to display the host from which the printing job originated. It will be ignored unless the print banner command ('L') is also used.<br /><br /></li>

<li><b>H - Host name</b>
<br />This command specifies the name of the host which is to be treated as the source of the print job. The command must be included in the control file. The name of the host must be 31 or fewer octets.<br /><br /></li>

<li><b>I - Indent Printing</b>
<br />This command specifies that, for files which are printed with the 'f', of columns given. (It is ignored for other output generating commands.) The identing count operand must be all decimal digits.<br /><br /></li>

<li><b>J - Job name for banner page</b>
<br />This command sets the job name to be printed on the banner page. The name of the job must be 99 or fewer octets. It can be omitted. The job name is conventionally used to display the name of the file or files which were "printed". It will be ignored unless the print banner command ('L') is also used.<br /><br /></li>

<li><b>L - Print banner page</b>
<br />This command causes the banner page to be printed. The user name can be omitted. The class name for banner page and job name for banner page commands must precede this command in the control file to be effective.<br /><br /></li>

<li><b>M - Mail When Printed</b>
<br />This entry causes mail to be sent to the user given as the operand at the host specified by the 'H' entry when the printing operation ends (successfully or unsuccessfully).<br /><br /></li>

<li><b>N - Name of source file</b>
<br />This command specifies the name of the file from which the data file was constructed. It is returned on a query and used in printing with the 'p' command when no title has been given. It must be 131 or fewer octets.<br /><br /></li>

<li><b>P - User identification</b>
<br />This command specifies the user identification of the entity requesting the printing job. This command must be included in the control file. The user identification must be 31 or fewer octets.<br /><br /></li>

<li><b>S - Symbolic link data</b>
<br />This command is used to record symbolic link data on a Unix system so that changing a file's directory entry after a file is printed will not print the new file. It is ignored if the data file is not symbolically linked.<br /><br /></li>

<li><b>T - Title for pr</b>
<br />This command provides a title for a file which is to be printed with either the 'p' command. (It is ignored by all of the other printing commands.) The title must be 79 or fewer octets.<br /><br /></li>

<li><b>U - Unlink data file</b>
<br />This command indicates that the specified file is no longer needed. This should only be used for data files.<br /><br /></li>

<li><b>W - Width of output</b>
<br />This command limits the output to the specified number of columns for the 'f', 'l', and 'p' commands. It is ignored for other output generating commands.) The width count operand must be all decimal digits. It may be silently reduced to some lower value. The default value for the width is 132.<br /><br /></li>

<li><b>1 - troff R font</b>
<br />This command specifies the file name for the troff R font. This is the font which is printed using Times Roman by default.<br /><br /></li>

<li><b>2 - troff I font</b>
<br />This command specifies the file name for the troff I font. This is the font which is printed using Times Italic by default.<br /><br /></li>

<li><b>3 - troff B font</b>
<br />This command specifies the file name for the troff B font. This is the font which is printed using Times Bold by default.<br /><br /></li>

<li><b>4 - troff S font</b>
<br />This command specifies the file name for the troff S font. This is the font which is printed using Special Mathematical Font by default.<br /><br /></li>

<li><b>c - Plot CIF file</b>
<br />This command causes the data file to be plotted, treating the data as CIF (CalTech Intermediate Form) graphics language. <br /><br /></li>

<li><b>d - Print DVI file</b>
<br />This command causes the data file to be printed, treating the data as DVI (TeX output).<br /><br /></li>

<li><b>f - Print formatted file</b>
<br />This command cause the data file to be printed as a plain text file, providing page breaks as necessary. Any ASCII control characters which are not in the following list are discarded: HT, CR, FF, LF, and BS.<br /><br /></li>

<li><b>g - Plot file</b>
<br />This command causes the data file to be plotted, treating the data as output from the Berkeley Unix plot library. <br /><br /></li>

<li><b>k</b> - Reserved for use by Kerberized LPR clients and servers.<br /><br /></li>

<li><b>l - Print file leaving control characters</b>
<br />This command causes the specified data file to printed without filtering the control characters (as is done with the 'f' command).<br /><br /></li>

<li><b>n - Print ditroff output file</b>
<br />This command prints the data file to be printed, treating the data as ditroff output.<br /><br /></li>

<li><b>o - Print Postscript output file</b>
<br />This command prints the data file to be printed, treating the data as standard Postscript input.<br /><br /></li>

<li><b>p - Print file with 'pr' format</b>
<br />This command causes the data file to be printed with a heading, page numbers, and pagination. The heading should include the date and time that printing was started, the title, and a page number identifier followed by the page number. The title is the name of file as specified by the 'N' command, unless the 'T' command (title) has been given. After a page of text has been printed, a new page is started with a new page number. (There is no way to specify the length of the page.)<br /><br /></li>

<li><b>r - File to print with FORTRAN carriage control</b>
<br />This command causes the data file to be printed, interpreting the first column of each line as FORTRAN carriage control. The FORTRAN standard limits this to blank, "1", "0", and "+" carriage controls. Most FORTRAN programmers also expect "-" (triple space) to work as well.<br /><br /></li>

<li><b>t - Print troff output file</b>
<br />This command prints the data file as Graphic Systems C/A/T phototypesetter input. This is the standard output of the Unix "troff" command.<br /><br /></li>

<li><b>v - Print raster file</b>
<br />This command prints a Sun raster format file.</li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>LPD</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>ASCII</b><br />ASCII (American Standard Code for Information Interchange) is the most common format for text files in computers and on the Internet. In an ASCII file, each alphabetic, numeric, or special character is represented with a 7-bit binary number (a string of seven 0s or 1s). 128 possible characters are defined. 
<br />
<br />Unix and DOS-based operating systems use ASCII for text files. Windows NT and 2000 uses a newer code, Unicode. IBM's S/390 systems use a proprietary 8-bit code called EBCDIC. Conversion programs allow different operating systems to change a file from one code to another. 
<br />
<br />ASCII was developed by the American National Standards Institute (ANSI).<br /><br /><b>BSD</b><br />BSD (Berkeley Software Distribution) is the Unix derivative distributed by the University of California, Berkeley starting in the 1970s. The name is also used collectively for the modern descendants of these distributions.<br /><br /><b>Binary</b><br />Binary is pertaining to a number system that has just two unique digits. For most purposes, we use the decimal number system, which has ten unique digits, 0 through 9. All other numbers are then formed by combining these ten digits. Computers are based on the binary numbering system, which consists of just two unique numbers, 0 and 1. All operations that are possible in the decimal system (addition, subtraction, multiplication, division) are equally possible in the binary system.<br /><br /><b>Client</b><br />Clinet is a program which requests services of another program. It is a client part of a client-server architecture. Typically, a client is an application that runs on a personal computer or workstation and relies on a server to perform some operations. For example, an e-mail client is an application that enables you to send and receive e-mail.<br /><br /><b>Code</b><br />Written computer instructions. The term code is somewhat colloquial. For example, a programmer might say: "I wrote a lot of code this morning" or "There's one piece of code that doesn't work." 
<br />
<br />Code can appear in a variety of forms. The code that a programmer writes is called source code. After it has been compiled, it is called object code. Code that is ready to run is called executable code or machine code.<br /><br /><b>Command</b><br />Command is an instruction to a computer or device to perform a specific task. Commands come in different forms. They can be: special words (keywords) that a program understands, function keys 
<br />choices in a menu and buttons or other graphical objects on your screen 
<br />
<br />Every program that interacts with people responds to a specific set of commands. The set of commands and the syntax for entering them is called the user interface and varies from one program to another.<br /><br /><b>Daemon</b><br />Daemon is a process that runs in the background and performs a specified operation at predefined times or in response to certain events. The term daemon is a UNIX term, though many other operating systems provide support for daemons, though they're sometimes called other names. Windows, for example, refers to daemons as System Agents and services. Typical daemon processes include print spoolers, e-mail handlers, and other programs that perform administrative tasks for the operating system. The term comes from Greek mythology, where daemons were guardian spirits.<br /><br /><b>Data</b><br />* Distinct pieces of information, usually formatted in a special way. All software is divided into two general categories: data and programs. Programs are collections of instructions for manipulating data. Data can exist in a variety of forms -- as numbers or text on pieces of paper, as bits and bytes stored in electronic memory, or as facts stored in a person's mind. Strictly speaking, data is the plural of datum, a single piece of information. In practice, however, people use data as both the singular and plural form of the word. 
<br />
<br />* The term data is often used to distinguish binary machine-readable information from textual human-readable information. For example, some applications make a distinction between data files (files that contain binary data) and text files (files that contain ASCII data). 
<br />
<br />* In database management systems, data files are the files that store the database information, whereas other files, such as index files and data dictionaries, store administrative information, known as metadata.<br /><br /><b>LPD</b><br />LPD (Line printer daemon/line printer remote) is a printer protocol that uses TCP/IP to establish connections between printers and workstations on a network. The technology was developed originally for BSD UNIX and has since become the de facto cross-platform printing protocol.<br /><br /><b>LPRng</b><br />The application LPRng is an implementation of the Line Printer Daemon protocol (commonly known as the Berkeley printing system or LPR/LPD) that provides printer spooling and network print server functionality. It is an open-source project hosted on SourceForge and implemented by many open-source Unix-like operating systems.<br /><br /><b>Line printer</b><br />The Line printer is a form of high speed impact printer in which a line of type is printed at a time. Printed type is set at fixed positions and a line could consist of any number of character positions but 80 column, 128 column and 160 column variants were common.<br /><br /><b>Octet</b><br />An octet is 8 bits. It is equivalent to a byte, as long as the byte is also 8 bits. Bytes range from 4 - 10 bits, but octets are always 8 bits.<br /><br /><b>Port</b><br />Port is an interface on a computer to which you can connect a device. Personal computers have various types of ports. Internally, there are several ports for connecting disk drives, display screens, and keyboards. Externally, personal computers have ports for connecting modems, printers, mice, and other peripheral devices. 
<br />
<br />Almost all personal computers come with a serial RS-232C port or RS-422 port for connecting a modem or mouse and a parallel port for connecting a printer. On PCs, the parallel port is a Centronics interface that uses a 25-pin connector. SCSI (Small Computer System Interface) ports support higher transmission speeds than do conventional ports and enable you to attach up to seven devices to the same port.<br /><br /><b>Process</b><br />(n) An executing program. The term is used loosely as a synonym of task. 
<br />(v) To perform some useful operations on data.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>Spooling</b><br />Spooling is an acronym for simultaneous peripheral operations on-line (although this is thought by some to be a backronym). It refers to putting jobs in a buffer, a special area in memory, or on a disk where a device can access them when it is ready. This is similar to a sewing machine spool, which a person puts thread onto, and a machine pulls at its convenience.<br /><br /><b>TCP</b><br />TCP (Transmission Control Protocol) is one of the main protocols in TCP/IP networks. TCP is one of the main protocols in TCP/IP networks. Whereas the IP protocol deals only with packets, TCP enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and also guarantees that packets will be delivered in the same order in which they were sent.<br /><br /><b>Unix</b><br />Unix or UNIX is a computer operating system originally developed in the 1960s and 1970s by a group of AT&amp;T Bell Labs employees including Ken Thompson, Dennis Ritchie, and Douglas McIlroy. Today's Unix systems are split into various branches, developed over time by AT&amp;T, several other commercial vendors, as well as several non-profit organizations.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1179.html">RFC 1179</a>] Line printer daemon protocol.
                		  </div>
		  
</section>

