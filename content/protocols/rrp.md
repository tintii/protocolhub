---
id: protocol-rrp
slug: rrp
name: RRP
expandedName: NSI Registry Registrar Protocol
origin: historical
provenance:
  source: protocols/protocol_RRP.htm
  sha256: cbccb199b86ae91c0a880b85a38e0277e3a3231483be88119340f0606678b926
  provider: 'Colasoft Co., Ltd.'
aliases:
  - NSI Registry Registrar Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: NSI Registry Registrar Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Ports
    html: 648 (TCP) server
originalUpdate: '2006-09-05 14:39:21'
rfcs:
  - 2832
  - 3632
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

			RRP (NSI Registry Registrar Protocol) is a TCP-based, 7-bit US-ASCII text protocol that permits multiple registrars to provide second level Internet domain name registration services in the top level domains (TLDs) administered by a TLD registry.
<br />
<br />RRP was developed by the Network Solutions, Inc. Registry under the auspices of the Shared Registration System program. The protocol was initially deployed in April 1999 as part of a test bed implementation of the Shared Registration System with five registrars. Additional registrars began using the protocol in July 1999. The operational experiences of both the registry and the registrars identified several "lessons learned" which have been documented here as "Known Issues".
<br />
<br />The registry stores information about registered domain names and associated name servers. A domain name's data includes its name, name servers, registrar, registration expiration date, and status. A name server's data includes its server name, IP addresses, and registrar. A registrar may perform the following registration service procedures using RRP:
<br /><ul><li>Determine if a domain name has been registered.<br /></li>
<li>Register a domain name.<br /></li>
<li>Renew the registration of a domain name.<br /></li>
<li>Cancel the registration of a domain name.<br /></li>
<li>Update the name servers of a domain name.<br /></li>
<li>Transfer a domain name from another registrar.<br /></li>
<li>Examine the status of domain names that the registrar has registered.<br /></li>
<li>Modify the status of domain names that the registrar has registered.<br /></li>
<li>Determine if a name server has been registered.<br /></li>
<li>Register a name server.<br /></li>
<li>Update the IP addresses of a name server.<br /></li>
<li>Delete a name server.<br /></li>
<li>Examine the status of name servers that the registrar has registered.</li></ul>
<br />
<br />All RRP commands include features to provide idempotency. That is, the effect of each command is the same if the command is executed once or if the command is executed multiple times. This property is extremely useful in situations when a command is retried due to an error condition that results in a missed command response and a command retry is attempted. Command retries will be caught by the System and rejected with an appropriate error response code. Command parameters that do not provide idempotency will be explained fully as part of the appropriate command description.
<br /><hr />
<br />A typical RRP session will go through a number of states during its lifetime. The following figure illustrates the possible states of an RRP server. Initially, the server waits for a client connection and authentication (PRE). All client connections must be authenticated.
<br />
<br />RRP Server Finite State Machine
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">                                      |
                                      |
                                      v
                             +-----------------+   Timeout
                             |   Waiting for   |-------------------+
   Authentication Succeeded  |      Client     |                   |
                   +---------|  Authentication | Authentication    |
                   |         |      (PRE)      |-----+  Failed     |
                   |         +-----------------+     |             |
                   |                                 |             |
                   V                                 V             |
             +-----------+     Succeeded    +--------------------+ |
             |Waiting for|&lt;-----------------|    Waiting for     | |
             |  Command  |----------+       |Authentication Retry| |
             |   (WFC)   |  Timeout |       |       (WFR)        | |
             +-----------+          |       +--------------------+ |
                 |   ^              |           |         |        |
                 |   |              |   Timeout |         | Failed |
         Request V   |Response      |           |         |        |
             +-----------+          |           V         V        V
             | Executing |          |          +--------------------+
             |  Command  |          +---------&gt;|    Disconnected    |
             |   (EXE)   |--------------------&gt;|       (DIS)        |
             +-----------+          QUIT       +--------------------+</pre>
