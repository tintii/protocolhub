---
id: protocol-ldap
slug: ldap
name: LDAP
expandedName: Lightweight Directory Access Protocol
origin: historical
provenance:
  source: protocols/protocol_LDAP.htm
  sha256: 800530795f2c67387414f5d731b182ea72ddf046f650277a883d81969ab59005
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Lightweight Directory Access Protocol
layers:
  - Session Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Lightweight Directory Access Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Session Layer
  - label: Type
    html: Session layer directory service access protocol
  - label: Ports
    html: 389 (TCP)
  - label: Related protocols
    html: 'IP,<br />IPv6,<br />TCP,<br />X.500,<br />DAP'
  - label: URI
    html: ' ldap:.'
  - label: Working groups
    html: |-
      Asid, Access, Searching and Indexing of Directories.
      <br />Ldapbis, LDAP (v3) Revision.
      <br />Ldapext, LDAP Extension.
      <br />Ldup, LDAP Duplication/Replication/Update Protocols.
originalUpdate: '2005-12-08 16:14:12'
rfcs:
  - 822
  - 1484
  - 1485
  - 1487
  - 1488
  - 1558
  - 1777
  - 1778
  - 1779
  - 1781
  - 1823
  - 1838
  - 1959
  - 1960
  - 2164
  - 2247
  - 2251
  - 2252
  - 2253
  - 2254
  - 2255
  - 2256
  - 2307
  - 2559
  - 2587
  - 2589
  - 2596
  - 2649
  - 2657
  - 2696
  - 2713
  - 2714
  - 2739
  - 2798
  - 2820
  - 2829
  - 2830
  - 2849
  - 2891
  - 2926
  - 2927
  - 3045
  - 3062
  - 3088
  - 3112
  - 3296
  - 3377
  - 3383
  - 3384
  - 3494
  - 3663
  - 3671
  - 3672
  - 3673
  - 3674
  - 3687
  - 3698
  - 3703
  - 3712
  - 3727
  - 3771
  - 3829
  - 3866
  - 3876
  - 3909
  - 3928
  - 3944
  - 4104
related:
  - protocol-ip
  - protocol-ipv6
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

			The LDAP (Lightweight Directory Access Protocol) provides access to X.500 directories without using the DAP (Directory Access Protocol). It is used for simple management applications and browser applications that provide simple read/write interactive access to the X.500 directory and should complement the DAP. X.500 technology has proved to be highly popular, and therefore led to efforts to reduce the high cost of entry associated with it. Until now methods suggested were based on specific applications and, as such, were limited. The LDAP is also a directory protocol alternative, but it is not dependant on a particular application. As such it is intended to be simpler and less expensive than existing ones.
<br />
<br />LDAP works by a client transmitting a request to a server. In the request the client specifies the operation to be performed. The server must then perform the required operation on the directory. After this, the server returns a response containing the results, or any errors.
<br />
<br />Key aspects of LDAP version 3 are:
<br /><ul><li>All protocol elements of LDAPv2 are supported.<br /><br /></li>

<li>The protocol is carried directly over TCP or other transport, bypassing much of the session/presentation overhead of X.500 DAP.<br /><br /></li>

<li>Most protocol data elements can be encoded as ordinary strings.<br /><br /></li>

<li>Referrals to other servers may be returned.<br /><br /></li>

<li>SASL mechanisms may be used with LDAP to provide association security services.<br /><br /></li>

<li>Attribute values and Distinguished Names have been internationalized through the use of the ISO 10646 character set.<br /><br /></li>

<li>The protocol can be extended to support new operations, and controls may be used to extend existing operations.<br /><br /></li>

<li>Schema is published in the directory for use by clients.</li></ul>
<br /><hr />
<br /><b>Model</b>
<br /><ul><li><b>Protocol Model</b>
<br />The general model adopted by this protocol is one of clients performing protocol operations against servers. In this model, a client transmits a protocol request describing the operation to be performed to a server. The server is then responsible for performing the necessary operation(s) in the directory. Upon completion of the operation(s), the server returns a response containing any results or errors to the requesting client.
<br />
<br />In LDAP versions 1 and 2, no provision was made for protocol servers returning referrals to clients. However, for improved performance and distribution this version of the protocol permits servers to return to clients referrals to other servers. This allows servers to offload the work of contacting other servers to progress operations.
<br />
<br />Note that the core protocol operations defined in this document can be mapped to a strict subset of the X.500(1997) directory abstract service, so it can be cleanly provided by the DAP. However there is not a one-to-one mapping between LDAP protocol operations and DAP operations: server implementations acting as a gateway to X.500 directories may need to make multiple DAP requests.<br /><br /></li>

