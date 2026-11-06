---
id: protocol-afp
slug: afp
name: AFP
expandedName: AppleTalk Filing Protocol
origin: historical
provenance:
  source: protocols/protocol_AFP.htm
  sha256: a25a79e1bc1eac0b99068a38ccd53f9b8a58bd7a3248666db693b326db310c59
  provider: 'Colasoft Co., Ltd.'
aliases:
  - AppleTalk Filing Protocol
layers:
  - Application Layer
suites:
  - AppleTalk
summary:
  - label: Protocol
    html: AppleTalk Filing Protocol
  - label: Protocol suite
    html: AppleTalk
  - label: Layer
    html: Application Layer
  - label: Related protocols
    html: 'Ethernet,<br />Token Ring,<br />FDDI,<br />AppleTalk'
originalUpdate: '2006-01-12 17:27:28'
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

			The AppleTalk Filing Protocol (AFP) enables file sharing across a network. Clients can gain access to files on remote servers by using native file system commands. AFP also provides user authentication and file access control. On Macintosh computers, the AFP server is implemented as AppleShare. AFP is built on top of the AppleTalk Session Protocol (ASP), if AppleTalk is being used, or on top of the Data Stream Interface (DSI), if TCP/IP is being used.
<br />
<br />This protocol preserves the transparency of the network by allowing users to manipulate remotely stored files in exactly the same manner as locally stored files. AFP uses the services provided by the ASP, the ATP, and the AEP.
<br />
<br />AFP passes user commands down the protocol stack to lower-layer protocols that handle establishing connections and monitoring data flow between systems. AFP itself resides in the presentation and application layers of the AppleTalk protocol stack. It has the following features:
<br /><ul><li>AFP sets up an environment for a user that appears as if files on a remote file server are available locally.<br /></li> 
<li>Access to server files is handled using the same procedures as access to local files, except that a user must initially establish a connection to the remote file server. <br /></li>
<li>AFP provides security features that can restrict user access to files.</li></ul>
<br />
<br />AppleShare is Apple's client and server software that allows Mac OS (operating system) users to access shared files and printers. It is based on AFP. Macintosh users access AppleShare servers through AppleShare client software. Note that starting with the Macintosh System 7 OS, Macintosh users were able to share files on their own systems with other users.
<br />
<br />In 1995, Apple introduced its Open Transport software, which allows the Macintosh system to support multiple protocols. This move was made primarily to add support for TCP/IP and the full suite of Internet protocols. In this scheme, AFP is tunneled across the TCP/IP network, allowing users to gain access to AppleShare servers, Web servers, FTP servers, and other services across intranets.
<br />
<br />The protocol serves functions similar to SMB, which is the file sharing protocol in Windows environment. An AppleFileServer, which provides AFP services, contains an integer buffer overflow. The overflow can be triggered by a specially crafted "FPLoginExt" (authentication) request that declares a negative length for the "User Authentication Method" string. An unauthenticated attacker can exploit this flaw to crash the AFP server. Code execution (with root privileges) may be possible but has not been confirmed at this time. Note that the AFP service is not enabled by default.
<br /><hr />
<br /><b>Frames</b>
<br />AFP frames can be one of the following commands:
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>[lock/unlock bytes]</td><td>Locks or unlocks a specified byte range.</td></tr><tr><td>[close volume]</td><td>Closes the specified volume resource.</td></tr><tr><td>[close directory]</td><td>Closes the specified directory.</td></tr><tr><td>[close fork]</td><td>Closes the specified fork (file).</td></tr><tr><td>[copy file]</td><td>Copies the specified file.</td></tr><tr><td>[create directory]</td><td>Creates the specified directory.</td></tr><tr><td>[create file]</td><td>Creates the specified file.</td></tr><tr><td>[delete file]</td><td>Deletes the specified file or directory.</td></tr><tr><td>[list directory]</td><td>Lists the specified directory.</td></tr><tr><td>[flush to disk]</td><td>Writes data held in RAM to disk.</td></tr><tr><td>[flush fork]</td><td>Writes data to disk for the specified fork.</td></tr><tr><td>[get fork params]</td><td>Retrieves parameters for the specified fork.</td></tr><tr><td>[get server info]</td><td>Retrieves server information.</td></tr><tr><td>[get server params]</td><td>Retrieves server parameters.</td></tr><tr><td>[get volume params]</td><td>Retrieves volume parameters.</td></tr><tr><td>[consumer login]</td><td>Begins workstation log-in.</td></tr><tr><td>[login continue]</td><td>Continues workstation log-in.</td></tr><tr><td>[logout]</td><td>Workstation log-out.</td></tr><tr><td>[map user/group ID]</td><td>Gets ID associated with user/group name.</td></tr><tr><td>[map user/grp name]</td><td>Gets name associated with user/group ID.</td></tr><tr><td>[move and rename]</td><td>Moves and renames a file.</td></tr><tr><td>[open volume]</td><td>Opens the specified volume.</td></tr><tr><td>[open directory]</td><td>Opens the specified directory.</td></tr><tr><td>[open fork]</td><td>Opens the specified fork (file).</td></tr><tr><td>[read from fork]</td><td>Reads from the specified fork (file).</td></tr><tr><td>[rename file/dir]</td><td>Renames a file or directory.</td></tr><tr><td>[set dir params]</td><td>Sets directory parameters.</td></tr><tr><td>[set file params]</td><td>Sets file parameters.</td></tr><tr><td>[set fork params]</td><td>Sets fork parameters.</td></tr><tr><td>[set volume params]</td><td>Sets volume parameters.</td></tr><tr><td>[write to fork]</td><td>Writes to the specified fork (file).</td></tr><tr><td>[get file/dir pars]</td><td>Gets file or directory parameters.</td></tr><tr><td>[set file/dir pars]</td><td>Sets file or directory parameters.</td></tr><tr><td>[change password]</td><td>Changes user password.</td></tr><tr><td>[get user info]</td><td>Retrieves user information.</td></tr><tr><td>[open database]</td><td>Opens the desktop database.</td></tr><tr><td>[close database]</td><td>Closes the desktop database.</td></tr><tr><td>[get icon]</td><td>Retrieves an icon from the desktop database.</td></tr><tr><td>[get icon info]</td><td>Retrieves icon information.</td></tr><tr><td>[add APPL mapping]</td><td>Adds application information.</td></tr><tr><td>[remove APPL]</td><td>Removes application information.</td></tr><tr><td>[get APPL mapping]</td><td>Retrieves application information.</td></tr><tr><td>[add comment]</td><td>Adds a comment to a file or directory.</td></tr><tr><td>[remove comment]</td><td>Removes a comment from a file or directory.</td></tr><tr><td>[get comment]</td><td>Retrieves comment text from a file/directory.</td></tr><tr><td>[add icon]</td><td>Adds an icon for an application.</td></tr></tbody></table></div></div>
<br />
<br /><b>Frame Parameters</b>
<br />Apple AFP frames can contain the following parameters:
<br /><ul><li><b>APPL index</b>
<br />Index, beginning with 1, of the first application mapping contained in the frame.<br /><br /></li>

