import { render } from 'solid-js/web';
import Logo from './exorcist.svg?component-solid'
import './index.css';

const Home = () => {
    return (
        <>
        <Logo fill="#880808" class="logo"/>
            <h1 class="title">E X O R C I S T</h1>
            <p class="description">Exorcist is a script to exorcise your data from data hoarding companies<br/>Many companies scrape, sell and exchange your data- but you can opt out!</p>
            <p class="how">How is this accomplished? With your email, notices are sent to a list of data brokers telling them to remove you<br />from their lists. This uses privacy laws like the GPDR and the CCPA (commonly known as the California residents opt out)</p>
            <p class="how"><a href="https://github.com/DataExorcist/Exorcist">View the repository on GitHub!</a></p>
            <footer>&copy Aiden 2023 - <a href='https://aspy.dev'>aspy.dev</a></footer>
        </>
    )
};
render(() => <Home />, document.getElementById('root') as Element);