<li><b>Data Model</b>
<br />The LDAP protocol assumes there are one or more servers which jointly provide access to a Directory Information Tree (DIT). The tree is made up of entries. Entries have names: one or more attribute values from the entry form its relative distinguished name (RDN), which MUST be unique among all its siblings. The concatenation of the relative distinguished names of the sequence of entries from a particular entry to an immediate subordinate of the root of the tree forms that entry's Distinguished Name (DN), which is unique in the tree. 
<br />
<br />An example of a Distinguished Name is CN=Steve Kille, O=Isode Limited, C=GB<br /><br /></li>

<li><b>Relationship to X.500</b>
<br />This document defines LDAP in terms of X.500 as an X.500 access mechanism. An LDAP server MUST act in accordance with the X.500(1993) series of ITU recommendations when providing the service. However, it is not required that an LDAP server make use of any X.500 protocols in providing this service, e.g. LDAP can be mapped onto any other directory system so long as the X.500 data and service model as used in LDAP is not violated in the LDAP interface.<br /><br /></li>

<li><b>Server-specific Data Requirements</b>
<br />An LDAP server MUST provide information about itself and other information that is specific to each server. This is represented as a group of attributes located in the root DSE (DSA-Specific Entry), which is named with the zero-length LDAPDN. These attributes are retrievable if a client performs a base object search of the root with filter "(objectClass=*)", however they are subject to access control restrictions. The root DSE MUST NOT be included if the client performs a subtree search starting from the root.</li></ul>
<br />
<br /><b>Elements of Protocol</b>
<br />The LDAP protocol is described using Abstract Syntax Notation 1 (ASN.1), and is typically transferred using a subset of ASN.1 Basic Encoding Rules. In order to support future extensions to this protocol, clients and servers must ignore elements of sequence encodings whose tags they do not recognize.
<br />
<br />Note that unlike X.500, each change to the LDAP protocol other than through the extension mechanisms will have a different version number. A client will indicate the version it supports as part of the bind request. If a client has not sent a bind, the server must assume that version 3 is supported in the client (since version 2 required that the client bind first).
<br />
<br />Clients may determine the protocol version a server supports by reading the supported LDAP Version attribute from the root DSE. Servers which implement version 3 or later versions must provide this attribute. Servers which only implement version 2 may not provide this attribute.
<br />
<br /><ul><li><b>Common Elements</b>
<br />LDAPMessage envelope PDU (Protocol Data Unit) format, as well as data type definitions which are used in the protocol operations.<br /><br /></li>

<li><b>Bind Operation</b>
<br />The function of the Bind Operation is to allow authentication information to be exchanged between the client and server.
<br />The Bind Request is defined as follows:
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">          BindRequest ::= [APPLICATION 0] SEQUENCE {
            version       INTEGER (1 .. 127),
            name        LDAPDN,
            authentication    AuthenticationChoice }

         AuthenticationChoice ::= CHOICE {
            simple      [0] OCTET STRING,
                     -- 1 and 2 reserved
            sasl        [3] SaslCredentials }

          SaslCredentials ::= SEQUENCE {
            mechanism     LDAPString,
            credentials     OCTET STRING OPTIONAL }</pre><br /><br /></li>

<li><b>Unbind Operation</b>
<br />The function of the Unbind Operation is to terminate a protocol session. The Unbind Operation is defined as follows:
<br />    UnbindRequest ::= [APPLICATION 2] NULL
<br />
<br />The Unbind Operation has no response defined. Upon transmission of an UnbindRequest, a protocol client may assume that the protocol session is terminated. Upon receipt of an UnbindRequest, a protocol server may assume that the requesting client has terminated the session and that all outstanding requests may be discarded, and may close theconnection.<br /><br /></li>

