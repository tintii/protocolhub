---
id: protocol-smb
slug: smb
name: SMB
expandedName: Server Message Block
origin: historical
provenance:
  source: protocols/protocol_SMB.htm
  sha256: 9095c0883b4734ed137b01486abaf512ad93c2f554ee618910010c611de0257d
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Server Message Block
layers:
  - Application Layer
suites:
  - IBM protocol suite
summary:
  - label: Protocol
    html: Server Message Block
  - label: Protocol suite
    html: IBM protocol suite
  - label: Layer
    html: Application Layer
  - label: Ports
    html: 137-139
  - label: Related protocols
    html: 'UDP,<br />TCP,<br />Ethernet,<br />Token Ring,<br />X.25'
originalUpdate: '2005-11-10 15:59:59'
rfcs: []
related:
  - protocol-udp
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

			Server Message Block (SMB) is a Microsoft presentation layer protocol providing file and print sharing functions for LAN Manager, Banyan VINES and other network operating systems. IBM NetBIOS manages the use of node names and transport layer connections for higher layer protocols such as SMB.
<br />
<br />SMB is an IBM protocol for sharing files, printers, serial ports, etc. between computers. The SMB protocol can be used over the Internet on top of the TCP/IP protocol or other network protocols such as Internetwork Packet Exchange (Novell IPX) and NetBEUI.
<br />
<br />SMB is a client server, request-response protocol, which provides a method for client applications in a computer to read and write to files on and to request services from server programs in various types of network environment. Using the SMB protocol, an application can access files at a remote server as well as other resources, including printers, mailslots, and named pipes. 
<br />
<br />In the TCP/IP environment, clients connect to servers using NetBIOS over TCP/IP (or NetBEUI/TCP or SPX/IPX). Once they have established a connection, clients can then send SMB commands to the server that allow them to access shares, open files, read and write files, and generally do all the sort of things that you want to do with a file system. 
<br />
<br />The Server Message Block (SMB) protocol defines two levels of security:
<br /><ul><li><b>Share level</b>
<br />Protection is applied at the share level on a server. Each share can have a password, and a client only needs that password to access all files under that share.<br /><br /></li> 

<li><b>User level</b>
<br />Protection is applied to individual files in each share and is based on user access rights. Each user (client) must log in to the server and be authenticated by the server. When it is authenticated, the client is given a UID (User ID) which it must present on all subsequent accesses to the server.</li></ul>
<br /><hr />
<br /><b>SMB Protocol Variants</b>
<br />Since the inception of SMB, many protocol variants have been developed to handle the increasing complexity of the environments that it has been employed in. The actual protocol variant client and server will use is negotiated using the negprot SMB which must be the first SMB sent on a connection. 
<br />
<br />The first protocol variant was the Core Protocol, known to SMB implementations as PC NETWORK PROGRAM 1.0. It could handle a fairly basic set of operations that included:
<br /><ul><li>Connecting to and disconnecting from file and print shares.<br /></li>
<li>Opening and closing files.<br /></li>
<li>Opening and closing print files.<br /></li>
<li>Reading and writing files.<br /></li>
<li>Creating and deleting files and directories.<br /></li>
<li>Searching directories.<br /></li>
<li>Getting and setting file attributes.<br /></li>
<li>Locking and unlocking byte ranges in files.<br /><br /></li>

