import { ref } from "vue";
import { defineStore } from "pinia";

export const useAccordionStore = defineStore("accordion", () => {
  const infoStAccordion = ref([
    {
      id: 1,
      title: "Образование",
      author: "infospes",
      texts: [
        {
          text: "Кубанский государственный медицинский университет, квалификация Врач по специальности Лечебное дело , 2010 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
      ],
      active: false,
    },
    {
      id: 2,
      title: "Дополнительное образование",
      author: "infospes",
      texts: [
        {
          text: "Кубанский государственный медицинский университет, квалификация Врач по специальности Лечебное дело , 2010 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
      ],
      active: false,
    },
    {
      id: 3,
      title: "Направления работы специалиста",
      author: "infospes",
      texts: [
        {
          text: "Кубанский государственный медицинский университет, квалификация Врач по специальности Лечебное дело , 2010 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
      ],
      active: false,
    },
    {
      id: 4,
      title: "Сертификаты",
      author: "infospes",
      texts: [
        {
          text: "Кубанский государственный медицинский университет, квалификация Врач по специальности Лечебное дело , 2010 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
        {
          text: "Кубанский государственный медицинский университет, квалификация Врач по специальности Лечебное дело , 2010 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
        {
          text: "Кубанский государственный медицинский университет, квалификация Врач по специальности Лечебное дело , 2010 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
      ],
      active: false,
    },
  ]);

  const infoSrAccordion = ref([
    {
      id: 1,
      title: "Образование",
      author: "infoservices",
      texts: [
        {
          text: "Кубанский государственный медицинский университет, квалификация Врач по специальности Лечебное дело , 2010 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
      ],
      active: false,
    },
    {
      id: 2,
      title: "Дополнительное образование",
      author: "infoservices",
      texts: [
        {
          text: "Кубанский государственный медицинский университет, квалификация Врач по специальности Лечебное дело , 2010 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
      ],
      active: false,
    },
    {
      id: 3,
      title: "Направления работы специалиста",
      author: "infoservices",
      texts: [
        {
          text: "Кубанский государственный медицинский университет, квалификация Врач по специальности Лечебное дело , 2010 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
      ],
      active: false,
    },
    {
      id: 4,
      title: "Сертификаты",
      author: "infoservices",
      texts: [
        {
          text: "Кубанский государственный медицинский университет, квалификация Врач по специальности Лечебное дело , 2010 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
        {
          text: "Кубанский государственный медицинский университет, квалификация Врач по специальности Лечебное дело , 2010 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
        {
          text: "Кубанский государственный медицинский университет, квалификация Врач по специальности Лечебное дело , 2010 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
      ],
      active: false,
    },
    {
      id: 5,
      title: "Сертификаты",
      author: "infoservices",
      texts: [
        {
          text: "Кубанский государственный медицинский университет, квалификация Врач по специальности Лечебное дело , 2010 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
        {
          text: "Кубанский государственный медицинский университет, квалификация Врач по специальности Лечебное дело , 2010 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
        {
          text: "Кубанский государственный медицинский университет, квалификация Врач по специальности Лечебное дело , 2010 г.",
        },
        {
          text: "Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.",
        },
      ],
      active: false,
    },
  ]);
  const infoCostAccordion = ref([
    {
      id: 1,
      title: "Фракционный микроигольчатый RF-лифтинг",
      author: "infoCost",
      costTexts: [
        {
          text: "Прием (осмотр, консультация) врача-косметолога первичный",
          price: "от 1 200 ₽",
        },
        {
          text: "Удаление подкожно-жировой клетчатки с помощью электрического высокочастотного импульса (фракционный микроигольчатый RF лифтинг: Локти)",
          price: "от 8 800 ₽",
        },
        {
          text: "Удаление подкожно-жировой клетчатки с помощью электрического высокочастотного импульса (фракционный микроигольчатый RF лифтинг: Области век)",
          price: "от 8 800 ₽",
        },
        {
          text: "Удаление подкожно-жировой клетчатки с помощью электрического высокочастотного импульса (фракционный микроигольчатый RF лифтинг: Одна зона (размер ладони) коррекция рубцов и растяжек)",
          price: "от 8 800 ₽",
        },
        {
          text: "Удаление подкожно-жировой клетчатки с помощью электрического высокочастотного импульса (фракционный микроигольчатый RF лифтинг: Области подмышек (лечение гипергидроза))",
          price: "от 11 000 ₽",
        },
      ],
      active: false,
    },
  ]);
  const infoPriceAccordion = ref([
    {
      id: 1,
      title: "Аппаратная косметология",
      author: "infoPrice",
      active: false,
      priceServices: [
        {
          id: 1,
          author: "infoPriceChildren",
          priceTitle: "Ультразвуковое лечение кожи. Альтера-терапия",
          active: false,
          children: [
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
          ],
        },
        {
          id: 2,
          author: "infoPriceChildren",
          priceTitle: "Гидропилинг HydraFacial MD",
          active: false,
          children: [
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
          ],
        },
        {
          id: 3,
          author: "infoPriceChildren",
          priceTitle: "Лазерная шлифовка",
          active: false,
          children: [
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
          ],
        },
        {
          id: 4,
          author: "infoPriceChildren",
          priceTitle: "Микротоки Biogenie",
          active: false,
          children: [
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
          ],
        },
        {
          id: 5,
          author: "infoPriceChildren",
          priceTitle: "Фототерапия BBL",
          active: false,
          children: [
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
          ],
        },
        {
          id: 6,
          author: "infoPriceChildren",
          priceTitle: "Фракционный микроигольчатый RF-лифтинг",
          active: false,
          children: [
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Инъекционная косметология",
      author: "infoPrice",
      active: false,
      priceServices: [
        {
          id: 1,
          author: "infoPriceChildren",
          priceTitle: "Ультразвуковое лечение кожи. Альтера-терапия",
          active: false,
          children: [
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
          ],
        },
        {
          id: 2,
          author: "infoPriceChildren",
          priceTitle: "Гидропилинг HydraFacial MD",
          active: false,
          children: [
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Эстетическая косметология",
      author: "infoPrice",
      active: false,
      priceServices: [
        {
          id: 1,
          author: "infoPriceChildren",
          priceTitle: "Ультразвуковое лечение кожи. Альтера-терапия",
          active: false,
          children: [
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
          ],
        },
        {
          id: 2,
          author: "infoPriceChildren",
          priceTitle: "Гидропилинг HydraFacial MD",
          active: false,
          children: [
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Лазерная косметология",
      author: "infoPrice",
      active: false,
      priceServices: [
        {
          id: 1,
          author: "infoPriceChildren",
          priceTitle: "Ультразвуковое лечение кожи. Альтера-терапия",
          active: false,
          children: [
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
          ],
        },
        {
          id: 2,
          author: "infoPriceChildren",
          priceTitle: "Гидропилинг HydraFacial MD",
          active: false,
          children: [
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Трихология",
      author: "infoPrice",
      active: false,
      priceServices: [
        {
          id: 1,
          author: "infoPriceChildren",
          priceTitle: "Ультразвуковое лечение кожи. Альтера-терапия",
          active: false,
          children: [
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
          ],
        },
        {
          id: 2,
          author: "infoPriceChildren",
          priceTitle: "Гидропилинг HydraFacial MD",
          active: false,
          children: [
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Подология",
      author: "infoPrice",
      active: false,
      priceServices: [
        {
          id: 1,
          author: "infoPriceChildren",
          priceTitle: "Ультразвуковое лечение кожи. Альтера-терапия",
          active: false,
          children: [
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
          ],
        },
        {
          id: 2,
          author: "infoPriceChildren",
          priceTitle: "Гидропилинг HydraFacial MD",
          active: false,
          children: [
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
          ],
        },
      ],
    },
    {
      id: 7,
      title: "Консультация",
      author: "infoPrice",
      active: false,
      priceServices: [
        {
          id: 1,
          author: "infoPriceChildren",
          priceTitle: "Ультразвуковое лечение кожи. Альтера-терапия",
          active: false,
          children: [
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
          ],
        },
        {
          id: 2,
          author: "infoPriceChildren",
          priceTitle: "Гидропилинг HydraFacial MD",
          active: false,
          children: [
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
            {
              priceText:
                "Прием (осмотр, консультация) врача-косметолога первичный",
              priceSumma: "от 1 200 ₽",
            },
          ],
        },
      ],
    },
  ]);

  const setInfoAccordion = (id, author) => {
    if (author == "infospes") {
      infoStAccordion.value.forEach((item) => {
        if (id == item.id) {
          item.active = !item.active;
        } else {
          item.active = false;
        }
      });
    }
    if (author == "infoservices") {
      infoSrAccordion.value.forEach((item) => {
        if (id == item.id) {
          item.active = !item.active;
        } else {
          item.active = false;
        }
      });
    }
    if (author == "infoCost") {
      infoCostAccordion.value.forEach((item) => {
        if (id == item.id) {
          item.active = !item.active;
        } else {
          item.active = false;
        }
      });
    }
    if (author == "infoPrice") {
      infoPriceAccordion.value.forEach((item) => {
        if (id == item.id) {
          item.active = !item.active;
        } else {
          item.active = false;
        }
      });
    }
    if (author == "infoPriceChildren") {
      infoPriceAccordion.value.forEach((item) => {
        item.priceServices.forEach((itemPrice) => {
          if (itemPrice.id == id) {
            item.active = !item.active;
            itemPrice.active = !itemPrice.active;
          } else {
            itemPrice.active = false;
          }
        });
      });
    }
  };

  return {
    infoStAccordion,
    infoSrAccordion,
    infoCostAccordion,
    infoPriceAccordion,
    setInfoAccordion,
  };
});