<li><b>Unsolicited Notification</b>
<br />An unsolicited notification is an LDAPMessage sent from the server to the client which is not in response to any LDAPMessage received by the server. It is used to signal an extraordinary condition in the server or in the connection between the client and the server. The notification is of an advisory nature, and the server will not expect any response to be returned from the client.
<br />
<br />The unsolicited notification is structured as an LDAPMessage in which the messageID is 0 and protocolOp is of the extendedResp form. The responseName field of the ExtendedResponse is present. The LDAPOID value MUST be unique for this notification, and not be used in any other situation.<br /><br /></li>

<li><b>Search Operation</b>
<br />The Search Operation allows a client to request that a search be performed on its behalf by a server. This can be used to read attributes from a single entry, from entries immediately below a particular entry, or a whole subtree of entries.</li></ul>
<br />
<br /><b>Protocol Mechanisms</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>OID</td><td>Type</td><td>Description</td></tr><tr><td>1.2.826.0.1.3344810.2.3</td><td>control</td><td>Matched Values Control.</td></tr><tr><td>1.2.840.113556.1.4.473</td><td>control</td><td>Sort Request.</td></tr><tr><td>1.2.840.113556.1.4.474</td><td>control</td><td>Sort Response.</td></tr><tr><td>1.3.6.1.1.7.1</td><td>control</td><td>LCUP Sync Request Control.</td></tr><tr><td>1.3.6.1.1.7.2</td><td>control</td><td>LCUP Sync Update Control.</td></tr><tr><td>1.3.6.1.1.7.3</td><td>control</td><td>LCUP Sync Done Control.</td></tr><tr><td>1.3.6.1.1.8</td><td>extension</td><td>Cancel Operation.</td></tr><tr><td>1.3.6.1.4.1.1466.101.119.1</td><td>extension</td><td>Dynamic Refresh.</td></tr><tr><td>1.3.6.1.4.1.1466.20037</td><td>extension</td><td>Start TLS.</td></tr><tr><td>1.3.6.1.4.1.4203.1.5.1</td><td>feature</td><td>All Operational Attributes.</td></tr><tr><td>1.3.6.1.4.1.4203.1.5.4</td><td>feature</td><td>Language Tag Options.</td></tr><tr><td>1.3.6.1.4.1.4203.1.5.5</td><td>feature</td><td>Language Range Options.</td></tr><tr><td>1.3.6.1.4.1.4203.1.9.1.1</td><td>control</td><td>LDAP Content Synchronization Control.</td></tr><tr><td>1.3.6.1.4.1.4203.1.10.1</td><td>control</td><td>Subentries.</td></tr><tr><td>1.3.6.1.4.1.4203.1.11.1</td><td>extension</td><td>Modify Password.</td></tr><tr><td>1.3.6.1.4.1.4203.1.11.3</td><td>extension</td><td>Who am I?</td></tr><tr><td>2.16.840.1.113730.3.4.2</td><td>control</td><td>Manage Dsa IT.</td></tr><tr><td>2.16.840.1.113730.3.4.15</td><td>control</td><td>Authorization Identity Response Control.</td></tr><tr><td>2.16.840.1.113730.3.4.16</td><td>control</td><td>Authorization Identity Request Control.</td></tr></tbody></table></div></div>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0">Suppose the contacted server (hosta) holds the entry "O=MNN,C=WW" and the entry 
"CN=Manager, O=MNN,C=WW". It knows that either LDAP-capable servers (hostb) or 
(hostc) hold "OU=People, O=MNN, C=WW" (one is the master and the other server a 
shadow), and that LDAP-capable server (hostd) holds the subtree "OU=Roles, O=MNN,
C=WW". If a subtree search of "O=MNN,C=WW" is requested to the contacted server, it 
may return the following:

          SearchResultEntry for O=MNN,C=WW
          SearchResultEntry for CN=Manager,O=MNN,C=WW
          SearchResultReference {
            ldap://hostb/OU=People,O=MNN,C=WW
            ldap://hostc/OU=People,O=MNN,C=WW
          }
        SearchResultReference {
            ldap://hostd/OU=Roles,O=MNN,C=WW
          }
          SearchResultDone (success)

