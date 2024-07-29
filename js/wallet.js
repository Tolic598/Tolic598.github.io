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
        <div className = "head_main">
            <p className = "text_0">Your balance</p>
            <div className = "bloc_0">
                <p className = "nil_0">0</p>
                <p className = "text_1">in</p>
                <img src="img/tron.png" alt="tron" className = "tron_png_0"/>
                <p className = "trx_0">trx</p>
            </div>
            <div className = "bloc_text_0">
                <p>Connected</p>
            </div>
        </div>
        <div className = "main">
            <p className = "exhen_0">Exchange</p>
            <div className = "bloc_main">
                <div className = "bloc_top_0">
                    <img src="img/bird (1).png" alt="phenix" className = "bird_0"/>
                    <p className = "yuo_0">You pay</p>
                </div>
                <div className = "bloc_nil_0">
                    <p className = "nil_text_1">Dost.:</p>
                    <p className = "text_ph_0">0.0000000</p>
                </div>
                <input type="number" className = "exchange-input" placeholder="Min. amount: 1000"/>
                <div className = "bloc_lin_0">|</div>
                <p className = "text_max_0">Max.</p>
                <div className = "bloc_linii_0">
                    <div className = "bloc_lin_1"></div>
                    <img src="img/exchange.png" alt="transfer" className = "transfer_0"/>
                    <div className = "bloc_lin_2"></div>
                </div>
                <div className = "bloc_ehenge_text_1">
                    <img src="img/tron.png" alt="tron" className = "tron_png_ehenge_0"/>
                    <p className = "uoyll_text_0">You'll get</p>
                </div>
                <div className = "bloc_shena_0">
                    <p>1 PH =</p>
                    <p className = "summa_shen">0,0001</p>
                </div>
                <input type="number" className = "exchange-input-0" placeholder="0" readonly/>
            </div>
            <button className = "withdraw">WITHDRAW</button>
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