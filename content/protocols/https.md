---
id: protocol-https
slug: https
name: HTTPS
expandedName: Secure HTTP Protocol
origin: historical
provenance:
  source: protocols/protocol_HTTPS.htm
  sha256: 025e14b413ca1c5773b7e9ddd99a99063ccf35de4e88b704dce3635c4bb9b9a9
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Secure HTTP Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Secure HTTP Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: File transfer protocol
  - label: Ports
    html: 443 (TCP) server over SSL/TLS
  - label: Related protocols
    html: 'webDAV,<br />Web Distributed Authoring and Versioning'
  - label: URI
    html: 'https:'
  - label: MIME subtype
    html: 'subtype: application/http, message/http, message/s-http.'
  - label: Working groups
    html: |-
      Http, HyperText Transfer Protocol
      <br />Wts, Web Transaction Security
      <br />Webdav, WWW Distributed Authoring and Versioning
originalUpdate: '2005-11-28 17:12:36'
rfcs:
  - 2660
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

			HTTPS (Secure HTTP) provides secure communication mechanisms between an HTTP client-server pair in order to enable spontaneous commercial transactions for a wide range of applications. Our design intent is to provide a flexible protocol that supports multiple orthogonal operation modes, key management mechanisms, trust models, cryptographic algorithms and encapsulation formats through option negotiation between parties for each transaction.
<br />
<br />Instead of using plain text socket communication, the session data is encrypted using either a version of the SSL (Secure Socket Layer) protocol or the TLS (Transport Layer Security) protocol, thus ensuring reasonable protection from eavesdroppers, and man in the middle attacks. The default TCP port of https: is 443.
<br />
<br />To prepare a web-server for accepting https connections the administrator must create a public key certificate for the web-server. These certificates can be created for LINUX based servers with OpenSSL tools (ssl-ca) or in SuSE with the 'gensslcert' command. This certificate must be signed by a certificate authority who you have to pay that it certifies that you are who you claim to be. If you do not want to pay you use a Self-signed certificate and the browser of your client displays (at least once) a secutity alert that it cannot veryfy the server's certificate. Sofar all this ensures only encryption of all transmissions.
<br />
<br />Another use of Https is client authentication. This applies if someone wants to restict access to a web-server to only authorized people. For this you have to create user certificates (also public key certificate) that can be loaded into a client browser (e.g. Firefox) to identify the client as authorized to access the server. Usually the webmaster of an organization will create a user certificate (also with ssl-ca) that contains the name and email of an authorized user. On every reconnect the web-server checks the certificate and the user can access the server optionally even without a password.
<br /><hr />
<br /><b>Features</b>
<br />Secure HTTP is a secure message-oriented communications protocol designed for use in conjunction with HTTP. It is designed to coexist with HTTP's messaging model and to be easily integrated with HTTP applications.
<br />
<br />Secure HTTP provides a variety of security mechanisms to HTTP clients and servers, providing the security service options appropriate to the wide range of potential end uses possible for the WWW. The protocol provides symmetric capabilities to both client and server (in that equal treatment is given to both requests and replies, as well as for the preferences of both parties) while preserving the transaction model and implementation characteristics of HTTP.
<br />
<br />Several cryptographic message format standards may be incorporated into HTTPS clients and servers, particularly, but in principle not limited to, [CMS] and [MOSS]. HTTPS supports interoperation among a variety of implementations, and is compatible with HTTP. HTTPS aware clients can communicate with HTTPS oblivious servers and vice-versa, although such transactions obviously would not use HTTPS security features.
<br />
<br />HTTPS does not require client-side public key certificates (or public keys), as it supports symmetric key-only operation modes. This is significant because it means that spontaneous private transactions can occur without requiring individual users to have an established public key. While HTTPS is able to take advantage of ubiquitous certification infrastructures, its deployment does not require it.
<br />
<br />HTTPS supports end-to-end secure transactions, in contrast with the original HTTP authorization mechanisms which require the client to attempt access and be denied before the security mechanism is employed. Clients may be primed to initiate a secure transaction (typically using information supplied in message headers); this may be used to support encryption of fill-out forms, for example. With HTTPS, no sensitive data need ever be sent over the network in the clear.
<br />
<br />HTTPS provides full flexibility of cryptographic algorithms, modes and parameters. Option negotiation is used to allow clients and servers to agree on transaction modes (e.g., should the request be signed or encrypted or both - similarly for the reply); cryptographic algorithms; and certificate selection (please sign with your "Block-buster Video certificate").
<br />
<br />HTTPS attempts to avoid presuming a particular trust model, although its designers admit to a conscious effort to facilitate multiply-rooted hierarchical trust, and anticipate that principals may have many public key certificates.
<br />
<br />HTTPS differs from Digest-Authentication, in that it provides support for public key cryptography and consequently digital signature capability, as well as providing confidentiality.
<br />
<br /><b>Message Format</b>
<br />Syntactically, Secure HTTP messages are the same as HTTP, consisting of a request or status line followed by headers and a body. However, the range of headers is different and the bodies are typically cryptographically enhanced.
<br /><hr />
<br /><b>Processing Model</b>
<br /><ul><li><b>Message Preparation</b>
<br />The creation of an HTTPS message can be thought of as a function with three inputs:
<br /><ul><li>The cleartext message. This is either an HTTP message or some other data object. Note that since the cleartext message is carried transparently, headers and all, any version of HTTP can be carried within an HTTPS wrapper.<br /></li>
<li>The receiver's cryptographic preferences and keying material. This is either explicitly specified by the receiver or subject to some default set of preferences.<br /></li>
<li>The sender's cryptographic preferences and keying material. This input to the function can be thought of as implicit since it exists only in the memory of the sender.</li></ul>
<br />In order to create an HTTPS message, then, the sender integrates the sender's preferences with the receiver's preferences. The result of this is a list of cryptographic enhancements to be applied and keying material to be used to apply them. This may require some user intervention. For instance, there might be multiple keys available to sign the message. Using this data, the sender applies the enhancements to the message clear-text to create the HTTPS message.<br /><br /></li>