Client implementors should note that when following a SearchResultReference, additional 
SearchResultReference may be generated. Continuing the example, if the client contacted 
the server(hostb) and issued the search for the subtree "OU=People, O=MNN,C=WW", 
the server might respond as follows:

          SearchResultEntry for OU=People,O=MNN,C=WW
          SearchResultReference {
           ldap://hoste/OU=Managers,OU=People,O=MNN,C=WW
          }
          SearchResultReference {
           ldap://hostf/OU=Consultants,OU=People,O=MNN,C=WW
          }
          SearchResultDone (success)

If the contacted server does not hold the base object for the search, then it will 
return a referral to the client.  For example, if the client requests a subtree 
search of "O=XYZ, C=US" to hosta, the server may return only a SearchResultDone 
containing a referral.

          SearchResultDone (referral) {
            ldap://hostg/
          }</pre>
<br />	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>LDAP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>ASN.1</b><br />ASN.1 (Abstract Syntax Notation One) is a language that defines the way data is sent across dissimilar communication systems. ASN.1 ensures that the data received is the same as the data transmitted by providing a common syntax for specifying Application layer (program-to-program communications) protocols.<br /><br /><b>Client</b><br />Clinet is a program which requests services of another program. It is a client part of a client-server architecture. Typically, a client is an application that runs on a personal computer or workstation and relies on a server to perform some operations. For example, an e-mail client is an application that enables you to send and receive e-mail.<br /><br /><b>DAP</b><br />DAP (Directory Access Protocol) is a directory protocol that defines the exchange of requests and outcomes between user and system. The protocol used in communications between a Directory User Agent (DUA) and a Directory System Agent (DSA).<br /><br /><b>ISO</b><br />ISO (International Organization for Standardization) is a network of the national standards institutes of 146 countries, on the basis of one member per country, with a Central Secretariat in Geneva, Switzerland, that coordinates the system. ISO has defined a number of important computer standards, the most significant of which is perhaps OSI (Open Systems Interconnection), a standardized architecture for designing networks.<br /><br /><b>LDAP</b><br />LDAP (Lightweight Directory Access Protocol) is a set of protocols for accessing information directories. LDAP is based on the standards contained within the X.500 standard, but is significantly simpler. And unlike X.500, LDAP supports TCP/IP, which is necessary for any type of Internet access. Because it's a simpler version of X.500, LDAP is sometimes called X.500-lite.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>TCP</b><br />TCP (Transmission Control Protocol) is one of the main protocols in TCP/IP networks. TCP is one of the main protocols in TCP/IP networks. Whereas the IP protocol deals only with packets, TCP enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and also guarantees that packets will be delivered in the same order in which they were sent.<br /><br /><b>X.500</b><br />X500 is an ISO and ITU standard that defines how global directories should be structured. X.500 directories are hierarchical with different levels for each category of information, such as country, state, and city. X.500 supports X.400 systems.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="http://www.iana.org/assignments/directory-system-names">LDAP Directory Systems Names</a>
                <a href="https://www.iana.org/assignments/ldap-parameters">LDAP parameters</a>
                <a href="https://www.openldap.org/www_openldap_default.html">OpenLDAP</a><hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1823.html">RFC 1823</a>] The LDAP Application Program Interface.
[<a href="https://www.rfc-editor.org/rfc/rfc1959.html">RFC 1959</a>] An LDAP URL Format.
[<a href="https://www.rfc-editor.org/rfc/rfc1960.html">RFC 1960</a>] A String Representation of LDAP Search Filters.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1558.html">RFC 1558</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2164.html">RFC 2164</a>] Use of an X.500/LDAP directory to support MIXER address mapping.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1838.html">RFC 1838</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2247.html">RFC 2247</a>] Using Domains in LDAP/X.500 Distinguished Names.
[<a href="https://www.rfc-editor.org/rfc/rfc2251.html">RFC 2251</a>] Lightweight Directory Access Protocol (v3).
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3771.html">RFC 3771</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2252.html">RFC 2252</a>] Lightweight Directory Access Protocol (v3): Attribute Syntax Definitions.
[<a href="https://www.rfc-editor.org/rfc/rfc2253.html">RFC 2253</a>] Lightweight Directory Access Protocol (v3): UTF-8 String Representation of Distinguished Names.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1779.html">RFC 1779</a>.
[<a href="https://www.rfc-editor.org/rfc/rfc2254.html">RFC 2254</a>] The String Representation of LDAP Search Filters.
[<a href="https://www.rfc-editor.org/rfc/rfc2255.html">RFC 2255</a>] The LDAP URL Format.
                Defines URI scheme ldap:. 
