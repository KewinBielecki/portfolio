import React from 'react';
import '../../Styles/skills.scss';


export class Skills extends React.Component {
    state = {
        activeText: 'Kliknij na ikonę i dowiedz się wiecej!',
    }

    htmlHandleClick = () => {
        this.setState({
            activeText: 'HTML. Staram się tworzyć jak najbardziej semantyczne strony, stosując się do obowiązujących standardów (HTML5) oraz metodologii BEM. Przekłada się to lepsze pozycjonowanie strony w wyszukiwarkach.'
        })
    };
    cssHandleClick = () => {
        this.setState({
            activeText: 'CSS. Przy wykorzystaniu CSSa staram się tworzyć estetyczne projekty, jednak teraz wygodniej pisać już w Sass.'
        })
    };
    jsHandleClick = () => {
        this.setState({
            activeText: 'JavaScript. Jeden z najpopularniejszych języków programowania. Wykorzystuję go do tworzenia rozbudowanych funkcji obsługujących zmiany na strone.'
        })
    };
    jQueryHandleClick = () => {
        this.setState({
            activeText: 'jQuery. Biblioteka która upraszcza pisanie skryptów.'
        })
    };
    es6HandleClick = () => {
        this.setState({
            activeText: 'EcmaScript 6. Obecny standard programowania w JS. Przecież moduły, czy funkcje strzałkowe wykorzystujemy często prawda?'
        })
    };
    reactHandleClick = () => {
        this.setState({
            activeText: 'React.js. Jedna z najpopularniejszych bibliotek/frameworków JS. Spór trwa, ale czy to ważne? Dzięki React w przyjemny sposób udaje mi się stworzyć ciekawe interfejsy!'
        })
    };
    gulpHandleClick = () => {
        this.setState({
            activeText: 'Gulp. Task runner, usprawniający pisanie kodu. Podgląd na żywo to znacznie lepsza opcja, niż przeładowywanie strony z każdą zmianą!'
        })
    };
    sassHandleClick = () => {
        this.setState({
            activeText: 'SASS. Chyba najbardziej popularny preprocesor do stylowania elementów. Po co nam czysty CSS?'
        })
    };
    rwdHandleClick = () => {
        this.setState({
            activeText: 'RWD. W dzisiejszych czasach nie tylko komputer służy do przeglądania sieci. Czas się dostosować!'
        })
    };
    gitHandleClick = () => {
        this.setState({
            activeText: 'Git. System kontroli wersji. Przy większych projektach nie pracujemy przecież sami. Pomóżmy sobie to uporządkować!'
        })
    };

    render() {
        return(
            <div id='skills' className='wrapper animated fadeInRight'>
                <h2>Umiejętności i technologie z których korzystam</h2>
                <div className='firstLine'>
                    <div className='image1' onClick={this.htmlHandleClick}></div>
                    <div className='image2' onClick={this.cssHandleClick}></div>
                    <div className='image3' onClick={this.jsHandleClick}></div>
                    <div className='image4' onClick={this.jQueryHandleClick}></div>
                    <div className='image5' onClick={this.es6HandleClick}></div>
                </div>
                <div className='secondLine'>
                    <div className='image6' onClick={this.reactHandleClick}></div>
                    <div className='image7' onClick={this.gulpHandleClick}></div>
                    <div className='image8' onClick={this.sassHandleClick}></div>
                    <div className='image9' onClick={this.rwdHandleClick}></div>
                    <div className='image10' onClick={this.gitHandleClick}></div>
                </div>
                <div className='skillsDescription'>{this.state.activeText}</div>
            </div>
        )
    }
}

export default Skills;