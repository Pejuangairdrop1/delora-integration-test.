// --- KONFIGURASI DASAR ---
let userAddress = null;

// --- 1. FUNGSI CONNECT WALLET ---
async function connectWallet() {
    if (window.ethereum) {
        try {
            // Meminta akses akun ke MetaMask/OKX
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            userAddress = accounts[0];
            
            // Mengubah tampilan tombol Connect (jika Anda punya elemen dengan id="connect-btn")
            const btn = document.getElementById('connect-btn');
            if (btn) {
                btn.innerText = userAddress.slice(0, 6) + "..." + userAddress.slice(-4);
                btn.classList.add('bg-green-500/20', 'text-green-400');
            }

            console.log("Wallet Terhubung:", userAddress);
        } catch (error) {
            console.error("User menolak koneksi:", error);
        }
    } else {
        alert("Silakan instal MetaMask atau OKX Wallet untuk menggunakan dApp ini.");
    }
}

// --- 2. FUNGSI SWAP & BRIDGE (LOGIKA AGGREGATOR) ---
async function executeSwap() {
    if (!userAddress) {
        alert("Hubungkan wallet Anda terlebih dahulu!");
        return;
    }

    // Contoh integrasi Li.Fi atau 0x API di masa depan
    console.log("Memulai proses routing multi-chain...");
    
    // Di sini Anda akan memanggil API untuk mendapatkan rute terbaik
    // Untuk saat ini, kita berikan notifikasi simulasi
    alert("Mencari rute terbaik untuk Swap/Bridge...");
}

// --- 3. INISIALISASI SAAT HALAMAN DIMUAT ---
document.addEventListener('DOMContentLoaded', () => {
    // Pastikan ikon Lucide muncul
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Menghubungkan tombol di UI dengan fungsi JavaScript
    const connectBtn = document.getElementById('connect-btn');
    if (connectBtn) {
        connectBtn.addEventListener('click', connectWallet);
    }

    const swapBtn = document.getElementById('swap-button');
    if (swapBtn) {
        swapBtn.addEventListener('click', executeSwap);
    }
});
