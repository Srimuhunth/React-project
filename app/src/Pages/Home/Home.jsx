import React, { useState } from 'react'
import './Home.css'
import Cards from '../../Components/Cards/Cards'

function Home({ searchQuery }) {

    const [popup, setPopup] = useState(false);
    const [details, setDetails] = useState({ title: "", description: "" });

    const notes = [
        {
          id:1,
          title:"Note 1",
          description:"This is description of note 1"
        },
        {
          id:2,
          title:"Note 2",
          description:"This is description of note 2"
        },
        {
          id:3,
          title:"Note 3",
          description:"This is description of note 3"
        }
    ];

    const [newNotes, setNewNotes] = useState([]);

    const handleClick = () => {
        setPopup(!popup);
    }

    const handleChange = (event) => {
        setDetails({ ...details, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!details.title || !details.description) return;
        setNewNotes([...newNotes, { id: notes.length + newNotes.length + 1, ...details }]);
        setDetails({ title: "", description: "" });
        setPopup(false);
    }

    const allNotes = [...notes, ...newNotes].filter((note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='Homepage'>
            {popup && (
                <div className='Home-Overlay'>
                    <div className='Form'>
                        <form className='Note-Form' onSubmit={handleSubmit}>
                            <button type='button' className='close-btn' onClick={handleClick}>✕</button>
                            <input type="text" name="title" placeholder='Title' onChange={handleChange} value={details.title} />
                            <input type="text" name="description" placeholder='Description' onChange={handleChange} value={details.description} />
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            )}
            <div>
                <button className='but' onClick={handleClick}>+ New</button>
            </div>
            <div className='cards'>
                {allNotes.map((note) => (
                    <Cards key={note.id} id={note.id} title={note.title} description={note.description} />
                ))}
            </div>
        </div>
    )
}

export default Home
