const yearEvents = [
    // each event will be represented by an array with the following order:
    // [start_day, end_day, start_lat_lon, end_lat_lon, path_color, text, photos_url_list]

    // start in hoi-an
    [-100, -100, [105.3394, 20.2214], [105.3394, 20.2214], null, "",
    [['/img/BNL_2353.JPG', ''], ['/img/BNL_2411.JPG', ''], ['/img/BNL_2426.JPG', '']]],
    // hoi-an to hao-long bay
    [-10, -4, [105.3394, 20.2214], [106.3721, 21.6681], null, "Just before the new year we were in Vietnam",
    [['/img/BNL_2518.JPG', ''], ['/img/BNL_2504.JPG', ''], ['/img/BNL_2506.JPG', ''], ['/img/BNL_2524.JPG', ''], ['/img/BNL_2534.JPG', '']]],
    // hao-long bay to siam reap
    [-4, 1, [106.3721, 21.6681], [104.8230, 13.3044], null, "Then we flew to Cambodia to ring in 2017!",
    [['/img/BNL_0003.JPG', ''], ['/img/BNL_0024.JPG', ''], ['/img/BNL_0086.JPG', ''], ['/img/BNL_0109.JPG', ''], ['/img/BNL_0123.JPG', ''], ['/img/BNL_0129.JPG', ''], ['/img/BNL_0160.JPG', '']]],
    // siam reap to chang mai
    [1, 5, [104.8230, 13.3044], [100.6920, 17.2881], null, "Our last stop in SE Asia was Thailand",
    [['/img/BNL_0206.JPG', ''], ['/img/BNL_0230.JPG', ''], ['/img/DSC_0950.JPG', ''], ['/img/DSC_0953.JPG', ''], ['/img/DSC_0980.JPG', ''], ['/img/DSC_0982.JPG', ''],
    ['/img/DSC_0985.JPG', ''], ['/img/DSC_1029.JPG', ''], ['/img/DSC_1030.JPG', ''], ['/img/DSC_1056.JPG', ''], ['/img/DSC_1076.JPG', ''], ['/img/DSC_1258.JPG', ''],
    ['/img/DSC_1376.JPG', ''], ['/img/DSC_1389.JPG', ''], ['/img/DSC_1446.JPG', ''], ['/img/DSC_1502.JPG', ''], ['/img/DSC_1594.JPG', '']]],
    // chang mai to bangkok
    [5, 10, [100.6920, 17.2881], [101.2084, 13.3044], null, "Our last stop in SE Asia was Thailand",
    [['/img/BNL_0248.JPG', ''], ['/img/BNL_0275.JPG', ''], ['/img/BNL_0292.JPG', 'Sneaky photo of the Jade Buddah'], ['/img/BNL_0303.JPG', '']]],
    // bangkok to san francisco 
    [10, 14, [101.2084, 13.3044], [-122.2364, 37.4852], null, "",
    []],
    // lake tahoe
    [28, 35, [-122.2364, 37.4852], [-120.1207, 39.2751], null, "We went skiing in Tahoe",
    [['/img/IMG_6064.JPG', ''], ['/img/IMG_6069.JPG', ''], ['/img/IMG_6073.JPG', '']]],
    [38, 45, [-120.1207, 39.2751], [-122.2364, 37.4852], null, "We went skiing in Tahoe", []],
    // pinnacles
    [65, 75, [-122.2364, 37.4852], [-121.1825, 36.4906], null, "We took a day trip to Pinnacles NP",
    [['/img/BNL_0007.JPG', ''], ['/img/BNL_0014.JPG', ''], ['/img/BNL_0020.JPG', ''], ['/img/BNL_0031.JPG', ''],
    ['/img/BNL_0033.JPG', ''], ['/img/BNL_0045.JPG', ''], ['/img/BNL_0056.JPG', ''], ['/img/BNL_0058.JPG', ''],
    ['/img/BNL_0060.JPG', ''], ['/img/BNL_0066.JPG', '']]],
    [75, 80, [-121.1825, 36.4906], [-122.2364, 37.4852], null, "We took a day trip to Pinnacles NP", []],
    // Hanging out in the bay area
    [80, 80.01, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "For the next few months, we hung out around the bay...",
    [['/img/IMG_6188.JPG', ''], ['/img/IMG_6214.JPG', ''], ['/img/IMG_6229.JPG', ''], ['/img/IMG_6250.JPG', ''],
    ['/img/IMG_6430.JPG', ''], ['/img/IMG_6558.JPG', ''], ['/img/IMG_6587.JPG', '']]],
    [80.01, 130, [-122.2364, 37.4852], [-122.2364, 37.4852], null, "For the next few months, we hung out around the bay...", []],
    // Lauren in San Diego for Laura Martin
    [130, 136, [-122.2364, 37.4852], [-117.1611, 32.7157], "#e23434", "Lauren went to San Diego for Laura Martin's bachelorette",
    [['/img/IMG_6496.JPG', ''], ['/img/IMG_6503.JPG', '']]],
    [138, 140, [-117.1611, 32.7157], [-122.2364, 37.4852], "#e23434", "Lauren went to San Diego for Laura Martin's bachelorette", []],
    // bridal shower
    [140, 142, [-122.2364, 37.4852], [-122.4286, 37.4636], "#e23434", "",
    [['/img/IMG_5079.jpg', ''], ['/img/IMG_5080.jpg', ''], ['/img/IMG_5083.jpg', ''], ['/img/IMG_5108.jpg', ''],
    ['/img/IMG_5113.jpg', ''], ['/img/IMG_5114.jpg', ''], ['/img/IMG_5121.jpg', ''], ['/img/IMG_5133.jpg', ''],
    ['/img/IMG_5140.jpg', ''], ['/img/IMG_5151.jpg', ''], ['/img/IMG_5166.jpg', ''], ['/img/IMG_5190.jpg', ''],
    ['/img/IMG_5202.jpg', ''], ['/img/IMG_5203.jpg', ''], ['/img/IMG_5208.jpg', ''], ['/img/IMG_5211.jpg', ''],
    ['/img/IMG_5212.jpg', ''], ['/img/IMG_5213.jpg', ''], ['/img/IMG_5219.jpg', ''], ['/img/IMG_5223.jpg', ''],
    ['/img/IMG_5225.jpg', ''], ['/img/IMG_5251.jpg', ''], ['/img/IMG_5256.jpg', ''], ['/img/IMG_5259.jpg', ''],
    ['/img/IMG_5261.jpg', ''], ['/img/IMG_6544.JPG', ''], ['/img/IMG_6548.JPG', ''], ['/img/IMG_6562.JPG', ''], ['/img/IMG_6563.JPG', '']]],
    [142, 144, [-122.4286, 37.4636], [-122.2364, 37.4852], "#e23434", "", []],
    // portland
    [144, 152, [-122.2364, 37.4852], [-122.6765, 45.5231], "#e23434", "Lauren's bachelorette party was in Portland, OR!",
    ['/img/IMG_6632.JPG', '/img/IMG_6640.JPG', '/img/IMG_6644.JPG', '/img/IMG_6654.JPG', '/img/IMG_6655.JPG', '/img/IMG_6657.JPG', '/img/IMG_6660.jpg',
    '/img/IMG_6668.JPG', '/img/IMG_6675.JPG', '/img/IMG_6680.JPG', '/img/IMG_6702.JPG', '/img/IMG_6708.JPG', '/img/IMG_6710.JPG', '/img/IMG_6746.JPG',
    '/img/IMG_6749.JPG', '/img/IMG_6750.JPG', '/img/IMG_6772.JPG', '/img/IMG_6775.JPG', '/img/IMG_6776.JPG', '/img/IMG_6777.JPG', '/img/IMG_6779.JPG',
    '/img/IMG_6780.JPG', '/img/IMG_6794.JPG', '/img/IMG_6817.JPG', '/img/IMG_6825.JPG']],
    [152, 154, [-122.6765, 45.5231], [-122.2364, 37.4852], "#e23434", "Lauren's bachelorette party was in Portland, OR!", []],
    // austin
    [154, 162, [-122.2364, 37.4852], [-97.7431, 30.2672], "#0e3374", "Brendan went down to Austin, TX for his bachelor party", []],
    [162, 164, [-97.7431, 30.2672], [-122.2364, 37.4852], "#0e3374", "Brendan went down to Austin, TX for his bachelor party", []],
    // Brendan in Japan
    [170, 175, [-122.2364, 37.4852], [135.5022, 34.6937], "#0e3374", "Brendan went to Japan for a business trip.", []],
    [175, 177, [135.5022, 34.6937], [139.6917, 35.6895], "#0e3374", "Bullet train to Tokyo!", []],
    [177, 180, [139.6917, 35.6895], [135.5022, 34.6937], "#0e3374", "Bullet train to Tokyo!", []],
    [180, 183, [135.5022, 34.6937], [-122.2364, 37.4852], "#0e3374", "", []],
    // LM Wedding in Ohio
    [185, 188, [-122.2364, 37.4852], [-81.6944, 41.4993], null, "Going to Ohio for Laura's wedding",
    ['/img/IMG_7034.JPG', '/img/IMG_7007.JPG', '/img/IMG_6989.JPG', '/img/MM_001.JPG', '/img/IMG_7018.JPG',
    '/img/IMG_7026.JPG', '/img/MM_002.JPG', ]],
    [188, 190, [-81.6944, 41.4993], [-122.2364, 37.4852], null, "Going to Ohio for Laura's wedding", []],
    // sonoma... wedding!
    [195, 202, [-122.2364, 37.4852], [-122.4580, 38.2919], null, "Headed to Sonoma for our big day!",
    ['11.JPG', '/img/13.JPG', '/img/19.JPG', '/img/2.JPG', '/img/22.JPG', '/img/27.JPG', '/img/32.JPG', '/img/35.JPG', '/img/39.JPG', '/img/4.JPG', '/img/40.JPG', '/img/41.JPG', '/img/55.JPG', '/img/7.JPG', '/img/8.JPG', '/img/0002.jpg', '/img/0004.jpg', '/img/0005.jpg', '/img/0006.jpg', '/img/0022.jpg', '/img/0029.jpg', '/img/0030.jpg', '/img/0031.jpg', '/img/0032.jpg', '/img/0033.jpg', '/img/0034.jpg', '/img/0035.jpg', '/img/0040.jpg', '/img/0060.jpg', '/img/0067.jpg', '/img/0070.jpg', '/img/0077.jpg', '/img/0084.jpg', '/img/0085.jpg', '/img/0087.jpg', '/img/0096.jpg', '/img/0098.jpg', '/img/0101.jpg', '/img/0105.jpg', '/img/0114.jpg', '/img/0149.jpg', '/img/0150.jpg', '/img/0155.jpg', '/img/0156rev.jpg', '/img/0158rev.jpg', '/img/0162.jpg', '/img/0166.jpg', '/img/0170.jpg', '/img/0175.jpg', '/img/0178.jpg', '/img/0181.jpg', '/img/0184.jpg', '/img/0188.jpg', '/img/0189.jpg', '/img/0196.jpg', '/img/0198.jpg', '/img/0201.jpg', '/img/0203.jpg', '/img/0206.jpg', '/img/0219.jpg', '/img/0222.jpg', '/img/0224.jpg', '/img/0225.jpg', '/img/0230.jpg', '/img/0240.jpg', '/img/0243.jpg', '/img/0248.jpg', '/img/0249.jpg', '/img/0252.jpg', '/img/0257.jpg', '/img/0266.jpg', '/img/0268.jpg', '/img/0272.jpg', '/img/0273.jpg', '/img/0277.jpg', '/img/0280.jpg', '/img/0282.jpg', '/img/0286.jpg', '/img/0295.jpg', '/img/0334.jpg', '/img/0339.jpg', '/img/0348.jpg', '/img/0360.jpg', '/img/0379.jpg', '/img/0396.jpg', '/img/0408.jpg', '/img/0426.jpg', '/img/0438.jpg', '/img/0456.jpg', '/img/0457.jpg', '/img/0475.jpg', '/img/0482.jpg', '/img/0484.jpg', '/img/0491.jpg', '/img/0492.jpg', '/img/0493.jpg', '/img/0495.jpg', '/img/0497.jpg', '/img/0503.jpg', '/img/0508.jpg', '/img/0511.jpg', '/img/0513.jpg', '/img/0517.jpg', '/img/0518.jpg', '/img/0519.jpg', '/img/0521.jpg', '/img/0523.jpg', '/img/0528.jpg', '/img/0529.jpg', '/img/0532.jpg', '/img/0582.jpg', '/img/0624.jpg', '/img/0631.jpg', '/img/0644.jpg', '/img/0659.jpg', '/img/0664.jpg', '/img/0668.jpg', '/img/0677.jpg', '/img/0681.jpg', '/img/0686.jpg', '/img/0688.jpg', '/img/0693.jpg', '/img/0694.jpg', '/img/0695.jpg', '/img/0697.jpg', '/img/0702.jpg', '/img/0704.jpg', '/img/0709.jpg', '/img/0714.jpg', '/img/0721.jpg', '/img/0722.jpg', '/img/0726.jpg', '/img/0728.jpg', '/img/0731rev.jpg', '/img/0734.jpg', '/img/0735.jpg', '/img/0743.jpg', '/img/0754.jpg', '/img/0763.jpg', '/img/0765.jpg', '/img/0766.jpg', '/img/0769.jpg', '/img/0772.jpg', '/img/0773.jpg', '/img/0774.jpg', '/img/0776.jpg', '/img/0777.jpg', '/img/0780.jpg', '/img/0781.jpg', '/img/0783.jpg', '/img/0785.jpg', '/img/0786.jpg', '/img/0788.jpg', '/img/0790rev.jpg', '/img/0794.jpg', '/img/0798.jpg', '/img/0800.jpg', '/img/0803.jpg', '/img/0814.jpg', '/img/0847.jpg', '/img/0851.jpg', '/img/0855.jpg']],
    [202, 203, [-122.4580, 38.2919], [-122.2364, 37.4852], null, "Headed to Sonoma for our big day!", []],
    // Ireland
    [203, 205, [-122.2364, 37.4852], [-6.2603, 53.3498], null, "Off for our Honeymoon... First stop is Ireland 🇮🇪", []],
    [205, 207, [-6.2603, 53.3498], [-9.4265, 52.9719], null, "Off for our Honeymoon... First stop is Ireland 🇮🇪", []],
    [207, 209, [-9.4265, 52.9719], [-9.5044, 52.0599], null, "Off for our Honeymoon... First stop is Ireland 🇮🇪", []],
    [209, 211, [-9.5044, 52.0599], [-6.2603, 53.3498], null, "Off for our Honeymoon... First stop is Ireland 🇮🇪", []],
    // Germany / Switzerland
    [211, 211.5, [-6.2603, 53.3498], [8.6821, 50.1109], null, "Next, we headed to Germany 🇩🇪", []],
    [211.5, 212, [8.6821, 50.1109], [7.7273, 50.1065], null, "Next, we headed to Germany 🇩🇪", []],
    [212, 213, [7.7273, 50.1065], [8.2285, 48.7656], null, "Next, we headed to Germany 🇩🇪", []],
    [216, 216.5, [8.2285, 48.7656], [9.6789, 47.5798], null, "Next, we headed to Germany 🇩🇪", []],
    [216.5, 217, [9.6789, 47.5798], [9.3767, 47.4245], null, "Bye-bye Germany. Hello Switzerland 🇨🇭", []],
    [217, 219, [9.3767, 47.4245], [9.3767, 47.4245], null, "Bye-bye Germany. Hello Switzerland 🇨🇭", []],
    [219, 220, [9.3767, 47.4245], [11.5820, 48.1351], null, "", []],
    // Sicily
    [220, 221, [11.5820, 48.1351], [15.2853, 37.8516], null, "We spent the final week of our honeymoon in Toarmina, Sicily 🇮🇹", []],
    [221, 227, [15.2853, 37.8516], [15.2853, 37.8516], null, "We spent the final week of our honeymoon in Toarmina, Sicily 🇮🇹", []],
    [227, 228, [15.2853, 37.8516], [-6.2603, 53.3498], null, "Headed back home 🇺🇸", []],
    [228, 230, [-6.2603, 53.3498], [-122.2364, 37.4852], null, "Headed back home 🇺🇸", []],
    // yosemite
    [240, 250, [-122.2364, 37.4852], [-119.5383, 37.8651], null, "We camped in Yosemite NP and climed Half Dome!",
    ['/img/BNL_Y0722.JPG', '/img/BNL_Y0015.JPG', '/img/BNL_Y0556.JPG', '/img/BNL_Y0681.JPG', '/img/BNL_Y0696.JPG', '/img/BNL_Y0711.JPG']],
    [250, 252, [-119.5383, 37.8651], [-122.2364, 37.4852], null, "We camped in Yosemite NP and climed Half Dome!", []],
    // big sur
    [320, 330, [-122.2364, 37.4852], [-121.412190, 36.013758], null, "We did a weekend camping trip in Big Sur and brought the dogs along!",
    []],
    [330, 335, [-121.412190, 36.013758], [-122.2364, 37.4852], null, "We did a weekend camping trip in Big Sur and brought the dogs along!", []],
]

