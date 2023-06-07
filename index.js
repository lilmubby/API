"use strict";

// const btn = document.querySelector(".btn-contry");
const countriesContainer = document.querySelector(".countries");
// const input = document.querySelector("#src");


const renderCountry = (data) => {
  const html = `
    <article class="country">
            <img src="${data.flag}" alt="flag" class="country-img">
            <div class="country-data">
              <h3 class="contry-name">Country: ${data.name}</h3>
              <h4 class="country-region">Region: <span>${data.region}</span></h4>
              <p class="country-row">Population: ${data.population}</p>
              <p class="country-row">Currency: ${data.currencies[0].name}</p>
              <p class="country-row">Language: ${data.languages[0].name}</p>
            </div>
          </article>
    `;
  let htmlObj = document.createElement("div");
  htmlObj.innerHTML = html;
  countriesContainer.insertAdjacentElement("beforeend", htmlObj);
  countriesContainer.style.opacity = 1;
};

// const renderErr = (msg) => {
//   countriesContainer.insertAdjacentText("beforeend", msg);
//   countriesContainer.style.opacity = 1;
// };

// XML HTTP Request
// const getCountry = (country) => {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   // console.log(request.responseText);
//   request.addEventListener("load", () => {
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);
//     renderCountry(data);

//     const [other] = data.borders;
//     if (!other) return;
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v2/alpha/${other}`);
//     request2.send();
//     request2.addEventListener("load", () => {
//       const data2 = JSON.parse(request2.responseText);
//       renderCountry(data2);
//     });
//   });
// };
// getCountry("usa");

// Fetch API
// const getJSON = (url, errMsg = "Something went wrong") => {
//   return fetch(url).then((resp) => {
//     if (!resp.ok) throw new Error(`${errMsg} ${resp.status}`);
//     return resp.json();
//   });
// };
// const newCountry = (country) => {
// fetch(`https://restcountries.com/v2/name/${country}`)
// .then((resp) => {
//   if (!resp.ok) throw new Error(`Page not found ${resp.status}`);
//   return resp.json();
// })
// getJSON(`https://restcountries.com/v2/name/${country}`, "Country not Found")
//   .then((data) => {
//     renderCountry(data[0]);
//     const side = data[0].borders[0];
//     if (!side) throw new Error("no Neighbouring country found");
//     // return fetch(`https://restcountries.com/v2/alpha/${side}`);
//     return getJSON(
//       `https://restcountries.com/v2/alpha/${side}`,
//       "Country not found"
//     );
//   })
// .then((resp) => resp.json())
//     .then((data) => renderCountry(data))
//     .catch((err) => {
//       console.error(err);
//       renderErr(`Something went wrong ${err.message}`);
//     });
// };
// newCountry("australia");



// CODING CHALLENGE
// 'https://geocode.xyz/51.50354,-0.12768?geoit=xml&auth=your_api_key'
// 492674040153280956054x56456
// 8.4799437, 4.6364607
// const whereAmI = (lat, lng) => {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=492674040153280956054x56456`
//   )
//     .then((resp) => {
//       console.log(resp);
//       if (!resp.ok)
//         throw new Error(`Multiple requests per second (${resp.status})`);
//       return resp.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then((resp) => {
//       if (!resp.ok) throw new Error(`Country not found (${resp.status})`);
//       console.log(resp);
//       return resp.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//     })
//     .catch((err) => {
//       console.error(err.message);
//     });
// };
// whereAmI(52.508, 13.381);
// whereAmI(51.50354, -0.12768);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
// whereAmI(8.4806475, 4.6350329);
// whereAmI(9.024256, 7.449868);



// More modern way of Consuming promises




// const lottery = new Promise((resolve, reject) => {
//   console.log(`Lottery is running`);
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve(`You won`)
//     } else {
//       reject(`You lost`)
//     }
//   }, 2000)
// }).then(resp => console.log(resp)).catch(err => console.error(err));

