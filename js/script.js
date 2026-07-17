const translations = {
    'pt-BR': {
        title: '🚀 Inicial Rápida',
        subtitle: 'Gerenciador de Abas de Inicialização',
        lblGlobal: 'Executar abertura automática ao iniciar a página',
        helpGlobal: 'Se não gostar ou não quiser que as abas abram sozinhas, basta desmarcar a opção acima.',
        placeholder: 'Cole o link aqui (ex: https://...)',
        btnForce: 'Forçar Abertura de Todas ⚡',
        alertNoLinks: 'Adicione alguns links primeiro!',
        langNotice: 'Idioma detectado automaticamente.',
        badgeLabel: 'Avisos Ocultos',
        popupText: '⚠️ ATENÇÃO POP-UP: Para o funcionamento automático, libere os pop-ups no seu {browser} selecionando "Sempre permitir".',
        storageText: '⚠️ ALERTA DE DADOS: Seus links ficam salvos apenas neste navegador. Ao limpar o histórico/cookies (ou usar o botão "Fire"), eles somem! Adicione este endereço às exceções de limpeza do seu navegador para proteger seus dados.',
        btnDownload: 'Baixar Arquivo 💾',
        btnUpload: 'Carregar Arquivo 📂',
        statusExport: 'Criando Arquivo de Segurança...',
        statusImport: 'Validando e Extraindo Dados...',
        errInvalidFile: '❌ Arquivo de backup inválido ou corrompido!',
        backupWarning: '🚨 SEGURO MORREU DE VELHO: Baixe seu backup! Esse arquivo é de sua total responsabilidade. Nós não temos acesso a nada. Se você perder o arquivo e limpar o navegador... já era, meu consagrado! Nem o TI da Nasa recupera.',
        confirmDelete: 'Você tem certeza absoluta que deseja remover o link para <strong>{name}</strong>?',
        btnYes: 'SIM 👍',
        btnNo: 'NÃO 🛑',
        termosResp: "📜 TERMO DE USO E RESPONSABILIDADE\n\n1. Todo conteúdo é de sua responsabilidade.\n2. Sem links ilegais ou maliciosos.\n3. Você isenta o desenvolvedor de responsabilidade.\n\nAceita os termos?"
    },
    'en-US': {
        title: '🚀 Quick Launch',
        subtitle: 'Startup Tab Manager',
        lblGlobal: 'Run automatic opening when launching the page',
        helpGlobal: 'If you don\'t like it or don\'t want tabs to open automatically, just uncheck the option above.',
        placeholder: 'Paste link here (e.g., https://...)',
        btnForce: 'Force Open All ⚡',
        alertNoLinks: 'Add some links first!',
        langNotice: 'Language detected automatically.',
        badgeLabel: 'Hidden Alerts',
        popupText: '⚠️ POP-UP ATTENTION: For automatic operation, allow pop-ups in your {browser} by selecting "Always allow".',
        storageText: '⚠️ DATA ALERT: Your links are saved locally in this browser. Clearing history/cookies (or hitting the "Fire" button) will erase them! Add this URL to your browser\'s cleaning exceptions to save your data.',
        btnDownload: 'Download File 💾',
        btnUpload: 'Load File 📂',
        statusExport: 'Creating Security File...',
        statusImport: 'Validating and Extracting Data...',
        errInvalidFile: '❌ Invalid or corrupted backup file!',
        backupWarning: '🚨 PROTECT YOUR GOODS: Download your backup! This file is 100% your responsibility. We don\'t have a server, we don\'t track you. If you lose this file and wipe your browser, it\'s gone to the shadow realm. No cloud, no mercy!',
        confirmDelete: 'Are you absolutely sure you want to remove the link to <strong>{name}</strong>?',
        btnYes: 'YES 👍',
        btnNo: 'NO 🛑',
        termosResp: "📜 TERMS OF USE AND RESPONSIBILITY\n\n1. All content is your sole responsibility.\n2. No illegal or malicious links allowed.\n3. You hold the developer harmless from any liability.\n\nDo you accept these terms?"
    },
    'es': {
        title: '🚀 Inicio Rápido',
        subtitle: 'Gestor de Pestañas de Inicio',
        lblGlobal: 'Ejecutar apertura automática al iniciar la página',
        helpGlobal: 'Si no le gusta o no desea que las pestañas se abran automáticamente, simplemente desmarque la opción de arriba.',
        placeholder: 'Pegue el enlace aquí (ej: https://...)',
        btnForce: 'Forzar Apertura de Todas ⚡',
        alertNoLinks: '¡Agregue algunos enlaces primero!',
        langNotice: 'Idioma detectado automaticamente.',
        badgeLabel: 'Alertas Ocultas',
        popupText: '⚠️ ATENCIÓN POP-UP: Para el funcionamiento automático, habilite los pop-ups en su {browser} seleccionando "Permitir siempre".',
        storageText: '⚠️ ALERTA DE DATOS: Tus enlaces se guardan localmente en este navegador. ¡Borrar el historial/cookies (o usar el botón "Fire") los eliminará! Agrega esta URL a las excepciones de limpieza de tu navegador.',
        btnDownload: 'Descargar Archivo 💾',
        btnUpload: 'Cargar Archivo 📂',
        statusExport: 'Creando Archivo de Seguridad...',
        statusImport: 'Validando y Extrayendo Datos...',
        errInvalidFile: '❌ ¡Archivo de copia de seguridad inválido o dañado!',
        backupWarning: '🚨 GUERRA AVISADA NO MATA SOLDADO: ¡Baja tu copia de seguridad! Este archivo es tu responsabilidad. No tenemos acceso a nada. Si lo pierdes y limpias el navegador... ¡ya fue, mi pana! Ni el Chapulín Colorado te salva los links.',
        confirmDelete: '¿Estás absolutamente seguro de que deseas eliminar el enlace a <strong>{name}</strong>?',
        btnYes: 'SÍ 👍',
        btnNo: 'NO 🛑',
        termosResp: "📜 TÉRMINO DE USO Y RESPONSABILIDAD\n\n1. Todo el contenido es tu responsabilidad.\n2. Sin enlaces ilegales o maliciosos.\n3. Eximes al desarrollador de responsabilidad.\n\n¿Aceptas los términos?"
    }
};