[<a href="https://www.rfc-editor.org/rfc/rfc2256.html">RFC 2256</a>] A Summary of the X.500(96) User Schema for use with LDAPv3.
[<a href="https://www.rfc-editor.org/rfc/rfc2307.html">RFC 2307</a>] An Approach for Using LDAP as a Network Information Service.
[<a href="https://www.rfc-editor.org/rfc/rfc2587.html">RFC 2587</a>] Internet X.509 Public Key Infrastructure LDAPv2 Schema.
[<a href="https://www.rfc-editor.org/rfc/rfc2589.html">RFC 2589</a>] Lightweight Directory Access Protocol (v3): Extensions for Dynamic Directory Services.
                Defines LDAP Protocol Mechanism 1.3.6.1.4.1.1466.101.119.1 (Dynamic Refresh). 
[<a href="https://www.rfc-editor.org/rfc/rfc2649.html">RFC 2649</a>] An LDAP Control and Schema for Holding Operation Signatures.
[<a href="https://www.rfc-editor.org/rfc/rfc2657.html">RFC 2657</a>] LDAPv2 Client vs. the Index Mesh.
[<a href="https://www.rfc-editor.org/rfc/rfc2696.html">RFC 2696</a>] LDAP Control Extension for Simple Paged Results Manipulation.
[<a href="https://www.rfc-editor.org/rfc/rfc2713.html">RFC 2713</a>] Schema for Representing Java(tm) Objects in an LDAP Directory.
[<a href="https://www.rfc-editor.org/rfc/rfc2714.html">RFC 2714</a>] Schema for Representing CORBA Object References in an LDAP Directory.
[<a href="https://www.rfc-editor.org/rfc/rfc2739.html">RFC 2739</a>] Calendar Attributes for vCard and LDAP.
[<a href="https://www.rfc-editor.org/rfc/rfc2798.html">RFC 2798</a>] Definition of the inetOrgPerson LDAP Object Class.
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3698.html">RFC 3698</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2820.html">RFC 2820</a>] Access Control Requirements for LDAP.
[<a href="https://www.rfc-editor.org/rfc/rfc2829.html">RFC 2829</a>] Authentication Methods for LDAP.
[<a href="https://www.rfc-editor.org/rfc/rfc2830.html">RFC 2830</a>] Lightweight Directory Access Protocol (v3): Extension for Transport Layer Security.
                Defines LDAP Protocol Mechanism 1.3.6.1.4.1.1466.20037 ( Start TLS). 
[<a href="https://www.rfc-editor.org/rfc/rfc2849.html">RFC 2849</a>] The LDAP Data Interchange Format (LDIF) - Technical Specification.
[<a href="https://www.rfc-editor.org/rfc/rfc2891.html">RFC 2891</a>] LDAP Control Extension for Server Side Sorting of Search Results.
                Defines LDAP Protocol Mechanism 1.2.840.113556.1.4.473 (Sort Request) and 1.2.840.113556.1.4.474 (Sort Response). 
[<a href="https://www.rfc-editor.org/rfc/rfc2926.html">RFC 2926</a>] Conversion of LDAP Schemas to and from SLP Templates.
[<a href="https://www.rfc-editor.org/rfc/rfc2927.html">RFC 2927</a>] MIME Directory Profile for LDAP Schema.
[<a href="https://www.rfc-editor.org/rfc/rfc3045.html">RFC 3045</a>] Storing Vendor Information in the LDAP root DSE.
[<a href="https://www.rfc-editor.org/rfc/rfc3062.html">RFC 3062</a>] LDAP Password Modify Extended Operation.
                Defines LDAP Protocol Mechanism 1.3.6.1.4.1.4203.1.11.1 ( Modify Password). 