<li><b>APPL tag</b>
<br />Tag information associated with the application mapping contained in the frame.<br /><br /></li>

<li><b>Attributes</b>
<br />Attributes of a file or directory are as follows: <br /></li>
<li><ul><li><b>Directory attributes:</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>Inv</td><td>Invisible to workstation user.</td></tr><tr><td>Sys</td><td>System directory.</td></tr><tr><td>Bk</td><td>Backup is needed (dir modified).</td></tr><tr><td>RI</td><td>Rename inhibit mode set.</td></tr><tr><td>DI</td><td>Delete inhibit mode set.</td></tr></tbody></table></div></div><br /></li>
<li><b>File attributes:</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td>Inv</td><td>Invisible to workstation user.</td></tr><tr><td>MU</td><td>Multi-user application.</td></tr><tr><td>RAO</td><td>File resource fork already open.</td></tr><tr><td>DAO</td><td>File data fork already open.</td></tr><tr><td>RO</td><td>Read only mode set for both forks.</td></tr><tr><td>WI</td><td>Cannot write to either fork.</td></tr><tr><td>Sys</td><td>File is system file.</td></tr><tr><td>Bk</td><td>Backup is needed (file modified).</td></tr><tr><td>RI</td><td>Rename inhibit mode set.</td></tr><tr><td>DI</td><td>Delete inhibit mode set.</td></tr><tr><td>CP</td><td>Copy protect mode set.</td></tr></tbody></table></div></div></li></ul><br /><br /></li>

