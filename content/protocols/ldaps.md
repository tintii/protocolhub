---
id: protocol-ldaps
slug: ldaps
name: LDAPS
expandedName: Secure Lightweight Directory Access Protocol
origin: historical
provenance:
  source: protocols/protocol_LDAPS.htm
  sha256: 3ab97c71c45d86317982cf68acf20c41efdc4e26671bc2a761c7fcfb8a233a69
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Secure Lightweight Directory Access Protocol
layers:
  - Session Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Secure Lightweight Directory Access Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Session Layer
  - label: Type
    html: Session layer directory service access protocol
  - label: Related protocols
    html: 'IP,<br />IPv6,<br />TCP,<br />X.500,<br />DAP'
originalUpdate: '2005-12-08 17:04:20'
rfcs:
  - 2830
related:
  - protocol-ip
  - protocol-ipv6
  - protocol-tcp
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

			The general model adopted by LDAPS is one of clients performing protocol operations against servers. In this model, this is accomplished by a client transmitting a protocol request describing the operation to be performed to a server, which is then responsible for performing the necessary operations on the Directory. Upon completion of the necessary operations, the server returns a response containing any results or errors to the requesting client. In keeping with the goal of easing the costs associated with use of the Directory, it is an objective of this protocol to minimize the complexity of clients so as to facilitate widespread deployment of applications capable of utilizing the Directory.
<br />
<br /><b>The Start TLS Request</b>
<br /><ul><li><b>Requesting TLS Establishment</b>
<br />A client may perform a Start TLS operation by transmitting an LDAP PDU containing an ExtendedRequest specifying the OID for the Start TLS operation:
<br />      1.3.6.1.4.1.1466.20037
<br />
<br />An LDAP ExtendedRequest is defined as follows:
<br />ExtendedRequest ::= [APPLICATION 23] SEQUENCE { requestName LDAPOID, requestValue OCTET STRING OPTIONAL }
<br />
<br />A Start TLS extended request is formed by setting the requestName field to the OID string given above. The requestValue field is absent. The client must not send any PDUs on this connection following this request until it receives a Start TLS extended response.<br /><br /></li>

<li><b>"Success" Response</b>
<br />If the ExtendedResponse contains a resultCode of success, this indicates that the server is willing and able to negotiate TLS. Refer to section 3, below, for details.<br /><br /></li>

