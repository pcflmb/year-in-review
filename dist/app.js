const yearEvents = [
    // each event will be represented by an array with the following order:
    // [start_day, end_day, start_lat_lon, end_lat_lon, path_color, text, photos_url_list]

    // start in hoi-an
    [-100, -100, [105.33937239105569, 20.221407800283593], [105.33937239105569, 20.221407800283593], null, "",
    [['/img/BNL_2353.JPG', ''], ['/img/BNL_2411.JPG', ''], ['/img/BNL_2426.JPG', '']]],
    // hoi-an to hao-long bay
    [-10, -4, [105.33937239105569, 20.221407800283593], [106.37207659406327, 21.668126541782474], null, "hoi-an to hao-long",
    [['/img/BNL_2518.JPG', ''], ['/img/BNL_2504.JPG', ''], ['/img/BNL_2506.JPG', ''], ['/img/BNL_2524.JPG', ''], ['/img/BNL_2534.JPG', '']]],
    // hao-long bay to siam reap
    [-4, 1, [106.37207659406327, 21.668126541782474], [104.82297366212714, 13.304406884573506], null, "hao-long bay to siam reap",
    [['/img/BNL_0003.JPG', ''], ['/img/BNL_0024.JPG', ''], ['/img/BNL_0086.JPG', ''], ['/img/BNL_0109.JPG', ''], ['/img/BNL_0123.JPG', ''], ['/img/BNL_0129.JPG', ''], ['/img/BNL_0160.JPG', '']]],
    // siam reap to chang mai
    [1, 5, [104.82297366212714, 13.304406884573506], [100.69201696782251, 17.288100262290484], null, "siam reap to chang mai",
    [['/img/BNL_0206.JPG', ''], ['/img/BNL_0230.JPG', ''], ['/img/DSC_0950.JPG', ''], ['/img/DSC_0953.JPG', ''], ['/img/DSC_0980.JPG', ''], ['/img/DSC_0982.JPG', ''],
    ['/img/DSC_0985.JPG', ''], ['/img/DSC_1029.JPG', ''], ['/img/DSC_1030.JPG', ''], ['/img/DSC_1056.JPG', ''], ['/img/DSC_1076.JPG', ''], ['/img/DSC_1258.JPG', ''],
    ['/img/DSC_1376.JPG', ''], ['/img/DSC_1389.JPG', ''], ['/img/DSC_1446.JPG', ''], ['/img/DSC_1502.JPG', ''], ['/img/DSC_1594.JPG', '']]],
    // chang mai to bangkok
    [5, 10, [100.69201696782251, 17.288100262290484], [101.20841569675106, 13.304406884573506], null, "chang mai to bangkok",
    [['/img/BNL_0248.JPG', ''], ['/img/BNL_0275.JPG', ''], ['/img/BNL_0292.JPG', 'Sneaky photo of the Jade Buddah'], ['/img/BNL_0303.JPG', '']]],
    // bangkok to san francisco 
    [10, 14, [101.20841569675106, 13.304406884573506], [-122.2364, 37.4852], null, "bangkok to san francisco",
    []],
    // rwc -> lake tahoe and back
    [28, 35, [-122.2364, 37.4852], [-120.1207, 39.2751], null, "headed to lake tahoe",
    []],
    [38, 45, [-120.1207, 39.2751], [-122.2364, 37.4852], null, "", []],
    // pinnacles
    // Lauren in San Diego for Laura Martin
    [130, 136, [-122.2364, 37.4852], [-117.1611, 32.7157], "#e23434", "Lauren heads to San Diego for Laura Martin's Bachelorette", []],
    [138, 140, [-117.1611, 32.7157], [-122.2364, 37.4852], "#e23434", "", []],
    // bridal shower
    [140, 142, [-122.2364, 37.4852], [-122.4286, 37.4636], "#e23434", "", []],
    [142, 144, [-122.4286, 37.4636], [-122.2364, 37.4852], "#e23434", "", []],
    // portland
    [144, 152, [-122.2364, 37.4852], [-122.6765, 45.5231], "#e23434", "Lauren goes to portland for her bachelorette party!", []],
    [152, 154, [-122.6765, 45.5231], [-122.2364, 37.4852], "#e23434", "", []],
    // austin
    [154, 162, [-122.2364, 37.4852], [-97.7431, 30.2672], "#0e3374", "Brendan went down to Austin, TX for his bachelor party", []],
    [162, 164, [-97.7431, 30.2672], [-122.2364, 37.4852], "#0e3374", "", []],
    // Brendan in Japan
    [170, 175, [-122.2364, 37.4852], [135.5022, 34.6937], "#0e3374", "Brendan went to Japan for a business trip.", []],
    [175, 177, [135.5022, 34.6937], [139.6917, 35.6895], "#0e3374", "Down to Tokyo on the bullet train!", []],
    [177, 180, [139.6917, 35.6895], [135.5022, 34.6937], "#0e3374", "", []],
    [180, 183, [135.5022, 34.6937], [-122.2364, 37.4852], "#0e3374", "", []],
    // LM Wedding in Ohio
    [195, 202, [-122.2364, 37.4852], [-81.6944, 41.4993], null, "Going to Ohio!", []],
    [202, 203, [-81.6944, 41.4993], [-122.2364, 37.4852], null, "", []],
    // sonoma... wedding!
    [195, 202, [-122.2364, 37.4852], [-122.4580, 38.2919], null, "Headed to Sonoma for our Wedding!", []],
    [202, 203, [-122.4580, 38.2919], [-122.2364, 37.4852], null, "", []],
    // Ireland
    [203, 205, [-122.2364, 37.4852], [-6.2603, 53.3498], null, "Off for our Honeymoon... First stop is Ireland 🇮🇪", []],
    [205, 207, [-6.2603, 53.3498], [-9.4265, 52.9719], null, "", []],
    [207, 209, [-9.4265, 52.9719], [-9.5044, 52.0599], null, "", []],
    [209, 211, [-9.5044, 52.0599], [-6.2603, 53.3498], null, "", []],
    // Germany / Switzerland
    [211, 211.5, [-6.2603, 53.3498], [8.6821, 50.1109], null, "How headed to Germany 🇩🇪", []],
    [211.5, 212, [8.6821, 50.1109], [7.7273, 50.1065], null, "", []],
    [212, 213, [7.7273, 50.1065], [8.2285, 48.7656], null, "Go to Baden-Baden", []],
    [216, 216.5, [8.2285, 48.7656], [9.6789, 47.5798], null, "Drive to Lake Constance", []],
    [216.5, 217, [9.6789, 47.5798], [9.3767, 47.4245], null, "Bye-bye Germany. Hello Switzerland 🇨🇭", []],
    [219, 220, [9.3767, 47.4245], [11.5820, 48.1351], null, "", []],
    // Sicily
    [220, 221, [11.5820, 48.1351], [15.2853, 37.8516], null, "We spent the final week of our honeymoon in Toarmina 🇮🇹", []],
    [227, 228, [15.2853, 37.8516], [-6.2603, 53.3498], null, "Quick pit stop back in Dublin", []],
    [228, 230, [-6.2603, 53.3498], [-122.2364, 37.4852], null, "Headed back home 🇺🇸", []],
    // yosemite
    // big sur
]

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
        .on('mousemove', function() {
            // console.log( projection.invert(d3.mouse(this)) ) // log the mouse x,y position
          })

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
            // .attr("r", "5px")
            .attr("class", "destination-marker")
            .attr("id", destinationId)
        const destinationMarkerCircle = document.getElementById(destinationId)

        // create images gallery
        if (yearEvent[6].length > 0) {
            const galleriesDiv = document.getElementById("galleries")
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
            const galleryListener = halkaBox.run(galleryId)(0)
            eventTextDiv.addEventListener('click', galleryListener)
            destinationMarkerCircle.addEventListener('click', galleryListener)
        }

        // store the route div and event text div elements at the end of the event array
        yearEvent.push({route: routeDiv, text: eventTextDiv, marker: destinationMarkerCircle})

        // increment counter
        i += 1
    }

    return [projection, path, svg, g]
}

