const section = document.querySelector('section');
  let requestURL = 'https://elitedangerous-website-backend-production.elitedangerous.com/api/galnet';
  let request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    const news = request.response;
    populateNews(news);
  }
  
  function populateNews(jsonObj){
    for(let i = 0; i < jsonObj.length; i++){
      const newsDiv1 = document.createElement('div');
      newsDiv1.className = 'news';
      section.appendChild(newsDiv1);
      
      const newsH3 = document.createElement('h3');
      newsH3.textContent = jsonObj[i].date;
      newsDiv1.appendChild(newsH3);
      
      const newsH2 = document.createElement('h2');
      newsH2.textContent = jsonObj[i].title;
      newsDiv1.appendChild(newsH2);
      
      const newsDiv2 = document.createElement('div');
      newsDiv2.innerHTML = jsonObj[i].body;
      newsDiv1.appendChild(newsDiv2);
    }
  }
