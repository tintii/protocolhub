---
id: protocol-nfs
slug: nfs
name: NFS
expandedName: Network File System
origin: historical
provenance:
  source: protocols/protocol_NFS.htm
  sha256: 1d8e36d3f9c868f68de34f951f8f56f1097e8e94e4e85b850dcc8d7b4df5826d
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Network File System
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Network File System
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: File transfer protocol
  - label: Latest Version
    html: NFSv4
  - label: Ports
    html: '2049'
  - label: Working groups
    html: 'NFSv4, Network File System Version 4'
originalUpdate: '2005-11-07 17:17:55'
rfcs:
  - 1094
  - 1738
  - 1813
  - 2224
  - 2339
  - 2623
  - 2624
  - 3010
  - 3530
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

			The NFS protocol is designed to be machine, operating system, network architecture, and transport protocol independent. This independence is achieved through the use of Remote Procedure Call (RPC) primitives built on top of an eXternal Data Representation (XDR).
<br />
<br />The Network File System (NFS), developed by Sun Microsystems in the 1980's as a way to create a file system on diskless clients. NFS provides remote access to shared file systems across networks. This means that a file system may actually be sitting on machine A, but machine B can mount that filesystem and it will look to the users on machine B like the file system resides on the local machine. In this way NFS is transparent to the user. NFS was also designed to be machine, operating system, network architecture, and transport protocol independent.
<br />
<br />NFS is a stateless protocol. This means that the file server stores no per-client information, and there are no NFS "connections". For example, NFS has no operation to open a file, since this would require the server to store state information (that a file is open; what its file descriptor is; the next byte to read; etc). Instead, NFS supports a Lookup procedure, which converts a filename into a file handle. This file handle is a unique, immutable identifier, usually an i-node number, or disk block address. NFS does have a Read procedure, but the client must specify a file handle and starting offset for every call to Read. Two identical calls to Read will yield the exact same results. If the client wants to read further in the file, it must call Read with a larger offset.
<br />
<br />The primary functions of NFS are to export or mount directories to other machines, either on or off a local network. These diretories can then be accessed as though they were local. NFS uses a client/server architecture and consists of a client program, a server program, and a protocol used to communicate between the two. 
<br />
<br />The server program makes filesystems available for access by other machines via a process called exporting. File systems that are available for access across the network are often referred to as shared file systems. 
<br />
<br />NFS clients access shared file systems mounting them from an NFS server machine. When a file system is mounted, it is integrated into the directory tree. An advanced form of this service is the automounter, which autmomatically mounts and unmounts file systems. 
<br />
<br />When someone accesses a file over NFS, the kernel places an RPC call to nfsd (the NFS daemon) on the server machine. This call takes the file handle, the name of the file to be accessed, and the user's user and group id as parameters. These are used in determining access rights to the specified file. In order to prevent unauthorized users from reading or modifying files, user and group ids must be the same on both hosts. 
<br /><hr />
<br />On most implementations, the NFS functionality of both client and server are implemented as kernel-level daemons that are started from user space at system boot. These are the NFS daemon (nfsd) on the server host, and the Block I/O Daemon (biod) running on the client host. To improve throughput, biod performs asynchronous I/O using read-ahead and write-behind; also, several nfsd daemons are usually run concurrently. 
<br />
<br />The NFS implementation of is a little different in that the client code is tightly integrated in the virtual file system (VFS) layer of the kernel and doesn't require additional control through biod. On the other hand, the server code runs entirely in user space, so that running several copies of the server at the same time is almost impossible because of the synchronization issues this would involve. There are currently three versions of NFS. NFS2, NFS3 and NFSv4.
<br />
<br />The most important design principles:
<br /><ul><li>Transparent Access<br /></li>
<li>Users and applications can access remote files as if they were local. They are not required to know whether the files reside on the local disk or on remote servers.
<br /><br /></li>
<li>Statelessness<br /></li>
<li>NFS operates in a stateless manner using remote procedure calls (RPC) built on top of an external data representation (XDR) protocol. The RPC protocol enables version and authentication parameters to be exchanged for security over the network.
<br /></li><li>When an NFS client mounts file system the server examines the mount request to be sure that the client is authorized, then issues a magic cookie to the client for use in later accesses. The magic cookie keeps the server stateless since no record of authenticated clients needs to be kept. Unmounting and remounting an NFS filesystem changes its magic cookie. Magic cookie persist across reboots provided that you do not boot single user or play with the file systems.
<br /></li><li>Once the client has the magic cookie it uses RPC to make file requests. Because the server is stateless, it is the responsibility of the client to ensure that it has recieved acknowledgements of write requests before deleting its copy of data.
<br /><br /></li>
<li>Portability<br /></li>
<li>NFS is machine and operating system independent. This allows it to be ported easily to multiple OS and hardware platforms from PCs to mainframes.
<br /><br /></li>
<li>Fast Recovery From Failure<br /></li>
<li>NFS is designed to recover quickly from system failures and network problems, causing minimal disruption of service to users.
<br /><br /></li>
<li>Network Protocol Independence<br /></li>
<li>NFS has the flexibility to run on multiple transport protocols instead of being restricted to just one. This allows it to utilize existing protocols today as well as new protocols in the future.
<br /><br /></li>
<li>Performance<br /></li>
<li>NFS is designed for high performance so that users can access remote files as quickly as they can access local files.
<br /><br /></li>
<li>Security<br /></li>
<li>The NFS architecture enables the utilization of multiple security mechanisms. This allows system administrators to choose the security mechanism that is appropriate for their distributed file sharing environment instead of being restricted to one solution. This also allows NFS to utilize new security mechanisms in the future.</li></ul>
<br /><hr />
<br /><b>NFS version 4</b>
<br />A distributed filesystem protocol which owes heritage to NFS protocol versions 2 and 3. Unlike earlier versions, the NFS version 4 protocol supports traditional file access while integrating support for file locking and the mount protocol. In addition, support for strong security (and its negotiation), compound operations, client caching, and internationalization have been added.
<br />
<br />The goals of the NFS version 4 revision are as follows:
<br /><ul><li>Improve access and good performance on the Internet.<br /></li>
<li>Strong security with negotiation built into the protocol.<br /></li>
<li>Good cross-platform interoperability.<br /></li>
<li>Designed for protocol extensions.</li></ul>
<br />The general file system model used for the NFS version4 protocol is the same as previous versions. The server file system is hierarchical with the regular files contained within being treated as opaque byte streams. In a slight departure, file and directory names are encoded with UTF-8 to deal with the basics of internationalization.
<br />
<br />A separate protocol to provide for the initial mapping between path name and filehandle is no longer required. Instead of using the older MOUNT protocol for this mapping, the server provides a ROOT filehandle that represents the logical root or top of the file system tree provided by the server.
<br />
<br /><li><b>NFSv4 protocol header</b></li>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>8</td><td>7</td><td>6</td><td>5</td><td>4</td><td>3</td><td>2</td><td>1</td><td>Octets</td></tr><tr><td colspan="8">Tag Length</td><td>1-4</td></tr><tr><td colspan="8">Tag (depends on Tag length)</td><td>5-N</td></tr><tr><td colspan="8">Minor Version</td><td>N+1-N+4</td></tr><tr><td colspan="8">Operation Argument</td><td>N+5-N+8</td></tr></tbody></table></div></div>
<br /><ul><li><b>Tag Length</b><br /></li>
<li>The length in bytes of the tag.
<br /><br /></li>
<li><b>Tag</b><br /></li>
<li>Defined by the implementor.
<br /><br /></li>
<li><b>Minor Version</b><br /></li>
<li>Each minor version number will correspond to an </li><li><a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a></li><li>. Minor version zero corresponds to NFSv4.
<br /><br /></li>
<li><b>Operation Argument</b><br /></li>
<li>Operation to be executed by the protocol.
<br /><br /></li>
<li><b>Operation Argument Values</b><br /></li>
<li>The operation arg value can be one of the following:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p><b>Value</b></p></td><td><p><b>Name</b></p></td></tr><tr><td><p>3</p></td><td>ACCESS</td></tr><tr><td><p>4</p></td><td>CLOSE</td></tr><tr><td><p>5</p></td><td>COMMIT</td></tr><tr><td><p>6</p></td><td>CREATE</td></tr><tr><td><p>7</p></td><td>DELEGPURGE</td></tr><tr><td><p>8</p></td><td>DELEGRETURN</td></tr><tr><td><p>9</p></td><td>GETATTR</td></tr><tr><td><p>10</p></td><td>GETFH</td></tr><tr><td><p>11</p></td><td>LINK</td></tr><tr><td><p>12</p></td><td>LOCK</td></tr><tr><td><p>13</p></td><td>LOCKT</td></tr><tr><td><p>14</p></td><td>LOCKU</td></tr><tr><td><p>15</p></td><td>LOOKUP</td></tr><tr><td><p>16</p></td><td>LOOKUPP</td></tr><tr><td><p>17</p></td><td>NVERIFY</td></tr><tr><td><p>18</p></td><td>OPEN</td></tr><tr><td><p>19</p></td><td>OPENATTR</td></tr><tr><td><p>20</p></td><td>OPEN_CONFIRM</td></tr><tr><td><p>21</p></td><td>OPEN_DOWNGRADE</td></tr><tr><td><p>22</p></td><td>PUTFH</td></tr><tr><td><p>23</p></td><td>PUTPUBFH</td></tr><tr><td><p>24</p></td><td>PUTROOTFH</td></tr><tr><td><p>25</p></td><td>READ</td></tr><tr><td><p>26</p></td><td>READDIR</td></tr><tr><td><p>27</p></td><td>READLINK</td></tr><tr><td><p>28</p></td><td>REMOVE</td></tr><tr><td><p>29</p></td><td>RENAME</td></tr><tr><td><p>30</p></td><td>RENEW</td></tr><tr><td><p>31</p></td><td>RESTOREFH</td></tr><tr><td><p>32</p></td><td>SAVEFH</td></tr><tr><td><p>33</p></td><td>SECINFO</td></tr><tr><td><p>34</p></td><td>SETATTR</td></tr><tr><td><p>35</p></td><td>SETCLIENTID</td></tr><tr><td><p>36</p></td><td>SETCLIENTID_CONFIRM</td></tr><tr><td><p>37</p></td><td>VERIFY</td></tr><tr><td><p>38</p></td><td>WRITE</td></tr></tbody></table></div></div></li></ul>
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1</b>

