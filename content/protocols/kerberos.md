---
id: protocol-kerberos
slug: kerberos
name: Kerberos
expandedName: Kerberos
origin: historical
provenance:
  source: protocols/protocol_Kerberos.htm
  sha256: 10116158f2b70fcd633bd109700a4a32ebe6ca7d7a6fe3841fee61143c70dfcd
  provider: 'Colasoft Co., Ltd.'
aliases: []
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Kerberos
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Ports
    html: |-
      88 (UDP)
      <br />464 (TCP, UDP) change/set password
  - label: Related protocols
    html: 'RADIUS ,<br />TACACS+'
  - label: Working groups
    html: |-
      Cat, Common Authentication Technology
      <br />Krb-wg, Kerberos WG
originalUpdate: '2005-11-10 16:26:04'
rfcs:
  - 1510
  - 1964
  - 2623
  - 2695
  - 2712
  - 3027
  - 3244
  - 3820
  - 3961
  - 3962
  - 4120
  - 4121
related:
  - protocol-radius
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

			Kerberos is a network authentication protocol. It is designed to provide strong authentication for client/server applications by using secret-key cryptography. 
<br />
<br />Kerberos provides a means of verifying the identities of principals, (e.g., a workstation user or a network server) on an open (unprotected) network. This is accomplished without relying on assertions by the host operating system, without basing trust on host addresses, without requiring physical security of all the hosts on the network, and under the assumption that packets traveling along the network can be read, modified, and inserted at will. Kerberos performs authentication under these conditions as a trusted third - party authentication service by using conventional (shared secret key) cryptography. Extensions to Kerberos can provide for the use of public key cryptography during certain phases of the authentication protocol. Such extensions support Kerberos authentication for users registered with public key certification authorities and provide certain benefits of public key cryptography in situations where they are needed.
<br />
<br />The basic Kerberos authentication process proceeds as follows: A client sends a request to the authentication server (AS) requesting "credentials" for a given server. The AS responds with these credentials, encrypted in the client's key. The credentials consist of 1) a "ticket" for the server and 2) a temporary encryption key (often called a "session key"). The client transmits the ticket (which contains the client's identity and a copy of the session key, all encrypted in the server's key) to the server. The session key (now shared by the client and server) is used to authenticate the client, and may optionally be used to authenticate the server. It may also be used to encrypt further communication between the two parties or to exchange a separate sub-session key to be used to encrypt further communication.
<br />
<br />The authentication exchanges mentioned above require read-only access to the Kerberos database. Sometimes, however, the entries in the database must be modified, such as when adding new principals or changing a principal's key. This is done using a protocol between a client and a third Kerberos server, the Kerberos Administration Server (KADM). The administration protocol is not described in this document. There is also a protocol for maintaining multiple copies of the Kerberos database, but this can be considered an implementation detail and may vary to support different database technologies.
<br />
<br />The Kerberos protocol is designed to operate across organizational boundaries. A client in one organization can be authenticated to a server in another. Each organization wishing to run a Kerberos server establishes its own "realm". The name of the realm in which a client is registered is part of the client's name and can be used by the end-service to decide whether to honor a request.
<br />
<br />As an authentication service, Kerberos provides a means of verifying the identity of principals on a network. Authentication is usually useful primarily as a first step in the process of authorization, determining whether a client may use a service, which objects the client is allowed to access, and the type of access allowed for each. Kerberos does not, by itself, provide authorization. Possession of a client ticket for a service provides only for authentication of the client to that service, and in the absence of a separate authorization procedure, an application should not consider it to authorize the use of that service.
<br /><hr />
<br /><b>History</b>
<br />Version 5 of the Kerberos protocol has evolved because of new requirements and desires for features not available in Version 4. The design of Version 5 was led by Clifford Neuman and John Kohl with much input from the community. The development of the Massachusetts Institute of Technology MIT reference implementation was led at MIT by John Kohl and Theodore Ts'o, with help and contributed code from many others. Since <a href="https://www.rfc-editor.org/rfc/rfc1510.html">RFC 1510</a> was issued, many individuals have proposed extensions and revisions to the protocol. This document reflects some of these proposals. Where such changes involved significant effort, the document cites the contribution of the proposer.
<br />
<br />Reference implementations of both Version 4 and Version 5 of Kerberos are publicly available, and commercial implementations have been developed and are widely used. 
<br />
<br /><b>Authentication</b> 
<br /><ul><li><b>Ticket </b>
<br />The client and server do not initially share an encryption key. Whenever a client authenticates itself to a new verifier it relies on the authentication server to generate a new encryption key and distribute it securely to both parties. This new encryption key is called a session key and the Kerberos ticket is used to distribute it to the verifier. 
<br />
<br />The Kerberos ticket is a certificate issued by an authentication server, encrypted using the server key. Among other information, the ticket contains the random session key that will be used for authentication of the principal to the verifier, the name of the principal to whom the session key was issued, and an expiration time after which the session key is no longer valid. The ticket is not sent directly to the verifier, but is instead sent to the client who forwards it to the verifier as part of the application request. Because the ticket is encrypted in the server key, known only by the authentication server and intended verifier, it is not possible for the client to modify the ticket without detection.<br /><br /></li>