[<a href="https://www.rfc-editor.org/rfc/rfc3088.html">RFC 3088</a>] OpenLDAP Root Service, An experimental LDAP referral service.
[<a href="https://www.rfc-editor.org/rfc/rfc3112.html">RFC 3112</a>] LDAP Authentication Password Schema.
[<a href="https://www.rfc-editor.org/rfc/rfc3296.html">RFC 3296</a>] Named Subordinate References in Lightweight Directory Access Protocol (LDAP) Directories.
                Defines LDAP Protocol Mechanism 2.16.840.1.113730.3.4.2 (ManageDsaIT). 
[<a href="https://www.rfc-editor.org/rfc/rfc3377.html">RFC 3377</a>] Lightweight Directory Access Protocol (v3): Technical Specification.
[<a href="https://www.rfc-editor.org/rfc/rfc3383.html">RFC 3383</a>] Internet Assigned Numbers Authority (IANA) Considerations for the Lightweight Directory Access Protocol (LDAP).
[<a href="https://www.rfc-editor.org/rfc/rfc3384.html">RFC 3384</a>] Lightweight Directory Access Protocol (version 3) Replication Requirements.
[<a href="https://www.rfc-editor.org/rfc/rfc3494.html">RFC 3494</a>] Lightweight Directory Access Protocol version 2 (LDAPv2) to Historic Status.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1484.html">RFC 1484</a>, <a href="https://www.rfc-editor.org/rfc/rfc1485.html">RFC 1485</a>, <a href="https://www.rfc-editor.org/rfc/rfc1487.html">RFC 1487</a>, <a href="https://www.rfc-editor.org/rfc/rfc1488.html">RFC 1488</a>, <a href="https://www.rfc-editor.org/rfc/rfc1777.html">RFC 1777</a>, <a href="https://www.rfc-editor.org/rfc/rfc1778.html">RFC 1778</a>, <a href="https://www.rfc-editor.org/rfc/rfc1779.html">RFC 1779</a>, <a href="https://www.rfc-editor.org/rfc/rfc1781.html">RFC 1781</a>, <a href="https://www.rfc-editor.org/rfc/rfc2559.html">RFC 2559</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3663.html">RFC 3663</a>] Domain Administrative Data in Lightweight Directory Access Protocol (LDAP).
[<a href="https://www.rfc-editor.org/rfc/rfc3671.html">RFC 3671</a>] Collective Attributes in the Lightweight Directory Access Protocol (LDAP).
[<a href="https://www.rfc-editor.org/rfc/rfc3672.html">RFC 3672</a>] Subentries in the Lightweight Directory Access Protocol (LDAP).
                Defines LDAP Protocol Mechanism 1.3.6.1.4.1.4203.1.10.1 (Subentries). 
[<a href="https://www.rfc-editor.org/rfc/rfc3673.html">RFC 3673</a>] Lightweight Directory Access Protocol version 3 (LDAPv3): All Operational Attributes.
                Defines LDAP Protocol Mechanism 1.3.6.1.4.1.4203.1.5.1 (All Operational Attributes). 
[<a href="https://www.rfc-editor.org/rfc/rfc3674.html">RFC 3674</a>] Feature Discovery in Lightweight Directory Access Protocol (LDAP).
[<a href="https://www.rfc-editor.org/rfc/rfc3687.html">RFC 3687</a>] Lightweight Directory Access Protocol (LDAP) and X.500 Component Matching Rules.
[<a href="https://www.rfc-editor.org/rfc/rfc3698.html">RFC 3698</a>] Lightweight Directory Access Protocol (LDAP): Additional Matching Rules.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2798.html">RFC 2798</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3703.html">RFC 3703</a>] Policy Core Lightweight Directory Access Protocol (LDAP) Schema.
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc4104.html">RFC 4104</a>. 
                Defines SNMP MIB iso.org.dod.internet.directory.pcimSchema (1.3.6.1.1.6). 
[<a href="https://www.rfc-editor.org/rfc/rfc3712.html">RFC 3712</a>] Lightweight Directory Access Protocol (LDAP): Schema for Printer Services.
[<a href="https://www.rfc-editor.org/rfc/rfc3727.html">RFC 3727</a>] ASN.1 Module Definition for the LDAP and X.500 Component Matching Rules.
[<a href="https://www.rfc-editor.org/rfc/rfc3771.html">RFC 3771</a>] The Lightweight Directory Access Protocol (LDAP) Intermediate Response Message.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2251.html">RFC 2251</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3829.html">RFC 3829</a>] Lightweight Directory Access Protocol (LDAP) Authorization Identity Request and Response Controls.
                Defines LDAP Protocol Mechanism 2.16.840.1.113730.3.4.15 (Authorization Identity Response Control) and 2.16.840.1.113730.3.4.16 (Authorization Identity Request Control). 