<li>Subsequent variants were introduced as more functionality was needed. Some of these variants and the related version of LAN Manager are:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>SMB Protocol Variant</p></td><td><p>Protocol Name</p></td><td><p>Comments</p></td></tr><tr><td>PC NETWORK PROGRAM 1.0</td><td>Core Protocol</td><td>The original version of SMB as defined in IBM's PC Network Program. Some versions were called PCLAN1.0 </td></tr><tr><td>MICROSOFT NETWORKS 1.03 </td><td>Core Plus Protocol</td><td>Included Lock&amp;Read and Write&amp;Unlock SMBs with different versions of raw read and raw write SMBs </td></tr><tr><td>MICROSOFT NETWORKS 3.0</td><td>DOS LAN Manager 1.0</td><td>The same as LANMAN1.0, but OS/2 errors must be translated to DOS errors. </td></tr><tr><td>LANMAN1.0</td><td>LAN Manager 1.0 </td><td>The full LANMAN1.0 protocol. </td></tr><tr><td>DOS LM1.2X002</td><td>LAN Manager 2.0 </td><td>The same as LM1.2X002, but errors must be translated to DOS errors. </td></tr><tr><td>LM1.2X002</td><td>LAN Manager 2.0 </td><td>The full LANMAN2.0 protocol. </td></tr><tr><td>DOS LANMAN2.1</td><td>LAN Manager 2.1 </td><td>The same as LANMAN2.1, but errors must be translated to DOS errors. </td></tr><tr><td>LANMAN2.1</td><td>LAN Manager 2.1 </td><td>The full LANMAN2.1 protocol. </td></tr><tr><td>Windows for Workgroups 3.1a </td><td>LAN Manager 2.1?</td><td>Windows for Workgroups 1.0? </td></tr><tr><td>NT LM 0.12</td><td>NT LAN Manager 1.0? </td><td>Contains special SMBs for NT </td></tr><tr><td>Samba</td><td>NT LAN Manager 1.0? </td><td>Samba's version of NT LM 0.12?</td></tr><tr><td>CIFS 1.0</td><td>NT LAN Manager 1.0 </td><td>Really NT LM 0.12 plus a bit?</td></tr></tbody></table></div></div></li></ul>
<br /><hr />
<br /><b>Header Format</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>24</p></td><td><p>32 bits</p></td></tr><tr><td><p>Command</p></td><td><p>RCLS</p></td><td><p>Reserved</p></td><td><p>ERR</p></td></tr><tr><td><p>ERR (cont) </p></td><td><p>REB/FLG</p></td><td colspan="2"><p>Reserved</p></td></tr><tr><td colspan="4"><p>Reserved</p></td></tr><tr><td colspan="4"><p>Reserved</p></td></tr><tr><td colspan="4"><p>Reserved</p></td></tr><tr><td colspan="2"><p>Tree ID</p></td><td colspan="2"><p>Process ID</p></td></tr><tr><td colspan="2"><p>User ID</p></td><td colspan="2"><p>Multiplex ID</p></td></tr><tr><td><p>WCT</p></td><td colspan="3"><p>VWV</p></td></tr><tr><td colspan="2"><p>BCC</p></td><td colspan="2"><p>BUF</p></td></tr></tbody></table></div></div>
<br />
<br /><ul><li><b>Command</b>
<br />Protocol commands. The following are possible commands within SMB frames:
<br /><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td>Command </td><td>Description</td></tr><tr><td>[bad command] </td><td>Invalid SMB command. </td></tr><tr><td>[bind (UNIX)] </td><td>Obtain file system address for file. </td></tr><tr><td>[cancel forward] </td><td>Cancel server recognition of name. </td></tr><tr><td>[change/check dir] </td><td>Change to directory or check path. </td></tr><tr><td>[change group] </td><td>Change group association of user. </td></tr><tr><td>[change password] </td><td>Change password of user. </td></tr><tr><td>[close file] </td><td>Close file handle and flush buffers. </td></tr><tr><td>[close spoolfile] </td><td>Close print buffer file. </td></tr><tr><td>[consumer logon] </td><td>Log on with consumer validation. </td></tr><tr><td>[copy file] </td><td>Copy file to specified path. </td></tr><tr><td>[copy new path] </td><td>Copy file to new path name. </td></tr><tr><td>[create &amp; bind] </td><td>Create file and get file system address. </td></tr><tr><td>[create directory] </td><td>Create new directory. </td></tr><tr><td>[create file] </td><td>Create new or open existing file. </td></tr><tr><td>[delete dir] </td><td>Delete the specified directory. </td></tr><tr><td>[delete file] </td><td>Delete the specified file. </td></tr><tr><td>[echo] </td><td>Request echo from server. </td></tr><tr><td>[find &amp; close] </td><td>Search for file and close directory (UNIX). </td></tr><tr><td>[find &amp; close /2] </td><td>Search for file and close directory (OS/2). </td></tr><tr><td>[find first file] </td><td>Find first matching file (OS/2). </td></tr><tr><td>[find unique] </td><td>Search directory for specified file. </td></tr><tr><td>[flush file] </td><td>Flush all file buffers to disk. </td></tr><tr><td>[fork to PID] </td><td>Provide same access rights to new process. </td></tr><tr><td>[forward name] </td><td>Cause server to accept messages for name. </td></tr><tr><td>[get access right] </td><td>Get access rights for specified file. </td></tr><tr><td>[get exp attribs] </td><td>Get expanded attributes for file (OS/2). </td></tr><tr><td>[get unix attribs] </td><td>Get expanded attributes for file (UNIX). </td></tr><tr><td>[get file attribs] </td><td>Get attributes for specified file. </td></tr><tr><td>[get file queue] </td><td>Get print queue listing. </td></tr><tr><td>[get group info] </td><td>Get logical group associations. </td></tr><tr><td>[get machine name] </td><td>Get machine name for block messages. </td></tr><tr><td>[get pathname] </td><td>Get path of specified handle. </td></tr><tr><td>[get resources] </td><td>Get availability of server resources. </td></tr><tr><td>[get server info] </td><td>Get total and free space for server disk. </td></tr><tr><td>[get user info] </td><td>Get logical user associations. </td></tr><tr><td>[IOCTL] </td><td>Initiate I/O control for DOS-OS/2 devices. </td></tr><tr><td>[IOCTL next] </td><td>Initiates subsequent I/O control for DOS-OS/2 devices. </td></tr><tr><td>[IOCTL (UNIX)] </td><td>I/O control for UNIX-Xenix devices. </td></tr><tr><td>[link file] </td><td>Make an additional path to a file. </td></tr><tr><td>[lock and read] </td><td>Lock and read byte range. </td></tr><tr><td>[lock bytes] </td><td>Lock specified byte range. </td></tr><tr><td>[lock/unlock &amp; X] </td><td>Lock/unlock bytes and execute next command. </td></tr><tr><td>[logoff &amp; execute] </td><td>Log off and execute next command. </td></tr><tr><td>[mail announce] </td><td>Query availability of server nodes. </td></tr><tr><td>[mailslot message] </td><td>Mail slot transaction message. </td></tr><tr><td>[make/bind dir] </td><td>Make dir and get file system address. </td></tr><tr><td>[make temp file] </td><td>Make temporary data file. </td></tr><tr><td>[make new file] </td><td>Make new file only if it does not exist. </td></tr><tr><td>[make node] </td><td>Make file for use as a device. </td></tr><tr><td>[move file] </td><td>Move file to specified path (OS/2). </td></tr><tr><td>[move new path] </td><td>Move file to specified path (UNIX/Xenix). </td></tr><tr><td>[multi-block data] </td><td>Send data for multi-block message. </td></tr><tr><td>[multi-block end] </td><td>Terminate multi-block message. </td></tr><tr><td>[multi-block hdr] </td><td>Send header for multi-block message. </td></tr><tr><td>[named pipe call] </td><td>Open, write, read, or close named pipe. </td></tr><tr><td>[named pipe wait] </td><td>Wait for named pipe to become ready. </td></tr><tr><td>[named pipe peek] </td><td>Look at named pipe data. </td></tr><tr><td>[named pipe query] </td><td>Query named pipe handle modes. </td></tr><tr><td>[named pipe set] </td><td>Set named pipe handle modes. </td></tr><tr><td>[named pipe attr] </td><td>Query named pipe attributes. </td></tr><tr><td>[named pipe R/W] </td><td>Named pipe read/write transaction. </td></tr><tr><td>[named pipe read] </td><td>Raw mode named pipe read. </td></tr><tr><td>[named pipe write] </td><td>Raw mode named pipe write. </td></tr><tr><td>[negotiate protoc] </td><td>Negotiate SMB protocol version. </td></tr><tr><td>[newfile &amp; bind] </td><td>Make new file and get file system address. </td></tr><tr><td>[notify close] </td><td>Close handle used to monitor file changes. </td></tr><tr><td>[open file] </td><td>Open specified file. </td></tr><tr><td>[open &amp; execute] </td><td>Open specified file and execute next command. </td></tr><tr><td>[open spoolfile] </td><td>Open specified print buffer file. </td></tr><tr><td>[process exit] </td><td>Terminate consumer process. </td></tr><tr><td>[read &amp; execute] </td><td>Read file and execute next command. </td></tr><tr><td>[read and hide] </td><td>Read directory ignoring hidden files. </td></tr><tr><td>[read block mplex] </td><td>Read block data on multiplexed connection. </td></tr><tr><td>[read block raw] </td><td>Read block data on unique connection. </td></tr><tr><td>[read block sec/r] </td><td>Read block secondary response. </td></tr><tr><td>[read check] </td><td>Check file accessibility. </td></tr><tr><td>[read from file] </td><td>Read from specified file. </td></tr><tr><td>[read w/options] </td><td>Read from file with specified options. </td></tr><tr><td>[rename file] </td><td>Rename the specified file to a new name. </td></tr><tr><td>[reserve resourcs] </td><td>Reserve resources on the server. </td></tr><tr><td>[search dir] </td><td>Search directory with specified attribute. </td></tr><tr><td>[seek] </td><td>Set file pointer for handle. </td></tr><tr><td>[send broadcast] </td><td>Send a one block broadcast message. </td></tr><tr><td>[session setup] </td><td>Log-in with consumer-based authentication. </td></tr><tr><td>[set exp attrib] </td><td>Set expanded file attributes (OS/2). </td></tr><tr><td>[set unix attribs] </td><td>Set expanded file attributes (UNIX/Xenix). </td></tr><tr><td>[set file attribs] </td><td>Set normal file attributes. </td></tr><tr><td>[single block msg] </td><td>Send a single block message. </td></tr><tr><td>[transaction next] </td><td>Subsequent name transaction. </td></tr><tr><td>[tree &amp; execute] </td><td>Make virtual connection and execute next command. </td></tr><tr><td>[tree connect] </td><td>Make a virtual connection. </td></tr><tr><td>[tree disconect] </td><td>Detach a virtual connection. </td></tr><tr><td>[unbind] </td><td>Discard file system address binding. </td></tr><tr><td>[unlock bytes] </td><td>Release a locked byte range. </td></tr><tr><td>[write &amp; close] </td><td>Write to and close specified file handle. </td></tr><tr><td>[write &amp; execute] </td><td>Write to file and execute next command. </td></tr><tr><td>[write &amp; unlock] </td><td>Write to and unlock a byte range. </td></tr><tr><td>[write block raw] </td><td>Write block data on unique connection. </td></tr><tr><td>[write block mplx] </td><td>Write block data on multiplexed connection. </td></tr><tr><td>[write block sec] </td><td>Write block secondary request. </td></tr><tr><td>[write complete] </td><td>Terminate a write block sequence. </td></tr><tr><td>[write spoolfile] </td><td>Write to the specified print buffer. </td></tr><tr><td>[write to file] </td><td>Write to the specified file handle. </td></tr><tr><td>[X2 open file] </td><td>Open file. </td></tr><tr><td>[X2 find first] </td><td>Find first file. </td></tr><tr><td>[X2 find next] </td><td>Find next file. </td></tr><tr><td>[X2 query FS] </td><td>Get file system information. </td></tr><tr><td>[X2 set FS info] </td><td>Set file system information. </td></tr><tr><td>[X2 query path] </td><td>Get information on path. </td></tr><tr><td>[X2 set path] </td><td>Set path information. </td></tr><tr><td>[X2 query file] </td><td>Get file information. </td></tr><tr><td>[X2 set info] </td><td>Set file information. </td></tr><tr><td>[X2 FS control] </td><td>File system control information. </td></tr><tr><td>[X2 IOCTL] </td><td>I/O control for devices. </td></tr><tr><td>[X2 notify] </td><td>Monitor file for changes. </td></tr><tr><td>[X2 notify next] </td><td>Subsequent file monitoring. </td></tr><tr><td>[X2 make dir] </td><td>Make directory. </td></tr></tbody></table></div></div><br /></li>
<li><b>RCLS</b>
<br />Error Code Class. The second field of the decoded SMB protocol contains the error class and error code for each frame as in E=1/22, where 1 is the error class and 22 is the error code. The error class identifies the source of the error as shown in the following table:
<br /><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td>Error Class </td><td>Name </td><td>Source of Error </td></tr><tr><td>0 </td><td> </td><td>No error, or error was handled by system. </td></tr><tr><td>1 </td><td>ERRDOS </td><td>Server operating system. </td></tr><tr><td>2 </td><td>ERRSRV </td><td>Server network file manager. </td></tr><tr><td>3 </td><td>ERRHRD </td><td>System or device. </td></tr><tr><td>4 </td><td>ERRXOS </td><td>Extended operating system. </td></tr><tr><td>225-227 </td><td>ERRRMX </td><td>RMX operating system. </td></tr><tr><td>255 </td><td>ERRCMD </td><td>Invalid SMB commands. </td></tr></tbody></table></div></div><br /></li>
<li><b>ERR</b>
<br />Error Code. The following is a list of SMB error codes/messages:
<br /><div><div class="table-scroll" role="region" aria-label="Description table 5" tabindex="0"><table><caption>Description: preserved table 5</caption><tbody><tr><td><b>Error Message </b></td><td><b>Description </b></td></tr><tr><td>{Access denied} </td><td>Unable to service request. </td></tr><tr><td>{Access list full} </td><td>Access control list full. </td></tr><tr><td>{Bad attrib mode} </td><td>Invalid attributes specified. </td></tr><tr><td>{Bad disk request} </td><td>Disk command invalid. </td></tr><tr><td>{Bad drive spec} </td><td>Specified drive invalid. </td></tr><tr><td>{Bad environment} </td><td>Environment invalid. </td></tr><tr><td>{Bad EXE file} </td><td>Bad executable file format. </td></tr><tr><td>{Bad file access} </td><td>Invalid access to read only file. </td></tr><tr><td>{Bad file ID} </td><td>File handle invalid. </td></tr><tr><td>{Bad filespec} </td><td>Path name invalid. </td></tr><tr><td>{Bad format} </td><td>Format invalid. </td></tr><tr><td>{Bad function} </td><td>Function not supported. </td></tr><tr><td>{Bad I/O data} </td><td>Data invalid on server I/O device. </td></tr><tr><td>{Bad math argument} </td><td>Math argument invalid. </td></tr><tr><td>{Bad media type} </td><td>Unknown media type. </td></tr><tr><td>{Bad memory block} </td><td>Memory block address invalid. </td></tr><tr><td>{Bad open mode} </td><td>Open mode invalid. </td></tr><tr><td>{Bad permissions} </td><td>Specified permissions invalid. </td></tr><tr><td>{Bad print FID} </td><td>Print file ID invalid. </td></tr><tr><td>{Bad print request} </td><td>Printer device request invalid. </td></tr><tr><td>{Bad reqst length} </td><td>Bad request structure length. </td></tr><tr><td>{Bad semaphore} </td><td>Semaphore identifier invalid. </td></tr><tr><td>{Bad SMB command} </td><td>SMB command invalid. </td></tr><tr><td>{Bad Tree ID} </td><td>Tree ID invalid. </td></tr><tr><td>{Bad User ID} </td><td>User ID invalid. </td></tr><tr><td>{Bad user/passwrd} </td><td>Bad password or user name. </td></tr><tr><td>{Bad wait done} </td><td>Wait done for unwaited process. </td></tr><tr><td>{Continue in MPX} </td><td>Continue in block multiplexed mode. </td></tr><tr><td>{Can delete dir} </td><td>Cannot delete current directory. </td></tr><tr><td>{Can init net} </td><td>Network cannot be initialized. </td></tr><tr><td>{Can mount dev} </td><td>Device cannot be mounted. </td></tr><tr><td>{Can RAW, do MPX} </td><td>Cannot use raw blocks, use multiplexed. </td></tr><tr><td>{Can ren to vol} </td><td>Attempt to rename across volumes failed. </td></tr><tr><td>{Can support RAW} </td><td>Cannot support raw block access. </td></tr><tr><td>{Can write dir} </td><td>Attempt to write on a directory failed. </td></tr><tr><td>{Command not recvd} </td><td>Initial command not received. </td></tr><tr><td>{CRC data error} </td><td>Data CRC error on device. </td></tr><tr><td>{Dev out of space} </td><td>Device out of space. </td></tr><tr><td>{Device is remote} </td><td>Referenced device remote. </td></tr><tr><td>{Dir not found} </td><td>Directory not found. </td></tr><tr><td>{Disk write error} </td><td>Disk write fault. </td></tr><tr><td>{Disk read error} </td><td>Disk read fault. </td></tr><tr><td>{Disk seek error} </td><td>Disk seek error. </td></tr><tr><td>{Drive not ready} </td><td>Drive not ready. </td></tr><tr><td>{Dup filename} </td><td>File name already exists. </td></tr><tr><td>{EOF on printer} </td><td>End of file found on print queue dump. </td></tr><tr><td>{Err buffered} </td><td>Error message buffered. </td></tr><tr><td>{Err logged} </td><td>Error message logged. </td></tr><tr><td>{Err displayed} </td><td>Error message displayed. </td></tr><tr><td>{File not found} </td><td>Filespec not found. </td></tr><tr><td>{File too big} </td><td>Maximum file size exceeded. </td></tr><tr><td>{Gen disk failure} </td><td>General disk failure. </td></tr><tr><td>{Insuf acc rights} </td><td>Insufficient access rights. </td></tr><tr><td>{Invalid name} </td><td>Invalid name supplied on tree connect. </td></tr><tr><td>{Invalid pipe} </td><td>Invalid pipe specified. </td></tr><tr><td>{Lock conflict} </td><td>Lock/Unlock conflicts with other locks. </td></tr><tr><td>{Memory blks lost} </td><td>Memory control blocks destroyed. </td></tr><tr><td>{More data coming} </td><td>Cannot terminate; more data coming. </td></tr><tr><td>{Need block device} </td><td>File used where a block device needed. </td></tr><tr><td>{Need data file} </td><td>Must specify data file. </td></tr><tr><td>{No FCBs available} </td><td>Out of file control blocks. </td></tr><tr><td>{No more files} </td><td>No more matching files found. </td></tr><tr><td>{No proc to pipe} </td><td>No process available to pipe. </td></tr><tr><td>{No read process} </td><td>Write to a pipe with no read processes. </td></tr><tr><td>{No resources} </td><td>Server out of resources. </td></tr><tr><td>{No room f/message} </td><td>No room to buffer message. </td></tr><tr><td>{Not a directory} </td><td>Must specify directory. </td></tr><tr><td>{Not receiving} </td><td>Not receiving messages. </td></tr><tr><td>{No semaphores} </td><td>Semaphore not available. </td></tr><tr><td>{OK} </td><td>SMB command completed successfully. </td></tr><tr><td>{Out of disk space} </td><td>Print queue out of disk space. </td></tr><tr><td>{Out of handles} </td><td>Too many open files. </td></tr><tr><td>{Out of memory} </td><td>Insufficient memory on server. </td></tr><tr><td>{Out of paper} </td><td>Printer out of paper. </td></tr><tr><td>{Pipe is busy} </td><td>Pipe process busy; wait. </td></tr><tr><td>{Pipe is closing} </td><td>Terminating pipe process. </td></tr><tr><td>{Print Q full} </td><td>Print file queue table full. </td></tr><tr><td>{Proc table full} </td><td>Server process table full. </td></tr><tr><td>{Rem I/O error} </td><td>Remote I/O error. </td></tr><tr><td>{Sector not found} </td><td>Sector not found. </td></tr><tr><td>{Seek on pipe} </td><td>Seek was issued to a pipe. </td></tr><tr><td>{Server error} </td><td>General server error. </td></tr><tr><td>{Server paused} </td><td>Server paused. </td></tr><tr><td>{Share buffer out} </td><td>Share buffer out of space. </td></tr><tr><td>{Share conflict} </td><td>Share conflicts with existing files. </td></tr><tr><td>{Syntax error} </td><td>Syntax error in path name. </td></tr><tr><td>{Sys call intruptd} </td><td>Interrupted system call. </td></tr><tr><td>{Table overflow} </td><td>Internal table overflow. </td></tr><tr><td>{Terminal needed} </td><td>Terminal device required. </td></tr><tr><td>{Timed out} </td><td>Operation has run out of time. </td></tr><tr><td>{Too many links} </td><td>Too many links. </td></tr><tr><td>{Too many names} </td><td>Too many remote user names. </td></tr><tr><td>{Too many UIDs} </td><td>User ID limit exceeded. </td></tr><tr><td>{Unit unknown} </td><td>Unknown unit. </td></tr><tr><td>{Unknown error} </td><td>Non-specific error. </td></tr><tr><td>{Unknwn process} </td><td>No such process. </td></tr><tr><td>{Write protected} </td><td>Write on write-protected diskette. </td></tr><tr><td>{Wrong diskette} </td><td>Wrong diskette inserted in drive. </td></tr></tbody></table></div></div><br /></li>
<li><b>REB/FLG</b>
<br />REB reserved field is associated with the Core protocol only. The Flag field appears in protocol versions later than the Core protocol.<br /><br /></li>

