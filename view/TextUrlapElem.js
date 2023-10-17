class TextUrlapElem {

    #key = "";
    #leiro = {};
    #value="";
    #valid=true;
    constructor(key, leiro, formElem) {
        this.#leiro = leiro
        this.#key = key;
        this.formElem = formElem;
        this.#textElem();

        this.inputElem = $(`#${this.#key}`);
        this.validElem = $(".valid:last");
        this.invalidElem = $(".invalid:last");
        this.inputElem.on("keyup", ()=>{
            this.#value = this.inputElem.val();
            let reg = this.#leiro.regex;
            let regObj = new RegExp(reg);
            console.log(regObj.test(this.#value))
            if(regObj.test(this.#value)){
                this.#valid = true;
                this.validElem.removeClass("elrejt");
                this.invalidElem.addClass("elrejt");
            }else{
                this.#valid = false;
                this.validElem.addClass("elrejt");
                this.invalidElem.removeClass("elrejt");
            }
        });
    }

    get valid(){
        return this.#valid;
    }

    get value(){
        return this.#value;
    }

    get key(){
        return this.#key;
    }

    #textElem() {
        let txt = `
        <div class="mb-3 mt-3">
            <label for="${this.#key}" class="form-label">${this.#leiro.megjelenes}</label>
            <input type="${this.#leiro.tipus}" class="form-control" id="${this.#key}" 
            placeholder="${this.#leiro.placeholder}" name="${this.#key}" pattern="${this.#leiro.regex}"
            value="${this.#leiro.value}">
            <div class="valid elrejt">OK</div>
            <div class="invalid elrejt">${this.#leiro.validalas}</div>

        </div>`;
        this.formElem.append(txt);
    }


} export default TextUrlapElem