<li><b>Message Recovery</b>
<br />The recovery of an HTTPS message can be thought of as a function of four distinct inputs:
<br /><ul><li>The HTTPS message.<br /></li>
<li>The receiver's stated cryptographic preferences and keying material. The receiver has the opportunity to remember what cryptographic preferences it provided in order for this document to be dereferenced.<br /></li>
<li>The receiver's current cryptographic preferences and keying material.<br /></li>
<li>The sender's previously stated cryptographic options. The sender may have stated that he would perform certain cryptographic operations in this message. </li></ul>
<br />In order to recover an HTTPS message, the receiver needs to read the headers to discover which cryptographic transformations were performed on the message, then remove the transformations using some combination of the sender's and receiver's keying material, while taking note of which enhancements were applied.
<br />
<br />The receiver may also choose to verify that the applied enhancements match both the enhancements that the sender said he would apply (input 4 above) and that the receiver requested (input 2 above) as well as the current preferences to see if the HTTPS message was appropriately transformed. This process may require interaction with the user to verify that the enhancements are acceptable to the user. </li></ul>
<br />
<br /><b>Modes of Operation</b>
<br />Message protection may be provided on three orthogonal axes: signature, authentication, and encryption. Any message may be signed, authenticated, encrypted, or any combination of these (including no protection).
<br />
<br />Multiple key management mechanisms are supported, including password-style manually shared secrets and public-key key exchange. In particular, provision has been made for prearranged (in an earlier transaction or out of band) symmetric session keys in order to send confidential messages to those who have no public key pair.
<br />
<br />Additionally, a challenge-response ("nonce") mechanism is provided to allow parties to assure themselves of transaction freshness.
<br />
<br /><ul><li><b>Signature</b>
<br />If the digital signature enhancement is applied, an appropriate certificate may either be attached to the message (possibly along with a certificate chain) or the sender may expect the recipient to obtain the required certificate (chain) independently.<br /><br /></li>

<li><b>Key Exchange and Encryption</b>
<br />In support of bulk encryption, HTTPS defines two key transfer mechanisms, one using public-key enveloped key exchange and another with externally arranged keys.<br /><br /></li>

<li><b>Message Integrity and Sender Authentication</b>
<br />Secure HTTP provides a means to verify message integrity and sender authenticity for a message via the computation of a Message Authentication Code (MAC), computed as a keyed hash over the document using a shared secret - which could potentially have been arranged in a number of ways, e.g.: manual arrangement or 'inband' key management. This technique requires neither the use of public key cryptography nor encryption.<br /><br /></li>

