const HANDSIGNS = [
    {
        name: "a",
        img: "img/a.png"
    },
    {
        name: "b",
        img: "img/b.png"
    },
    {
        name: "c",
        img: "img/c.png"
    },
    {
        name: "d",
        img: "img/d.png"
    },
    {
        name: "e",
        img: "img/e.png"
    },
    {
        name: "f",
        img: "img/f.png"
    },
    {
        id: 7,
        name: "g",
        img: "img/g.png"
    },
    {
        name: "h",
        img: "img/h.png"
    },
    {
        name: "i",
        img: "img/i.png"
    },
    {
        name: "j",
        img: "img/j.png"
    },
    {
        name: "k",
        img: "img/k.png"
    },
    {
        name: "l",
        img: "img/l.png"
    },
    {
        name: "m",
        img: "img/m.png"
    },
    {
        name: "n",
        img: "img/n.png"
    },
    {
        name: "o",
        img: "img/o.png"
    },
    {
        name: "p",
        img: "img/p.png"
    },
    {
        name: "q",
        img: "img/q.png"
    },
    {
        name: "r",
        img: "img/r.png"
    },
    {
        name: "s",
        img: "img/s.png"
    },
    {
        name: "t",
        img: "img/t.png"
    },
    {
        name: "u",
        img: "img/u.png"
    },
    {
        name: "v",
        img: "img/v.png"
    },
    {
        name: "w",
        img: "img/w.png"
    },
    {
        name: "x",
        img: "img/x.png"
    },
    {
        name: "y",
        img: "img/y.png"
    },
    {
        name: "z",
        img: "img/z.png"
    }
    
]
    
const TranslationSummary = ({ text }) => {

    let newtext = text.toLowerCase().replaceAll(" ", "").replace(/[^a-z]/g, "").split("")
    let letterArray = []

    for(let i=0; i<newtext.length; i++){
        let result = HANDSIGNS.find((alphabet) => alphabet.name === newtext[i])
        letterArray.push(result)
    }

    return (
        <>
            <span>
                {letterArray.map((element) => (
                    <img src={element.img} alt={element.name} className="sign-img"/>
                ))}
            </span>
        </>
    )
}

export default TranslationSummary