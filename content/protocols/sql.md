---
id: protocol-sql
slug: sql
name: SQL
expandedName: Structured Query Language
origin: historical
provenance:
  source: protocols/protocol_SQL.htm
  sha256: 51a77c2eb25f5ba092b0ec15732f743d6bf4f21786ecb6e29329d072061b5072
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Structured Query Language
layers:
  - Data Link Layer
suites: []
summary:
  - label: Protocol
    html: Structured Query Language
  - label: Layer
    html: Data Link Layer
originalUpdate: '2005-12-06 16:18:52'
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

			SQL is a standardized query language for requesting information from a database. The original version called SEQUEL (structured English query language) was designed by an IBM research center in 1974 and 1975. SQL was first introduced as a commercial database system in 1979 by Oracle Corporation. 
<br />
<br />Historically, SQL has been the favorite query language for database management systems running on minicomputers and mainframes. Increasingly, however, SQL is being supported by PC database systems because it supports distributed databases (databases that are spread out over several computer systems). This enables several users on a local-area network to access the same database simultaneously. 
<br />
<br /><b>History</b>
<br />During the 1970s, a group at IBM's San Jose research center developed a database system "System R" based upon Codd's model. Structured English Query Language ("SEQUEL") was designed to manipulate and retrieve data stored in System R.
<br />
<br />The first non-commercial non-SQL relational database was developed in 1974.(Ingres from U.C. Berkeley.) In 1978, methodical testing commenced at customer test sites. Demonstrating both the usefulness and practicality of the system, this testing proved to be a success for IBM.
<br />
<br />SQL was adopted as a standard by the ANSI (American National Standards Institute) in 1986 and ISO (International Organization for Standardization) in 1987. ANSI has declared that the official pronunciation for SQL is /Es_kju_El/, although many English-speaking database professionals still pronounce it as sequel. Another widespread misconception is that "SQL" is an initialism that stands for "Structured Query Language"
<br />
<br />The SQL standard has gone through a number of revisions:
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>Year</td><td>Name</td><td>Alias</td><td>Comments</td></tr><tr><td>1986</td><td>SQL-86</td><td>SQL-87</td><td>First published by ANSI. Ratified by ISO in 1987</td></tr><tr><td>1989</td><td>SQL-89</td><td> </td><td>Minor revision</td></tr><tr><td>1992</td><td>SQL-92</td><td>SQL2</td><td>Major revision</td></tr><tr><td>1999</td><td>SQL:1999</td><td>SQL3</td><td>Added regular expression matching, recursive queries, triggers, non-scalar types and some object-oriented features. (The last two are somewhat controversial and not yet widely supported.)</td></tr><tr><td>2003</td><td>SQL:2003</td><td> </td><td>Introduced XML-related features, window functions, standardized sequences and columns with auto-generated values (including identity-columns)</td></tr></tbody></table></div></div>
<br />
<br />The SQL standard is not freely available. SQL:2003 may be purchased from ISO or ANSI. A late draft is available as a zip archive from Whitemarsh Information Systems Corporation. The zip archive contains a number of PDF files that define the parts of the SQL:2003 specification.
<br />
<br />Although SQL is defined by both ANSI and ISO, there are many extensions to and variations on the version of the language defined by these standards bodies. Many of these extensions are of a proprietary nature, such as Oracle Corporation's PL/SQL or Sybase, IBM's SQL PL(SQL Procedural Language) and Microsoft's Transact-SQL. It is also not uncommon for commercial implementations to omit support for basic features of the standard, such as the DATE or TIME data types, preferring some variant of their own. As a result, in contrast to ANSI C or ANSI Fortran, which can usually be ported from platform to platform without major structural changes, SQL code can rarely be ported between database systems without major modifications. There are several reasons for this lack of portability between database systems:
<br />
<br /><ul><li>the complexity and size of the SQL standard means that most databases do not implement the entire standard. <br /></li>
<li>the standard does not specify database behavior in several important areas (e.g. indexes), leaving it up to implementations of the standard to decide how to behave. <br /></li>
<li>the SQL standard precisely specifies the syntax that a conformant database system must implement. However, the standard's specification of the semantics of language constructs is less well-defined, leading to areas of ambiguity. <br /></li>
<li>many database vendors have large existing customer bases; where the SQL standard conflicts with the prior behavior of the vendor's database, the vendor may be unwilling to break backward compatibility. <br /></li>
<li>some believe the lack of compatibility between database systems is intentional in order to ensure vendor lock-in.</li></ul>
<br />
<br />SQL is designed for a specific, limited purpose ¡ª querying data contained in a relational database. As such, it is a set-based, declarative computer language rather than an imperative language such as C or BASIC which, being programming languages, are designed to solve a much broader set of problems. Language extensions such as PL/SQL are designed to address this by turning SQL into a full-fledged programming language while maintaining the advantages of SQL. Another approach is to allow programming language code to be embedded in and interact with the database. For example, Oracle and others include Java in the database, while PostgreSQL allows functions to be written in a wide variety of languages, including Perl, Tcl, and C.
<br />
<br />SQL contrasts with the more powerful database-oriented fourth-generation programming languages such as Focus or SAS, however, in its relative functional simplicity and simpler command set. This greatly reduces the degree of difficulty involved in maintaining SQL source code, but it also makes programming such questions as 'Who had the top ten scores?' more difficult, leading to the development of procedural extensions, discussed above. However, it also makes it possible for SQL source code to be produced (and optimized) by software, leading to the development of a number of natural language database query languages, as well as 'drag and drop' database programming packages with 'object oriented' interfaces. Often these allow the resultant SQL source code to be examined, for educational purposes, further enhancement, or to be used in a different environment.
<br /><hr />
<br /><b>SQL Modules</b>
<br />The second technique for sending SQL statements to the DBMS is through modules. Briefly, a module consists of a group of procedures, which are called from the host programming language. Each procedure contains a single SQL statement, and data is passed to and from the procedure through parameters.
<br />
<br />A module can be thought of as an object library that is linked to the application code. However, exactly how the procedures and the rest of the application are linked is implementation-dependent. For example, the procedures could be compiled into object code and linked directly to the application code, they could be compiled and stored on the DBMS and calls to access plan identifiers placed in the application code, or they could be interpreted at run time.
<br />
<br />The main advantage of modules is that they cleanly separate SQL statements from the programming language. In theory, it should be possible to change one without changing the other and simply relink them.
<br />
<br /><b>Processing an SQL Statement</b>
<br />The steps involved are common to all three techniques, although each technique performs them at different times. The following illustration shows the steps involved in processing an SQL statement, which are discussed throughout the rest of this section.
<br />
<br /><img src="/supporting/images/Process.gif" alt="Process.gif" />
<br />
<br />To process an SQL statement, a DBMS performs the following five steps: 
<br /><ul><li>The DBMS first parses the SQL statement. It breaks the statement up into individual words, called tokens, makes sure that the statement has a valid verb and valid clauses, and so on. Syntax errors and misspellings can be detected in this step. <br /><br /></li>

