---
id: protocol-rpc
slug: rpc
name: RPC
expandedName: Remote Procedure Call protocol
origin: historical
provenance:
  source: protocols/protocol_RPC.htm
  sha256: a61c5994672a18f81d18b839780e1cd20ea7d7dee73664ed040e0a4d3096bcf7
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Remote Procedure Call protocol
layers:
  - Session Layer
suites:
  - SUN protocol suite
summary:
  - label: Protocol
    html: Remote Procedure Call protocol
  - label: Protocol suite
    html: SUN protocol suite
  - label: Layer
    html: Session Layer
  - label: Type
    html: Remote procedure call protocol
  - label: Latest Version
    html: RPCv2
  - label: Ports
    html: Dynamic
originalUpdate: '2005-11-10 16:17:24'
rfcs:
  - 1050
  - 1057
  - 1790
  - 1831
  - 1833
  - 2695
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

			The Remote Procedure Call (RPC) protocol is designed to augment IP in a different way than TCP. While TCP is targeted at the transfer of large data streams, RPC is designed for network programming, allowing a program to make a subroutine call on a remote machine. The most important application of RPC is the NFS file sharing protocol.
<br />
<br />The ONC RPC protocol is based on the remote procedure call model, which is similar to the local procedure call model. The remote procedure call model is similar. One thread of control logically winds through two processes: the caller's process, and a server's process. On the server side, a process is dormant awaiting the arrival of call message.
<br />
<br />There are a few important ways in which remote procedure calls differ from local procedure calls:
<br /><ul><li><b>Error handling:</b></li><li> failures of the remote server or network must be handled when using remote procedure calls.
<br /><br /></li>
<li><b>Global variables and side-effects:</b></li><li> since the server does not have access to the client's address space, hidden arguments cannot be passed as global variables or returned as side effects.
<br /><br /></li>
<li><b>Performance:</b></li><li> remote procedures usually operate one or more orders of magnitude slower than local procedure calls.
<br /><br /></li>
<li><b>Authentication:</b></li><li> since remote procedure calls can be transported over unsecured networks, authentication may be necessary. Authentication prevents one entity from masquerading as some other entity.</li></ul>
<br />
<br />The RPC protocol can be implemented on several different transport protocols. The RPC protocol does not care how a message is passed from one process to another, but only with specification and interpretation of messages.
<br />
<br />It is important to point out that RPC does not try to implement any kind of reliability and that the application may need to be aware of the type of transport protocol underneath RPC. If it knows it is running on top of a reliable transport such as TCP, then most of the work is already done for it. On the other hand, if it is running on top of an unreliable transport such as UDP, it must implement its own time-out, retransmission, and duplicate detection policies as the RPC protocol does not provide these services.
<br />
<br />The RPC protocol provides the fields necessary for a client to identify itself to a service, and vice-versa, in each call and reply message. Security and access control mechanisms can be built on top of this message authentication. Several different authentication protocols can be supported.
<br /><hr />
<br /><b>RPC Programs and Procedures</b>
<br />The RPC call message has three unsigned integer fields - remote program number, remote program version number, and remote procedure number - which uniquely identify the procedure to be called. Program numbers are administered by a central authority (rpc@sun.com). The procedure number identifies the procedure to be called. These numbers are documented in the specific program's protocol specification.
<br />
<br /><b>Authentication</b>
<br />Provisions for authentication of caller to service and vice-versa are provided as a part of the RPC protocol. The call message has two authentication fields, the credential and verifier.  The reply message has one authentication field, the response verifier.
<br />
<br /><b>Program Number Assignment</b>
<br />Program numbers are given out in groups of hexadecimal 20000000 (decimal 536870912) according to the following chart:
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>0-1fffffff</td><td>defined by rpc@sun.com</td></tr><tr><td>20000000-3fffffff</td><td>defined by user</td></tr><tr><td>40000000-5fffffff</td><td>transient</td></tr><tr><td>60000000-7fffffff</td><td>reserved</td></tr><tr><td>80000000-9fffffff</td><td>reserved</td></tr><tr><td>a0000000- bfffffff</td><td>reserved</td></tr><tr><td>c0000000- dfffffff</td><td>reserved</td></tr><tr><td>e0000000 - ffffffff</td><td>reserved</td></tr></tbody></table></div></div>
<br />The first group is a range of numbers administered by rpc@sun.com and should be identical for all sites. The second range is for applications peculiar to a particular site. This range is intended primarily for debugging new programs. When a site develops an application that might be of general interest, that application should be given an assigned number in the first range. Application developers may apply for blocks of RPC program numbers in the first range by sending electronic mail to "rpc@sun.com". The third group is for applications that generate program numbers dynamically.  The final groups are reserved for future use, and should not be used.
<br />
<br /><b>Other Uses of the RPC Protocol</b>
<br />The intended use of this protocol is for calling remote procedures. Normally, each call message is matched with a reply message. However, the protocol itself is a message-passing protocol with which other (non-procedure call) protocols can be implemented.
<br /><ul><li><b>Batching</b><br /></li>
<li>Batching is useful when a client wishes to send an arbitrarily large sequence of call messages to a server. Batching typically uses reliable byte stream protocols (like TCP) for its transport
<br /></li><li>Broadcast Remote Procedure Calls
<br /></li><li>In broadcast protocols, the client sends a broadcast call to the network and waits for numerous replies. This requires the use of packet-based protocols (like UDP) as its transport protocol.</li></ul>
<br /><hr />
<br /><b>RPC Message protocol</b>
<br /><ul><li><b>The RPC message</b><br /></li>
<li>All messages start with a transaction identifier, xid, followed by a two-armed discriminated union. The union's discriminant is a msg_type which switches to one of the two types of the message.  The xid of a REPLY message always matches that of the initiating CALL message. NB: The xid field is only used for clients matching reply messages with call messages or for servers detecting retransmissions; the service side cannot treat this id as any type of sequence number.
<br /></li><li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">      struct rpc_msg {
         unsigned int xid;
         union switch (msg_type mtype) {
         case CALL:
            call_body cbody;
         case REPLY:
            reply_body rbody;
         } body;
      };</pre><br /></li>
