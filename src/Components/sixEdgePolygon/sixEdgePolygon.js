import SixEdgePolygonWrapper from "./style"

import styleConstructor from "../../utils/styleConstructor"
import dataConstructor from "../../utils/dataConstructor"
import { imageFinder } from "../../utils/ImageFinder"

const componentsStyle = [
    {
        name : "itemBgColor",
        value : "lightblue",
        setByCustomer : true
    },
    {
        name : "itemFontSize",
        value : "",
        setByCustomer : false
    },
    {
        name : "itemTextColor",
        value : "",
        setByCustomer : false
    },
    {
        name : "itemShadow",
        value : "",
        setByCustomer : false
    },
    {
        name : "centerItemBgColor",
        value : "",
        setByCustomer : false
    },
]
const MOCK = {
    "id": 0,
    "name": null,
    "webDescription": null,
    "webIcon": null,
    "webImage": null,
    "webTitle": null,
    "cat": [
      {
        "id": 12,
        "name": "خودرو",
        "webDescription": "این بیمه شامل بیمه نامه های بدنه و ثالث می باشد و این موارد به ترتیب خسارات خودرو طرف مقصر تصادف و خودرو طرف زیان دیده را پوشش می دهند",
        "webIcon": "ec5bb4b3-40ec-412d-9a48-b11b0e687c05.png",
        "webImage": "797c0853-91b4-44a3-a936-242c65e33d74.png",
        "webTitle": "بیمه خودرو",
        "cat": [
          {
            "id": 13,
            "name": "بیمه ثالث",
            "webDescription": "بیمه شخص ثالث اتومبیل، خسارتهای جانی و مالی وارده به اشخاص ثالث ناشی از حوادث رانندگی را جبران می نماید.",
            "webIcon": "b79a0242-92b5-4fb6-851e-7b77ed382b27.png",
            "webImage": "af56d573-5842-4081-8443-c6ff72933c91.png",
            "webTitle": "بیمه شخص ثالث",
            "cat": []
          },
          {
            "id": 22,
            "name": "بیمه بدنه",
            "webDescription": "با خرید بیمه بدنه می توانید اتومبیل خود را در مقابل خطرات تصادف،آتش سوزی،سرقت و پوشش های اضافی از جمله سرقت لوازم،شکست شیشه،بلایای طبیعی و ... تحت پوشش بیمه قرار دهید",
            "webIcon": "c77512f8-4ffe-4099-9404-aa3c2522ea89.png",
            "webImage": "2a1620ef-4c94-4f74-923c-f1b66f368726.png",
            "webTitle": "بیمه بدنه خودرو",
            "cat": []
          },
          {
            "id": 95,
            "name": "بیمه ثالث و بدنه",
            "webDescription": "ثالث بدنه",
            "webIcon": "87d4f42e-8b1b-45bf-b456-a9fa8e441c4c.png",
            "webImage": "56678011-b7c0-4992-a48a-a46607bfc94e.png",
            "webTitle": "ثالث بدنه",
            "cat": []
          }
        ]
      },
      {
        "id": 26,
        "name": "مسئولیت",
        "webDescription": "این بیمه نامه شامل تمامی رشته های مربوط به مدیران اماکن مختلف ، پزشکان و ... می باشد و مسئولیت های این افراد را پوشش می دهد",
        "webIcon": "f28b0524-0ab6-472d-9984-6ebfa4738db3.png",
        "webImage": "23b94efa-3218-467e-adb3-e71502744130.png",
        "webTitle": "بیمه مسئولیت",
        "cat": [
          {
            "id": 29,
            "name": "ساختمانی",
            "webDescription": "همیشه خطرات زیادی متوجه کارکنان ساختمانی بوده است ، ولی اگه بیمه سازندگان ابینه رو داشته باشی ،پوشش دادن این مسئولیت ها با بیمه است",
            "webIcon": null,
            "webImage": null,
            "webTitle": "بیمه سازندگان ابنیه (ساختمان)",
            "cat": []
          },
          {
            "id": 28,
            "name": "آسانسور",
            "webDescription": "با بیمه میتونی مسئولیت ریسک های استفاده از آسانسور رو به عهده ما بذاری ",
            "webIcon": null,
            "webImage": "7da2f954-bd5a-410c-9f00-3d853e9d3981.png",
            "webTitle": "بیمه دارندگان آسانسور",
            "cat": []
          },
          {
            "id": 31,
            "name": "مدیران",
            "webDescription": "این بیمه مسئولیت مدیران بخش های مختلف رو پوشش میده و شامل مسئولیت هایی مثل مدیران استخر ، مراکز آموزشی ، ساختمان و ... میشه",
            "webIcon": null,
            "webImage": null,
            "webTitle": "بیمه مسئولیت مدیران",
            "cat": [
              {
                "id": 32,
                "name": "ساختمان ",
                "webDescription": "مدیر ساختمان بودن برعکس اسم سادش ، مسئولیت های سنگینی داره ، با بیمه این مسئولیت ها رو به ما بسپار",
                "webIcon": null,
                "webImage": null,
                "webTitle": "بیمه مسئولیت مدیران ساختمان ",
                "cat": []
              },
              {
                "id": 33,
                "name": "استخر",
                "webDescription": "همیشه مسئولیت های مهمی مورد توجه مدیران استخر ها بوده ولی مدیر استخر می تونه با بیمه مسئولیت های خودش رو به عهده شرکت بیمه گر بذاره",
                "webIcon": null,
                "webImage": null,
                "webTitle": "بیمه مسئولیت مدیران استخر",
                "cat": []
              },
              {
                "id": 34,
                "name": "شهربازی",
                "webDescription": "شهربازی جزء محل هایی هستش که احتمال وقوع حادثه توش زیاده ، پس اگه مدیریت شهر بازی رو بر عهده داری ، خیلی راحت با بیمه این مسئولیت ها رو به عهده ما بذار",
                "webIcon": null,
                "webImage": null,
                "webTitle": "بیمه مسئولیت مدیران شهربازی",
                "cat": []
              },
              {
                "id": 35,
                "name": "آموزشی",
                "webDescription": "اگه مدیر یک مرکز آموزشی هستی باید بدونی که مسئولیت های سنگینی نسبت به دانش آموزان ، مراجعه کنندگان و ... داری ، ولی با بیمه می تونی تمام این مسئولیت ها رو به عهده ما بذاری",
                "webIcon": null,
                "webImage": null,
                "webTitle": "بیمه مدیران مراکز آموزشی",
                "cat": []
              },
              {
                "id": 36,
                "name": "مهدکودک",
                "webDescription": "مدیران مهد کودک مسئولیت های زیادی رو بر عهده دارن ، ولی با بیمه می تونی مسئولیت هایی که بر عهدت هستن رو به حداقل برسونی",
                "webIcon": null,
                "webImage": null,
                "webTitle": "بیمه مسئولیت مدیران مهد کودک",
                "cat": []
              },
              {
                "id": 37,
                "name": "مجموعه های ورزشی",
                "webDescription": "اگه مدیریت مجموعه ی ورزشی رو بر عهده داری و نگران مسئولیت های خودت در این رابطه هستی ،  بابیمه این مسئولیت ها رو به عهده ما بذار",
                "webIcon": null,
                "webImage": null,
                "webTitle": "بیمه مسئولیت مدیران مجموعه های ورزشی",
                "cat": []
              },
              {
                "id": 71,
                "name": "تور مسافرتی ",
                "webDescription": "اگه مدیریت تور مسافرتی رو بر عهده داری باید بدونی که مسئولیت افراد شرکت کننده بر عهده تو هستش ، تو می تونی با بیمه همه ی این مسئولیت ها رو پوشش بدی",
                "webIcon": null,
                "webImage": null,
                "webTitle": "بیمه مسئولیت مدیران تور مسافرتی",
                "cat": []
              },
              {
                "id": 72,
                "name": "اردو",
                "webDescription": "اگه میخوای یک اردو تشکیل بدی باید بدونی که در صورتی که اتفاق ناگواری برای کسی بیفته ، مسئولش تویی ، ولی می تونی با بیمه ، مسئولیت این اتفاق ها رو به ما بسپاری",
                "webIcon": null,
                "webImage": null,
                "webTitle": "بیمه مسئولیت مدیران اردو",
                "cat": []
              },
              {
                "id": 78,
                "name": "رستوران،تالار",
                "webDescription": "اگه مدیر رستوران یا تالاری هستی ، با بیمه می تونی مسئولیت های خودتو در قبال مراجعه کننده ها به حداقل برسونی",
                "webIcon": null,
                "webImage": null,
                "webTitle": "بیمه مسئولیت مدیران رستوران و تالار",
                "cat": []
              },
              {
                "id": 79,
                "name": "جایگاه سوخت",
                "webDescription": "اگه مدیریت جایگاه سوختی رو بر عهده داری ، با بیمه دیگه به مسئولیتای خودت فکر نکن ، جبران خسارت ها با ما",
                "webIcon": null,
                "webImage": null,
                "webTitle": "بیمه مسئولیت مدیران جایگاه سوخت",
                "cat": []
              },
              {
                "id": 81,
                "name": "کارواش ها",
                "webDescription": "مدیران کارواش ، مسئولیت خسارات وارده به خودرو های داخل کارواش را بر عهده دارن ، ولی تو می تونی با بیمه این مسئولیت ها رو به حداقل برسونی",
                "webIcon": null,
                "webImage": null,
                "webTitle": "بیمه مسئولیت مدیران کارواش",
                "cat": []
              },
              {
                "id": 80,
                "name": "پارکینگ",
                "webDescription": "اگه مدیریت پارکینگی رو بر عهده داری ، به سادگی می تونی با بیمه ، مسئولیت های خودت رو در قبال خودرو های داخل پارکینگ به عهده ما بذاری",
                "webIcon": null,
                "webImage": null,
                "webTitle": "بیمه مدیران پارکینگ",
                "cat": []
              }
            ]
          },
          {
            "id": 44,
            "name": "پزشکان",
            "webDescription": "این بیمه نامه مسئولیت اشتباهات احتمالی پزشکان  و پیراپزشکان را بر عهده می گیرد",
            "webIcon": null,
            "webImage": null,
            "webTitle": "بیمه مسئولیت پزشکان",
            "cat": [
              {
                "id": 45,
                "name": "پزشکان",
                "webDescription": "هر انسانی تو زندگیش امکان داره اشتباهات بزرگی رو مرتکب بشه ، چه برسه به پزشکی که شاید کوچیک ترین اشتباهش باعث بروز خسارات جبران ناپذیری برای مراجعه کننده بشه ، ولی تو می تونی با بیمه ، مسئولیت این اشتباهاتتو به ما بسپاری",
                "webIcon": null,
                "webImage": null,
                "webTitle": "بیمه مسئولیت پزشکان",
                "cat": []
              },
              {
                "id": 46,
                "name": "پیراپزشکان",
                "webDescription": "هر انسانی تو زندگیش امکان داره اشتباهات بزرگی رو مرتکب بشه ، چه برسه به پزشکی یا پیراپزشکی که شاید کوچیک ترین اشتباهش باعث بروز خسارات جبران ناپذیری برای مراجعه کننده بشه ، ولی تو می تونی با بیمه ، مسئولیت این اشتباهاتتو به ما بسپاری",
                "webIcon": null,
                "webImage": null,
                "webTitle": "بیمه مسئولیت پیرا پزشکان",
                "cat": []
              },
              {
                "id": 97,
                "name": "دامپزشکان",
                "webDescription": null,
                "webIcon": null,
                "webImage": null,
                "webTitle": "دامپزشکان",
                "cat": []
              }
            ]
          },
          {
            "id": 49,
            "name": "مراکز درمانی",
            "webDescription": "این بیمه نامه مسئولیت اشتباهات و ... مسئولان فنی مراکز درمانی مثل بیمارستان ، داروخانه و یا کلینیک ها را پوشش میده",
            "webIcon": null,
            "webImage": null,
            "webTitle": "بیمه مسئولان فنی مراکز درمانی",
            "cat": [
              {
                "id": 50,
                "name": "داروخانه",
                "webDescription": "یک مسئول فنی داروخانه مسئولیت های سنگینی رو بر عهده داره ، ولی با بیمه میتونی این مسئولیت ها رو با ما شریک بشی",
                "webIcon": null,
                "webImage": null,
                "webTitle": "بیمه مسئولیت مسئولان فنی داروخانه",
                "cat": []
              },
              {
                "id": 51,
                "name": "کلینیک",
                "webDescription": "اگه مسئول فنی یک کلینیک هستی باید بدونی که مسئولیت های سنگینی رو بر عهده داری ، ولی با بیمه می تونی این مسئولیت ها رو به عهده ما بذاری",
                "webIcon": null,
                "webImage": null,
                "webTitle": "بیمه مسئولیت مسئولان فنی کلینیک",
                "cat": []
              },
              {
                "id": 52,
                "name": "بیمارستان",
                "webDescription": "مسئول فنی یک بیمارستان مسئولیت های سنگینی رو بر عهده داره ، ولی با بیمه می تونی به راحتی این مسئولیت ها رو به حداقل برسونی",
                "webIcon": null,
                "webImage": null,
                "webTitle": "بیمه مسئولیت مسئولان فنی بیمارستان",
                "cat": []
              }
            ]
          },
          {
            "id": 75,
            "name": "مراکز تجاری",
            "webDescription": "این بیمه مسئولیت مدیران مراکز تجاری  و فروشگاه ها نسبت به مشتریان و ... رو بر عهده می گیرد",
            "webIcon": null,
            "webImage": null,
            "webTitle": "بیمه مسئولیت مدیران مراکز تجاری",
            "cat": [
              {
                "id": 76,
                "name": "فروشگاه",
                "webDescription": "اگه مدیریت یک فروشگاه رو بر عهده داری و نگران مسئولیت های خودت در قبال مشتریان و مراجعه کننده ها هستی ، می تونی با بیمه این مسئولیت ها رو به عهده ما بذاری",
                "webIcon": null,
                "webImage": null,
                "webTitle": "بیمه مسئولیت مدیران فروشگاه",
                "cat": []
              },
              {
                "id": 77,
                "name": "مرکز تجاری",
                "webDescription": "بر عهده گرفتن مدیریت یک مرکز تجاری ، پذیرفتن مسئولیت هایی در قبال مشتریان و مراجعه کننده ها رو به دنبال داره ، ولی تو می تونی با بیمه این مسئولیت ها رو به حداقل برسونی",
                "webIcon": null,
                "webImage": null,
                "webTitle": "بیمه مسئولیت مدیران مراکز تجاری",
                "cat": []
              }
            ]
          },
          {
            "id": 83,
            "name": "مهندسین ساختمانی",
            "webDescription": "اگه شما هم از مهندسین ساختمانی هستید و از بابت مسئولیت های متوجه خودتون نگرانید ، با بیمه همه این مسئولیت ها رو به عهده ما بذارید",
            "webIcon": null,
            "webImage": null,
            "webTitle": "مسئولیت مهندسین",
            "cat": []
          },
          {
            "id": 85,
            "name": "اماکن مذهبی",
            "webDescription": "متولیان اماکن مذهبی و هیأت های عزاداری هم مسئولیت های مهمی رو بر عهده دارن که می تونن با بیمه ، همه اون ها رو به عهده ما بذارن",
            "webIcon": null,
            "webImage": null,
            "webTitle": "مسئولیت متولیان اماکن مذهبی",
            "cat": [
              {
                "id": 86,
                "name": "مساجد و امامزادها ",
                "webDescription": "با داشتن این بیمه ، مسئولیت تمامی حوادث احتمالی در محدوده مساجد و امامزاده های تحت مدیریت خود را به ما بسپارید",
                "webIcon": null,
                "webImage": null,
                "webTitle": "مسئولیت متولیان مساجد و امامزاده ها",
                "cat": []
              },
              {
                "id": 87,
                "name": "هیات های عزاداری",
                "webDescription": "با داشتن این بیمه ، مسئولیت تمامی حوادث احتمالی در محدوده هیأت های تحت مدیریت خود را به ما بسپارید",
                "webIcon": null,
                "webImage": null,
                "webTitle": "مسئولیت متولیان هیأت های عزاداری",
                "cat": []
              }
            ]
          }
        ]
      },
      {
        "id": 38,
        "name": "آتش سوزی",
        "webDescription": "این بیمه نامه ، خسارات ناشی از آتش سوزی منازل (تک واحد یا مجتمع) را پوشش می دهد",
        "webIcon": "98a49181-1f45-415e-8ca3-4b11df5fe806.png",
        "webImage": "825c2fc3-3188-41c9-a2e7-c6cae86f0722.png",
        "webTitle": "بیمه آتش سوزی",
        "cat": [
          {
            "id": 54,
            "name": "مسکونی",
            "webDescription": "با بیمه می تونی خسارت های احتمالی ناشی از آتش سوزی منزلت رو جبران کنی",
            "webIcon": null,
            "webImage": null,
            "webTitle": "بیمه آتش سوزی مسکونی",
            "cat": [
              {
                "id": 70,
                "name": "یک واحد",
                "webDescription": "جبران خسارات ناشی از آتش سوزی ، خیلی بیشتر از حد تصور سخت خواهد بود ، پس با بیمه ، خانه و وسایل داخلشو از خطر آتش سوزی حفظ کن",
                "webIcon": null,
                "webImage": "5af948a0-76ce-42e5-ba0b-cf6e049dc624.png",
                "webTitle": "بیمه آتش سوزی واحد مسکونی",
                "cat": []
              },
              {
                "id": 69,
                "name": "مجتمع ",
                "webDescription": "جبران خسارات ناشی از آتش سوزی ، خیلی بیشتر از حد تصور سخت خواهد بود ، پس با بیمه ، خانه و وسایل داخلشو از خطر آتش سوزی حفظ کن",
                "webIcon": null,
                "webImage": "76c081cc-2cb3-4a2c-89f4-dd991a827e27.png",
                "webTitle": "بیمه آتش سوزی مجتمع مسکونی",
                "cat": []
              },
              {
                "id": 92,
                "name": "بیمه سرقت منازل",
                "webDescription": null,
                "webIcon": null,
                "webImage": "766f965b-0d5d-4b54-bcf0-d3af78d0291a.png",
                "webTitle": "طرح ویژه بیمه آتش سوزی منازل مسکونی و پوشش سرقت",
                "cat": []
              }
            ]
          }
        ]
      },
      {
        "id": 98,
        "name": "حوادث",
        "webDescription": null,
        "webIcon": "df50e5eb-79ac-4b87-8151-8ffbff9ae7c6.png",
        "webImage": "cb07dcff-caf8-46b2-823c-267656115cd1.png",
        "webTitle": "حوادث",
        "cat": [
          {
            "id": 99,
            "name": "طرح جامع مهریار",
            "webDescription": null,
            "webIcon": null,
            "webImage": null,
            "webTitle": "طرح جامع مهریار",
            "cat": []
          },
          {
            "id": 96,
            "name": "حوادث انفرادی",
            "webDescription": null,
            "webIcon": "1247e77b-b7d6-430d-81ec-c0d105f34a77.png",
            "webImage": "aa4b918b-2aee-4c86-a831-239793886d58.png",
            "webTitle": "بیمه حوادث انفرادی",
            "cat": []
          }
        ]
      },
      {
        "id": 40,
        "name": "درمان",
        "webDescription": "این بیمه نامه شامل بیمه های درمان تکمیلی و درمان مسافرتی می باشد و این موارد هزینه های مختلف درمانی را پوشش می دهند",
        "webIcon": "e2d0ee0b-fee4-4152-b4c5-99e5518812f8.png",
        "webImage": "a09d5fe5-2477-48a3-8361-f08f65ded837.png",
        "webTitle": "بیمه درمان",
        "cat": [
          {
            "id": 57,
            "name": "تکمیلی انفرادی",
            "webDescription": "اگه بیماری به سراغت بیاد و بیمه درمان تکمیلی داشته باشی ، خیلی راحت میتونی مشکلات مالی سر راه درمانت رو با بیمه به حداقل برسونی",
            "webIcon": null,
            "webImage": null,
            "webTitle": "بیمه درمان تکمیلی",
            "cat": []
          },
          {
            "id": 56,
            "name": "درمان مسافرتی",
            "webDescription": "اگه بیمه درمان مسافرتی داشته باشی ، دیگه تو مسافرت های خارج از کشورت به هزینه های احتمالی بیماری و ... فکر نمی کنی ، با بیمه ، خودتو از شر این فکرای کلافه کننده راحت کن",
            "webIcon": null,
            "webImage": null,
            "webTitle": "بیمه درمان مسافرتی",
            "cat": []
          }
        ]
      },
      {
        "id": 88,
        "name": "سازمانها-سفیران تپسی",
        "webDescription": "پرسنل و افراد زیرمجموعه سازمان و شرکت های طرف قرارداد بابیمه می توانند جهت بهره مندی از شرایط خاص بیمه نامه های خود وارد این بخش شوند",
        "webIcon": "d16964ba-c50a-4d27-b92a-6d390b9908fe.png",
        "webImage": "244a911e-bdc4-4df1-8260-aca434ce65d9.png",
        "webTitle": "سازمانها",
        "cat": [
          {
            "id": 89,
            "name": "سفیران تپسی",
            "webDescription": "سفیر گرامی ، در این بخش برای شما امکانات و خدمات ویژه ای در نظر گرفته شده است که می توانید با ارائه مدارک لازم ، از تمامی آن ها بهره مند شوید",
            "webIcon": "87e3ea2b-636d-4661-b9a9-9d05e9e73424.png",
            "webImage": null,
            "webTitle": "سفیران تپسی",
            "cat": [
              {
                "id": 90,
                "name": "بیمه ثالث",
                "webDescription": "اگه تصادف کنی و بیمه شخص ثالث داشته باشی ، دیگه لازم نیست به خسارت هایی که به طرف مقابلت زدی فکر کنی . اگه پوشش مناسبی رو انتخاب کرده باشی  هزینه های اون با بیمه است",
                "webIcon": "2e06e299-f994-451a-95ac-deafcc9566f6.jpg",
                "webImage": "7927ee3a-e391-49c3-ac22-fa11c15521ff.png",
                "webTitle": "بیمه شخص ثالث",
                "cat": []
              },
              {
                "id": 91,
                "name": "بیمه بدنه",
                "webDescription": "میتونی با تهیه کردن بیمه بدنه ، بخشی از خسارت هایی که ماشینت تو تصادف دیده رو با بیمه شریک بشی",
                "webIcon": "dd6465e1-67b8-48ae-8681-0ea3994bbad2.jpg",
                "webImage": "913a75db-9a04-432c-b06b-bbe7ee2b8a64.png",
                "webTitle": "بیمه بدنه",
                "cat": []
              }
            ]
          }
        ]
      },
    ],
  }

