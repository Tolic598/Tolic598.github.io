ReactDOM.render(
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
            <img src="img/bird_0.png" alt="bird" className = "bird"/>
            <p className = "text_0">Balance</p>
            <div className = "bloc_bal_0">
                <p className = "nil_0">0</p>
                <p className = "ph_0">PH</p>
            </div>
        </div>
        <div className = "main">
            <div className = "elips_0"></div>
            <p className = "st_0">Get more WatPoints</p>
            <div className = "cnop_but_0">
                <button className = "earn_text">Earn</button>
                <button className = "colab_text">Collaboration</button>
            </div>
            <div className = "elips_1"></div>
            <p className = "st_1">Cleaning inactive users</p>
            <p className = "st_2">Price increases</p>
            <div className = "elips_2"></div>
            <p className = "st_3">End of Watdrop</p>
            <p className = "st_4">Upgrade to paid version</p>
            <div className = "elips_3"></div>
            <p className = "st_5">Setting prices PH</p>
            <button className = "but_nil_0">0</button>
            <div className = "elips_4"></div>
            <p className = "st_6">Exchanger openings</p>
            <button className = "exchane_0">Exchange</button>
            <div className = "elips_5"></div>
            <p className = "st_7">Withdrawing funds to wallets</p>
            <button className = "consul_0">Conclusion</button>
        </div>
        <footer>
            <div className = "bloc_5">
                <img src = "img/mining.png" alt = "mining" className = "min_1" onClick={() => window.location.href = "/site/mining.html"}/>
                <img src = "img/profit.png" alt = "profit" className = "earn_1" onClick={() => window.location.href = "/site/earn.html"}/>
                <img src = "img/casino.png" alt = "casino" className = "spin_1" onClick={() => window.location.href = "/site/spin.html"}/>
                <img src = "img/wealth-airdrop.png" alt = "airdrop" className = "wat_1" onClick={() => window.location.href = "/site/watdrop.html"}/>
                <img src = "img/wallet.png" alt = "wallet" className = "wall-1" onClick={() => window.location.href = "/site/wallet.html"}/>
            </div>
            <div className = "bloc_6">
                <p className = "min_0" onClick={() => window.location.href = "/site/mining.html"}>MINE</p>
                <p className = "earn_0" onClick={() => window.location.href = "/site/earn.html"}>EARN</p>
                <p className = "spin_0" onClick={() => window.location.href = "/site/spin.html"}>SPIN</p>
                <p className = "wat_0" onClick={() => window.location.href = "/site/watdrop.html"}>WATDROP</p>
                <p className = "wall-0" onClick={() => window.location.href = "/site/wallet.html"}>WALLET</p>
            </div>
        </footer>
    </div>
,document.getElementById("app"))