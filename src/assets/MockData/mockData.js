import { ReactComponent as AK_ORIGINALS } from "../../assets/images/AK Originals.svg";
import { ReactComponent as BLACKJACK } from "../../assets/images/Blackjack.svg";
import { ReactComponent as BONUS_BATTLES } from "../../assets/images/Bonus_Battle.svg";
import { ReactComponent as CHALLENGES } from "../../assets/images/Challenges.svg";
import { ReactComponent as SPORTS_IMG } from "../../assets/images/Frame (10).svg";
import { ReactComponent as NFT_IMG } from "../../assets/images/Frame (11).svg";
import { ReactComponent as FEATURES_IMG } from "../../assets/images/Frame (12).svg";
import { ReactComponent as PORTFOLIO_IMG } from "../../assets/images/Frame (13).svg";
import { ReactComponent as CLANS_IMG } from "../../assets/images/Frame (14).svg";
import { ReactComponent as LOTTERY_IMG } from "../../assets/images/Frame (15).svg";
import { ReactComponent as VIDEO_IMG } from "../../assets/images/Frame (16).svg";
import { ReactComponent as AWARD_IMG } from "../../assets/images/Frame (17).svg";
import { ReactComponent as CASINO_IMG } from "../../assets/images/Frame (9).svg";
import { ReactComponent as GAME_SHOWS } from "../../assets/images/Hat.svg";
import { ReactComponent as LIVE_CASINO } from "../../assets/images/Live Casino.svg";
import { ReactComponent as MARKETPLACE } from "../../assets/images/Marketplace.svg";
import { ReactComponent as MY_BETS } from "../../assets/images/MyBets.svg";
import { ReactComponent as NFT_LOANS } from "../../assets/images/NFT_Loans.svg";
import { ReactComponent as NFT_LOOTBOXES } from "../../assets/images/NFT_Lootboxes.svg";
import { ReactComponent as ROLLERCOASTER } from "../../assets/images/Rollercoaster.svg";
import { ReactComponent as ROULETTE } from "../../assets/images/Roulette.svg";
import { ReactComponent as SETTINGS_TOOL } from "../../assets/images/Settings_Tool.svg";
import { ReactComponent as SLOTS } from "../../assets/images/Slots.svg";
import { ReactComponent as WITH_SIDEBETS } from "../../assets/images/WithSidebets.svg";
import { ReactComponent as JACKPOT_IMG } from "../../assets/images/svg.svg";

import CART_ICON_2 from "../../assets/images/IMAGE (10).png";
import CART_ICON_3 from "../../assets/images/IMAGE (11).png";
import CART_ICON_4 from "../../assets/images/IMAGE (12).png";
import CART_ICON_5 from "../../assets/images/IMAGE (13).png";
import CART_IMG_1 from "../../assets/images/IMAGE (2).png";
import BONUSES_IMG_1 from "../../assets/images/IMAGE (33).png";
import BONUSES_IMG_2 from "../../assets/images/IMAGE (34).png";
import BONUSES_IMG_3 from "../../assets/images/IMAGE (35).png";
import BONUSES_IMG_4 from "../../assets/images/IMAGE (36).png";
import BONUSES_IMG_5 from "../../assets/images/IMAGE (37).png";
import BONUSES_IMG_6 from "../../assets/images/IMAGE (38).png";
import CART_ICON_1 from "../../assets/images/IMAGE (4).png";
import CART_IMG_2 from "../../assets/images/IMAGE (5).png";
import CART_IMG_3 from "../../assets/images/IMAGE (6).png";
import CART_IMG_4 from "../../assets/images/IMAGE (8).png";
import CART_IMG_5 from "../../assets/images/IMAGE (9).png";

import CASINO_IMG_1 from "../../assets/images/IMAGE (14).png";
import CASINO_IMG_2 from "../../assets/images/IMAGE (15).png";
import CASINO_IMG_3 from "../../assets/images/IMAGE (16).png";
import CASINO_IMG_4 from "../../assets/images/IMAGE (17).png";
import CASINO_IMG_5 from "../../assets/images/IMAGE (18).png";
import CASINO_IMG_6 from "../../assets/images/IMAGE (19).png";

