// --- 1. INISIALISASI ---
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

// --- 2. NAVIGASI HALAMAN ---
function gotoPage(pageId) {
    // Sembunyikan semua konten
    document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
    
    // Tampilkan halaman target
    document.getElementById('page-' + pageId).classList.remove('hidden');

    // Update status visual menu navigasi
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    document.getElementById('nav-' + pageId).classList.add('active');
    
    // Refresh Ikon
    lucide.createIcons();
}

// --- 3. LOGIKA CONNECT WALLET ---
const connectBtn = document.getElementById('connect-btn');
if (connectBtn) {
    connectBtn.onclick = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const addr = accounts[0];
                // Tampilan alamat wallet disingkat
                connectBtn.innerHTML = <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> ${addr.substring(0, 4)}...${addr.substring(addr.length - 4)};
                connectBtn.className = "bg-green-500/20 text-green-400 border border-green-500/50 px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2";
                lucide.createIcons();
            } catch (err) {
                console.log("Koneksi dibatalkan");
            }
        } else {
            alert("Harap buka aplikasi ini di dalam Browser Phantom atau OKX Wallet!");
        }
    };
}

// --- 4. KALKULATOR SWAP (SIMULASI) ---
function doSwapCalc(val) {
    const outputEl = document.getElementById('swap-output');
    if (val > 0) {
        // Simulasi harga: 1 ETH = 3,452.12 USDC
        const result = (parseFloat(val) * 3452.12).toLocaleString(undefined, { minimumFractionDigits: 2 });
        outputEl.value = result;
    } else {
        outputEl.value = "";
    }
}