const DAYS_IN_YEAR = 365

function buildTimeline (timelineDiv, totalWidth) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    timelineDiv.style.width = totalWidth + 'px'
    const divWidth = (totalWidth - (months.length + 1)) / months.length
    for (month of months) {
        // create month div element
        const monthDiv = document.createElement("div")
        monthDiv.style.width = divWidth + 'px'
        monthDiv.className = 'timeline-month'
        if (month !== months[0])
            monthDiv.style.marginLeft = -1 + 'px'
        monthDiv.innerText = month

        timelineDiv.appendChild(monthDiv)
    }
    // add events to the timeline as well
    for (let yearEvent of yearEvents) {
        const [startDay, endDay, origin, destination, color] = [yearEvent[0], yearEvent[1], yearEvent[2], yearEvent[3], yearEvent[4]]
        if (endDay <= 0 || (origin[0] === destination[0] && origin[1] === destination[1])) {
            // don't show events prior to the start of the year or events that start and end in the same location
            continue
        }
        console.log(origin + '  ' + destination)
        const eventTimelineDiv = document.createElement("div")
        eventTimelineDiv.className = 'timeline-event'
        eventTimelineDiv.style.width = ((endDay - Math.max(startDay, 0)) / DAYS_IN_YEAR * totalWidth) + 'px'
        if (color !== null) {
            // eventTimelineDiv.style.borderColor = color
            eventTimelineDiv.style.backgroundColor = color + '33'  // set alpha channel to 0.2
        }
        eventTimelineDiv.style.left = (Math.max(startDay, 0) / DAYS_IN_YEAR * totalWidth) + 'px'
        timelineDiv.appendChild(eventTimelineDiv)
    }
}

