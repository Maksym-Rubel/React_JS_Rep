import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { CounterContext } from '../contexts/counter.context';
import { CounterImportant } from '../contexts/counter.importante.jsx';

export default function Layout() {

    const { value } = useContext(CounterContext);
    const { value1 } = useContext(CounterImportant);


    return (
        <div className='Layout'>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/counter">Counter ({value})</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/lifecycle">Lifecycle</Link></li>
                        <li><Link to="/create">Create</Link></li>
                        <li><Link to="/list1">List 1 ({value1})</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                {/* Content will be rendered here */}
                <Outlet />
            </main>
            <footer>
                <p>&copy; 2025 React App</p>
            </footer>
        </div>
    )
}
