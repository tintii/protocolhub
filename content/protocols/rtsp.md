---
id: protocol-rtsp
slug: rtsp
name: RTSP
expandedName: Real Time Streaming Protocol
origin: historical
provenance:
  source: protocols/protocol_RTSP.htm
  sha256: c47d67d2771db3c11830f8fb04ce7367e53a6afed5fde2651be1c8c2e6799921
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Real Time Streaming Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Real Time Streaming Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: Application protocol.
  - label: Ports
    html: '554'
  - label: URI
    html: rtsp
  - label: Working groups
    html: 'Music, Multiparty Multimedia Session Control'
originalUpdate: '2005-11-10 16:09:44'
rfcs:
  - 2326
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

			RTSP is an application-level protocol for control over the delivery of data with real-time properties. RTSP provides an extensible framework to enable controlled, on-demand delivery of real-time data, such as audio and video. Sources of data can include both live data feeds and stored clips. This protocol is intended to control multiple data delivery sessions, provide a means for choosing delivery channels such as UDP, multicast UDP and TCP, and provide a means for choosing delivery mechanisms based upon RTP.
<br />
<br />The Real-Time Streaming Protocol (RTSP) establishes and controls either a single or several time-synchronized streams of continuous media such as audio and video. It does not typically deliver the continuous streams itself, although interleaving of the continuous media stream with the control stream is possible. In other words, RTSP acts as a ¡°network remote control¡± for multimedia servers.
<br />
<br />The streams controlled by RTSP may use RTP, but the operation of RTSP does not depend on the transport mechanism used to carry continuous media. The protocol is intentionally similar in syntax and operation to HTTP/1.1 so that extension mechanisms to HTTP can in most cases also be added to RTSP. However, RTSP differs in a number of important aspects from HTTP:
<br /><ul><li>RTSP introduces a number of new methods and has a different protocol identifier.<br /></li>
<li>An RTSP server needs to maintain state by default in almost all cases, as opposed to the stateless nature of HTTP. <br /></li>
<li>Both an RTSP server and client can issue requests.<br /></li>
<li>Data is carried out-of-band by a different protocol. (There is an exception to this.) <br /></li>
<li>RTSP is defined to use ISO 10646 (UTF-8) rather than ISO 8859-1, consistent with current HTML internationalization efforts.<br /></li>
<li>The Request-URI always contains the absolute URI. Because of backward compatibility with a historical blunder, HTTP/1.1 carries only the absolute path in the request and puts the host name in a separate header field.</li></ul>
<br />
<br />RTSP is a text-based protocol and uses the ISO 10646 character set in UTF-8 encoding. Lines are terminated by CRLF, but receivers should be prepared to also interpret CR and LF by themselves as line terminators.
<br />
<br />RTSP messages can be carried over any lower-layer transport protocol that is 8-bit clean.
<br />Requests contain methods, the object the method is operating upon and parameters to further describe the method. Methods are idempotent, unless otherwise noted. Methods are also designed to require little or no state maintenance at the media server.
<br />
<br /><b>Retrieval of Media From Media Server</b>
<br />The client can request a presentation description via HTTP or some other method. If the presentation is being multicast, the presentation description contains the multicast addresses and ports to be used for the continuous media. If the presentation is to be sent only to the client via unicast, the client provides the destination for security reasons.
<br />
<br /><b>Invitation of a Media Server to a Conference</b>
<br />A media server can be "invited" to join an existing conference, either to play back media into the presentation or to record all or a subset of the media in a presentation. This mode is useful for distributed teaching applications. Several parties in the conference may take turns "pushing the remote control buttons".
<br />
<br /><b>Addition of Media to an Existing Presentation</b>
<br />Particularly for live presentations, it is useful if the server can tell the client about additional media becoming available.
<br />
<br /><b>RTSP State</b>
<br />RTSP controls a stream which may be sent via a separate protocol, independent of the control channel. For example, RTSP control may occur on a TCP connection while the data flows via UDP. Thus, data delivery continues even if no RTSP requests are received by the media server. Also, during its lifetime, a single media stream may be controlled by RTSP requests issued sequentially on different TCP connections. Therefore, the server needs to maintain "session state" to be able to correlate RTSP requests with a stream. The state transitions are described in Section A.
<br />
<br />Many methods in RTSP do not contribute to state. However, the following play a central role in defining the allocation and usage of stream resources on the server: SETUP, PLAY, RECORD, PAUSE, and TEARDOWN.
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: Media on Demand (Unicast)</b>

