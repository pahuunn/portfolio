import React from 'react';
import Button from '@mui/material/Button';

const Portfolio = (props) => {
    return (
        <section>
            <h1>Portfolio</h1>
            <p>このポートフォリオは、以下のものを利用して作成しています。GitHubにソースコードもございます。</p>
            <p>React</p>
            <p>Material UI</p>
            <p>EmailJS</p>
            <p>レスポンシブデザイン</p>
            <Button href="https://github.com/pahuunn/portfolio">ソースコードはこちら</Button>
        </section>
    );
};
export default Portfolio;