app.factory('sheetFactory', [function(){
    return {
        create: function(){
            return {
                attrs: {
                    forca : 1,
                    destreza: 1, 
                    vigor: 1,
                    carisma: 1,
                    manipulacao: 1,
                    aparencia: 1,
                    percepcao: 1,
                    inteligencia: 1,
                    raciocinio: 1
                },
                virt: {
                    conscienciaConviccao: 1,
                    autoControleInstinto: 1,
                    coragem: 1
                },
                disciplinas: [],
                antecedentes: [],
                outrasCaracteristicas: ["", "", "", "", ""],
                caminho: {
                    info:{
                        conscienciaConviccao: 'Consciencia/Conviccao',
                        autocontroleInstinto: 'Auto Controle/Instinto',
                        nome: ""
                    },
                    level: 0
                },
                armas:[
                    {}, {}, {}
                ],
                geracao: 12
            }
        }
    }
}]);