Client C requests a movie from media servers A (audio.example.com)and V 
(video.example.com). The media description is stored on a web serverW. The media 
description contains descriptions of the presentation and all its streams, including 
the codecs that are available, dynamic RTP payload types, the protocol stack, and 
content information such as language or copyright restrictions. It may also give an 
indication about the timeline of the movie.In this example, the client is only 
interested in the last part of the movie.

          C-&gt;W: GET /twister.sdp HTTP/1.1
                Host: www.example.com
                Accept: application/sdp
          W-&gt;C: HTTP/1.0 200 OK
                Content-Type: application/sdp
                v=0
                o=- 2890844526 2890842807 IN IP4 192.16.24.202
                s=RTSP Session
                m=audio 0 RTP/AVP 0
                a=control:rtsp://audio.example.com/twister/audio.en
                m=video 0 RTP/AVP 31
                a=control:rtsp://video.example.com/twister/video
          C-&gt;A: SETUP rtsp://audio.example.com/twister/audio.en RTSP/1.0
                CSeq: 1
                Transport: RTP/AVP/UDP;unicast;client_port=3056-3057
          A-&gt;C: RTSP/1.0 200 OK
                CSeq: 1
                Session: 12345678
                Transport: RTP/AVP/UDP;unicast;client_port=3056-3057;
                server_port=5000-5001
          C-&gt;V: SETUP rtsp://video.example.com/twister/video RTSP/1.0
                CSeq: 1
                Transport: RTP/AVP/UDP;unicast;client_port=3058-3059
          V-&gt;C: RTSP/1.0 200 OK
                CSeq: 1
                Session: 23456789
                Transport: RTP/AVP/UDP;unicast;client_port=3058-3059;
                server_port=5002-5003
          C-&gt;V: PLAY rtsp://video.example.com/twister/video RTSP/1.0
                CSeq: 2
                Session: 23456789
                Range: smpte=0:10:00-
          V-&gt;C: RTSP/1.0 200 OK
                CSeq: 2
                Session: 23456789
                Range: smpte=0:10:00-0:20:00
                RTP-Info: url=rtsp://video.example.com/twister/video;
                seq=12312232;rtptime=78712811
          C-&gt;A: PLAY rtsp://audio.example.com/twister/audio.en RTSP/1.0
                CSeq: 2
                Session: 12345678
                Range: smpte=0:10:00-
                A-&gt;C: RTSP/1.0 200 OK
                CSeq: 2
                Session: 12345678
                Range: smpte=0:10:00-0:20:00
                RTP-Info: url=rtsp://audio.example.com/twister/audio.en;
                seq=876655;rtptime=1032181
          C-&gt;A: TEARDOWN rtsp://audio.example.com/twister/audio.en RTSP/1.0
                CSeq: 3
                Session: 12345678
          A-&gt;C: RTSP/1.0 200 OK
                CSeq: 3
          C-&gt;V: TEARDOWN rtsp://video.example.com/twister/video RTSP/1.0
                CSeq: 3
                Session: 23456789
          V-&gt;C: RTSP/1.0 200 OK
                CSeq: 3

Even though the audio and video track are on two different servers, and may start 
at slightly different times and maydrift with respect to each other, the client can 
synchronize the two using standard RTP methods, in particular the time scale 
contained in the RTCP sender reports.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Streaming of a Container file</b>

For purposes of this example, a container file is a storage entity in which multiple 
continuous media types pertaining to the same end-user presentation are present. 
In effect, the container file represents a RTSP presentation, with each of its 
components being RTSP streams. Container files are a widely used means to store 
such presentations. While the components are transported as independent streams, 
it is desirable to maintain a common context for those streams at the server end.

This enables the server to keep a single storage handle open easily. It also allows 
treating all the streams equally in case of any prioritization of streams by the 
server. It is also possible that the presentation author may wish to prevent selective 
retrieval of the streams by the client in order to preserve the artistic effect of the 
combined mediapresentation. Similarly, in such a tightly bound presentation, it is 
desirable to be able to control all the streams via a single control message using an 
aggregate URL. The following is an example of using a single RTSP session to control 
multiple streams. It also illustrates the use of aggregate URLs.