<li><b>Application request and response</b>
<br />Messages 3 and 4 in figure 1 show the application request and response, the most basic exchange in the Kerberos protocol. It is through this exchange that a client proves to a verifier that it knows the session key embedded in a Kerberos ticket. There are two parts to the application request, a ticket (described above) and an authenticator. The authenticator includes, among other fields: the current time, a checksum, and an optional encryption key, all encrypted with the session key from the accompanying ticket.
<br />
<br /><img src="/supporting/images/figure1.gif" alt="figure1.gif" />
<br />Figure 1
<br />
<br />Upon receipt of the application request, the verifier decrypts the ticket, extracts the session key, and uses the session key to decrypt the authenticator. If the same key was used to encrypt the authenticator as used to decrypt it, the checksum will match and the verifier can assume the authenticator was generated by the principal named in the ticket and to whom the session key was issued. This is not by itself sufficient for authentication since an attacker can intercept an authenticator and replay it later to impersonate the user. For this reason the verifier additionally checks the timestamp to make sure that the authenticator is fresh. If the timestamp is within a specified window (typically 5 minutes) centered around the current time on the verifier, and if the timestamp has not been seen on other requests within that window, the verifier accepts the request as authentic.
<br />
<br />At this point the identity of the client has been verified by the server. For some applications the client also wants to be sure of the server's identity. If such mutual authentication is required, the server generates an application response by extracting the client's time from the authenticator, and returns it to the client together with other information, all encrypted using the session key.<br /><br /></li>

<li><b>Authentication request and response</b>
<br />The client requires a separate ticket and session key for each verifier with which it communicates. When a client wishes to create an association with a particular verifier, the client uses the authentication request and response, messages 1 and 2 from figure 1, to obtain a ticket and session key from the authentication server. In the request, the client sends the authentication server its claimed identity, the name of the verifier, a requested expiration time for the ticket, and a random number that will be used to match the authentication response with the request. 
<br />
<br />In its response, the authentication server returns the session key, the assigned expiration time, the random number from the request, the name of the verifier, and other information from the ticket, all encrypted with the user's password registered with the authentication server, together with a ticket containing similar information, and which is to be forwarded to the verifier as part of the application request. Together, the authentication request and response and the application request and response comprise the basic Kerberos authentication protocol.<br /><br /></li>

<li><b>Obtaining additional tickets</b>
<br />The basic Kerberos authentication protocol allows a client with knowledge of the user's password to obtain a ticket and session key for and to prove its identity to any verifier registered with the authentication server. The user's password must be presented each time the user performs authentication with a new verifier. This can be cumbersome; instead, a system should support single sign-on, where the user logs in to the system once, providing the password at that time, and with subsequent authentication occurring automatically. The obvious way to support this, caching the user's password on the workstation, is dangerous. Though a Kerberos ticket and the key associated with it are valid for only a short time, the user's password can be used to obtain tickets, and to impersonate the user until the password is changed. A better approach, and that used by Kerberos, is to cache only tickets and encryption keys (collectively called credentials) that will work for a limited period. 
<br />
<br />The ticket granting exchange of the Kerberos protocol allows a user to obtain tickets and encryption keys using such short-lived credentials, without re-entry of the user's password. When the user first logs in, an authentication request is issued and a ticket and session key for the ticket granting service is returned by the authentication server. This ticket, called a ticket granting ticket, has a relatively short life (typically on the order of 8 hours). The response is decrypted, the ticket and session key saved, and the user's password forgotten. 
<br />
<br />Subsequently, when the user wishes to prove its identity to a new verifier, a new ticket is requested from the authentication server using the ticket granting exchange. The ticket granting exchange is identical to the authentication exchange except that the ticket granting request has embedded within it an application request, authenticating the client to the authentication server, and the ticket granting response is encrypted using the session key from the ticket granting ticket, rather than the user's password. 
<br />
<br />Figure 2 shows the complete Kerberos authentication protocol. Messages 1 and 2 are used only when the user first logs in to the system, messages 3 and 4 whenever a user authenticates to a new verifier, and message 5 is used each time the user authenticates itself. Message 6 is optional and used only when the user requires mutual-authentication by the verifier.<br /><br /></li>

