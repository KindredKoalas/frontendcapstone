// import React from 'react';
// import styled from 'styled-components';

// const Slider = styled.input`
//   -webkit-appearance: none;
//   appearance: none;
//   width: 100%;
//   height: 5px;
//   background: #d3d3d3;
//   outline: none;
//   opacity: 0.7;
//   -webkit-transition: .2s;
//   transition: opacity .2s;
// `;

// const Title = styled.div`
// display: flex;
// font-size: 13px;
// font-weight: bold;
// `;

// const Text = styled.div`
// display: flex;
// justify-content: space-between;
// font-size: 10px;
// `;


// class CharacteristicsSample extends React.Component {
//   constructor(props) {
//     super(props)

//     console.log(this.props.characteristics.Size)
//   }

//   render() {
//     if(this.props.characteristics.Size !== undefined) {
//       return (
//         <div>
//           <br></br>
//           <Title>Size</Title>
//             <Slider type="range" min="1" max="5"
//                  value={this.props.characteristics.Size.value}
//                  readonly="readonly"></Slider>
//             <Text>
//               <label value="0">Too small</label>
//               <label value="2.5">Perfect</label>
//               <label value="5">Too large</label>
//             </Text>
//         </div>
//       );
//     }
//     if(this.props.characteristics.Width !== undefined) {
//       return (
//         <div>
//           <br></br>
//           <Title>Width</Title>
//             <Slider type="range" min="1" max="5"
//               value={this.props.characteristics.Width.value}
//                readonly="readonly"></Slider>
//             <Text>
//               <label value="0">Too narrow</label>
//               <label value="2.5">Perfect</label>
//               <label value="5">Too wide</label>
//             </Text>
//         </div>
//       );
//     }
//     if(this.props.characteristics.Comfort !== undefined) {
//       return (
//         <div>
//           <br></br>
//           <Title>Comfort</Title>
//             <Slider type="range" min="1" max="5"
//                 value={this.props.characteristics.Comfort.value   readonly="readonly"></Slider>
//             <Text>
//               <label value="0">Poor</label>
//               <label value="5">Perfect</label>
//             </Text>
//         </div>
//       );
//     }
//     if(this.props.characteristics.Quality !== undefined) {
//       return (
//         <div>
//           <br></br>
//           <Title>Quality</Title>
//             <Slider type="range" min="1" max="5"
//                 value={this.props.characteristics.Quality.value}
//                 readonly="readonly"></Slider>
//             <Text>
//               <label value="0">Poor</label>
//               <label value="5">Perfect</label>
//             </Text>
//         </div>
//       );
//     }
//     if(this.props.characteristics.Length !== undefined) {
//       return (
//         <div>
//           <br></br>
//           <Title>Length</Title>
//             <Slider type="range" min="1" max="5"
//                 value={this.props.characteristics.Length.value}
//                 readonly="readonly"></Slider>
//             <Text>
//               <label value="0">Runs short</label>
//               <label value="2.5">Perfect</label>
//               <label value="5">Runns long</label>
//             </Text>
//         </div>
//       );
//     }
//     if(this.props.characteristics.Fit !== undefined) {
//       return (
//         <div>
//           <br></br>
//           <Title>Fit</Title>
//             <Slider type="range" min="1" max="5"
//                 value={this.props.characteristics.Fit.value}
//                 readonly="readonly"></Slider>
//             <Text>
//               <label value="0">Runs tight</label>
//               <label value="2.5">Perfect</label>
//               <label value="5">Runns long</label>
//             </Text>
//         </div>
//       );
//     }
//   }
// };

// export default CharacteristicsSample;
