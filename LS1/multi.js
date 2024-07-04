const PT1 = () => { 
    let input = +prompt("Vui lòng nhập số");
    return console.log(`kêt quả là ${input**2}`);
}
const PT2 = () => {
    let inPutStr = prompt("Nhập chuỗi");
    let inPutKeyword = prompt ("nhập key word");
    return console.log(inPutStr.includes(inPutKeyword));
}
const PT3 = () => {
    let inPutArr= prompt("Nhập mảng").split(',');
    let inPutTienTo = prompt ("nhập tiền tố") + ": " ;
    let newArr = inPutArr.map(item => inPutTienTo + item)
    console.log(newArr)
}
const PT4 = () => {
    let inPutArr= prompt("Nhập mảng").split(',');
    let newArr = inPutArr.map(item => item*2)
    console.log(newArr)
}

const PT5 = () => {
    let inPutArr= prompt("Nhập mảng").split(',');
    let newArr = inPutArr.filter(item => item % 2 === 1)
    console.log(newArr)
}

const PT6 = () => {
    const employees = [
        { id: 1, name: "John", workingDays: 22 },
        { id: 2, name: "Jane", workingDays: 20 },
        { id: 3, name: "Mark", workingDays: 25 },
    ];

    let totalWorkingDay = 0
    for(let i = 0; i < employees.length;i++){
        totalWorkingDay = totalWorkingDay + employees[i].workingDays
    }
    
    return  alert ("Tổng số ngày công là: "+totalWorkingDay)    
}

const PT7 = () => {
    const employees = [
        { id: 1, name: "John", salary: 2000 },
        { id: 2, name: "Jane", salary: 2500 },
        { id: 3, name: "Mark", salary: 2000 },
    ];

    var Max = {}
    for(let i = 0; i < employees.length -1;i++){
        if(employees[i].salary > employees[i+1].salary){
            Max = {...employees[i]}
        }else {
            Max = {...employees[i+1]}
        }
    }
    
    return console.log(Max)
      
}

const PT8 = () => {
    const employees = [
        { id: 1, name: "John", workingDays: 22, lateDays: 2 },
        { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
        { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
    ];
    

    var Max = {}
    for(let i = 0; i < employees.length -1;i++){
        if(employees[i].workingDays - employees[i].lateDays > employees[i+1].workingDays - employees[i+1].lateDays){
            Max ={...employees[i]}
        }else {
            Max = {...employees[i+1]}
        }
    }
    
    return console.log(Max)
      
}

const PT9 = () => {
    const employees = [
        { id: 1, name: "John", salary: 2000 },
        { id: 2, name: "Jane", salary: 2500 },
        { id: 3, name: "Mark", salary: 3000 },
        { id: 4, name: "John", salary: 2200 },
    ];
    
    var OP ={}
    

   
    
    return console.log(Max)
      
}

function toggleDropdown() {
    var dropdownForm = document.getElementById("dropdownForm");
    // Kiểm tra nếu đang ẩn thì hiển thị và ngược lại
    dropdownForm.style.display === "none" ? dropdownForm.style.display = "block" : dropdownForm.style.display = "none";
  }