<li><img src="/supporting/images/figure2.gif" alt="figure2.gif" /><br /></li>
<li>Figure 2
<br /><br /></li>
<li><b>Protecting application data</b>
<br />As described so far, Kerberos provides only authentication: assurance that the authenticated principal is an active participant in an exchange. A by-product of the Kerberos authentication protocol is the exchange of the session key between the client and the server. The session key may subsequently be used by the application to protect the integrity and privacy of communications. The Kerberos system defines two message types, the safe message and the private message to encapsulate data that must be protected, but the application is free to use a method better suited to the particular data that is transmitted. <br /><br /></li>

<li><b>Additional Features</b>
<br />The description of Kerberos just presented was greatly simplified. Additional fields are present in the ticket, authenticator, and messages, to support book-keeping and additional functionality. Some of the features present in Version 5 include renewable and forwardable tickets, support for higher level authorization mechanisms, and support for multi-hop cross-realm authentication (described in the following section).</li></ul>
<br /><hr />
<br /><b>Cross-Realm Operation</b>
<br />The Kerberos protocol is designed to operate across organizational boundaries. A client in one organization can be authenticated to a server in another. Each organization wishing to run a Kerberos server establishes its own "realm". The name of the realm in which a client is registered is part of the client's name and can be used by the end-service to decide whether to honor a request.
<br />
<br />By establishing "inter-realm" keys, the administrators of two realms can allow a client authenticated in the local realm to prove its identity to servers in other realms. The exchange of inter-realm keys (a separate key may be used for each direction) registers the ticket-granting service of each realm as a principal in the other realm. A client is then able to obtain a TGT for the remote realm's ticket-granting service from its local realm. When that TGT is used, the remote ticket-granting service uses the inter-realm key (which usually differs from its own normal TGS key) to decrypt the TGT; thus it is certain that the ticket was issued by the client's own TGS. Tickets issued by the remote ticket-granting service will indicate to the end-service that the client was authenticated from another realm.
<br />
<br />Without cross-realm operation, and with appropriate permission, the client can arrange registration of a separately-named principal in a remote realm and engage in normal exchanges with that realm's services. However, for even small numbers of clients this becomes cumbersome, and more automatic methods as described here are necessary.
<br />
<br />A realm is said to communicate with another realm if the two realms share an inter-realm key, or if the local realm shares an inter-realm key with an intermediate realm that communicates with the remote realm. An authentication path is the sequence of intermediate realms that are transited in communicating from one realm to another.
<br />
<br />Realms may be organized hierarchically. Each realm shares a key with its parent and a different key with each child. If an inter-realm key is not directly shared by two realms, the hierarchical organization allows an authentication path to be easily constructed.
<br />
<br />If a hierarchical organization is not used, it may be necessary to consult a database in order to construct an authentication path between realms.
<br />
<br />Although realms are typically hierarchical, intermediate realms may be bypassed to achieve cross-realm authentication through alternate authentication paths. (These might be established to make communication between two realms more efficient.) It is important for the end-service to know which realms were transited when deciding how much faith to place in the authentication process. To facilitate this decision, a field in each ticket contains the names of the realms that were involved in authenticating the client. The application server is ultimately responsible for accepting or rejecting authentication and SHOULD check the transited field. The application server may choose to rely on the Key Distribution Center (KDC) for the application server's realm to check the transited field. The application server's KDC will set the TRANSITED-POLICY-CHECKED flag in this case. The KDCs for intermediate realms may also check the transited field as they issue TGTs for other realms, but they are encouraged not to do so. A client may request that the KDCs not check the transited field by setting the DISABLE-TRANSITED-CHECK flag. KDCs SHOULD honor this flag.
<br />
<br /><b>Extending Kerberos without Breaking Interoperability</b>
<br />As the deployed base of Kerberos implementations grows, extending Kerberos becomes more important. Unfortunately, some extensions to the existing Kerberos protocol create interoperability issues because of uncertainty regarding the treatment of certain extensibility options by some implementations. This section includes guidelines that will enable future implementations to maintain interoperability.
<br />
<br />Kerberos provides a general mechanism for protocol extensibility. Some protocol messages contain typed holes -- sub-messages that contain an octet-string along with an integer that defines how to interpret the octet-string. The integer types are registered centrally, but they can be used both for vendor extensions and for extensions standardized through the IETF.
<br />
<br />In this document, the word "extension" refers to extension by defining a new type to insert into an existing typed hole in a protocol message. It does not refer to extension by addition of new fields to ASN.1 types, unless the text explicitly indicates otherwise.
<br />
<br /><b>Environmental Assumptions</b>
<br />Kerberos imposes a few assumptions on the environment in which it can properly function, including the following:
<br /><ul><li>"Denial of service" attacks are not solved with Kerberos. There are places in the protocols where an intruder can prevent an application from participating in the proper authentication steps. Detection and solution of such attacks (some of which can appear to be not-uncommon "normal" failure modes for the system) are usually best left to the human administrators and users.<br /><br /></li>

