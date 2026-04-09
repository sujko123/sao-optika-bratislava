import { Instagram } from 'lucide-react';

const SaoFooter = () => {
  return (
    <footer id="contact" className="border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        {/* Opening hours */}
        <div>
          <h3 className="text-lg font-bold text-foreground mb-4 tracking-wider">OTVÁRACIE HODINY</h3>
          <div className="space-y-3 text-foreground">
            <div>
              <p>Pondelok - Piatok</p>
              <p className="font-medium">10 - 18</p>
            </div>
            <div>
              <p>Sobota</p>
              <p className="font-medium">10 - 13</p>
            </div>
            <div>
              <p>Nedeľa</p>
              <p className="font-medium">Zatvorené</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden h-64 md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.8!2d17.1!3d48.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA5JzAwLjAiTiAxN8KwMDYnMDAuMCJF!5e0!3m2!1ssk!2ssk!4v1"
            className="w-full h-full min-h-[250px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="SAO Optika Mapa"
          />
        </div>

        {/* Contact / Logo */}
        <div className="flex flex-col items-center md:items-start">
          {/* Mini SAO logo */}
          <div className="flex -space-x-1 mb-3">
            {['S', 'A', 'O'].map((l) => (
              <div key={l} className="w-10 h-10 rounded-full bg-sao-pink flex items-center justify-center text-foreground font-semibold text-sm">
                {l}
              </div>
            ))}
          </div>

          <p className="text-muted-foreground italic mb-4 text-sm">"Vidieť jasnejšie, žiť krajšie"</p>
          <p className="text-foreground font-semibold mb-1">+421 944 945 636</p>
          <p className="text-foreground mb-4">info@saooptika.sk</p>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <Instagram size={18} className="text-background" />
          </a>
        </div>
      </div>

      {/* Address */}
      <div className="text-center mt-10 text-muted-foreground text-sm">
        <p className="font-medium text-foreground">SAO Optika Bratislava</p>
        <p>Palisády 736/46, 811 06 Slovensko</p>
      </div>
    </footer>
  );
};

export default SaoFooter;
