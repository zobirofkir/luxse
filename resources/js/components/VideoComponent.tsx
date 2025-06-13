const VideoComponent = () => {
  return (
    <section className="bg-white text-black py-24">
      <div className="max-w-full mx-auto text-center px-4">
        <h2 className="text-4xl font-black uppercase mb-12 tracking-widest">
          Découvrez Notre Artisanat
        </h2>

        <div className="relative overflow-hidden rounded-3xl shadow-lg border border-black mx-auto max-w-full aspect-video">
          <iframe
            className="w-full h-[80%] rounded-3xl"
            src="https://www.youtube.com/embed/kYOP52BUZTI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoComponent;
