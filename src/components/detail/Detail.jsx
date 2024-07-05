import './detail.css'

const Detail = () => {
    return (
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Jane Doe</h2>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg" alt="" />
                                <span>photo_20.png</span>
                            </div>
                            <img src="./download.png" className="icon" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg" alt="" />
                                <span>photo_20.png</span>
                            </div>
                            <img src="./download.png" className="icon" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg" alt="" />
                                <span>photo_20.png</span>
                            </div>
                            <img src="./download.png" className="icon" alt="" />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
                <button className='logout'>Log Out</button>
            </div>
        </div>
    )
}

export default Detail