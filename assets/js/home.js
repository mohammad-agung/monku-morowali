function setData(data) {
    let lastData;
    data.data.forEach((item) => {
        lastData = item;
    });
    console.log(lastData);

    let monku = ``;
    monku += `
        <header class="flex-stack">
            <h1 id="location">
                ${lastData.lokasi}
                <span id="summary">
                    ${lastData.suhu}&deg; | Sunny
                </span>
            </h1>
            <p class="flex-stack" style="--space: 0.2rem" aria-hidden="true">
                <span id="temperature" class="current-temp heading-lg">${lastData.suhu}</span>
            </p>
            <ul id="range" class="cluster" role="list" style="--justify: center; --gap: 0.5rem">
                <li>H: ${lastData.kelembapan}%</li>
                <li>T: ${lastData.suhu}&deg;</li>
            </ul>
        </header>

        <article>
            <h2 id="air-quality">Kualitas Udara</h2>
            <div class="stack">
                <p>${lastData.co_ispu} - ${lastData.ISPU}</p>
                <p>Kualitas udara ${lastData.ISPU} untuk daerah ${lastData.lokasi}.</p>
                <div class="meter" style="margin-top: 1rem"></div>
            </div>
        </article>
    
        <article class="tile">
            <h2>Kelembapan ( RH )</h2>
            <div class="stack">
                <p class="text-center">${lastData.kelembapan}%</p>
            </div>
        </article>
        <article class="tile">
            <h2>Suhu ( T )</h2>
            <div class="stack">
                <p class="text-center">${lastData.suhu}&deg;</p>
            </div>
        </article>
        <article class="tile">
            <h2>CO ( ppm ) </h2>
            <div class="stack">
                <p class="text-center">${lastData.co_ppm} ppm</p>
            </div>
        </article>
        <article class="tile">
            <h2>CO ( ug/Nm&sup3; )</h2>
            <div class="stack">
                <p class="text-center">${lastData.co_ambien} ug/Nm&sup3;</p>
            </div>
        </article>
        <footer>
            <h2>MOKU - MOROWALI V1</h2>
            <p><small>Aplikasi Monotirong Kualitas Udara Berbasis Mikrokontroller</small></p>
        </footer>
        `;

    document.getElementById("monku-morowali").innerHTML = monku;
}
