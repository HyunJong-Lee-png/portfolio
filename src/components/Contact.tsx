const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="mt-4">Feel free to reach out for collaborations or job opportunities!</p>
        <a href="mailto:your.email@example.com" className="mt-4 text-blue-500 block">
          your.email@example.com
        </a>
      </div>
    </section>
  );
};

export default Contact;