<li><b>Body of an RPC call</b><br /></li>
<li>In version 2 of the RPC protocol specification must be equal to 2. The fields prog, vers, and proc specify the remote program, its version number, and the procedure within the remote program to be called. After these fields are two authentication parameters: cred (authentication credential) and verf (authentication verifier).  
<br /></li><li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 2" tabindex="0">      struct call_body {
         unsigned int rpcvers;       /* must be equal to two (2) */
         unsigned int prog;
         unsigned int vers;
         unsigned int proc;
         opaque_auth  cred;
         opaque_auth  verf;
         /* procedure specific parameters start here */
      };</pre><br /></li>
<li><b>Body of a reply to an RPC call</b>
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 3" tabindex="0">&gt;      union reply_body switch (reply_stat stat) {
      case MSG_ACCEPTED:
         accepted_reply areply;
      case MSG_DENIED:
         rejected_reply rreply;
      } reply;</pre>
<br /></li><li><b>Reply to an RPC call that was accepted by the server</b><br /></li>
<li>There could be an error even though the call was accepted. The first field is an authentication verifier that the server generates in order to validate itself to the client.  It is followed by a union whose discriminant is an enum accept_stat. The SUCCESS arm of the union is protocol specific. The PROG_UNAVAIL, PROC_UNAVAIL, GARBAGE_ARGS, and SYSTEM_ERR arms of the union are void. The PROG_MISMATCH arm specifies the lowest and highest version numbers of the remote program supported by the server.
<br /></li><li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 4" tabindex="0">      struct accepted_reply {
         opaque_auth verf;
         union switch (accept_stat stat) {
         case SUCCESS:
            opaque results[0];
            /*
             * procedure-specific results start here
             */
          case PROG_MISMATCH:
             struct {
                unsigned int low;
                unsigned int high;
             } mismatch_info;
          default:
             /*
              * Void.  Cases include PROG_UNAVAIL, PROC_UNAVAIL,
              * GARBAGE_ARGS, and SYSTEM_ERR.
              */
             void;
          } reply_data;
      };</pre><br /></li>
<li><b>Reply to an RPC call that was rejected by the server</b><br /></li>
<li>The call can be rejected for two reasons: either the server is not running a compatible version of the RPC protocol (RPC_MISMATCH), or the server rejects the identity of the caller (AUTH_ERROR). In case of an RPC version mismatch, the server returns the lowest and highest supported RPC version numbers.  In case of invalid authentication, failure status is returned.
<br /></li><li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 5" tabindex="0">      union rejected_reply switch (reject_stat stat) {
      case RPC_MISMATCH:
         struct {
            unsigned int low;
            unsigned int high;
         } mismatch_info;
      case AUTH_ERROR:
         auth_stat stat;
      };</pre></li></ul>