The syntax of the NFS URL is a subset of the Generic URL syntax described in RFC 1738. 
An NFS URL does not include user or password components, nor does it recognize "?" 
query or "#" fragment components.

          nfsURL        = "nfs" ":" relativeURL
          relativeURL   = net_path | abs_path | rel_path
          net_path      = "//" hostport [ abs_path ]
          abs_path      = "/"  rel_path
          rel_path      = [ path_segments ]
          hostport      = host [ ":" port ]
          host          = hostname | hostnumber
          hostname      = *( domainlabel "." ) toplabel
          domainlabel   = alphanum | alphanum *( alphanum | "-" ) alphanum
          toplabel      = alpha | alpha *( alphanum | "-" ) alphanum
          hostnumber    = 1*digit "." 1*digit "." 1*digit "." 1*digit
          port          = *digit
          url-path      = [ "/" ] path_segments
          path_segments = segment *( "/" segment )
          segment       = *pchar
          pchar         = unreserved | escaped | ":" | "@" | "&amp;" | "=" | "+"
          reserved      = ";" | "/" | "?" | ":" | "@" | "&amp;" | "=" | "+"
          unreserved    = alpha | digit | mark
          mark          = "$" | "-" | "_" | "." | "!" | "~" |
                          "*" | "'" | "(" | ")" | ","
          escaped       = "%" hex hex
          hex           = digit | "A" | "B" | "C" | "D" | "E" | "F" |
                                  "a" | "b" | "c" | "d" | "e" | "f"
          alphanum      = alpha | digit
          alpha         = lowalpha | upalpha
          lowalpha = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" |
                     "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" |
                     "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z"
          upalpha  = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" |
                     "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" |
                     "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z"
          digit    = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" |
                     "8" | "9"</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2</b>