<li>The DBMS validates the statement. It checks the statement against the system catalog. Do all the tables named in the statement exist in the database? Do all of the columns exist and are the column names unambiguous? Does the user have the required privileges to execute the statement? Certain semantic errors can be detected in this step. <br /><br /></li>

<li>The DBMS generates an access plan for the statement. The access plan is a binary representation of the steps that are required to carry out the statement; it is the DBMS equivalent of executable code. <br /><br /></li>

<li>The DBMS optimizes the access plan. It explores various ways to carry out the access plan. Can an index be used to speed a search? Should the DBMS first apply a search condition to Table A and then join it to Table B, or should it begin with the join and use the search condition afterward? Can a sequential search through a table be avoided or reduced to a subset of the table? After exploring the alternatives, the DBMS chooses one of them. <br /><br /></li>

<li>The DBMS executes the statement by running the access plan.</li></ul>
<br />
<br />The steps used to process an SQL statement vary in the amount of database access they require and the amount of time they take. Parsing an SQL statement does not require access to the database and can be done very quickly. Optimization, on the other hand, is a very CPU-intensive process and requires access to the system catalog. For a complex, multitable query, the optimizer may explore thousands of different ways of carrying out the same query. However, the cost of executing the query inefficiently is usually so high that the time spent in optimization is more than regained in increased query execution speed. This is even more significant if the same optimized access plan can be used over and over to perform repetitive queries.
<br /><hr />
<br /><b>Embedded SQL</b>
<br />The first technique for sending SQL statements to the DBMS is embedded SQL. Because SQL does not use variables and control-of-flow statements, it is often used as a database sublanguage that can be added to a program written in a conventional programming language, such as C or COBOL. This is a central idea of embedded SQL: placing SQL statements in a program written in a host programming language. Briefly, the following techniques are used to embed SQL statements in a host language:
<br />
<br /><ul><li>Embedded SQL statements are processed by a special SQL precompiler. All SQL statements begin with an introducer and end with a terminator, both of which flag the SQL statement for the precompiler. The introducer and terminator vary with the host language. For example, the introducer is "EXEC SQL" in C and "&amp;SQL(" in MUMPS, and the terminator is a semicolon (;) in C and a right parenthesis in MUMPS. <br /><br /></li>

<li>Variables from the application program, called host variables, can be used in embedded SQL statements wherever constants are allowed. These can be used on input to tailor an SQL statement to a particular situation and on output to receive the results of a query. <br /><br /></li>