<li><b>Freshness</b>
<br />The protocol provides a simple challenge-response mechanism, allowing both parties to insure the freshness of transmissions. Additionally, the integrity protection provided to HTTP headers permits implementations to consider the Date: header allowable in HTTP messages as a freshness indicator, where appropriate.</li></ul>
<br />
<br /><b>Implementation Options</b>
<br />In order to encourage widespread adoption of secure documents for the World-Wide Web in the face of the broad scope of application requirements, variability of user sophistication, and disparate implementation constraints, Secure HTTP deliberately caters to a variety of implementation options.
<br /><hr />
<br /><b>Implementation Recommendations and Requirements</b>
<br />All HTTPS agents must support the MD5 message digest and MAC authentication. As of HTTPS/1.4, all agents must also support the RSA-MD5-HMAC construction.
<br />
<br />All HTTPS agents must support Outband, Inband, and DH key exchange. All agents must support encryption using DES-CBC. Agents must support signature generation and verification using NIST-DSS.
<br />
<br /><b>Protocol Syntax Summary</b>
<br />We present below a summary of the main syntactic features of HTTPS/1.4, excluding message encapsulation proper.
<br /><ul><li><b>HTTPS (Unencapsulated) Headers</b>
<br />Content-Privacy-Domain: ('CMS' | 'MOSS') 
<br />Prearranged-Key-Info: ,, 
<br />Content-Type: 'message/http' 
<br />MAC-Info: [hex(timeofday)',']','hex()',' <br /><br /></li>

<li><b>HTTP (Encapsulated) Non-negotiation Options</b>
<br />Key-Assign: ','','',' ';'
<br />Encryption-Identity: ','','
<br />Certificate-Info: ','
<br />Nonce: 
<br />Nonce-Echo: <br /><br /></li>

<li><b>Encapsulated Negotiation Options</b>
<br />SHTTP-Cryptopts: ';'(,)*
<br />SHTTP-Privacy-Domains: ('CMS' | 'MOSS')
<br />SHTTP-Certificate-Types: ('X.509')
<br />SHTTP-Key-Exchange-Algorithms: ('DH', 'RSA' | 'Inband' | 'Outband')
<br />SHTTP-Signature-Algorithms: ('RSA' | 'NIST-DSS')
<br />SHTTP-Message-Digest-Algorithms:  ('RSA-MD2' | 'RSA-MD5' | 'NIST-SHS' 'RSA-MD2-HMAC', 'RSA-MD5-HMAC', 'NIST-SHS-HMAC')
<br />SHTTP-Symmetric-Content-Algorithms: ('DES-CBC' | 'DES-EDE-CBC' | 'DES-EDE3-CBC' | 'DESX-CBC' | 'CDMF-CBC' | 'IDEA-CBC' | 'RC2-CBC' )
<br />SHTTP-Symmetric-Header-Algorithms: ('DES-ECB' | 'DES-EDE-ECB' | 'DES-EDE3-EBC' | 'DESX-ECB' | 'CDMF-ECB' | 'IDEA-ECB' | 'RC2-ECB')
<br />SHTTP-Privacy-Enhancements: ('sign' | 'encrypt' | 'auth')
<br />Your-Key-Pattern: ','<br /><br /></li>

<li><b>HTTP Methods</b>
<br />Secure * Secure-HTTP/1.4<br /><br /></li>

<li><b>Server Status Reports</b>
<br />Secure-HTTP/1.4 200 OK
<br />SecurityRetry 420
<br />BogusHeader 421 </li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: A request using RSA key exchange with Inband key reply</b>