<li><b>Tree ID</b>
<br />Uniquely identifies a file sharing connection between consumer and server where this protocol uses a server-based file protection.<br /><br /></li>

<li><b>Process ID</b>
<br />Identify a specific consumer process within a virtual connection.<br /><br /></li>

<li><b>User ID</b>
<br />Used by the server to verify the file access permissions of users where consumer-based file protection is in effect. <br /><br /></li>

<li><b>Multiplex ID</b>
<br />Used by the server to verify the file access permissions of groups where consumer-based file protection is in effect.<br /><br /></li>

<li><b>WCT</b>
<br />Number of parameter words.<br /><br /></li>

<li><b>VWV</b>
<br />Variable number of words of parameters.<br /><br /></li>

<li><b>BCC</b>
<br />Number of bytes of data which follow.<br /><br /></li>

<li><b>BUF</b>
<br />Variable number of data bytes.</li></ul>
<br /><hr />
<br /><b>SMB Clients and Servers Currently Available</b>
<br />There are a few SMB clients available today and a relatively large number of servers available from a range of vendors. 
<br />The main clients are from Microsoft, and are included in Windows for WorkGroups 3.x, Windows 95, and Windows NT. They are most evident when you use the File Manager or the Windows 95 Explorer, as these allow you to connect to servers across the network. However they are also used when you open files using a UNC (universal naming convention). 
<br />
<br />Some other clients:
<br /><ul><li>Smbclient from Samba<br /></li>
<li>Smbfs for Linux<br /></li>
<li>SMBlib (an SMB client library that is in development)</li></ul>
<br />
<br />Server implementations are available from many sources: 
<br /><ul><li>Samba<br /></li> 
<li>Microsoft Windows for Workgroups 3.x<br /></li>
<li>Microsoft Windows 95<br /></li>
<li>Microsoft Windows NT<br /></li> 
<li>The PATHWORKS family of servers from Digital<br /></li> 
<li>LAN Manager for OS/2, SCO, etc<br /></li> 
<li>VisionFS from SCO<br /></li> 
<li>TotalNET Advanced Server from Syntax<br /></li> 
<li>Advanced Server for UNIX from AT&amp;T<br /></li> 
<li>LAN Server for OS/2 from IBM</li></ul> 
<br />
<br /><b>SMB Servers</b>
<br />Before discussing SMB servers, it is useful to discuss the difference between Workgroups and Domains.
<br /><ul><li><b>Workgroups</b>
<br />A workgroup is a collection of computers that each maintains their own security information. With Windows for Workgroups, each server is pretty much in share level security. Windows 95 can pass user authentication off to an NT or LAN Manager server.<br /><br /></li>