Client C requests a presentation from media server M. The movie is stored in a 
container file. The client has obtained a RTSP URL to the container file.

          C-&gt;M: DESCRIBE rtsp://foo/twister RTSP/1.0
                CSeq: 1
          M-&gt;C: RTSP/1.0 200 OK
                CSeq: 1
                Content-Type: application/sdp
                Content-Length: 164
                v=0
                o=- 2890844256 2890842807 IN IP4 172.16.2.93
                s=RTSP Session
                i=An Example of RTSP Session Usage
                a=control:rtsp://foo/twister
                t=0 0
                m=audio 0 RTP/AVP 0
                a=control:rtsp://foo/twister/audio
                m=video 0 RTP/AVP 26
                a=control:rtsp://foo/twister/video
          C-&gt;M: SETUP rtsp://foo/twister/audio RTSP/1.0
                CSeq: 2
                Transport: RTP/AVP;unicast;client_port=8000-8001
          M-&gt;C: RTSP/1.0 200 OK
                CSeq: 2
                Transport: RTP/AVP;unicast;client_port=8000-8001;
                server_port=9000-9001
                Session: 12345678
          C-&gt;M: SETUP rtsp://foo/twister/video RTSP/1.0
                CSeq: 3
                Transport: RTP/AVP;unicast;client_port=8002-8003
                Session: 12345678
          M-&gt;C: RTSP/1.0 200 OK
                CSeq: 3
                Transport: RTP/AVP;unicast;client_port=8002-8003;
                server_port=9004-9005
                Session: 12345678
          C-&gt;M: PLAY rtsp://foo/twister RTSP/1.0
                CSeq: 4
                Range: npt=0-
                Session: 12345678
          M-&gt;C: RTSP/1.0 200 OK
                CSeq: 4
                Session: 12345678
                RTP-Info: url=rtsp://foo/twister/video;
                seq=9810092;rtptime=3450012
          C-&gt;M: PAUSE rtsp://foo/twister/video RTSP/1.0
                CSeq: 5
                Session: 12345678
          M-&gt;C: RTSP/1.0 460 Only aggregate operation allowed
                CSeq: 5
          C-&gt;M: PAUSE rtsp://foo/twister RTSP/1.0
                CSeq: 6
                Session: 12345678
          M-&gt;C: RTSP/1.0 200 OK
                CSeq: 6
                Session: 12345678
          C-&gt;M: SETUP rtsp://foo/twister RTSP/1.0
                CSeq: 7
                Transport: RTP/AVP;unicast;client_port=10000
          M-&gt;C: RTSP/1.0 459 Aggregate operation not allowed
                CSeq: 7

In the first instance of failure, the client tries to pause one stream (in this case 
video) of the presentation.This is disallowed for that presentation by the server. 
In the second instance, the aggregate URL may not be used for SETUP and one control 
message is required per stream to set up transport parameters. This keeps the syntax 
of the Transport header simple and allows easy parsing of transport information by 
firewalls.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: Single Stream Container Files</b>

Some RTSP servers may treat all files as though they are "container files", yet 
other servers may not supportsuch a concept. Because of this, clients SHOULD 
use the rules set forth in the session description for request URLs, rather than 
assuming that a consistant URL may always be used throughout. Here¡¯s an 
example of how a multi-stream server might expect a single-stream file to be 
served:

          C-&gt;S DESCRIBE rtsp://foo.com/test.wav RTSP/1.0
               Accept: application/x-rtsp-mh, application/sdp
               CSeq: 1
          S-&gt;C RTSP/1.0 200 OK
               CSeq: 1
               Content-base: rtsp://foo.com/test.wav/
               Content-type: application/sdp
               Content-length: 48
               v=0
               o=- 872653257 872653257 IN IP4 172.16.2.187
               s=mu-law wave file
               i=audio test
               t=0 0
               m=audio 0 RTP/AVP 0
               a=control:streamid=0
          C-&gt;S SETUP rtsp://foo.com/test.wav/streamid=0 RTSP/1.0
               Transport: RTP/AVP/UDP;unicast;
               client_port=6970-6971;mode=play
               CSeq: 2
          S-&gt;C RTSP/1.0 200 OK
               Transport: RTP/AVP/UDP;unicast;client_port=6970-6971;
               server_port=6970-6971;mode=play
               CSeq: 2
               Session: 2034820394
          C-&gt;S PLAY rtsp://foo.com/test.wav RTSP/1.0
               CSeq: 3
               Session: 2034820394
          S-&gt;C RTSP/1.0 200 OK
               CSeq: 3
               Session: 2034820394
               RTP-Info: url=rtsp://foo.com/test.wav/streamid=0;
               seq=981888;rtptime=3781123

