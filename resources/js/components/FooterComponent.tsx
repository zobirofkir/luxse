import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4 uppercase tracking-widest">À Propos</h3>
          <p className="text-sm leading-relaxed">
            Chez Diamant Éclat, nous offrons des bijoux en diamant d’exception, alliant
            élégance et savoir-faire. Découvrez nos collections exclusives et trouvez le bijou parfait.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 uppercase tracking-widest">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>Téléphone : <a href="tel:+212612345678" className="underline hover:text-gray-300">+212 6 12 34 56 78</a></li>
            <li>Email : <a href="mailto:contact@diamanteclat.com" className="underline hover:text-gray-300">contact@diamanteclat.com</a></li>
            <li>Adresse : 123 Rue des Diamants, Casablanca, Maroc</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 uppercase tracking-widest">Suivez-Nous</h3>
          <div className="flex space-x-6 text-white">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="hover:text-gray-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.098 2.797.142v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.676V1.325C24 .6 23.4 0 22.675 0z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="hover:text-gray-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37a4 4 0 11-7.93 1.13 4 4 0 017.93-1.13z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" aria-label="Twitter" className="hover:text-gray-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.16 9.16 0 01-2.91 1.12 4.52 4.52 0 00-7.69 4.12 12.82 12.82 0 01-9.29-4.72 4.52 4.52 0 001.4 6.04 4.48 4.48 0 01-2.05-.57v.06a4.52 4.52 0 003.63 4.43 4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.22 3.13A9.05 9.05 0 012 19.54a12.73 12.73 0 006.92 2.02c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.42-.02-.63A9.18 9.18 0 0023 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/30 pt-6 text-center text-xs text-white/70 space-y-1">
        <div>&copy; {new Date().getFullYear()} Diamant Éclat. Tous droits réservés.</div>
        <div>Créé par <a href="https://nl-digitalagency.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">NL Digital Agency</a></div>
      </div>
    </footer>
  );
};

export default FooterComponent;