<li><b>Backup date</b>
<br />Date of the last time the system backed-up the volume or directory.<br /><br /></li>

<li><b>Bitmap</b>
<br />Field containing bits used to indicate the parameters present in request or reply.<br /><br /></li>

<li><b>Request count</b>
<br />Maximum number of files to return for list directory requests.<br /><br /></li>

<li><b>Creation date</b>
<br />Date that the system created the file or directory.<br /><br /></li>

<li><b>File creator</b>
<br />ID string of the application or device that created a file.<br /><br /></li>

<li><b>Destination directory ID</b>
<br />Destination directory ID for a file copy or move.<br /><br /></li>

<li><b>Data fork length</b>
<br />Length of the file.<br /><br /></li>

<li><b>Destination volume ID</b>
<br />Destination volume ID for a file copy or move.<br /><br /></li>

<li><b>Directory bitmap</b>
<br />Field with bits that indicate which directory parameters are present in AFP frames.<br /><br /></li>

<li><b>Directory ID</b>
<br />Identifier associated with the specified directory.<br /><br /></li>

<li><b>Desktop database reference number</b>
<br />Reference number used to access the desktop database.<br /><br /></li>

<li><b>File bitmap</b>
<br />Bits that indicate which file parameters are present in AFP frames.<br /><br /></li>

<li><b>Free bytes</b>
<br />Number of bytes free on the volume.<br /><br /></li>

<li><b>Open fork reference number</b>
<br />Reference code used to access the open fork.<br /><br /></li>

<li><b>Group ID</b>
<br />Group ID used for authentication.<br /><br /></li>

<li><b>Group name</b>
<br />Group name used for authentication.<br /><br /></li>

<li><b>Icon tag</b>
<br />Tag information associated with the specified icon.<br /><br /></li>

<li><b>Icon size</b>
<br />Size of the specified icon, in bytes.<br /><br /></li>

<li><b>Icon type</b>
<br />Type code identifying the specified icon.<br /><br /></li>

<li><b>Long name</b>
<br />Long file name (maximum 31 characters).<br /><br /></li>

<li><b>Machine type</b>
<br />Type of AFP server in use.<br /><br /></li>

<li><b>Maximum reply size</b>
<br />Maximum number of bytes this protocol returns for list directory requests.<br /><br /></li>

<li><b>Access mode</b>
<br />Open mode attributes for a fork, represented as follows:
<br /><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td>R</td><td>Allows everyone read access.</td></tr><tr><td>W</td><td>Allows everyone write access.</td></tr><tr><td>Deny-R</td><td>Denies read access if the file is open.</td></tr><tr><td>Deny-W</td><td>Denies write access if the file is open.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Modification date</b>
<br />Date the system last modified the file or directory.<br /><br /></li>

<li><b>New line character</b>
<br />Character used to indicate a new line (CR, LF) for read data.<br /><br /></li>

<li><b>New line mask</b>
<br />Value used to mask data for comparison to the new line character.<br /><br /></li>

<li><b>Offset</b>
<br />Starting file offset for write commands.<br /><br /></li>

<li><b>Offspring count</b>
<br />Number of files returned for list directory requests.<br /><br /></li>

<li><b>Owner ID</b>
<br />ID of the file or directory.<br /><br /></li>

<li><b>Volume password</b>
<br />Password required for access to the volume.<br /><br /></li>

<li><b>Parent directory ID</b>
<br />ID of the parent directory.<br /><br /></li>

<li><b>ProDOS information</b>
<br />ProDOS file type and Aux type for use by ProDOS workstations.<br /><br /></li>

