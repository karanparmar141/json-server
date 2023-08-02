fetch("db.json")
.then(res => res.json())
.then(json => document.getElementById("stu").addEventListener("click",student_data=()=>{
    for(i=0;i<=4;i++){
        console.log(json.student[i].name)
        document.getElementById("output").innerHTML= `
        <tr>
            <td>${json.student[i].name}</td>
            <td>${json.student[i].course}</td>
        </tr>`
    }
}))