<li>Queries that return a single row of data are handled with a singleton SELECT statement; this statement specifies both the query and the host variables in which to return data. <br /><br /></li>

<li>Queries that return multiple rows of data are handled with cursors. A cursor keeps track of the current row within a result set. The DECLARE CURSOR statement defines the query, the OPEN statement begins the query processing, the FETCH statement retrieves successive rows of data, and the CLOSE statement ends query processing. <br /><br /></li>

<li>While a cursor is open, positioned update and positioned delete statements can be used to update or delete the row currently selected by the cursor.</li></ul>
<br />
<br /><b>Call-Level Interfaces</b>
<br />The final technique for sending SQL statements to the DBMS is through a call-level interface (CLI). A call-level interface provides a library of DBMS functions that can be called by the application program. Thus, instead of trying to blend SQL with another programming language, a call-level interface is similar to the routine libraries most programmers are accustomed to using, such as the string, I/O, or math libraries in C. Note that DBMSs that support embedded SQL already have a call-level interface, the calls to which are generated by the precompiler. However, these calls are undocumented and subject to change without notice.
<br />
<br />Call-level interfaces are commonly used in client/server architectures, in which the application program (the client) resides on one computer and the DBMS (the server) resides on a different computer. The application calls CLI functions on the local system, and those calls are sent across the network to the DBMS for processing.
<br />
<br />A call-level interface is similar to dynamic SQL, in that SQL statements are passed to the DBMS for processing at run time, but it differs from embedded SQL as a whole in that there are no embedded SQL statements and no precompiler is required.
<br />
<br />Using a call-level interface typically involves the following steps: 
<br /><ul><li>The application calls a CLI function to connect to the DBMS. <br /><br /></li>

<li>The application builds an SQL statement and places it in a buffer. It then calls one or more CLI functions to send the statement to the DBMS for preparation and execution. <br /><br /></li>

<li>If the statement is a SELECT statement, the application calls a CLI function to return the results in application buffers. Typically, this function returns one row or one column of data at a time. <br /><br /></li>

