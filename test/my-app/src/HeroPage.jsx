import React from "react";
import "./HeroPage.css";
import Header from "./Header.jsx";
import Cards from "./Cards.jsx";

export default function HeroPage() {

    return (
        <div className="HeroPage">
        <Header />
        <Cards />
        </div>
    );
    }