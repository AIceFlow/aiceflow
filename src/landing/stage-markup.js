/*
 * SVG-Markup der Bühne mit {{…}}-Platzhaltern. Übernommen aus dem Canvas
 * „Governance Gateway – Redesign“ (Stage.dc.html); ergänzt um {{k}}/{{ka}} für die
 * mobile Beschriftungsgröße und die Klasse st-notes. Die Werte berechnet scene() in stage.js.
 */
export const MARKUP = `<defs>
<linearGradient id="stg-f0" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color: #FFFFFF"></stop><stop offset="1" style="stop-color: #E6EAF2"></stop></linearGradient>
<linearGradient id="stg-t0" x1="0" y1="1" x2="1" y2="0"><stop offset="0" style="stop-color: #FFFFFF"></stop><stop offset="1" style="stop-color: #F0F3F9"></stop></linearGradient>
<linearGradient id="stg-s0" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color: #DCE1EB"></stop><stop offset="1" style="stop-color: #C4CBDA"></stop></linearGradient>
<linearGradient id="stg-f1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color: #F5F8FF"></stop><stop offset="1" style="stop-color: #DCE4FA"></stop></linearGradient>
<linearGradient id="stg-t1" x1="0" y1="1" x2="1" y2="0"><stop offset="0" style="stop-color: #FDFDFF"></stop><stop offset="1" style="stop-color: #ECF0FD"></stop></linearGradient>
<linearGradient id="stg-s1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color: #D0DAF4"></stop><stop offset="1" style="stop-color: #B6C4EC"></stop></linearGradient>
<linearGradient id="stg-f2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color: #EDF2FF"></stop><stop offset="1" style="stop-color: #D0DBFA"></stop></linearGradient>
<linearGradient id="stg-t2" x1="0" y1="1" x2="1" y2="0"><stop offset="0" style="stop-color: #FAFBFF"></stop><stop offset="1" style="stop-color: #E6ECFC"></stop></linearGradient>
<linearGradient id="stg-s2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color: #C3D0F4"></stop><stop offset="1" style="stop-color: #A8BAEE"></stop></linearGradient>
<linearGradient id="stg-f3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color: #E6ECFF"></stop><stop offset="1" style="stop-color: #C6D3F8"></stop></linearGradient>
<linearGradient id="stg-t3" x1="0" y1="1" x2="1" y2="0"><stop offset="0" style="stop-color: #F7F9FF"></stop><stop offset="1" style="stop-color: #DFE7FC"></stop></linearGradient>
<linearGradient id="stg-s3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color: #B8C7F1"></stop><stop offset="1" style="stop-color: #9AB0EA"></stop></linearGradient>
<linearGradient id="stg-gf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color: #FFFFFF"></stop><stop offset="1" style="stop-color: #E2E7F0"></stop></linearGradient>
<linearGradient id="stg-gt" x1="0" y1="1" x2="1" y2="0"><stop offset="0" style="stop-color: #FFFFFF"></stop><stop offset="1" style="stop-color: #EFF2F8"></stop></linearGradient>
<linearGradient id="stg-gs" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color: #D9DEE9"></stop><stop offset="1" style="stop-color: #C0C8D7"></stop></linearGradient>
<linearGradient id="stg-strip" x1="0" y1="0" x2="1" y2="0"><stop offset="0" style="stop-color: #5C86FF"></stop><stop offset="1" style="stop-color: #2F5BEA"></stop></linearGradient>
<linearGradient id="stg-sf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color: #2E3349"></stop><stop offset="1" style="stop-color: #171B29"></stop></linearGradient>
<linearGradient id="stg-st" x1="0" y1="1" x2="1" y2="0"><stop offset="0" style="stop-color: #3F4560"></stop><stop offset="1" style="stop-color: #2B3047"></stop></linearGradient>
<linearGradient id="stg-ss" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color: #1B1F2F"></stop><stop offset="1" style="stop-color: #0C0F18"></stop></linearGradient>
<linearGradient id="stg-af" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color: #FFFFFF"></stop><stop offset="1" style="stop-color: #E4E8F0"></stop></linearGradient>
<linearGradient id="stg-as" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color: #D7DCE6"></stop><stop offset="1" style="stop-color: #B8C0D0"></stop></linearGradient>
<linearGradient id="stg-av" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color: #2C3249"></stop><stop offset="1" style="stop-color: #0A0D19"></stop></linearGradient>
<linearGradient id="stg-amf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color: #FFD68F"></stop><stop offset="1" style="stop-color: #FFB547"></stop></linearGradient>
<linearGradient id="stg-amt" x1="0" y1="1" x2="1" y2="0"><stop offset="0" style="stop-color: #FFF8EC"></stop><stop offset="1" style="stop-color: #FFE9C7"></stop></linearGradient>
<radialGradient id="stg-tip" cx="0.35" cy="0.35" r="0.75"><stop offset="0" style="stop-color: #C9D8FF"></stop><stop offset="1" style="stop-color: #4876FF"></stop></radialGradient>
<radialGradient id="stg-tipOwn" cx="0.35" cy="0.35" r="0.75"><stop offset="0" style="stop-color: #CBFBF5"></stop><stop offset="1" style="stop-color: #2FD3C4"></stop></radialGradient>
<radialGradient id="stg-halo" cx="0.5" cy="0.5" r="0.5"><stop offset="0" style="stop-color: #4876FF; stop-opacity: 0.22"></stop><stop offset="1" style="stop-color: #4876FF; stop-opacity: 0"></stop></radialGradient>
<filter id="stg-sh" filterUnits="userSpaceOnUse" x="-1500" y="-1000" width="4400" height="2800"><feGaussianBlur stdDeviation="9"></feGaussianBlur></filter>
<filter id="stg-gl" filterUnits="userSpaceOnUse" x="-1500" y="-1000" width="4400" height="2800"><feGaussianBlur stdDeviation="10"></feGaussianBlur></filter>
<filter id="stg-gs" filterUnits="userSpaceOnUse" x="-1500" y="-1000" width="4400" height="2800"><feGaussianBlur stdDeviation="3"></feGaussianBlur></filter>
<filter id="stg-ds" filterUnits="userSpaceOnUse" x="-1500" y="-1000" width="4400" height="2800"><feDropShadow dx="0" dy="5" stdDeviation="7" style="flood-color: #0E1120; flood-opacity: 0.16"></feDropShadow></filter>
</defs>

<g transform="{{fin}}">

<path d="{{ghost.d}}" style="fill: #DCE1EA; fill-opacity: 0.6; stroke: none; opacity: {{ghost.op}}"></path>

<g style="opacity: {{sy0.op}}">
<ellipse cx="{{sy0.gx}}" cy="{{sy0.gy}}" rx="86" ry="12" style="fill: #0E1120; opacity: 0.2; filter: url(#stg-sh)"></ellipse>
<polygon points="{{sy0.side}}" style="fill: url(#stg-ss)"></polygon>
<polygon points="{{sy0.top}}" style="fill: url(#stg-st)"></polygon>
<polygon points="{{sy0.top}}" style="fill: #4876FF; opacity: {{sy0.lit}}"></polygon>
<g transform="translate({{sy0.fx}} {{sy0.fy}})">
<rect x="0" y="0" width="119" height="52.5" style="fill: url(#stg-sf)"></rect>
<path d="M0 0.5H119" style="fill: none; stroke: #FFFFFF; stroke-width: 1; opacity: 0.16"></path>
<rect x="6" y="6" width="107" height="40.5" rx="7" style="fill: #0E1120; stroke: #FFFFFF; stroke-width: 1; stroke-opacity: 0.07"></rect>
<path d="M14 17H34V31H14ZM14 17L24 25L34 17" style="fill: none; stroke: #FFFFFF; stroke-width: 1.4; stroke-linejoin: round; opacity: 0.92"></path>
<text x="42" y="23" style="font-family: Nunito, sans-serif; font-size: 13px; font-weight: 800; fill: #FFFFFF">E-Mail</text>
<text x="42" y="37" style="font-family: Inter, sans-serif; font-size: 10px; font-weight: 500; fill: #A3ABBF">Posteingang</text>
<circle cx="101" cy="15" r="7" style="fill: #4876FF; opacity: {{sy0.conn}}; filter: url(#stg-gs)"></circle>
<circle cx="101" cy="15" r="3.2" style="fill: {{sy0.led}}"></circle>
</g>
<polygon points="{{sy0.sock}}" style="fill: #4876FF; opacity: {{sy0.conn}}; filter: url(#stg-gs)"></polygon>
<polygon points="{{sy0.sock}}" style="fill: #090C15; stroke: #6E95FF; stroke-width: 1; stroke-opacity: {{sy0.conn}}"></polygon>
</g>

<g style="opacity: {{sy1.op}}">
<ellipse cx="{{sy1.gx}}" cy="{{sy1.gy}}" rx="86" ry="12" style="fill: #0E1120; opacity: 0.2; filter: url(#stg-sh)"></ellipse>
<polygon points="{{sy1.side}}" style="fill: url(#stg-ss)"></polygon>
<polygon points="{{sy1.top}}" style="fill: url(#stg-st)"></polygon>
<polygon points="{{sy1.top}}" style="fill: #4876FF; opacity: {{sy1.lit}}"></polygon>
<g transform="translate({{sy1.fx}} {{sy1.fy}})">
<rect x="0" y="0" width="119" height="52.5" style="fill: url(#stg-sf)"></rect>
<path d="M0 0.5H119" style="fill: none; stroke: #FFFFFF; stroke-width: 1; opacity: 0.16"></path>
<rect x="6" y="6" width="107" height="40.5" rx="7" style="fill: #0E1120; stroke: #FFFFFF; stroke-width: 1; stroke-opacity: 0.07"></rect>
<path d="M14 16H34V32H14ZM14 21.5H34M14 27H34M20.5 16V32" style="fill: none; stroke: #FFFFFF; stroke-width: 1.4; stroke-linejoin: round; opacity: 0.92"></path>
<text x="42" y="23" style="font-family: Nunito, sans-serif; font-size: 13px; font-weight: 800; fill: #FFFFFF">ERP</text>
<text x="42" y="37" style="font-family: Inter, sans-serif; font-size: 10px; font-weight: 500; fill: #A3ABBF">Buchung</text>
<circle cx="101" cy="15" r="7" style="fill: #4876FF; opacity: {{sy1.conn}}; filter: url(#stg-gs)"></circle>
<circle cx="101" cy="15" r="3.2" style="fill: {{sy1.led}}"></circle>
</g>
<polygon points="{{sy1.sock}}" style="fill: #4876FF; opacity: {{sy1.conn}}; filter: url(#stg-gs)"></polygon>
<polygon points="{{sy1.sock}}" style="fill: #090C15; stroke: #6E95FF; stroke-width: 1; stroke-opacity: {{sy1.conn}}"></polygon>
</g>

<g style="opacity: {{sy2.op}}">
<ellipse cx="{{sy2.gx}}" cy="{{sy2.gy}}" rx="86" ry="12" style="fill: #0E1120; opacity: 0.2; filter: url(#stg-sh)"></ellipse>
<polygon points="{{sy2.side}}" style="fill: url(#stg-ss)"></polygon>
<polygon points="{{sy2.top}}" style="fill: url(#stg-st)"></polygon>
<polygon points="{{sy2.top}}" style="fill: #4876FF; opacity: {{sy2.lit}}"></polygon>
<g transform="translate({{sy2.fx}} {{sy2.fy}})">
<rect x="0" y="0" width="119" height="52.5" style="fill: url(#stg-sf)"></rect>
<path d="M0 0.5H119" style="fill: none; stroke: #FFFFFF; stroke-width: 1; opacity: 0.16"></path>
<rect x="6" y="6" width="107" height="40.5" rx="7" style="fill: #0E1120; stroke: #FFFFFF; stroke-width: 1; stroke-opacity: 0.07"></rect>
<path d="M15 15H25V17M15 15V28H17M18 18H28L32 22V33H18ZM28 18V22H32" style="fill: none; stroke: #FFFFFF; stroke-width: 1.4; stroke-linejoin: round; opacity: 0.92"></path>
<text x="42" y="23" style="font-family: Nunito, sans-serif; font-size: 13px; font-weight: 800; fill: #FFFFFF">DMS</text>
<text x="42" y="37" style="font-family: Inter, sans-serif; font-size: 10px; font-weight: 500; fill: #A3ABBF">Dokumente</text>
<circle cx="101" cy="15" r="7" style="fill: #4876FF; opacity: {{sy2.conn}}; filter: url(#stg-gs)"></circle>
<circle cx="101" cy="15" r="3.2" style="fill: {{sy2.led}}"></circle>
</g>
<polygon points="{{sy2.sock}}" style="fill: #4876FF; opacity: {{sy2.conn}}; filter: url(#stg-gs)"></polygon>
<polygon points="{{sy2.sock}}" style="fill: #090C15; stroke: #6E95FF; stroke-width: 1; stroke-opacity: {{sy2.conn}}"></polygon>
</g>

<g style="opacity: {{slot.op}}">
<polygon points="{{slot.side}}" style="fill: #FFFFFF; fill-opacity: 0.35; stroke: #C6CDDB; stroke-width: 1; stroke-linejoin: round"></polygon>
<polygon points="{{slot.top}}" style="fill: #FFFFFF; fill-opacity: 0.6; stroke: #C6CDDB; stroke-width: 1; stroke-linejoin: round"></polygon>
<g transform="translate({{slot.fx}} {{slot.fy}})">
<rect x="0" y="0" width="119" height="52.5" style="fill: #FFFFFF; fill-opacity: 0.75; stroke: #C6CDDB; stroke-width: 1"></rect>
<circle cx="24" cy="24" r="10" style="fill: #FFFFFF; stroke: #B5BDCD; stroke-width: 1.25"></circle>
<path d="M24 19.5V28.5M19.5 24H28.5" style="fill: none; stroke: #5F6577; stroke-width: 1.5; stroke-linecap: round"></path>
<text x="42" y="23" style="font-family: Nunito, sans-serif; font-size: 12.5px; font-weight: 800; fill: #3A4058">Eigene Systeme</text>
<text x="42" y="37" style="font-family: Inter, sans-serif; font-size: 10px; font-weight: 500; fill: #5F6577">anschließbar</text>
</g>
</g>

<g style="opacity: {{xs.op}}">
<g transform="translate(659 748)">
<rect x="0" y="0" width="56" height="22" rx="11" style="fill: url(#stg-sf)"></rect>
<circle cx="12" cy="11" r="3" style="fill: {{xs.led}}"></circle>
<text x="21" y="14.7" style="font-family: Inter, sans-serif; font-size: 10.5px; font-weight: 600; fill: #FFFFFF">CRM</text>
</g>
<g transform="translate(723 748)">
<rect x="0" y="0" width="94" height="22" rx="11" style="fill: url(#stg-sf)"></rect>
<circle cx="12" cy="11" r="3" style="fill: {{xs.led}}"></circle>
<text x="21" y="14.7" style="font-family: Inter, sans-serif; font-size: 10.5px; font-weight: 600; fill: #FFFFFF">Buchhaltung</text>
</g>
<g transform="translate(825 748)">
<rect x="0" y="0" width="88" height="22" rx="11" style="fill: url(#stg-sf)"></rect>
<circle cx="12" cy="11" r="3" style="fill: {{xs.led}}"></circle>
<text x="21" y="14.7" style="font-family: Inter, sans-serif; font-size: 10.5px; font-weight: 600; fill: #FFFFFF">SharePoint</text>
</g>
<g transform="translate(921 748)">
<rect x="0" y="0" width="98" height="22" rx="11" style="fill: url(#stg-sf)"></rect>
<circle cx="12" cy="11" r="3" style="fill: {{xs.led}}"></circle>
<text x="21" y="14.7" style="font-family: Inter, sans-serif; font-size: 10.5px; font-weight: 600; fill: #FFFFFF">Ticketsystem</text>
</g>
<g transform="translate(1027 748)">
<rect x="0" y="0" width="86" height="22" rx="11" style="fill: url(#stg-sf)"></rect>
<circle cx="12" cy="11" r="3" style="fill: {{xs.led}}"></circle>
<text x="21" y="14.7" style="font-family: Inter, sans-serif; font-size: 10.5px; font-weight: 600; fill: #FFFFFF">Datenbank</text>
</g>
</g>

<g style="fill: none; stroke: #FF6A2B; stroke-linecap: round; stroke-width: 5; opacity: 0.35; filter: url(#stg-gs)">
<path d="{{ch0.d}}" pathLength="1" style="stroke-dasharray: {{ch0.da}}; stroke-dashoffset: {{ch0.dof}}; opacity: {{ch0.op}}"></path>
<path d="{{ch1.d}}" pathLength="1" style="stroke-dasharray: {{ch1.da}}; stroke-dashoffset: {{ch1.dof}}; opacity: {{ch1.op}}"></path>
<path d="{{ch2.d}}" pathLength="1" style="stroke-dasharray: {{ch2.da}}; stroke-dashoffset: {{ch2.dof}}; opacity: {{ch2.op}}"></path>
<path d="{{ch3.d}}" pathLength="1" style="stroke-dasharray: {{ch3.da}}; stroke-dashoffset: {{ch3.dof}}; opacity: {{ch3.op}}"></path>
<path d="{{ch4.d}}" pathLength="1" style="stroke-dasharray: {{ch4.da}}; stroke-dashoffset: {{ch4.dof}}; opacity: {{ch4.op}}"></path>
<path d="{{ch5.d}}" pathLength="1" style="stroke-dasharray: {{ch5.da}}; stroke-dashoffset: {{ch5.dof}}; opacity: {{ch5.op}}"></path>
<path d="{{ch6.d}}" pathLength="1" style="stroke-dasharray: {{ch6.da}}; stroke-dashoffset: {{ch6.dof}}; opacity: {{ch6.op}}"></path>
<path d="{{ch7.d}}" pathLength="1" style="stroke-dasharray: {{ch7.da}}; stroke-dashoffset: {{ch7.dof}}; opacity: {{ch7.op}}"></path>
<path d="{{ch8.d}}" pathLength="1" style="stroke-dasharray: {{ch8.da}}; stroke-dashoffset: {{ch8.dof}}; opacity: {{ch8.op}}"></path>
</g>
<g style="fill: none; stroke: #FF6A2B; stroke-linecap: round; stroke-width: 1.75">
<path d="{{ch0.d}}" pathLength="1" style="stroke-dasharray: {{ch0.da}}; stroke-dashoffset: {{ch0.dof}}; opacity: {{ch0.op}}"></path>
<path d="{{ch1.d}}" pathLength="1" style="stroke-dasharray: {{ch1.da}}; stroke-dashoffset: {{ch1.dof}}; opacity: {{ch1.op}}"></path>
<path d="{{ch2.d}}" pathLength="1" style="stroke-dasharray: {{ch2.da}}; stroke-dashoffset: {{ch2.dof}}; opacity: {{ch2.op}}"></path>
<path d="{{ch3.d}}" pathLength="1" style="stroke-dasharray: {{ch3.da}}; stroke-dashoffset: {{ch3.dof}}; opacity: {{ch3.op}}"></path>
<path d="{{ch4.d}}" pathLength="1" style="stroke-dasharray: {{ch4.da}}; stroke-dashoffset: {{ch4.dof}}; opacity: {{ch4.op}}"></path>
<path d="{{ch5.d}}" pathLength="1" style="stroke-dasharray: {{ch5.da}}; stroke-dashoffset: {{ch5.dof}}; opacity: {{ch5.op}}"></path>
<path d="{{ch6.d}}" pathLength="1" style="stroke-dasharray: {{ch6.da}}; stroke-dashoffset: {{ch6.dof}}; opacity: {{ch6.op}}"></path>
<path d="{{ch7.d}}" pathLength="1" style="stroke-dasharray: {{ch7.da}}; stroke-dashoffset: {{ch7.dof}}; opacity: {{ch7.op}}"></path>
<path d="{{ch8.d}}" pathLength="1" style="stroke-dasharray: {{ch8.da}}; stroke-dashoffset: {{ch8.dof}}; opacity: {{ch8.op}}"></path>
</g>

<path d="{{b0.ord}}" style="fill: none; stroke: #4876FF; stroke-width: 2.25; stroke-linecap: round; opacity: {{ordBase}}"></path>
<path d="{{b0.ord}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1.1; stroke-linecap: round; stroke-dasharray: 10 80; opacity: {{ordOp}}"><animate attributeName="stroke-dashoffset" values="0;-90" dur="2s" repeatCount="indefinite"></animate></path>
<path d="{{b0.own}}" style="fill: none; stroke: #16A89B; stroke-width: 2.25; stroke-linecap: round; opacity: 0.95"></path>
<path d="{{b0.own}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1.1; stroke-linecap: round; stroke-dasharray: 10 80"><animate attributeName="stroke-dashoffset" values="0;-90" dur="2s" repeatCount="indefinite"></animate></path>
<path d="{{b0.port}}" style="fill: #4876FF; opacity: {{ordOp}}"></path>
<path d="{{b0.oport}}" style="fill: #16A89B"></path>
<path d="{{b0.chat}}" style="fill: none; stroke: #4876FF; stroke-width: 2.25; stroke-linecap: round; opacity: 0.95"></path>
<path d="{{b0.chat}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1.1; stroke-linecap: round; stroke-dasharray: 10 80"><animate attributeName="stroke-dashoffset" values="0;-90" dur="2s" repeatCount="indefinite"></animate></path>
<path d="{{b0.cport}}" style="fill: #2F5BEA"></path>
<path d="{{b0.tr}}" style="fill: none; stroke: #4876FF; stroke-width: 8; stroke-linecap: round; opacity: {{trGlow}}; filter: url(#stg-gs)"></path>
<path d="{{b0.tr}}" style="fill: none; stroke: #2F5BEA; stroke-width: 2.75; stroke-linecap: round; opacity: {{trOp}}"></path>
<path d="{{b0.tr}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1.3; stroke-linecap: round; stroke-dasharray: 14 70; opacity: {{trOp}}"><animate attributeName="stroke-dashoffset" values="0;-84" dur="1.6s" repeatCount="indefinite"></animate></path>
<path d="{{b0.tport}}" style="fill: #2F5BEA; opacity: {{trOp}}"></path>

<polygon points="{{gw.guide}}" style="fill: #4876FF; fill-opacity: 0.06; stroke: #4876FF; stroke-width: 1.5; stroke-linejoin: round; opacity: {{gw.gOp}}"></polygon>

<g style="opacity: {{pl3.op}}">
<polygon points="{{pl3.shadow}}" style="fill: #1B2340; opacity: 0.12; filter: url(#stg-sh)"></polygon>
<polygon points="{{pl3.sil}}" style="fill: #4876FF; opacity: {{pl3.act}}; filter: url(#stg-gl)"></polygon>
<polygon points="{{pl3.side}}" style="fill: url(#stg-s3)"></polygon>
<polygon points="{{pl3.top}}" style="fill: url(#stg-t3)"></polygon>
<rect x="{{pl3.fx}}" y="{{pl3.fy}}" width="{{pl3.fw}}" height="21" style="fill: url(#stg-f3)"></rect>
<path d="{{pl3.hl}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1; opacity: 0.9"></path>
<path d="{{pl3.lo}}" style="fill: none; stroke: #0E1120; stroke-width: 1; opacity: 0.1"></path>
<polygon points="{{pl3.sil}}" style="fill: none; stroke: #1B2340; stroke-width: 1; stroke-opacity: 0.1; stroke-linejoin: round"></polygon>
<polygon points="{{pl3.sil}}" style="fill: none; stroke: #4876FF; stroke-width: 1.5; stroke-linejoin: round; opacity: {{pl3.flash}}"></polygon>
<g transform="translate({{pl3.tx}} {{pl3.ty}}) scale({{k}})" style="opacity: {{pl3.txtOp}}">
<rect x="0" y="-10.5" width="22" height="14" rx="7" style="fill: #0E1120; opacity: 0.08"></rect>
<text x="11" y="0" style="font-family: Inter, sans-serif; font-size: 9.5px; font-weight: 600; font-variant-numeric: tabular-nums; text-anchor: middle; fill: #0E1120">04</text>
<text x="30" y="0" style="font-family: Nunito, sans-serif; font-size: 12.5px; font-weight: 800; fill: #0E1120">Anbindung<tspan dx="8" style="font-family: Inter, sans-serif; font-size: 10px; font-weight: 500; fill: #5F6577">Connectors · MCP</tspan></text>
</g>
</g>

<path d="{{b1.ord}}" style="fill: none; stroke: #4876FF; stroke-width: 2.25; stroke-linecap: round; opacity: {{ordBase}}"></path>
<path d="{{b1.ord}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1.1; stroke-linecap: round; stroke-dasharray: 10 80; opacity: {{ordOp}}"><animate attributeName="stroke-dashoffset" values="0;-90" dur="2s" repeatCount="indefinite"></animate></path>
<path d="{{b1.own}}" style="fill: none; stroke: #16A89B; stroke-width: 2.25; stroke-linecap: round; opacity: 0.95"></path>
<path d="{{b1.own}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1.1; stroke-linecap: round; stroke-dasharray: 10 80"><animate attributeName="stroke-dashoffset" values="0;-90" dur="2s" repeatCount="indefinite"></animate></path>
<path d="{{b1.port}}" style="fill: #4876FF; opacity: {{ordOp}}"></path>
<path d="{{b1.oport}}" style="fill: #16A89B"></path>
<path d="{{b1.chat}}" style="fill: none; stroke: #4876FF; stroke-width: 2.25; stroke-linecap: round; opacity: 0.95"></path>
<path d="{{b1.chat}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1.1; stroke-linecap: round; stroke-dasharray: 10 80"><animate attributeName="stroke-dashoffset" values="0;-90" dur="2s" repeatCount="indefinite"></animate></path>
<path d="{{b1.cport}}" style="fill: #2F5BEA"></path>
<path d="{{b1.tr}}" style="fill: none; stroke: #4876FF; stroke-width: 8; stroke-linecap: round; opacity: {{trGlow}}; filter: url(#stg-gs)"></path>
<path d="{{b1.tr}}" style="fill: none; stroke: #2F5BEA; stroke-width: 2.75; stroke-linecap: round; opacity: {{trOp}}"></path>
<path d="{{b1.tr}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1.3; stroke-linecap: round; stroke-dasharray: 14 70; opacity: {{trOp}}"><animate attributeName="stroke-dashoffset" values="0;-84" dur="1.6s" repeatCount="indefinite"></animate></path>
<path d="{{b1.tport}}" style="fill: #2F5BEA; opacity: {{trOp}}"></path>

<g style="opacity: {{pl2.op}}">
<polygon points="{{pl2.shadow}}" style="fill: #1B2340; opacity: 0.12; filter: url(#stg-sh)"></polygon>
<g style="opacity: {{pl2.hold}}">
<polygon points="{{pl2.sil}}" style="fill: #FFB547; filter: url(#stg-gl)"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.8s" repeatCount="indefinite"></animate></polygon>
</g>
<polygon points="{{pl2.side}}" style="fill: url(#stg-s2)"></polygon>
<polygon points="{{pl2.top}}" style="fill: url(#stg-t2)"></polygon>
<rect x="{{pl2.fx}}" y="{{pl2.fy}}" width="{{pl2.fw}}" height="21" style="fill: url(#stg-f2)"></rect>
<g style="opacity: {{pl2.hold}}">
<polygon points="{{pl2.top}}" style="fill: url(#stg-amt)"></polygon>
<rect x="{{pl2.fx}}" y="{{pl2.fy}}" width="{{pl2.fw}}" height="21" style="fill: url(#stg-amf)"></rect>
</g>
<path d="{{pl2.hl}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1; opacity: 0.9"></path>
<path d="{{pl2.lo}}" style="fill: none; stroke: #0E1120; stroke-width: 1; opacity: 0.1"></path>
<polygon points="{{pl2.sil}}" style="fill: none; stroke: #1B2340; stroke-width: 1; stroke-opacity: 0.1; stroke-linejoin: round"></polygon>
<polygon points="{{pl2.sil}}" style="fill: none; stroke: #4876FF; stroke-width: 1.5; stroke-linejoin: round; opacity: {{pl2.flash}}"></polygon>
<g transform="translate({{pl2.tx}} {{pl2.ty}}) scale({{k}})" style="opacity: {{pl2.txtOp}}">
<rect x="0" y="-10.5" width="22" height="14" rx="7" style="fill: #0E1120; opacity: 0.08"></rect>
<text x="11" y="0" style="font-family: Inter, sans-serif; font-size: 9.5px; font-weight: 600; font-variant-numeric: tabular-nums; text-anchor: middle; fill: #0E1120">03</text>
<text x="30" y="0" style="font-family: Nunito, sans-serif; font-size: 12.5px; font-weight: 800; fill: #0E1120">Richtlinien &amp; Freigaben<tspan dx="8" style="font-family: Inter, sans-serif; font-size: 10px; font-weight: 500; fill: #5F6577">Policies &amp; Approvals</tspan></text>
</g>
</g>

<path d="{{b2.ord}}" style="fill: none; stroke: #4876FF; stroke-width: 2.25; stroke-linecap: round; opacity: {{ordBase}}"></path>
<path d="{{b2.ord}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1.1; stroke-linecap: round; stroke-dasharray: 10 80; opacity: {{ordOp}}"><animate attributeName="stroke-dashoffset" values="0;-90" dur="2s" repeatCount="indefinite"></animate></path>
<path d="{{b2.own}}" style="fill: none; stroke: #16A89B; stroke-width: 2.25; stroke-linecap: round; opacity: 0.95"></path>
<path d="{{b2.own}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1.1; stroke-linecap: round; stroke-dasharray: 10 80"><animate attributeName="stroke-dashoffset" values="0;-90" dur="2s" repeatCount="indefinite"></animate></path>
<path d="{{b2.port}}" style="fill: #4876FF; opacity: {{ordOp}}"></path>
<path d="{{b2.oport}}" style="fill: #16A89B"></path>
<path d="{{b2.chat}}" style="fill: none; stroke: #4876FF; stroke-width: 2.25; stroke-linecap: round; opacity: 0.95"></path>
<path d="{{b2.chat}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1.1; stroke-linecap: round; stroke-dasharray: 10 80"><animate attributeName="stroke-dashoffset" values="0;-90" dur="2s" repeatCount="indefinite"></animate></path>
<path d="{{b2.cport}}" style="fill: #2F5BEA"></path>
<g style="opacity: {{held.op}}">
<ellipse cx="{{held.cx}}" cy="{{held.cy}}" rx="50" ry="15" style="fill: #FFB547; filter: url(#stg-gl)"><animate attributeName="opacity" values="0.35;0.85;0.35" dur="1.8s" repeatCount="indefinite"></animate></ellipse>
<ellipse cx="{{held.cx}}" cy="{{held.cy}}" rx="32" ry="10" style="fill: #FFF3DE; fill-opacity: 0.6; stroke: #F5A524; stroke-width: 1.5"></ellipse>
</g>
<path d="{{b2.tr}}" style="fill: none; stroke: #4876FF; stroke-width: 8; stroke-linecap: round; opacity: {{trGlow}}; filter: url(#stg-gs)"></path>
<path d="{{b2.tr}}" style="fill: none; stroke: #2F5BEA; stroke-width: 2.75; stroke-linecap: round; opacity: {{trOp}}"></path>
<path d="{{b2.tr}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1.3; stroke-linecap: round; stroke-dasharray: 14 70; opacity: {{trOp}}"><animate attributeName="stroke-dashoffset" values="0;-84" dur="1.6s" repeatCount="indefinite"></animate></path>
<path d="{{b2.tport}}" style="fill: #2F5BEA; opacity: {{trOp}}"></path>

<g style="opacity: {{pl1.op}}">
<polygon points="{{pl1.shadow}}" style="fill: #1B2340; opacity: 0.12; filter: url(#stg-sh)"></polygon>
<polygon points="{{pl1.sil}}" style="fill: #4876FF; opacity: {{pl1.act}}; filter: url(#stg-gl)"></polygon>
<polygon points="{{pl1.side}}" style="fill: url(#stg-s1)"></polygon>
<polygon points="{{pl1.top}}" style="fill: url(#stg-t1)"></polygon>
<rect x="{{pl1.fx}}" y="{{pl1.fy}}" width="{{pl1.fw}}" height="21" style="fill: url(#stg-f1)"></rect>
<path d="{{pl1.hl}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1; opacity: 0.9"></path>
<path d="{{pl1.lo}}" style="fill: none; stroke: #0E1120; stroke-width: 1; opacity: 0.1"></path>
<polygon points="{{pl1.sil}}" style="fill: none; stroke: #1B2340; stroke-width: 1; stroke-opacity: 0.1; stroke-linejoin: round"></polygon>
<polygon points="{{pl1.sil}}" style="fill: none; stroke: #4876FF; stroke-width: 1.5; stroke-linejoin: round; opacity: {{pl1.flash}}"></polygon>
<g transform="translate({{pl1.tx}} {{pl1.ty}}) scale({{k}})" style="opacity: {{pl1.txtOp}}">
<rect x="0" y="-10.5" width="22" height="14" rx="7" style="fill: #0E1120; opacity: 0.08"></rect>
<text x="11" y="0" style="font-family: Inter, sans-serif; font-size: 9.5px; font-weight: 600; font-variant-numeric: tabular-nums; text-anchor: middle; fill: #0E1120">02</text>
<text x="30" y="0" style="font-family: Nunito, sans-serif; font-size: 12.5px; font-weight: 800; fill: #0E1120">Berechtigungen<tspan dx="8" style="font-family: Inter, sans-serif; font-size: 10px; font-weight: 500; fill: #5F6577">Access Control · RBAC</tspan></text>
</g>
</g>

<path d="{{b3.ord}}" style="fill: none; stroke: #4876FF; stroke-width: 2.25; stroke-linecap: round; opacity: {{ordBase}}"></path>
<path d="{{b3.ord}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1.1; stroke-linecap: round; stroke-dasharray: 10 80; opacity: {{ordOp}}"><animate attributeName="stroke-dashoffset" values="0;-90" dur="2s" repeatCount="indefinite"></animate></path>
<path d="{{b3.own}}" style="fill: none; stroke: #16A89B; stroke-width: 2.25; stroke-linecap: round; opacity: 0.95"></path>
<path d="{{b3.own}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1.1; stroke-linecap: round; stroke-dasharray: 10 80"><animate attributeName="stroke-dashoffset" values="0;-90" dur="2s" repeatCount="indefinite"></animate></path>
<path d="{{b3.port}}" style="fill: #4876FF; opacity: {{ordOp}}"></path>
<path d="{{b3.oport}}" style="fill: #16A89B"></path>
<path d="{{b3.chat}}" style="fill: none; stroke: #4876FF; stroke-width: 2.25; stroke-linecap: round; opacity: 0.95"></path>
<path d="{{b3.chat}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1.1; stroke-linecap: round; stroke-dasharray: 10 80"><animate attributeName="stroke-dashoffset" values="0;-90" dur="2s" repeatCount="indefinite"></animate></path>
<path d="{{b3.cport}}" style="fill: #2F5BEA"></path>
<path d="{{b3.tr}}" style="fill: none; stroke: #4876FF; stroke-width: 8; stroke-linecap: round; opacity: {{trGlow}}; filter: url(#stg-gs)"></path>
<path d="{{b3.tr}}" style="fill: none; stroke: #2F5BEA; stroke-width: 2.75; stroke-linecap: round; opacity: {{trOp}}"></path>
<path d="{{b3.tr}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1.3; stroke-linecap: round; stroke-dasharray: 14 70; opacity: {{trOp}}"><animate attributeName="stroke-dashoffset" values="0;-84" dur="1.6s" repeatCount="indefinite"></animate></path>
<path d="{{b3.tport}}" style="fill: #2F5BEA; opacity: {{trOp}}"></path>

<g style="opacity: {{pl0.op}}">
<polygon points="{{pl0.shadow}}" style="fill: #1B2340; opacity: 0.12; filter: url(#stg-sh)"></polygon>
<polygon points="{{pl0.sil}}" style="fill: #4876FF; opacity: {{pl0.act}}; filter: url(#stg-gl)"></polygon>
<polygon points="{{pl0.side}}" style="fill: url(#stg-s0)"></polygon>
<polygon points="{{pl0.top}}" style="fill: url(#stg-t0)"></polygon>
<rect x="{{pl0.fx}}" y="{{pl0.fy}}" width="{{pl0.fw}}" height="21" style="fill: url(#stg-f0)"></rect>
<path d="{{pl0.hl}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1; opacity: 0.9"></path>
<path d="{{pl0.lo}}" style="fill: none; stroke: #0E1120; stroke-width: 1; opacity: 0.1"></path>
<polygon points="{{pl0.sil}}" style="fill: none; stroke: #1B2340; stroke-width: 1; stroke-opacity: 0.1; stroke-linejoin: round"></polygon>
<polygon points="{{pl0.sil}}" style="fill: none; stroke: #4876FF; stroke-width: 1.5; stroke-linejoin: round; opacity: {{pl0.flash}}"></polygon>
<g transform="translate({{pl0.tx}} {{pl0.ty}}) scale({{k}})" style="opacity: {{pl0.txtOp}}">
<rect x="0" y="-10.5" width="22" height="14" rx="7" style="fill: #0E1120; opacity: 0.08"></rect>
<text x="11" y="0" style="font-family: Inter, sans-serif; font-size: 9.5px; font-weight: 600; font-variant-numeric: tabular-nums; text-anchor: middle; fill: #0E1120">01</text>
<text x="30" y="0" style="font-family: Nunito, sans-serif; font-size: 12.5px; font-weight: 800; fill: #0E1120">Identität<tspan dx="8" style="font-family: Inter, sans-serif; font-size: 10px; font-weight: 500; fill: #5F6577">Identity</tspan></text>
</g>
</g>

<g style="opacity: {{gw.op}}">
<polygon points="{{gw.shadow}}" style="fill: #1B2340; opacity: 0.14; filter: url(#stg-sh)"></polygon>
<polygon points="{{gw.side}}" style="fill: url(#stg-gs)"></polygon>
<path d="{{gw.seams}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1; opacity: 0.6"></path>
<polygon points="{{gw.top}}" style="fill: url(#stg-gt)"></polygon>
<rect x="{{gw.fx}}" y="{{gw.fy}}" width="{{gw.fw}}" height="84" style="fill: url(#stg-gf)"></rect>
<rect x="{{gw.fx}}" y="{{gw.sy}}" width="{{gw.fw}}" height="5" style="fill: url(#stg-strip)"></rect>
<path d="{{gw.hl}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1; opacity: 0.95"></path>
<polygon points="{{gw.sil}}" style="fill: none; stroke: #1B2340; stroke-width: 1; stroke-opacity: 0.1; stroke-linejoin: round"></polygon>
<polygon points="{{gw.sil}}" style="fill: none; stroke: #4876FF; stroke-width: 1.5; stroke-linejoin: round; opacity: {{gw.flash}}"></polygon>
<g transform="translate({{gw.lx}} {{gw.ly}}) scale({{k}})">
<path d="{{markInk}}" style="fill: none; stroke: #0E1120; stroke-width: 2.2; stroke-linecap: round"></path>
<path d="{{markBlue}}" style="fill: none; stroke: #4876FF; stroke-width: 2.2; stroke-linecap: round"></path>
<text x="30" y="6" style="font-family: Nunito, sans-serif; font-size: 17px; font-weight: 800; fill: #0E1120"><tspan style="fill: #4876FF">AI</tspan>ceFlow<tspan dx="9" style="font-weight: 700; fill: #C3C9D6">|</tspan><tspan dx="9" style="font-size: 13.5px; letter-spacing: 0.06em">GOVERNANCE GATEWAY</tspan></text>
<text x="30" y="25" style="font-family: Inter, sans-serif; font-size: 10.5px; font-weight: 500; fill: #5F6577">Vier Ebenen in einer Schicht</text>
</g>
</g>

<path d="{{b4.ord}}" style="fill: none; stroke: #4876FF; stroke-width: 2.25; stroke-linecap: round; opacity: {{ordBase}}"></path>
<path d="{{b4.ord}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1.1; stroke-linecap: round; stroke-dasharray: 10 80; opacity: {{ordOp}}"><animate attributeName="stroke-dashoffset" values="0;-90" dur="2s" repeatCount="indefinite"></animate></path>
<path d="{{b4.own}}" style="fill: none; stroke: #16A89B; stroke-width: 2.25; stroke-linecap: round; opacity: 0.95"></path>
<path d="{{b4.own}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1.1; stroke-linecap: round; stroke-dasharray: 10 80"><animate attributeName="stroke-dashoffset" values="0;-90" dur="2s" repeatCount="indefinite"></animate></path>
<path d="{{b4.port}}" style="fill: #4876FF; opacity: {{ordOp}}"></path>
<path d="{{b4.oport}}" style="fill: #16A89B"></path>
<path d="{{b4.chat}}" style="fill: none; stroke: #4876FF; stroke-width: 2.25; stroke-linecap: round; opacity: 0.95"></path>
<path d="{{b4.chat}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1.1; stroke-linecap: round; stroke-dasharray: 10 80"><animate attributeName="stroke-dashoffset" values="0;-90" dur="2s" repeatCount="indefinite"></animate></path>
<path d="{{b4.cport}}" style="fill: #2F5BEA"></path>
<path d="{{b4.tr}}" style="fill: none; stroke: #4876FF; stroke-width: 8; stroke-linecap: round; opacity: {{trGlow}}; filter: url(#stg-gs)"></path>
<path d="{{b4.tr}}" style="fill: none; stroke: #2F5BEA; stroke-width: 2.75; stroke-linecap: round; opacity: {{trOp}}"></path>
<path d="{{b4.tr}}" style="fill: none; stroke: #FFFFFF; stroke-width: 1.3; stroke-linecap: round; stroke-dasharray: 14 70; opacity: {{trOp}}"><animate attributeName="stroke-dashoffset" values="0;-84" dur="1.6s" repeatCount="indefinite"></animate></path>
<path d="{{b4.tport}}" style="fill: #2F5BEA; opacity: {{trOp}}"></path>

<g transform="translate({{ag0.X}} {{ag0.Y}})" style="opacity: {{ag0.op}}">
<circle cx="0" cy="0" r="170" style="fill: url(#stg-halo); opacity: {{ag0.halo}}"></circle>
<g transform="scale({{ag0.hs}})">
<ellipse cx="2" cy="32" rx="28" ry="6" style="fill: #0E1120; opacity: 0.2; filter: url(#stg-sh)"></ellipse>
<g transform="scale({{ag0.sc}})">
<rect x="-14" y="-25" width="40" height="38" rx="8" style="fill: url(#stg-as)"></rect>
<rect x="-16.4" y="-23.2" width="40" height="38" rx="8" style="fill: url(#stg-as)"></rect>
<rect x="-18.8" y="-21.4" width="40" height="38" rx="8" style="fill: url(#stg-as)"></rect>
<rect x="-21.2" y="-19.6" width="40" height="38" rx="8" style="fill: url(#stg-as)"></rect>
<rect x="-23.6" y="-17.8" width="40" height="38" rx="8" style="fill: url(#stg-as)"></rect>
<rect x="-26" y="-16" width="40" height="38" rx="8" style="fill: url(#stg-af)"></rect>
<rect x="-25.5" y="-15.5" width="39" height="37" rx="7.5" style="fill: none; stroke: #FFFFFF; stroke-width: 1"></rect>
<rect x="-21" y="-6" width="30" height="16" rx="6" style="fill: url(#stg-av)"></rect>
<path d="M-16 -2.5H3" style="fill: none; stroke: #FFFFFF; stroke-width: 1.5; stroke-linecap: round; opacity: 0.16"></path>
<g style="opacity: {{ag0.eye}}">
<rect x="-16" y="-1" width="8" height="7" rx="3.5" style="fill: #4876FF; filter: url(#stg-gs)"></rect>
<rect x="-4" y="-1" width="8" height="7" rx="3.5" style="fill: #4876FF; filter: url(#stg-gs)"></rect>
<rect x="-15" y="0" width="6" height="5" rx="2.5" style="fill: #A9C0FF"></rect>
<rect x="-3" y="0" width="6" height="5" rx="2.5" style="fill: #A9C0FF"></rect>
</g>
<path d="M0 -20.5V-31" style="fill: none; stroke: #A3ABBE; stroke-width: 1.6; stroke-linecap: round"></path>
<circle cx="0" cy="-34" r="3.4" style="fill: #C9D0DE"></circle>
<g style="opacity: {{ag0.ant}}">
<circle cx="0" cy="-34" r="7" style="fill: #4876FF; opacity: 0.6; filter: url(#stg-gs)"></circle>
<circle cx="0" cy="-34" r="3.4" style="fill: url(#stg-tip)"></circle>
</g>
</g>
</g>
<g transform="scale({{ka}})">
<g style="opacity: {{ag0.cardOp}}">
<rect x="-80" y="-110" width="160" height="64" rx="10" style="fill: #FFFFFF; filter: url(#stg-ds)"></rect>
<path d="M-6 -46.5L0 -40.5L6 -46.5Z" style="fill: #FFFFFF"></path>
<path d="M-66 -86.5H66" style="fill: none; stroke: #0E1120; stroke-width: 1; opacity: 0.07"></path>
<text x="0" y="-73" style="font-family: Inter, sans-serif; font-size: 9.5px; font-weight: 500; text-anchor: middle; fill: #5F6577">im Auftrag von: <tspan style="font-family: Nunito, sans-serif; font-size: 11.5px; font-weight: 800; fill: #2B55E6">Buchhaltung</tspan></text>
<text x="0" y="-58" style="font-family: Inter, sans-serif; font-size: 9.5px; font-weight: 500; text-anchor: middle; fill: #5F6577">darf: <tspan style="font-weight: 600; fill: #0E1120">ERP · Rechnung buchen</tspan></text>
</g>
<text x="0" y="{{ag0.nameY}}" style="font-family: Nunito, sans-serif; font-size: 13px; font-weight: 800; text-anchor: middle; fill: #0E1120; opacity: {{ag0.nameOp}}">Rechnungs-Agent</text>
</g>
</g>

<g transform="translate({{ag1.X}} {{ag1.Y}})" style="opacity: {{ag1.op}}">
<ellipse cx="2" cy="32" rx="28" ry="6" style="fill: #0E1120; opacity: 0.2; filter: url(#stg-sh)"></ellipse>
<g transform="scale({{ag1.sc}})">
<rect x="-14" y="-25" width="40" height="38" rx="8" style="fill: url(#stg-as)"></rect>
<rect x="-16.4" y="-23.2" width="40" height="38" rx="8" style="fill: url(#stg-as)"></rect>
<rect x="-18.8" y="-21.4" width="40" height="38" rx="8" style="fill: url(#stg-as)"></rect>
<rect x="-21.2" y="-19.6" width="40" height="38" rx="8" style="fill: url(#stg-as)"></rect>
<rect x="-23.6" y="-17.8" width="40" height="38" rx="8" style="fill: url(#stg-as)"></rect>
<rect x="-26" y="-16" width="40" height="38" rx="8" style="fill: url(#stg-af)"></rect>
<rect x="-25.5" y="-15.5" width="39" height="37" rx="7.5" style="fill: none; stroke: #FFFFFF; stroke-width: 1"></rect>
<rect x="-21" y="-6" width="30" height="16" rx="6" style="fill: url(#stg-av)"></rect>
<path d="M-16 -2.5H3" style="fill: none; stroke: #FFFFFF; stroke-width: 1.5; stroke-linecap: round; opacity: 0.16"></path>
<g style="opacity: {{ag1.eye}}">
<rect x="-16" y="-1" width="8" height="7" rx="3.5" style="fill: #4876FF; filter: url(#stg-gs)"></rect>
<rect x="-4" y="-1" width="8" height="7" rx="3.5" style="fill: #4876FF; filter: url(#stg-gs)"></rect>
<rect x="-15" y="0" width="6" height="5" rx="2.5" style="fill: #A9C0FF"></rect>
<rect x="-3" y="0" width="6" height="5" rx="2.5" style="fill: #A9C0FF"></rect>
</g>
<path d="M0 -20.5V-31" style="fill: none; stroke: #A3ABBE; stroke-width: 1.6; stroke-linecap: round"></path>
<circle cx="0" cy="-34" r="3.4" style="fill: #C9D0DE"></circle>
<g style="opacity: {{ag1.ant}}">
<circle cx="0" cy="-34" r="7" style="fill: #4876FF; opacity: 0.6; filter: url(#stg-gs)"></circle>
<circle cx="0" cy="-34" r="3.4" style="fill: url(#stg-tip)"></circle>
</g>
</g>
<g transform="scale({{ka}})">
<g style="opacity: {{ag1.cardOp}}">
<rect x="-80" y="-110" width="160" height="64" rx="10" style="fill: #FFFFFF; filter: url(#stg-ds)"></rect>
<path d="M-6 -46.5L0 -40.5L6 -46.5Z" style="fill: #FFFFFF"></path>
<path d="M-66 -86.5H66" style="fill: none; stroke: #0E1120; stroke-width: 1; opacity: 0.07"></path>
<text x="0" y="-73" style="font-family: Inter, sans-serif; font-size: 9.5px; font-weight: 500; text-anchor: middle; fill: #5F6577">im Auftrag von: <tspan style="font-family: Nunito, sans-serif; font-size: 11.5px; font-weight: 800; fill: #2B55E6">Vertrieb</tspan></text>
<text x="0" y="-58" style="font-family: Inter, sans-serif; font-size: 9.5px; font-weight: 500; text-anchor: middle; fill: #5F6577">darf: <tspan style="font-weight: 600; fill: #0E1120">CRM · Angebote</tspan></text>
</g>
<text x="0" y="{{ag1.nameY}}" style="font-family: Nunito, sans-serif; font-size: 13px; font-weight: 800; text-anchor: middle; fill: #0E1120; opacity: {{ag1.nameOp}}">Vertriebs-Agent</text>
</g>
</g>

<g transform="translate({{ag2.X}} {{ag2.Y}})" style="opacity: {{ag2.op}}">
<ellipse cx="2" cy="32" rx="28" ry="6" style="fill: #0E1120; opacity: 0.2; filter: url(#stg-sh)"></ellipse>
<g transform="scale({{ag2.sc}})">
<rect x="-14" y="-25" width="40" height="38" rx="8" style="fill: url(#stg-as)"></rect>
<rect x="-16.4" y="-23.2" width="40" height="38" rx="8" style="fill: url(#stg-as)"></rect>
<rect x="-18.8" y="-21.4" width="40" height="38" rx="8" style="fill: url(#stg-as)"></rect>
<rect x="-21.2" y="-19.6" width="40" height="38" rx="8" style="fill: url(#stg-as)"></rect>
<rect x="-23.6" y="-17.8" width="40" height="38" rx="8" style="fill: url(#stg-as)"></rect>
<rect x="-26" y="-16" width="40" height="38" rx="8" style="fill: url(#stg-af)"></rect>
<rect x="-25.5" y="-15.5" width="39" height="37" rx="7.5" style="fill: none; stroke: #FFFFFF; stroke-width: 1"></rect>
<rect x="-21" y="-6" width="30" height="16" rx="6" style="fill: url(#stg-av)"></rect>
<path d="M-16 -2.5H3" style="fill: none; stroke: #FFFFFF; stroke-width: 1.5; stroke-linecap: round; opacity: 0.16"></path>
<g style="opacity: {{ag2.eye}}">
<rect x="-16" y="-1" width="8" height="7" rx="3.5" style="fill: #4876FF; filter: url(#stg-gs)"></rect>
<rect x="-4" y="-1" width="8" height="7" rx="3.5" style="fill: #4876FF; filter: url(#stg-gs)"></rect>
<rect x="-15" y="0" width="6" height="5" rx="2.5" style="fill: #A9C0FF"></rect>
<rect x="-3" y="0" width="6" height="5" rx="2.5" style="fill: #A9C0FF"></rect>
</g>
<path d="M0 -20.5V-31" style="fill: none; stroke: #A3ABBE; stroke-width: 1.6; stroke-linecap: round"></path>
<circle cx="0" cy="-34" r="3.4" style="fill: #C9D0DE"></circle>
<g style="opacity: {{ag2.ant}}">
<circle cx="0" cy="-34" r="7" style="fill: #4876FF; opacity: 0.6; filter: url(#stg-gs)"></circle>
<circle cx="0" cy="-34" r="3.4" style="fill: url(#stg-tip)"></circle>
</g>
</g>
<g transform="scale({{ka}})">
<g style="opacity: {{ag2.cardOp}}">
<rect x="-80" y="-110" width="160" height="64" rx="10" style="fill: #FFFFFF; filter: url(#stg-ds)"></rect>
<path d="M-6 -46.5L0 -40.5L6 -46.5Z" style="fill: #FFFFFF"></path>
<path d="M-66 -86.5H66" style="fill: none; stroke: #0E1120; stroke-width: 1; opacity: 0.07"></path>
<text x="0" y="-73" style="font-family: Inter, sans-serif; font-size: 9.5px; font-weight: 500; text-anchor: middle; fill: #5F6577">im Auftrag von: <tspan style="font-family: Nunito, sans-serif; font-size: 11.5px; font-weight: 800; fill: #2B55E6">Einkauf</tspan></text>
<text x="0" y="-58" style="font-family: Inter, sans-serif; font-size: 9.5px; font-weight: 500; text-anchor: middle; fill: #5F6577">darf: <tspan style="font-weight: 600; fill: #0E1120">ERP · Bestellungen</tspan></text>
</g>
<text x="0" y="{{ag2.nameY}}" style="font-family: Nunito, sans-serif; font-size: 13px; font-weight: 800; text-anchor: middle; fill: #0E1120; opacity: {{ag2.nameOp}}">Einkaufs-Agent</text>
</g>
</g>

<g transform="translate({{own.X}} {{own.Y}})" style="opacity: {{own.vis}}">
<ellipse cx="2" cy="32" rx="28" ry="6" style="fill: #0E1120; opacity: {{own.shade}}; filter: url(#stg-sh)"></ellipse>
<circle cx="0" cy="-2" r="36" style="fill: none; stroke: #2FD3C4; stroke-width: 3; opacity: {{own.flash}}; filter: url(#stg-gs)"></circle>
<g style="opacity: {{own.ghost}}">
<rect x="-14" y="-25" width="40" height="38" rx="8" style="fill: #FFFFFF; fill-opacity: 0.35; stroke: #16A89B; stroke-width: 1.25"></rect>
<rect x="-26" y="-16" width="40" height="38" rx="8" style="fill: #FFFFFF; fill-opacity: 0.8; stroke: #16A89B; stroke-width: 1.25"></rect>
<rect x="-21" y="-6" width="30" height="16" rx="6" style="fill: #FFFFFF; stroke: #16A89B; stroke-width: 1"></rect>
<rect x="-15" y="0" width="6" height="5" rx="2.5" style="fill: none; stroke: #16A89B; stroke-width: 1"></rect>
<rect x="-3" y="0" width="6" height="5" rx="2.5" style="fill: none; stroke: #16A89B; stroke-width: 1"></rect>
<path d="M0 -20.5V-31" style="fill: none; stroke: #16A89B; stroke-width: 1.25; stroke-linecap: round"></path>
<circle cx="0" cy="-34" r="3" style="fill: #FFFFFF; stroke: #16A89B; stroke-width: 1.25"></circle>
</g>
<g style="opacity: {{own.solid}}">
<rect x="-14" y="-25" width="40" height="38" rx="8" style="fill: url(#stg-as)"></rect>
<rect x="-16.4" y="-23.2" width="40" height="38" rx="8" style="fill: url(#stg-as)"></rect>
<rect x="-18.8" y="-21.4" width="40" height="38" rx="8" style="fill: url(#stg-as)"></rect>
<rect x="-21.2" y="-19.6" width="40" height="38" rx="8" style="fill: url(#stg-as)"></rect>
<rect x="-23.6" y="-17.8" width="40" height="38" rx="8" style="fill: url(#stg-as)"></rect>
<rect x="-26" y="-16" width="40" height="38" rx="8" style="fill: url(#stg-af)"></rect>
<rect x="-25.5" y="-15.5" width="39" height="37" rx="7.5" style="fill: none; stroke: #FFFFFF; stroke-width: 1"></rect>
<rect x="-21" y="-6" width="30" height="16" rx="6" style="fill: url(#stg-av)"></rect>
<path d="M-16 -2.5H3" style="fill: none; stroke: #FFFFFF; stroke-width: 1.5; stroke-linecap: round; opacity: 0.16"></path>
<rect x="-16" y="-1" width="8" height="7" rx="3.5" style="fill: #2FD3C4; filter: url(#stg-gs)"></rect>
<rect x="-4" y="-1" width="8" height="7" rx="3.5" style="fill: #2FD3C4; filter: url(#stg-gs)"></rect>
<rect x="-15" y="0" width="6" height="5" rx="2.5" style="fill: #CBFBF5"></rect>
<rect x="-3" y="0" width="6" height="5" rx="2.5" style="fill: #CBFBF5"></rect>
<path d="M0 -20.5V-31" style="fill: none; stroke: #A3ABBE; stroke-width: 1.6; stroke-linecap: round"></path>
<circle cx="0" cy="-34" r="7" style="fill: #2FD3C4; opacity: 0.6; filter: url(#stg-gs)"></circle>
<circle cx="0" cy="-34" r="3.4" style="fill: url(#stg-tipOwn)"></circle>
</g>
<g transform="scale({{ka}})">
<g style="opacity: {{own.cardOp}}">
<rect x="-80" y="-110" width="160" height="64" rx="10" style="fill: #FFFFFF; stroke: #2FD3C4; stroke-width: 1; stroke-opacity: 0.7; filter: url(#stg-ds)"></rect>
<path d="M-6 -46.5L0 -40.5L6 -46.5Z" style="fill: #FFFFFF"></path>
<path d="M-66 -86.5H66" style="fill: none; stroke: #0E1120; stroke-width: 1; opacity: 0.07"></path>
<text x="0" y="-73" style="font-family: Inter, sans-serif; font-size: 9.5px; font-weight: 500; text-anchor: middle; fill: #5F6577">im Auftrag von: <tspan style="font-family: Nunito, sans-serif; font-size: 11.5px; font-weight: 800; fill: #0B7F75">Ihr Team</tspan></text>
<text x="0" y="-58" style="font-family: Inter, sans-serif; font-size: 9.5px; font-weight: 500; text-anchor: middle; fill: #5F6577">gebaut von Ihrem Team</text>
</g>
<text x="0" y="{{own.nameY}}" style="font-family: Nunito, sans-serif; font-size: 13px; font-weight: 800; text-anchor: middle; fill: #0E1120; opacity: {{own.nameOp}}">Eigener Agent</text>
</g>
</g>

<g transform="translate({{cw0.X}} {{cw0.Y}})" style="opacity: {{cw0.op}}">
<circle cx="0" cy="0" r="3.6" style="fill: #2F5BEA; opacity: {{cw0.nub}}"></circle>
<g transform="scale({{cw0.sc}})">
<path d="M-7 -9.5L0 -2.5L7 -9.5Z" style="fill: #FFFFFF"></path>
<rect x="-75" y="-93" width="150" height="84" rx="11" style="fill: #FFFFFF; filter: url(#stg-ds)"></rect>
<rect x="-74.5" y="-92.5" width="149" height="83" rx="10.5" style="fill: none; stroke: #0E1120; stroke-width: 1; opacity: 0.08"></rect>
<g transform="translate(-65 -86.5) scale(0.6)"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" style="fill: #000000"></path></g>
<text x="-45" y="-75.2" style="font-family: Nunito, sans-serif; font-size: 12px; font-weight: 800; fill: #0E1120">ChatGPT</text>
<circle cx="19.0" cy="-81.4" r="2.1" style="fill: #5F6577"></circle>
<path d="M15.0 -74.6a4 3.6 0 0 1 8 0Z" style="fill: #5F6577"></path>
<text x="65" y="-75.4" style="font-family: Inter, sans-serif; font-size: 8.5px; font-weight: 500; text-anchor: end; fill: #5F6577">Vertrieb</text>
<path d="M-65 -66.5H65" style="fill: none; stroke: #0E1120; stroke-width: 1; opacity: 0.07"></path>
<rect x="-61" y="-60" width="126" height="17" rx="8.5" style="fill: #EEF1F7"></rect>
<text x="57" y="-48.6" style="font-family: Inter, sans-serif; font-size: 8.5px; font-weight: 500; text-anchor: end; fill: #0E1120">Offene Rechnungen Müller?</text>
<g style="opacity: {{cw0.typ}}">
<rect x="-65" y="-38" width="34" height="17" rx="8.5" style="fill: #E3EAFF"></rect>
<circle cx="-54" cy="-29.5" r="1.7" style="fill: #4876FF"><animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"></animate></circle>
<circle cx="-48" cy="-29.5" r="1.7" style="fill: #4876FF"><animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.2s" repeatCount="indefinite"></animate></circle>
<circle cx="-42" cy="-29.5" r="1.7" style="fill: #4876FF"><animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.4s" repeatCount="indefinite"></animate></circle>
</g>
<g style="opacity: {{cw0.ans}}">
<rect x="-65" y="-38" width="96" height="17" rx="8.5" style="fill: #4876FF"></rect>
<text x="-57" y="-26.6" style="font-family: Inter, sans-serif; font-size: 8.5px; font-weight: 600; fill: #FFFFFF">1 offen · 12.400 €</text>
</g>
</g>
</g>

<g transform="translate({{cw1.X}} {{cw1.Y}})" style="opacity: {{cw1.op}}">
<circle cx="0" cy="0" r="3.6" style="fill: #2F5BEA; opacity: {{cw1.nub}}"></circle>
<g transform="scale({{cw1.sc}})">
<path d="M-7 -9.5L0 -2.5L7 -9.5Z" style="fill: #FFFFFF"></path>
<rect x="-75" y="-93" width="150" height="84" rx="11" style="fill: #FFFFFF; filter: url(#stg-ds)"></rect>
<rect x="-74.5" y="-92.5" width="149" height="83" rx="10.5" style="fill: none; stroke: #0E1120; stroke-width: 1; opacity: 0.08"></rect>
<g transform="translate(-65 -86.5) scale(0.6)"><path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" style="fill: #D97757"></path></g>
<text x="-45" y="-75.2" style="font-family: Nunito, sans-serif; font-size: 12px; font-weight: 800; fill: #0E1120">Claude</text>
<circle cx="23.5" cy="-81.4" r="2.1" style="fill: #5F6577"></circle>
<path d="M19.5 -74.6a4 3.6 0 0 1 8 0Z" style="fill: #5F6577"></path>
<text x="65" y="-75.4" style="font-family: Inter, sans-serif; font-size: 8.5px; font-weight: 500; text-anchor: end; fill: #5F6577">Einkauf</text>
<path d="M-65 -66.5H65" style="fill: none; stroke: #0E1120; stroke-width: 1; opacity: 0.07"></path>
<rect x="-61" y="-60" width="126" height="17" rx="8.5" style="fill: #EEF1F7"></rect>
<text x="57" y="-48.6" style="font-family: Inter, sans-serif; font-size: 8.5px; font-weight: 500; text-anchor: end; fill: #0E1120">Wann liefert Müller GmbH?</text>
<g style="opacity: {{cw1.typ}}">
<rect x="-65" y="-38" width="34" height="17" rx="8.5" style="fill: #E3EAFF"></rect>
<circle cx="-54" cy="-29.5" r="1.7" style="fill: #4876FF"><animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"></animate></circle>
<circle cx="-48" cy="-29.5" r="1.7" style="fill: #4876FF"><animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.2s" repeatCount="indefinite"></animate></circle>
<circle cx="-42" cy="-29.5" r="1.7" style="fill: #4876FF"><animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.4s" repeatCount="indefinite"></animate></circle>
</g>
<g style="opacity: {{cw1.ans}}">
<rect x="-65" y="-38" width="92" height="17" rx="8.5" style="fill: #4876FF"></rect>
<text x="-57" y="-26.6" style="font-family: Inter, sans-serif; font-size: 8.5px; font-weight: 600; fill: #FFFFFF">KW 47 · bestätigt</text>
</g>
</g>
</g>

<g class="st-notes">
<text x="708" y="230" style="font-family: Inter, sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 0.14em; text-anchor: end; fill: #5F6577; opacity: {{nt.ag}}">AGENTS</text>
<text x="640" y="702" style="font-family: Inter, sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 0.14em; text-anchor: end; fill: #5F6577; opacity: {{nt.sy}}">SYSTEME</text>
<g style="opacity: {{nt.br}}">
<path d="{{nt.bd}}" style="fill: none; stroke: #4876FF; stroke-width: 6; stroke-linecap: round; opacity: {{nt.glow}}; filter: url(#stg-gs)"></path>
<path d="{{nt.bd}}" style="fill: none; stroke: {{nt.bc}}; stroke-width: 1.25"></path>
<text x="582" y="{{nt.cy}}" transform="rotate(-90 582 {{nt.cy}})" style="font-family: Nunito, sans-serif; font-size: 11px; font-weight: 800; text-anchor: middle; fill: #0E1120; opacity: {{nt.tOp}}"><tspan style="fill: #4876FF">AI</tspan>ceFlow<tspan dx="6" style="font-size: 10.5px; letter-spacing: 0.12em; fill: #2B55E6">TRACE</tspan><tspan dx="8" style="font-family: Inter, sans-serif; font-size: 10px; font-weight: 500; letter-spacing: 0; fill: #5F6577">durch alle Ebenen</tspan></text>
<text x="582" y="{{nt.cy}}" transform="rotate(-90 582 {{nt.cy}})" style="font-family: Inter, sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 0.14em; text-anchor: middle; fill: #5F6577; opacity: {{nt.gOp}}">GOVERNANCE GATEWAY</text>
</g>
</g>

<g transform="{{pk.tf}}" style="opacity: {{pk.op}}">
<rect x="-196" y="-26" width="178" height="26" rx="13" style="fill: #FFFFFF; filter: url(#stg-ds)"></rect>
<circle cx="-181" cy="-13" r="4" style="fill: {{pk.dot}}"></circle>
<text x="-170" y="-9" style="font-family: Nunito, sans-serif; font-size: 11.5px; font-weight: 800; fill: {{pk.txt}}">Müller GmbH · 12.400 €</text>
<rect x="-12" y="-32" width="24" height="32" rx="3.5" style="fill: #FFFFFF; filter: url(#stg-ds)"></rect>
<path d="M-12 -28.5Q-12 -32 -8.5 -32H8.5Q12 -32 12 -28.5V-25H-12Z" style="fill: {{pk.dot}}"></path>
<path d="M-7 -19H7M-7 -14H7M-7 -9H3" style="fill: none; stroke: #C9D0DE; stroke-width: 1.5; stroke-linecap: round"></path>
</g>

<g transform="{{st0.tf}}" style="opacity: {{st0.op}}">
<g transform="scale({{k}})">
<line x1="0" y1="0" x2="{{st0.bx}}" y2="{{st0.by}}" style="stroke: #4876FF; stroke-width: 1; opacity: 0.6"></line>
<circle r="3.5" style="fill: #2F5BEA"></circle>
<rect x="{{st0.rx}}" y="{{st0.ry}}" width="{{st0.rw}}" height="22" rx="11" style="fill: #FFFFFF; stroke: #4876FF; stroke-width: 1.25; filter: url(#stg-ds)"></rect>
<circle cx="{{st0.bx}}" cy="{{st0.by}}" r="8" style="fill: #E8EEFF"></circle>
<text x="{{st0.bx}}" y="{{st0.ty}}" style="font-family: Inter, sans-serif; font-size: 10.5px; font-weight: 600; text-anchor: middle; fill: #2B55E6">1</text>
<text x="{{st0.lx}}" y="{{st0.ty}}" style="font-family: Inter, sans-serif; font-size: 10.5px; font-weight: 600; text-anchor: {{st0.anc}}; fill: #0E1120">Original-E-Mail</text>
</g>
</g>
<g transform="{{st1.tf}}" style="opacity: {{st1.op}}">
<g transform="scale({{k}})">
<line x1="0" y1="0" x2="{{st1.bx}}" y2="{{st1.by}}" style="stroke: #4876FF; stroke-width: 1; opacity: 0.6"></line>
<circle r="3.5" style="fill: #2F5BEA"></circle>
<rect x="{{st1.rx}}" y="{{st1.ry}}" width="{{st1.rw}}" height="22" rx="11" style="fill: #FFFFFF; stroke: #4876FF; stroke-width: 1.25; filter: url(#stg-ds)"></rect>
<circle cx="{{st1.bx}}" cy="{{st1.by}}" r="8" style="fill: #E8EEFF"></circle>
<text x="{{st1.bx}}" y="{{st1.ty}}" style="font-family: Inter, sans-serif; font-size: 10.5px; font-weight: 600; text-anchor: middle; fill: #2B55E6">2</text>
<text x="{{st1.lx}}" y="{{st1.ty}}" style="font-family: Inter, sans-serif; font-size: 10.5px; font-weight: 600; text-anchor: {{st1.anc}}; fill: #0E1120">gelesen</text>
</g>
</g>
<g transform="{{st2.tf}}" style="opacity: {{st2.op}}">
<g transform="scale({{k}})">
<line x1="0" y1="0" x2="{{st2.bx}}" y2="{{st2.by}}" style="stroke: #4876FF; stroke-width: 1; opacity: 0.6"></line>
<circle r="3.5" style="fill: #2F5BEA"></circle>
<rect x="{{st2.rx}}" y="{{st2.ry}}" width="{{st2.rw}}" height="22" rx="11" style="fill: #FFFFFF; stroke: #4876FF; stroke-width: 1.25; filter: url(#stg-ds)"></rect>
<circle cx="{{st2.bx}}" cy="{{st2.by}}" r="8" style="fill: #E8EEFF"></circle>
<text x="{{st2.bx}}" y="{{st2.ty}}" style="font-family: Inter, sans-serif; font-size: 10.5px; font-weight: 600; text-anchor: middle; fill: #2B55E6">3</text>
<text x="{{st2.lx}}" y="{{st2.ty}}" style="font-family: Inter, sans-serif; font-size: 10.5px; font-weight: 600; text-anchor: {{st2.anc}}; fill: #0E1120">entschieden</text>
</g>
</g>
<g transform="{{st3.tf}}" style="opacity: {{st3.op}}">
<g transform="scale({{k}})">
<line x1="0" y1="0" x2="{{st3.bx}}" y2="{{st3.by}}" style="stroke: #4876FF; stroke-width: 1; opacity: 0.6"></line>
<circle r="3.5" style="fill: #2F5BEA"></circle>
<rect x="{{st3.rx}}" y="{{st3.ry}}" width="{{st3.rw}}" height="22" rx="11" style="fill: #FFFFFF; stroke: #4876FF; stroke-width: 1.25; filter: url(#stg-ds)"></rect>
<circle cx="{{st3.bx}}" cy="{{st3.by}}" r="8" style="fill: #E8EEFF"></circle>
<text x="{{st3.bx}}" y="{{st3.ty}}" style="font-family: Inter, sans-serif; font-size: 10.5px; font-weight: 600; text-anchor: middle; fill: #2B55E6">4</text>
<text x="{{st3.lx}}" y="{{st3.ty}}" style="font-family: Inter, sans-serif; font-size: 10.5px; font-weight: 600; text-anchor: {{st3.anc}}; fill: #0E1120">geprüft</text>
</g>
</g>
<g transform="{{st4.tf}}" style="opacity: {{st4.op}}">
<g transform="scale({{k}})">
<line x1="0" y1="0" x2="{{st4.bx}}" y2="{{st4.by}}" style="stroke: #4876FF; stroke-width: 1; opacity: 0.6"></line>
<circle r="3.5" style="fill: #2F5BEA"></circle>
<rect x="{{st4.rx}}" y="{{st4.ry}}" width="{{st4.rw}}" height="22" rx="11" style="fill: #FFFFFF; stroke: #4876FF; stroke-width: 1.25; filter: url(#stg-ds)"></rect>
<circle cx="{{st4.bx}}" cy="{{st4.by}}" r="8" style="fill: #E8EEFF"></circle>
<text x="{{st4.bx}}" y="{{st4.ty}}" style="font-family: Inter, sans-serif; font-size: 10.5px; font-weight: 600; text-anchor: middle; fill: #2B55E6">5</text>
<text x="{{st4.lx}}" y="{{st4.ty}}" style="font-family: Inter, sans-serif; font-size: 10.5px; font-weight: 600; text-anchor: {{st4.anc}}; fill: #0E1120">gebucht</text>
</g>
</g>

</g>

<g style="fill: none; stroke-linecap: round">
<line x1="{{m0.x1}}" y1="{{m0.y1}}" x2="{{m0.x2}}" y2="{{m0.y2}}" pathLength="1" style="stroke: #0E1120; stroke-width: 11.6; stroke-dasharray: 1 1; stroke-dashoffset: {{m0.dof}}; opacity: {{m0.op}}"></line>
<line x1="{{m1.x1}}" y1="{{m1.y1}}" x2="{{m1.x2}}" y2="{{m1.y2}}" pathLength="1" style="stroke: #0E1120; stroke-width: 11.6; stroke-dasharray: 1 1; stroke-dashoffset: {{m1.dof}}; opacity: {{m1.op}}"></line>
<line x1="{{m2.x1}}" y1="{{m2.y1}}" x2="{{m2.x2}}" y2="{{m2.y2}}" pathLength="1" style="stroke: #0E1120; stroke-width: 11.6; stroke-dasharray: 1 1; stroke-dashoffset: {{m2.dof}}; opacity: {{m2.op}}"></line>
<line x1="{{m3.x1}}" y1="{{m3.y1}}" x2="{{m3.x2}}" y2="{{m3.y2}}" pathLength="1" style="stroke: #4876FF; stroke-width: 11.6; stroke-dasharray: 1 1; stroke-dashoffset: {{m3.dof}}; opacity: {{m3.op}}"></line>
<line x1="{{m4.x1}}" y1="{{m4.y1}}" x2="{{m4.x2}}" y2="{{m4.y2}}" pathLength="1" style="stroke: #4876FF; stroke-width: 11.6; stroke-dasharray: 1 1; stroke-dashoffset: {{m4.dof}}; opacity: {{m4.op}}"></line>
<line x1="{{m5.x1}}" y1="{{m5.y1}}" x2="{{m5.x2}}" y2="{{m5.y2}}" pathLength="1" style="stroke: #4876FF; stroke-width: 11.6; stroke-dasharray: 1 1; stroke-dashoffset: {{m5.dof}}; opacity: {{m5.op}}"></line>
</g>
`;