<li><b>Domains</b>
<br />A domain is a collection of computers where security is handled centrally. Each domain has one or more domain controllers. There is usually a primary domain controller and several backup domain controllers. The domain controllers maintain account style information related to users (clients), like account names, encrypted passwords, authorized hours of use, groups the user belongs to, etc.<br /><br /></li>

<li><b>Samba</b>
<br />Samba is a freely available SMB server for UNIX, OpenVMS developed by Andrew Tridgell and maintained by a loosely knit group of people all over the world. Samba runs on a great many UNIX variants (Linux, Solaris, SunOS, HP-UX, ULTRIX, DEC OSF/1, Digital UNIX, Dynix (Sequent), IRIX (SGI), SCO Open Server, DG-UX, UNIXWARE, AIX, BSDI, NetBSD, NEXTSTEP, A/UX, etc).<br /><br /></li>

<li><b>Microsoft Windows Servers</b>
<br />Microsoft has a number of SMB server implementations for the Windows range of operating systems. These are not separate products, rather, they are integral to the appropriate version of the Windows operating system. However, they can be switched off either though the Control Panel or at the command line (net stop server at DOS prompt).<br /><br /></li>

<li><b>LAN Manager and LAN Manager for UNIX (LM/X)</b>
<br />Microsoft and AT&amp;T GIS ported various LAN Manager versions to the UNIX operating system. This code formed the basis of many SMB servers available for UNIX operating systems from many vendors.<br /><br /></li>