const componentData = [
    {
        name : "icon",
        value : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwYAfmW3-gEbCKppFWFsF10REo2Bm1p3HADdjFVP6J4MNL1B4C4qQLXwFmbtqMouJyss&usqp=CAU",
        setByCustomer : true
    }
]

const SixEdgePolygon = () => {
    const style = styleConstructor(componentsStyle);
    const data = dataConstructor(componentData)

    // NOTE we destructuring items of layout one by one
    const [one , two , tree , foure , five , six] = MOCK.cat;

    return (
        <SixEdgePolygonWrapper $style={style}>
            <div className="sixEdge__row">
            <div className='sixEdge__wrapper'>
                    <div className="sixEdge__item">
                        {
                            two.name &&
                                <>
                                    <p>{two.webTitle}</p>
                                    <img src={`../../${imageFinder}${one.webIcon}`} alt="icon" />
                                </>
                        }
                    </div>
                </div>
            </div>
            <div className="sixEdge__row sixEdge__row--withSpace">
                <div className='sixEdge__wrapper'>
                    <div className="sixEdge__item">
                        {one.name && 
                            <>
                                <p>{one.webTitle}</p>
                                <img src={`../../${imageFinder}${one.webIcon}`} alt="icon" />
                            </>
                         }
                    </div>
                </div>
                <div className='sixEdge__wrapper'>
                    <div className="sixEdge__item">
                    {
                            tree.name &&
                                <>
                                    <p>{tree.webTitle}</p>
                                    <img src={`../../${imageFinder}${tree.webIcon}`} alt="icon" />
                                </>
                        }
                    </div>
                </div>
            </div>
            <div className="sixEdge__row sixEdge__row--center">
                <div className="sixEdge__wrapper">
                    <div className="sixEdge__item">
                        <img src={`../../${imageFinder}${data.check("icon") ? data.get("icon") : ""}`} alt="" />
                    </div>
                </div>
            </div>
            <div className="sixEdge__row sixEdge__row--withSpace">
            <div  className='sixEdge__wrapper'>
                    <div className="sixEdge__item">
                    {
                            foure.name &&
                                <>
                                    <p>{foure.webTitle}</p>
                                    <img src={`../../${imageFinder}${foure.webIcon}`} alt="icon" />
                                </>
                        }
                    </div>
                </div>
                <div className='sixEdge__wrapper'>
                    <div className="sixEdge__item">
                        {
                            five.name &&
                                <>
                                    <p>{five.webTitle}</p>
                                    <img src={`../../${imageFinder}${five.webIcon}`} alt="icon" />
                                </>
                        }
                    </div>
                </div>
            </div>
            <div className="sixEdge__row">
            <div className='sixEdge__wrapper'>
                    <div className="sixEdge__item">
                    {
                            six.name &&
                                <>
                                    <p>{six.webTitle}</p>
                                    <img src={`../../${imageFinder}${six.webIcon}`} alt="icon" />
                                </>
                        }
                    </div>
                </div>
            </div>
        </SixEdgePolygonWrapper>
    )
}


export default SixEdgePolygon;