export const funnyEmojis=["😂","🤣","😜","😝","😛","😎","🤪","🤩","😹","🙈","🙉","🙊","👻","💩","😺","🙃","😏","😶‍🌫️","🦄","🌈","🍕","🍔","🍟","🎉","🕺"]

export const getEmoji=()=>{
    return funnyEmojis[Math.floor(Math.random()*funnyEmojis.length)]
}