If the server aited to flush data from remote requests, the client would have to save 
those requests so that it could resend them in case of a server crash.

          /*
            * Remote file service routines
            */
           program NFS_PROGRAM {
                   version NFS_VERSION {
                           void
                           NFSPROC_NULL(void)              = 0;

                           attrstat
                           NFSPROC_GETATTR(fhandle)        = 1;

                           attrstat
                           NFSPROC_SETATTR(sattrargs)      = 2;

                           void
                           NFSPROC_ROOT(void)              = 3;

                           diropres
                           NFSPROC_LOOKUP(diropargs)       = 4;

                           readlinkres
                           NFSPROC_READLINK(fhandle)       = 5;

                           readres
                           NFSPROC_READ(readargs)          = 6;

                           void
                           NFSPROC_WRITECACHE(void)        = 7;
                          attrstat
                           NFSPROC_WRITE(writeargs)        = 8;

                           diropres
                           NFSPROC_CREATE(createargs)      = 9;

                           stat
                           NFSPROC_REMOVE(diropargs)       = 10;

                           stat
                           NFSPROC_RENAME(renameargs)      = 11;

                           stat
                           NFSPROC_LINK(linkargs)          = 12;

                           stat
                           NFSPROC_SYMLINK(symlinkargs)    = 13;

                           diropres
                           NFSPROC_MKDIR(createargs)       = 14;

                           stat
                           NFSPROC_RMDIR(diropargs)        = 15;

                           readdirres
                           NFSPROC_READDIR(readdirargs)    = 16;

                           statfsres
                           NFSPROC_STATFS(fhandle)         = 17;
                   } = 2;
           } = 100003;</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3</b>