<li>Principals MUST keep their secret keys secret. If an intruder somehow steals a principal's key, it will be able to masquerade as that principal or to impersonate any server to the legitimate principal.<br /><br /></li>

<li>Password guessing" attacks are not solved by Kerberos. If a user chooses a poor password, it is possible for an attacker to successfully mount an offline dictionary attack by repeatedly attempting to decrypt, with successive entries from a dictionary, messages obtained which are encrypted under a key derived from the user's password.<br /><br /></li>

<li>Each host on the network MUST have a clock which is "loosely synchronized" to the time of the other hosts; this synchronization is used to reduce the bookkeeping needs of application servers when they do replay detection. The degree of "looseness" can be configured on a per-server basis, but it is typically on the order of 5 minutes. If the clocks are synchronized over the network, the clock synchronization protocol MUST itself be secured from network attackers.<br /><br /></li>

<li>Principal identifiers are not recycled on a short-term basis. A typical mode of access control will use access control lists (ACLs) to grant permissions to particular principals. If a stale ACL entry remains for a deleted principal and the principal identifier is reused, the new principal will inherit rights specified in the stale ACL entry. By not re-using principal identifiers, the danger of inadvertent access is removed.</li></ul>
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
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>Kerberos</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Authentication</b><br />The process of identifying an individual, usually based on a username and password. In security systems, authentication is distinct from authorization , which is the process of giving individuals access to system objects based on their identity. Authentication merely ensures that the individual is who he or she claims to be, but says nothing about the access rights of the individual.<br /><br /><b>Authenticator</b><br />Authenticator is a record containing information that can be shown to have been recently generated using the session key known only by the client and server.<br /><br /><b>Authorization</b><br />The process of identifying an individual, usually based on a username and password. In security systems, authentication is distinct from authorization , which is the process of giving individuals access to system objects based on their identity. Authentication merely ensures that the individual is who he or she claims to be, but says nothing about the access rights of the individual.<br /><br /><b>Client</b><br />Clinet is a program which requests services of another program. It is a client part of a client-server architecture. Typically, a client is an application that runs on a personal computer or workstation and relies on a server to perform some operations. For example, an e-mail client is an application that enables you to send and receive e-mail.<br /><br /><b>Cross-Realm</b><br />Any Kerberos principal can authenticate to other principals within the same Kerberos realm. However, it is also possible to configure a Kerberos realm so principals in one realm can authenticate to principals in another realm. This is called cross-realm authentication.<br /><br /><b>Encryption</b><br />The translation of data into a secret code. Encryption is the most effective way to achieve data security. To read an encrypted file, you must have access to a secret key or password that enables you to decrypt it. Unencrypted data is called plain text; encrypted data is referred to as cipher text. 
<br />
<br />There are two main types of encryption: asymmetric encryption (also called public-key encryption) and symmetric encryption.<br /><br /><b>KDC</b><br />KDC (Key Distribution Center) is a network service that supplies tickets and temporary session keys; or an instance of that service or the host on which it runs. The KDC services both initial ticket and ticket-granting ticket requests. The initial ticket portion is sometimes referred to as the Authentication Server (or service). The ticket-granting ticket portion is sometimes referred to as the ticket-granting server (or service).<br /><br /><b>Kerberos</b><br />The name given to the Project Athena's authentication service, the protocol used by that service, or the code used to implement the authentication service. The name is adopted from the three-headed dog that guards Hades.<br /><br /><b>RFC</b><br /><a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>(Requests for Comments) document series is a set of technical and organizational notes about the Internet (originally the ARPANET), beginning in 1969(when the Internet was the ARPANET). An Internet Document can be submitted to the IETF by anyone, but the IETF decides if the document becomes an RFC. Eventually, if it gains enough interest, it may evolve into an Internet standard. 
<br />
<br />Each <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>is designated by an <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>number. Once published, an <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>never changes. Modifications to an original <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>are assigned a new <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>number.<br /><br /><b>Secret key</b><br />Secret key is an encryption key shared by a principal and the KDC, distributed outside the bounds of the system, with a long lifetime. In the case of a human user's principal, the secret key MAY be derived from a password.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>Session key</b><br />Session key is a temporary encryption key used between two principals, with a lifetime limited to the duration of a single login "session". In the Kerberos system, a session key is generated by the KDC. The session key is distinct from the sub-session key.<br /><br /><b>Shared secret key</b><br />Shared secret key - Secret and private are often used interchangeably in the literature. In our usage, it takes two (or more) to share a secret, thus a shared DES key is a secret key. Something is only private when no one but its owner knows it. Thus, in public key cryptosystems, one has a public and a private key.<br /><br /><b>Sub-session key</b><br />Sub-session key is a temporary encryption key used between two principals, selected and exchanged by the principals using the session key, and with a lifetime limited to the duration of a single association. The sub-session key is also referred to as the subkey.<br /><br /><b>Ticket</b><br />Ticket is a record that helps a client authenticate itself to a server; it contains the client's identity, a session key, a timestamp, and other information, all sealed using the server's secret key. It only serves to authenticate a client when presented along with a fresh Authenticator.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a>Kerberos: The Network Authentication Protocol<span class="unavailable"> [Unavailable in the source snapshot]</span></a><hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1964.html">RFC 1964</a>] The Kerberos Version 5 GSS-API Mechanism.
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc4121.html">RFC 4121</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2623.html">RFC 2623</a>] NFS Version 2 and Version 3 Security Issues and the NFS Protocol's Use of RPCSEC_GSS and Kerberos V5.
[<a href="https://www.rfc-editor.org/rfc/rfc2695.html">RFC 2695</a>] Authentication Mechanisms for ONC RPC.
[<a href="https://www.rfc-editor.org/rfc/rfc2712.html">RFC 2712</a>] Addition of Kerberos Cipher Suites to Transport Layer Security (TLS).
[<a href="https://www.rfc-editor.org/rfc/rfc3027.html">RFC 3027</a>] Protocol Complications with the IP Network Address Translator.
[<a href="https://www.rfc-editor.org/rfc/rfc3244.html">RFC 3244</a>] Microsoft Windows 2000 Kerberos Change Password and Set Password Protocols.
[<a href="https://www.rfc-editor.org/rfc/rfc3820.html">RFC 3820</a>] Internet X.509 Public Key Infrastructure (PKI) Proxy Certificate Profile.
[<a href="https://www.rfc-editor.org/rfc/rfc3961.html">RFC 3961</a>] Encryption and Checksum Specifications for Kerberos 5.
[<a href="https://www.rfc-editor.org/rfc/rfc3962.html">RFC 3962</a>] Advanced Encryption Standard (AES) Encryption for Kerberos 5.
[<a href="https://www.rfc-editor.org/rfc/rfc4120.html">RFC 4120</a>] The Kerberos Network Authentication Service (V5).
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1510.html">RFC 1510</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc4121.html">RFC 4121</a>] The Kerberos Version 5 Generic Security Service Application Program Interface (GSS-API) Mechanism: Version 2.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1964.html">RFC 1964</a>. <hr /><b>Publications:</b>
[ISBN 0596004036] Kerberos: The Definitive Guide.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc1510.html">RFC 1510</a>] The Kerberos Network Authentication Service (V5).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc4120.html">RFC 4120</a>.
                		  </div>
		  
</section>