Alice, using an HTTPS-capable client, begins by making an HTTP request which yields 
the following response page:
          ============================================================
          200 OK HTTP/1.0
          Server-Name: Navaho-0.1.3.3alpha
          Certificate-Info: 
              CMS,MIAGCSqGSIb3DQEHAqCAMIACAQExADCABgkqhkiG9w0BBwEAAKCAM
              IIBrTCCAUkCAgC2MA0GCSqGSIb3DQEBAgUAME0xCzAJBgNVBAYTAlVTMSAwH
              gYDVQQKExdSU0EgRGF0YSBTZWN1cml0eSwgSW5jLjEcMBoGA1UECxMTUGVyc
              29uYSBDZXJ0aWZpY2F0ZTAeFw05NDA0MDkwMDUwMzdaFw05NDA4MDIxODM4N
              TdaMGcxCzAJBgNVBAYTAlVTMSAwHgYDVQQKExdSU0EgRGF0YSBTZWN1cml0e
              SwgSW5jLjEcMBoGA1UECxMTUGVyc29uYSBDZXJ0aWZpY2F0ZTEYMBYGA1UEA
              xMPU2V0ZWMgQXN0cm9ub215MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMy8Q
              cW7RMrB4sTdQ8Nmb2DFmJmkWn+el+NdeamIDElX/qw9mIQu4xNj1FfepfJNx
              zPvA0OtMKhy6+bkrlyMEU8CAwEAATANBgkqhkiG9w0BAQIFAANPAAYn7jDgi
              rhiIL4wnP8nGzUisGSpsFsF4/7z2P2wqne6Qk8Cg/Dstu3RyaN78vAMGP8d8
              2H5+Ndfhi2mRp4YHiGHz0HlK6VbPfnyvS2wdjCCAccwggFRAgUCQAAAFDANB
              gkqhkiG9w0BAQIFADBfMQswCQYDVQQGEwJVUzEgMB4GA1UEChMXUlNBIERhd
              GEgU2VjdXJpdHksIEluYy4xLjAsBgNVBAsTJUxvdyBBc3N1cmFuY2UgQ2Vyd
              GlmaWNhdGlvbiBBdXRob3JpdHkwHhcNOTQwMTA3MDAwMDAwWhcNOTYwMTA3M
              jM1OTU5WjBNMQswCQYDVQQGEwJVUzEgMB4GA1UEChMXUlNBIERhdGEgU2Vjd
              XJpdHksIEluYy4xHDAaBgNVBAsTE1BlcnNvbmEgQ2VydGlmaWNhdGUwaTANB
              gkqhkiG9w0BAQEFAANYADBVAk4GqghQDa9Xi/2zAdYEqJVIcYhlLN1FpI9tX
              Q1m6zZ39PYXK8Uhoj0Es7kWRv8hC04vqkOKwndWbzVtvoHQOmP8nOkkuBi+A
              QvgFoRcgOUCAwEAATANBgkqhkiG9w0BAQIFAANhAD/5Uo7xDdp49oZm9GoNc
              PhZcW1e+nojLvHXWAU/CBkwfcR+FSf4hQ5eFu1AjYv6Wqf430Xe9Et5+jgnM
              Tiq4LnwgTdA8xQX4elJz9QzQobkE3XVOjVAtCFcmiin80RB8AAAMYAAAAAAA
              AAAAA==

Encryption-Identity: DN-1779, null, CN=Setec Astronomy, OU=Persona Certificate,
O="RSA Data Security, Inc.", C=US;
SHTTP-Privacy-Enhancements: recv-required=encrypt

&lt;A name=tag1 HREF="shttp://www.setec.com/secret"&gt;Don't read this. &lt;/A&gt;
          ============================================================

An appropriate HTTP request to dereference this URL would be:
          ============================================================
          GET /secret HTTP/1.0
          Security-Scheme: HTTPS/1.4
          User-Agent: Web-O-Vision 1.2beta
          Accept: *.*
          Key-Assign: Inband,1,reply,des-ecb;7878787878787878
          ============================================================

The added Key-Assign line that would not have been in an ordinary HTTP request 
permits Bob (the server) to encrypt his reply to Alice, even though Alice does not 
have a public key, since they would share a key after the request is received by Bob. 
This request has the following HTTPS encapsulation:
          ============================================================
          Secure * Secure-HTTP/1.4
          Content-Type: message/http
          Content-Privacy-Domain: CMS

          MIAGCSqGSIb3DQEHA6CAMIACAQAxgDCBqQIBADBTME0xCzAJBgNVBAYTAlVTMSAw
          HgYDVQQKExdSU0EgRGF0YSBTZWN1cml0eSwgSW5jLjEcMBoGA1UECxMTUGVyc29u
          YSBDZXJ0aWZpY2F0ZQICALYwDQYJKoZIhvcNAQEBBQAEQCU/R+YCJSUsV6XLilHG
          cNVzwqKcWzmT/rZ+duOv8Ggb7oO/d8H3xUVGQ2LsX4kYGq2szwj8Q6eWhsmhf4oz
          lvMAADCABgkqhkiG9w0BBwEwEQYFKw4DAgcECFif7BadXlw3oIAEgZBNcMexKe16
          +mNxx8YQPukBCL0bWqS86lvws/AgRkKPELmysBi5lco8MBCsWK/fCyrnxIRHs1oK
          BXBVlsAhKkkusk1kCf/GbXSAphdSgG+d6LxrNZwHbBFOX6A2hYS63Iczd5bOVDDW
          Op2gcgUtMJq6k2LFrs4L7HHqRPPlqNJ6j5mFP4xkzOCNIQynpD1rV6EECMIk/T7k
          1JLSAAAAAAAAAAAAAA==
          ============================================================