[<a href="https://www.rfc-editor.org/rfc/rfc3866.html">RFC 3866</a>] Language Tags and Ranges in the Lightweight Directory Access Protocol (LDAP).
                Defines LDAP Protocol Mechanism 1.3.6.1.4.1.4203.1.5.4 (Language Tag Options) and 1.3.6.1.4.1.4203.1.5.5 (Language Range Options). 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2596.html">RFC 2596</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3876.html">RFC 3876</a>] Returning Matched Values with the Lightweight Directory Access Protocol version 3 (LDAPv3).
                Defines LDAP Protocol Mechanism 1.2.826.0.1.3344810.2.3 (Matched Values Control). 
[<a href="https://www.rfc-editor.org/rfc/rfc3909.html">RFC 3909</a>] Lightweight Directory Access Protocol (LDAP) Cancel Operation.
                Defines LDAP Protocol Mechanism 1.3.6.1.1.8 (Cancel Operation). 
[<a href="https://www.rfc-editor.org/rfc/rfc3928.html">RFC 3928</a>] Lightweight Directory Access Protocol (LDAP) Client Update Protocol (LCUP).
                Defines LDAP Protocol Mechanism 1.3.6.1.1.7.1 (LCUP Sync Request Control). 
                Defines LDAP Protocol Mechanism 1.3.6.1.1.7.2 (LCUP Sync Update Control). 
                Defines LDAP Protocol Mechanism 1.3.6.1.1.7.3 (LCUP Sync Done Control). 
                Defines LDAP result codes 113 to 117. 
[<a href="https://www.rfc-editor.org/rfc/rfc3944.html">RFC 3944</a>] H.350 Directory Services.
[<a href="https://www.rfc-editor.org/rfc/rfc4104.html">RFC 4104</a>] Policy Core Extension Lightweight Directory Access Protocol Schema (PCELS).
                Defines SNMP MIB iso.org.dod.internet.directory.pcelsSchema (1.3.6.1.1.9). 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc3703.html">RFC 3703</a>.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc1487.html">RFC 1487</a>] X.500 Lightweight Directory Access Protocol.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1777.html">RFC 1777</a>, <a href="https://www.rfc-editor.org/rfc/rfc3494.html">RFC 3494</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1488.html">RFC 1488</a>] The X.500 String Representation of Standard Attribute Syntaxes.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1778.html">RFC 1778</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1558.html">RFC 1558</a>] A String Representation of LDAP Search Filters.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1960.html">RFC 1960</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1777.html">RFC 1777</a>] Lightweight Directory Access Protocol.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3494.html">RFC 3494</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1487.html">RFC 1487</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1778.html">RFC 1778</a>] The String Representation of Standard Attribute Syntaxes.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3494.html">RFC 3494</a>.
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc2559.html">RFC 2559</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1488.html">RFC 1488</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1779.html">RFC 1779</a>] A String Representation of Distinguished Names.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2253.html">RFC 2253</a>, <a href="https://www.rfc-editor.org/rfc/rfc3494.html">RFC 3494</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1485.html">RFC 1485</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1838.html">RFC 1838</a>] Use of the X.500 Directory to support mapping between X.400 and <a href="https://www.rfc-editor.org/rfc/rfc822.html">RFC 822</a> Addresses.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2164.html">RFC 2164</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2559.html">RFC 2559</a>] Internet X.509 Public Key Infrastructure Operational Protocols - LDAPv2.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3494.html">RFC 3494</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1778.html">RFC 1778</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2596.html">RFC 2596</a>] Use of Language Codes in LDAP.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3866.html">RFC 3866</a>. 
                Describes how language codes are carried in LDAP and are to be interpreted by LDAP servers.<hr /><b>Publications:</b>
[ISBN 1578700000] LDAP: Programming Directory-Enabled Applications with Lightweight Directory Access Protocol.
[ISBN 1578700701] Understanding And Deploying LDAP Directory Services.
                		  </div>
		  
</section>

