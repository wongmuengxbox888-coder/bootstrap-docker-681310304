// นำเข้าสไตล์ SCSS และระบบ JavaScript ของ Bootstrap ทั้งหมด
import './scss/styles.scss';
import * as bootstrap from 'bootstrap';

// Toast trigger จาก Modal
document.getElementById('showToastBtn')?.addEventListener('click', () => {
    const toastEl = document.getElementById('liveToast');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
});