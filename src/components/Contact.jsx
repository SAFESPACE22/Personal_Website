
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        const serviceId = "service_tkue2bj";
        const templateId = "template_oxn6uyg";
        const publicKey = "ysfOa6yMydPzuJjln";

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            to_name: "Tyler Vuong", // Your name
            message: formData.message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Message sent successfully!");
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.log("FAILED...", error);
                alert("Something went wrong: " + JSON.stringify(error));
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-obsidian transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4 transition-colors">Get In Touch</h2>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors">Have a project in mind? Let's talk.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-black dark:text-white mb-6 transition-colors">Contact Info</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                                <div className="w-12 h-12 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center text-black dark:text-white transition-colors">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="text-black dark:text-white font-medium transition-colors">tylervuong03@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                                <div className="w-12 h-12 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center text-black dark:text-white transition-colors">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <p className="text-black dark:text-white font-medium transition-colors">+1 (405) 868-8439</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                                <div className="w-12 h-12 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center text-black dark:text-white transition-colors">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="text-black dark:text-white font-medium transition-colors">Oklahoma City, OK</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white focus:bg-black/10 dark:focus:bg-white/10 transition-colors"
                                    placeholder="Tyler Vuong"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white focus:bg-black/10 dark:focus:bg-white/10 transition-colors"
                                    placeholder="tyler@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Message</label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-black dark:text-white h-32 resize-none focus:outline-none focus:border-black dark:focus:border-white focus:bg-black/10 dark:focus:bg-white/10 transition-colors"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSending}
                                className={`w-full bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isSending ? "Sending..." : "Send Message"} <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
