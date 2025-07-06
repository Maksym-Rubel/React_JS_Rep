import React, { useEffect, useState } from 'react'
import Card from './Card';
import "./Card.css"

export default function GetData() {
    let gitsrc = "https://api.github.com/users/Maksym-Rubel";
    function getUrl(name)
    {
        return `https://api.github.com/users/${name}`;
    }

    const [gitdata, setdata] = useState([]);
    const [onclickName, setName] = useState();
    const [searchText, setSearchText] = useState('');
    async function GetGit(src) {

        const responce = await fetch(src);
        const data = await responce.json();
        setdata(data);
    }
    useEffect(() => { GetGit(gitsrc); }, []);


    function getName() {
        setName(searchText);

    }
    useEffect(() => {
        GetGit(getUrl(onclickName));
    }, [onclickName]);
    return (
        <>
            <div className='Collumn'>
                <div className='RowSearch'>
                    <input type="text" placeholder="Пошук..." class="search-input" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button onClick={() => getName()} className='btnsrch'>Search</button>
                </div>

                <Card
                    avatarsrc={gitdata.avatar_url}
                    name={gitdata.login}
                    nickname={"@" + gitdata.login}
                    location={gitdata.location}
                    gitsrc={gitdata.url}
                    blogsrc={gitdata.blog}
                    mail={gitdata.mail}
                    folowers={gitdata.followers}
                    folowing={gitdata.following}
                />
            </div>
        </>

    )
}