<br />
<br />If the authentication fails, the server gives the client another chance to identify itself (WFR). If the authentication fails again, the server disconnects (DIS). Otherwise, the server waits for a request from the client (WFC). Upon receiving a request, the server executes it and responds to the client with the result (EXE). The server then waits again for another request from the client (WFC). If the client sends a QUIT command, the server ends the session and disconnects (DIS). To keep its state in sync with that of the server, the client should wait for a response from the server before sending another request on the same connection. The following table summarizes these states:
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><b>Table</b></td><td><b>Description</b></td></tr><tr><td>PRE</td><td>Waiting for client connection and authentication</td></tr><tr><td>WFR</td><td>Waiting for authentication retry</td></tr><tr><td>WFC</td><td>Waiting for a command from an authenticated client</td></tr><tr><td>EXE</td><td>Executing a command</td></tr><tr><td>DIS</td><td>Disconnected</td></tr></tbody></table></div></div>
<br />
<br />The WFR and WFC states may time out. An implementation should define inactivity timeout periods for these states based on System-specific factors, including (but not limited to) resource availability and security risk. In the absence of other factors, a default timeout period of 10 minutes should be used. The server may disconnect if the server is in one of these states and no message is received from the client during the timeout period.
<br />
<br /><b>Commands</b>
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><b>Command</b></td><td><b>References</b></td></tr><tr><td>add</td><td>This command allows a registrar to register a domain name or a name server in the System.</td></tr><tr><td>check</td><td>This command allows a registrar to determine if a domain name or name server has been registered in the System.</td></tr><tr><td>delete</td><td>This command allows a registrar to delete (cancel the registration) of a domain name or delete a name server.</td></tr><tr><td>describe</td><td>This command allows a registrar to obtain general information about an RRP implementation.</td></tr><tr><td>mod</td><td>This command allows a registrar to update a registered domain name or a name server.</td></tr><tr><td>quit</td><td>This command allows a registrar to close an RRP connection. A response must be sent before closing the connection.</td></tr><tr><td>renew</td><td>This command allows a registrar to renew a domain name in the System.</td></tr><tr><td>session</td><td>This command allows a registrar to establish an RRP session. A registrar can also use this command to change their password.</td></tr><tr><td>status</td><td>This command allows a registrar to determine the current status of a domain name or name server.</td></tr><tr><td>transfer</td><td>This command allows a registrar to request transfer of domain name sponsorship from a second registrar and to approve or reject transfer requests initiated by other registrars.</td></tr></tbody></table></div></div>
<br /><hr />
<br /><b>Response Codes</b>
<br />RRP commands may return a variety of response codes to signify normal completion or error conditions. This section documents all of the defined RRP response codes.
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td><b>Code</b></td><td><b>Name</b></td><td><b>Description</b></td></tr><tr><td>200</td><td>Command completed successfully</td><td>This is the normal response for successful completion of most RRP commands.</td></tr><tr><td>210</td><td>Domain name available</td><td>This is the normal response for successful completion of an RRP CHECK command for a domain name that is not currently registered.</td></tr><tr><td>211</td><td>Domain name not available</td><td>This is the normal response for successful completion of an RRP CHECK command for a domain name that is currently registered.</td></tr><tr><td>212</td><td>Name server available</td><td>This is the normal response for successful completion of an RRP CHECK command for a name server that is not currently registered.</td></tr><tr><td>213</td><td>Name server not available</td><td>This is the normal response for successful completion of an RRP CHECK command for a name server that is currently registered.</td></tr><tr><td>220</td><td>Command completed successfully</td><td>Server closing connection This is the normal response for successful completion of an RRP QUIT command. It may also be returned by other RRP commands if a transient situation is noted that requires closing the connection after successfully completing the RRP command.</td></tr><tr><td>420</td><td>Command failed due to server error. Server closing connection</td><td>Server closing connection A transient server error has caused RRP command failure and session termination. A new session must be established before continued processing can be attempted.</td></tr><tr><td>421</td><td>Command failed due to server error. Client should try again</td><td>Client should try again A transient server error has caused RRP command failure. A subsequent retry may produce successful results.</td></tr><tr><td>500</td><td>Invalid command name.</td><td>A client-specified RRP command name was not recognized as a valid RRP command name.</td></tr><tr><td>501</td><td>Invalid command option</td><td>A client-specified RRP command parameter was not recognized as a valid RRP command parameter.</td></tr><tr><td>502</td><td>Invalid entity value</td><td>The "value" of an entity name-value pair is invalid. Command blocks that require an "EntityName" parameter also require a value that specifies the entity name, and the provided value is invalid.</td></tr><tr><td>503</td><td>Invalid attribute name</td><td>A client-specified RRP command parameter was not recognized as a valid RRP command parameter.</td></tr><tr><td>504</td><td>Missing required attribute</td><td>A parameter required to execute the RRP command was not provided by the client. The command should be retried with all required parameters specified.</td></tr><tr><td>505</td><td>Invalid attribute value syntax</td><td>A supplied parameter value is syntactically incorrect. For example, a year value digit such as "5" may be required but the client provided a string of characters such as "five".</td></tr><tr><td>506</td><td>Invalid option value</td><td>A client-specified value for an RRP command parameter is out-of-bounds or otherwise not within acceptable System limits.</td></tr><tr><td>507</td><td>Invalid command format</td><td>The specified command does not resemble a well-formed RRP command.The command should be retried using the proper command structure and syntax.</td></tr><tr><td>508</td><td>Missing required entity.</td><td>An entity required for command completion was not provided by the client.</td></tr><tr><td>509</td><td>Missing command option</td><td>A command parameter that isn't really optional (such as the registrar ID in a SESSION command) was not provided by the client.</td></tr><tr><td>510</td><td>Invalid encoding</td><td>The value of a domain name or name server entity contains invalid ASCII compatible encoding used to represent an internationalized domain or host name.</td></tr><tr><td>520</td><td>Server closing connection</td><td>A timeout event has been detected, and the client's session is being ended.</td></tr><tr><td>521</td><td>Too many sessions open</td><td>A System-defined limit on the number of open connections has been exceeded, and it is impossible to establish a new session at the moment.</td></tr><tr><td>530</td><td>Authentication failed</td><td>The client-supplied registrar identifier or password was not recognized by the System.</td></tr><tr><td>531</td><td>Authorization failed</td><td>Registrars may not view or alter data associated with either the registry or another registrar.</td></tr><tr><td>532</td><td>Domain names linked with name server</td><td>The name server is hosting active domains. This error occurs when a registrar is trying to delete a server that is the name server for active domains.</td></tr><tr><td>533</td><td>Domain name has active name servers</td><td>The domain name has active name servers. The registrar is trying to delete a domain name that is a parent domain of an active name server, i.e., a server that is hosting active domains.</td></tr><tr><td>534</td><td>Domain name has not been flagged for transfer</td><td>The registrar is trying to approve or reject a domain name transfer for a domain name that is not pending transfer.</td></tr><tr><td>535</td><td>Restricted IP address</td><td>IANA identifies certain IP address ranges that are not valid for normal use.</td></tr><tr><td>536</td><td>Domain already flagged for transfer</td><td>The registrar tried to perform a transfer command for a domain name that is awaiting approval of an earlier transfer request.</td></tr><tr><td>540</td><td>Attribute value is not unique</td><td>A supplied attribute value is not unique.</td></tr><tr><td>541</td><td>Invalid attribute value.</td><td>A supplied parameter value is invalid.</td></tr><tr><td>542</td><td>Invalid old value for an attribute</td><td>A current attribute value to be modified is invalid.</td></tr><tr><td>543</td><td>Final or implicit attribute cannot be updated</td><td>The registrar is attempting to modify an attribute that is only modifiable by the registry.</td></tr><tr><td>544</td><td>Entity on hold</td><td>The attempted operation was rejected because the entity is on HOLD status.</td></tr><tr><td>545</td><td>Entity reference not found</td><td>A required entity reference was not found.</td></tr><tr><td>546</td><td>Credit limit exceeded.</td><td>The registrar's credit limit has been exceeded.</td></tr><tr><td>547</td><td>Invalid command sequence.</td><td>RRP commands are issued using a well-formed syntax that requires entry of command structures in particular sequences.</td></tr><tr><td>548</td><td>Domain is not up for renewal</td><td>A RENEW command was attempted during a period in which the domain can not be renewed.</td></tr><tr><td>549</td><td>Command failed</td><td>A System error prevented successful completion of the requested RRP command.</td></tr><tr><td>550</td><td>Parent domain not registered.</td><td>The parent domain of a name server being registered is not registered.</td></tr><tr><td>551</td><td>Parent domain status does not allow for operation</td><td>The status of the parent domain does not allow the requested operation.</td></tr><tr><td>552</td><td>Domain status does not allow for operation</td><td>The status of the domain does not allow the requested operation.</td></tr><tr><td>553</td><td>Operation not allowed</td><td>The status of the domain does not allow the requested operation.</td></tr><tr><td>554</td><td>Domain already registered</td><td>A registrar tried to register a domain name that has already been registered by the same registrar.</td></tr><tr><td>555</td><td>Domain already renewed</td><td>A registrar tried to renew a domain using the same parameters as specified for an earlier, successful renewal.</td></tr><tr><td>556</td><td>Maximum registration period exceeded</td><td>A registrar tried to renew a domain registration, and the resulting new registration period exceeds the System-defined maximum registration period.</td></tr></tbody></table></div></div>
<br />
<br /><b>Domain Status Codes</b>
<br />The status of a domain can be viewed using the RRP STATUS command and modified using the RRP MOD command. Both the registry and the sponsoring registrar may view and change the status of a domain. The criteria for status changes are highly dependent on registry and registrar business models and are thus beyond the scope of this specification.
<br />
<br />The domain's status should have a direct bearing on whether or not the domain appears in the appropriate TLD zone file and whether or not the domain can be modified. A domain can have more than one assigned status, e.g., REGISTRAR-HOLD and REGISTRAR-LOCK. If a domain is in ACTIVE status, then the domain name can only be in this status. When a registrar sets a domain name to REGISTRAR-LOCK, the registry must automatically remove the ACTIVE status. When the registrar removes the REGISTRAR-LOCK and other domain statuses, the registry must automatically set the domain name status to ACTIVE.
<br />
<br /><ul><li><b>ACTIVE</b><br /></li>
<li>This is the default status of a domain at registration time. The registry sets the domain to this status. The domain is modifiable by the registrar. The domain can be renewed. The domain shall be included in the zone file when in this status if the domain has at least one associated name server.
<br /><br /></li>
<li><b>REGISTRY-LOCK</b><br /></li>
<li>The registry sets the domain to this status. The domain cannot be modified or deleted by the registrar. The registry must remove the REGISTRY-LOCK status for the registrar to modify the domain. The domain can be renewed. The domain shall be included in the zone file when in this status if the domain has at least one associated name server.
<br /><br /></li>
<li><b>REGISTRY-HOLD</b><br /></li>
<li>The registry sets the domain to this status. The domain cannot be modified or deleted by the registrar. The registry must remove the REGISTRY-HOLD status for the registrar to modify the domain. The domain can be renewed. The domain shall not be included in the zone file when in this status.
<br /><br /></li>
<li><b>REGISTRAR-HOLD</b><br /></li>
<li>The registrar of the domain sets the domain to this status. The domain can not be modified or deleted when in this status. The registrar must remove REGISTRAR-HOLD status to modify the domain. The domain can be renewed. The domain shall not be included in the zone file when in this status.
<br /><br /></li>
<li><b>REGISTRAR-LOCK</b><br /></li>
<li>The registrar of the domain sets the domain to this status. The domain cannot be modified or deleted when in this status. The registrar must remove REGISTRAR-LOCK status to modify the domain. The domain can be renewed. The domain shall be included in the zone file when in this status.
<br /><br /></li>
<li><b>REGISTRY-DELETE-NOTIFY</b><br /></li>
<li>A domain is set on this status if it has expired and has child name servers that are hosting other domains. Only the registry may set this status. The domain shall be included in the zone file when in this status if the domain has at least one associated name server.</li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			The following syntax specification uses the augmented Backus-Naur Form (BNF) as described in [ABNF].
<br />
<br />ABNF specification for Registry Registrar Protocol (RRP) v1.1.0. Note that character string literals are case insensitive.
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1 - Lexical tokens</b>
space = %x20 ; " "
dot = %x2E ; "."
dash = %x2D ; "-"
underscore = %x5F ; "_"
colon = %x3A ; ":"
cr = %x0D ; ASCII carriage return
lf = %x0A ; ASCII linefeed
crlf = cr lf
alpha = %x41-5A / %x61-7A ; A-Z / a-z
digit = %x30-39 ; 0-9
dns-char = alpha / digit / dash
id-char = alpha / digit / underscore / dash
id-prefix = alpha / digit
id-word = id-prefix *id-char
printable-char = %x20-7E ; ASCII " " - "~"</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2 - Start of basic grammar</b>
year = 4digit
month = 2digit
day = 2digit
ymd = year dash month dash day
hour = 2digit
minute = 2digit
second = 2digit
split-second = 1digit
hms = hour colon minute colon second dot split-second
time-stamp = ymd space hms
ip-address = 1*3digit dot 1*3digit dot 1*3digit dot 1*3digit
password = 4*16printable-char
option-name = 1*128id-word
option-tag = dash option-name
option-value = 1*128id-word
attribute-name = 1*128id-word
attribute-value = 1*128printable-char
attribute-line = attribute-name colon attribute-value crlf
response = 3digit space 1*printable-char crlf
version-number = "RRP" space 1*digit dot 1*digit dot 1*digit
label = id-prefix [*61dns-char id-prefix]
sldn = label dot label
servername = *(label dot) sldn
period = %x31-39 / (%x31-39 %x30-39) ; "1" - "9" or "10" - "99"
period-option = dash "Period" colon period crlf
yesno = "Yes" / "No"
domainstatus = "Active" / "Registry-Lock" / "Registry-Hold" /
               "Registrar-Lock" / "Registrar-Hold" /
               "Registry-Delete-Notify"</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3 - RRP commands and responses</b>