Note the different URL in the SETUP command, and then the switch back to the 
aggregate URL in the PLAY command. This makes complete sense when there 
are multiple streams with aggregate control, but is less than intuitive in the 
special case where the number of streams is one.

In this special case, it is recommended that servers be forgiving of 
implementations that send:

          C-&gt;S PLAY rtsp://foo.com/test.wav/streamid=0 RTSP/1.0
               CSeq: 3
               In the worst case, servers should send back:
          S-&gt;C RTSP/1.0 460 Only aggregate operation allowed
               CSeq: 3

One would also hope that server implementations are also forgiving of the following:

          C-&gt;S SETUP rtsp://foo.com/test.wav RTSP/1.0
               Transport: rtp/avp/udp;client_port=6970-6971;mode=play
               CSeq: 2

Since there is only a single stream in this file, it's not ambiguous what this means.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 4" tabindex="0"><b>Example 4: Live Media Presentation Using Multicast</b>

The media server M chooses the multicast address and port. Here, we assume that the web 
server only contains a pointer to the full description, while the media server M 
maintains the full description.

          C-&gt;W: GET /concert.sdp HTTP/1.1
                Host: www.example.com
          W-&gt;C: HTTP/1.1 200 OK
                Content-Type: application/x-rtsl
                
                

          C-&gt;M: DESCRIBE rtsp://live.example.com/concert/audio RTSP/1.0
                CSeq: 1
                M-&gt;C: RTSP/1.0 200 OK
                CSeq: 1
                Content-Type: application/sdp
                Content-Length: 44
                v=0
                o=- 2890844526 2890842807 IN IP4 192.16.24.202
                s=RTSP Session
                m=audio 3456 RTP/AVP 0
                a=control:rtsp://live.example.com/concert/audio
                c=IN IP4 224.2.0.1/16
          C-&gt;M: SETUP rtsp://live.example.com/concert/audio RTSP/1.0
                CSeq: 2
                Transport: RTP/AVP;multicast
          M-&gt;C: RTSP/1.0 200 OK
                CSeq: 2
                Transport: RTP/AVP;multicast;destination=224.2.0.1;
                port=3456-3457;ttl=16
                Session: 0456804596
          C-&gt;M: PLAY rtsp://live.example.com/concert/audio RTSP/1.0
                CSeq: 3
                Session: 0456804596
          M-&gt;C: RTSP/1.0 200 OK
                CSeq: 3
                Session: 0456804596</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 5" tabindex="0"><b>Example 5: Playing media into an existing session</b>

A conference participant C wants to have the media server M play back a demo tape 
into an existing conference. C indicates to the media server that the network 
addresses and encryption keys are already given by the conference, so they should 
not be chosen by the server. The example omits the simple ACK responses.

          C-&gt;M: DESCRIBE rtsp://server.example.com/demo/548/sound RTSP/1.0
                CSeq: 1
                Accept: application/sdp
          M-&gt;C: RTSP/1.0 200 1 OK
                Content-type: application/sdp
                Content-Length: 44
                v=0
                o=- 2890844526 2890842807 IN IP4 192.16.24.202
                s=RTSP Session
                i=See above
                t=0 0
                m=audio 0 RTP/AVP 0
          C-&gt;M: SETUP rtsp://server.example.com/demo/548/sound RTSP/1.0
                CSeq: 2
                Transport: RTP/AVP;multicast;destination=225.219.201.15;
                port=7000-7001;ttl=127
                Conference: 199702170042.SAA08642@obiwan.arl.wustl.edu%20Starr
          M-&gt;C: RTSP/1.0 200 OK
                CSeq: 2
                Transport: RTP/AVP;multicast;destination=225.219.201.15;
                port=7000-7001;ttl=127
                Session: 91389234234
                Conference: 199702170042.SAA08642@obiwan.arl.wustl.edu%20Starr
          C-&gt;M: PLAY rtsp://server.example.com/demo/548/sound RTSP/1.0
                CSeq: 3
                Session: 91389234234
          M-&gt;C: RTSP/1.0 200 OK
                CSeq: 3</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 6" tabindex="0"><b>Example 6: Recording</b>

