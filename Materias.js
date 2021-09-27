var dia = prompt("Ingresa El Dia");

switch(dia){
    case "lunes":
        var aula1121is = {
            "Horario": "Lunes",
            "7-9":"Quimica",
            "9-11": "Matematicas Discretas",
            "11-12": "Algebra",
            "12-14": "Algoritmos",
        
                "Profres":{
                    "Quimica": "Daniel Campos",
                    "Matematicas Discretas": "Maria Del Carmen",
                    "Algebra": "Daniel Rosales",
                    "Algoritmos": "Emmanuel Torres"
        
                }
        }
        console.log(aula1121is);
        break;
    
        case "martes":
            var aula1121is = {
                "Horario": "Martes",
                "7-9":"Ingles",
                "9-11": "Quimica",
                "11-12": "EOE",
                "12-14": "Fundamentos de Computacion",
            
                    "Profres":{
                        "Ingles": "Maria Martha",
                        "Quimica": "Daniel Campos",
                        "EOE": "Wendy Alejandra",
                        "Fundamentos": "Refugio Bernal"
            
                    }
            }
            console.log(aula1121is);
            break;
            case "miercoles":
                var aula1121is = {
                    "Horario": "Miercoles",
                    "7-9":"Ingles",
                    "9-11": "Algebra Lineal",
                    "11-12": "EOE",
                    "12-14": "Algoritmos",
                
                        "Profres":{
                            "Ingles": "Maria Martha",
                            "Algebra": "Daniel Rosales",
                            "EOE": "Wendy Alejandra",
                            "Fundamentos": "Emmanuel Torres"
                
                        }
                }
                console.log(aula1121is);
                break;
                case "jueves":
                    var aula1121is = {
                        "Horario": "Jueves",
                        "7-9":"Ingles",
                        "9-11": "Algebra lineal",
                        "11-12": "Algoritmos",
                        "12-14": "Fundamentos de Computacion",
                    
                            "Profres":{
                                "Ingles": "Maria Martha",
                                "Algebra": "Daniel Rosales",
                                "Algoritmos": "Emmanuel Torres",
                                "Fundamentos": "Refugio Bernal"
                    
                            }
                    }
                    console.log(aula1121is);
                    break;

                    case "viernes":
                    var aula1121is = {
                        "Horario": "Viernes",
                        "7-9":"EOE",
                        "9-11": "Matematicas Discretas",
                        "11-12": "Tutoria",
                        "12-14": "Algoritmos",
                    
                            "Profres":{
                                "EOE": "Wendy Alejandra",
                                "Matematicas": "Maria Del Carmen",
                                "Tutoria": "Refugio Bernal",
                                "Algoritmos": "Emmanuel Torres"
                    
                            }
                    }
                    console.log(aula1121is);
                    break;

                    case "sabado":
                    var aula1121is = {
                        "Horario": "Sabado",
                        "7-9":"Matematicas Discretas",
                    
                            "Profres":{
                                "Matematicas": "Maria Del Carmen"
                            }
                    }
                    console.log(aula1121is);
                    break;
                    default: alert("Dia incorrecto o Mal escrito, refresca la pagina");
                   
}


