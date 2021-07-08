function tabuar() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');
    tab.innerHTML = '';

    if(num.value.length == 0){
        window.alert('Expecting data');
    }else{
        let n = Number(num.value);
        for(let i = 0; i <= 10; i++){
            let item = document.createElement('option');
            item.text = `${n} x ${i} = ${n*i}`;
            item.value = `tab${i}`;
            tab.appendChild(item);
        }
    }
    
}