export const SECTIONS = [
  {
    name: "PLAY AK GAMES",
    selectedOption: null,
    options: [
      {
        icon: CASINO_IMG,
        text: "Casino",
        hasDropdown: true,
        selectedSubOption: null,
        isOpenedDropdown: false,
        sidebarUrl: "/casino",
        dropdownOptions: [
          {
            icon: AK_ORIGINALS,
            text: "AK Originals",
            sidebarUrl: "/ak-originals",
          },
          {
            icon: BONUS_BATTLES,
            text: "Bonus Battles",
            sidebarUrl: "/bonus-battles",
          },
          { icon: SLOTS, text: "Slots", sidebarUrl: "/slots" },
          { icon: GAME_SHOWS, text: "Game Shows", sidebarUrl: "/game-shows" },
          {
            icon: LIVE_CASINO,
            text: "Live Casino",
            sidebarUrl: "/live-casino",
          },
          { icon: ROULETTE, text: "Roulette", sidebarUrl: "/roulette" },
          { icon: BLACKJACK, text: "Blackjack", sidebarUrl: "/blackjack" },
          {
            icon: WITH_SIDEBETS,
            text: "With Sidebets",
            sidebarUrl: "/with-sidebets",
          },
          {
            icon: CHALLENGES,
            text: "With Challenges",
            sidebarUrl: "/challenges",
          },
          { icon: CHALLENGES, text: "Challenges", sidebarUrl: "/challenges" },
          {
            icon: ROLLERCOASTER,
            text: "Rollercoaster",
            sidebarUrl: "/rollercoaster",
          },
        ],
      },
      {
        icon: SPORTS_IMG,
        text: "Sports",
        hasDropdown: true,
        selectedSubOption: null,
        isOpenedDropdown: false,
        sidebarUrl: "/sports",
        dropdownOptions: [
          { icon: MY_BETS, text: "My Bets", sidebarUrl: "/my-bets" },
        ],
      },
      {
        icon: NFT_IMG,
        text: "NFT",
        hasDropdown: true,
        selectedSubOption: null,
        isOpenedDropdown: false,
        sidebarUrl: "/nft",
        dropdownOptions: [
          { icon: NFT_LOANS, text: "NFT Loans", sidebarUrl: "/nft-loans" },
          {
            icon: MARKETPLACE,
            text: "Marketplace",
            sidebarUrl: "/marketplace",
          },
          {
            icon: NFT_LOOTBOXES,
            text: "NFT Lootboxes",
            sidebarUrl: "/nft-lootboxes",
          },
          {
            icon: SETTINGS_TOOL,
            text: "Manage AKbots",
            sidebarUrl: "/manage-akbots",
          },
          {
            icon: SETTINGS_TOOL,
            text: "Manage Sportsbots",
            sidebarUrl: "/manage-sportsbots",
          },
        ],
      },
      {
        icon: FEATURES_IMG,
        text: "Crypto Features",
        hasDropdown: true,
        selectedSubOption: null,
        isOpenedDropdown: false,
        dropdownOptions: [], // Add dropdown options and sidebarUrl as needed
      },
      {
        icon: PORTFOLIO_IMG,
        text: "Crypto Portfolio",
        hasDropdown: false,
        selectedSubOption: null,
        isOpenedDropdown: false,
        sidebarUrl: "/crypto-portfolio",
      },
      {
        icon: CLANS_IMG,
        text: "Clans",
        hasDropdown: false,
        selectedSubOption: null,
        isOpenedDropdown: false,
        sidebarUrl: "/clans",
      },
    ],
  },
  {
    name: "OTHER",
    selectedOption: null,
    options: [
      {
        icon: LOTTERY_IMG,
        text: "AK Lottery",
        number: "$5.03K",
        count: "64",
        sidebarUrl: "/ak-lottery",
      },
      {
        icon: JACKPOT_IMG,
        text: "Jackpot",
        number: "$31.2",
        count: "10",
        sidebarUrl: "/jackpot",
      },
      { icon: VIDEO_IMG, text: "Streams", sidebarUrl: "/streams" },
    ],
  },
  {
    name: "EVENTS",
    selectedOption: null,
    options: [{ icon: AWARD_IMG, text: "$25K Race", sidebarUrl: "/25k-race" }],
  },
];

