const yearEvents = [
    // each event will be represented by an array with the following order:
    // [start_day, end_day, start_lat_lon, end_lat_lon, path_color, text, photos_lat_lon, photos_url_list]
    [-10, -3, [105.33937239105569, 20.221407800283593], [106.37207659406327, 21.668126541782474]],  // hoi-an to hao-long bay
    [-3, 1, [106.37207659406327, 21.668126541782474], [104.82297366212714, 13.304406884573506]],  // hao-long bay to siam reap
    [1, 5, [104.82297366212714, 13.304406884573506], [100.69201696782251, 17.288100262290484]],  // siam reap to chang mai
    [5, 10, [100.69201696782251, 17.288100262290484], [101.20841569675106, 13.304406884573506]],  // chang mai to bangkok
    [10, 14, [101.20841569675106, 13.304406884573506], [-121.27606663602425, 36.980209634819836]]  // bangkok to san francisco
    // lake tahoe
    // pinnacles
    // portland
    // austin
    // sonoma
    // europe!!!
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
        monthDiv.classList = ['timeline-month']
        if (month !== months[0])
            monthDiv.style.marginLeft = -1 + 'px'
        monthDiv.innerText = month

        timelineDiv.appendChild(monthDiv)
    }
}

// magic constants... taken from http://www.tnoda.com/flightanimation
const mapWidth = 938
const mapHeight = 620

function setupWorldMap () {
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
            console.log( projection.invert(d3.mouse(this)) ) // log the mouse x,y position
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
        yearEvent.push(document.getElementById(pathId))
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
        const route = yearEvent[yearEvent.length - 1]
        if (route === null) continue
        const length = route.getTotalLength()
        if (dayNum >= endDay) {
            // already got to the target length, so set this offset back to the full length
            route.style.strokeDashoffset = 0
            continue
        }
        const percentCompleted = Math.max((dayNum - startDay) / (endDay - startDay), 0)
        // starts at (length) and goes to (0)
        route.style.strokeDashoffset = (1 - percentCompleted) * length
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Remove "no-js" class from <html> tag
    document.body.parentNode.classList = []

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
    const [mapProjection, mapPath, mapSVG, mapG] = setupWorldMap()
    document.getElementById("initial-text").style.height = initialTextHeight

    // collect the travel routes we want to animate
    for (let yearEvent of yearEvents) {
        const route = yearEvent[yearEvent.length - 1]
        if (route === null) continue
        const length = route.getTotalLength()
        // setup the style for the path so it's empty
        route.style.strokeDasharray = length + ' ' + length
        route.style.strokeDashoffset = length
    }

    let renderInProgress = false
    const render = () => {
        // lock
        if (renderInProgress)
            return
        renderInProgress = true

        // do render
        scrollPercent = Math.min((window.pageYOffset - initialTextHeight) / scrollLength, 1)
        fixedDiv.innerText = (scrollPercent * 100) + '%'
        updateTimelinePosition(timelineDiv, scrollPercent, timelineLength)
        updateRouteHighlights(scrollPercent)

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