// magic constants... taken from http://www.tnoda.com/flightanimation
const mapWidth = 938
const mapHeight = 620

function setupWorldMap (fixedDiv) {
    const fullWidth = window.innerWidth

    const projection = d3.geo.mercator()
        .rotate([110, 0])
        .scale(150)
        .translate([mapWidth / 2, mapHeight / 1.5])

    const path = d3.geo.path()
        .projection(projection)

    const svg = d3.select("#map").append("svg")
        .attr("preserveAspectRatio", "xMidYMid")
        .attr("viewBox", "0 0 " + mapWidth + " " + mapHeight)
        .attr("width", fullWidth)
        .attr("height", fullWidth * mapHeight / mapWidth)

    svg.append("rect")
        .attr("class", "background")
        .attr("width", mapWidth)
        .attr("height", mapHeight)

    const g = svg.append("g")
    d3.json("./data/countries.topo.json", function(error, topo) {
        g.append("g")
            .attr("id", "countries")
            .selectAll("path")
            .data(topojson.feature(topo, topo.objects.countries).features)
            .enter()
            .append("path")
            .attr("id", (d) => d.id )
            .attr("d", path)
    })

    d3.json("./data/states.topo.json", function(error, topo) {
        g.append("g")
            .attr("id", "states")
            .selectAll("path")
            .data(topojson.feature(topo, topo.objects.states).features)
            .enter()
            .append("path")
            .attr("id", (d) => d.id )
            .attr("d", path)
    })

    const galleriesDiv = document.getElementById("galleries")

    let i = 0
    for (yearEvent of yearEvents) {
        // create SVG route
        const [origin, destination] = [yearEvent[2], yearEvent[3]]
        if (origin === null) {
            yearEvent.push(null)
            continue
        }
        const pathId = "travelpath" + i
        svg.append("path")
            .datum({type: "LineString", coordinates: [origin, destination]})
            .attr("class", "route")
            .attr("id", pathId)
            .attr("d", path)
        const routeDiv = document.getElementById(pathId)
        const strokeColor = yearEvent[4]
        if (strokeColor !== null) {
            routeDiv.style.stroke = strokeColor
        }
        const length = routeDiv.getTotalLength()
        routeDiv.style.strokeDasharray = length + ' ' + length
        routeDiv.style.strokeDashoffset = length

        // create text span
        const eventTextDiv = document.createElement("span")
        eventTextDiv.className = "event-text"
        eventTextDiv.innerHTML = yearEvent[5]
        fixedDiv.appendChild(eventTextDiv)

        // create location marker
        // add circles to svg
        const destinationId = "destination" + i
        svg.append("circle")
            .attr("cx", projection(destination)[0] )
            .attr("cy", projection(destination)[1] )
            .attr("class", "destination-marker")
            .attr("id", destinationId)
        const destinationMarkerCircle = document.getElementById(destinationId)

        // create images gallery
        let tooltipDiv = null
        if (yearEvent[6].length > 0) {
            // generate the gallery
            const galleryId = 'gallery' + i
            for (let imageData of yearEvent[6]) {
                let imageURL = imageData
                let imageTitle = null
                if (Array.isArray(imageData)) {
                    imageURL = imageData[0]
                    imageTitle = imageData[1]
                }
                const galleryImgA = document.createElement('a')
                imageURL = imageURL.startsWith('http') ? imageURL : (window.location.protocol + '//' + window.location.host + imageURL)
                galleryImgA.href = imageURL
                if (imageTitle !== null) {
                    galleryImgA.title = imageTitle
                }
                galleryImgA.className = galleryId
                galleriesDiv.appendChild(galleryImgA)
            }
            // create a tooltip to point to the active location
            tooltipDiv = document.createElement("div")
            tooltipDiv.className = 'tooltip'
            tooltipDiv.innerHTML = 'Click for photos &nbsp;➡'
            galleriesDiv.appendChild(tooltipDiv)
            // add event listeners to display the gallery
            const galleryListener = halkaBox.run(galleryId)(0)
            eventTextDiv.addEventListener('click', galleryListener)
            destinationMarkerCircle.addEventListener('click', galleryListener)
            tooltipDiv.addEventListener('click', galleryListener)
        }

        // store the route div and event text div elements at the end of the event array
        yearEvent.push({route: routeDiv, text: eventTextDiv, marker: destinationMarkerCircle, tooltip: tooltipDiv})

        // increment counter
        i += 1
    }

    return [projection, path, svg, g]
}

