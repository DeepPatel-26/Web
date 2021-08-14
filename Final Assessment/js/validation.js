class Valid {
    constructor(Fld, V) {
        this.Fld = Fld;
        this.V = V;
        this.INv = [];
    }
    ValidError(IV) 
    {
        document.createElement('div').appendChild(document.createTextNode(`Please enter a valid ${IV.toUpperCase()}`));
        setTimeout(() => document.body.removeChild(document.createElement('div')), 3000);
    }
    validate() 
    {
        for (const len in this.V) {
            if (Object.hasOwnProperty().call(this.V, len)) 
            {
                const num = this.V[len];
                if (!this[num.type](len, num)) 
                {
                    this.INv.push(len);
                    this.ValidError(len);
                }
            }
        }
        return this.INv.length == 0;
    }
    regex(len, num) {
        return this.Fld[len].toString().match(num.pattern);
    }
}