<br /><hr />
<br /><b>RPC Binding protocol</b>
<br />RPC introduces another step in this process to divorce services from being tied to a given port number. It does so using a special RPC service called PORTMAP or RPCBIND. These binding protocols are unique among RPC services since they have an assigned port of their own (port 111). Other RPC services, running on any port number, can register themselves using an RPC call to port 111. The portmapper offers other RPC calls to permit service lookup. 
<br />
<br />An RPC service is identified by its RPC program number, version number, and the transport address where it may be reached. The transport address, in turn, consists of a network address and a transport selector. In the case of a service available over TCP/IP or UDP/IP, the network address is an IP address, and the transport selector is a TCP or UDP port number.
<br />
<br />The transport selector (ie., the TCP or UDP port) is usually determined dynamically, and varies with each invocation of the service. Server programs allocate a transport address, and register it with a well-known lookup service (well-known because it uses a fixed transport selector, and resides at the same network address as the server).
<br />
<br />Such a lookup service is very desirable because the range of well- known transport selectors is very small for some transports and the number of services is potentially very large. RPCBv3 (Binding protocol version 3 for RPC) and RPCBv4 are both versions of a lookup service, which use the same RPC program number (100000). They both use port 111 over TCP and UDP transports.
<br />
<br /><ul><li><b>RPCBv3</b><br /></li>
<li>RPCBv3 header format
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>1</p></td><td><p>2</p></td><td><p>3</p></td><td><p>4</p></td><td><p>5</p></td><td><p>6</p></td><td><p>7</p></td><td><p>8</p></td><td><p>Octet</p></td></tr><tr><td colspan="8"><p>Program Number</p></td><td><p>1-4</p></td></tr><tr><td colspan="8"><p>Version Number</p></td><td><p>5-8</p></td></tr><tr><td colspan="8"><p>Network ID Length</p></td><td><p>9-12</p></td></tr><tr><td colspan="8"><p>Network ID</p></td><td><p>13-N</p></td></tr><tr><td colspan="8"><p>Universal Address Length</p></td><td><p>N+1-N+4</p></td></tr><tr><td colspan="8"><p>Universal Address</p></td><td><p>N+5-M</p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b>Program</b><br /></li>
<li>The program number
<br /></li><li><b>Version</b><br /></li>
<li>The version number
<br /></li><li><b>Network ID</b><br /></li>
<li>The network ID
<br /></li><li><b>Universal Address</b><br /></li>
<li>The universal address</li></ul><br /><br /></li>

<li><b>RPCBV4</b><br /></li>
<li>Binding protocol version 4 for RPC (RPCv4) is very similar to version 3, but with a few additional parameters.
<br /><br /></li>
<li>RPCBv4 header format
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td><p>1</p></td><td><p>2</p></td><td><p>3</p></td><td><p>4</p></td><td><p>5</p></td><td><p>6</p></td><td><p>7</p></td><td><p>8</p></td><td><p>Octet</p></td></tr><tr><td colspan="8"><p>Program Number</p></td><td><p>1-4</p></td></tr><tr><td colspan="8"><p>Version Number </p></td><td><p>5-8</p></td></tr><tr><td colspan="8"><p>Network ID Length</p></td><td><p>9-12</p></td></tr><tr><td colspan="8"><p>Network ID</p></td><td><p>13-N</p></td></tr><tr><td colspan="8"><p>Universal Address Length</p></td><td><p>N+1-N+4</p></td></tr><tr><td colspan="8"><p>Universal Address</p></td><td><p>N+5-M</p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b>Program</b><br /></li>
<li>The program number
<br /></li><li><b>Version</b><br /></li>
<li>The version number
<br /></li><li><b>Network ID</b><br /></li>
<li>The network ID
<br /></li><li><b>Universal Address</b><br /></li>
<li>The universal address</li></ul></li></ul>
<br /><hr />
<br /><b>RPCSEC GSS</b>
<br />The security protocol version 3 for RPC deals with integrity and privacy as well as authentication. It is described using the XDR language [Srinivasan-xdr]. It uses GSS-API interfaces to provide security services that are independent of the underlying security mechanism.
<br />
<br />An RPC session based on the RPCSEC_GSS security consists of: context creation, RPC data exchange, and context destruction.
<br />
<br />Context creation and destruction use control messages that are not dispatched to service procedures registered by an RPC server. The program and version numbers used in these control messages are the same as the RPC service's program and version numbers.
<br />
<br /><ul><li><b>RPCSEC GSS structure</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td><p>1</p></td><td><p>2</p></td><td><p>3</p></td><td><p>4</p></td><td><p>5</p></td><td><p>6</p></td><td><p>7</p></td><td><p>8</p></td><td><p>Octet</p></td></tr><tr><td colspan="8"><p>Version</p></td><td><p>1-4</p></td></tr><tr><td colspan="8"><p>Procedure </p></td><td><p>5-8</p></td></tr><tr><td colspan="8"><p>Sequence Number</p></td><td><p>9-12</p></td></tr><tr><td colspan="8"><p>Service</p></td><td><p>13-16</p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b>Version</b><br /></li>
<li>The version number
<br /></li><li><b>Procedure</b><br /></li>
<li>The procedure number
<br /></li><li><b>Sequence Number</b><br /></li>
<li>The sequence number
<br /></li><li><b>Service</b><br /></li>
<li>The service number</li></ul></li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: Authentication</b>

