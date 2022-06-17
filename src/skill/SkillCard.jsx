import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import SkillTable from './SkillTable';

function createSkillData(name: string, years: string){
    return {
        name : name,
        years : years + "年"
    }
}


const SkillCard = (props) => {
    const frontEnd = [
        createSkillData("HTML", 5),
        createSkillData("CSS", 5),
        createSkillData("JavaScript", 6),
        createSkillData("JQuery", 6),
        createSkillData("React", "～1"),
    ];
    
    const backEnd = [
        createSkillData("Java", 8),
        createSkillData("Jersy", 5),
    ];
    
    const server = [
        createSkillData("Windows", 8),
        createSkillData("Linux", 5),
        createSkillData("Glassfish", 5),
        createSkillData("apatch", 2),
        createSkillData("tomcat", 2),
        createSkillData("Nginx", 5),
    ];
    
    const db = [
        createSkillData("PostgreSQL", 5),
        createSkillData("MySql", 1),
    ];
    
    const other = [
        createSkillData("C", 6),
        createSkillData("C++", 6),
        createSkillData("Android", "1"),
    ];
    
    return (
        <Grid item container spacing={4} className="GridItemContainer">
            <Grid item xs={6}>
                <Card>
                    <h3>フロントエンド</h3>
                    <SkillTable  skillRows={frontEnd} />
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <h3>バックエンド</h3>
                    <SkillTable  skillRows={backEnd} />
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <h3>サーバ・インフラ</h3>
                    <SkillTable  skillRows={server} />
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <h3>DB</h3>
                    <SkillTable  skillRows={db} />
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <h3>その他</h3>
                    <SkillTable  skillRows={other} />
                </Card>
            </Grid>
        </Grid>
    );
}
export default SkillCard;