The conference participant client C asks the media server M to record the audio and 
video portions of a meeting. The client uses the ANNOUNCE method to provide 
meta-information about the recorded session to the server.

          C-&gt;M: ANNOUNCE rtsp://server.example.com/meeting RTSP/1.0
                CSeq: 90
                Content-Type: application/sdp
                Content-Length: 121
                v=0
                o=camera1 3080117314 3080118787 IN IP4 195.27.192.36
                s=IETF Meeting, Munich ¨C 1
                i=The thirty-ninth IETF meeting will be held in Munich, Germany
                u=http://www.ietf.org/meetings/Munich.html
                e=IETF Channel 1 
                p=IETF Channel 1 +49-172-2312 451
                c=IN IP4 224.0.1.11/127
                t=3080271600 3080703600
                a=tool:sdr v2.4a6
                a=type:test
                m=audio 21010 RTP/AVP 5
                c=IN IP4 224.0.1.11/127
                a=ptime:40
                m=video 61010 RTP/AVP 31
                c=IN IP4 224.0.1.12/127
          M-&gt;C: RTSP/1.0 200 OK
                CSeq: 90
          C-&gt;M: SETUP rtsp://server.example.com/meeting/audiotrack RTSP/1.0
                CSeq: 91
                Transport: RTP/AVP;multicast;destination=224.0.1.11;
                port=21010-21011;mode=record;ttl=127
          M-&gt;C: RTSP/1.0 200 OK
                CSeq: 91
                Session: 50887676
                Transport: RTP/AVP;multicast;destination=224.0.1.11;
                port=21010-21011;mode=record;ttl=127
          C-&gt;M: SETUP rtsp://server.example.com/meeting/videotrack RTSP/1.0
                CSeq: 92
                Session: 50887676
                Transport: RTP/AVP;multicast;destination=224.0.1.12;
                port=61010-61011;mode=record;ttl=127
          M-&gt;C: RTSP/1.0 200 OK
                CSeq: 92
                Transport: RTP/AVP;multicast;destination=224.0.1.12;
                port=61010-61011;mode=record;ttl=127
          C-&gt;M: RECORD rtsp://server.example.com/meeting RTSP/1.0
                CSeq: 93
                Session: 50887676
                Range: clock=19961110T1925-19961110T2015
          M-&gt;C: RTSP/1.0 200 OK
                CSeq: 93</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>RTSP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>CRLF</b><br />&lt;character&gt; /ker'l*f/, sometimes /kru'l*f/ or /C-R-L-F/ A carriage return (CR, ASCII 13) followed by a line feed (LF, ASCII 10).  Under Unix influence this usage has become less common because Unix uses just line feed as its line terminator.
<br />A carriage return (CR, ASCII 0001101) followed by a line feed (LF, ASCII 0001010). More loosely, whatever it takes to get you from the end of one line of text to the beginning of the next line.<br /><br /><b>HTTP/1.1</b><br />The latest version of HTTP. The goal of HTTP/1.1 is to support the wide diversity of configurations already deployed while introducing protocol constructs that meet the needs of those who build web applications that require high reliability and, failing that, at least reliable indications of failure.<br /><br /><b>ISO</b><br />ISO (International Organization for Standardization) is a network of the national standards institutes of 146 countries, on the basis of one member per country, with a Central Secretariat in Geneva, Switzerland, that coordinates the system. ISO has defined a number of important computer standards, the most significant of which is perhaps OSI (Open Systems Interconnection), a standardized architecture for designing networks.<br /><br /><b>Multicast</b><br />Multicast is designed to transmit a single message to a select group of recipients. A simple example of multicasting is sending an e-mail message to a mailing list. Teleconferencing and videoconferencing also use multicasting, but require more robust protocols and networks.<br /><br /><b>RTP</b><br />RTP (Real-Time Transport Protocol) is an Internet protocol for transmitting real-time data such as audio and video. RTP itself does not guarantee real-time delivery of data, but it does provide mechanisms for the sending and receiving applications to support streaming data. Typically, RTP runs on top of the UDP protocol, although the specification is general enough to support other transport protocols.<br /><br /><b>Time-synchronization</b>(without)<br /><br /><br /><b>UTF-8</b><br />UTF(Unicode Transformation Format) preserving the full US-ASCII range, providing compatibility with file systems, parsers and other software that rely on US-ASCII values but are transparent to other values. 
<br />
<br />UTF-8 encodes UCS-2 or UCS-4 characters as a varying number of octets, where the number of octets, and the value of each, depend on the integer value assigned to the character in ISO/IEC 10646.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2326.html">RFC 2326</a>] Real Time Streaming Protocol (RTSP)
                		  </div>
		  
</section>

