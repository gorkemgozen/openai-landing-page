import { useState } from 'react';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-column">
                <div className="footer-box">
                    <p className="footer-baslik">Araştırmalarımız</p>
                    <p className="footer-text">Araştırma Dizini</p>
                    <p className="footer-text">Araştırmalara Genel Bakış</p>
                    <p className="footer-text">Misafir Araştırmacı Programı</p>
                </div>
                <div className="footer-box">
                    <p className="footer-baslik">En Son Gelişmeler</p>
                    <p className="footer-text">OpenAI o3</p>
                    <p className="footer-text">OpenAI o4-mini</p>
                    <p className="footer-text">GPT-4o</p>
                    <p className="footer-text">GPT-4o mini</p>
                    <p className="footer-text">Sora</p>
                </div>
                <div className="footer-box">
                    <p className="footer-baslik">Güvenlik</p>
                    <p className="footer-text">Güvenlik Yaklaşımı</p>
                    <p className="footer-text">Veri Güvenliği ve Gizlilik</p>
                    <p className="footer-text">Güven ve Şeffaflık</p>
                </div>
            </div>
            <div className="footer-column">
                <div className="footer-box">
                    <p className="footer-baslik">ChatGPT</p>
                    <p className="footer-text">ChatGPT’yi Keşfet</p>
                    <p className="footer-text">Team</p>
                    <p className="footer-text">Enterprise</p>
                    <p className="footer-text">Education</p>
                    <p className="footer-text">Fiyatlandırma</p>
                    <p className="footer-text">İndir</p>
                </div>
                <div className="footer-box">
                    <p className="footer-baslik">Sora</p>
                    <p className="footer-text">Sora’ya Genel Bakış</p>
                    <p className="footer-text">Özellikler</p>
                    <p className="footer-text">Fiyatlandırma</p>
                    <p className="footer-text">Sora oturumu aç</p>
                </div>
                <div className="footer-box">
                    <p className="footer-baslik">API Platformu</p>
                    <p className="footer-text">Platforma Genel Bakış</p>
                    <p className="footer-text">Fiyatlandırma</p>
                    <p className="footer-text">API oturumu aç</p>
                    <p className="footer-text">Belgeler</p>
                    <p className="footer-text">Geliştirici Forumu</p>
                </div>
            </div>
            <div className="footer-column">
                <div className="footer-box">
                    <p className="footer-baslik">İş Dünyası İçin</p>
                    <p className="footer-text">İşe Genel Bakış</p>
                    <p className="footer-text">Çözümler</p>
                    <p className="footer-text">Satış Departmanı ile iletişime geç</p>
                </div>
                <div className="footer-box">
                    <p className="footer-baslik">Şirket</p>
                    <p className="footer-text">Hakkımızda</p>
                    <p className="footer-text">İlkelerimiz</p>
                    <p className="footer-text">Kariyer Fırsatları</p>
                    <p className="footer-text">Marka</p>
                </div>
                <div className="footer-box">
                    <p className="footer-baslik">Destek</p>
                    <p className="footer-text">Yardım Merkezi</p>
                </div>
                <div className="footer-box">
                    <p className="footer-baslik">Daha Fazla</p>
                    <p className="footer-text">Haberler</p>
                    <p className="footer-text">Hikayeler</p>
                    <p className="footer-text">Canlı Yayınlar</p>
                    <p className="footer-text">Podcast</p>
                </div>
            </div>
            <div className="footer-column">
                <div className="footer-box">
                    <p className="footer-baslik">Şartlar ve Politikalar</p>
                    <p className="footer-text">Kullanım Şartları</p>
                    <p className="footer-text">Gizlilik Politikası</p>
                    <p className="footer-text">Diğer Politikalar</p>
                </div>
            </div>
        </div>
    )
}

export default Footer