<li>The application calls a CLI function to disconnect from the DBMS.</li></ul>
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
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>SQL</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>4GL</b><br />4GL (Fourth-generation programming language) is a programming language designed with a specific purpose in mind, such as the development of commercial business software. Such languages arose after the introduction of modern, block-structured third-generation programming languages, which improved the process of software development.<br /><br /><b>ANSI</b><br />ANSI (American National Standards Institute) founded in 1918, ANSI is a voluntary organization composed of over 1,300 members (including all the large computer companies) that creates standards for the computer industry.<br /><br /><b>BASIC</b><br />BASIC (Beginner's All-purpose Symbolic Instruction Code) developed by John Kemeney and Thomas Kurtz in the mid 1960s at Dartmouth College, BASIC is one of the earliest and simplest high-level programming languages. During the 1970s, it was the principal programming language taught to students, and continues to be a popular choice among educators.<br /><br /><b>Computer language</b><br />Computer language is a language used by, or in association with, computers. Often, the term is used synonymously with programming language, but in general a computer language need not be a programming language.<br /><br /><b>Database</b><br />A database is an organized collection of data. The term originated within the computer industry, but its meaning has been broadened by popular use, to the extent that the European Database Directive (which creates intellectual property rights for databases) includes non-electronic databases within its definition. This article is confined to a more technical use of the term; though even amongst computing professionals, some attach a much wider meaning to the word than others.<br /><br /><b>Distributed database</b><br />Distributed database is a database that consists of two or more data files located at different sites on a computer network. Because the database is distributed, different users can access it without interfering with one another. However, the DBMS must periodically synchronize the scattered databases to make sure that they all have consistent data.<br /><br /><b>Drag-and-drop</b><br />Drag-and-drop is the action of (or support for the action of) clicking on a virtual object and dragging it to a different location or onto another virtual object. In general, it can be used to invoke many kinds of actions, or create various types of associations between two abstract objects.<br /><br /><b>FOCUS</b><br />FOCUS is a software product of Information Builders Inc. Originally developed for data handling and analysis on the IBM mainframe, as newer systems were developed and smaller computers became more powerful, the available platforms for FOCUS were extended all the way down to personal computers and in 1997, to the Web in the WebFOCUS product.<br /><br /><b>Fortran</b><br />Fortran (also FORTRAN) is a statically typed, compiled (sometimes interpreted), imperative, computer programming language originally developed in the 1950s and still heavily used for scientific computing and numerical computation half a century later.<br /><br /><b>IBM</b><br />IBM (International Business Machines) is headquartered in Armonk, NY, USA. The company manufactures and sells computer hardware, software, and services.<br /><br /><b>ISO</b><br />ISO (International Organization for Standardization) is a network of the national standards institutes of 146 countries, on the basis of one member per country, with a Central Secretariat in Geneva, Switzerland, that coordinates the system. ISO has defined a number of important computer standards, the most significant of which is perhaps OSI (Open Systems Interconnection), a standardized architecture for designing networks.<br /><br /><b>Imperative languages</b><br />Imperative programming languages stand in contrast to other types of languages, such as functional and logical programming languages. Functional programming languages, such as Haskell, are not a sequence of statements and have no global state like imperative languages do.<br /><br /><b>Java</b><br />Java is an object-oriented programming language developed initially by James Gosling and colleagues at Sun Microsystems. Initially called Oak (named after the oak trees outside Gosling's office), it was intended to replace C++, although the feature set better resembles that of Objective-C.<br /><br /><b>LAN</b><br />Local-area network (LAN) is a computer network that spans a relatively small area. Most LANs are confined to a single building or group of buildings. However, one LAN can be connected to other LANs over any distance via telephone lines and radio waves. A system of LANs connected in this way is called a wide-area network (WAN). 
<br />
<br />Most LANs connect workstations and personal computers. Each node (individual computer ) in a LAN has its own CPU with which it executes programs, but it also is able to access data and devices anywhere on the LAN. This means that many users can share expensive devices, such as laser printers, as well as data. Users can also use the LAN to communicate with each other, by sending e-mail or engaging in chat sessions.<br /><br /><b>Mainframe</b><br />Mainframe is a very large and expensive computer capable of supporting hundreds, or even thousands, of users simultaneously. In the hierarchy that starts with a simple microprocessor (in watches, for example) at the bottom and moves to supercomputers at the top, mainframes are just below supercomputers.<br /><br /><b>Microsoft</b><br />Microsoft founded in 1975 by Paul Allen and Bill Gates, Microsoft Corporation is one of the largest and most influential companies in the personal computer industry. In addition to developing the de facto standard operating systems -- DOS and Windows -- Microsoft has a strong presence in almost every area of computer software, from programming tools to end-user applications.<br /><br /><b>Oracle</b><br />Oracle Corporation is the largest software company whose primary business is database products. Historically, Oracle has targeted high-end workstations and minicomputers as the server platforms to run its database systems. Its relational database was the first to support the SQL language, which has since become the industry standard.<br /><br /><b>PDF</b><br />PDF (Portable Document Format) is a file format developed by Adobe Systems for representing documents in a manner that is independent of the original application software, hardware, and operating system used to create those documents.<br /><br /><b>PL/SQL</b><br />PL/SQL (Procedural Language/Structured Query Language) is Oracle Corporation's proprietary server-based procedural extension to the SQL database language.<br /><br /><b>Perl</b><br />Practical Extraction and Report Language is an interpreted procedural programming language designed by Larry Wall. Perl has a unique set of features partly borrowed from C, shell scripting (sh), awk, sed, and (to a lesser extent) many other programming languages (even Lisp).<br /><br /><b>Programming language</b><br />Programming language or computer language is a standardized communication technique for expressing instructions to a computer. It is a set of syntactic and semantic rules used to define computer programs.<br /><br /><b>Query language</b><br />Query languages are computer languages used to make queries into databases and information systems. Broadly, query languages may be classified according to whether they are database query languages or information retrieval query languages.<br /><br /><b>SAS</b><br />The SAS System, originally Statistical Analysis System, is an integrated system of software products provided by the SAS Institute. n addition, the SAS System integrates with many SAS business solutions that enable large scale software solutions for areas such as human resource management, financial management, and more.<br /><br /><b>SQL</b><br />SQL (Structured Query Language) is the most popular computer language used to create, modify and retrieve data from relational database management systems. The language has evolved beyond its original purpose to support object-relational database management systems. It is an ANSI/ISO standard.<br /><br /><b>Tcl</b><br />Tcl (originally from "Tool Command Language", but nonetheless conventionally rendered as "Tcl" rather than "TCL"; and pronounced like "tickle") is a scripting language created by John Ousterhout that is generally thought to be easy to learn, but powerful in competent hands.<br /><br /><b>Transact-SQL</b><br />Transact-SQL is Microsoft's and Sybase's proprietary extension to the SQL language. In order to make it more powerful, SQL has been enhanced with additional features such as:
<br />*Control-of-flow language 
<br />*Local variables 
<br />*User authentication integrated with Microsoft Windows 
<br />*Various support functions for string processing, date processing, mathematics, etc.<br /><br /><b>Vendor lock-in</b><br />In economics, vendor lock-in, also known as proprietary lock-in, lock-in, or the Pottersville pattern, is a situation in which a customer is dependent on a vendor for products and services and cannot move to another vendor without substantial switching costs, real and/or perceived.<br /><br />			</div>
		  
</section>