const cardsArray = [
  {
    name: "Card 1 AK Originals",
    img: CASINO_IMG_1,
    subcategories: ["Evolution", "Original"],
  },
  {
    name: "Card 2 AK Originals",
    img: CASINO_IMG_2,
    subcategories: ["Original"],
  },
  {
    name: "Card 3 AK Originals",
    img: CASINO_IMG_3,
    subcategories: ["Evolution"],
  },
  {
    name: "Card 4 AK Originals",
    img: CASINO_IMG_4,
    subcategories: ["Belatra", "Original"],
  },
  {
    name: "Card 5 AK Originals",
    img: CASINO_IMG_5,
    subcategories: ["Evolution", "Belatra"],
  },
  {
    name: "Card 6 AK Originals",
    img: CASINO_IMG_6,
    subcategories: ["Original"],
  },
];

const cardsArray1 = [];
for (let i = 0; i < 5; i++) {
  cardsArray1.push(...cardsArray);
  cardsArray1.push(...cardsArray);
}
export const DATA_CONTENT = {
  categories: [
    {
      name: "Casino",
      subcategories: [
        {
          name: "AK_ORIGINALS",
          cards: cardsArray1,
        },
        {
          name: "SLOTS",
          cards: cardsArray1,
        },
        {
          name: "GAME_SHOWS",
          cards: cardsArray1,
        },
        {
          name: "LIVE_CASINO",
          cards: cardsArray1,
        },
        {
          name: "ROULETTE",
          cards: cardsArray1,
        },
        {
          name: "BLACKJACK",
          cards: cardsArray1,
        },
        {
          name: "WITH_SIDEBETS",
          cards: cardsArray1,
        },
        {
          name: "WITH_CHALLENGES",
          cards: cardsArray1,
        },
        {
          name: "CHALLENGES",
          cards: cardsArray1,
        },
        {
          name: "ROLLERCOASTER",
          cards: cardsArray1,
        },
      ],
    },
    {
      name: "Sports",
      subcategories: [
        {
          name: "SPORTS",
          cards: cardsArray1,
        },
        {
          name: "MY_BETS",
          cards: cardsArray1,
        },
      ],
    },
    {
      name: "Nft",
      subcategories: [
        {
          name: "NFTS",
          cards: cardsArray1,
        },
        {
          name: "NFT_LOANS",
          cards: cardsArray1,
        },
        {
          name: "MARKETPLACE",
          cards: cardsArray1,
        },
        {
          name: "NFT_LOOTBOXES",
          cards: cardsArray1,
        },
        {
          name: "MANAGE_AKBOTS",
          cards: cardsArray1,
        },
        {
          name: "MANAGE_SPORSBOTS",
          cards: cardsArray1,
        },
      ],
    },
  ],
};

export const IMAGES = [
  CASINO_IMG_1,
  CASINO_IMG_2,
  CASINO_IMG_3,
  CASINO_IMG_4,
  CASINO_IMG_5,
  CASINO_IMG_6,
  CASINO_IMG_1,
  CASINO_IMG_2,
  CASINO_IMG_3,
  CASINO_IMG_4,
  CASINO_IMG_5,
  CASINO_IMG_6,
  CASINO_IMG_1,
  CASINO_IMG_2,
  CASINO_IMG_3,
  CASINO_IMG_4,
  CASINO_IMG_5,
  CASINO_IMG_6,
  CASINO_IMG_1,
  CASINO_IMG_2,
  CASINO_IMG_3,
  CASINO_IMG_4,
  CASINO_IMG_5,
  CASINO_IMG_6,
  CASINO_IMG_1,
  CASINO_IMG_2,
  CASINO_IMG_3,
  CASINO_IMG_4,
  CASINO_IMG_5,
  CASINO_IMG_6,
  CASINO_IMG_1,
  CASINO_IMG_2,
  CASINO_IMG_3,
  CASINO_IMG_4,
  CASINO_IMG_5,
  CASINO_IMG_6,
  CASINO_IMG_1,
  CASINO_IMG_2,
  CASINO_IMG_3,
  CASINO_IMG_4,
  CASINO_IMG_5,
  CASINO_IMG_6,
  CASINO_IMG_1,
  CASINO_IMG_2,
  CASINO_IMG_3,
  CASINO_IMG_4,
  CASINO_IMG_5,
  CASINO_IMG_6,
];

