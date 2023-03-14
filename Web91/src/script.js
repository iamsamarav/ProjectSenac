const body = document.querySelector("body")
const main = document.querySelector("main");
const buttonHome = document.getElementById("home");

class alteracoesMain {
  constructor(main) {
    this.main = main;
  }

  btnHome() {
        const imgHome = document.createElement('img')
        const divHome = document.createElement('div')
        imgHome.setAttribute('src','assets\\encadernador 1.png')
        divHome.setAttribute('id', 'divHome')
        this.main.style.display = "flex";
        this.main.style.alignItems = "center"
        this.main.style.justifyContent = "center"
        this.main.append(imgHome);
        this.main.append(divHome)
  }
}

const objeto = new alteracoesMain(main)

buttonHome.addEventListener('click', () => {
    if (!main.hasChildNodes) {
        
    }
    objeto.btnHome()
})
