const dummyPhotos = [
  {
    "style_id": 142835,
    "thumbnail_url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
  },
  {
    "style_id": 142835,
    "thumbnail_url": "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    "url": "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  }
];

// const getImagesPerStyle = (samplesData, styleId) => {
//   const imagesPerStyle = [];
//   const results = dummySamples.results;
//   // console.log('results', results);
//   for (var i = 0; i < results.length; i++) {
//     const infoPerStyle = results[i];
//     //console.log('infoPerStyle', infoPerStyle);
//     if (styleId === infoPerStyle.style_id) {
//       console.log('if block is firing!');
//       imagesPerStyle = infoPerStyle.photos;
//       console.log('imagesPerStyle', imagesPerStyle)
//     }
//   }
//   return imagesPerStyle;
// }

// getImagesPerStyle(dummySamples, 142835);

export default dummyPhotos;