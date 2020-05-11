const base_url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

fetch(base_url)
  .then(response => response.text())
  .then(result => {
    
    const data = JSON.parse(result);

    data.forEach(elem => {
      row = document.getElementById("row");
      
      div = document.createElement("div");
      div.className = "col-md-4";

      card = document.createElement("div");
      card.className = "card mb-4 box-shadow";

      img = document.createElement("img");
      img.className = "card-img-top";
      img.src = elem.photo;

      cardInfo = document.createElement("div");
      cardInfo.className = "card-body";

      cardText = document.createElement("div");
      cardText.className = "card-text";

      prop = document.createElement("p");
      prop.className = "property-type";
      prop.innerHTML = elem.property_type;

      propName = document.createElement("p");
      propName.className = "property-name";
      propName.innerHTML = elem.name;

      propPrice = document.createElement("p");
      propPrice.className = "property-price";
      propPrice.innerHTML = `R$ ${elem.price},00 por noite.`;

      row.appendChild(div);
      div.appendChild(card);
      card.appendChild(img);
      card.appendChild(cardInfo);
      cardInfo.appendChild(cardText);
      cardText.appendChild(prop);
      cardText.appendChild(propName);
      cardText.appendChild(propPrice);
    });
  });