The RPC protocol specification defines all three fields to be the following opaque type 
(in the eXternal Data Representation (XDR) language [9]):

          enum auth_flavor {
             AUTH_NONE       = 0,
             AUTH_SYS        = 1,
             AUTH_SHORT      = 2
             /* and more to be defined */
          };

          struct opaque_auth {
             auth_flavor flavor;
             opaque body&lt;400&gt;;
          };</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2</b>

Given that a call message was accepted, the following is the status of an attempt to 
call a remote procedure.

          enum accept_stat {
             SUCCESS       = 0, /* RPC executed successfully             */
             PROG_UNAVAIL  = 1, /* remote hasn't exported program        */
             PROG_MISMATCH = 2, /* remote can't support version #        */
             PROC_UNAVAIL  = 3, /* program can't support procedure       */
             GARBAGE_ARGS  = 4, /* procedure can't decode params         */
             SYSTEM_ERR    = 5  /* errors like memory allocation failure */
          };

Reasons why a call message was rejected:
          enum reject_stat {
             RPC_MISMATCH = 0, /* RPC version number != 2          */
             AUTH_ERROR = 1    /* remote can't authenticate caller */
          };

Why authentication failed:
          enum auth_stat {
             AUTH_OK           = 0,  /* success                          */
             /*
              * failed at remote end
              */
             AUTH_BADCRED      = 1,  /* bad credential (seal broken)     */
             AUTH_REJECTEDCRED = 2,  /* client must begin new session    */
             AUTH_BADVERF      = 3,  /* bad verifier (seal broken)       */
             AUTH_REJECTEDVERF = 4,  /* verifier expired or replayed     */
             AUTH_TOOWEAK      = 5,  /* rejected for security reasons    */
             /*
              * failed locally
              */
             AUTH_INVALIDRESP  = 6,  /* bogus response verifier          */
             AUTH_FAILED       = 7   /* reason unknown                   */
          };</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: Service Described in the RPC Language</b>

       program PING_PROG {
             /*
              * Latest and greatest version
              */
             version PING_VERS_PINGBACK {
                void
                PINGPROC_NULL(void) = 0;
                /*
                 * Ping the client, return the round-trip time
                 * (in microseconds). Returns -1 if the operation
                 * timed out.
                 */
                int
                PINGPROC_PINGBACK(void) = 1;
             } = 2;

             /*
              * Original version
              */
             version PING_VERS_ORIG {
                void
                PINGPROC_NULL(void) = 0;
             } = 1;
          } = 1;

          const PING_VERS = 2;      /* latest version */

