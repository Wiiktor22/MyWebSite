import MoneyTrackerPhoto from '../projects/MT_Screen.jpg';
import YahtzeePhoto from '../projects/YScreen.jpg';
import NewsAppPhoto from '../projects/NScreen.jpg';
import WeatherAppPhoto from '../projects/WScreen.png';

export const projects = [
    {
        title: "MoneyTracker",
        text: "Program służący do analizy budżetu domowego, pozwala zapisywać przychody i wydatki. Napisany w React + Redux, natomiast jako system autoryzacji oraz bazę danych użyłem Firebase.",
        photo: MoneyTrackerPhoto,
        live: "https://moneytracker-28506.web.app",
        code: "https://github.com/Wiiktor22/MoneyTracker"
    },
    {
        title: "NewsApp",
        text: "Aplikacja wyświetlająca newsy, w różnych kategoriach. Aplikacja zbudowana z użyciem duetu React + Redux, korzystająca z News API.",
        photo: NewsAppPhoto,
        live: "https://wiiktor22.github.io/NewsApp/",
        code: "https://github.com/Wiiktor22/NewsApp"
    },
    {
        title: "WeatherApp",
        text: "Progresywna aplikacja webowa stworzona z myślą, o użytkownikach mobilnych wyświetlająca pogodę dla obecnej lokalizacji. Aplikacja napisana w React (z użyciem Context'u i hook'ów).",
        photo: WeatherAppPhoto,
        live: "https://wiiktor22.github.io/WeatherApp/",
        code: "https://github.com/Wiiktor22/WeatherApp"
    },
    {
        title: "Yahtzee!",
        text: "Tradycyjna gra planszowa „w kości”, popularna na całym świecie. Gra napisana w React.",
        photo: YahtzeePhoto,
        live: "https://wiiktor22.github.io/Yahtzee-Game/",
        code: "https://github.com/Wiiktor22/Yahtzee-Game"
    }
];