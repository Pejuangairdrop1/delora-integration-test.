// --- 1. KONFIGURASI DASAR ---
let userAddress = null;

// --- 2. FUNGSI CONNECT WALLET ---
async function connectWallet() {
    if (window.ethereum) {
        try {
            // Meminta akses akun ke MetaMask/OKX/Phantom
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            userAddress = accounts[0];

            // Mengubah tampilan tombol Connect
            const btn = document.getElementById('connect-btn');
            if (btn) {
                btn.innerText = userAddress.slice(0, 6) + "..." + userAddress.slice(-4);
                btn.classList.remove('bg-brand-blue');
                btn.classList.add('bg-green-500/20', 'text-green-400', 'border-green-500/50');
            }

            console.log("Wallet Terhubung:", userAddress);
            alert("Berhasil terhubung ke Phantom X Delora!");
        } catch (error) {
            console.error("User menolak koneksi:", error);
        }
    } else {
        alert("Silakan instal MetaMask atau gunakan Browser di dalam aplikasi Wallet!");
    }
}

// --- 3. FUNGSI SWAP & BRIDGE ---
async function executeSwap() {
    if (!userAddress) {
        alert("Hubungkan wallet Anda terlebih dahulu!");
        return;
    }
    console.log("Memulai proses routing multi-chain...");
    alert("Mencari rute terbaik untuk Swap/Bridge...");
}

// --- 4. INISIALISASI & EVENT LISTENER ---
document.addEventListener('DOMContentLoaded', () => {
    // Pastikan ikon Lucide muncul
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Menghubungkan tombol Connect Wallet ke fungsi JavaScript
    const connectBtn = document.getElementById('connect-btn');
    if (connectBtn) {
        connectBtn.onclick = connectWallet;
    }

    // Menghubungkan tombol Swap ke fungsi executeSwap
    const swapBtn = document.querySelector('.swap-execute-btn'); // Pastikan class ini ada di tombol swap Anda
    if (swapBtn) {
        swapBtn.onclick = executeSwap;
    }
});