The first version described is PING_VERS_PINGBACK with two procedures, PINGPROC_NULL 
and PINGPROC_PINGBACK. PINGPROC_NULL takes no arguments and returns no results, 
but it is useful for computing round-trip times from the client to the server and back 
again. By convention, procedure 0 of any RPC protocol should have the same semantics, 
and never require any kind of authentication. The second procedure is used for the 
client to have the server do a reverse ping operation back to the client, and it 
returns the amount of time (in microseconds) that the operation used.  The next 
version, PING_VERS_ORIG, is the original version of the protocol and it does not 
contain PINGPROC_PINGBACK procedure. It is useful for compatibility with old client 
programs, and as this program matures it may be dropped from the protocol entirely.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 4" tabindex="0"><b>Example 4: The RPC Language Specification</b>

The RPC language is identical to the XDR language except for the added definition 
of a "program-def" described below.

       program-def:
          "program" identifier "{"
             version-def
             version-def *
          "}" "=" constant ";"

       version-def:
          "version" identifier "{"
              procedure-def
              procedure-def *
          "}" "=" constant ";"

       procedure-def:
          type-specifier identifier "(" type-specifier
            ("," type-specifier )* ")" "=" constant ";"</pre>
<br />	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>RPC</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Authentication</b><br />The process of identifying an individual, usually based on a username and password. In security systems, authentication is distinct from authorization , which is the process of giving individuals access to system objects based on their identity. Authentication merely ensures that the individual is who he or she claims to be, but says nothing about the access rights of the individual.<br /><br /><b>GSS-API</b><br />The GSS-API (Generic Security Service Application Program Interface) is a generic API for doing client-server authentication.
<br />
<br />A typical GSS-API caller is itself a communications protocol, calling on GSS-API in order to protect its communications with authentication, integrity, and/or confidentiality security services. A GSS-API caller accepts tokens provided to it by its local GSS-API implementation and transfers the tokens to a peer on a remote system; that peer passes the received tokens to its local GSS-API implementation for processing. The security services available through GSS-API in this fashion are implementable (and have been implemented) over a range of underlying mechanisms based on secret-key and public-key cryptographic technologies.
<br />
<br />The GSS-API separates the operations of initializing a security context between peers, achieving peer entity authentication (GSS_Init_sec_context() and GSS_Accept_sec_context() calls), from the operations of providing per-message data origin authentication and data integrity protection (GSS_GetMIC() and GSS_VerifyMIC() calls) for messages subsequently transferred in conjunction with that context.<br /><br /><b>NFS</b><br />NFS (Network File System) is a client/server application designed by Sun Microsystems that allows all network users to access shared files stored on computers of different types. NFS provides access to shared files through an interface called the Virtual File System (VFS) that runs on top of TCP/IP. Users can manipulate shared files as if they were stored locally on the user's own hard disk. 
<br />
<br />With NFS, computers connected to a network operate as clients while accessing remote files, and as servers while providing remote users access to local shared files. The NFS standards are publicly available and widely used.<br /><br /><b>XDR</b><br />XDR (eXternal Data Representation) is a standard for the description and encoding of data. It is useful for transferring data between different computer architectures, and has been used to communicate data between such diverse machines as the SUN WORKSTATION*, VAX*, IBM-PC*, and Cray*.
<br />
<br />XDR uses a language to describe data formats. The language can only be used only to describe data; it is not a programming language. This language allows one to describe intricate data formats in a concise manner.
<br />
<br />The XDR standard makes the following assumption: that bytes (or octets) are portable, where a byte is defined to be 8 bits of data. A given hardware device should encode the bytes onto the various media in such a way that other hardware devices may decode the bytes without loss of meaning.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1057.html">RFC 1057</a>] RPC: Remote Procedure Call Protocol Specification Version 2.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1050.html">RFC 1050</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1790.html">RFC 1790</a>] An Agreement between the Internet Society and Sun Microsystems, Inc. in the Matter of ONC RPC and XDR Protocols
[<a href="https://www.rfc-editor.org/rfc/rfc1831.html">RFC 1831</a>] RPC: Remote Procedure Call Protocol Specification Version 2.
[<a href="https://www.rfc-editor.org/rfc/rfc1833.html">RFC 1833</a>] Binding Protocols for ONC RPC Version 2.
[<a href="https://www.rfc-editor.org/rfc/rfc2695.html">RFC 2695</a>] Authentication Mechanisms for ONC RPC.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc1050.html">RFC 1050</a>] RPC: Remote Procedure Call Protocol Specification.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1057.html">RFC 1057</a>.
                		  </div>
		  
</section>