<li><b>Response other than "uccess"</b>
<br />If the ExtendedResponse contains a resultCode other than success, this indicates that the server is unwilling or unable to negotiate TLS.
<br />
<br />If the Start TLS extended request was not successful, the resultCode will be one of:
<br /><ul><li>operationsError (operations sequencing incorrect; e.g. TLS already established)
<br /></li><li>protocolError (TLS not supported or incorrect PDU structure)
<br /></li><li>referral (this server doesn't do TLS, try this one)
<br /></li><li>unavailable (e.g. some major problem with TLS, or server is shutting down)</li></ul></li></ul>
<br />
<br /><b>Sequencing of the Start TLS Operation</b>
<br />This section describes the overall procedures clients and servers must follow for TLS establishment. These procedures take into consideration various aspects of the overall security of the LDAP association including discovery of resultant security level and assertion of the client's authorization identity.
<br />
<br /><ul><li><b>Requesting to Start TLS on an LDAP Association</b>
<br />The client may send the Start TLS extended request at any time after establishing an LDAP association, except that in the following cases the client must not send a Start TLS extended request:
<br /><ul><li>if TLS is currently established on the connection
<br /></li><li>during a multi-stage SASL negotiation
<br /></li><li>if there are any LDAP operations outstanding on the connection.</li></ul>
<br />The client may have already performed a Bind operation when it sends a Start TLS request, or the client might have not yet bound.
<br />
<br />If the client did not establish a TLS connection before sending any other requests, and the server requires the client to establish a TLS connection before performing a particular request, the server must reject that request with a confidentialityRequired or strongAuthRequired result. The client may send a Start TLS extended request, or it may choose to close the connection.<br /><br /></li>

<li><b>Starting TLS</b>
<br />The server will return an extended response with the resultCode of success if it is willing and able to negotiate TLS. It will return other resultCodes, documented above, if it is unable.<br /><br /></li>

<li><b>TLS Version Negotiation</b>
<br />Negotiating the version of TLS or SSL to be used is a part of the TLS Handshake Protocol, as documented in. Please refer to that document for details.<br /><br /></li>

<li><b>Discovery of Resultant Security Level</b>
<br />After a TLS connection is established on an LDAP association, both parties must individually decide whether or not to continue based on the privacy level achieved. Ascertaining the TLS connection¡¯s privacy level is implementation dependent, and accomplished by communicating with one¡¯s respective local TLS implementation.<br /><br /></li>

<li><b>Assertion of Client's Authorization Identity</b>
<br />The client may, upon receipt of a Start TLS extended response indicating success, assert that a specific authorization identity be utilized in determining the client's authorization status. The client accomplishes this via an LDAP Bind request specifying a SASL mechanism of EXTERNAL.<br /><br /></li> 

<li><b>Server Identity Check</b>
<br />The client must check its understanding of the server's hostname against the server's identity as presented in the server's Certificate message, in order to prevent man-in-the-middle attacks.<br /><br /></li>

<li>Matching is performed according to these rules:
<br /></li><li><ul><li>The client must use the server hostname it used to open the LDAP connection as the value to compare against the server name as expressed in the server's certificate. The client must not use the server's canonical DNS name or any other derived form of name.
<br /><br /></li>
<li>If a subjectAltName extension of type dNSName is present in the certificate, it should be used as the source of the server¡¯s identity.
<br /><br /></li>
<li>Matching is case-insensitive.
<br /><br /></li>
<li>The "*" wildcard character is allowed. If present, it applies only to the left-most name component.</li></ul><br /><br /></li>

<li><b>Refresh of Server Capabilities Information</b>
<br />The client must refresh any cached server capabilities information (e.g. from the server's root DSE) upon TLS session establishment. This is necessary to protect against active-intermediary attacks which may have altered any server capabilities information retrieved prior to TLS establishment. The server may advertise different capabilities after TLS establishment.</li></ul>
<br />
<br /><b>Closing a TLS Connection</b>
<br /><ul><li><b>Graceful Closure</b>
<br />Either the client or server may terminate the TLS connection on an LDAP association by sending a TLS closure alert. This will leave the LDAP association intact.
<br />
<br />Before closing a TLS connection, the client must either wait for any outstanding LDAP operations to complete, or explicitly abandon them.
<br />
<br />After the initiator of a close has sent a closure alert, it must discard any TLS messages until it has received an alert from the other party. It will cease to send TLS Record Protocol PDUs, and following the receipt of the alert, may send and receive LDAP PDUs.
<br />
<br />The other party, if it receives a closure alert, must immediately transmit a TLS closure alert. It will subsequently cease to send TLS Record Protocol PDUs, and may send and receive LDAP PDUs.<br /><br /></li>

<li><b>Abrupt Closure</b>
<br />Either the client or server may abruptly close the entire LDAP association and any TLS connection established on it by dropping the underlying TCP connection. A server may beforehand send the client a Notice of Disconnection in this case.</li></ul>
<br />
<br /><b>Effects of TLS on a Client's Authorization Identity</b>
<br />This section describes the effects on a client's authorization identity brought about by establishing TLS on an LDAP association. The default effects are described first, and next the facilities for client assertion of authorization identity are discussed including error conditions. Lastly, the effects of closing the TLS connection are described.
<br />
<br /><ul><li><b>TLS Connection Establishment Effects</b><br /></li>
<li><ul><li><b>Default Effects</b>
<br />Upon establishment of the TLS connection onto the LDAP association, any previously established authentication and authorization identities must remain in force, including anonymous state. This holds even in the case where the server requests client authentication via TLS -- e.g. requests the client to supply its certificate during TLS negotiation.<br /><br /></li>

<li><b>Client Assertion of Authorization Identity</b>
<br />A client may either implicitly request that its LDAP authorization identity be derived from its authenticated TLS credentials or it may explicitly provide an authorization identity and assert that it be used in combination with its authenticated TLS credentials. The former is known as an implicit assertion, and the latter as an explicit assertion.</li></ul><br /><br /></li>

<li><b>TLS Connection Closure Effects</b>
<br />Closure of the TLS connection must cause the LDAP association to move to an anonymous authentication and authorization state regardless of the state established over TLS and regardless of the authentication and authorization state prior to TLS connection establishment.</li></ul>
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
<td class="MapParent" aria-label="Parent layer protocols">TCP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>LDAPS</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Authorization</b><br />The process of identifying an individual, usually based on a username and password. In security systems, authentication is distinct from authorization , which is the process of giving individuals access to system objects based on their identity. Authentication merely ensures that the individual is who he or she claims to be, but says nothing about the access rights of the individual.<br /><br /><b>Client</b><br />Clinet is a program which requests services of another program. It is a client part of a client-server architecture. Typically, a client is an application that runs on a personal computer or workstation and relies on a server to perform some operations. For example, an e-mail client is an application that enables you to send and receive e-mail.<br /><br /><b>DNS</b><br />DNS(Domain Name System or Service or Server), an Internet service that translates domain names into IP addresses. Because domain names are alphabetic, they're easier to remember. The Internet however, is really based on IP addresses. Every time you use a domain name, therefore, a DNS service must translate the name into the corresponding IP address. For example, the domain name www.example.com might translate to 198.105.232.4. 
<br />
<br />The DNS system is, in fact, its own network. If one DNS server doesn't know how to translate a particular domain name, it asks another one, and so on, until the correct IP address is returned.<br /><br /><b>LDAP</b><br />LDAP (Lightweight Directory Access Protocol) is a set of protocols for accessing information directories. LDAP is based on the standards contained within the X.500 standard, but is significantly simpler. And unlike X.500, LDAP supports TCP/IP, which is necessary for any type of Internet access. Because it's a simpler version of X.500, LDAP is sometimes called X.500-lite.<br /><br /><b>SASL</b><br />SASL (Simple Authentication and Security Layer) is a method for adding authentication support to connection-based protocols. SASL takes effect when a protocol initiates a command for identifying and authenticating a user to a server. SASL also includes an option for negotiating protection of subsequent protocol interactions. With this option in effect, SASL places a security layer between the protocol and the connection.<br /><br /><b>SSL</b><br />SSL (Secure Sockets Layer) and TLS (Transport Layer Security), its successor, are cryptographic protocols which provide secure communications on the Internet. There are slight differences between SSL 3.0 and TLS 1.0, but the protocol remains substantially the same.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>TLS</b><br />TLS (Transport Layer Security), made up of two layers: the TLS Record Protocol and TLS Handshake Protocol, is a protocol that guarantees privacy and data integrity between client/server applications communicating over the Internet. TLS is application protocol-independent. Higher-level protocols can layer on top of the TLS protocol transparently.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2830.html">RFC 2830</a>] Lightweight Directory Access Protocol (v3): Extension for Transport Layer Security
                		  </div>
		  
</section>