<li><b>VisionFS</b>
<br />VisionFS is a written-from-scratch SMB server from SCO. It is available for Solaris 2.x, HP-UX and SCO (both SCO OpenServer and UNIXware).<br /><br /></li>

<li><b>TotalNET Advanced Server</b>
<br />This product is from Syntax. It is a completely independently written SMB server, that was perhaps the first SMB server for UNIX. These days, it comes with additional modules providing AppleShare and NetWare serving all in the one product.<br /><br /></li>

<li><b>Advanced Server for UNIX</b>
<br />After LM/X, NCR (which used to be ATT GIS) (perhaps with help from Microsoft) ported the Windows NT SMB server code to UNIX to provide the same level of functionality as Windows NT.<br /><br /></li> 

<li><b>PATHWORKS</b>
<br />PATHWORKS is the name of a product family from Digital equipment corporation. It included both servers and clients, with the servers running on: 
<br /><ul><li>VAX and Alpha VMS<br /></li>
<li>VAX and MIPS ULTRIX<br /></li>
<li>DEC OSF/1 for AXP and Digital UNIX (DEC OSF/1 renamed)<br /></li> 
<li>OS/2</li></ul><br /><br /></li>

<li><b>LAN Server for OS/2</b>
<br />This is an IBM product that seems to be derived in some way from Microsoft's LAN Manager code.</li></ul>
<br />
<br /><b>SMB Clients</b> 
<br />There are several SMB clients out there:
<br /><ul><li>Microsoft Clients<br /></li> 
<li><ul><li>Windows NT<br /></li> 
<li>Windows 95<br /></li> 
<li>Windows for Workgroups 3.11</li></ul><br /></li>
<li>Digital's PATHWORKS clients<br /></li>
<li>Samba's smbclient<br /></li> 
<li>Linux's smbfs<br /></li> 
<li>SMBlib</li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: SMB NegProt Connection</b>