let pages = JSON.parse(localStorage.getItem('customTabs')) || [];
let globalAutoOpen = JSON.parse(localStorage.getItem('globalAutoOpen')) ?? false;
let currentLang = localStorage.getItem('preferredLang');
let pendingDeleteIndex = null;

let alertsState = JSON.parse(localStorage.getItem('alertsState')) || { popupAlert: true, storageAlert: true };

function getBrowserName() {
    const ua = navigator.userAgent;
    if (ua.includes("DuckDuckGo") || ua.includes("DDG") || window.duckduckgo || navigator.duckduckgo) return "DuckDuckGo";
    if (ua.includes("Edg/")) return "Microsoft Edge";
    if (ua.includes("Chrome") && !ua.includes("Chromium")) return "DuckDuckGo_Chrome";
    if (ua.includes("Firefox")) return "Mozilla_Firefox";
    if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
    return "DuckDuckGo";
}

function detectSystemLanguage() {
    if (currentLang) return currentLang;
    const sysLang = navigator.language || navigator.userLanguage;
    if (sysLang.startsWith('pt')) return 'pt-BR';
    if (sysLang.startsWith('es')) return 'es';
    return 'en-US';
}

function applyLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    document.getElementById('txtTitle').innerText = t.title;
    document.getElementById('txtSubtitle').innerText = t.subtitle;
    document.getElementById('lblGlobal').innerText = t.lblGlobal;
    document.getElementById('txtHelpGlobal').innerText = t.helpGlobal;
    document.getElementById('urlInput').placeholder = t.placeholder;
    document.getElementById('btnForceOpen').innerText = t.btnForce;
    document.getElementById('txtLangNotice').innerText = t.langNotice;
    document.getElementById('txtBadgeLabel').innerText = t.badgeLabel;
    document.getElementById('btnDownloadBkp').innerText = t.btnDownload;
    document.getElementById('btnUploadBkp').innerText = t.btnUpload;
    document.getElementById('txtBackupWarning').innerText = t.backupWarning;

    const browserName = getBrowserName().replace('_', ' / ');
    document.getElementById('txtPopupAlert').innerText = t.popupText.replace('{browser}', browserName);
    document.getElementById('txtStorageAlert').innerText = t.storageText;

    if (pendingDeleteIndex !== null) {
        document.getElementById('txtDeleteConfirm').innerHTML = t.confirmDelete.replace('{name}', pages[pendingDeleteIndex].name);
        document.getElementById('btnDeleteYes').innerText = t.btnYes;
        document.getElementById('btnDeleteNo').innerText = t.btnNo;
    }

    const radios = document.getElementsByName('langRadio');
    radios.forEach(radio => {
        if (radio.value === lang) radio.checked = true;
    });
}

function changeLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    applyLanguage(lang);
}

function updateAlertsVisibility() {
    let hiddenCount = 0;
    if (alertsState.popupAlert !== false) document.getElementById('popupAlert').style.display = 'block';
    else { document.getElementById('popupAlert').style.display = 'none'; hiddenCount++; }

    if (alertsState.storageAlert !== false) document.getElementById('storageAlert').style.display = 'block';
    else { document.getElementById('storageAlert').style.display = 'none'; hiddenCount++; }

    if (hiddenCount > 0) document.getElementById('minimizedBadge').style.display = 'flex';
    else document.getElementById('minimizedBadge').style.display = 'none';

    localStorage.setItem('alertsState', JSON.stringify(alertsState));
}

