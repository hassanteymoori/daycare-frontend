export function ContactPage() {
  return (
    <section className="page-section contact-layout">
      <article className="panel title-block">
        <p className="eyebrow">Contact us</p>
        <h1>Let us help with your childcare plan</h1>
        <p>
          Tell us your child&apos;s age and preferred start date. We respond within
          one business day.
        </p>
      </article>

      <form className="panel contact-card" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="parent-name">Parent Name</label>
        <input id="parent-name" placeholder="Your full name" />

        <label htmlFor="child-age">Child Age</label>
        <input id="child-age" placeholder="Example: 2 years old" />

        <label htmlFor="phone-number">Phone Number</label>
        <input id="phone-number" type="tel" placeholder="(555) 123-4567" />

        <button type="submit" className="btn btn-solid">
          Send Inquiry
        </button>

        <p className="muted">Call (555) 010-2026 or email hello@yaldachildcare.com</p>
      </form>
    </section>
  )
}