<li><b>Resource fork length</b>
<br />Length of the file resource fork, in bytes.<br /><br /></li>

<li><b>Source directory ID</b>
<br />Source directory ID for a file copy or move.<br /><br /></li>

<li><b>Short name</b>
<br />Short file name (maximum 12 characters).<br /><br /></li>

<li><b>Signature</b>
<br />Identifies the volume type, as follows:
<br /><div><div class="table-scroll" role="region" aria-label="Description table 5" tabindex="0"><table><caption>Description: preserved table 5</caption><tbody><tr><td>1</td><td>Flat, no support for directories.</td></tr><tr><td>2</td><td>Fixed directory ID.</td></tr><tr><td>3</td><td>Variable directory ID.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Source volume ID</b>
<br />Source volume ID for a file copy.<br /><br /></li>

<li><b>Start index</b>
<br />Start index, beginning with 1, of the requested file list for list directory commands and replies.<br /><br /></li>

<li><b>Total bytes</b>
<br />Total number of bytes on the volume.<br /><br /></li>

<li><b>User authentication method</b>
<br />Type of user authentication in effect.<br /><br /></li>

<li><b>User ID</b>
<br />User ID number used for authentication.<br /><br /></li>

<li><b>User name</b>
<br />User name used for authentication.<br /><br /></li>

<li><b>Version</b>
<br />Version number of AFP in use.<br /><br /></li>

<li><b>Volume bitmap</b>
<br />Field with bits that indicate which volume parameters are present in AFP frames.<br /><br /></li>

<li><b>Volume ID</b>
<br />Identifier associated with the specified volume.<br /><br /></li>