function minimizeAlert(id) {
    alertsState[id] = false;
    updateAlertsVisibility();
}

function restoreAlertas() {
    alertsState.popupAlert = true;
    alertsState.storageAlert = true;
    updateAlertsVisibility();
}

function runBackupAnimation(statusText, fileName, fileSizeText, callback) {
    document.getElementById('popupAlert').style.display = 'none';
    document.getElementById('storageAlert').style.display = 'none';
    document.getElementById('deleteConfirmAlert').style.display = 'none';
    document.getElementById('minimizedBadge').style.display = 'none';

    const progressAlert = document.getElementById('progressAlert');
    const fill = document.getElementById('progressBarFill');
    const percentTxt = document.getElementById('txtProgressPercent');
    const statusTxt = document.getElementById('txtProgressStatus');
    const fileInfoTxt = document.getElementById('txtProgressFileInfo');

    progressAlert.style.display = 'block';
    statusTxt.innerText = statusText;
    fileInfoTxt.innerText = `${fileName} | ${fileSizeText}`;
    
    let currentPercent = 0;
    fill.style.width = '0%';
    percentTxt.innerText = '0%';

    const interval = setInterval(() => {
        currentPercent++;
        fill.style.width = currentPercent + '%';
        percentTxt.innerText = currentPercent + '%';

        if (currentPercent >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                progressAlert.style.display = 'none';
                updateAlertsVisibility();
                callback();
            }, 400);
        }
    }, 60);
}

function generateFileName() {
    const now = new Date();
    const browser = getBrowserName();
    return `backup_${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}_${browser}_${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}.tiyu`;
}

function formatBytes(bytes) {
    if (bytes < 1024) return bytes + ' Bytes';
    return (bytes / 1024).toFixed(2) + ' KB';
}

function exportBackup() {
    const packageData = { signature: "TIYU_DASH_BKP", globalAutoOpen, customTabs: pages };
    const rawJson = JSON.stringify(packageData);
    const encryptedData = btoa(unescape(encodeURIComponent(rawJson)));
    const blob = new Blob([encryptedData], { type: 'text/plain' });
    const fileName = generateFileName();

    runBackupAnimation(translations[currentLang].statusExport, fileName, formatBytes(blob.size), () => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = fileName;
        document.body.appendChild(a); a.click();
        document.body.removeChild(a); URL.revokeObjectURL(url);
    });
}

// -----------------------------------------------------------------------------
// FUNÇÃO ATUALIZADA: IMPORTAÇÃO PUXANDO TERMO DE RESPONSABILIDADE DA TRADUÇÃO
// -----------------------------------------------------------------------------
function importBackup(input) {
    const file = input.files[0];
    if (!file) return;

    // Puxa o termo correto do dicionário lá de cima, baseado no idioma atual
    const termoResponsabilidade = translations[currentLang].termosResp;
    
    if (!confirm(termoResponsabilidade)) {
        input.value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        runBackupAnimation(translations[currentLang].statusImport, file.name, formatBytes(file.size), () => {
            try {
                const decryptedJson = decodeURIComponent(escape(atob(e.target.result.trim())));
                const importedObj = JSON.parse(decryptedJson);
                if (importedObj.signature !== "TIYU_DASH_BKP") throw new Error();

                globalAutoOpen = importedObj.globalAutoOpen ?? false;
                pages = importedObj.customTabs || [];
                document.getElementById('globalAutoOpen').checked = globalAutoOpen;
                localStorage.setItem('globalAutoOpen', JSON.stringify(globalAutoOpen));
                renderList();
            } catch (err) {
                alert(translations[currentLang].errInvalidFile);
            }
            input.value = '';
        });
    };
    reader.readAsText(file);
}

