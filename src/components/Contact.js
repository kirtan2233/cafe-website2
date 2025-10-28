import React, {useState} from 'react';

export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',message:''});
  const submitForm = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    setForm({name:'',email:'',message:''});
  };
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={submitForm}>
        <input type="text" placeholder="Your Name" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
        <input type="email" placeholder="Your Email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        <textarea placeholder="Your Message" required value={form.message} onChange={e=>setForm({...form,message:e.target.value})}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
