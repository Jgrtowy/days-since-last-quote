import './style.css'
import axios from 'axios'

(async ()=>{
  const request:any = await axios.get('https://api.saintkappa.xyz/moses/quotes?sort=desc&limit=1')
  
  const lastQuote:any = await request.data.content[0];
  const lastDate:any = new Date(lastQuote.date)
  const now:any = new Date();
  const parsedQuote:string = lastQuote.quote.replace(/\\/g, '');
  const days = () =>{
    if(lastDate.getDay()<10){
      return `0${lastDate.getDate()}`
    }else{
      return `${lastDate.getDate()}`
    }
  }
  const daysSince = () => {
    const yes:number = now.getTime()-lastDate.getTime()
    return Math.floor(yes/1000/60/60/24)
  }

  const months = () =>{
    switch(lastDate.getMonth()){
      case 0: return "January"
      case 1: return "February"
      case 2: return "March"
      case 3: return "April"
      case 4: return "May"
      case 5: return "June"
      case 6: return "July"
      case 7: return "August"
      case 8: return "September"
      case 9: return "October"
      case 10: return "November"
      case 11: return "December"
    }
  }
  (document.querySelector("#lastQuoteDate") as HTMLElement).innerText = `${days()} ${months()} ${lastDate.getFullYear()}`;
  (document.querySelector("#days") as HTMLElement).innerText = `${daysSince()}`;
  (document.querySelector("#lastQuote") as HTMLElement).innerText = `${parsedQuote}`;
})()