The data between the delimiters is a CMS message, RSA enveloped for Setec Astronomy.

Bob decrypts the request, finds the document in question, and is ready to serve it 
back to Alice. An appropriate HTTP server response would be:
          ============================================================
          HTTP/1.0 200 OK
         Security-Scheme: HTTPS/1.4
          Content-Type: text/html

         Congratulations, you've won.
          &lt;A href="/prize.html"CRYPTOPTS="Key-Assign: 
           Inband,alice1,reply,des-ecb;020406080a0c0e0f;SHTTP-Privacy-Enhancements: 
           recv-required=auth"&gt;Click here to claim your prize&lt;/A&gt;
          ============================================================

This HTTP response, encapsulated as an HTTPS message becomes:
         ============================================================
          Secure * Secure-HTTP/1.4
          Content-Type: message/http
          Prearranged-Key-Info: des-ecb,697fa820df8a6e53,inband:1
          Content-Privacy-Domain: CMS

          MIAGCSqGSIb3DQEHBqCAMIACAQAwgAYJKoZIhvcNAQcBMBEGBSsOAwIHBAifqtdy
          x6uIMYCCARgvFzJtOZBn773DtmXlx037ck3giqnV0WC0QAx5f+fesAiGaxMqWcir
          r9XvT0nT0LgSQ/8tiLCDBEKdyCNgdcJAduy3D0r2sb5sNTT0TyL9uydG3w55vTnW
          aPbCPCWLudArI1UHDZbnoJICrVehxG/sYX069M8v6VO8PsJS7//hh1yM+0nekzQ5
          l1p0j7uWKu4W0csrlGqhLvEJanj6dQAGSTNCOoH3jzEXGQXntgesk8poFPfHdtj0
          5RH4MuJRajDmoEjlrNcnGl/BdHAd2JaCo6uZWGcnGAgVJ/TVfSVSwN5nlCK87tXl
          nL7DJwaPRYwxb3mnPKNq7ATiJPf5u162MbwxrddmiE7e3sST7naSN+GS0ateY5X7
          AAAAAAAAAAA=
          ============================================================

The data between the delimiters is a CMS message encrypted under a randomly-chosen 
DEK which can be recovered by computing: DES-DECRYPT(inband:1,697fa820df8a6e53)

Where ¡®inband:1¡¯ is the key exchanged in the Key-Assign line in the original request.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: A request using the auth enhancement</b>

There is a link on the HTML page that was just returned, which Alice dereferences, 
creating the HTTP message:
          ============================================================
          GET /prize.html HTTP/1.0
          Security-Scheme: HTTPS/1.4
          User-Agent: Web-O-Vision 1.1beta
          Accept: *.*
         ============================================================

Which, when encapsulated as an HTTPS message, becomes:
          ============================================================
          Secure * Secure-HTTP/1.4
          Content-Type: message/http
          MAC-Info:31ff8122,rsa-md5,b3ca4575b841b5fc7553e69b0896c416,inband:alice1
          Content-Privacy-Domain: CMS

          MIAGCSqGSIb3DQEHAaCABGNHRVQgL3ByaXplLmh0bWwgSFRUUC8xLjAKU2VjdXJp
          dHktU2NoZW1lOiBTLUhUVFAvMS4xClVzZXItQWdlbnQ6IFdlYi1PLVZpc2lvbiAx
          LjFiZXRhCkFjY2VwdDogKi4qCgoAAAAA
          ============================================================

