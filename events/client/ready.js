module.exports = {
    name: "ready",
    once: true,
    execute(client, message) {
        console.log("Prêt pour être utilisé 😉 !");
        client.channels.cache.find(channel => channel.id === '939171574358106203').send('Je suis ON!');

     client.application.commands.set(client.commands.map(cmd => cmd));   
    },
};