These are the sizes, given in decimal bytes, of various XDR structures used in the 
protocol

          /*
              * The maximum number of bytes of data in a READ or WRITE
              * request.
              */
             const MAXDATA = 8192;

             /* The maximum number of bytes in a pathname argument. */
             const MAXPATHLEN = 1024;

             /* The maximum number of bytes in a file name argument. */
             const MAXNAMLEN = 255;

             /* The size in bytes of the opaque "cookie" passed by READDIR. */
             const COOKIESIZE  = 4;

             /* The size in bytes of the opaque file handle. */
             const FHSIZE = 32;</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>NFS</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>GSS-API</b><br />The GSS-API (Generic Security Service Application Program Interface) is a generic API for doing client-server authentication.
<br />
<br />A typical GSS-API caller is itself a communications protocol, calling on GSS-API in order to protect its communications with authentication, integrity, and/or confidentiality security services. A GSS-API caller accepts tokens provided to it by its local GSS-API implementation and transfers the tokens to a peer on a remote system; that peer passes the received tokens to its local GSS-API implementation for processing. The security services available through GSS-API in this fashion are implementable (and have been implemented) over a range of underlying mechanisms based on secret-key and public-key cryptographic technologies.
<br />
<br />The GSS-API separates the operations of initializing a security context between peers, achieving peer entity authentication (GSS_Init_sec_context() and GSS_Accept_sec_context() calls), from the operations of providing per-message data origin authentication and data integrity protection (GSS_GetMIC() and GSS_VerifyMIC() calls) for messages subsequently transferred in conjunction with that context.<br /><br /><b>Gopher</b><br />A system that pre-dates the World Wide Web for organizing and displaying files on Internet servers. A Gopher server presents its contents as a hierarchically structured list of files. With the ascendance of the Web, many gopher databases were converted to Web sites which can be more easily accessed via Web search engines. 
<br />
<br />Gopher was developed at the University of Minnesota and named after the school's mascot. Two systems, Veronica and Jughead, let you search global indices of resources stored in Gopher systems.<br /><br /><b>IETF</b><br />IETF (Internet Engineering Task Force) is the main standards organization for the Internet. The IETF is a large open international community of network designers, operators, vendors, and researchers concerned with the evolution of the Internet architecture and the smooth operation of the Internet. It is open to any interested individual.<br /><br /><b>WAIS</b><br />WAIS (Wide Area Information Server) is an Internet system in which specialized subject databases are created at multiple server locations, kept track of by a directory of servers at one location, and made accessible for searching by users with WAIS client programs. The user of WAIS is provided with or obtains a list of distributed databases. The user enters a search argument for a selected database and the client then accesses all the servers on which the database is distributed. The results provide a description of each text that meets the search requirements. The user can then retrieve the full text.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2224.html">RFC 2224</a>] NFS URL Scheme.
                Defines NFS URL nfs:. 
[<a href="https://www.rfc-editor.org/rfc/rfc2339.html">RFC 2339</a>] An Agreement Between the Internet Society, the IETF, and Sun Microsystems, Inc. in the matter of NFS V.4 Protocols.
[<a href="https://www.rfc-editor.org/rfc/rfc2623.html">RFC 2623</a>] NFS Version 2 and Version 3 Security Issues and the NFS Protocol's Use of RPCSEC_GSS and Kerberos V5.
[<a href="https://www.rfc-editor.org/rfc/rfc2624.html">RFC 2624</a>] NFS Version 4 Design Considerations.
[<a href="https://www.rfc-editor.org/rfc/rfc3530.html">RFC 3530</a>] Network File System (NFS) version 4 Protocol.
                Defines NFS version 4. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc3010.html">RFC 3010</a>.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc1094.html">RFC 1094</a>] NFS: Network File System Protocol Specification.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3010.html">RFC 3010</a>. 
                Defines NFS version 2. 
[<a href="https://www.rfc-editor.org/rfc/rfc1813.html">RFC 1813</a>] NFS Version 3 Protocol Specification.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3010.html">RFC 3010</a>. 
                Defines NFS version 3. 
[<a href="https://www.rfc-editor.org/rfc/rfc3010.html">RFC 3010</a>] NFS version 4 Protocol.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3530.html">RFC 3530</a>. 
                Defines NFS version 4. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1094.html">RFC 1094</a>, <a href="https://www.rfc-editor.org/rfc/rfc1813.html">RFC 1813</a>.<hr /><b>Publications</b>
[ISBN 1565925106] Managing NFS and NIS, 2nd Edition.
[ISBN 0201325705] NFS Illustrated
                		  </div>
		  
</section>

