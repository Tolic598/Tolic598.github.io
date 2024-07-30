function App() {
    return (
    <div>
        <div className = "head">
            <img src="img/phoenix.png" alt="phoenix" className = "ph_png"/>
            <p className = "phenix">Phoenix</p>
            <div className = "bloc_1">
                <p>0</p>
                <img src="img/plane-tickets.png" alt="tickets" className = "tickets"/>
            </div>
            <div className = "bloc_2">
                <p>0</p>
                <img src="img/tron.png" alt="tron" className = "tron_png"/>
            </div>
        </div>
        <div className = "head_hed">
            <div className = "bloc_where">

            </div>
        </div>
        <div className = "main">
            <div className = "bloc_day">
                <img src="img/wheel-of-fortune.png" alt="where" className = "where_0"/>
                <img src="img/wheel-of-fortune.png" alt="where" className = "where_1"/>
            </div>
            <p className = "text_0">Let's spin</p>
            <p className = "text_1">Spin to win real prize money</p>
            <button className = "but_spin">
                <p className = "text_2">SPIN FOR 50</p>
                <img src="img/plane-tickets.png" alt="ticets" className = "ticets_0"/>
            </button>
        </div>
        <footer>
            <div className="bloc_5">
                <div className="item">
                    <img src="img/mining.png" alt="mining" className="min_1" onClick={() => window.location.href = "/site/mining.html"} />
                    <p className="min_0" onClick={() => window.location.href = "/site/mining.html"}>MINE</p>
                </div>
                <div className="item">
                    <img src="img/profit.png" alt="profit" className="earn_1" onClick={() => window.location.href = "/site/earn.html"} />
                    <p className="earn_0" onClick={() => window.location.href = "/site/earn.html"}>EARN</p>
                </div>
                <div className="item">
                    <img src="img/casino.png" alt="casino" className="spin_1" onClick={() => window.location.href = "/site/spin.html"} />
                    <p className="spin_0" onClick={() => window.location.href = "/site/spin.html"}>SPIN</p>
                </div>
                <div className="item">
                    <img src="img/wealth-airdrop.png" alt="airdrop" className="wat_1" onClick={() => window.location.href = "/site/watdrop.html"} />
                    <p className="wat_0" onClick={() => window.location.href = "/site/watdrop.html"}>WATDROP</p>
                </div>
                <div className="item">
                    <img src="img/wallet.png" alt="wallet" className="wall_1" onClick={() => window.location.href = "/site/wallet.html"} />
                    <p className="wall_0" onClick={() => window.location.href = "/site/wallet.html"}>WALLET</p>
                </div>
            </div>
        </footer>
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);