rrp = add / check / delete / describe / mod / quit / renew / session / status / transfer
add = add-request add-response
check = check-request check-response
delete = del-request del-response
describe = describe-request describe-response
mod = mod-request mod-response
quit = quit-request quit-response
renew = renew-request renew-response
session = session-request session-response
status = status-request status-response
transfer = transfer-request transfer-response</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 4" tabindex="0"><b>Example 4 - ADD command</b>
add-request = add-domain-request / add-nameserver-request
add-response = add-domain-response / add-nameserver-response
add-domain-request = "add" crlf
 "EntityName" colon "Domain" crlf
 "DomainName" colon sldn crlf
 [period-option]
 0*13("NameServer" colon servername crlf)
 dot crlf
add-nameserver-request = "add" crlf
 "EntityName" colon "NameServer" crlf
 "NameServer" colon servername crlf
 1*("IPAddress" colon ip-address crlf)
 dot crlf
add-domain-response = response
 "RegistrationExpirationDate" colon time-stamp crlf
 "status" colon domainstatus crlf
 dot crlf
add-nameserver-response = response
 dot crlf</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 5" tabindex="0"><b>Example 5 - CHECK command</b>
check-request = check-domain-request / check-nameserver-request
check-response = check-domain-response / check-nameserver-response
check-domain-request = "check" crlf
 "EntityName" colon "Domain" crlf
 "DomainName" colon sldn crlf
 dot crlf