The client sends a SMB NegProt to the server. This will list the protocol 
dialects/protocol extensions that it understands. The server responds with the index 
of the dialect that it wants to use, or 0xFFFF if none of the dialects were acceptable.
Dialects newer than the Core and CorePlus protocols supply information in the NegProt 
response to indicate their capabilities such as max buffer size. The six important 
protocol extensions of SMB are Core, CorePlus, LAN Manager 1.0, LM 2.0, and NT 
LM 0.12 and CIFS 1.0.

          +----------+        NegProt command     +------------+ 
          |          | =========================&gt; |            | 
          |  Client  |                            |   Server   | 
          |          | &lt;========================= |            | 
          +----------+        NegProt response    +------------+</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: SMB Sesssetup Connection</b>

Once a protocol has been established, the client can proceed to logon to the server. 
Client now sends a SMB Session Setup command (SesssetupX), The response indicates 
whether the username password pair is valid, and if so, can provide additional 
information. One of the very important aspects of the response is a User ID value that 
must be submitted with all the subsequent SMBs sent to the server. This is used for 
user authentication.

          +----------+      Sesssetup command     +------------+ 
          |          | =========================&gt; |            | 
          |  Client  |                            |   Server   | 
          |          | &lt;========================= |            | 
          +----------+     Sesssetup response     +------------+</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: SMB TconX Connection</b>