function cleanUrlName(urlText) {
    try {
        let formattedUrl = urlText.trim();
        if (!/^https?:\/\//i.test(formattedUrl)) formattedUrl = 'https://' + formattedUrl;
        const urlObj = new URL(formattedUrl);
        let hostname = urlObj.hostname.replace('www.', '');
        return { name: hostname.split('.')[0].toUpperCase(), url: formattedUrl, autoOpen: true };
    } catch (e) {
        return { name: urlText, url: urlText, autoOpen: true };
    }
}

function renderList() {
    const listElement = document.getElementById('linksList');
    listElement.innerHTML = '';
    pages.sort((a, b) => a.name.localeCompare(b.name));

    pages.forEach((page, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="li-left">
                <input type="checkbox" ${page.autoOpen ? 'checked' : ''} data-index="${index}" class="chk-item">
                <a href="${page.url}" target="_blank">${page.name}</a>
            </div>
            <button class="btn-remove" data-index="${index}">-</button>
        `;
        listElement.appendChild(li);
    });
    localStorage.setItem('customTabs', JSON.stringify(pages));
}

function addPage() {
    const input = document.getElementById('urlInput');
    if (input.value.trim() === '') return;
    pages.push(cleanUrlName(input.value));
    input.value = '';
    renderList();
}

function removePage(index) {
    pendingDeleteIndex = index;
    document.getElementById('txtDeleteConfirm').innerHTML = translations[currentLang].confirmDelete.replace('{name}', pages[index].name);
    document.getElementById('deleteConfirmAlert').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeDeleteConfirm(confirmed) {
    if (confirmed && pendingDeleteIndex !== null) {
        pages.splice(pendingDeleteIndex, 1);
        renderList();
    }
    document.getElementById('deleteConfirmAlert').style.display = 'none';
    pendingDeleteIndex = null;
}

function openAllTabs(onlyAuto = false) {
    if (!onlyAuto && pages.length === 0) {
        alert(translations[currentLang].alertNoLinks);
        return;
    }
    pages.forEach(page => {
        if (onlyAuto && !page.autoOpen) return;
        window.open(page.url, '_blank');
    });
}

// Event Listeners Mapeados
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(detectSystemLanguage());
    updateAlertsVisibility();
    document.getElementById('globalAutoOpen').checked = globalAutoOpen;
    renderList();

    if (globalAutoOpen && pages.length > 0) {
        setTimeout(() => openAllTabs(true), 300);
    }
    setTimeout(() => {
        if (alertsState.popupAlert) minimizeAlert('popupAlert');
        if (alertsState.storageAlert) minimizeAlert('storageAlert');
    }, 7000);
});

document.getElementById('btnAddPage').addEventListener('click', addPage);
document.getElementById('urlInput').addEventListener('keypress', (e) => { if (e.key === 'Enter') addPage(); });
document.getElementById('btnForceOpen').addEventListener('click', () => openAllTabs(false));
document.getElementById('btnDownloadBkp').addEventListener('click', exportBackup);
document.getElementById('btnUploadBkp').addEventListener('click', () => document.getElementById('fileImporter').click());
document.getElementById('fileImporter').addEventListener('change', function() { importBackup(this); });
document.getElementById('btnClosePopup').addEventListener('click', () => minimizeAlert('popupAlert'));
document.getElementById('btnCloseStorage').addEventListener('click', () => minimizeAlert('storageAlert'));
document.getElementById('minimizedBadge').addEventListener('click', restoreAlertas);
document.getElementById('btnDeleteYes').addEventListener('click', () => closeDeleteConfirm(true));
document.getElementById('btnDeleteNo').addEventListener('click', () => closeDeleteConfirm(false));
document.getElementById('globalAutoOpen').addEventListener('change', function() {
    globalAutoOpen = this.checked;
    localStorage.setItem('globalAutoOpen', JSON.stringify(globalAutoOpen));
});
document.getElementById('linksList').addEventListener('click', (e) => {
    const idx = e.target.getAttribute('data-index');
    if (idx !== null) {
        if (e.target.classList.contains('btn-remove')) removePage(parseInt(idx));
        if (e.target.classList.contains('chk-item')) {
            pages[idx].autoOpen = e.target.checked;
            localStorage.setItem('customTabs', JSON.stringify(pages));
        }
    }
});
document.getElementsByName('langRadio').forEach(radio => {
    radio.addEventListener('change', (e) => changeLanguage(e.target.value));
});

// -----------------------------------------------------------------------------
// FUNÇÕES DE EASTER EGG E ANIMAÇÕES
// -----------------------------------------------------------------------------
function tocarSomMK() {
    // Busca dentro da pasta 'sounds' que criamos
    var audio = new Audio('sounds/som-mk.mp3'); 
    audio.volume = 0.5;
    audio.play();
}

function iniciarCicloDeAtenção() {
    const container = document.getElementById('mainContainer');
    
    // Função que executa o brilho
    function dispararBrilho() {
        if (!container) return; // Segurança extra caso não ache o elemento
        container.classList.add('glow-effect', 'pulsing');
        
        // Remove após 5 segundos
        setTimeout(() => {
            container.classList.remove('glow-effect', 'pulsing');
        }, 5000);
    }

    // Dispara a primeira vez ao carregar
    dispararBrilho();

    // Repete a cada 2 minutos (125 segundos totais para dar tempo do ciclo)
    setInterval(dispararBrilho, 125000);
}

// Inicia a função quando a página carregar
document.addEventListener('DOMContentLoaded', iniciarCicloDeAtenção);