export const WINNER_CARDS = {
  Live: [
    {
      imgSrc: CART_IMG_4,
      cartIconSrc: CART_ICON_4,
      username: "landice",
      price: "500.00",
    },
    {
      imgSrc: CART_IMG_1,
      cartIconSrc: CART_ICON_1,
      username: "Hidden",
      price: "320.00",
    },
    {
      imgSrc: CART_IMG_3,
      cartIconSrc: CART_ICON_3,
      username: "QSharp",
      price: "521.96",
    },
    {
      imgSrc: CART_IMG_2,
      cartIconSrc: CART_ICON_2,
      username: "staymelo7",
      price: "161.06",
    },
    {
      imgSrc: CART_IMG_5,
      cartIconSrc: CART_ICON_5,
      username: "Melody👀🎵",
      price: "29.30",
    },
  ],
  Month: [
    {
      imgSrc: CART_IMG_5,
      cartIconSrc: CART_ICON_5,
      username: "Melody👀🎵",
      price: "29.30",
    },
    {
      imgSrc: CART_IMG_3,
      cartIconSrc: CART_ICON_3,
      username: "QSharp",
      price: "521.96",
    },
    {
      imgSrc: CART_IMG_4,
      cartIconSrc: CART_ICON_4,
      username: "landice",
      price: "500.00",
    },
    {
      imgSrc: CART_IMG_1,
      cartIconSrc: CART_ICON_1,
      username: "Hidden",
      price: "320.00",
    },
    {
      imgSrc: CART_IMG_2,
      cartIconSrc: CART_ICON_2,
      username: "staymelo7",
      price: "161.06",
    },
  ],
  Week: [
    {
      imgSrc: CART_IMG_3,
      cartIconSrc: CART_ICON_3,
      username: "QSharp",
      price: "521.96",
    },
    {
      imgSrc: CART_IMG_4,
      cartIconSrc: CART_ICON_4,
      username: "landice",
      price: "500.00",
    },
  ],
  Day: [
    {
      imgSrc: CART_IMG_4,
      cartIconSrc: CART_ICON_4,
      username: "landice",
      price: "500.00",
    },
    {
      imgSrc: CART_IMG_5,
      cartIconSrc: CART_ICON_5,
      username: "Melody👀🎵",
      price: "29.30",
    },
  ],
};

export const DAILY_BONUSES = {
  Day: [
    {
      imageSrc: BONUSES_IMG_1,
      title: "Hidden",
      amount: "$11,393.27",
    },
    {
      imageSrc: BONUSES_IMG_2,
      title: "Aj9",
      amount: "$11,393.27",
    },
    {
      imageSrc: BONUSES_IMG_3,
      title: "hellomotto",
      amount: "$11,393.27",
    },
  ],
  Week: [
    {
      imageSrc: BONUSES_IMG_4,
      title: "theoneforus",
      amount: "$11,393.27",
    },
    {
      imageSrc: BONUSES_IMG_5,
      title: "Hidden",
      amount: "$11,393.27",
    },
    {
      imageSrc: BONUSES_IMG_6,
      title: "Phil9077",
      amount: "$11,393.27",
    },
  ],
  Month: [
    {
      imageSrc: BONUSES_IMG_4,
      title: "theoneforus",
      amount: "$11,393.27",
    },
    {
      imageSrc: BONUSES_IMG_5,
      title: "Hidden",
      amount: "$11,393.27",
    },
    {
      imageSrc: BONUSES_IMG_6,
      title: "Phil9077",
      amount: "$11,393.27",
    },
  ],
  All: [
    {
      imageSrc: BONUSES_IMG_1,
      title: "Hidden",
      amount: "$11,393.27",
    },
    {
      imageSrc: BONUSES_IMG_2,
      title: "Aj9",
      amount: "$11,393.27",
    },
    {
      imageSrc: BONUSES_IMG_3,
      title: "hellomotto",
      amount: "$11,393.27",
    },
    {
      imageSrc: BONUSES_IMG_4,
      title: "theoneforus",
      amount: "$11,393.27",
    },
    {
      imageSrc: BONUSES_IMG_5,
      title: "Hidden",
      amount: "$11,393.27",
    },
    {
      imageSrc: BONUSES_IMG_6,
      title: "Phil9077",
      amount: "$11,393.27",
    },
  ],
};
