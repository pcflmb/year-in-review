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

function setupWorldMap () {
    const width = window.innerWidth
    const height = window.innerHeight

    const projection = d3.geo.mercator()
        .rotate([110, 0])
        .scale(150)
        .translate([width / 2, height / 1.5])

    const path = d3.geo.path()
        .projection(projection)

    const svg = d3.select("#map").append("svg")
        .attr("preserveAspectRatio", "xMidYMid")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("width", width)
        .attr("height", height * height / width)
        .on('mousemove', function() {
            console.log( projection.invert(d3.mouse(this)) ) // log the mouse x,y position
          })

    svg.append("rect")
        .attr("class", "background")
        .attr("width", width)
        .attr("height", height)

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

    const travelPaths = [
        [[105.33937239105569, 20.221407800283593], [106.37207659406327, 21.668126541782474]],  // hoi-an to hao-long bay
        [[106.37207659406327, 21.668126541782474], [104.82297366212714, 13.304406884573506]],  // hao-long bay to siam reap
        [[104.82297366212714, 13.304406884573506], [100.69201696782251, 17.288100262290484]],  // siam reap to chang mai
        [[100.69201696782251, 17.288100262290484], [101.20841569675106, 13.304406884573506]],  // chang mai to bangkok
        [[101.20841569675106, 13.304406884573506], [-121.27606663602425, 36.980209634819836]]  // bangkok to san francisco
    ]
    const routeIds = []
    for ([origin, destination] of travelPaths) {
        const pathId = "travelpath" + routeIds.length
        svg.append("path")
            .datum({type: "LineString", coordinates: [origin, destination]})
            .attr("class", "route")
            .attr("id", pathId)
            .attr("d", path)
        routeIds.push(pathId)
    }

    return [projection, path, svg, g, routeIds]
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

function updateRouteHighlights (orderedRoutes, scrollPercent, totalRouteLength) {
    let targetLength = scrollPercent * totalRouteLength
    for ([route, length] of orderedRoutes) {
        if (targetLength <= 0) {
            // already got to the target length, so set this offset back to the full length
            route.style.strokeDashoffset = length
            continue
        }
        route.style.strokeDashoffset = Math.max((length - targetLength), 0)
        targetLength -= length
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Remove "no-js" class from <html> tag
    document.body.parentNode.classList = []

    const scrollLength = 20000
    const timelineLength = 5000
    const contentDiv = document.getElementById("content")
    const fixedDiv = document.getElementById("fixed")
    const timelineDiv = document.getElementById("timeline")
    const mapDiv = document.getElementById("map")
    let scrollPercent = 0

    // setup UI
    buildTimeline(timelineDiv, timelineLength)
    const [mapProjection, mapPath, mapSVG, mapG, mapTravelRouteIds] = setupWorldMap()

    // collect the travel routes we want to animate
    const orderedRoutes = []
    let totalRouteLength = 0
    for (let routeId of mapTravelRouteIds) {
        const route = document.getElementById(routeId)
        const length = route.getTotalLength()
        orderedRoutes.push([route, length])
        totalRouteLength += length
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
        scrollPercent = window.pageYOffset / scrollLength
        fixedDiv.innerText = (scrollPercent * 100) + '%'
        updateTimelinePosition(timelineDiv, scrollPercent, timelineLength)
        updateRouteHighlights(orderedRoutes, scrollPercent, totalRouteLength)

        // unlock
        renderInProgress = false
    }
    registerListener('scroll', render)

    const updateContentDivHeight = () => {
        contentDiv.style.height = (window.innerHeight + scrollLength) + 'px'
        const w = mapDiv.clientWidth
        mapSVG.attr("width", w)
        mapSVG.attr("height", w * window.innerHeight / window.innerWidth)
        render()
    }
    registerListener('resize', updateContentDivHeight)

})