The data between the delimiters is a CMS 'Data' representation of the request.</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>HTTPS</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Algorithm</b><br />Algorithm is a formula or set of steps for solving a particular problem. To be an algorithm, a set of rules must be unambiguous and have a clear stopping point. Algorithms can be expressed in any language, from natural languages like English or French to programming languages like FORTRAN.
<br />
<br />We use algorithms every day. For example, a recipe for baking a cake is an algorithm. Most programs, with the exception of some artificial intelligence applications, consist of algorithms. Inventing elegant algorithms -- algorithms that are simple and require the fewest steps possible -- is one of the principal challenges in programming.<br /><br /><b>Authentication</b><br />The process of identifying an individual, usually based on a username and password. In security systems, authentication is distinct from authorization , which is the process of giving individuals access to system objects based on their identity. Authentication merely ensures that the individual is who he or she claims to be, but says nothing about the access rights of the individual.<br /><br /><b>Authorization</b><br />The process of identifying an individual, usually based on a username and password. In security systems, authentication is distinct from authorization , which is the process of giving individuals access to system objects based on their identity. Authentication merely ensures that the individual is who he or she claims to be, but says nothing about the access rights of the individual.<br /><br /><b>CMS</b><br />The Cryptographic Message Syntax describes an encapsulation syntax for data protection. It supports digital signatures, message authentication codes, and encryption. The syntax allows multiple encapsulation, so one encapsulation envelope can be nested inside another.<br /><br /><b>Certificate authority</b><br />In cryptography, a certificate authority or certification authority (CA) is an entity which issues digital certificates for use by other parties. It is an example of a trusted third party. CA's are characteristic of many public key infrastructure (PKI) schemes.<br /><br /><b>Client</b><br />Clinet is a program which requests services of another program. It is a client part of a client-server architecture. Typically, a client is an application that runs on a personal computer or workstation and relies on a server to perform some operations. For example, an e-mail client is an application that enables you to send and receive e-mail.<br /><br /><b>Data</b><br />* Distinct pieces of information, usually formatted in a special way. All software is divided into two general categories: data and programs. Programs are collections of instructions for manipulating data. Data can exist in a variety of forms -- as numbers or text on pieces of paper, as bits and bytes stored in electronic memory, or as facts stored in a person's mind. Strictly speaking, data is the plural of datum, a single piece of information. In practice, however, people use data as both the singular and plural form of the word. 
<br />
<br />* The term data is often used to distinguish binary machine-readable information from textual human-readable information. For example, some applications make a distinction between data files (files that contain binary data) and text files (files that contain ASCII data). 
<br />
<br />* In database management systems, data files are the files that store the database information, whereas other files, such as index files and data dictionaries, store administrative information, known as metadata.<br /><br /><b>Encapsulation</b><br />In programming, the process of combining elements to create a new entity. For example, a procedure is a type of encapsulation because it combines a series of computer instructions. Likewise, a complex data type, such as a record or class, relies on encapsulation. Object-oriented programming languages rely heavily on encapsulation to create high-level objects. Encapsulation is closely related to abstraction and information hiding.<br /><br /><b>Encrypted</b><br />Encrypted equals to encryption.<br /><br /><b>Firefox</b><br />Mozilla Firefox (originally known as "Phoenix" and briefly as "Mozilla Firebird") is a free, cross-platform, graphical web browser developed by the Mozilla Foundation and hundreds of volunteers.<br /><br /><b>HTTP</b><br />HTTP(HyperText Transfer Protocol) defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands. For example, when you enter a URL in your browser, this actually sends an HTTP command to the Web server directing it to fetch and transmit the requested Web page. 
<br />
<br />The other main standard that controls how the World Wide Web works is HTML, which covers how Web pages are formatted and displayed. 
<br />
<br />HTTP is called a stateless protocol because each command is executed independently, without any knowledge of the commands that came before it. This is the main reason that it is difficult to implement Web sites that react intelligently to user input. This shortcoming of HTTP is being addressed in a number of new technologies, including ActiveX, Java, JavaScript and cookies. <br /><br /><b>HTTPS</b><br />HTTPS is a URI scheme equivalent to the http scheme, originally intended to be used with the HTTP protocol, but with added encryption layer. The URI structure is the same, except that URIs begins with "https:" rather than "http:".<br /><br /><b>LINUX</b><br />Linux is a freely-distributable open source operating system that runs on a number of hardware platforms. The Linux kernel was developed mainly by Linus Torvalds. Because it's free, and because it runs on many platforms, including PCs and Macintoshes, Linux has become an extremely popular alternative to proprietary operating systems.<br /><br /><b>Man in the middle attacks</b><br />In cryptography, a man in the middle attack (MITM) is an attack in which an attacker is able to read, insert and modify at will, messages between two parties without either party knowing that the link between them has been compromised. The attacker must be able to observe and intercept messages going between the two victims. The MITM attack is particularly applicable to the original Diffie-Hellman key exchange protocol, when used without authentication.<br /><br /><b>Mode</b><br />Mode is the state or setting of a program or device. For example, when a word processor is in insert mode, characters that you type are inserted at the cursor position. In overstrike mode, characters typed replace existing characters.<br /><br /><b>NCC</b><br />NCC (Netscape Communications Corporation) was the publisher of the Netscape web browsers as well as many other internet and intranet client and server software products.<br /><br /><b>Parameter</b><br />Characteristic, means defining the characteristics of something. In general, parameters are used to customize a program. For example, filenames, page lengths, and font specifications could all be considered parameters. 
<br />
<br />In programming, the term parameter is synonymous with argument, a value that is passed to a routine.<br /><br /><b>Plain text</b><br />Plain text refers to textual data in ASCII format. Plain text is the most portable format because it is supported by nearly every application on every machine. It is quite limited, however, because it cannot contain any formatting commands.<br /><br /><b>Port</b><br />Port is an interface on a computer to which you can connect a device. Personal computers have various types of ports. Internally, there are several ports for connecting disk drives, display screens, and keyboards. Externally, personal computers have ports for connecting modems, printers, mice, and other peripheral devices. 
<br />
<br />Almost all personal computers come with a serial RS-232C port or RS-422 port for connecting a modem or mouse and a parallel port for connecting a printer. On PCs, the parallel port is a Centronics interface that uses a 25-pin connector. SCSI (Small Computer System Interface) ports support higher transmission speeds than do conventional ports and enable you to attach up to seven devices to the same port.<br /><br /><b>Public key certificate</b><br />In cryptography, a public key certificate (or identity certificate) is a certificate which uses a digital signature to bind together a public key with an identity - information such as the name of a person or an organization, their address, and so forth. The certificate can be used to verify that a public key belongs to an individual.<br /><br /><b>SSL</b><br />SSL (Secure Sockets Layer) and TLS (Transport Layer Security), its successor, are cryptographic protocols which provide secure communications on the Internet. There are slight differences between SSL 3.0 and TLS 1.0, but the protocol remains substantially the same.<br /><br /><b>Self-signed certificate</b><br />In cryptography and computer security, a self-signed certificate is an identity certificate that is signed by its own creator. That is, the person that created the certificate also signed off on its legitimacy.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>Session</b><br />The session of activity that a user with a unique IP address spends on a Web site during a specified period of time. The number of user sessions on a site is used in measuring the amount of traffic a Web site gets. The site administrator determines what the time frame of a user session will be (e.g., 30 minutes).
<br />
<br />If the visitor comes back to the site within that time period, it is still considered one user session because any number of visits within that 30 minutes will only count as one session. If the visitor returns to the site after the allotted time period has expired, say an hour from the initial visit, then it is counted as a separate user session.<br /><br /><b>SuSE</b><br />SuSE is a major retail Linux distribution, produced in Germany. The company is owned by Novell, Inc. SuSE is also a founding member of the Desktop Linux Consortium.<br /><br /><b>TCP</b><br />TCP (Transmission Control Protocol) is one of the main protocols in TCP/IP networks. TCP is one of the main protocols in TCP/IP networks. Whereas the IP protocol deals only with packets, TCP enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and also guarantees that packets will be delivered in the same order in which they were sent.<br /><br /><b>TLS</b><br />TLS (Transport Layer Security), made up of two layers: the TLS Record Protocol and TLS Handshake Protocol, is a protocol that guarantees privacy and data integrity between client/server applications communicating over the Internet. TLS is application protocol-independent. Higher-level protocols can layer on top of the TLS protocol transparently.<br /><br /><b>WWW</b><br />WWW(World Wide Web) is a system of Internet servers that support specially formatted documents. The documents are formatted in a markup language called HTML (HyperText Markup Language) that supports links to other documents, as well as graphics, audio, and video files. There are several applications called Web browsers that make it easy to access the World Wide Web; Two of the most popular being Netscape Navigator and Microsoft's Internet Explorer.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2660.html">RFC 2660</a>] The Secure HyperText Transfer Protocol.
                		  </div>
		  
</section>

