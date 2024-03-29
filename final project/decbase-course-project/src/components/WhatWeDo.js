import servicesList from './../assets/database/WhatWeDo.json';
import WhatWeDoItem from './WhatWeDoItem';
import { useState } from 'react';

function WhatWeDo (props) {
    const [activeCategory, setActiveCategory]  = useState("All");
    let filteredServices =[];
    if (activeCategory === "All") {
        const presentCategories = [];
        filteredServices = servicesList.filter(service => {
            if (!presentCategories.includes(service.category)) {
                presentCategories.push(service.category);
                return true;
            }
            return false;
        });
    }
    else {
        filteredServices = servicesList.filter(service => service.category === activeCategory);
    }
    let doComponents = filteredServices.map((service, index) => 
        <WhatWeDoItem service = {service} key = {index} />
    );

    return (
        <section class="what-we-do">
            <div class="subtitle">
                WHAT WE DO
            </div>
            <div class="title">
                Our Service
            </div>
            <div class="what-we-do-filter-block" >
                <div class="what-we-do-filter-block__button" onClick={e => setActiveCategory ("All")}>
                    All
                </div>
                <div class="what-we-do-filter-block__button" onClick={e => setActiveCategory ("INTERIOR DESIGN")}>
                    INTERIOR DESIGN
                </div>
                <div class="what-we-do-filter-block__button" onClick={e => setActiveCategory ("ARCHITECTURE")}>
                    ARCHITECTURE
                </div>
                <div class="what-we-do-filter-block__button" onClick={e => setActiveCategory ("PLANNING")}>
                    PLANNING
                </div>
            </div>
            <div class="what-we-do__info-block">
                {doComponents}
            </div>
            <div class="what-we-do-decor">
                <svg width="213" height="151" viewBox="0 0 213 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="1.77282" cy="1.84543" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="12.7551" cy="1.84543" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="23.7374" cy="1.84543" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="34.7197" cy="1.84543" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="45.702" cy="1.84543" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="56.6843" cy="1.84543" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="67.6666" cy="1.84543" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="78.6489" cy="1.84543" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="89.6311" cy="1.84543" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="100.613" cy="1.84543" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="111.596" cy="1.84543" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="122.578" cy="1.84543" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="133.56" cy="1.84543" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="144.543" cy="1.84543" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="155.525" cy="1.84543" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="166.507" cy="1.84543" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="177.489" cy="1.84543" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="188.472" cy="1.84543" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="199.454" cy="1.84543" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="210.436" cy="1.84543" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="1.77282" cy="11.6413" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="12.7551" cy="11.6413" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="23.7374" cy="11.6413" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="34.7197" cy="11.6413" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="45.702" cy="11.6413" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="56.6843" cy="11.6413" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="67.6666" cy="11.6413" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="78.6489" cy="11.6413" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="89.6311" cy="11.6413" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="100.613" cy="11.6413" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="111.596" cy="11.6413" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="122.578" cy="11.6413" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="133.56" cy="11.6413" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="144.543" cy="11.6413" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="155.525" cy="11.6413" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="166.507" cy="11.6413" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="177.489" cy="11.6413" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="188.472" cy="11.6413" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="199.454" cy="11.6413" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="210.436" cy="11.6413" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="1.77282" cy="21.4372" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="12.7551" cy="21.4372" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="23.7374" cy="21.4372" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="34.7197" cy="21.4372" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="45.702" cy="21.4372" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="56.6843" cy="21.4372" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="67.6666" cy="21.4372" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="78.6489" cy="21.4372" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="89.6311" cy="21.4372" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="100.613" cy="21.4372" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="111.596" cy="21.4372" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="122.578" cy="21.4372" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="133.56" cy="21.4372" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="144.543" cy="21.4372" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="155.525" cy="21.4372" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="166.507" cy="21.4372" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="177.489" cy="21.4372" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="188.472" cy="21.4372" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="199.454" cy="21.4372" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="210.436" cy="21.4372" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="1.77282" cy="31.2334" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="12.7551" cy="31.2334" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="23.7374" cy="31.2334" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="34.7197" cy="31.2334" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="45.702" cy="31.2334" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="56.6843" cy="31.2334" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="67.6666" cy="31.2334" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="78.6489" cy="31.2334" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="89.6311" cy="31.2334" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="100.613" cy="31.2334" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="111.596" cy="31.2334" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="122.578" cy="31.2334" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="133.56" cy="31.2334" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="144.543" cy="31.2334" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="155.525" cy="31.2334" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="166.507" cy="31.2334" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="177.489" cy="31.2334" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="188.472" cy="31.2334" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="199.454" cy="31.2334" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="210.436" cy="31.2334" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="1.77282" cy="41.0293" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="12.7551" cy="41.0293" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="23.7374" cy="41.0293" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="34.7197" cy="41.0293" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="45.702" cy="41.0293" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="56.6843" cy="41.0293" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="67.6666" cy="41.0293" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="78.6489" cy="41.0293" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="89.6311" cy="41.0293" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="100.613" cy="41.0293" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="111.596" cy="41.0293" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="122.578" cy="41.0293" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="133.56" cy="41.0293" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="144.543" cy="41.0293" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="155.525" cy="41.0293" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="166.507" cy="41.0293" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="177.489" cy="41.0293" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="188.472" cy="41.0293" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="199.454" cy="41.0293" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="210.436" cy="41.0293" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="1.77282" cy="50.8252" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="12.7551" cy="50.8252" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="23.7374" cy="50.8252" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="34.7197" cy="50.8252" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="45.702" cy="50.8252" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="56.6843" cy="50.8252" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="67.6666" cy="50.8252" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="78.6489" cy="50.8252" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="89.6311" cy="50.8252" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="100.613" cy="50.8252" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="111.596" cy="50.8252" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="122.578" cy="50.8252" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="133.56" cy="50.8252" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="144.543" cy="50.8252" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="155.525" cy="50.8252" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="166.507" cy="50.8252" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="177.489" cy="50.8252" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="188.472" cy="50.8252" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="199.454" cy="50.8252" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="210.436" cy="50.8252" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="1.77282" cy="60.6213" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="12.7551" cy="60.6213" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="23.7374" cy="60.6213" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="34.7197" cy="60.6213" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="45.702" cy="60.6213" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="56.6843" cy="60.6213" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="67.6666" cy="60.6213" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="78.6489" cy="60.6213" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="89.6311" cy="60.6213" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="100.613" cy="60.6213" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="111.596" cy="60.6213" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="122.578" cy="60.6213" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="133.56" cy="60.6213" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="144.543" cy="60.6213" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="155.525" cy="60.6213" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="166.507" cy="60.6213" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="177.489" cy="60.6213" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="188.472" cy="60.6213" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="199.454" cy="60.6213" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="210.436" cy="60.6213" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="1.77282" cy="70.4172" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="12.7551" cy="70.4172" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="23.7374" cy="70.4172" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="34.7197" cy="70.4172" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="45.702" cy="70.4172" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="56.6843" cy="70.4172" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="67.6666" cy="70.4172" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="78.6489" cy="70.4172" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="89.6311" cy="70.4172" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="100.613" cy="70.4172" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="111.596" cy="70.4172" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="122.578" cy="70.4172" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="133.56" cy="70.4172" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="144.543" cy="70.4172" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="155.525" cy="70.4172" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="166.507" cy="70.4172" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="177.489" cy="70.4172" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="188.472" cy="70.4172" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="199.454" cy="70.4172" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="210.436" cy="70.4172" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="1.77282" cy="80.2131" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="12.7551" cy="80.2131" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="23.7374" cy="80.2131" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="34.7197" cy="80.2131" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="45.702" cy="80.2131" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="56.6843" cy="80.2131" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="67.6666" cy="80.2131" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="78.6489" cy="80.2131" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="89.6311" cy="80.2131" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="100.613" cy="80.2131" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="111.596" cy="80.2131" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="122.578" cy="80.2131" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="133.56" cy="80.2131" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="144.543" cy="80.2131" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="155.525" cy="80.2131" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="166.507" cy="80.2131" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="177.489" cy="80.2131" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="188.472" cy="80.2131" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="199.454" cy="80.2131" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="210.436" cy="80.2131" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="1.77282" cy="90.009" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="12.7551" cy="90.009" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="23.7374" cy="90.009" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="34.7197" cy="90.009" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="45.702" cy="90.009" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="56.6843" cy="90.009" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="67.6666" cy="90.009" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="78.6489" cy="90.009" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="89.6311" cy="90.009" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="100.613" cy="90.009" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="111.596" cy="90.009" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="122.578" cy="90.009" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="133.56" cy="90.009" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="144.543" cy="90.009" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="155.525" cy="90.009" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="166.507" cy="90.009" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="177.489" cy="90.009" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="188.472" cy="90.009" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="199.454" cy="90.009" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="210.436" cy="90.009" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="1.77282" cy="99.8052" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="12.7551" cy="99.8052" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="23.7374" cy="99.8052" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="34.7197" cy="99.8052" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="45.702" cy="99.8052" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="56.6843" cy="99.8052" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="67.6666" cy="99.8052" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="78.6489" cy="99.8052" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="89.6311" cy="99.8052" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="100.613" cy="99.8052" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="111.596" cy="99.8052" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="122.578" cy="99.8052" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="133.56" cy="99.8052" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="144.543" cy="99.8052" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="155.525" cy="99.8052" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="166.507" cy="99.8052" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="177.489" cy="99.8052" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="188.472" cy="99.8052" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="199.454" cy="99.8052" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="210.436" cy="99.8052" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="1.77282" cy="109.601" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="12.7551" cy="109.601" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="23.7374" cy="109.601" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="34.7197" cy="109.601" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="45.702" cy="109.601" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="56.6843" cy="109.601" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="67.6666" cy="109.601" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="78.6489" cy="109.601" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="89.6311" cy="109.601" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="100.613" cy="109.601" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="111.596" cy="109.601" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="122.578" cy="109.601" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="133.56" cy="109.601" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="144.543" cy="109.601" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="155.525" cy="109.601" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="166.507" cy="109.601" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="177.489" cy="109.601" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="188.472" cy="109.601" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="199.454" cy="109.601" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="210.436" cy="109.601" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="1.77282" cy="119.397" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="12.7551" cy="119.397" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="23.7374" cy="119.397" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="34.7197" cy="119.397" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="45.702" cy="119.397" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="56.6843" cy="119.397" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="67.6666" cy="119.397" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="78.6489" cy="119.397" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="89.6311" cy="119.397" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="100.613" cy="119.397" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="111.596" cy="119.397" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="122.578" cy="119.397" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="133.56" cy="119.397" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="144.543" cy="119.397" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="155.525" cy="119.397" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="166.507" cy="119.397" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="177.489" cy="119.397" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="188.472" cy="119.397" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="199.454" cy="119.397" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="210.436" cy="119.397" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="1.77282" cy="129.193" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="12.7551" cy="129.193" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="23.7374" cy="129.193" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="34.7197" cy="129.193" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="45.702" cy="129.193" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="56.6843" cy="129.193" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="67.6666" cy="129.193" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="78.6489" cy="129.193" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="89.6311" cy="129.193" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="100.613" cy="129.193" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="111.596" cy="129.193" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="122.578" cy="129.193" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="133.56" cy="129.193" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="144.543" cy="129.193" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="155.525" cy="129.193" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="166.507" cy="129.193" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="177.489" cy="129.193" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="188.472" cy="129.193" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="199.454" cy="129.193" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="210.436" cy="129.193" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="1.77282" cy="138.989" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="12.7551" cy="138.989" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="23.7374" cy="138.989" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="34.7197" cy="138.989" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="45.702" cy="138.989" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="56.6843" cy="138.989" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="67.6666" cy="138.989" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="78.6489" cy="138.989" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="89.6311" cy="138.989" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="100.613" cy="138.989" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="111.596" cy="138.989" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="122.578" cy="138.989" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="133.56" cy="138.989" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="144.543" cy="138.989" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="155.525" cy="138.989" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="166.507" cy="138.989" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="177.489" cy="138.989" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="188.472" cy="138.989" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="199.454" cy="138.989" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="210.436" cy="138.989" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="1.77282" cy="148.785" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="12.7551" cy="148.785" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="23.7374" cy="148.785" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="34.7197" cy="148.785" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="45.702" cy="148.785" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="56.6843" cy="148.785" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="67.6666" cy="148.785" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="78.6489" cy="148.785" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="89.6311" cy="148.785" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="100.613" cy="148.785" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="111.596" cy="148.785" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="122.578" cy="148.785" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="133.56" cy="148.785" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="144.543" cy="148.785" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="155.525" cy="148.785" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="166.507" cy="148.785" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="177.489" cy="148.785" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="188.472" cy="148.785" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="199.454" cy="148.785" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                    <ellipse cx="210.436" cy="148.785" rx="1.77282" ry="1.73899" fill="#EBEBEB"/>
                </svg>
            </div>
        </section>
    )
}

export default WhatWeDo;