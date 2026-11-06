---
id: protocol-mssql
slug: mssql
name: MSSQL
expandedName: Microsoft SQL Server
origin: historical
provenance:
  source: protocols/protocol_MSSQL.htm
  sha256: 21d6922a21a6e9690f6074f09b692d48fc41b31df67e6f14d3c27de538029293
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Microsoft SQL Server
layers:
  - Application Layer
suites: []
summary:
  - label: Protocol
    html: Microsoft SQL Server
  - label: Layer
    html: Application Layer
originalUpdate: '2005-12-08 10:56:08'
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

			MS SQL Server uses a variant of SQL called T-SQL, or Transact-SQL, an implementation of SQL-92 (the ISO standard for SQL, certified in 1992) with some extensions. T-SQL mainly adds additional syntax for use in stored procedures, and affects the syntax of transactions support. (Note that SQL standards require (ACID) Atomic, Consistent, Isolated, Durable transactions.) MS SQL Server and Sybase/ASE both communicate over networks using an application-level protocol called Tabular Data Stream (TDS). The TDS protocol has also been implemented by the FreeTDS project in order to allow more kinds of client applications to communicate with MS SQL Server and Sybase databases. MS SQL Server also supports Open Database Connectivity (ODBC).
<br />
<br /><b>History</b>
<br />The code base for Microsoft SQL Server originated in Sybase SQL Server, and was Microsoft's entry to the enterprise-level database market, competing against Oracle, IBM, and Sybase. Microsoft, Sybase and Ashton-Tate teamed up to create and market the first version named SQL Server 4.2 for OS/2 (about 1989) which was essentially the same as Sybase SQL Server 4.0 on Unix, VMS, etc. Microsoft SQL Server for NT v4.2 was shipped around 1992 (available bundled with Microsoft OS/2 version 1.3) and was a simple port from OS/2 to NT. Microsoft SQL Server v6.0 was the first version of SQL Server that was architected for NT and did not include any direction from Sybase.
<br />
<br />About the time Windows NT was coming out, Sybase and Microsoft parted ways and pursued their own design and marketing schemes. Microsoft negotiated exclusive rights to all versions of SQL Server written for Microsoft operating systems. Later, Sybase changed the name of its product to Adaptive Server Enterprise to avoid confusion with Microsoft SQL Server. Until 1994 Microsoft's SQL Server carried three Sybase copyright notices as an indication of its origin.
<br />
<br />Several revisions have been done independently since with improvements for SQL Server. SQL Server 7.0 was the first true GUI based database server, and a variant of SQL Server 2000 was the first commercial database for the Intel IA64 architecture. During this time there was a rivalry between Microsoft and Oracle's servers for winning the market over enterprise customers.
<br />
<br />The current version, Microsoft SQL Server 2005, was released in November of 2005. The launch took place alongside Visual Studio 2005 and BizTalk Server 2006. The SQL Server 2005 Express edition is currently available for free download.
<br />
<br /><b>Versions for Windows</b>
<br />1993 - SQL Server 4.21 for Windows NT 
<br />1995 - SQL Server 6.0, codenamed SQL95 
<br />1996 - SQL Server 6.5, codenamed Hydra 
<br />1999 - SQL Server 7.0, codenamed Sphinx 
<br />1999 - SQL Server 7.0 OLAP, codenamed Plato 
<br />2000 - SQL Server 2000 32-bit, codenamed Shiloh 
<br />2003 - SQL Server 2000 64-bit, codenamed Liberty 
<br />2005 - SQL Server 2005, codenamed Yukon
<br />
<br /><b>Variants</b>
<br />A stripped-down version of Microsoft SQL Server known as MSDE (Microsoft SQL Server Desktop Engine) is distributed with products such as Visual Studio, Visual FoxPro, Microsoft Access, MS Web Matrix, and other products. MSDE has some restrictions: a limit of 2 GB databases, and it comes with no GUI tools to administer it. It also has a workload governor which reduces its speed once you exceed 8 concurrent workloads on the engine.
<br />
<br />Microsoft recently released the successor to MSDE, dubbed SQL Server Express. Similar to MSDE, SQL Express includes all the core functionality of SQL Server and the workload governor was removed, but places restrictions on the scale of databases. It will only utilize a single CPU, 1 GB of RAM, and imposes a maximum size of 4 GB per database (log's size doesn't count). Microsoft provides a separate download ("feature pack") for the Express edition that includes less feature rich version of Reporting Services. SQL Express also doesn't include enterprise features such as Analysis Services, Data Transformation Services, and Notification Services. Unlike MSDE, SQL Express includes a management console, called SQL Server Management Studio Express.
<br />
<br /><b>Sub Products</b>
<br />SQL Server Integration Services 
<br />SQL Server Analysis Services 
<br />SQL Server Reporting Services 
<br />SQL Server Notification Services
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
<td class="MapParent" aria-label="Parent layer protocols">TCP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>MSSQL</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>BizTalk Server</b><br />Microsoft BizTalk Server is a Microsoft tool for allowing software applications to communicate for Enterprise application integration. The original product appeared to be an original Microsoft development headed by Milan Shah and was first announced in March 1999.<br /><br /><b>CPU</b><br />CPU (central processing unit) is the brains of the computer. Sometimes referred to simply as the processor or central processor, the CPU is where most calculations take place. In terms of computing power, the CPU is the most important element of a computer system.<br /><br /><b>Client</b><br />Clinet is a program which requests services of another program. It is a client part of a client-server architecture. Typically, a client is an application that runs on a personal computer or workstation and relies on a server to perform some operations. For example, an e-mail client is an application that enables you to send and receive e-mail.<br /><br /><b>Database</b><br />A database is an organized collection of data. The term originated within the computer industry, but its meaning has been broadened by popular use, to the extent that the European Database Directive (which creates intellectual property rights for databases) includes non-electronic databases within its definition. This article is confined to a more technical use of the term; though even amongst computing professionals, some attach a much wider meaning to the word than others.<br /><br /><b>FreeTDS</b><br />FreeTDS is an open source (free software) programming library, a re-implementation of the Tabular Data Stream protocol. It can be used in place of Sybase's db-lib or ct-lib libraries. It also includes an ODBC library. It allows many open source applications such as Perl and PHP (or your own C or C++ program) to connect to Sybase ASE or Microsoft SQL Server.<br /><br /><b>GUI</b><br />GUI(Graphical User Interface) is a program interface that takes advantage of the computer's graphics capabilities to make the program easier to use. Well-designed graphical user interfaces can free the user from learning complex command languages. On the other hand, many users find that they work more effectively with a command-driven interface, especially if they already know the command language.
<br /> 
<br />Graphical user interfaces, such as Microsoft Windows and the one used by the Apple Macintosh, feature the following basic components: 
<br />*pointer-- A symbol that appears on the display screen and that you move to select objects and commands. Usually, the pointer appears as a small angled arrow. Text -processing applications, however, use an I-beam pointer that is shaped like a capital I. 
<br />*pointing device-- A device, such as a mouse or trackball, that enables you to select objects on the display screen. 
<br />*icons-- Small pictures that represent commands, files, or windows. By moving the pointer to the icon and pressing a mouse button, you can execute a command or convert the icon into a window. You can also move the icons around the display screen as if they were real objects on your desk. 
<br />*desktop-- The area on the display screen where icons are grouped is often referred to as the desktop because the icons are intended to represent real objects on a real desktop. 
<br />*windows-- You can divide the screen into different areas. In each window, you can run a different program or display a different file. You can move windows around the display screen, and change their shape and size at will. 
<br />*menus-- Most graphical user interfaces let you execute commands by selecting a choice from a menu.
<br />
<br />In addition to their visual components, graphical user interfaces also make it easier to move data from one application to another. A true GUI includes standard formats for representing text and graphics. Because the formats are well-defined, different programs that run under a common GUI can share data. This makes it possible, for example, to copy a graph created by a spreadsheet program into a document created by a word processor.<br /><br /><b>IBM</b><br />IBM (International Business Machines) is headquartered in Armonk, NY, USA. The company manufactures and sells computer hardware, software, and services.<br /><br /><b>ISO</b><br />ISO (International Organization for Standardization) is a network of the national standards institutes of 146 countries, on the basis of one member per country, with a Central Secretariat in Geneva, Switzerland, that coordinates the system. ISO has defined a number of important computer standards, the most significant of which is perhaps OSI (Open Systems Interconnection), a standardized architecture for designing networks.<br /><br /><b>MSSQL</b><br />Microsoft SQL Server is a relational database management system produced by Microsoft. It supports Microsoft's version of Structured Query Language (SQL), the most common database language. It is commonly used by businesses for small- to medium-sized databases, and - in the past five years - large enterprise databases. Microsoft SQL Server competes with other relational database products for this market segment.<br /><br /><b>Microsoft</b><br />Microsoft founded in 1975 by Paul Allen and Bill Gates, Microsoft Corporation is one of the largest and most influential companies in the personal computer industry. In addition to developing the de facto standard operating systems -- DOS and Windows -- Microsoft has a strong presence in almost every area of computer software, from programming tools to end-user applications.<br /><br /><b>Microsoft Access</b><br />Microsoft Access is a relational database management system from Microsoft, packaged with Microsoft Office Professional which combines the relational Microsoft Jet Database Engine with a graphical user interface. It can use data stored in Access/Jet, SQL Server, Oracle, or any ODBC-compliant data container.<br /><br /><b>Network</b><br />Network is a group of two or more computer systems linked together. There are many types of computer networks, including: 
<br />LANs (local-area networks), WANs (wide-area networks), CANs (campus-area networks), MANs (metropolitan-area networks) and HANs (home-area networks).
<br />
<br />In addition to these types, the following characteristics are also used to categorize different types of networks: Topology, protocol and architecture.<br /><br /><b>ODBC</b><br />ODBC (Open Database Connectivity) is a standard software API specification for using database management systems (DBMS). ODBC is designed to be independent of programming language, database system and operating system.<br /><br /><b>OS/2</b><br />OS/2 is an operating system for PCs developed originally by Microsoft Corporation and IBM, but sold and managed solely by IBM. OS/2 is compatible with DOS and Windows, which means that it can run all DOS and Windows programs.<br /><br /><b>Oracle</b><br />Oracle Corporation is the largest software company whose primary business is database products. Historically, Oracle has targeted high-end workstations and minicomputers as the server platforms to run its database systems. Its relational database was the first to support the SQL language, which has since become the industry standard.<br /><br /><b>Perl</b><br />Practical Extraction and Report Language is an interpreted procedural programming language designed by Larry Wall. Perl has a unique set of features partly borrowed from C, shell scripting (sh), awk, sed, and (to a lesser extent) many other programming languages (even Lisp).<br /><br /><b>RAM</b><br />RAM (random access memory) is a type of computer memory that can be accessed randomly; that is, any byte of memory can be accessed without touching the preceding bytes. RAM is the most common type of memory found in computers and other devices, such as printers.<br /><br /><b>SQL</b><br />SQL (Structured Query Language) is the most popular computer language used to create, modify and retrieve data from relational database management systems. The language has evolved beyond its original purpose to support object-relational database management systems. It is an ANSI/ISO standard.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>Sybase</b><br />Sybase is one of the dominant software companies in the area of database management systems (DBMS's) and client/server programming environments. Its DBMS products are branded with the Sybase name, whereas its client/server products, chiefly PowerBuilder, are branded with the name PowerSoft.<br /><br /><b>Sybase SQL Server</b><br />Sybase SQL Server was the name of Sybase Corporation's primary relational database management system product from 1987 to 1995. It was originally created for UNIX platforms in 1987. In 1988, SQL Server for OS/2 was codeveloped for the PC by Sybase, Microsoft, and Ashton-Tate. Ashton-Tate divested its interest and Microsoft became the lead partner after porting SQL Server to Windows NT.<br /><br /><b>T-SQL</b><br />T-SQL £¨Transact-SQL£© is Microsoft's and Sybase's proprietary extension to the SQL language. In order to make it more powerful, SQL has been enhanced with additional features such as:
<br />*Control-of-flow language 
<br />*Local variables 
<br />*User authentication integrated with Microsoft Windows 
<br />*Various support functions for string processing, date processing, mathematics<br /><br /><b>TDS</b><br />Tabular Data Stream (TDS) is a protocol or a set of rules describing how to transmit data between two computers. Like any protocol, it defines the types of messages that can be sent, and the order in which they may be sent. Protocols describe the "bits on the wire", specifying how data flows.<br /><br /><b>Unix</b><br />Unix or UNIX is a computer operating system originally developed in the 1960s and 1970s by a group of AT&amp;T Bell Labs employees including Ken Thompson, Dennis Ritchie, and Douglas McIlroy. Today's Unix systems are split into various branches, developed over time by AT&amp;T, several other commercial vendors, as well as several non-profit organizations.<br /><br /><b>VMS</b><br />VMS (Virtual Memory System) is a multi-user, multitasking, virtual memory operating system that runs on DEC's VAX and Alpha lines of minicomputers and workstations.<br /><br /><b>Visual FoxPro</b><br />Visual FoxPro is a data-centric object-oriented and procedural programming language produced by Microsoft. It is derived from FoxPro (originally known as FoxBASE) which was developed by Fox Software beginning in 1984; Fox Software merged with Microsoft in 1992 and the software acquired further features and the prefix "Visual".<br /><br /><b>Visual Studio</b><br />Microsoft Visual Studio is an advanced integrated development environment by Microsoft. It lets programmers create programs that run on Microsoft Windows and the World Wide Web.<br /><br />			</div>
		  
</section>

