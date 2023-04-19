window.addEventListener("DOMContentLoaded", ()=>{
  
  
  class MenuCard{
    constructor(src,alt,text,title,subtitle,parentSelector, ...classes){
      this.src=src;
      this.alt=alt;
      this.text=text;
      this.title=title;
      this.subtitle=subtitle;
      this.parent=document.querySelector(parentSelector);
      this.classes=classes;
    }
    render(){
      const element= document.createElement("div");
      if(this.classes ==0){
        this.classes="articles__item";
        element.classList.add(this.classes)
      }else{
        this.classes.forEach(classname => element.classList.add(classname));
      }
      element.innerHTML=`

      <div class="articles__item--info">
      <img class="articles__items--img" src=${this.src} alt=${this.alt}>
      <span class="subtitle">${this.text}</span>
      <h3 class="articles__heading">${this.title}s</h3>
      <p class="articles__text">${this.subtitle}</p>
      </div>
      `
      this.parent.append(element);
    }
  }
  new MenuCard(
    "img/dollar.png" ,"Receive money" , "By Claire Robinson" ,"Receive money in any currency with no fees","The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …" , ".articles .container .articles__items"
    ).render();
    new MenuCard(
      "img/men.png" ,"Receive money" , "By Claire Robinson" ,"Treat yourself without worrying about money","Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …" , ".articles .container .articles__items","articles__item"
      ).render();
      new MenuCard(
        "/img/airplane.png" ,"Receive money" , "By Claire Robinson" ,"Take your Easybank card wherever you go","We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …" , ".articles .container .articles__items","articles__item"
        ).render();
        new MenuCard(
          "/img/blue.png" ,"Receive money" , "By Claire Robinson" ,"Our invite-only Beta accounts are now live!o","After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..." , ".articles .container .articles__items","articles__item"
          ).render();

    
    
    
    
    
    
    
  });
  