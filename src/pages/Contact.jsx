import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { site } from '../data/site';
import './Contact.css';

const projectTypes = ['Website', '3D / WebGL experience', 'Branding and identity', 'Online store', 'Something else'];
const budgets = ['Under GBP 5k', 'GBP 5k to 15k', 'GBP 15k to 40k', 'GBP 40k+', 'Not sure yet'];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', type: projectTypes[0], budget: budgets[0], message: '',
  });
  const [sent, setSent] = useState(false);
  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const submit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`New project enquiry: ${form.name || 'Lovelace'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.type}\nBudget: ${form.budget}\n\n${form.message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <PageHeader
        index="04"
        label="Contact"
        title={<>Tell us about<br /><em>your project.</em></>}
        intro="Share a few details about what you need. We normally reply within two working days."
        meta={[
          { k: 'Email', v: site.email },
          { k: 'Studios', v: site.locations.join(' / ') },
          { k: 'Response', v: 'Within two working days' },
        ]}
      />

      <section className="contact-page section">
        <div className="container contact-page__grid">
          <div className="contact-page__intro">
            <p className="eyebrow">Start here</p>
            <h2>What are you hoping to make?</h2>
            <p>A clear brief helps, but it is fine if the idea is still taking shape.</p>
          </div>

          <div className="contact-page__form-wrap">
            {sent ? (
              <div className="contact-sent">
                <span className="mono">Message prepared</span>
                <h2>Your email is ready to send.</h2>
                <p>Your email app should have opened with the project details. If it did not, use the address below.</p>
                <a href={`mailto:${site.email}`} className="link">{site.email} <span className="link__arrow">↗</span></a>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit}>
                <div className="contact-form__field">
                  <label htmlFor="name" className="mono">Name</label>
                  <input id="name" required value={form.name} onChange={update('name')} placeholder="Your name" />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="email" className="mono">Email</label>
                  <input id="email" type="email" required value={form.email} onChange={update('email')} placeholder="you@company.com" />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="type" className="mono">Project type</label>
                  <select id="type" value={form.type} onChange={update('type')}>
                    {projectTypes.map((type) => <option key={type}>{type}</option>)}
                  </select>
                </div>
                <div className="contact-form__field">
                  <label htmlFor="budget" className="mono">Budget</label>
                  <select id="budget" value={form.budget} onChange={update('budget')}>
                    {budgets.map((budget) => <option key={budget}>{budget}</option>)}
                  </select>
                </div>
                <div className="contact-form__field contact-form__field--full">
                  <label htmlFor="message" className="mono">What are you building?</label>
                  <textarea id="message" required rows="6" value={form.message} onChange={update('message')} placeholder="Tell us about the idea, the problem and what a good result would look like." />
                </div>
                <button type="submit" className="btn">Prepare enquiry <span className="btn__dot" /></button>
              </form>
            )}
          </div>

          <aside className="contact-page__aside" data-theme="dark">
            <div>
              <span className="mono">Write directly</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div>
              <span className="mono">Studios</span>
              <p>{site.locations.join(' / ')}</p>
            </div>
            <div>
              <span className="mono">Elsewhere</span>
              {site.social.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} ↗</a>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