function zoomMap(g, xyz) {
    g.transition()
        .duration(750)
        .attr("transform", "translate(" + projection.translate() + ")scale(" + xyz[2] + ")translate(-" + xyz[0] + ",-" + xyz[1] + ")")
        .selectAll(["#countries", "#states"])
        .style("stroke-width", 1.0 / xyz[2] + "px")
}

function getXYZ(path, d) {
    const bounds = path.bounds(d)
    const w_scale = (bounds[1][0] - bounds[0][0]) / window.innerWidth
    const h_scale = (bounds[1][1] - bounds[0][1]) / window.innerHeight
    const z = .96 / Math.max(w_scale, h_scale)
    const x = (bounds[1][0] + bounds[0][0]) / 2
    const y = (bounds[1][1] + bounds[0][1]) / 2 + (window.innerHeight / z / 6)
    return [x, y, z]
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
    const dayNum = scrollPercent * 365
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
    const dayNum = scrollPercent * 365
    for (let yearEvent of yearEvents) {
        const [startDay, endDay] = [yearEvent[0], yearEvent[1]]
        const eventTextDiv = yearEvent[yearEvent.length - 1].text
        if (dayNum >= startDay && dayNum <= endDay) {
            eventTextDiv.className = 'event-text active'
        } else {
            eventTextDiv.className = 'event-text'
        }
    }
}

function updateDestinationMarker (scrollPercent) {
    // convert scroll percentage into a day number
    const dayNum = scrollPercent * 365
    let lastActive = null
    for (let yearEvent of yearEvents) {
        const [startDay, endDay] = [yearEvent[0], yearEvent[1]]
        const destinationMarkerCircle = yearEvent[yearEvent.length - 1].marker
        if (dayNum >= endDay) {
            destinationMarkerCircle.classList = ['destination-marker active']
            lastActive = destinationMarkerCircle
        } else {
            destinationMarkerCircle.classList = ['destination-marker']
        }
    }
    if (lastActive !== null) {
        lastActive.classList = ['destination-marker active most-recent']
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
