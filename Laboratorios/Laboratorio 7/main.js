// JavaScript Document
let carnet_field=document.querySelector("#carnet_field")
let schedule_dropdown=document.querySelector("#schedule_field")
let late_switch = document.querySelector("#late_switch")
let submit_btn = document.querySelector("#submit_btn")

let table_body = document.querySelector("#table_body")
let carnet_regex= new RegExp('[0-9]{8}')

let addStudent = (carnet,schedule,late) => {
	let new_row = document.createElement("tr")
	let datetime = new date()
	
	new_row.className= "table_active"
	new_row.innerHTML =` <th scope= 'row'>${carnet}</th>
	<td> ${schedule}</td>
	<td> ${datetime.toLocaleString()}</td>
	<td> ${late}</td>
`
	table_body.appendChild(new_row)
}

let parseLateSwitch= (value) => {
	if(value){
		return "tarde"
	}
	return "a Tiempo"
}

submit_btn.addEventListener("click",()=>{
	let carnet = carnet_field.value
	let schedule = schedule_dropdown.options[schedule_dropdown.selectedIndex].text
	let late= parseLateSwitch(late_switch.checked)
	if(carnet_regex.test(carnet))
		addStudent(carnet,schedule,late)
	else
		alert("Formato de carnet no valido")
		
})

carnet_field.addEventListener("keyup",(event)=>{
	let keycode=event.keyCode
	let carnet = carnet_field.value
	
	if(keycode == 13){
		submit_btn.click()
	}
	if(carnet_regex.test(carnet)){
		submit_btn.disable = false;
	} else {
		submit_btn.disale = true;
	}
})