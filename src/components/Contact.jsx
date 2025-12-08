
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

        // Create a temporary object that matches EmailJS template variables
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
        <section id="contact" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <p className="text-slate-400">Have a project in mind? Let's talk.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-400">
                                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-cyan-400">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Email</p>
                                    <p className="text-white font-medium">hello@tylervuong.dev</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-slate-400">
                                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-cyan-400">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Phone</p>
                                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-slate-400">
                                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-cyan-400">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Location</p>
                                    <p className="text-white font-medium">San Francisco, CA</p>
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
                                <label className="text-sm text-slate-400">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-slate-400">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-slate-400">Message</label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white h-32 resize-none focus:outline-none focus:border-cyan-500 transition-colors"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSending}
                                className={`w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
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