After the client has logged in, it then proceeds to connect to the file tree by 
sending a SMB Tree Connect command (TconX) to the server. Here TconX stands for 
tree connect. The client sends a Tcon or SMB TconX specifying the network name of 
the share to which they want to connect, and if all is well, the server responds with 
a TID that the client will use in all future SMBs relating to that share.

          +----------+         TconX command      +------------+ 
          |          | =========================&gt; |            | 
          |  Client  |                            |   Server   | 
          |          | &lt;========================= |            | 
          +----------+         TconX response     +------------+

After connecting to a tree, the client can now open a file with an open SMB, followed 
by reading it with read SMBs, writing it with write SMBs, and closing it with close 
SMBs.</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">NetBIOS SMB<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>SMB</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />Create Dir<br /><img src="/supporting/images/tline_r.gif" alt="" />Delete Dir<br /><img src="/supporting/images/tline_r.gif" alt="" />Open File<br /><img src="/supporting/images/tline_r.gif" alt="" />Create File<br /><img src="/supporting/images/tline_r.gif" alt="" />Close File<br /><img src="/supporting/images/tline_r.gif" alt="" />Flush File<br /><img src="/supporting/images/tline_r.gif" alt="" />Delete File<br /><img src="/supporting/images/tline_r.gif" alt="" />Rename File<br /><img src="/supporting/images/tline_r.gif" alt="" />Get File Attr<br /><img src="/supporting/images/tline_r.gif" alt="" />Set File Attr<br /><img src="/supporting/images/tline_r.gif" alt="" />Read From File<br /><img src="/supporting/images/tline_r.gif" alt="" />Write To File<br /><img src="/supporting/images/tline_r.gif" alt="" />Lock Byte Range<br /><img src="/supporting/images/tline_r.gif" alt="" />Unlock Byte Range<br /><img src="/supporting/images/tline_r.gif" alt="" />Create Temp File<br /><img src="/supporting/images/tline_r.gif" alt="" />Make New File<br /><img src="/supporting/images/tline_r.gif" alt="" />Check Dir Path<br /><img src="/supporting/images/tline_r.gif" alt="" />Process Exit<br /><img src="/supporting/images/tline_r.gif" alt="" />Seek<br /><img src="/supporting/images/tline_r.gif" alt="" />Lock Then Read Data<br /><img src="/supporting/images/tline_r.gif" alt="" />Write Then Unlock Data<br /><img src="/supporting/images/tline_r.gif" alt="" />Read Block Raw<br /><img src="/supporting/images/tline_r.gif" alt="" />Read Block Multiplexed<br /><img src="/supporting/images/tline_r.gif" alt="" />Read Block 2nd Rsp<br /><img src="/supporting/images/tline_r.gif" alt="" />Write Block Raw<br /><img src="/supporting/images/tline_r.gif" alt="" />Write Block Multiplexed<br /><img src="/supporting/images/tline_r.gif" alt="" />Write Block 2nd Req<br /><img src="/supporting/images/tline_r.gif" alt="" />Write Complete Rsp<br /><img src="/supporting/images/tline_r.gif" alt="" />Set File Attr Expand<br /><img src="/supporting/images/tline_r.gif" alt="" />Get File Attr Expand<br /><img src="/supporting/images/tline_r.gif" alt="" />Lock Byte Ranges &amp; X<br /><img src="/supporting/images/tline_r.gif" alt="" />Xact Name, Bytes In/Out<br /><img src="/supporting/images/tline_r.gif" alt="" />Transaction 2nd<br /><img src="/supporting/images/tline_r.gif" alt="" />IOCTL<br /><img src="/supporting/images/tline_r.gif" alt="" />IOCTL 2nd<br /><img src="/supporting/images/tline_r.gif" alt="" />Copy<br /><img src="/supporting/images/tline_r.gif" alt="" />Move<br /><img src="/supporting/images/tline_r.gif" alt="" />Echo<br /><img src="/supporting/images/tline_r.gif" alt="" />Write &amp; Close<br /><img src="/supporting/images/tline_r.gif" alt="" />Open &amp; X<br /><img src="/supporting/images/tline_r.gif" alt="" />Read &amp; X<br /><img src="/supporting/images/tline_r.gif" alt="" />Write &amp; X<br /><img src="/supporting/images/tline_r.gif" alt="" />Xact2 Function, Byte In/Out<br /><img src="/supporting/images/tline_r.gif" alt="" />Transaction2 2nd<br /><img src="/supporting/images/tline_r.gif" alt="" />Find Close 2<br /><img src="/supporting/images/tline_r.gif" alt="" />Find Notify Close<br /><img src="/supporting/images/tline_r.gif" alt="" />Tree Conn<br /><img src="/supporting/images/tline_r.gif" alt="" />Tree Disconn<br /><img src="/supporting/images/tline_r.gif" alt="" />Negotiate Protocol<br /><img src="/supporting/images/tline_r.gif" alt="" />Sess Set Up And X<br /><img src="/supporting/images/tline_r.gif" alt="" />User Logoff &amp; X<br /><img src="/supporting/images/tline_r.gif" alt="" />Tree Conn &amp; X<br /><img src="/supporting/images/tline_r.gif" alt="" />Get Server Attr<br /><img src="/supporting/images/tline_r.gif" alt="" />Search Directory<br /><img src="/supporting/images/tline_r.gif" alt="" />Find First<br /><img src="/supporting/images/tline_r.gif" alt="" />Find Unique<br /><img src="/supporting/images/tline_r.gif" alt="" />Find Close<br /><img src="/supporting/images/tline_r.gif" alt="" />NT Transaction<br /><img src="/supporting/images/tline_r.gif" alt="" />NT Create and X<br /><img src="/supporting/images/tline_r.gif" alt="" />NT Cancel<br /><img src="/supporting/images/tline_r.gif" alt="" />Open Print Spool File<br /><img src="/supporting/images/tline_r.gif" alt="" />Write To Print Spool File<br /><img src="/supporting/images/tline_r.gif" alt="" />Close Print Spool File<br /><img src="/supporting/images/tline_r.gif" alt="" />Return Print Queue<br /><img src="/supporting/images/tline_r.gif" alt="" />Send Single Block Msg<br /><img src="/supporting/images/tline_r.gif" alt="" />Send Broadcast Msg<br /><img src="/supporting/images/tline_r.gif" alt="" />Forward User Name<br /><img src="/supporting/images/tline_r.gif" alt="" />Cancel Forward<br /><img src="/supporting/images/tline_r.gif" alt="" />Get Machine Name<br /><img src="/supporting/images/tline_r.gif" alt="" />Send SOMB Msg<br /><img src="/supporting/images/tline_r.gif" alt="" />Send EOMB Msg<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />Send TOMB Msg<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>NetBEUI</b><br />NetBEUI(NetBios Extended User Interface). It is an enhanced version of the NetBIOS protocol used by network operating systems such as LAN Manager, LAN Server, Windows for Workgroups, Windows 95 and Windows NT. 
<br />
<br />Netbeui was originally designed by IBM for their Lan Manager server and later extended by Microsoft and Novell.<br /><br /><b>NetBIOS</b><br />NetBIOS(Network Basic Input Output System) is an API that augments the DOS BIOS by adding special functions for local-area networks (LANs). Almost all Windows-based LANs for PCs are based on the NetBIOS. Some LAN manufacturers have even extended it, adding additional network capabilities. <br /><br /><b>SMBlib</b><br />SMBlib is an SMB client library that is in development.<br /><br /><b>TotalNET Advanced Server</b><br />TotalNET Advanced Server This product is from Syntax is a completely independently written SMB server, that was perhaps the first SMB server for UNIX. These days, it comes with additional modules providing AppleShare and NetWare serving all in the one product.<br /><br /><b>VisionFS</b><br />VisionFS is a written-from-scratch SMB server from SCO. It is available for Solaris 2.x, HP-UX and SCO (both SCO OpenServer and UNIXware).<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="http://msdn.microsoft.com/library/en-us/fileio/base/microsoft_smb_protocol_and_cifs_protocol_overview.asp">Microsoft SMB Protocol and CIFS Protocol Overview</a>
                <a href="http://msdn.microsoft.com/library/en-us/buses/hh/buses/smb-client_64b18cc8-36a7-4a06-a9b0-da6c02db0342.xml.asp">Defining an SMB Request</a>
                		  </div>
		  
</section>

