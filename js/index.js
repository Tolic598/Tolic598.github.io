function App() {
    return (
    <div>
        <div className="bg">
            <div className = "head">
                <img src="img/phoenix.png" alt="phoenix" className = "ph_png"/>
                <p className = "phenix">Phoenix</p>
                <div className = "bloc_1">
                    <p>0</p>
                    <img src = "img/plane-tickets.png" alt="tickets" className = "tickets"/>
                </div>
                <div className = "bloc_2">
                    <p>0</p>
                    <img src="img/tron.png" alt="tron"  className = "tron_png"/>
                </div>
            </div>

            <div className = "head_hed">
                <p className = "nil_2">0</p>
                <p className = "Ph">PH</p>
                <div className = "bloc_3">
                    <p className = "mined_0">0,0% Mined</p>
                </div>
                <div className = "bloc_4">
                    <img src = "img/clock.png" alt = "clock" className = "clock"/>
                    <p className = "day_0">06d 24h</p>
                </div>
            </div>

            <div className = "main">
                <p className = "text_0">Total balance</p>
                <div className = "total-balance">
                    <p>0</p>
                    <p className = "Ph_ph">PH</p>
                </div>
                <p className = "your_m">Your mining capacity</p>
                <div className = "progress_bar">
                    <img src = "img/coins.png" alt = "coins" className = "coins"/>
                    <p>progress</p>
                    <p className = "nil_3">0</p>
                </div>
                <div className = "ref">
                    <p className = "nil_4">0</p>
                    <p>PH/h</p>
                    <p className = "polosa">|</p>
                    <p className = "nil_5">0</p>
                    <p className = "polosa_0">/</p>
                    <p className = "nil_6">0</p>
                    <img src = "img/connections.png" alt = "connections"/>
                </div>
                <p className = "inv-ref">Invite friends and get +5 PH/h per active user</p>
            </div>
        </div>

        <div className = "bg_main">
            <div className = "maine_base">
                <p className = "rest-te">Restart mine</p>
                <img src = "img/performance-boost.png" alt = "boost" className = "boost_0"/>
            </div>
            <div className = "information_0">
                <div className = "fon_but">
                    <img src = "img/information.png" alt = "information" className = "inf_butt"/>
                </div>
                <div className = "text_cont_0">
                    <p className = "upg_text_0">Upgrade mining cap</p>
                    <p className = "boost_test_0">Boostto 7.5 WP</p>
                </div>
            </div>
            <div className = "information_1">
                <div className = "fon_but_0">
                    <img src = "img/boost.png" alt = "boost"/>
                </div>
                <div className = "text_cont_0">
                    <p className = "upg_text_1">Boost mining rate</p>
                    <p className = "boost_test_1">5X Mining rate for 30 minutes</p>
                </div>
            </div>
            <div className = "information_2">
                <div className = "fon_but_1">
                    <img src = "img/plane-tickets.png" alt = "tickets"/>
                </div>
                <div className = "text_cont_1">
                    <p className = "upg_text_2">Need more tickets?</p>
                    <p className = "boost_test_2">Finish our tasks and get more</p>
                </div>
            </div>
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