function registerListener (event, func, runImmediately=true) {
    window.addEventListener(event, func)
    if (runImmediately)
        func()
}

function updateTimelinePosition (timelineDiv, scrollPercent, timelineLength) {
    // start at 50% of the screen width, move left timelineLength pixels based on percent
    timelineDiv.style.left = ((window.innerWidth / 2) - (scrollPercent * timelineLength)) + 'px'
}

function updateRouteHighlights (scrollPercent) {
    // convert scroll percentage into a day number
    const dayNum = scrollPercent * DAYS_IN_YEAR
    for (let yearEvent of yearEvents) {
        const [startDay, endDay] = [yearEvent[0], yearEvent[1]]
        const route = yearEvent[yearEvent.length - 1].route
        if (route === null) continue
        const length = route.getTotalLength()
        // if (dayNum >= endDay) {
        //     // already got to the target length, so set this offset back to the full length
        //     route.style.strokeDashoffset = 0
        //     continue
        // }
        const percentCompleted = Math.min(Math.max((endDay - dayNum) / (endDay - startDay), -1), 1)  // clamp between [-1,1]
        // starts at (length) and goes to (0)
        route.style.strokeDashoffset = percentCompleted * length
    }
}

function updateEventText (scrollPercent) {
    // convert scroll percentage into a day number
    const dayNum = scrollPercent * DAYS_IN_YEAR
    let i = 0
    for (let yearEvent of yearEvents) {
        let [startDay, endDay] = [yearEvent[0], yearEvent[1]]
        const eventTextDiv = yearEvent[yearEvent.length - 1].text
        // find the end day for this text
        let j = 1
        while (i + j < yearEvents.length) {
            const evt = yearEvents[i + j]
            if (evt[evt.length - 1].text.innerText !== eventTextDiv.innerText) {
                break
            } else {
                endDay = evt[1]
            }
            j += 1
        }
        // display or hide the event text
        const prevEvent = yearEvents[i - 1]
        if (dayNum >= startDay && dayNum <= endDay && prevEvent[prevEvent.length - 1].text.innerText !== eventTextDiv.innerText) {
            eventTextDiv.className = 'event-text active'
        } else {
            eventTextDiv.className = 'event-text'
        }
        i += 1
    }
}

