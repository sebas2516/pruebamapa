var userName = "servWebElite";
        var passWord = "$s3rvW3bEl1t3%";
            
        function authenticateUser(user, password){
            var auth = user + ":" + password;    
            var hash = btoa(auth); 
            return "Basic " + hash;
        };
    
        // Todos los datos
        function CallWebAPI(){    
    
            var request = new XMLHttpRequest();
            var autenticate = authenticateUser(userName, passWord);
                
            request.open("get", "https://gps.coltrack.com/gps/api.jsp", false);	
            request.setRequestHeader("Authorization", authenticateUser(userName, passWord));  	
            request.send();   
            console.log("Loaded data");    
            respuesta=JSON.parse(request.response);       
    
            salida = respuesta.message.data;
                
            $("#Tabla").append('<thead><tr><th> PLACA</th><th>TEMPERATURA</th><th>UBICACIÓN</th><th>ESTADO</th></tr></thead>');
            for (let index = 0; index < salida.length; index++) {
                $("#Tabla").append("<tr onclick= showHideRow('hidden_row"+index+"')><td><a href='#popup1'>"
						+salida[index].PLACA+"</a></td><td>"
						+salida[index].TEMPERATURA+" ℃ "+"</td><td>"
						+salida[index].UBICACION+"<a aria-label='Ubicacion Vehiculos' name= 'enlace maps' href=  https://maps.google.com/?q="
						+salida[index].LATITUD+","+salida[index].LONGITUD+"><i class='bi bi-geo-alt-fill'></i>"+"</td><td>"
						+"<input class='input' aria-label ='activo' type='checkbox' id='Activo "+salida[index].NOMBRE+"' onclick= 'if(this.checked) localStorage.setItem(this.id,this.value); else localStorage.removeItem (this.id); cookie1();' value="+salida[index].NOMBRE+">"+"<label id = 'label1'> No en ruta </label>"+"</td>"
						// +"<td>"+"<input type='button' id ="+salida[index].LATITUD+" name ="+salida[index].LONGITUD+"></td>"
                    +"</tr>"
    
                    +"<tr id='hidden_row"+index+"' class='hidden_row'>"
                        +"<td> Hora: "+salida[index].TIEMPO+"</td>"
                        +"<td> Lugar: "+salida[index].LUGAR+"</td>"
                        +"<td> Ciudad: "+salida[index].CIUDAD+"</td>"
                        +"<td> Evento: "+salida[index].EVENTO+"</td>"
                    +"</tr>"
                );   
            };

			for (let index = 0; index < salida.length; index++) {

				var data = [
					{"loc":[salida[0].LATITUD,salida[0].LONGITUD], "title":salida[0].PLACA, "temperatura":salida[0].TEMPERATURA, "ubicacion":salida[0].UBICACION},
					{"loc":[salida[1].LATITUD,salida[1].LONGITUD], "title":salida[1].PLACA, "temperatura":salida[1].TEMPERATURA, "ubicacion":salida[1].UBICACION},
					{"loc":[salida[2].LATITUD,salida[2].LONGITUD], "title":salida[2].PLACA, "temperatura":salida[2].TEMPERATURA, "ubicacion":salida[2].UBICACION},
					{"loc":[salida[3].LATITUD,salida[3].LONGITUD], "title":salida[3].PLACA, "temperatura":salida[3].TEMPERATURA, "ubicacion":salida[3].UBICACION},
					{"loc":[salida[4].LATITUD,salida[4].LONGITUD], "title":salida[4].PLACA, "temperatura":salida[4].TEMPERATURA, "ubicacion":salida[4].UBICACION},
					{"loc":[salida[5].LATITUD,salida[5].LONGITUD], "title":salida[5].PLACA, "temperatura":salida[5].TEMPERATURA, "ubicacion":salida[5].UBICACION},
					{"loc":[salida[6].LATITUD,salida[6].LONGITUD], "title":salida[6].PLACA, "temperatura":salida[6].TEMPERATURA, "ubicacion":salida[6].UBICACION},
					{"loc":[salida[7].LATITUD,salida[7].LONGITUD], "title":salida[7].PLACA, "temperatura":salida[7].TEMPERATURA, "ubicacion":salida[7].UBICACION},
					{"loc":[salida[8].LATITUD,salida[8].LONGITUD], "title":salida[8].PLACA, "temperatura":salida[8].TEMPERATURA, "ubicacion":salida[8].UBICACION},
					{"loc":[salida[9].LATITUD,salida[9].LONGITUD], "title":salida[9].PLACA, "temperatura":salida[9].TEMPERATURA, "ubicacion":salida[9].UBICACION},
					{"loc":[salida[10].LATITUD,salida[10].LONGITUD], "title":salida[10].PLACA, "temperatura":salida[10].TEMPERATURA, "ubicacion":salida[10].UBICACION},
					{"loc":[salida[11].LATITUD,salida[11].LONGITUD], "title":salida[11].PLACA, "temperatura":salida[11].TEMPERATURA, "ubicacion":salida[11].UBICACION},
					{"loc":[salida[12].LATITUD,salida[12].LONGITUD], "title":salida[12].PLACA, "temperatura":salida[12].TEMPERATURA, "ubicacion":salida[12].UBICACION},
					{"loc":[salida[13].LATITUD,salida[13].LONGITUD], "title":salida[13].PLACA, "temperatura":salida[13].TEMPERATURA, "ubicacion":salida[13].UBICACION},
					{"loc":[salida[14].LATITUD,salida[14].LONGITUD], "title":salida[14].PLACA, "temperatura":salida[14].TEMPERATURA, "ubicacion":salida[14].UBICACION},
					{"loc":[salida[15].LATITUD,salida[15].LONGITUD], "title":salida[15].PLACA, "temperatura":salida[15].TEMPERATURA, "ubicacion":salida[15].UBICACION},
					{"loc":[salida[16].LATITUD,salida[16].LONGITUD], "title":salida[16].PLACA, "temperatura":salida[16].TEMPERATURA, "ubicacion":salida[16].UBICACION},
					{"loc":[salida[17].LATITUD,salida[17].LONGITUD], "title":salida[17].PLACA, "temperatura":salida[17].TEMPERATURA, "ubicacion":salida[17].UBICACION},
					{"loc":[salida[18].LATITUD,salida[18].LONGITUD], "title":salida[18].PLACA, "temperatura":salida[18].TEMPERATURA, "ubicacion":salida[18].UBICACION},
					{"loc":[salida[19].LATITUD,salida[19].LONGITUD], "title":salida[19].PLACA, "temperatura":salida[19].TEMPERATURA, "ubicacion":salida[19].UBICACION},
					{"loc":[salida[20].LATITUD,salida[20].LONGITUD], "title":salida[20].PLACA, "temperatura":salida[20].TEMPERATURA, "ubicacion":salida[20].UBICACION},
					{"loc":[salida[21].LATITUD,salida[21].LONGITUD], "title":salida[21].PLACA, "temperatura":salida[21].TEMPERATURA, "ubicacion":salida[21].UBICACION},
					{"loc":[salida[22].LATITUD,salida[22].LONGITUD], "title":salida[22].PLACA, "temperatura":salida[22].TEMPERATURA, "ubicacion":salida[22].UBICACION},
					{"loc":[salida[23].LATITUD,salida[23].LONGITUD], "title":salida[23].PLACA, "temperatura":salida[23].TEMPERATURA, "ubicacion":salida[23].UBICACION},
					{"loc":[salida[24].LATITUD,salida[24].LONGITUD], "title":salida[24].PLACA, "temperatura":salida[24].TEMPERATURA, "ubicacion":salida[24].UBICACION},
					{"loc":[salida[25].LATITUD,salida[25].LONGITUD], "title":salida[25].PLACA, "temperatura":salida[25].TEMPERATURA, "ubicacion":salida[25].UBICACION},
					{"loc":[salida[26].LATITUD,salida[26].LONGITUD], "title":salida[26].PLACA, "temperatura":salida[26].TEMPERATURA, "ubicacion":salida[26].UBICACION},
					{"loc":[salida[27].LATITUD,salida[27].LONGITUD], "title":salida[27].PLACA, "temperatura":salida[27].TEMPERATURA, "ubicacion":salida[27].UBICACION}
				];
			};

			var map = new L.Map('map', {
				zoom: 14, 
				center: new L.latLng(data[0].loc) 
			});

			map.addLayer(new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'));

			var markersLayer = new L.LayerGroup();
			map.addLayer(markersLayer);

			map.addControl( new L.Control.Search({
				container: 'findbox',
				layer: markersLayer,
				initial: false,
				collapsed: false
			}) );

			for(i in data) {
				var title = data[i].title
				var temperatura = data[i].temperatura
				var ubicacion = data[i].ubicacion
				
				loc = data[i].loc,
				marker = new L.Marker(new L.latLng(loc), {title: title} );
				marker.bindPopup('Placa: '+title+'<br><br> Temperatura:'+temperatura+'<br><br> Ubicacion: '+ubicacion+'');
				markersLayer.addLayer(marker);
			}
		};