check-nameserver-request = "check" crlf
 "EntityName" colon "NameServer" crlf
 "NameServer" colon servername crlf
 dot crlf
check-domain-response = response

 dot crlf
check-nameserver-response = available-check-nameserver-response /
                            notavailable-check-nameserver-response
available-check-nameserver-response = response
 dot crlf
notavailable-check-nameserver-response = response
 1*("IPAddress" colon ip-address crlf)
 dot crlf
	  </pre>
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		</blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>ASCII</b><br />ASCII (American Standard Code for Information Interchange) is the most common format for text files in computers and on the Internet. In an ASCII file, each alphabetic, numeric, or special character is represented with a 7-bit binary number (a string of seven 0s or 1s). 128 possible characters are defined. 
<br />
<br />Unix and DOS-based operating systems use ASCII for text files. Windows NT and 2000 uses a newer code, Unicode. IBM's S/390 systems use a proprietary 8-bit code called EBCDIC. Conversion programs allow different operating systems to change a file from one code to another. 
<br />
<br />ASCII was developed by the American National Standards Institute (ANSI).<br /><br /><b>Domain name</b><br />The term domain name has multiple meanings, all related to the [Domain Name System] (main article).
<br />*a name that is entered into a computer (e.g. as part of a website or other URL, or an email address) and then looked up in the global [Domain Name System] which informs the computer of the IP address(es) with that name. 
<br />*the product that registrars provide to their customers. 
<br />*a name looked up in the DNS for other purposes.<br /><br /><b>RRP</b><br />This protocol was developed by the Network Solutions Registry for use within the .com/.net/.org SRS. As defined in <a href="https://www.rfc-editor.org/rfc/rfc2832.html">RFC 2832</a>, NSI RRP is a TCP-based, 7-bit US-ASCII text protocol that permits multiple registrars to provide second level Internet domain name registration services in the top level domains (TLDs) administered by a TLD registry.<br /><br /><b>Register</b><br />(n) A, special, high-speed storage area within the CPU. All data must be represented in a register before it can be processed. For example, if two numbers are to be multiplied, both numbers must be in registers, and the result is also placed in a register. 
<br />
<br />(v) To notify a manufacturer that you have purchased its product. Registering a product is often a prerequisite to receiving customer support, and it is one of the ways that software producers control software piracy.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2832.html">RFC 2832</a>] NSI Registry Registrar Protocol (RRP) Version 1.1.0.
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3632.html">RFC 3632</a>. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc3632.html">RFC 3632</a>] VeriSign Registry Registrar Protocol (RRP) Version 2.0.0.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2832.html">RFC 2832</a>.
                		  </div>
		  
</section>

