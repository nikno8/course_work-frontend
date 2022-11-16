"use strict"

function truncate(str, maxlength)
{
    maxlength=Number(maxlength);
    if (str.length > maxlength){
        str = str.slice(0, maxlength-3) + "...";
    }
    return str;
}

let elements  = document.querySelectorAll(".year_descr");

for (let i = 0; i < elements.length; i++) {
    elements[i].textContent = truncate(elements[i].textContent, 300);
  }