<li><b>Volumes</b>
<br />Number of volumes contained on the server.</li></ul>
<br /><hr />
<br /><b>Apple Filing Protocol result codes</b>
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 6" tabindex="0"><table><caption>Description: preserved table 6</caption><tbody><tr><td>Constant</td><td>Value</td><td>Description</td></tr><tr><td>kASPSessClosed</td><td>¨C1072</td><td>ASP session closed.</td></tr><tr><td>kFPAccessDenied</td><td>¨C5000</td><td>User does not have the access privileges required to use the command.</td></tr><tr><td>kFPAuthContinue</td><td>¨C5001</td><td>Authentication is not yet complete.</td></tr><tr><td>kFPBadUAM</td><td>¨C5002</td><td>Specified UAM is unknown</td></tr><tr><td>kFPBadVersNum</td><td>¨C5003</td><td>Server does not support the specified AFP version.</td></tr><tr><td>kFPBitmapErr</td><td>¨C5004</td><td>Attempt was made to get or set a parameter that cannot be obtained or set with this command, or a required bitmap is null</td></tr><tr><td>kFPCantMove</td><td>¨C5005</td><td>Attempt was made to move a directory into one of its descendent directories.</td></tr><tr><td>kFPDenyConflict</td><td>¨C5006</td><td>Specified fork cannot be opened because of a deny modes conflict.</td></tr><tr><td>kFPDirNotEmpty</td><td>¨C5007</td><td>Directory is not empty.</td></tr><tr><td>kFPDiskFull</td><td>¨C5008</td><td>No more space exists on the volume</td></tr><tr><td>kFPEOFErr</td><td>¨C5009</td><td>No more matches or end of fork reached.</td></tr><tr><td>kFPFileBusy</td><td>¨C5010</td><td>When attempting a hard create, the file already exists and is open.</td></tr><tr><td>kFPFlatVol</td><td>¨C5011</td><td>Volume is flat and does not support directories.</td></tr><tr><td>kFPItemNotFound</td><td>¨C5012</td><td>Specified APPL mapping, comment, or icon was not found in the Desktop database; specified ID is unknown.</td></tr><tr><td>kFPLockErr</td><td>¨C5013</td><td>Some or all of the requested range is locked by another user; a lock range conflict exists.</td></tr><tr><td>kFPMiscErr</td><td>¨C5014</td><td>Non-AFP error occurred.</td></tr><tr><td>kFPNoMoreLocks</td><td>¨C5015</td><td>Server¡¯s maximum lock count has been reached.</td></tr><tr><td>kFPNoServer</td><td>¨C5016</td><td>Server is not responding.</td></tr><tr><td>kFPObjectExists</td><td>¨C5017</td><td>File or directory already exists.</td></tr><tr><td>kFPObjectNotFound</td><td>¨C5018</td><td>Input parameters do not point to an existing directory, file, or volume.</td></tr><tr><td>kFPParamErr</td><td>¨C5019</td><td>Session reference number, Desktop database reference number, open fork reference number, Volume ID, Directory ID, File ID, Group ID, or subfunction is unknown; byte range starts before byte zero; pathname is invalid; pathname type is unknown; user name is null, exceeds the UAM¡¯s user name length limit, or does not exist, MaxReplySize is too small to hold a single offspring structure, ThisUser bit is not set, authentication failed for an undisclosed reason, specified user is unknown or the account has been disabled due to too many login attempts; ReqCount or Offset is negative; NewLineMask is invalid.</td></tr><tr><td>kFPRangeNotLocked</td><td>¨C5020</td><td>Attempt to unlock a range that is locked by another user or that is not locked at all.</td></tr><tr><td>kFPRangeOverlap</td><td>¨C5021</td><td>User tried to lock some or all of a range that the user has already locked.</td></tr><tr><td>kFPSessClosed</td><td>¨C5022</td><td>Session is closed.</td></tr><tr><td>kFPUserNotAuth</td><td>¨C5023</td><td>UAM failed (the specified old password doesn¡¯t match); no user is logged in yet for the specified session; authentication failed; password is incorrect.</td></tr><tr><td>kFPCallNotSupported</td><td>¨C5024</td><td>Server does not support this command.</td></tr><tr><td>kFPObjectTypeErr</td><td>¨C5025</td><td>Input parameters point to the wrong type of object.</td></tr><tr><td>kFPTooManyFilesOpen</td><td>¨C5026</td><td>Server cannot open another fork.</td></tr><tr><td>kFPServerGoingDown</td><td>¨C5027</td><td>Server is shutting down.</td></tr><tr><td>kFPCantRename</td><td>¨C5028</td><td>Attempt was made to rename a volume or root directory.</td></tr><tr><td>kFPDirNotFound</td><td>¨C5029</td><td>Input parameters do not point to an existing directory.</td></tr><tr><td>kFPIconTypeError</td><td>¨C5030</td><td>New icon¡¯s size is different from the size of the existing icon</td></tr><tr><td>kFPVolLocked</td><td>¨C5031</td><td>Volume is Read Only.</td></tr><tr><td>kFPObjectLocked</td><td>¨C5032</td><td>File or directory is marked DeleteInhibit; directory being moved, renamed, or moved and renamed is marked RenameInhibit; file being moved and renamed is marked RenameInhibit; attempt was made to open a file for writing that is marked WriteInhibit; attempt was made to rename a file or directory that is marked RenameInhibit.</td></tr><tr><td>kFPContainsSharedErr</td><td>¨C5033</td><td>Directory contains a share point.</td></tr><tr><td>kFPIDNotFound</td><td>¨C5034</td><td>File ID was not found. (No file thread exists.)</td></tr><tr><td>kFPIDExists</td><td>¨C5035</td><td>File already has a File ID.</td></tr><tr><td>kFPDiffVolErr</td><td>¨C5036</td><td>Wrong volume.</td></tr><tr><td>kFPCatalogChanged</td><td>¨C5037</td><td>Catalog has changed.</td></tr><tr><td>kFPSameObjectErr</td><td>¨C5038</td><td>Two objects that should be different are the same object.</td></tr><tr><td>kFPBadIDErr</td><td>¨C5039</td><td>File ID is not valid.</td></tr><tr><td>kFPPwdSameErr</td><td>¨C5040</td><td>User attempted to change his or her password to the same password that is currently set.</td></tr><tr><td>kFPPwdTooShortErr</td><td>¨C5041</td><td>User password is shorter than the server¡¯s minimum password length, or user attempted to change password to a password that is shorter than the server¡¯s minimum password length.</td></tr><tr><td>kFPPwdExpiredErr</td><td>¨C5042</td><td>User¡¯s password has expired.</td></tr><tr><td>kFPInsideSharedErr</td><td>¨C5043</td><td>Directory being moved contains a share point and is being moved into a directory that is shared or is the descendent of a directory that is shared.</td></tr><tr><td>kFPInsideTrashErr</td><td>¨C5044</td><td>Shared directory is being moved into the Trash; a directory is being moved to the trash and it contains a shared folder.</td></tr><tr><td>kFPPwdNeedsChangeErr</td><td>¨C5045</td><td>User¡¯s password needs to be changed.</td></tr><tr><td>kFPPwdPolicyErr</td><td>¨C5046</td><td>New password does not conform to the server¡¯s password policy.</td></tr><tr><td>kFPDiskQuotaExceeded</td><td>¨C5047</td><td>Disk quota exceeded.</td></tr></tbody></table></div></div>
<br /><hr />
<br /><b>Revision History</b>
<br />This table describes the changes to Apple Filing Protocol Programming Guide.
<br /><div><div class="table-scroll" role="region" aria-label="Description table 7" tabindex="0"><table><caption>Description: preserved table 7</caption><tbody><tr><td>Date</td><td>Notes</td></tr><tr><td>2005-06-04</td><td>Fixed idle timer information.</td></tr><tr><td>2005-05-12</td><td>Updated for AFP version 3.2.</td></tr></tbody></table></div></div>
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
<td class="MapParent" aria-label="Parent layer protocols">TCP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>AFP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>AEP</b><br />The AppleTalk Echo Protocol (AEP) allows a node to send data to any other node on an AppleTalk internet and receive an echoed copy of that data in return. The AppleTalk Echo Protocol (AEP) provides an echo service to AppleTalk hosts. It can specify up to 585 bytes of data for an echo transaction.<br /><br /><b>ASP</b><br />The AppleTalk Session Protocol (ASP) manages sessions for higher layer protocols such as AFP. ASP issues a unique session identifier for each logical connection and continuously monitors the status of each connection. It maintains idle sessions by periodically exchanging keep alive frames in order to verify the session status.<br /><br /><b>ATP</b><br />The AppleTalk Transaction Protocol (ATP) provides reliable delivery service for transaction-oriented operations. ATP uses a bitmap token to handle acknowledgement and flow control and a sequence of reserved bytes for use by higher level protocols.<br /><br /><b>AppleTalk</b><br />An inexpensive local-area network (LAN) architecture built into all Apple Macintosh computers and laser printers. AppleTalk supports Apple's LocalTalk cabling scheme, as well as Ethernet and IBM Token Ring. It can connect Macintosh computers and printers, and even PCs if they are equipped with special AppleTalk hardware and software.<br /><br /><b>OS</b><br />The most important program that runs on a computer. Every general-purpose computer must have an operating system to run other programs. Operating systems perform basic tasks, such as recognizing input from the keyboard, sending output to the display screen, keeping track of files and directories on the disk, and controlling peripheral devices such as disk drives and printers.<br /><br /><b>SMB</b><br />Server Message Block (SMB) is a message format used by DOS and Windows to share files, directories and devices. NetBIOS is based on the SMB format, and many network products use SMB. These SMB-based networks include LAN Manager, Windows for Workgroups, Windows NT, and LAN Server. There are also a number of products that use SMB to enable file sharing among different operating system platforms. A product called Samba, for example, enables UNIX and Windows machines to share directories and files.<br /><br /><b>TCP/IP</b><br />TCP/IP(transmission Control Protocol/Internet Protocol) is the suite of communications protocols used to connect hosts on the Internet. TCP/IP uses several protocols, the two main ones being TCP and IP. TCP/IP is built into the UNIX operating system and is used by the Internet, making it the de facto standard for transmitting data over networks. Even network operating systems that have their own protocols, such as Netware, also support TCP/IP.<br /><br />			</div>
		  
</section>

