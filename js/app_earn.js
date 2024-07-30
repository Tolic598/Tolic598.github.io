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
            <img src="img/teamwork.png" alt="teamwork" className = "teamwork"/>
            <p className = "nil_0">0</p>
            <p className = "tot_play">TOTAL PLAYERS</p>
        </div>
        <div className = "main">
            <div className = "main_ref">
                <img src="img/phoenix.png" alt="phoenix" className = "ph_0"/>
                <p className = "ph_test_0">Invite friend to Phenix</p>
                <p className = "zarab">Build a strong team and earn!</p>
                <div className = "bloc_0">
                    <div className = "bloc_balanc_0">
                        <p className = "yu_ref">Your referral link</p>
                        <p className = "nil_1">0</p>
                        <img src="img/plane-tickets.png" alt="ticet" className = "ticets_0"/>
                    </div>
                    <div className = "refil_0">
                        <div className = "cop_ref_0">
                            <p className = "cop_link">COPY LINK</p>
                        </div>
                        <div className = "cop_sher_0">
                            <img src="img/telegram.png" alt="telegram" className = "tel"/>
                            <p className = "shere">SHARE</p>
                        </div>
                    </div>
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