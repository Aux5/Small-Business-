
const Employess = [
        {
            employeeID:1,
            name1: "Jordan"
        },
        {
            employeeID:2,
            name1: "Austin"
        },
        {
            employeeID:3,
            name1: "Jen"
        },
        {
            employeeID:4,
            name1: "Jack-Bob"
        }
    
    ]

const departments = [
        {
            departmentID:1,
            name:"'Human' Management"
        },
        {
            deparmentID:2,
            name:"Abduction"
        },
        {
            deparmentID:3,
            name:"Ransom Coordination"
        },
        {
            departmentID:4,
            name:"Trafficking Services"
        }
    ]

const computers = [
        {
            computerID:1,
            name:"Hackerx1z"
        },
        {
            computerID:2,
            name:"Alpha Zeta 5"
        },
        {
            computerID:3,
            name: "HackinTosh"
        },
        {
            computerID:4,
            name: "Retr0"
        }
    ]



const jobs = [
        {
            employeeID:1,
            departmentID:1,
            computerID:1
        },
        {
            employeeID:2,
            departmentID:2,
            computerID:2
        },
        {
            employeeID:3,
            departmentID:3,
            computerID:3
        },
        {
            employeeID:4,
            departmentID:4,
            computerID:4
        }
    ]

    const $jsect = $("<section>")
    $jsect.addClass("jobs")
    $jsect.attr("id", "jobs")
    $jsect.appendTo("#business")
    jobs.forEach(element =>{


        const $jh1 = $("<h1>")
        $jh1.text(element.employeeID)
        $jh1.addClass("employeeName")
        $jh1.appendTo("#jobs")


        const $jsect2 = $("<section>")
        $jsect2.text(`Works in the ${element["departmentID"]} department with the computer - ${element["computerID"]}`)
        $jsect2.addClass("job__description")
        $jsect2.appendTo("#jobs")
    }

)