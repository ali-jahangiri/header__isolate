import React, { cloneElement } from 'react'

import { generate } from "@ant-design/colors";

const defaultIcons = () => {
  return {
      socialMedia: (baseColor) => {
          return {}
      },
      general: ({ support }) => {
          return {
            support() {
              return <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512"><path style={{fill:support.light}} d="M400.663,459.871v-10.684c0-79.564-65.099-144.663-144.663-144.663l0,0	c-79.564,0-144.663,65.099-144.663,144.663v10.684c0,20.687,16.769,37.456,37.456,37.456h214.415	C383.894,497.327,400.663,480.556,400.663,459.871z"/><g><path style={{fill:support.main}} d="M363.208,512H148.791c-28.744,0-52.128-23.385-52.128-52.129v-10.684		c0-87.859,71.478-159.337,159.337-159.337s159.337,71.478,159.337,159.337v10.684C415.337,488.615,391.952,512,363.208,512z		 M256,319.196c-71.677,0-129.99,58.314-129.99,129.99v10.684c0,12.562,10.22,22.782,22.781,22.782h214.417		c12.562,0,22.781-10.22,22.781-22.782v-10.684C385.99,377.51,327.677,319.196,256,319.196z"/><path style={{fill:support.main}} d="M437.881,181.883h-29.347c0-84.109-68.427-152.536-152.534-152.536S103.466,97.774,103.466,181.883		H74.119C74.119,81.592,155.709,0,256,0S437.881,81.592,437.881,181.883z"/><path style={{fill:support.main}} d="M256,314.11c-71.105,0-128.954-57.849-128.954-128.954S184.895,56.202,256,56.202		s128.954,57.849,128.954,128.954C384.954,256.263,327.105,314.11,256,314.11z M256,85.55c-54.924,0-99.607,44.684-99.607,99.607		s44.682,99.607,99.607,99.607s99.607-44.684,99.607-99.607C355.607,130.233,310.924,85.55,256,85.55z"/></g><path style={{fill:support.light,}} d="M140.961,162.995c0-7.005-3.558-13.564-9.497-17.28c-6.15-3.847-13.403-6.076-21.152-6.076l0,0	c-22.065,0-40.117,18.053-40.117,40.117v26.911c0,22.065,18.053,40.117,40.117,40.117l0,0c7.749,0,15.002-2.229,21.152-6.076	c5.938-3.715,9.497-10.274,9.497-17.28L140.961,162.995L140.961,162.995z"/><path style={{fill:support.main,}} d="M110.313,261.46c-30.211,0-54.791-24.58-54.791-54.791v-26.911c0-30.211,24.58-54.791,54.791-54.791	c10.241,0,20.247,2.873,28.936,8.311c10.26,6.418,16.387,17.528,16.387,29.718v60.436c0,12.191-6.128,23.3-16.39,29.72	C130.559,258.585,120.552,261.46,110.313,261.46z M110.313,154.313c-14.031,0-25.444,11.415-25.444,25.444v26.911	c0,14.031,11.413,25.444,25.444,25.444c4.729,0,9.351-1.328,13.368-3.842c1.61-1.007,2.607-2.861,2.607-4.841v-60.436	c0-1.981-0.999-3.834-2.605-4.839C119.664,155.641,115.04,154.313,110.313,154.313z"/><path style={{fill:support.light,}} d="M371.037,162.995c0-7.005,3.558-13.564,9.497-17.28c6.15-3.847,13.403-6.076,21.152-6.076l0,0	c22.065,0,40.117,18.053,40.117,40.117v26.911c0,22.065-18.053,40.117-40.117,40.117l0,0c-7.749,0-15.002-2.229-21.152-6.076	c-5.938-3.715-9.497-10.274-9.497-17.28V162.995L371.037,162.995z"/><g><path style={{fill:support.main,}} d="M401.687,261.46c-10.241,0-20.247-2.873-28.936-8.311c-10.26-6.418-16.387-17.528-16.387-29.718		v-60.436c0-12.191,6.128-23.302,16.39-29.72c8.687-5.437,18.693-8.31,28.933-8.31c30.211,0,54.791,24.58,54.791,54.791v26.911		C456.478,236.88,431.899,261.46,401.687,261.46z M401.687,154.313c-4.729,0-9.351,1.328-13.368,3.842		c-1.61,1.007-2.607,2.861-2.607,4.841v60.436c0,1.979,0.999,3.834,2.605,4.839c4.019,2.515,8.643,3.843,13.371,3.843		c14.031,0,25.444-11.415,25.444-25.444v-26.911C427.131,165.726,415.718,154.313,401.687,154.313z"/><path style={{fill:support.main,}} d="M369.475,244.92H265.293c-8.103,0-14.674-6.569-14.674-14.674s6.571-14.674,14.674-14.674h104.182		c8.103,0,14.673,6.569,14.673,14.674S377.577,244.92,369.475,244.92z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            },
            insuranceMinimal() {
              return <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M17,14a1,1,0,0,1-1,1H8a1,1,0,0,1,0-2h8A1,1,0,0,1,17,14Zm-4,3H8a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2Zm9-6.515V19a5.006,5.006,0,0,1-5,5H7a5.006,5.006,0,0,1-5-5V5A5.006,5.006,0,0,1,7,0h4.515a6.958,6.958,0,0,1,4.95,2.05l3.484,3.486A6.951,6.951,0,0,1,22,10.485ZM15.051,3.464A5.01,5.01,0,0,0,14,2.684V7a1,1,0,0,0,1,1h4.316a4.983,4.983,0,0,0-.781-1.05ZM20,10.485c0-.165-.032-.323-.047-.485H15a3,3,0,0,1-3-3V2.047C11.838,2.032,11.679,2,11.515,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z"/></svg> 
            },
            
            walletMinimal() {
              return <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M19,20H5a5.006,5.006,0,0,1-5-5V9A5.006,5.006,0,0,1,5,4H19a5.006,5.006,0,0,1,5,5v6A5.006,5.006,0,0,1,19,20ZM5,6A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9a3,3,0,0,0-3-3Zm7,10a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,8A1,1,0,1,0,6,9,1,1,0,0,0,5,8ZM18,9a1,1,0,1,0,1-1A1,1,0,0,0,18,9ZM5,14a1,1,0,1,0,1,1A1,1,0,0,0,5,14Zm13,1a1,1,0,1,0,1-1A1,1,0,0,0,18,15Z"/></svg>
            },
            supportMinimal() {
              return <svg id="Outline" viewBox="0 0 24 24"><path d="M21.155,19.741a11.954,11.954,0,0,0,0-15.482l.86-.86A1,1,0,0,0,20.6,1.985l-.86.86a11.954,11.954,0,0,0-15.482,0l-.86-.86A1,1,0,0,0,1.985,3.4l.86.86a11.954,11.954,0,0,0,0,15.482l-.86.86A1,1,0,1,0,3.4,22.015l.86-.86a11.954,11.954,0,0,0,15.482,0l.86.86A1,1,0,0,0,22.015,20.6ZM22,12a9.949,9.949,0,0,1-2.262,6.324l-3.571-3.571a4.966,4.966,0,0,0,0-5.506l3.571-3.571A9.949,9.949,0,0,1,22,12ZM9,12a3,3,0,1,1,3,3A3,3,0,0,1,9,12ZM12,2a9.949,9.949,0,0,1,6.324,2.262L14.753,7.833a4.966,4.966,0,0,0-5.506,0L5.676,4.262A9.949,9.949,0,0,1,12,2ZM2,12A9.949,9.949,0,0,1,4.262,5.676L7.833,9.247a4.966,4.966,0,0,0,0,5.506L4.262,18.324A9.949,9.949,0,0,1,2,12ZM12,22a9.949,9.949,0,0,1-6.324-2.262l3.571-3.571a4.966,4.966,0,0,0,5.506,0l3.571,3.571A9.949,9.949,0,0,1,12,22Z"/></svg>
            },
            reminderMinimal() {
              return <svg id="Outline" viewBox="0 0 24 24"><path d="M19,2H18V1a1,1,0,0,0-2,0V2H8V1A1,1,0,0,0,6,1V2H5A5.006,5.006,0,0,0,0,7V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V7A5.006,5.006,0,0,0,19,2ZM2,7A3,3,0,0,1,5,4H19a3,3,0,0,1,3,3V8H2ZM19,22H5a3,3,0,0,1-3-3V10H22v9A3,3,0,0,1,19,22Z"/><circle cx="12" cy="15" r="1.5"/><circle cx="7" cy="15" r="1.5"/><circle cx="17" cy="15" r="1.5"/></svg>
            },
          }
      },
      ui: ({ wallet , insurance , reminder}) => {
        
          return {
            profile() {
              return <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M23.9,11.437A12,12,0,0,0,0,13a11.878,11.878,0,0,0,3.759,8.712A4.84,4.84,0,0,0,7.113,23H16.88a4.994,4.994,0,0,0,3.509-1.429A11.944,11.944,0,0,0,23.9,11.437Zm-4.909,8.7A3,3,0,0,1,16.88,21H7.113a2.862,2.862,0,0,1-1.981-.741A9.9,9.9,0,0,1,2,13,10.014,10.014,0,0,1,5.338,5.543,9.881,9.881,0,0,1,11.986,3a10.553,10.553,0,0,1,1.174.066,9.994,9.994,0,0,1,5.831,17.076ZM7.807,17.285a1,1,0,0,1-1.4,1.43A8,8,0,0,1,12,5a8.072,8.072,0,0,1,1.143.081,1,1,0,0,1,.847,1.133.989.989,0,0,1-1.133.848,6,6,0,0,0-5.05,10.223Zm12.112-5.428A8.072,8.072,0,0,1,20,13a7.931,7.931,0,0,1-2.408,5.716,1,1,0,0,1-1.4-1.432,5.98,5.98,0,0,0,1.744-5.141,1,1,0,0,1,1.981-.286Zm-5.993.631a2.033,2.033,0,1,1-1.414-1.414l3.781-3.781a1,1,0,1,1,1.414,1.414Z"/></svg>
            },
            reminder() {
              return <svg height="512pt" viewBox="0 -16 512.00073 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><g fill={reminder.light}><path d="m464 48h-416c-17.671875 0-32 14.328125-32 32v64h480v-64c0-17.671875-14.328125-32-32-32zm0 0" /><path d="m96 208h64v64h-64zm0 0" /><path d="m224 208h64v64h-64zm0 0" /><path d="m352 208h64v64h-64zm0 0" /><path d="m96 336h64v64h-64zm0 0" /><path d="m224 336h64v64h-64zm0 0" /><path d="m352 336h64v64h-64zm0 0" /> </g><path d="m464 32h-96v-32h-32v32h-160v-32h-32v32h-96c-26.511719 0-48 21.488281-48 48v352c0 26.511719 21.488281 48 48 48h416c26.511719 0 48-21.488281 48-48v-352c0-26.511719-21.488281-48-48-48zm-432 48c0-8.835938 7.164062-16 16-16h96v32h32v-32h160v32h32v-32h96c8.835938 0 16 7.164062 16 16v48h-448zm432 368h-416c-8.835938 0-16-7.164062-16-16v-272h448v272c0 8.835938-7.164062 16-16 16zm0 0" fill={reminder.main} /><path d="m160 192h-64c-8.835938 0-16 7.164062-16 16v64c0 8.835938 7.164062 16 16 16h64c8.835938 0 16-7.164062 16-16v-64c0-8.835938-7.164062-16-16-16zm-16 64h-32v-32h32zm0 0" fill={reminder.main} /><path d="m288 192h-64c-8.835938 0-16 7.164062-16 16v64c0 8.835938 7.164062 16 16 16h64c8.835938 0 16-7.164062 16-16v-64c0-8.835938-7.164062-16-16-16zm-16 64h-32v-32h32zm0 0" fill={reminder.main} /><path d="m416 192h-64c-8.835938 0-16 7.164062-16 16v64c0 8.835938 7.164062 16 16 16h64c8.835938 0 16-7.164062 16-16v-64c0-8.835938-7.164062-16-16-16zm-16 64h-32v-32h32zm0 0" fill={reminder.main} /><path d="m160 320h-64c-8.835938 0-16 7.164062-16 16v64c0 8.835938 7.164062 16 16 16h64c8.835938 0 16-7.164062 16-16v-64c0-8.835938-7.164062-16-16-16zm-16 64h-32v-32h32zm0 0" fill={reminder.main} /><path d="m288 320h-64c-8.835938 0-16 7.164062-16 16v64c0 8.835938 7.164062 16 16 16h64c8.835938 0 16-7.164062 16-16v-64c0-8.835938-7.164062-16-16-16zm-16 64h-32v-32h32zm0 0" fill={reminder.main} /><path d="m416 320h-64c-8.835938 0-16 7.164062-16 16v64c0 8.835938 7.164062 16 16 16h64c8.835938 0 16-7.164062 16-16v-64c0-8.835938-7.164062-16-16-16zm-16 64h-32v-32h32zm0 0" fill={reminder.main}/></svg>
            },
            insurance() {
              return <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512.001 512.001"><path style={{fill:insurance.light}} d="M173.323,16.864v82.578c0,11.966-9.701,21.667-21.667,21.667H67.094	c-1.369,0-2.419-1.207-2.247-2.565c1.42-11.258,6.541-21.807,14.648-29.9l59.146-59.146c8.653-8.666,20.088-13.917,32.204-14.887	C172.174,14.503,173.323,15.531,173.323,16.864z"/><g><path style={{fill: insurance.main,}} d="M151.656,135.551H67.094c-4.792,0-9.357-2.062-12.527-5.657c-3.174-3.601-4.65-8.397-4.05-13.16		c1.821-14.437,8.488-28.044,18.774-38.313l59.138-59.138c11.031-11.047,25.687-17.822,41.262-19.071		c9.843-0.789,18.073,6.997,18.073,16.652v82.578C187.765,119.354,171.566,135.551,151.656,135.551z M83.751,106.666h67.904		c3.983,0,7.224-3.241,7.224-7.224V32.575c-3.689,1.785-7.081,4.185-10.017,7.127L89.708,98.856		C87.374,101.185,85.374,103.82,83.751,106.666z"/><path style={{fill: insurance.main,}} d="M375.102,118.212H270.888c-7.977,0-14.443-6.466-14.443-14.443s6.466-14.443,14.443-14.443h104.213		c7.977,0,14.443,6.466,14.443,14.443S383.077,118.212,375.102,118.212z"/><path style={{fill: insurance.main,}} d="M375.102,200.092H136.9c-7.977,0-14.443-6.466-14.443-14.443s6.466-14.443,14.443-14.443h238.202		c7.977,0,14.443,6.466,14.443,14.443C389.543,193.626,383.077,200.092,375.102,200.092z"/><path style={{fill: insurance.main,}} d="M241.114,281.974H136.9c-7.977,0-14.443-6.466-14.443-14.443s6.466-14.443,14.443-14.443h104.213		c7.977,0,14.443,6.466,14.443,14.443S249.09,281.974,241.114,281.974z"/><path style={{fill: insurance.main,}} d="M384.826,512.001c-3.445,0-6.889-0.903-9.949-2.705l-29.552-17.406l-29.551,17.406		c-6.049,3.56-13.589,3.609-19.678,0.127c-6.092-3.482-9.876-10.003-9.876-17.021v-46.22c0-7.977,6.466-14.443,14.443-14.443		s14.443,6.466,14.443,14.443v29.984l20.271-11.94c6.137-3.615,13.762-3.615,19.899,0l20.272,11.94v-119.31		c0-7.977,6.466-14.443,14.443-14.443s14.443,6.466,14.443,14.443v135.547c0,7.016-3.784,13.538-9.876,17.021		C391.548,511.143,388.188,512.001,384.826,512.001z"/><path style={{fill: insurance.main,}} d="M404.639,416.914h-14.651c-7.977,0-14.443-6.466-14.443-14.443s6.466-14.443,14.443-14.443h14.651		c15.702,0,28.476-12.774,28.476-28.476V57.362c0-15.702-12.774-28.476-28.476-28.476H174.975c-0.429,0-0.869,0.012-1.298,0.023		c-9.311,0.296-18.16,4.129-24.814,10.793L89.708,98.856c-6.251,6.241-10.053,14.526-10.718,23.339		c-0.069,0.949-0.105,1.895-0.105,2.782v234.577c0,15.702,12.774,28.476,28.476,28.476h133.751c7.977,0,14.443,6.466,14.443,14.443		s-6.466,14.443-14.443,14.443H107.361C75.732,416.914,50,391.182,50,359.553V124.976c0-1.589,0.062-3.244,0.185-4.922		c1.184-15.737,7.969-30.511,19.106-41.632l59.138-59.138c11.86-11.878,27.643-18.716,44.435-19.249		c0.767-0.02,1.447-0.035,2.11-0.035h229.665C436.268,0.001,462,25.733,462,57.362v302.189		C462,391.182,436.27,416.914,404.639,416.914z"/></g><circle style={{fill: insurance.light,}} cx="345.32" cy="341.971" r="59.55" /><path style={{fill: insurance.main,}} d="M345.326,415.963c-40.8,0-73.993-33.193-73.993-73.992s33.193-73.992,73.993-73.992	s73.992,33.193,73.992,73.992S386.125,415.963,345.326,415.963z M345.326,296.862c-24.873,0-45.108,20.235-45.108,45.107	c0,24.871,20.235,45.107,45.108,45.107s45.107-20.235,45.107-45.107C390.434,317.098,370.198,296.862,345.326,296.862z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            },
            wallet() {
              return <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512"><path style={{fill:wallet.main,}} d="M30.78,275.272c-7.94,0-14.377-6.438-14.377-14.377v-67.066c0-53.111,43.209-96.32,96.321-96.32	h299.517c7.939,0,14.377,6.438,14.377,14.377s-6.438,14.377-14.377,14.377H112.724c-37.257,0-67.567,30.31-67.567,67.565v67.066	C45.157,268.834,38.721,275.272,30.78,275.272z"/><path style={{fill:wallet.light,}} d="M341.657,173.587c26.103-39.925,21.63-93.989-13.437-129.056	c-40.206-40.206-105.393-40.206-145.599,0c-35.067,35.067-39.54,89.131-13.437,129.056H341.657z"/><g><path	style={{fill:wallet.main,}} d="M341.658,187.964H169.186c-4.852,0-9.378-2.448-12.034-6.509		C126.964,135.282,133.4,73.42,172.457,34.364C194.616,12.203,224.081,0,255.421,0s60.804,12.205,82.966,34.364		c39.055,39.055,45.494,100.916,15.306,147.09C351.035,185.515,346.511,187.964,341.658,187.964z M177.353,159.21h156.136		c18.229-33.973,12.249-76.829-15.435-104.512c-16.729-16.731-38.974-25.944-62.633-25.944s-45.903,9.213-62.633,25.944		C165.104,82.381,159.125,125.236,177.353,159.21z"/><path	style={{fill:wallet.main,}} d="M253.409,160.843c-14.662-0.364-25.689-8.24-25.689-15.026c0-3.393,3.029-8.481,6.786-8.481		c4.605,0,8.24,7.876,18.903,9.088v-24.113c-11.027-4.12-23.508-8.845-23.508-24.355c0-15.389,11.391-22.053,23.508-23.629v-3.393		c0-1.576,1.817-3.029,4.12-3.029c2.06,0,4.119,1.454,4.119,3.029v3.15c7.876,0.242,20.72,2.545,20.72,9.572		c0,2.786-1.939,8.36-6.422,8.36c-3.393,0-6.179-3.878-14.298-4.483v21.326c10.784,3.998,22.901,9.452,22.901,25.931		c0,14.905-9.331,23.508-22.901,25.689v3.757c0,1.576-2.06,3.029-4.119,3.029c-2.302,0-4.12-1.455-4.12-3.029L253.409,160.843		L253.409,160.843z M254.379,106.194V87.897c-6.059,0.969-9.693,3.878-9.693,8.483C244.684,101.711,248.805,104.013,254.379,106.194		z M260.679,125.218v21.084c5.331-1.091,9.088-4.241,9.088-9.936C269.767,130.428,265.889,127.521,260.679,125.218z"/><path	style={{fill:wallet.main,}} d="M415.535,512H112.724c-53.111,0-96.321-43.209-96.321-96.32v-159.69		c0-53.111,43.209-96.321,96.321-96.321h302.813c27.788,0,50.396,22.608,50.396,50.398v83.563c0,7.939-6.438,14.377-14.377,14.377		s-14.377-6.438-14.377-14.377v-83.563c0-11.934-9.709-21.643-21.642-21.643H112.724c-37.257,0-67.567,30.31-67.567,67.567v159.69		c0,37.255,30.31,67.565,67.567,67.565h302.813c11.933,0,21.642-9.709,21.642-21.642v-13.651c0-7.939,6.438-14.377,14.377-14.377		s14.377,6.438,14.377,14.377v13.651C465.931,489.392,443.325,512,415.535,512z"/></g><path style={{fill:wallet.light,}} d="M481.22,387.073H366.703c-30.248,0-54.77-24.522-54.77-54.77l0,0c0-30.248,24.522-54.77,54.77-54.77	H481.22V387.073z"/><path style={{fill:wallet.main,}} d="M481.22,401.45H366.705c-38.13,0-69.148-31.019-69.148-69.147s31.019-69.147,69.148-69.147H481.22	c7.939,0,14.377,6.438,14.377,14.377v109.538C495.597,395.012,489.159,401.45,481.22,401.45z M366.705,291.91	c-22.273,0-40.394,18.121-40.394,40.393c0,22.272,18.121,40.393,40.394,40.393h100.138v-80.784H366.705V291.91z"/><g></g> <g></g> <g></g><g></g> <g></g> <g></g>{" "}<g></g> <g></g> <g></g>{" "}<g></g> <g></g> <g></g>{" "}<g></g> <g></g> <g></g></svg>
            },
            clip() {
              return <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M22.95,9.6a1,1,0,0,0-1.414,0L10.644,20.539a5,5,0,1,1-7.072-7.071L14.121,2.876a3,3,0,0,1,4.243,4.242L7.815,17.71a1.022,1.022,0,0,1-1.414,0,1,1,0,0,1,0-1.414l9.392-9.435a1,1,0,0,0-1.414-1.414L4.987,14.882a3,3,0,0,0,0,4.243,3.073,3.073,0,0,0,4.243,0L19.778,8.532a5,5,0,0,0-7.071-7.07L2.158,12.054a7,7,0,0,0,9.9,9.9L22.95,11.018A1,1,0,0,0,22.95,9.6Z"/></svg>
            },
            trash() {
              return <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/></svg>
            },
            send() {
              return <svg version="1.1" x="0px" y="0px" viewBox="0 0 512 512"><g><g><path d="M481.508,210.335L68.414,38.926c-17.403-7.222-37.063-4.045-51.309,8.287C2.859,59.547-3.099,78.55,1.557,96.808L42.151,256L1.557,415.192c-4.656,18.258,1.301,37.261,15.547,49.595c14.273,12.358,33.938,15.495,51.31,8.287l413.094-171.409C500.316,293.861,512,276.363,512,256C512,235.637,500.316,218.139,481.508,210.335z M470.009,273.955L56.916,445.364c-6.947,2.881-14.488,1.665-20.175-3.259c-5.686-4.923-7.971-12.212-6.113-19.501L69.287,271h149.065c8.285,0,15.001-6.716,15.001-15.001c0-8.285-6.716-15.001-15.001-15.001H69.288L30.628,89.396c-1.858-7.288,0.427-14.578,6.113-19.501c5.686-4.923,13.225-6.141,20.174-3.259l413.094,171.409c11.125,4.616,11.99,14.91,11.99,17.955S481.134,269.339,470.009,273.955z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            },
            picture() {
              return <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><title>26 image landscape</title><path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM5,2H19a3,3,0,0,1,3,3V19a2.951,2.951,0,0,1-.3,1.285l-9.163-9.163a5,5,0,0,0-7.072,0L2,14.586V5A3,3,0,0,1,5,2ZM5,22a3,3,0,0,1-3-3V17.414l4.878-4.878a3,3,0,0,1,4.244,0L20.285,21.7A2.951,2.951,0,0,1,19,22Z"/><path d="M16,10.5A3.5,3.5,0,1,0,12.5,7,3.5,3.5,0,0,0,16,10.5Zm0-5A1.5,1.5,0,1,1,14.5,7,1.5,1.5,0,0,1,16,5.5Z"/></svg>
            },
            loadingCircle() {
              return <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M13,1V3a1,1,0,0,1-2,0V1a1,1,0,0,1,2,0ZM12,20a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V21A1,1,0,0,0,12,20ZM4,12a1,1,0,0,0-1-1H1a1,1,0,0,0,0,2H3A1,1,0,0,0,4,12Zm19-1H21a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2ZM18.018,1.618a1,1,0,0,0-1.367.364l-1,1.731a1,1,0,0,0,.365,1.366.987.987,0,0,0,.5.135,1,1,0,0,0,.866-.5l1-1.731A1,1,0,0,0,18.018,1.618ZM7.987,18.921a1,1,0,0,0-1.366.364l-1,1.731a1,1,0,0,0,.364,1.366.989.989,0,0,0,.5.135,1,1,0,0,0,.867-.5l1-1.731A1,1,0,0,0,7.987,18.921ZM4.715,6.621l-1.731-1a1,1,0,0,0-1,1.731l1.731,1a1,1,0,0,0,1-1.731Zm17.3,10.03-1.731-1a1,1,0,0,0-1,1.731l1.731,1a.987.987,0,0,0,.5.135,1,1,0,0,0,.5-1.866ZM7.349,1.982a1,1,0,0,0-1.731,1l1,1.731a1,1,0,0,0,.866.5.987.987,0,0,0,.5-.135,1,1,0,0,0,.365-1.366Zm10.03,17.3a1,1,0,0,0-1.731,1l1,1.731a1,1,0,0,0,1.731-1Zm2.408-10.8a1,1,0,0,0,.5-.134l1.731-1a1,1,0,0,0-1-1.731l-1.731,1a1,1,0,0,0,.5,1.865ZM3.713,15.648l-1.731,1a1,1,0,0,0,.5,1.866.987.987,0,0,0,.5-.135l1.731-1a1,1,0,0,0-1-1.731Z"/></svg>
            },
            arrowSoftLeft() {
              return <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><title>165 arrow small left</title><path d="M10.6,12.707a1,1,0,0,1,0-1.414l4.585-4.586a1,1,0,0,0-1.414-1.414L9.189,9.879a3,3,0,0,0,0,4.242l4.586,4.586a1,1,0,0,0,1.414-1.414Z"/></svg>
            },
            arrowSoftRight() {
              return  <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M15.4,9.879,10.811,5.293A1,1,0,0,0,9.4,6.707l4.586,4.586a1,1,0,0,1,0,1.414L9.4,17.293a1,1,0,0,0,1.415,1.414L15.4,14.121A3,3,0,0,0,15.4,9.879Z"/></svg>
            },
            emptyBox(props) {
              return <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 96 120" enableBackground="new 0 0 96 96"><g><polygon fill="#000000" points="92.662,64.486 73.232,47 22.768,47 3.338,64.486 0.662,61.514 21.232,43 74.768,43 95.338,61.514     "/></g><g><path className="emptyBox__path" fill="#000000" d="M90,96H6c-3.309,0-6-2.691-6-6V61h32v2c0,4.963,4.037,9,9,9h14c4.963,0,9-4.037,9-9v-2h32v29   C96,93.309,93.309,96,90,96z M4,65v25c0,1.103,0.897,2,2,2h84c1.103,0,2-0.897,2-2V65H67.847C66.882,71.223,61.488,76,55,76H41   c-6.488,0-11.882-4.777-12.847-11H4z"/></g><g className="animated__container"><g><rect x="23.981" y="20.5" transform="matrix(0.5369 0.8437 -0.8437 0.5369 33.1077 -15.3114)" fill="#000000" width="13.038" height="4"/></g><g><rect x="64.5" y="15.981" transform="matrix(0.8437 0.5368 -0.5368 0.8437 22.4731 -32.1821)" fill="#000000" width="4" height="13.038"/></g><g><rect x="46" y="14" fill="#000000" width="4" height="13"/></g></g></svg>
            },
          }
      }
  } 
};


const iconConstructor = (categoryFilter , onlyIncludes) => {
     let clonedCategory = undefined;
    // filtering fas
    if(Array.isArray(categoryFilter)) {
      // case for list of category
      const object = {}
      categoryFilter
      .filter(el => el)
      .forEach(el => {
        if(!defaultIcons()[el]) throw new Error(`cannot find "${el}" from category list, Check your entry array of category list`)
        object[el] = defaultIcons()[el]
      })
      clonedCategory = object;
    
    }else if(typeof categoryFilter === "string") {
      // case for one specific category with string input
      if(!defaultIcons()[categoryFilter]) throw new Error(`cannot find "${categoryFilter}" from category list, Check your entry array of category list`)
      clonedCategory = defaultIcons()[categoryFilter];
    }
    else if(!categoryFilter) {
      clonedCategory = defaultIcons()
    }

    return (componentStyles, globalVariables , extendedIcons) => {
      // setting fas
      const iconColors = {}

      if(componentStyles) {
        componentStyles
        .filter(el => el.name.endsWith("IconColor"))
        .map(el => ({
          ...el,
          name : el.name.slice(0 , el.name.indexOf("IconColor"))
        }))
        .map(el => {
          iconColors[el.name] = {
            main : el.setByCustomer ?  el.value : globalVariables["primaryColor"],
              light : el.setByCustomer ? generate(el.value)[1] : globalVariables["primary_2"]
          }
        })
      }
      
        const targetIcons = (() => {
           if(typeof clonedCategory === "object") {
            let obj = {};
            Object.values(clonedCategory)
            .map(el => {
              obj = {...obj , ...el(iconColors)}
            })
            if(extendedIcons) {
              return {
                ...obj,
                ...extendedIcons(iconColors)
              }
            }
            return obj
          }else {return clonedCategory(iconColors)}
          
         })();
       return {
        //  usage fas
           get(iconKeyName ,...props) {
             if(!targetIcons[iconKeyName]) throw new Error(`cannot destructure "${iconKeyName}" icon from created category list, Please select a icon that belong picked category`);
             if(props.length) return cloneElement(targetIcons[iconKeyName]() , ...props);
             return targetIcons[iconKeyName]();
           }
       }
   }
  }



export default iconConstructor;