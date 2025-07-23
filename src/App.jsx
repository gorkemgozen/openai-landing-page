import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParallaxLayout from './components/ParallaxLayout/ParallaxLayout';

function App() {
  return (
    <div className="main">

      <Navbar />
      <div className="start-container">
        <div className="start-sub-container">
          <div className="start-text">
            Nasıl yardımcı olabilirim?
          </div>
          <div className="start-input-container">
            <div className="start-input-wrapper">
              <textarea className="yazi-alani" placeholder="ChatGPT'ye Mesaj Gönder"rows="1"></textarea>
              <button className="arrow-button">
                <svg className='arrow-icon' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 22L16 10M16 10L11 15M16 10L21 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="start-buttonlar">
            <button className="start-button">
              ChatGPT ile ara
            </button>
            <button className="start-button">
              ChatGPT ile konuş
            </button>
            <button className="start-button">
              Araştırma
            </button>
            <button className="start-button">
              Sora
            </button>
            <button className="start-button">
              Daha fazla
            </button>
          </div>
        </div>
      </div>
      <ParallaxLayout />
      <div className="middle-container">
        <div className="middle-container-baslik">
          <span>En son haberler</span>
        </div>
        <div className="middle-container-grid">
          <div className="middle-container-grid-box">
            <div className="middle-container-grid-box-image">
              <img src="https://images.ctfassets.net/kftzwdyauwt9/4kI9vj0fqjulxGa2sThTjz/e275f00fcc294d16490a12c882d65561/oai_GA_Stories_1.1__6_.png?w=1200&q=90&fm=png" alt="" />
            </div>
            <div className="middle-container-grid-box-text-box">
              <div className="middle-container-grid-box-kucuk-baslik">
                <span className="middle-container-grid-box-buyuk-text">Stargate, Oracle ile 4,5 GW'lık yeni bir anlaşma yaptı</span>
                <div className="middle-container-grid-box-alt-bilgi">
                  <span className='middle-container-grid-box-span'>Şirket</span> <span className='middle-container-grid-box-span' style={{ color: '#666666', marginLeft: '1em' }}>22 Tem 2025</span>
                </div>
              </div>
            </div>
          </div>
          <div className="middle-container-grid-box">
            <div className="middle-container-grid-box-image">
              <img src="https://images.ctfassets.net/kftzwdyauwt9/3SjnMKaSmFNlXjhIN5P2rC/db90af4fd96bb83f0be48c942e0efa54/oai_GA_Stories_1.1.png?w=1200&q=90&fm=png" alt="" />
            </div>
            <div className="middle-container-grid-box-text-box">
              <div className="middle-container-grid-box-kucuk-baslik">
                <span className="middle-container-grid-box-buyuk-text">Yapay zekanın gelecekte biyolojiyi nasıl tehtid ettiğini derledik</span>
                <div className="middle-container-grid-box-alt-bilgi">
                  <span className='middle-container-grid-box-span'>Güvenlik</span> <span className='middle-container-grid-box-span' style={{ color: '#666666', marginLeft: '1em' }}>18 Haz 2025</span>
                </div>
              </div>
            </div>
          </div>
          <div className="middle-container-grid-box">
            <div className="middle-container-grid-box-image">
              <img src="https://images.ctfassets.net/kftzwdyauwt9/7mxA6Nz8sMAyWaHE7PZcpA/e9e1cd86700761d1d899f49b9aa3547d/mattell-1.1.png?w=1200&q=90&fm=png" alt="" />
            </div>
            <div className="middle-container-grid-box-text-box">
              <div className="middle-container-grid-box-kucuk-baslik">
                <span className="middle-container-grid-box-buyuk-text">Mattel'in ikonik markalarıyla yapay zekanın büyüsü bir araya geliyor</span>
                <div className="middle-container-grid-box-alt-bilgi">
                  <span className='middle-container-grid-box-span'>Şirket</span> <span className='middle-container-grid-box-span' style={{ color: '#666666', marginLeft: '1em' }}>12 Haz 2025</span>
                </div>
              </div>
            </div>
          </div>
          <div className="middle-container-grid-box">
            <div className="middle-container-grid-box-image">
              <img src="https://images.ctfassets.net/kftzwdyauwt9/3repmGl4ll7LtJEotoSW5k/477e3b378c7e454cd616a8ac4ef7cb41/oai_GA_Stories_1.1__1_.png?w=1200&q=90&fm=png" alt="" />
            </div>
            <div className="middle-container-grid-box-text-box">
              <div className="middle-container-grid-box-kucuk-baslik">
                <span className="middle-container-grid-box-buyuk-text">Koordineli güvenlik açığı bildiriminin ölçeklendirilmesi</span>
                <div className="middle-container-grid-box-alt-bilgi">
                  <span className='middle-container-grid-box-span'>Veri Güvenliği</span> <span className='middle-container-grid-box-span' style={{ color: '#666666', marginLeft: '1em' }}>9 Haz 2025</span>
                </div>
              </div>
            </div>
          </div>
          <div className="middle-container-grid-box">
            <div className="middle-container-grid-box-image">
              <img src="https://images.ctfassets.net/kftzwdyauwt9/5NVvCGHPLTkDWcolTBiuQL/57f0378995e6c61efa7a6562c5f0b0db/oai_GA_Stories_1.1_v2.png?w=1920&q=90&fm=png" alt="" />
            </div>
            <div className="middle-container-grid-box-text-box">
              <div className="middle-container-grid-box-kucuk-baslik">
                <span className="middle-container-grid-box-buyuk-text">The New York Times'ın taleplerine yanıt verirken kullanıcı gizliliğini nasıl dikkate alıyoruz?</span>
                <div className="middle-container-grid-box-alt-bilgi">
                  <span className='middle-container-grid-box-span'>Veri Güvenliği</span> <span className='middle-container-grid-box-span' style={{ color: '#666666', marginLeft: '1em' }}>5 Haz 2025</span>
                </div>
              </div>
            </div>
          </div>

          <div className="middle-container-grid-box">
            <div className="middle-container-grid-box-image">
              <img src="https://images.ctfassets.net/kftzwdyauwt9/26hk65fa4fOWYv4GMRWgGL/98c0a24b18058093cf415abe2937b317/oai_GA_Stories_1.1__2_.png?w=1920&q=90&fm=png" alt="" />
            </div>
            <div className="middle-container-grid-box-text-box">
              <div className="middle-container-grid-box-kucuk-baslik">
                <span className="middle-container-grid-box-buyuk-text">OpenAI Almanyada</span>
                <div className="middle-container-grid-box-alt-bilgi">
                  <span className="middle-container-grid-box-span">Şirket</span>
                  <span className="middle-container-grid-box-span" style={{ color: '#666666', marginLeft: '1em' }}>22 May 2025</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="middle-container">
        <div className="middle-container-baslik">
          <span>Hikayeler</span>
        </div>
        <div className="hikayeler-container-grid">
          <div className="hikayeler-box">
            <video src="https://cdn.openai.com/ctf-cdn/Lyndon_Barrois___Sora.mp4" autoPlay loop muted playsInline className="hikayeler-video"></video>
            <div className="card-overlay">
              <div className="card-title">Lyndon Barrois ve Sora</div>
              <div className="card-meta">
                <span className="card-author">Sora</span>
                <span className="card-date">4 Ara 2024</span>
                <span className="card-reading-time">3 dakika okuma</span>
              </div>
            </div>
          </div>

          <div className="hikayeler-box">
            <img src="https://images.ctfassets.net/kftzwdyauwt9/16VYfNV8RPoKM0nqEG4OrP/5ba2052acfb2a64a141ad161f5b92a38/Ten_tiny_canvases_.jpg?w=1920&q=90&fm=png" alt="ChatGPT ile tırnak süsleri" />

            <div className="card-overlay">
              <div className="card-title">ChatGPT ile tırnak süsleri oluşturma</div>
              <div className="card-meta">
                <span className="card-author">ChatGPT</span>
                <div className="meta-separator"></div>
                <span className="card-date">4 Şub 2025</span>
                <div className="meta-separator"></div>
                <span className="card-reading-time">4 dakika okuma</span>
              </div>
            </div>

          </div>

          <div className="hikayeler-box">
            <img src="https://images.ctfassets.net/kftzwdyauwt9/RjA6hgCo6gPVKY91jdzg6/55bca90ce0324efd1e11ff24a0d455a6/Economics_and_reasoning_with_o1.jpg?w=1920&q=90&fm=png" alt="OpenAI o1 ile ekonomi ve akıl yürütme" />

            <div className="card-overlay">
              <div className="card-title">OpenAI o1 ile ekonomi ve akıl yürütme</div>
              <div className="card-meta">
                <span className="card-author">ChatGPT</span>
                <div className="meta-separator"></div>
                <span className="card-date">13 Eyl 2024</span>
                <div className="meta-separator"></div>
                <span className="card-reading-time">2 dakika okuma</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="middle-container">
        <div className="middle-container-baslik">
          En son araştırmalar
        </div>
        <div className="arastirmalar-container">
          <div className="arastirmalar-container-box">
            <img className='arastirmalar-image' src="https://images.ctfassets.net/kftzwdyauwt9/5EYCYHJn9zxYvRhRWhpwDf/27ff58b882723bec9b8d32ab78fcad19/TMP_Penda_Blog_1x1.png?w=1920&q=90&fm=png" alt="" />
            <div className="arastirmalar-text-box">
              <p className='arastirmalar-buyuk-yazi'>Penda Health ile AI Klinik Asistanın Geliştirilmesinde Öncülük</p>
              <div className="card-meta">
                <span className="card-author">Yayın</span>
                <span className="card-date">22 Tem 2025</span>
              </div>
            </div>
          </div>
          <div className="arastirmalar-container-box">
            <img className='arastirmalar-image' src="https://images.ctfassets.net/kftzwdyauwt9/5UA7skl48NpGWEJ6YX2KAF/83f72b08ff36722bb4788383289a79c0/oai_emergent_misalignment_blog_1x1.png?w=1200&q=90&fm=png" alt="" />
            <div className="arastirmalar-text-box">
              <p className='arastirmalar-buyuk-yazi'>Uyumsuzluk genellemesini anlamaya çalışmak ve önlemek</p>
              <div className="card-meta">
                <span className="card-author">Yayın</span>
                <span className="card-date">18 Haz 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="middle-container">
        <div className="middle-container-baslik">
          İş dünyası için OpenAI
        </div>
        <div className="is-dunyasi-container">
          <div className="is-dunyasi-box">
            <img className='is-dunyasi-image' src="https://images.ctfassets.net/kftzwdyauwt9/3ENpuoD5KB8oejWnO6md1b/52f63a73ffd0928cc87b5e072205221c/oai_invideo_1x1.png?w=1920&q=90&fm=png" alt="" />
            <div className="is-dunyasi-text-box">
              <p className='is-dunyasi-buyuk-yazi'>Invideo AI videoları 10 kat hızlı üretmek için OpenAI modellerini kullanıyor</p>
              <div className="card-meta">
                <span className="card-author">API</span>
              </div>
            </div>
          </div>
          <div className="is-dunyasi-box">
            <img className='is-dunyasi-image' src="https://images.ctfassets.net/kftzwdyauwt9/34tn7du9Vq4ZJdFkFXMCam/fdcf963dec13094b0db74e7166ca116c/oai_Genspark_hero_1x1.png?w=1920&q=90&fm=png" alt="" />
            <div className="is-dunyasi-text-box">
              <p className='is-dunyasi-buyuk-yazi'>GPT-4.1 ve Realtime API destekli, kodlama gerektirmeyen kişisel ajanlar</p>
              <div className="card-meta">
                <span className="card-author">API</span>
              </div>
            </div>
          </div>
          <div className="is-dunyasi-box">
            <img className='is-dunyasi-image' src="https://images.ctfassets.net/kftzwdyauwt9/3FFvZQe1XAebMCD2dir1T4/637ac9168f5cb5aa61b49cbaf6951fb1/oai_RetellAI_1x1__1_.png?w=1200&q=90&fm=png" alt="" />
            <div className="is-dunyasi-text-box">
              <p className='is-dunyasi-buyuk-yazi'>Kişiselleştirilebilir, no-code sesli araç otomasyonunu GPT-4o ile mümkün kılıyor</p>
              <div className="card-meta">
                <span className="card-author">API</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="middle-container">
        <div className="use-chatgpt">
          <span className='use-chatgpt-text'>ChatGPT kullanmaya başla</span>
          <button className="use-chatgpt-button">İndir</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
