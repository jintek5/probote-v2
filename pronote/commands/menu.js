async function getMenu() {
    let { session } = require('../../config');
    const menu = await session.menu();

    return menu;
}

async function runDiscord() {
    menu = await getMenu();

    if (menu[0] !== undefined) {
        msg = {
            useEmbed: true,
            embed: {
                title: 'Menu de la cantine',
                timestamp: menu[0].date,
                fields: []
            }
        }
    
        menu[0].meals[0].forEach(function(item){
            let listItems = '';
            item.forEach(function(mealItem){
                listItems += mealItem.name + '\n';
            });
    
            msg.embed.fields.push({
                name: '** **',
                value: listItems
            });
        });

        return msg;
    }

    else {
        return {
            useEmbed: false,
            content: 'Aucun menu pour la période demandée.'
        }
    }
}

module.exports = {
    name: "Menu",
    desc: "Envoie le menu de la cantine du jour.",
    usage: "menu",
    runDiscord
}