const wait = seconds => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};
// wait(1).then(() => {
//   console.log('I waited 1 second');
//   return wait(1)
// })
// .then(() => {
//   console.log('I waited 2 seconds');
//   return wait(1);
// })
// .then(() => console.log('I waited 3 seconds'));




// const position = () => {
  // navigator.geolocation.getCurrentPosition(
  //   position => resolve(position),
  //   err => reject(err));
//   return new Promise ((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
// }
// position().then(pos => console.log(pos)).catch(err => console.error(err));


// const whereAmI = () => {
  // position().then(pos => {
    // console.log(pos)
    // const {latitude: lat, longitude: lng} = pos.coords;
  //   // return fetch(
  //     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=492674040153280956054x56456`
  //   )
  // })
//   .then((resp) => {
//       console.log(resp);
//       if (!resp.ok)
//         throw new Error(`Multiple requests per second (${resp.status})`);
//       return resp.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then((resp) => {
//       if (!resp.ok) throw new Error(`Country not found (${resp.status})`);
//       console.log(resp);
//       return resp.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//     })
//     .catch((err) => {
//       console.error(err.message);
//     });
// };



// const  whereAmI  = async () => {
//   try {
    // Geolocation
  //   const pos = await position();
  // const {latitude: lat, longitude: lng} = pos.coords;

  // Reverse Geocoding
  // const posRes = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=492674040153280956054x56456`);
  // if (!posRes.ok) throw new Error(`Can't locate you. Try again Later.`);
  // const data = await posRes.json();

  // Country
//   const geoCode = await fetch(`https://restcountries.com/v2/name/${data.country}`);
//   if (!geoCode.ok) throw new Error(`Can't locate you. Try again Later.`);
//   const geoData = await geoCode.json();
//   console.log(geoData);
//   renderCountry(geoData[0]) }
//   catch(err) {console.error(err.message)};
  
// }


// whereAmI();




let container = document.querySelector('.container');

const createImage = (imgPath) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener("load", () => {
      container.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Problem!!!'));
    });
  });
};
// let currentImg;

// createImage("./tommy.jpg")
// .then(img => {
//   currentImg = img;
//   console.log('Image 1 loaded');
//   console.log(currentImg);
//   // return wait(2);
// })
// .then(() => {
//   currentImg.style.display = 'none';
//   return createImage("./tommy.jpg");
// })
// .then((img) => {
//   currentImg = img;
//   console.log('Image 2 loaded');
//   return wait(2)
// })
// .then(() => {
//   currentImg.style.display = 'none';
// })
// .catch(err => console.error(err));

const loadNPause = async () => {
  try {
    let img = await createImage("./tommy.jpg");
    await wait(2);
    img.style.display = 'none';
    console.log(img);
    img = await createImage("./tariq.jpg");
    await wait(2);
    img.style.display = 'none';
    console.log(img);
  } catch(err) {
    console.error(err)
  }
}
// loadNPause();

const loadAll = async  (imgArr) => {
  try{
    // console.log(imgArr)
    imgArr.map(imgs => {
      createImage(imgs);
      // console.log(createImage(imgs));
      console.log(imgs);
    })
  }catch(err) {
    console.error(err)
  }
}
// loadAll(["./tommy.jpg", "./tariq.jpg"]);


const loadAllCorrection = async  (imgArr) => {
  try{
    console.log(imgArr)
    const imgs = imgArr.map(async img => {
      await createImage(img);
      // console.log(createImage(img));
    });
    console.log(imgs);
  }catch(err) {
    console.error(err)
  }
};
loadAllCorrection(["./tommy.jpg", "./tariq.jpg"]);


// Promise.race([
//   // Promise.reject('ERROR!!!'),
//   Promise.resolve('Success'),
//   Promise.reject('ERROR!!!'),
//   Promise.resolve('SUCCESS')
// ]).then(res => console.log(res)).catch(err => console.error(err));
// // console.log('yes');