function updateDestinationMarker (scrollPercent) {
    // convert scroll percentage into a day number
    const dayNum = scrollPercent * DAYS_IN_YEAR
    let lastActive = null
    let lastTooltip = null
    for (let yearEvent of yearEvents) {
        const [startDay, endDay] = [yearEvent[0], yearEvent[1]]
        const destinationMarkerCircle = yearEvent[yearEvent.length - 1].marker
        const tooltipDiv = yearEvent[yearEvent.length - 1].tooltip
        if (dayNum >= endDay) {
            destinationMarkerCircle.classList = ['destination-marker active']
            lastActive = destinationMarkerCircle
            if (lastTooltip !== null) {
                // hide old tooltips
                lastTooltip.style.display = 'none'
            }
            lastTooltip = tooltipDiv
        } else {
            destinationMarkerCircle.classList = ['destination-marker']
            if (tooltipDiv !== null) {
                tooltipDiv.style.display = 'none'
            }
        }
    }
    if (lastActive !== null) {
        lastActive.classList = ['destination-marker active most-recent']
        if (lastTooltip !== null) {
            // set tooltip position
            const markerLocation = lastActive.getBoundingClientRect()
            lastTooltip.style.display = 'block'
            lastTooltip.style.left = (markerLocation.left + markerLocation.width / 2) + 'px'
            lastTooltip.style.top = (markerLocation.top + markerLocation.height / 2 - 38) + 'px'
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Remove "no-js" class from <html> tag
    document.body.parentNode.className = ''

    const scrollLength = 20000
    const initialTextHeight = 600
    const timelineLength = 5000
    const contentDiv = document.getElementById("content")
    const fixedDiv = document.getElementById("fixed")
    const timelineDiv = document.getElementById("timeline")
    const mapDiv = document.getElementById("map")
    let scrollPercent = 0

    // setup UI
    buildTimeline(timelineDiv, timelineLength)
    const [mapProjection, mapPath, mapSVG, mapG] = setupWorldMap(fixedDiv)
    document.getElementById("initial-text").style.height = initialTextHeight

    let renderInProgress = false
    const render = () => {
        // lock
        if (renderInProgress)
            return
        renderInProgress = true

        // do render
        scrollPercent = Math.min((window.pageYOffset - initialTextHeight) / scrollLength, 1)
        // fixedDiv.innerText = (scrollPercent * 100) + '%'
        updateTimelinePosition(timelineDiv, scrollPercent, timelineLength)
        updateRouteHighlights(scrollPercent)
        updateEventText(scrollPercent)
        updateDestinationMarker(scrollPercent)

        // unlock
        renderInProgress = false
    }
    registerListener('scroll', render)

    const updateContentDivHeight = () => {
        // update content div length
        contentDiv.style.height = (window.innerHeight + initialTextHeight + scrollLength) + 'px'
        // update map location
        const w = mapDiv.clientWidth
        const h = mapDiv.clientHeight
        const svgHeight = w * mapHeight / mapWidth
        mapSVG.attr("width", w)
        mapSVG.attr("height", svgHeight)
        mapSVG.attr("style", "margin-top: -" + ((svgHeight - h) / 2) + 'px')
        // re-render
        render()
    }
    registerListener('resize', updateContentDivHeight)

})
